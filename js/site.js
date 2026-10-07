/* bmiest.be: the encounter list, and the live bits on top of a page that
   already works without them.

   Sources (all public, CORS open, no keys):
     - LIVE and the stream title   DecAPI (decapi.me), every 2 minutes
     - Shiftheal                   Raider.IO character profile
     - where the guild is          racetodutchfirst.nl data/race.json (the
                                   race's own standing), else Raider.IO's guild
                                   raid_encounters for the kills
     - the boss behind Shiftheal   img/boss/ via js/bossart.js

   Everything from outside goes in through textContent or an attribute, never
   innerHTML. Every block fails on its own: no race is no boss and the tier
   name, no Raider.IO is the snapshot render without numbers, no DecAPI is
   no LIVE. Nothing stale is shown as live. */
(function(){
'use strict';

var CHANNEL = 'bmiest';
var GUILD = { region: 'eu', realm: 'draenor', name: 'Kelderklasse' };
var CHAR = { region: 'eu', realm: 'ragnaros', name: 'shiftheal' };
var RAID = 'the-venomous-abyss';
/* The tier in journal order, for the Raider.IO fallback (which only lists kills). */
var TIER = ["Nek'zali the Soulcoiler", 'Entombed Sentinels', 'The Lost Explorers', 'Vashnik the Malignant',
            'Sszorak', 'The Twin Fangs', 'The Coiled Altar', "Ula'tek"];
var RACE_URL = 'https://racetodutchfirst.nl/data/race.json';
var RAID_DAYS = [3, 0];            // Wednesday and Sunday, 20:00-23:00 Europe/Brussels
var RM = matchMedia('(prefers-reduced-motion: reduce)');
var WIDE = matchMedia('(min-width: 1100px)');

var $ = function(id){ return document.getElementById(id); };
var I, t;

function el(tag, cls, text){
  var n = document.createElement(tag);
  if(cls) n.className = cls;
  if(text != null) n.textContent = text;
  return n;
}
function getJSON(url, ms){
  var c = new AbortController(), timer = setTimeout(function(){ c.abort(); }, ms || 8000);
  return fetch(url, { signal: c.signal, cache: 'no-cache' }).then(function(r){
    clearTimeout(timer);
    if(!r.ok) throw new Error(r.status + ' ' + url);
    return r.json();
  });
}
function getText(url){
  return fetch(url, { cache: 'no-cache' }).then(function(r){
    if(!r.ok) throw new Error(r.status + ' ' + url);
    return r.text();
  });
}

/* ==== the encounter list =================================================
   From 1100px: tabs (one entry on the stage, arrow keys move, the hash names
   the entry so every entry is linkable). Narrower: plain links to stacked
   sections, the way the page works without JavaScript. */
var tabs = [], panels = [], active = 0;

function setupTabs(){
  var list = $('journal');
  tabs = Array.prototype.slice.call(list.querySelectorAll('.enc'));
  panels = tabs.map(function(a){ return $(a.hash.slice(1)); });
  var start = Math.max(0, tabs.findIndex(function(a){ return a.hash === location.hash; }));

  tabs.forEach(function(a, i){
    a.addEventListener('click', function(e){
      if(!WIDE.matches) return;
      e.preventDefault();
      select(i, true);
    });
    a.addEventListener('keydown', function(e){
      if(!WIDE.matches) return;
      var k = e.key, n = null;
      if(k === 'ArrowDown' || k === 'ArrowRight') n = (i + 1) % tabs.length;
      else if(k === 'ArrowUp' || k === 'ArrowLeft') n = (i - 1 + tabs.length) % tabs.length;
      else if(k === 'Home') n = 0;
      else if(k === 'End') n = tabs.length - 1;
      if(n == null) return;
      e.preventDefault();
      select(n, true);
      tabs[n].focus();
    });
  });

  /* The hub's plates are links to the entries: on wide screens they switch the tab. */
  document.querySelectorAll('.plate').forEach(function(a){
    a.addEventListener('click', function(e){
      if(!WIDE.matches) return;
      var i = tabs.findIndex(function(t){ return t.hash === a.hash; });
      if(i < 0) return;
      e.preventDefault();
      select(i, true);
      tabs[i].focus();
    });
  });

  window.addEventListener('hashchange', function(){
    var i = tabs.findIndex(function(a){ return a.hash === location.hash; });
    if(i >= 0 && WIDE.matches) select(i, false);
  });

  function mode(){
    var on = WIDE.matches, list = $('journal');
    document.body.classList.toggle('is-tabs', on);
    if(on){ list.setAttribute('role', 'tablist'); list.setAttribute('aria-orientation', 'vertical'); }
    else { list.removeAttribute('role'); list.removeAttribute('aria-orientation'); }
    tabs.forEach(function(a, i){
      var li = a.parentNode, p = panels[i];
      if(on){
        li.setAttribute('role', 'presentation');
        a.setAttribute('role', 'tab');
        a.setAttribute('aria-controls', p.id);
        a.removeAttribute('aria-current');
        p.setAttribute('role', 'tabpanel');
        p.setAttribute('aria-labelledby', a.id);
      } else {
        li.removeAttribute('role');
        ['role', 'aria-controls', 'aria-selected', 'tabindex'].forEach(function(x){ a.removeAttribute(x); });
        p.removeAttribute('role');
        p.setAttribute('aria-labelledby', p.querySelector('.entry__h').id);
        p.classList.remove('is-active', 'is-in');
        a.setAttribute('aria-current', String(i === active));
      }
    });
    if(on) select(active, false, true);
  }
  active = start;
  /* The page opens at the top: a hash picks the entry, it doesn't scroll the guide away. */
  if(location.hash && WIDE.matches){ history.scrollRestoration = 'manual'; window.addEventListener('load', function(){ setTimeout(function(){ window.scrollTo(0, 0); }, 0); }); }
  WIDE.addEventListener('change', mode);
  mode();
}

function select(i, push, quiet){
  var changed = i !== active;
  active = i;
  tabs.forEach(function(a, j){
    var on = j === i;
    a.setAttribute('aria-selected', String(on));
    a.setAttribute('tabindex', on ? '0' : '-1');
    panels[j].classList.toggle('is-active', on);
    if(!on) panels[j].classList.remove('is-in');
  });
  var p = panels[i];
  if(changed && !quiet && !RM.matches){
    p.classList.remove('is-in');
    void p.offsetWidth;            // restart the wipe
    p.classList.add('is-in');
  }
  if(push){
    var h = tabs[i].hash;
    if(location.hash !== h) history.pushState(null, '', i === 0 ? location.pathname : h);
  }
}

/* ==== next raid ==========================================================
   On the Brussels clock, whatever the visitor's own timezone. */
function brussels(){
  var parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/Brussels', weekday: 'short', hour: '2-digit', minute: '2-digit', hourCycle: 'h23'
  }).formatToParts(new Date());
  var o = {}; parts.forEach(function(p){ o[p.type] = p.value; });
  return { day: ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].indexOf(o.weekday), min: (+o.hour) * 60 + (+o.minute) };
}
var live = false;
function paintNext(){
  var now = brussels(), out;
  if(live){ $('nextRaid').textContent = t('liveSub'); return; }
  if(RAID_DAYS.indexOf(now.day) >= 0 && now.min >= 1200 && now.min < 1380){
    out = t('raiding');
  } else {
    var d = 0;
    while(d < 8){
      var day = (now.day + d) % 7;
      if(RAID_DAYS.indexOf(day) >= 0 && (d > 0 || now.min < 1200)) break;
      d++;
    }
    var mins = d * 1440 + 1200 - now.min;
    var when = d === 0 ? t('tonight', { t: '20:00' })
             : d === 1 ? t('tomorrow', { t: '20:00' })
             : t('day', { d: t('days')[(now.day + d) % 7], t: '20:00' });
    out = mins < 24 * 60 ? when + ' · ' + t('in', { h: Math.floor(mins / 60), m: mins % 60 }) : when;
  }
  $('nextRaid').textContent = out;
}

/* ==== LIVE ===============================================================
   DecAPI answers "bmiest is offline" or "2 hours, 14 minutes, 7 seconds". */
var title = null;
function paintLive(){
  $('bugLive').hidden = !live;
  document.body.classList.toggle('is-live', live);
  document.querySelectorAll('.js-watch').forEach(function(btn){ btn.classList.toggle('btn--live', live); });
  document.querySelectorAll('.js-watch-label').forEach(function(n){
    n.textContent = live ? I.str('watchLive') || 'Live now · watch' : I.str('watch');
  });
  paintNext();
  $('hStreamA').textContent = t('hA');
  $('hStreamB').textContent = live ? t('hLive') : t('hOff');
  var sub = $('encStreamSub');
  sub.textContent = live ? t('liveSub') : I.str('e.stream.s');
  var tl = $('streamTitle');
  tl.hidden = !(live && title);
  if(live && title){ tl.dataset.k = t('onAir'); tl.textContent = title; }
}
function pollLive(){
  getText('https://decapi.me/twitch/uptime/' + CHANNEL).then(function(s){
    live = !/offline|not live|error|unable|not found/i.test(s) && /\d/.test(s);
    if(!live){ title = null; paintLive(); return; }
    return getText('https://decapi.me/twitch/title/' + CHANNEL).then(function(x){
      x = String(x || '').trim();
      title = x && !/offline|not found|error/i.test(x) ? x : null;
      paintLive();
    });
  }).catch(function(){ live = false; paintLive(); });
}

/* ==== Shiftheal ============================================================
   Blizzard's full render sits next to the avatar thumbnail: same base, with
   -main-raw.png. The snapshot URL in the HTML is the fallback. */
var who = null;
function paintChar(){
  if(!who) return;
  var bits = [who.spec + ' ' + who.klass];
  if(who.ilvl) bits.push(who.ilvl.toFixed(1) + ' ilvl');
  $('charLine').textContent = bits.join(' · ');
}
function loadChar(){
  var url = 'https://raider.io/api/v1/characters/profile?region=' + CHAR.region + '&realm=' + CHAR.realm +
            '&name=' + CHAR.name + '&fields=gear';
  getJSON(url).then(function(d){
    who = { spec: d.active_spec_name, klass: d.class, ilvl: d.gear && d.gear.item_level_equipped };
    var plain = String(d.thumbnail_url || '').split('?')[0], base = plain.replace(/-avatar\.jpg$/, '');
    if(base !== plain){
      var img = $('figImg'), src = base + '-main-raw.png';
      if(img.src !== src){ var pre = new Image(); pre.onload = function(){ img.src = src; }; pre.src = src; }
    }
    paintChar();
  }).catch(function(e){ console.warn('[raider.io]', e.message); });
}

/* ==== where the guild is ================================================= */
var prog = null;   // { current, best, pulls, kills, total, rank, count, leader, kills list, firsts }

function bossArt(name){
  var a = window.BossArt; if(!a || !name) return [];
  var enc = a.byName[String(name).toLowerCase()];
  return ((enc && a.byEncounter[enc]) || []).map(function(x){
    var m = /creature-display-(\d+)\.jpg$/.exec(x.img || ''); return m && 'img/boss/creature-display-' + m[1] + '.png';
  }).filter(Boolean).slice(0, 2);
}
function paintBoss(name){
  var box = $('boss'); box.textContent = '';
  box.className = 'boss';
  var srcs = bossArt(name);
  if(srcs.length > 1) box.classList.add('boss--pair');
  srcs.forEach(function(src){
    var img = el('img'); img.alt = ''; img.decoding = 'async';
    img.onload = function(){
      img.style.setProperty('--nat-h', img.naturalHeight + 'px');
      if(srcs.length === 1 && img.naturalWidth / img.naturalHeight > 2) box.classList.add('boss--wide');
      img.classList.add('is-on');
    };
    img.src = src;
    box.appendChild(img);
  });
}

function paintProg(){
  if(!prog) return;
  var on = $('nowOn'); on.textContent = '';
  if(prog.ce){
    on.appendChild(el('b', null, 'Cutting Edge'));
  } else if(prog.current){
    on.appendChild(document.createTextNode(prog.current + ' · '));
    on.appendChild(el('span', 'mono', t('leaderKills', { k: prog.kills, n: prog.total })));
    if(prog.best != null) on.appendChild(document.createTextNode(' · ' + t('best', { p: prog.best.toFixed(1) })));
  }
  if(prog.leader){
    var L = $('raceLeader'); L.removeAttribute('data-i18n'); L.textContent = '#1 ';
    L.appendChild(el('b', null, prog.leader.name));
    L.appendChild(document.createTextNode(' · '));
    L.appendChild(el('span', 'mono', t('leaderKills', { k: prog.leader.kills, n: prog.total })));
  }
  if(prog.count){
    var G = $('raceGuilds'); G.removeAttribute('data-i18n');
    G.textContent = I.lang === 'nl' ? prog.count + ' Nederlandstalige guilds' : prog.count + ' Dutch guilds';
  }
  paintTicker();
}

function fromRace(d){
  var list = d.guilds || [], me = list.filter(function(g){ return g.name === GUILD.name; })[0];
  if(!me) throw new Error('guild not in race');
  var lead = list.filter(function(g){ return g.rank === 1; })[0];
  var firsts = {};
  ((d.tier && d.tier.raids) || []).forEach(function(r){
    if(r.slug !== RAID) return;
    r.bosses.forEach(function(b){ if(b.firstKill && b.firstKill.guild === GUILD.name) firsts[b.slug] = true; });
  });
  return {
    current: me.current && me.current.name,
    best: me.current && me.current.bestPercent,
    kills: me.mythicKills, total: me.totalBosses || (d.tier && d.tier.totalBosses),
    ce: !!me.ceKilledAt,
    leader: lead ? { name: lead.name, kills: lead.mythicKills } : null,
    count: list.length,
    killed: (me.bosses || []).filter(function(b){ return b.raid === RAID && b.state === 'killed'; })
      .map(function(b){ return { slug: b.slug, name: b.name, at: b.defeatedAt }; }),
    firsts: firsts
  };
}
function fromRio(d){
  var killed = (d.raid_encounters || []).filter(function(b){ return b.defeatedAt; });
  var done = {}; killed.forEach(function(b){ done[b.name.toLowerCase()] = true; });
  var next = (d.raid_encounters || []).filter(function(b){ return !b.defeatedAt; })[0];
  var rp = (d.raid_progression || {})[RAID] || {};
  var nextName = next ? next.name : TIER.filter(function(n){ return !done[n.toLowerCase()]; })[0] || null;
  return {
    current: nextName, best: null,
    kills: rp.mythic_bosses_killed, total: rp.total_bosses,
    ce: rp.total_bosses && rp.mythic_bosses_killed === rp.total_bosses,
    leader: null, count: null,
    killed: killed.map(function(b){ return { slug: b.slug, name: b.name, at: b.defeatedAt }; }),
    firsts: {}
  };
}
function loadProg(){
  getJSON(RACE_URL).then(fromRace).catch(function(e){
    console.warn('[race]', e.message, '- falling back to Raider.IO');
    var url = 'https://raider.io/api/v1/guilds/profile?region=' + GUILD.region + '&realm=' + GUILD.realm +
              '&name=' + GUILD.name + '&fields=raid_progression,raid_encounters:' + RAID + ':mythic';
    return getJSON(url).then(fromRio);
  }).then(function(p){
    prog = p;
    paintBoss(p.ce ? "Ula'tek" : p.current);
    paintProg();
  }).catch(function(e){ console.warn('[progress]', e.message); });
}

/* ==== ticker: the guild's Mythic kills this tier, newest first =========== */
function paintTicker(){
  if(!prog || !prog.killed.length) return;
  var list = $('tickerList'); list.textContent = '';
  var kills = prog.killed.slice().sort(function(a, b){ return new Date(b.at) - new Date(a.at); });
  var fmt = new Intl.DateTimeFormat(I.lang === 'nl' ? 'nl-BE' : 'en-GB', { day: 'numeric', month: 'short', timeZone: 'Europe/Brussels' });
  for(var pass = 0; pass < 2; pass++){
    kills.forEach(function(k){
      var li = el('li', 'tk');
      if(pass) li.setAttribute('aria-hidden', 'true');
      var mark = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      var use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
      use.setAttribute('href', '#i-check'); mark.appendChild(use); mark.setAttribute('aria-hidden', 'true');
      li.appendChild(mark);
      li.appendChild(el('b', null, k.name));
      li.appendChild(el('span', 'mono', fmt.format(new Date(k.at))));
      var first = prog.firsts[k.slug];
      li.appendChild(el('span', 'tk__t' + (first ? ' tk__t--gold' : ''), first ? t('firstNL') : t('mythic')));
      list.appendChild(li);
    });
  }
  $('ticker').style.setProperty('--tick-s', Math.max(28, kills.length * 9) + 's');
  $('ticker').hidden = false;
}

document.addEventListener('DOMContentLoaded', function(){
  I = window.I18N; t = I.t;
  setupTabs();
  paintNext(); setInterval(paintNext, 30000);
  pollLive(); setInterval(pollLive, 120000);
  loadChar();
  loadProg();
  I.onChange(function(){ paintNext(); paintLive(); paintChar(); paintProg(); });
});
})();
