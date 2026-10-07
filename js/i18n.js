/* Strings in English (the HTML) and Dutch. The language follows the browser
   (Dutch for nl*, English otherwise) until the visitor picks one with NL | EN;
   that choice is remembered. Game names (guilds, raids, bosses, characters)
   are never translated. Every string goes in with textContent. */
(function(){
'use strict';

var NL = {
  'skip': 'Naar de gids',
  'live': 'Live',
  'lead': 'World of Warcraft-raider op Twitch die de tools achter de stream zelf bouwt, en ze hier laat zien.',
  'e.hub': 'Overzicht',
  'e.hub.s': '4 tools · 1 stream',
  'h.hubA': 'Gebouwd voor de raid,',
  'h.hubB': 'door de raider',
  'p.hub': 'Alles hier draait echt op raidavonden: de overlay op stream, de race op de schermen van Nederlandse guilds, de wishlist voor elke raid. Kies een tool om hem aan het werk te zien.',
  's.overlay': 'De OBS-overlay waar de stream op draait',
  's.race': 'Live race van Nederlandse guilds naar Cutting Edge',
  's.wishlist': 'Je WoWAudit-wishlist, elke dag ingevuld',
  's.design': 'Eén look voor alles, ook deze pagina',
  'journal': 'Avonturengids',
  'e.stream': 'De stream',
  'e.stream.s': 'wo + zo · 20:00',
  'e.overlay': 'Streamoverlay',
  'e.wishlist': 'Wishlist-updater',
  'e.design': 'Designtaal',
  'p.stream': 'Mythic progressie met Kelderklasse, healend als Shiftheal, de Holy Priest. De race naar Dutch first staat de hele avond in beeld.',
  'a.next': 'Volgende raid',
  'a.on': 'Nu op',
  'watch': 'Kijk op Twitch',
  'watchLive': 'Nu live · kijk mee',
  'clips': 'Clips',
  'alt.overlay': 'Het starting-soon-scherm van de overlay in demomodus: Shiftheal en Bhikhu naast een aftelklok, met het raidschema, links en recente events in banden eronder.',
  'cap.demo': 'Demomodus',
  'cap.live': 'Live site',
  'cap.drawn': 'Getekend uit tokens.css',
  'p.overlay': 'De OBS-overlay waar dit kanaal op draait: banden over de volle breedte rond een ultrawide spelvenster, een raidkaart uit Warcraft Logs en Raider.IO, en vuurwerk als een boss sneuvelt.',
  'a.canvas': 'Canvas',
  'a.data': 'Data',
  'a.licence': 'Licentie',
  'open.overlay': 'Bekijk elk scherm',
  'source': 'Broncode',
  'alt.race': "Race to Dutch First: de vraag 'Wie haalt als eerste Cutting Edge?' boven de stand van de Nederlandse guilds, met de boss waar ze op zitten erachter.",
  'p.race': 'Welke Nederlandstalige guild haalt als eerste Cutting Edge? Een live tracker voor elke Nederlandstalige guild, uit Raider.IO en Warcraft Logs, elk half uur ververst op raidavonden.',
  'a.leader': 'Stand',
  'v.standing': 'live op racetodutchfirst.nl',
  'bugDay': 'wo + zo 20:00',
  'a.guilds': 'Guilds',
  'v.allDutch': 'elke Nederlandstalige guild',
  'v.guildsN': '{n} Nederlandstalige guilds',
  'a.refresh': 'Ververst',
  'v.refresh': 'elk half uur op raidavonden',
  'open.race': 'Volg de race',
  'alt.wishlist': 'Het wishlist-dashboard: de raid van vanavond om 20:00, de upgrades die elke boss voor Shiftheal kan droppen, en de geschiedenis van de runs.',
  'p.wishlist': 'Vult je WoWAudit-wishlist in vanuit de dagelijkse QE Live-rapporten, want iedereen vergeet het voor de raid en de officers worden boos. Een dashboard toont wat elke boss vanavond voor je dropt.',
  'a.runs': 'Draait',
  'v.daily': 'dagelijks, op GitHub Actions',
  'a.covers': 'Dekt',
  'a.for': 'Voor',
  'v.anyGuild': 'elke WoWAudit-guild',
  'open.wishlist': 'Open het dashboard',
  'r.jade': 'live, merk, OK',
  'r.goldN': 'Goud',
  'r.gold': 'alleen als het verdiend is',
  'r.redN': 'Rood',
  'r.red': 'in de lucht, verder niets',
  'r.rose': 'te laat of mislukt',
  'p.design': 'Eén taal voor de overlay, de race en de wishlist: vlakke inkt, schuine randen, jade voor live en goud alleen als het verdiend is. Deze pagina is er ook mee gebouwd.',
  'a.type': 'Letters',
  'a.shape': 'Vorm',
  'v.shape': 'één schuine kant, achteraan',
  'a.used': 'Gebruikt door',
  'v.used': '3 producten + deze pagina',
  'open.design': 'Lees DESIGN.md',
  'kills': 'Mythic kills',
  'foot': 'bmiest · zelf gebouwd in de bmiest-designtaal',
  'pageSource': 'Broncode van deze pagina'
};

/* Strings only JavaScript writes, in both languages. */
var DYN = {
  en: {
    tonight: 'tonight {t}', tomorrow: 'tomorrow {t}', day: '{d} {t}', raiding: 'raiding now, until 23:00',
    in: 'in {h} h {m} min', liveSub: 'Live now', onAir: 'On air',
    firstNL: 'first Dutch kill', mythic: 'Mythic', best: 'best {p}%', pulls: '{n} pulls',
    rank: '#{r} of {n}', leaderKills: '{k}/{n} M', titleLang: 'Language',
    hA: 'Raid night,', hOff: 'Wed + Sun', hLive: 'live now',
    days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  },
  nl: {
    tonight: 'vanavond {t}', tomorrow: 'morgen {t}', day: '{d} {t}', raiding: 'nu aan het raiden, tot 23:00',
    in: 'over {h} u {m} min', liveSub: 'Nu live', onAir: 'In de lucht',
    firstNL: 'eerste Nederlandse kill', mythic: 'Mythic', best: 'beste {p}%', pulls: '{n} pulls',
    rank: '#{r} van {n}', leaderKills: '{k}/{n} M', titleLang: 'Taal',
    hA: 'Raidavond,', hOff: 'wo + zo', hLive: 'nu live',
    days: ['zo', 'ma', 'di', 'wo', 'do', 'vr', 'za']
  }
};

var EN = {};
var KEY = 'bmiest.lang';
var listeners = [];

function stored(){ try { return localStorage.getItem(KEY); } catch(e){ return null; } }
function store(l){ try { localStorage.setItem(KEY, l); } catch(e){} }

function pick(){
  var s = stored();
  if(s === 'nl' || s === 'en') return s;
  return /^nl\b/i.test(navigator.language || '') ? 'nl' : 'en';
}

function capture(){
  /* The English strings are the ones in the HTML: keep them before the first switch. */
  document.querySelectorAll('[data-i18n]').forEach(function(n){ EN[n.dataset.i18n] = n.textContent; });
  document.querySelectorAll('[data-i18n-alt]').forEach(function(n){ EN[n.dataset.i18nAlt] = n.getAttribute('alt'); });
}

function apply(lang){
  var T = lang === 'nl' ? NL : EN;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(function(n){
    var s = T[n.dataset.i18n]; if(s != null) n.textContent = s;
  });
  document.querySelectorAll('[data-i18n-alt]').forEach(function(n){
    var s = T[n.dataset.i18nAlt]; if(s != null) n.setAttribute('alt', s);
  });
  document.querySelectorAll('.lang-switch button').forEach(function(b){
    b.setAttribute('aria-pressed', String(b.dataset.lang === lang));
  });
  var g = document.querySelector('.lang-switch');
  if(g) g.setAttribute('aria-label', DYN[lang].titleLang);
  I18N.lang = lang;
  listeners.forEach(function(fn){ fn(lang); });
}

function t(k, v){
  var s = (DYN[I18N.lang] || DYN.en)[k];
  if(s == null) s = DYN.en[k];
  if(typeof s !== 'string') return s;
  return s.replace(/\{(\w+)\}/g, function(_, x){ return v && v[x] != null ? v[x] : ''; });
}
function str(k){ return (I18N.lang === 'nl' ? NL : EN)[k]; }

var I18N = window.I18N = { lang: 'en', t: t, str: str, onChange: function(fn){ listeners.push(fn); } };

document.addEventListener('DOMContentLoaded', function(){
  capture();
  document.querySelectorAll('.lang-switch button').forEach(function(b){
    b.addEventListener('click', function(){ store(b.dataset.lang); apply(b.dataset.lang); });
  });
  apply(pick());
});
})();
