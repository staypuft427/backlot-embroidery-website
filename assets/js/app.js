
async function loadJSON(path){const r=await fetch(path);return await r.json();}
const $=(s)=>document.querySelector(s);
function renderHeader(site,active){
 const links=[['Home','/index.html'],['Services','/services.html'],['Gallery','/gallery.html'],['FAQ','/faq.html'],['Contact','/contact.html']];
 const nav=links.map(([n,u])=>`<a class="${active===n?'active':''}" href="${u}">${n}</a>`).join('');
 const mobile=links.map(([n,u])=>`<a href="${u}">${n}</a>`).join('')+`<a class="btn gold" href="/quote.html">Request a Quote</a>`;
 return `<header class="topbar"><div class="container nav-wrap"><a href="/index.html" aria-label="${site.businessName} home"><img class="logo-image" src="${site.logoImage}" alt="${site.businessName} logo"></a><nav class="nav">${nav}</nav><a class="btn gold" href="/quote.html">Request a Quote</a><button class="btn menu" data-menu>Menu</button><div class="mobile-panel">${mobile}</div></div></header>`;
}
function renderFooter(site){
 const logos=(site.trustedBy||[]).map(l=>`<img src="${l.image}" alt="${l.name} logo">`).join('');
 return `<section class="footer-top"><div class="container footer-grid"><div><h4 class="display">Trusted By</h4><div class="trusted-images">${logos}</div></div><div><h4 class="display">What They're Saying</h4><p>“Backlot Embroidery Co. is our go-to for everything from hero patches to background wardrobe.”</p><p class="display">— Lead Costumer</p></div><div><h4 class="display">Company</h4><ul><li><a href="/services.html">Our Process</a></li><li><a href="/gallery.html">Recent Work</a></li><li><a href="/faq.html">Materials</a></li></ul></div><div><h4 class="display">Contact</h4><p>${site.email}<br>${site.phone}<br>${site.location}</p></div></div></section><footer class="bottom"><div class="container">© 2024 ${site.businessName}. All rights reserved.</div></footer>`;
}
function pageHero(d){return `<section class="page-hero"><div class="container"><p class="display eyebrow">${d.pageEyebrow}</p><h1 class="display">${d.pageTitle}</h1><p>${d.pageText}</p></div></section>`}
function serviceCard(i){return `<article class="info-card"><img src="${i.image}" alt="${i.title}"><h2 class="display">${i.title}</h2><p>${i.body}</p></article>`}
function galleryCard(i){return `<article class="info-card"><img src="${i.image}" alt="${i.title}"><p class="display section-kicker">${i.category}</p><h2 class="display">${i.title}</h2></article>`}
function jotform(code,label){return !code||code.includes('Paste your Jotform')?`<div class="form-placeholder"><h2 class="display">${label} Form Placeholder</h2><p>Paste your Jotform embed code into Pages CMS for this page.</p></div>`:code}
async function init(){
 const page=document.body.dataset.page||'Home'; const site=await loadJSON('/content/site.json');
 $('#site-header').innerHTML=renderHeader(site,page); $('#site-footer').innerHTML=renderFooter(site);
 const b=document.querySelector('[data-menu]'),p=document.querySelector('.mobile-panel'); if(b&&p)b.onclick=()=>p.classList.toggle('open');
 if(page==='Home'){const h=await loadJSON('/content/home.json'),s=await loadJSON('/content/services.json'),g=await loadJSON('/content/gallery.json');
  $('#main').innerHTML=`<section class="hero"><img class="hero-bg" src="${h.heroImage}" alt=""><div class="container hero-content"><p class="display eyebrow">${h.heroEyebrow}</p><h1 class="display">${h.heroTitle}</h1><div class="gold-rule"></div><p>${h.heroText}</p><div class="actions"><a class="btn gold" href="/quote.html">Request a Quote</a><a class="btn" href="/services.html">Our Services</a></div></div></section><section class="feature-strip"><div class="container features">${h.features.map(f=>`<div class="feature"><div class="icon">${f.icon}</div><div><h3 class="display">${f.title}</h3><p>${f.body}</p></div></div>`).join('')}</div></section><section class="dark-section"><div class="container service-layout"><div><p class="display section-kicker">What We Do</p><h2 class="display section-title">Embroidery & Patches Built for Production</h2><p class="section-text">From simple name tapes to intricate emblems, we provide embroidery solutions for every department and every detail.</p><a class="btn" href="/services.html">View All Services</a></div><div class="cards">${s.items.slice(0,4).map(i=>`<article class="card"><img src="${i.image}" alt="${i.title}"><h3 class="display">${i.title}</h3><p>${i.body}</p></article>`).join('')}</div></div></section><section class="gallery-section"><div class="container gallery-layout"><div><p class="display section-kicker">Recent Work</p><h2 class="display section-title">Details That Tell the Story</h2><a class="btn dark" href="/gallery.html">View Gallery</a></div><div class="gallery-grid">${g.items.slice(5,10).map(i=>`<img src="${i.image}" alt="${i.title}">`).join('')}</div></div></section>`;
 }
 if(page==='Services'){const d=await loadJSON('/content/services.json');$('#main').innerHTML=pageHero(d)+`<section class="content-section"><div class="container grid-3">${d.items.map(serviceCard).join('')}</div></section>`}
 if(page==='Gallery'){const d=await loadJSON('/content/gallery.json');$('#main').innerHTML=pageHero(d)+`<section class="content-section"><div class="container grid-3">${d.items.map(galleryCard).join('')}</div></section>`}
 if(page==='FAQ'){const d=await loadJSON('/content/faq.json');$('#main').innerHTML=pageHero(d)+`<section class="content-section faq"><div class="container">${d.items.map((i,x)=>`<details ${x===0?'open':''}><summary class="display">${i.question}</summary><p>${i.answer}</p></details>`).join('')}</div></section>`}
 if(page==='Contact'){const d=await loadJSON('/content/contact.json');$('#main').innerHTML=pageHero(d)+`<section class="content-section"><div class="container">${jotform(d.jotformEmbedCode,'Contact')}</div></section>`}
 if(page==='Quote'){const d=await loadJSON('/content/quote.json');$('#main').innerHTML=pageHero(d)+`<section class="content-section"><div class="container">${jotform(d.jotformEmbedCode,'Quote')}</div></section>`}
}
init();
