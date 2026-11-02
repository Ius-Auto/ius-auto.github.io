'use strict';
document.documentElement.classList.add('js');

/* ================= Translations ================= */
const ro={
skip:'La conținut',nav:'Navigare',menu:'Meniu',navServices:'Servicii',navProcess:'Cum lucrăm',navGallery:'Galerie',navFaq:'Întrebări',navContacts:'Contacte',call:'Sunați',
eyebrow:'REPARAȚII CAROSERIE · CHIȘINĂU',headline:'Reparații caroserie.<br>Tinichigerie.<br><em>Vopsire.</em>',
extraServices:'Reparații plastic · Potrivirea culorii vopselei · Piese auto la comandă',
intro:'De la mici îndoituri la daune grave în urma accidentelor. Îndepărtarea îndoiturilor și vânzare de piese auto.',
directions:'Cum ajungeți la noi',address:'Chișinău, str. Petricani, 202',heroAlt:'Automobil sport roșu într-un garaj luminos — fotografie ilustrativă',
heroBadgeWarranty:'Garanție 2 ani',heroBadgeRating:'Google · 22 de recenzii',
stat1:'ani de garanție pentru lucrări',stat2:'evaluare pe Google',stat3:'recenzii ale clienților pe Google',stat4:'zile pe săptămână lucrăm',
servicesLabel:'01 / SERVICIILE NOASTRE',servicesTitle:'Reparații caroserie,<br>vopsire și piese auto',servicesIntro:'Reparăm daunele, restabilim geometria și vopsim. Stabilim lucrările necesare după examinarea automobilului.',
s1:'Reparații caroserie',d1:'Reparăm caroseria, de la mici îndoituri la daune provocate de accidente grave.',
s2:'Tinichigerie și îndepărtarea îndoiturilor',d2:'Restabilim forma elementelor de caroserie deteriorate.',
s3:'Geometria caroseriei',d3:'Restabilim geometria caroseriei în urma deformărilor și accidentelor.',
s4:'Vopsirea elementelor',d4:'Vopsim separat bare de protecție, portiere, aripi și alte elemente de caroserie.',
s5:'Vopsire integrală',d5:'Pregătim și vopsim întregul automobil.',
s6:'Vânzare și comandă de piese auto',d6:'Piese auto la comandă pentru automobilul dumneavoastră. Pentru disponibilitate, preț și condițiile comenzii, sunați-ne.',
s7:'Reparații plastic',d7:'Reparăm piesele din plastic deteriorate ale automobilului.',
s8:'Potrivirea culorii vopselei',d8:'Potrivim culoarea vopselei pentru caroserie și elementele individuale.',
s9:'Cazuri de asigurare',d9:'Lucrăm cu companiile de asigurări. Sunați-ne — discutăm cazul dumneavoastră.',
partsCall:'Întrebați despre piese →',priceTitle:'Cât costă reparația?',priceText:'Costul se stabilește după examinarea automobilului. Convenim asupra lucrărilor înainte de a începe reparația.',visit:'Adresa și programul →',
galleryTitle:'Formă. Suprafață. Culoare.',bandText:'Redăm caroseriei forma corectă și culoarea curată.',
processLabel:'02 / SIMPLU ȘI CLAR',processTitle:'De la examinare la rezultat.',
step1:'Examinarea automobilului',step1p:'Evaluăm daunele și stabilim ce trebuie reparat.',
step2:'Stabilirea lucrărilor',step2p:'Discutăm lucrările necesare și costul înainte de începerea reparației.',
step3:'Reparație și vopsire',step3p:'Efectuăm lucrările convenite și oferim garanție de 2 ani.',
promiseTitle:'Garanție de 2 ani pentru lucrările efectuate.',promiseText:'Ne asumăm răspunderea pentru reparațiile caroseriei. Automobilul poate rămâne la noi pe durata reparației.',
galleryLabel:'03 / GALERIE',galleryHeading:'Mașini care<br>merită să strălucească.',galleryNote:'Fotografii ilustrative despre vopsire și automobile. Apăsați pentru a mări.',
gA:'Automobil sport gri',gB:'Automobil sport portocaliu în garaj',g2:'Lucrul cu piesele',gC:'Automobil într-un garaj întunecat',gD:'Sedan negru în mișcare',gE:'Coupé gri pe fundal de munți',g3:'Automobil în atelier',gF:'Coupé roșu în natură',gG:'Sedan argintiu',gH:'Coupé negru, vedere din față',
faqLabel:'04 / ÎNTREBĂRI FRECVENTE',faqTitle:'Pe scurt despre esențial.',
q1:'Lucrați cu companiile de asigurări?',a1:'Da, lucrăm cu companiile de asigurări. Sunați-ne — discutăm cazul dumneavoastră.',
q2:'Ce garanție oferiți?',a2:'Pentru lucrările efectuate oferim garanție de 2 ani.',
q3:'Pot lăsa automobilul la dumneavoastră?',a3:'Da, automobilul poate rămâne la noi pe durata reparației.',
q4:'Cât costă reparația?',a4:'Stabilim costul după examinarea automobilului și îl convenim cu dumneavoastră înainte de începerea lucrărilor.',
q5:'Pot comanda piese auto la dumneavoastră?',a5:'Da, comandăm piese auto pentru automobilul dumneavoastră. Pentru disponibilitate, preț și condiții, sunați-ne.',
q6:'Care este programul de lucru?',a6:'Luni — vineri de la 09:00 la 18:00, sâmbătă de la 09:00 la 15:00. Duminică — închis.',
contactsLabel:'04 / VĂ AȘTEPTĂM',contactsTitle:'Ne găsiți pe Petricani, 202.',city:'Chișinău, Moldova',
googleMaps:'Deschideți în Google Maps',waze:'Deschideți în Waze ↗',scheduleTitle:'Program de lucru',weekdays:'Luni — vineri',saturday:'Sâmbătă',sunday:'Duminică',closed:'Închis',scheduleNote:'Stabilim costul reparației după examinarea automobilului.',
googleTitle:'Recenzii despre service pe Google',googleText:'Părerile clienților despre Ius Auto sunt disponibile pe pagina noastră Google.',googleLink:'Citiți recenziile pe Google ↗',
googleCount:'22 de recenzii pe Google',googleSnapshot:'Evaluare la data de 1 noiembrie 2026. Recenziile de mai jos sunt în limba originală.',googleSelection:'O selecție de recenzii ale clienților de pe Google',googleExcerpt:'Fragment din recenzie',googleSource:'Sursa: Google ↗',
feedbackLabel:'05 / PĂREREA DVS.',feedbackTitle:'Spuneți-ne părerea despre site-ul Ius Auto',feedbackLead:'Evaluați experiența de utilizare a acestei pagini',ratingLabel:'Evaluarea site-ului',nameLabel:'Numele dumneavoastră',commentLabel:'Ce credeți că ar trebui îmbunătățit?',moderationNote:'Numele, evaluarea și comentariul vor apărea pe site după aprobare. Nu includeți date personale de contact.',submitReview:'Trimiteți recenzia',reviewsTitle:'Recenzii despre site',adminLink:'Aprobarea recenziilor',
footerText:'Reparații caroserie. Tinichigerie. Vopsire.',top:'Sus ↑',credit:'Fotografii ilustrative: Unsplash, Pexels',
lbClose:'Închide',lbPrev:'Anterioara',lbNext:'Următoarea'
};
const en={
skip:'Skip to content',nav:'Navigation',menu:'Menu',navServices:'Services',navProcess:'How we work',navGallery:'Gallery',navFaq:'FAQ',navContacts:'Contact',call:'Call us',
eyebrow:'AUTO BODY REPAIR · CHIȘINĂU',headline:'Body repair.<br>Panel beating.<br><em>Painting.</em>',
extraServices:'Plastic repair · Paint colour matching · Auto parts ordering',
intro:'From small dents to serious collision damage. Dent removal and auto parts sales.',
directions:'Get directions',address:'202 Petricani Street, Chișinău',heroAlt:'Red sports car in a bright garage — illustrative photo',
heroBadgeWarranty:'2-year warranty',heroBadgeRating:'Google · 22 reviews',
stat1:'year warranty on our work',stat2:'Google rating',stat3:'customer reviews on Google',stat4:'days a week we are open',
servicesLabel:'01 / OUR SERVICES',servicesTitle:'Auto body repair,<br>painting and auto parts',servicesIntro:'We repair damage, restore body geometry and paint. We determine the work needed after inspecting your car.',
s1:'Auto body repair',d1:'Repairing body damage, from small dents to the aftermath of serious collisions.',
s2:'Panel beating and dent removal',d2:'Restoring the shape of damaged body panels.',
s3:'Body geometry restoration',d3:'Restoring body geometry after deformation and collisions.',
s4:'Panel painting',d4:'Painting individual bumpers, doors, wings and other body panels.',
s5:'Full respray',d5:'Preparing and painting the entire vehicle.',
s6:'Auto parts sales and ordering',d6:'Auto parts ordered for your vehicle. Call us for availability, prices and order details.',
s7:'Plastic repair',d7:'We repair damaged plastic vehicle parts.',
s8:'Paint colour matching',d8:'We match paint colours for the bodywork and individual panels.',
s9:'Insurance repairs',d9:'We work with insurance companies. Give us a call and we will discuss your case.',
partsCall:'Ask about parts →',priceTitle:'How much will repairs cost?',priceText:'The price is determined after inspecting your car. We agree on the work before repairs begin.',visit:'Address and opening hours →',
galleryTitle:'Shape. Surface. Colour.',bandText:'We bring back clean lines and a flawless finish.',
processLabel:'02 / SIMPLE AND CLEAR',processTitle:'From inspection to completion.',
step1:'Vehicle inspection',step1p:'We assess the damage and determine what needs repairing.',
step2:'Agreeing on the work',step2p:'We discuss the repairs and price before starting work.',
step3:'Repair and painting',step3p:'We carry out the agreed work and give a 2-year warranty.',
promiseTitle:'2-year warranty on completed work.',promiseText:'We stand behind our body repairs. You can leave your car with us for the duration of the repair.',
galleryLabel:'03 / GALLERY',galleryHeading:'Cars that<br>deserve to shine.',galleryNote:'Illustrative photography of painting and cars. Tap to enlarge.',
gA:'Grey sports car',gB:'Orange sports car in a garage',g2:'Working with panels',gC:'Car in a dark garage',gD:'Black saloon in motion',gE:'Grey coupé with mountains behind',g3:'A car in the workshop',gF:'Red coupé outdoors',gG:'Silver saloon',gH:'Black coupé, front view',
faqLabel:'04 / FAQ',faqTitle:'The essentials, briefly.',
q1:'Do you work with insurance companies?',a1:'Yes, we work with insurance companies. Give us a call and we will discuss your case.',
q2:'What warranty do you give?',a2:'We give a 2-year warranty on completed work.',
q3:'Can I leave my car with you?',a3:'Yes, you can leave your car with us for the duration of the repair.',
q4:'How much does a repair cost?',a4:'We determine the price after inspecting the car and agree it with you before any work begins.',
q5:'Can I order auto parts from you?',a5:'Yes, we order auto parts for your vehicle. Call us for availability, prices and terms.',
q6:'What are your opening hours?',a6:'Monday to Friday 09:00–18:00, Saturday 09:00–15:00. Closed on Sunday.',
contactsLabel:'04 / VISIT US',contactsTitle:'Find us at Petricani, 202.',city:'Chișinău, Moldova',
googleMaps:'Open in Google Maps',waze:'Open in Waze ↗',scheduleTitle:'Opening hours',weekdays:'Monday — Friday',saturday:'Saturday',sunday:'Sunday',closed:'Closed',scheduleNote:'Repair prices are determined after inspecting the vehicle.',
googleTitle:'Auto service reviews on Google',googleText:'Read what customers say about Ius Auto on our Google listing.',googleLink:'Read reviews on Google ↗',
googleCount:'22 reviews on Google',googleSnapshot:'Rating as of 1 November 2026. Reviews below are shown in their original language.',googleSelection:'A selection of customer reviews from Google',googleExcerpt:'Review excerpt',googleSource:'Source: Google ↗',
feedbackLabel:'05 / FEEDBACK',feedbackTitle:'Share your opinion of the Ius Auto website',feedbackLead:'Rate your experience with this page',ratingLabel:'Your website rating',nameLabel:'Your name',commentLabel:'What do you think we could improve?',moderationNote:'Your name, rating and comment will appear on the website after approval. Please do not include personal contact details.',submitReview:'Submit review',reviewsTitle:'Website reviews',adminLink:'Review moderation',
footerText:'Auto body repair. Panel beating. Painting.',top:'Back to top ↑',credit:'Illustrative photos: Unsplash, Pexels',
lbClose:'Close',lbPrev:'Previous',lbNext:'Next'
};
Object.assign(ro,{"extraServices": "Reparații plastic · Potrivirea culorii vopselei · Îndepărtarea îndoiturilor fără vopsire · Vânzare de piese auto", "heroAlt": "Vopsirea caroseriei cu pistolul de vopsit — fotografie ilustrativă", "heroBadgeWarranty": "Garanție 6 luni", "badgeYears": "ani de activitate", "pdr": "Îndepărtarea îndoiturilor fără vopsire", "stat1": "ani de experiență în reparații caroserie", "stat2": "garanție pentru lucrările efectuate", "stat3": "evaluare pe Google", "stat4": "recenzii ale clienților pe Google", "monthsShort": "luni", "step3p": "Efectuăm lucrările convenite și oferim garanție de 6 luni.", "promiseTitle": "Garanție de 6 luni pentru lucrările efectuate.", "promiseText": "De peste 23 de ani ne ocupăm de reparații caroserie și răspundem pentru rezultat. Automobilul poate rămâne la noi pe durata reparației.", "navResults": "Înainte / După", "resultsLabel": "03 / ÎNAINTE ȘI DUPĂ", "resultsTitle": "Lucrările noastre:<br>înainte și după reparație.", "resultsNote": "Automobile reale pe care le-am restabilit. Trageți cursorul pentru a compara. Numerele sunt ascunse.", "baBefore": "Înainte de reparație", "baAfter": "După", "baBeforeAlt": "Automobil înainte de reparație", "baAfterAlt": "Automobil după reparație", "baRange": "Comparați înainte și după", "credit": "Fotografiile „înainte și după” — lucrări Ius Auto. Fotografii ilustrative: Pexels"});
Object.assign(en,{"extraServices": "Plastic repair · Paint colour matching · Paintless dent removal · Auto parts sales", "heroAlt": "Spray-painting a car body — illustrative photo", "heroBadgeWarranty": "6-month warranty", "badgeYears": "years in business", "pdr": "Paintless dent removal", "stat1": "years of auto body repair experience", "stat2": "warranty on completed work", "stat3": "Google rating", "stat4": "customer reviews on Google", "monthsShort": "months", "step3p": "We carry out the agreed work and give a 6-month warranty.", "promiseTitle": "6-month warranty on completed work.", "promiseText": "For over 23 years we have been repairing car bodies and standing behind the result. You can leave your car with us for the duration of the repair.", "navResults": "Before / After", "resultsLabel": "03 / BEFORE AND AFTER", "resultsTitle": "Our work:<br>before and after.", "resultsNote": "Real cars we have restored. Drag the slider to compare. Number plates are hidden.", "baBefore": "Before repair", "baAfter": "After", "baBeforeAlt": "Car before repair", "baAfterAlt": "Car after repair", "baRange": "Compare before and after", "credit": "Before-and-after photos: Ius Auto work. Illustrative photos: Pexels"});
// Russian is read from the page itself.
const ru={};
document.querySelectorAll('[data-i]').forEach(el=>{if(!(el.dataset.i in ru))ru[el.dataset.i]=el.innerHTML});
document.querySelectorAll('[data-alt]').forEach(el=>{ru[el.dataset.alt]=el.alt});
document.querySelectorAll('[data-aria]').forEach(el=>{ru[el.dataset.aria]=el.getAttribute('aria-label')});
const dict={ru,ro,en};
let language='ru';
const tr=key=>dict[language][key]??ru[key]??'';

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

/* ================= Language ================= */
function renderChips(){
 const el=document.querySelector('.hero-chips');const parts=tr('extraServices').split('·').map(x=>x.trim()).filter(Boolean);
 el.replaceChildren(...parts.map(t=>{const s=document.createElement('span');s.className='chip';s.textContent=t;return s}));
}
function setLanguage(lang){
 language=['ru','ro','en'].includes(lang)?lang:'ru';document.documentElement.lang=language;
 // Only <br> and <em> are allowed as markup in translations; everything else is set as plain text.
 const SAFE=v=>!/</.test(v.replace(/<\/?(br|em)>/g,''));
 document.querySelectorAll('[data-i]').forEach(el=>{const v=tr(el.dataset.i);if(SAFE(v))el.innerHTML=v;else el.textContent=v});
 document.querySelectorAll('[data-alt]').forEach(el=>{el.alt=tr(el.dataset.alt)});
 document.querySelectorAll('[data-aria]').forEach(el=>{el.setAttribute('aria-label',tr(el.dataset.aria))});
 document.querySelectorAll('[data-lang]').forEach(el=>el.setAttribute('aria-pressed',String(el.dataset.lang===language)));
 document.title={en:'Ius Auto — auto body repair in Chișinău',ru:'Ius auto S.R.L — кузовной ремонт в Кишинёве',ro:'Ius auto S.R.L — reparații caroserie în Chișinău'}[language];
 document.querySelector('meta[name=description]').content={en:'Auto body repair, dent removal, body geometry, painting and auto parts. Insurance repairs, 6-month warranty, over 23 years of experience. Ius Auto, Petricani 202, Chișinău.',ru:'Кузовной ремонт, рихтовка, восстановление геометрии кузова и покраска автомобилей. Работаем со страховыми, гарантия 6 месяцев, более 23 лет опыта. Ius auto S.R.L, Кишинёв, Petricani, 202.',ro:'Reparații caroserie, tinichigerie, geometrie și vopsire auto. Lucrăm cu asigurările, garanție 6 luni, peste 23 de ani de experiență. Ius auto S.R.L, Chișinău, Petricani, 202.'}[language];
 renderChips();updateContacts();updateStatus();formatCounters();
 document.dispatchEvent(new Event('ius-language-change'));
 try{localStorage.setItem('ius-language',language)}catch{}
}
document.querySelectorAll('[data-lang]').forEach(b=>b.addEventListener('click',()=>setLanguage(b.dataset.lang)));

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
   const r=el.parentElement.getBoundingClientRect();if(r.bottom<-200||r.top>vh+200)continue;
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
let saved='ru';try{saved=localStorage.getItem('ius-language')||'ru'}catch{}
setLanguage(saved);
document.getElementById('year').textContent=new Date().getFullYear();
onScroll();setInterval(updateStatus,60000);
