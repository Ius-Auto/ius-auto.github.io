'use strict';
document.documentElement.classList.add('js');

/* ================= Language =================
   Texts for all three languages come from i18n.js (built by `npm run pages`).
   Each language also has its own page for Google: / (ru), /ro/, /en/.
   Switching happens in place, without reloading, and the address bar follows. */
const I18N=window.IUS_I18N||{};
const LANGS=['ru','ro','en'],LANG_PATH={ru:'/',ro:'/ro/',en:'/en/'};
const PAGE_LANG=LANGS.includes(document.documentElement.lang)?document.documentElement.lang:'ru';
let language=PAGE_LANG;
const tr=key=>I18N[language]?.[key]??I18N.ru?.[key]??'';

/* ================= Contacts ================= */
const validNumber=v=>/^\+[1-9]\d{7,14}$/.test(v||'');
function updateContacts(){
 const c=window.IUS_CONTACTS||{},phone=validNumber(c.phone)?c.phone:'',viber=validNumber(c.viber)?c.viber:'';
 document.querySelectorAll('.primary-action').forEach(a=>{a.href=phone?'tel:'+phone:'#contacts'});
 document.querySelectorAll('.viber-action').forEach(a=>{a.href=viber?'viber://chat?number='+encodeURIComponent(viber):'#contacts'});
 const box=document.getElementById('contactLinks');box.replaceChildren();
 if(c.contactName){const p=document.createElement('p');p.className='contact-person';p.textContent=language==='ru'?c.contactName:'Vitalie';box.append(p)}
 if(phone){const a=document.createElement('a');a.className='contact-phone';a.href='tel:'+phone;a.textContent=c.phoneDisplay||phone;box.append(a)}
 if(viber){const a=document.createElement('a');a.className='button';a.href='viber://chat?number='+encodeURIComponent(viber);a.textContent={ru:'Написать в Viber',ro:'Scrieți-ne pe Viber',en:'Message on Viber'}[language];box.append(a)}
}

/* ================= Open / closed status (Chișinău time) ================= */
const HOURS={1:[9,18],2:[9,18],3:[9,18],4:[9,18],5:[9,18],6:[9,15],0:null};
const STATUS={
 ru:{open:'Открыто',until:t=>`Открыто · до ${t}`,today:t=>`Закрыто · откроемся в ${t}`,tomorrow:t=>`Закрыто · откроемся завтра в ${t}`,monday:t=>`Закрыто · откроемся в понедельник в ${t}`,closed:'Закрыто'},
 ro:{open:'Deschis acum',until:t=>`Deschis · până la ${t}`,today:t=>`Închis · deschidem la ${t}`,tomorrow:t=>`Închis · deschidem mâine la ${t}`,monday:t=>`Închis · deschidem luni la ${t}`,closed:'Închis acum'},
 en:{open:'Open now',until:t=>`Open · until ${t}`,today:t=>`Closed · opens at ${t}`,tomorrow:t=>`Closed · opens tomorrow at ${t}`,monday:t=>`Closed · opens Monday at ${t}`,closed:'Closed now'}
};
const pad=n=>String(n).padStart(2,'0');
function chisinauNow(){
 const parts=Object.fromEntries(new Intl.DateTimeFormat('en-US',{timeZone:'Europe/Chisinau',weekday:'short',hour:'numeric',minute:'numeric',hourCycle:'h23'}).formatToParts(new Date()).map(p=>[p.type,p.value]));
 return {day:['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].indexOf(parts.weekday),minutes:Number(parts.hour)*60+Number(parts.minute)};
}
function updateStatus(){
 let now;try{now=chisinauNow()}catch{return}
 const s=STATUS[language],h=HOURS[now.day];let open=false,text;
 if(h&&now.minutes>=h[0]*60&&now.minutes<h[1]*60){open=true;text=s.until(pad(h[1])+':00')}
 else if(h&&now.minutes<h[0]*60){text=s.today(pad(h[0])+':00')}
 else{let k=1;while(!HOURS[(now.day+k)%7])k++;const n=HOURS[(now.day+k)%7];text=(k===1?s.tomorrow:s.monday)(pad(n[0])+':00')}
 const pill=document.getElementById('statusPill'),chip=document.getElementById('statusChip');
 pill.classList.toggle('is-open',open);pill.classList.toggle('is-closed',!open);document.getElementById('statusText').textContent=text;
 chip.className='status-chip '+(open?'is-open':'is-closed');chip.textContent=open?s.open:s.closed;
 document.querySelectorAll('.schedule dl div').forEach(row=>row.classList.toggle('today',row.dataset.days.split(',').map(Number).includes(now.day)));
}

/* ================= Language switching ================= */
function renderChips(){
 const el=document.querySelector('.hero-chips');const parts=(tr('extraServices')||el.textContent).split('·').map(x=>x.trim()).filter(Boolean);
 el.replaceChildren(...parts.map(t=>{const s=document.createElement('span');s.className='chip';s.textContent=t;return s}));
}
const langBox=document.querySelector('.languages'),langPill=langBox?.querySelector('.lang-pill');
const langLinks=[...document.querySelectorAll('[data-lang]')];
function placePill(animate){
 const a=langLinks.find(l=>l.dataset.lang===language);if(!a||!langPill)return;
 langPill.style.setProperty('--x',a.offsetLeft+'px');langPill.style.setProperty('--w',a.offsetWidth+'px');
 if(animate){langPill.classList.remove('stretch');void langPill.offsetWidth;langPill.classList.add('stretch')}
}
function setLanguage(lang,{animate=false,remember=true}={}){
 if(!LANGS.includes(lang)||!I18N[lang])lang=language;
 const changed=lang!==language;language=lang;document.documentElement.lang=language;
 if(changed){
  // Only <br> and <em> are allowed as markup in translations; everything else is set as plain text.
  const SAFE=v=>!/</.test(v.replace(/<\/?(br|em)>/g,''));
  document.querySelectorAll('[data-i]').forEach(el=>{const v=tr(el.dataset.i);if(!v)return;if(SAFE(v))el.innerHTML=v;else el.textContent=v});
  document.querySelectorAll('[data-alt]').forEach(el=>{const v=tr(el.dataset.alt);if(v)el.alt=v});
  document.querySelectorAll('[data-aria]').forEach(el=>{const v=tr(el.dataset.aria);if(v)el.setAttribute('aria-label',v)});
  if(tr('metaTitle'))document.title=tr('metaTitle');
  const desc=document.querySelector('meta[name=description]');if(desc&&tr('metaDescription'))desc.content=tr('metaDescription');
  try{history.replaceState(history.state,'',LANG_PATH[language]+location.hash)}catch{}
 }
 langLinks.forEach(a=>a.setAttribute('aria-current',String(a.dataset.lang===language)));
 placePill(animate&&changed);
 renderChips();updateContacts();updateStatus();formatCounters();
 document.dispatchEvent(new Event('ius-language-change'));
 if(remember)try{localStorage.setItem('ius-language',language)}catch{}
}
langLinks.forEach(a=>a.addEventListener('click',e=>{
 if(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.button!==0||!I18N[a.dataset.lang])return; // let new-tab clicks work as normal links
 e.preventDefault();setLanguage(a.dataset.lang,{animate:true});
}));
window.addEventListener('resize',()=>placePill(false));
document.fonts?.ready.then(()=>placePill(false));

/* ================= Counters ================= */
const counters=[...document.querySelectorAll('.count')];
const fmt=(v,dec)=>new Intl.NumberFormat(language==='en'?'en':language,{minimumFractionDigits:dec,maximumFractionDigits:dec}).format(v);
function formatCounters(){counters.forEach(c=>{if(!c.dataset.running)c.textContent=fmt(c.dataset.done?Number(c.dataset.to):Number(c.textContent.replace(',','.'))||0,Number(c.dataset.dec||0))})}

/* ================= Motion ================= */
const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');
function runCounter(el){
 const to=Number(el.dataset.to),dec=Number(el.dataset.dec||0),start=performance.now(),dur=1500;el.dataset.running='1';
 const step=t=>{const k=Math.min((t-start)/dur,1),e=1-Math.pow(1-k,4);el.textContent=fmt(to*e,dec);if(k<1)requestAnimationFrame(step);else{delete el.dataset.running;el.dataset.done='1'}};
 requestAnimationFrame(step);
}
const revealItems=[...document.querySelectorAll('.reveal,.curtain')];
let pendingCurtains=[];
if(!reduced.matches&&'IntersectionObserver' in window){
 counters.forEach(c=>{c.textContent=fmt(0,Number(c.dataset.dec||0))});
 // stagger siblings
 revealItems.forEach(el=>{const sib=[...el.parentElement.children].filter(x=>x.classList.contains('reveal')||x.classList.contains('curtain'));const i=sib.indexOf(el);el.style.setProperty('--d',Math.min(i*90,450)+'ms')});
 const io=new IntersectionObserver(entries=>entries.forEach(entry=>{
  if(!entry.isIntersecting)return;const el=entry.target;el.classList.add('in');io.unobserve(el);
  el.querySelectorAll('.count').forEach(runCounter);
  setTimeout(()=>el.style.removeProperty('--d'),1900);
 }),{threshold:.12,rootMargin:'0px 0px -6% 0px'});
 // Clipped elements (curtains) never report as visible to IntersectionObserver, so they are checked on scroll.
 revealItems.forEach(el=>{if(el.classList.contains('curtain')&&!el.classList.contains('reveal'))pendingCurtains.push(el);else io.observe(el)});
}else{
 revealItems.forEach(el=>el.classList.add('in'));counters.forEach(c=>c.dataset.done='1');
}

/* Scroll-driven: progress bar, header, parallax, process line */
const mobileBar=document.querySelector('.mobile-bar'),header=document.querySelector('.site-header'),bar=document.querySelector('.scroll-progress');
const parallax=[...document.querySelectorAll('[data-speed]')];
const steps=document.querySelector('.steps'),stepItems=steps?[...steps.querySelectorAll('article')]:[];
let ticking=false;
function onScroll(){
 ticking=false;const y=window.scrollY,vh=window.innerHeight,max=document.documentElement.scrollHeight-vh;
 bar.style.setProperty('--p',max>0?(y/max).toFixed(4):0);
 header.classList.toggle('scrolled',y>24);
 mobileBar?.classList.toggle('hide',y<vh*.6);
 if(pendingCurtains.length){
  pendingCurtains=pendingCurtains.filter(el=>{const r=el.getBoundingClientRect();if(r.top<vh*.92&&r.bottom>0){el.classList.add('in');setTimeout(()=>el.style.removeProperty('--d'),1900);return false}return true});
 }
 if(!reduced.matches){
  for(const el of parallax){
   const host=el.parentElement.tagName==='PICTURE'?el.parentElement.parentElement:el.parentElement;const r=host.getBoundingClientRect();if(r.bottom<-200||r.top>vh+200)continue;
   const off=(r.top+r.height/2-vh/2)*Number(el.dataset.speed);el.style.translate=`0 ${off.toFixed(1)}px`;
  }
 }
 if(steps){
  const r=steps.getBoundingClientRect(),p=Math.min(Math.max((vh*.75-r.top)/(r.height),0),1);
  steps.style.setProperty('--line',p.toFixed(3));
  stepItems.forEach((s,i)=>s.classList.toggle('on',p>=i/(stepItems.length-1)*.92+.02));
 }
}
window.addEventListener('scroll',()=>{if(!ticking){ticking=true;requestAnimationFrame(onScroll)}},{passive:true});
window.addEventListener('resize',onScroll);

/* Active nav link */
const nav=document.getElementById('mainNav'),navLinks=[...nav.querySelectorAll('a')];
if('IntersectionObserver' in window){
 const map=new Map(navLinks.map(a=>[a.getAttribute('href').slice(1),a]));
 const sio=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){navLinks.forEach(a=>a.classList.remove('active'));map.get(e.target.id)?.classList.add('active')}}),{rootMargin:'-45% 0px -50% 0px'});
 map.forEach((_,id)=>{const s=document.getElementById(id);if(s)sio.observe(s)});
}

/* Burger menu */
const burger=document.querySelector('.burger');
const closeMenu=()=>{nav.classList.remove('open');burger.setAttribute('aria-expanded','false')};
burger.addEventListener('click',()=>{const o=!nav.classList.contains('open');nav.classList.toggle('open',o);burger.setAttribute('aria-expanded',String(o))});
navLinks.forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('click',e=>{if(nav.classList.contains('open')&&!e.target.closest('.header-bar'))closeMenu()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu()});

/* Pointer glow on buttons and cards */
const fine=window.matchMedia('(hover: hover) and (pointer: fine)');
document.addEventListener('pointermove',e=>{
 if(!fine.matches)return;const t=e.target.closest?.('.button,.service-card');if(!t)return;
 const r=t.getBoundingClientRect();t.style.setProperty('--mx',`${e.clientX-r.left}px`);t.style.setProperty('--my',`${e.clientY-r.top}px`);
},{passive:true});

/* Before / after sliders */
const baItems=[...document.querySelectorAll('.ba')];
function setBa(el,v){v=Math.max(0,Math.min(100,v));el.style.setProperty('--pos',v+'%');el.querySelector('.ba-range').value=Math.round(v)}
baItems.forEach(el=>{
 const range=el.querySelector('.ba-range');let drag=false;
 const fromX=x=>{const r=el.getBoundingClientRect();setBa(el,(x-r.left)/r.width*100)};
 el.addEventListener('pointerdown',e=>{if(e.pointerType==='mouse'&&e.button!==0)return;drag=true;el.classList.add('dragging');el.setPointerCapture(e.pointerId);fromX(e.clientX)});
 el.addEventListener('pointermove',e=>{if(drag)fromX(e.clientX)});
 const end=()=>{drag=false;el.classList.remove('dragging')};
 el.addEventListener('pointerup',end);el.addEventListener('pointercancel',end);
 range.addEventListener('input',()=>setBa(el,Number(range.value)));
});
// One gentle hint sweep when a slider first appears.
if(!reduced.matches&&'IntersectionObserver' in window){
 const bio=new IntersectionObserver(entries=>entries.forEach(e=>{
  if(!e.isIntersecting)return;bio.unobserve(e.target);const el=e.target,t0=performance.now()+500;
  const step=t=>{if(el.classList.contains('dragging'))return;const k=(t-t0)/1600;if(k<0){requestAnimationFrame(step);return}
   if(k>=1){setBa(el,50);return}setBa(el,50+Math.sin(k*Math.PI*2)*18);requestAnimationFrame(step)};requestAnimationFrame(step);
 }),{threshold:.5});
 baItems.forEach(el=>bio.observe(el));
}

/* Init */
// The address decides the language (/ro/, /en/). Only on the main page a remembered choice is applied.
let saved=null;try{saved=localStorage.getItem('ius-language')}catch{}
setLanguage(PAGE_LANG==='ru'&&saved&&saved!=='ru'?saved:PAGE_LANG,{remember:false});
requestAnimationFrame(()=>langBox?.classList.add('ready'));
document.getElementById('year').textContent=new Date().getFullYear();
onScroll();setInterval(updateStatus,60000);
