/* ============ shared interactions ============ */

/* reveal on scroll */
const io = new IntersectionObserver(es => {
  es.forEach(e => { if (e.isIntersecting){ e.target.classList.add('in-view'); io.unobserve(e.target); } });
},{threshold:.1});
function observeReveals(root=document){
  root.querySelectorAll('.reveal:not(.in-view)').forEach(el=>io.observe(el));
}
observeReveals();

/* stat counters */
const fmt = n => n >= 1000 ? n.toLocaleString('en-US') : n;
const cio = new IntersectionObserver(es => {
  es.forEach(e => {
    if(!e.isIntersecting) return;
    const el = e.target, target = +el.dataset.count, t0 = performance.now(), dur = 1400;
    const tick = now => {
      const p = Math.min((now - t0)/dur, 1), ease = 1 - Math.pow(1-p, 3);
      el.textContent = fmt(Math.round(target * ease));
      if(p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
    cio.unobserve(el);
  });
},{threshold:.6});
document.querySelectorAll('[data-count]').forEach(el=>cio.observe(el));

/* mobile nav */
const navLinks = document.getElementById('navLinks');
const navToggle = document.getElementById('navToggle');
if(navToggle){
  navToggle.addEventListener('click',()=>navLinks.classList.toggle('open'));
  navLinks.addEventListener('click',e=>{ if(e.target.tagName==='A') navLinks.classList.remove('open'); });
}

/* ============ lightbox ============ */
let lb = document.getElementById('lightbox');
if(!lb){
  lb = document.createElement('div');
  lb.className = 'lightbox'; lb.id = 'lightbox';
  lb.innerHTML = '<img src="" alt="">';
  document.body.appendChild(lb);
}
const lbImg = lb.querySelector('img');
function openLightbox(src){ lbImg.src = src; lb.classList.add('open'); }
lb.addEventListener('click',()=>lb.classList.remove('open'));

/* ============ modal ============ */
let veil = document.getElementById('modalVeil');
if(!veil){
  veil = document.createElement('div');
  veil.className = 'modal-veil'; veil.id = 'modalVeil';
  document.body.appendChild(veil);
}
function esc(s){ return s == null ? '' : s; }
function openProjectModal(p, catMap){
  const cat = catMap ? catMap[p.cat] : null;
  const imgs = [p.img, p.img2].filter(Boolean);
  veil.innerHTML = `
    <div class="modal" role="dialog" aria-modal="true">
      <div class="m-top"></div>
      <button class="m-close" aria-label="Close">✕</button>
      ${imgs.length ? `
      <div class="m-img" data-src="${imgs[0]}">
        <img src="${imgs[0]}" alt="${esc(p.title)}">
        <span class="zoom-hint">CLICK TO ZOOM${imgs.length>1 ? ' · '+imgs.length+' FIGURES' : ''}</span>
      </div>` : ''}
      <div class="m-body">
        ${cat ? `<div class="m-cat" style="color:${cat.color}">${cat.label}</div>` : ''}
        <h3>${esc(p.title)}</h3>
        <p class="m-tagline">${esc(p.tagline)}</p>
        <ul class="m-facts">${(p.facts||[]).map(f=>`<li>${f}</li>`).join('')}</ul>
        ${p.refs ? `<div class="m-refs">${p.refs.map(r=>'» '+r).join('<br>')}</div>` : ''}
        ${p.tags ? `<div class="m-tags">${p.tags.map(t=>`<span>${t}</span>`).join('')}</div>` : ''}
        ${p.link ? `<a class="m-link" href="${p.link}" target="_blank" rel="noopener">View write-up on GitHub ↗</a>` : ''}
      </div>
    </div>`;
  veil.classList.add('open');
  document.body.style.overflow = 'hidden';
  veil.querySelector('.m-close').addEventListener('click', closeModal);
  const mImg = veil.querySelector('.m-img');
  if(mImg){
    let idx = 0;
    mImg.addEventListener('click', ()=>openLightbox(imgs[idx % imgs.length]));
    if(imgs.length > 1){
      const imgel = mImg.querySelector('img');
      setInterval(()=>{ idx++; imgel.src = imgs[idx % imgs.length]; }, 3500);
    }
  }
}
function closeModal(){
  veil.classList.remove('open');
  document.body.style.overflow = '';
}
veil.addEventListener('click', e=>{ if(e.target === veil) closeModal(); });
document.addEventListener('keydown', e=>{
  if(e.key !== 'Escape') return;
  if(lb.classList.contains('open')) lb.classList.remove('open');
  else closeModal();
});

/* ============ grid renderer with filters ============ */
function renderProjectGrid({mountId, filterId, items, cats, showLinkArrow=false, detailBase=null}){
  const mount = document.getElementById(mountId);
  const filterMount = filterId ? document.getElementById(filterId) : null;
  if(!mount) return;

  function cardHTML(p, i){
    const cat = cats[p.cat];
    const shot = p.img
      ? `<img src="${p.img}" alt="${esc(p.title)}" loading="lazy">`
      : `<div class="abstract" style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;background:radial-gradient(circle at 25% 30%,rgba(123,107,255,.22),transparent 50%),radial-gradient(circle at 75% 70%,rgba(38,224,200,.2),transparent 50%),#0a0d10"><span style="font-family:var(--mono);font-size:30px;background:var(--spectrum);-webkit-background-clip:text;background-clip:text;color:transparent">${p.abstract||'∎'}</span></div>`;
    return `
    <article class="card reveal ${p.feature?'feature':''}" data-cat="${p.cat}" data-id="${p.id}" tabindex="0" role="button" aria-label="${esc(p.title)}">
      <div class="shot" style="--c:${cat.color}">
        ${shot}
        <span class="cat-badge"><i></i>${cat.label}</span>
      </div>
      <div class="body">
        <h4>${esc(p.title)}<span class="arrow">${detailBase?'→':(showLinkArrow?'↗':'＋')}</span></h4>
        <p>${esc(p.tagline)}</p>
        ${p.tags ? `<div class="meta">${p.tags.slice(0,3).map(t=>`<span>${t}</span>`).join('')}</div>` : ''}
      </div>
    </article>`;
  }

  mount.innerHTML = items.map(cardHTML).join('');
  observeReveals(mount);

  mount.querySelectorAll('.card').forEach(el=>{
    const open = ()=>{
      if(detailBase){ location.href = detailBase + el.dataset.id; return; }
      const p = items.find(x=>x.id===el.dataset.id);
      if(p) openProjectModal(p, cats);
    };
    el.addEventListener('click', open);
    el.addEventListener('keydown', e=>{ if(e.key==='Enter'||e.key===' '){ e.preventDefault(); open(); } });
  });

  if(filterMount){
    const counts = {};
    items.forEach(p=>counts[p.cat]=(counts[p.cat]||0)+1);
    filterMount.innerHTML =
      `<button class="filter active" data-f="all">All <span class="cnt">${items.length}</span></button>` +
      Object.entries(cats)
        .filter(([k])=>counts[k])
        .map(([k,c])=>`<button class="filter" data-f="${k}">${c.label} <span class="cnt">${counts[k]}</span></button>`)
        .join('');
    filterMount.addEventListener('click', e=>{
      const btn = e.target.closest('.filter');
      if(!btn) return;
      filterMount.querySelectorAll('.filter').forEach(b=>b.classList.toggle('active', b===btn));
      const f = btn.dataset.f;
      mount.querySelectorAll('.card').forEach(c=>{
        const show = f==='all' || c.dataset.cat===f;
        c.classList.toggle('hidden', !show);
        if(show){ c.classList.add('in-view'); }
      });
    });
  }
}

/* ============ AI page tabs ============ */
function initAITabs(){
  document.querySelectorAll('.ai-project').forEach(proj=>{
    const btns = proj.querySelectorAll('.tab-btn');
    const panels = proj.querySelectorAll('.tab-panel');
    btns.forEach((b,i)=>b.addEventListener('click',()=>{
      btns.forEach(x=>x.classList.remove('active'));
      panels.forEach(x=>x.classList.remove('active'));
      b.classList.add('active');
      panels[i].classList.add('active');
    }));
    const img = proj.querySelector('.slide-img img');
    if(img) proj.querySelector('.slide-img').addEventListener('click',()=>openLightbox(img.src));
  });
}

/* ============ horizontal timeline: drag + arrow nav ============ */
function initHTimeline(rootId){
  const root = document.getElementById(rootId);
  if(!root) return;
  const sc = root.querySelector('.tlh-scroll');
  root.querySelectorAll('.tlh-nav button').forEach(b=>{
    b.addEventListener('click',()=>sc.scrollBy({left: b.dataset.dir==='r'?330:-330, behavior:'smooth'}));
  });
  let down=false,sx=0,sl=0;
  sc.addEventListener('pointerdown',e=>{down=true;sx=e.clientX;sl=sc.scrollLeft;sc.classList.add('dragging');});
  addEventListener('pointermove',e=>{ if(down){ sc.scrollLeft = sl-(e.clientX-sx); } },{passive:true});
  addEventListener('pointerup',()=>{down=false;sc.classList.remove('dragging');});
}
