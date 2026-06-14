/* ============ scrollytelling engine (project.html) ============ */

/* ---- visual renderers ---- */
function vImage(v){
  return `<figure class="v-frame" data-zoom="${v.src}">
    <span class="zoom-tag">CLICK TO ZOOM</span>
    <img src="${v.src}" alt="${v.cap||''}" loading="lazy">
    ${v.cap ? `<figcaption class="v-cap">${v.cap}</figcaption>` : ''}
  </figure>`;
}
function vBignum(v){
  return `<div class="v-bignum">
    <div class="bn">${v.value}</div>
    <div class="bn-label">${v.label||''}</div>
    ${v.sub ? `<div class="bn-sub">${v.sub}</div>` : ''}
  </div>`;
}
function vBars(v){
  return `<div class="v-bars">${v.items.map((b,i)=>`
    <div class="vb ${b.hot?'hot':''}">
      <span class="l">${b.l}</span>
      <span class="track"><i style="--w:${b.w}%;--d:${i*0.12}s"></i></span>
      <span class="v">${b.v}</span>
    </div>`).join('')}</div>`;
}
function vFlow(v){
  return `<div class="v-flow ${v.loop?'loop':''}">${v.nodes.map((n,i)=>`
    ${i>0 ? `<span class="farrow" style="--d:${i*0.18-0.06}s">↓</span>` : ''}
    <div class="fnode" style="--d:${i*0.18}s">
      <div class="fn-t"><span class="idx">${String(i+1).padStart(2,'0')}</span>${n.t}</div>
      ${n.s ? `<div class="fn-s">${n.s}</div>` : ''}
    </div>`).join('')}
    ${v.loop ? `<span class="farrow" style="--d:${v.nodes.length*0.18}s">↺ repeat</span>` : ''}
  </div>`;
}
function vStack(v){
  return `<div>
    <div class="v-stack">${v.layers.map((l,i)=>`
      <div class="slayer ${l.hl?'hl':''}" style="--lc:${l.c||'#5c686f'};--d:${i*0.1}s">
        <span class="ln">${l.n}</span>
        ${l.note ? `<span class="lnote">${l.note}</span>` : ''}
      </div>`).join('')}</div>
    ${v.cap ? `<div class="v-stack-cap">${v.cap}</div>` : ''}
  </div>`;
}
function vCompare(v){
  const panel = (p, side) => `
    <div class="cpanel ${p.win?'win':''}" style="--d:${side==='l'?'0s':'0.15s'}">
      <div class="cp-k">${p.k}</div>
      <div class="cp-v">${p.v}</div>
      <div class="cp-s">${p.s||''}</div>
    </div>`;
  return `<div class="v-compare">${panel(v.left,'l')}${panel(v.right,'r')}</div>`;
}
function vQuote(v){
  return `<blockquote class="v-quote">${v.text}${v.sub?`<span class="vq-sub">${v.sub}</span>`:''}</blockquote>`;
}
function vChart(v){
  return `<div class="v-chart" data-chart="${v.kind}"></div>`;
}
const VISUALS = { image:vImage, bignum:vBignum, bars:vBars, flow:vFlow, stack:vStack, compare:vCompare, quote:vQuote, chart:vChart };

/* ---- page assembly ---- */
(function(){
  const params = new URLSearchParams(location.search);
  const id = params.get('id') || RESEARCH[0].id;
  const idx = Math.max(0, RESEARCH.findIndex(p => p.id === id));
  const project = RESEARCH[idx];
  const story = STORIES[project.id] || [];
  const cat = RESEARCH_CATS[project.cat];
  const projectTitle = i18n(project, 'title');

  document.title = projectTitle + " — Wei-Kai Lee";
  document.documentElement.style.setProperty('--story-c', cat.color);

  /* hero */
  document.getElementById('storyHero').innerHTML = `
    <div class="cover" style="background-image:url('${project.img}')"></div>
    <div class="cover-fade"></div>
    <div class="wrap">
      <div class="crumb reveal" style="color:${cat.color}">
        <a href="research.html">${isZh() ? '研究' : 'Research'}</a>&nbsp;/&nbsp;${i18nCat(cat)}
      </div>
      <h1 class="reveal d1">${projectTitle}</h1>
      <p class="tagline reveal d2">${i18n(project, 'tagline')}</p>
      <div class="hero-meta reveal d3">
        ${(project.tags||[]).map(t=>`<span class="chip" style="cursor:default"><span class="dot" style="background:${cat.color}"></span>${t}</span>`).join('')}
      </div>
    </div>
    <div class="scroll-cue">${isZh() ? '向下' : 'SCROLL'}</div>`;

  /* steps */
  const total = story.length;
  document.getElementById('storyFlow').innerHTML = story.map((s,i)=>`
    <section class="story-step ${i%2 ? 'flip' : ''}" id="step-${i}">
      <div class="wrap">
        <div class="step-text">
          <div class="step-kicker">
            <span class="stepno">${String(i+1).padStart(2,'0')}<small> / ${String(total).padStart(2,'0')}</small></span>
            ${s.kicker}
          </div>
          <h3>${s.title}</h3>
          <div class="step-body">${s.body||''}</div>
        </div>
        <div class="step-visual">${(VISUALS[s.visual.type]||(()=>''))(s.visual)}</div>
      </div>
    </section>`).join('');

  /* refs */
  document.getElementById('storyRefs').innerHTML = `
    <div class="wrap">
      <h4>${isZh() ? '參考資料與備註' : 'References & Notes'}</h4>
      <div class="ref-line">${(project.refs||[]).map(r=>'» '+r).join('<br>')}</div>
      <div class="m-tags">${(project.tags||[]).map(t=>`<span>${t}</span>`).join('')}</div>
    </div>`;

  /* prev / next */
  const prev = RESEARCH[(idx - 1 + RESEARCH.length) % RESEARCH.length];
  const next = RESEARCH[(idx + 1) % RESEARCH.length];
  document.getElementById('storyNext').innerHTML = `
    <a href="project.html?id=${prev.id}">
      <span class="sn-k">${isZh() ? '← 上一個專案' : '← Previous project'}</span>
      <span class="sn-t">${i18n(prev, 'title')}</span>
    </a>
    <a href="project.html?id=${next.id}">
      <span class="sn-k">${isZh() ? '下一個專案 →' : 'Next project →'}</span>
      <span class="sn-t">${i18n(next, 'title')}</span>
    </a>`;

  /* dot rail */
  const rail = document.getElementById('dotRail');
  rail.innerHTML = story.map((s,i)=>`<a href="#step-${i}" title="${s.kicker}"></a>`).join('');
  const dots = [...rail.children];

  /* step activation */
  const stepIO = new IntersectionObserver(es=>{
    es.forEach(e=>{
      if(e.isIntersecting){
        e.target.classList.add('on');
        if(typeof initChartsIn === 'function') initChartsIn(e.target);
        const i = +e.target.id.split('-')[1];
        dots.forEach((d,j)=>d.classList.toggle('active', j===i));
      }
    });
  },{threshold:.35});
  document.querySelectorAll('.story-step').forEach(s=>stepIO.observe(s));

  /* scroll progress */
  const prog = document.getElementById('scrollProgress');
  addEventListener('scroll',()=>{
    const h = document.documentElement;
    prog.style.width = (h.scrollTop / (h.scrollHeight - h.clientHeight) * 100) + '%';
  },{passive:true});

  /* zoomable visuals */
  document.addEventListener('click',e=>{
    const f = e.target.closest('[data-zoom]');
    if(f) openLightbox(f.dataset.zoom);
  });

  observeReveals();
})();
