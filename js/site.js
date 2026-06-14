/* ============ language switching ============ */
const LANG_KEY = 'wk-profile-lang';
const LANGS = { en: 'EN', zh: '繁中' };
function getLang(){
  return localStorage.getItem(LANG_KEY) === 'zh' ? 'zh' : 'en';
}
function isZh(){ return getLang() === 'zh'; }
function i18n(obj, key){
  if(!obj) return '';
  return isZh() ? (obj[key + 'Zh'] || obj[key] || '') : (obj[key] || '');
}
function i18nList(obj, key){
  return isZh() ? (obj[key + 'Zh'] || obj[key] || []) : (obj[key] || []);
}
function i18nCat(cat){ return isZh() ? (cat.labelZh || cat.label) : cat.label; }
function uiText(key){
  const zh = {
    all: '全部',
    first: '第一作者',
    cofirst: '共同第一作者',
    firstOnly: '★ 只看第一作者/共同第一作者',
    intro: '介紹 →',
    story: '故事 →',
    link: '[Link]',
    publisher: '[Link] 出版商頁面 ↗',
    scholar: '用 Google Scholar 搜尋 ↗',
    relatedStory: '相關研究故事 →',
    introduction: '導讀',
    keyPoints: '重點',
    contribution: '我的貢獻',
    schematicNote: '本站重繪示意圖，未使用出版社素材。',
    fitMainWork: '這篇如何連到我的主軸工作 → 閱讀故事',
    prevPaper: '← 上一篇',
    nextPaper: '下一篇 →',
    publications: '論文與專利',
    conference: '會議 · ',
    advisor: '指導教授'
  };
  const en = {
    all: 'All',
    first: 'First',
    cofirst: 'Co-first',
    firstOnly: '★ First-author only',
    intro: 'intro →',
    story: 'story →',
    link: '[Link]',
    publisher: '[Link] Publisher page ↗',
    scholar: 'Find on Google Scholar ↗',
    relatedStory: 'Related research story →',
    introduction: 'Introduction',
    keyPoints: 'Key points',
    contribution: 'My contribution',
    schematicNote: 'Schematic redrawn for this site — no publisher material reproduced.',
    fitMainWork: 'How this fits my main work → scroll the story',
    prevPaper: '← Previous paper',
    nextPaper: 'Next paper →',
    publications: 'Publications',
    conference: 'Conference · ',
    advisor: 'Advisor'
  };
  return (isZh() ? zh : en)[key] || key;
}
function setLanguage(lang){
  localStorage.setItem(LANG_KEY, lang === 'zh' ? 'zh' : 'en');
  location.reload();
}

const PAGE_ZH = {
  common: {
    nav: {
      'index.html': '首頁',
      'ai.html': 'AI × 半導體',
      'research.html': '研究',
      'software.html': '軟體',
      'publications.html': '論文與專利',
      'about.html': '關於'
    },
    contactTitle: '聯絡我',
    contactLede: '物理導向 AI · 科學軟體 · 半導體 R&D',
    footer: 'λ 380 → 700 nm · 物理 × AI'
  },
  'index.html': [
    ['.eyebrow', '首席工程師（AI/ML）· TSMC Pathfinding RD'],
    ['.hero-tag', '把 <em>物理、模擬與生成式 AI</em> 轉成真正能工作的系統，從創紀錄 OLED 到 AI 設計化學材料。'],
    ['.portrait-caption', '物理 × AI × 半導體'],
    ['#explore .sec-num', '<span class="wl" style="background:#4fc3f7"></span>探索'],
    ['#explore h2', '選一條路進來'],
    ['#explore .sec-lede', '同一段工作，五個入口；從你最感興趣的方向開始。'],
    ['#timeline .sec-num', '<span class="wl" style="background:#7ae582"></span>時間軸'],
    ['#timeline h2', '背景一覽'],
    ['#timeline .sec-lede', '學歷、研究訓練與目前的 AI/ML 角色。'],
    ['.stat:nth-child(1) .lbl', '期刊論文<br>（6 篇第一作者）'],
    ['.stat:nth-child(2) .lbl', '引用'],
    ['.stat:nth-child(3) .lbl', '專利<br>（US 7 · TW 4 · CN 2）'],
    ['.stat:nth-child(4) .lbl', 'R&D 設計週期<br>壓縮'],
    ['.dir-row:nth-child(1) .dir-kicker', '2022 — 現在 · TSMC Pathfinding'],
    ['.dir-row:nth-child(1) h3', 'AI × 半導體'],
    ['.dir-row:nth-child(1) .dir-desc', '生成式材料設計、物理導向 recipe 優化、LLM 知識探索，以 objective → challenge → result 的方式呈現。'],
    ['.dir-row:nth-child(1) .dir-meta', '<b>week → min</b><br>設計週期'],
    ['.dir-row:nth-child(2) h3', 'OLED 與光子學研究'],
    ['.dir-row:nth-child(2) .dir-desc', '從推導光學模型到創紀錄效率元件，17 個專案各自是一個有互動圖的滾動式故事。'],
    ['.dir-row:nth-child(2) .dir-meta', '<b>17</b> 個專案<br><b>80.8%</b> 紀錄 EQE'],
    ['.dir-row:nth-child(3) .dir-kicker', 'side projects · agentic coding'],
    ['.dir-row:nth-child(3) h3', '科學軟體'],
    ['.dir-row:nth-child(3) .dir-desc', '模擬工作台、實驗流程平台、AI 工具，把 script-based physics 做成產品。'],
    ['.dir-row:nth-child(3) .dir-meta', '<b>9</b> 個專案<br><b>4</b> 個領域'],
    ['.dir-row:nth-child(4) .dir-kicker', '2014 — 2023 · peer-reviewed'],
    ['.dir-row:nth-child(4) h3', '論文與專利'],
    ['.dir-row:nth-child(4) .dir-desc', '每篇論文都有自己的介紹頁：重點、我的貢獻、原創示意圖與 DOI 連結。'],
    ['.dir-row:nth-child(4) .dir-meta', '<b>37</b> 篇期刊論文<br><b>13</b> 件專利'],
    ['.dir-row:nth-child(5) .dir-kicker', 'bio · honors · skills'],
    ['.dir-row:nth-child(5) h3', '關於'],
    ['.dir-row:nth-child(5) .dir-desc', '專案背後的人：故事、認可、指導經驗與累積出的工具箱。'],
    ['.dir-row:nth-child(5) .dir-meta', '<b>NTU</b> → <b>TSMC</b><br>物理 × AI'],
    ['#timeline .tlh-item:nth-child(1) .tlh-t', '學士，台大'],
    ['#timeline .tlh-item:nth-child(1) .tlh-s', '主修：<b>電機工程</b><br>輔修：<b>物理</b><br>排名：<b>30/204</b>'],
    ['#timeline .tlh-item:nth-child(2) .tlh-t', '碩士，台大'],
    ['#timeline .tlh-item:nth-child(2) .tlh-s', '電子工程學研究所（GIEE）<br>指導教授：<b>Dr. Chung-Chih Wu</b><br>研究：<b>OLED 光學</b>'],
    ['#timeline .tlh-item:nth-child(3) .tlh-t', '博士，台大'],
    ['#timeline .tlh-item:nth-child(3) .tlh-s', 'GIEE<br>指導教授：<b>Dr. Chung-Chih Wu</b><br>研究：<b>OLED、光學、材料</b>'],
    ['#timeline .tlh-item:nth-child(4) .tlh-t', '博士後研究員，台大'],
    ['#timeline .tlh-item:nth-child(4) .tlh-s', '指導教授：<b>Dr. Chung-Chih Wu</b><br>研究：<b>OLED 光學</b><br>指導 MS 與 PhD students'],
    ['#timeline .tlh-item:nth-child(5) .tlh-s', '<b>Pathfinding, RD</b><br>Principal Engineer (AI/ML)']
  ],
  'ai.html': [
    ['.page-hero .crumb', 'TSMC · Pathfinding RD · 2022 — 現在'],
    ['.page-title', 'AI × 半導體'],
    ['.page-lede', '早期半導體 R&D 的 AI/ML 工作，以簡潔的 objective 與 challenge 呈現。'],
    ['#more .sec-num', '<span class="wl" style="background:#ffc857"></span>專案之外'],
    ['#more h2', '留下能延續的能力'],
    ['#more .card:nth-child(1) h4', '🖥️ 共用運算流程'],
    ['#more .card:nth-child(1) p', '支援可重複使用的 AI 與原子尺度模擬運算流程，讓技術團隊能更獨立地執行大型實驗。'],
    ['#more .card:nth-child(2) h4', '🌱 指導與協作'],
    ['#more .card:nth-child(2) p', '指導 early-career colleagues 建立科學 AI workflow 與專案執行能力。'],
    ['#more .card:nth-child(3) h4', '📚 技術訓練'],
    ['#more .card:nth-child(3) p', '提供科學 AI workflow 與文獻式知識探索的技術訓練。'],
    ['#more .contact-row a:nth-child(1)', '<span class="dot" style="background:var(--amber)"></span>背後的物理：NTU 研究 ↗'],
    ['#more .contact-row a:nth-child(2)', '<span class="dot" style="background:var(--green)"></span>同樣思維，週末尺度：軟體 ↗']
  ],
  'research.html': [
    ['.page-hero .crumb', 'NTU · Prof. Chung-Chih Wu group · 2013 — 2022'],
    ['.page-title', 'OLED 與光子學研究'],
    ['.page-lede', '推導模型 → 建立軟體 → 萃取參數 → 製作元件。17 個專案都以 scroll-driven story 呈現問題、方法、結果與原創圖。點任一卡片進入故事。'],
    ['.page-hero .contact-row .chip:nth-child(1)', '<span class="dot" style="background:var(--blue)"></span>37 篇期刊論文'],
    ['.page-hero .contact-row .chip:nth-child(2)', '<span class="dot" style="background:var(--cyan)"></span>引用 &gt; 4,000'],
    ['.page-hero .contact-row .chip:nth-child(3)', '<span class="dot" style="background:var(--amber)"></span>13 件專利'],
    ['section:nth-of-type(2) .contact-row a:nth-child(1)', '<span class="dot" style="background:var(--cyan)"></span>這段路通向哪裡：TSMC 的 AI ↗'],
    ['section:nth-of-type(2) .contact-row a:nth-child(2)', '<span class="dot" style="background:var(--green)"></span>工具如何重生成軟體 ↗']
  ],
  'software.html': [
    ['.page-hero .crumb', 'Side projects · agentic coding · 晚上與週末'],
    ['.page-title', '科學軟體'],
    ['.page-lede', '把 script-based physics 變成產品：模擬工作台、實驗流程平台、AI tooling 與資料系統，從設計到出貨都獨立完成。<b style="color:var(--ink)">點卡片</b>看 highlights 與 GitHub write-up。'],
    ['section:nth-of-type(2) .contact-row a:nth-child(1)', '<span class="dot" style="background:var(--amber)"></span>這些工具背後的物理 ↗'],
    ['section:nth-of-type(2) .contact-row a:nth-child(2)', '<span class="dot" style="background:var(--cyan)"></span>白天工作：TSMC 的 AI ↗']
  ],
  'publications.html': [
    ['.page-hero .crumb', '2014 — 2023 · 期刊 · 會議 · 專利 · 博士論文'],
    ['.page-title', '論文與專利'],
    ['.page-lede', '十年的 peer-reviewed output，整理自原始 PDF。標記 <span class="role-badge first" style="vertical-align:1px">First</span> 的項目為第一作者；多數項目可連到對應研究故事。'],
    ['#pubTl .sec-num', '<span class="wl" style="background:#26e0c8"></span>時間軸'],
    ['#pubTl h2', '十年出版軌跡'],
    ['#pubTl + .sec-lede', '把 publication record 當成一條光譜路徑；可拖曳或使用箭頭瀏覽。'],
    ['section:nth-of-type(3) .sec-num', '<span class="wl" style="background:#ffc857"></span>精選'],
    ['section:nth-of-type(3) h2', '代表作品'],
    ['section:nth-of-type(4) .sec-num', '<span class="wl" style="background:#4fc3f7"></span>期刊'],
    ['section:nth-of-type(4) h2', '所有期刊論文'],
    ['section:nth-of-type(4) .sec-lede', '依主題篩選，或只看第一作者/共同第一作者作品。']
  ],
  'about.html': [
    ['.page-hero .crumb', '專案背後的人'],
    ['.page-title', '關於'],
    ['.bio-lede', '我喜歡那種 <span class="hl">物理不能妥協</span> 的問題，而工具是我分享答案的方式。'],
    ['.bio-text p:nth-child(2)', '我從台大電機開始，輔修物理（排名 30/204）。一個天線設計挑戰，也就是 IEEE AP-S Student Design Challenge 全球 6 組準決賽隊伍之一，讓我第一次學會把演算法與硬體閉環。'],
    ['.bio-text p:nth-child(3)', '接著在 Prof. Chung-Chih Wu group 九年：從 Maxwell 方程式推導光學模型，把它做成整個實驗室都能用的 <b>&gt;300-file simulation suite</b>，並製作 OLED 元件，把外部量子效率從傳統約 25% 極限推到 <b>80.8%</b>。過程中累積 37 篇期刊論文、超過 4,000 引用、13 件專利，以及把方法產品化的習慣。'],
    ['.bio-text p:nth-child(4)', '自 2022 年起，我在 <b>TSMC Pathfinding</b> 擔任 Principal Engineer (AI/ML)，建立早期半導體 R&D 的科學 AI，工作橫跨材料、製程優化與文獻式知識探索。晚上與週末，我用 agentic coding 打造<a href="software.html" style="border-bottom:1px dotted var(--ink-faint)">科學軟體</a>。'],
    ['.bio-text p:nth-child(5)', '語言：中文（母語）· 英文 · 日文（JLPT N2）'],
    ['section:nth-of-type(2) .sec-num', '<span class="wl" style="background:#ffc857"></span>經歷與認可'],
    ['section:nth-of-type(2) h2', '榮譽與指導'],
    ['.mentor-card h4', '教學與指導'],
    ['section:nth-of-type(3) .sec-num', '<span class="wl" style="background:#26e0c8"></span>工具箱'],
    ['section:nth-of-type(3) h2', '技能與學歷']
  ],
  'project.html': [
    ['footer .wrap span:nth-child(2)', '<a href="research.html" style="border-bottom:1px dotted var(--ink-faint)">← 所有研究專案</a>']
  ],
  'paper.html': [
    ['footer .wrap span:nth-child(2)', '<a href="publications.html" style="border-bottom:1px dotted var(--ink-faint)">← 所有論文</a>']
  ]
};

function pageName(){
  const name = location.pathname.split('/').pop();
  return name || 'index.html';
}
function rememberHtml(el){
  if(!el.dataset.enHtml) el.dataset.enHtml = el.innerHTML;
}
function setHtml(selector, html){
  document.querySelectorAll(selector).forEach(el=>{
    rememberHtml(el);
    el.innerHTML = isZh() ? html : el.dataset.enHtml;
  });
}
function applyLanguage(){
  const lang = getLang();
  document.documentElement.lang = lang === 'zh' ? 'zh-Hant' : 'en';
  document.querySelectorAll('.nav-links a').forEach(a=>{
    rememberHtml(a);
    const key = a.getAttribute('href');
    a.innerHTML = lang === 'zh' ? (PAGE_ZH.common.nav[key] || a.dataset.enHtml) : a.dataset.enHtml;
  });
  const navToggle = document.getElementById('navToggle');
  if(navToggle){
    rememberHtml(navToggle);
    navToggle.textContent = lang === 'zh' ? '選單' : navToggle.dataset.enHtml;
  }
  document.querySelectorAll('.contact-strip h2').forEach(el=>{ rememberHtml(el); el.textContent = lang === 'zh' ? PAGE_ZH.common.contactTitle : el.dataset.enHtml; });
  document.querySelectorAll('.contact-strip .lede').forEach(el=>{ rememberHtml(el); el.textContent = lang === 'zh' ? PAGE_ZH.common.contactLede : el.dataset.enHtml; });
  document.querySelectorAll('footer .wrap > span:nth-child(2)').forEach(el=>{ rememberHtml(el); el.innerHTML = lang === 'zh' ? PAGE_ZH.common.footer : el.dataset.enHtml; });
  const list = PAGE_ZH[pageName()] || [];
  list.forEach(([selector, html])=>setHtml(selector, html));
  document.querySelectorAll('.lang-toggle').forEach(btn=>{
    btn.textContent = lang === 'zh' ? 'EN' : '繁中';
    btn.setAttribute('aria-label', lang === 'zh' ? 'Switch to English' : '切換成繁體中文');
  });
}

function initLanguageToggle(){
  const bar = document.querySelector('nav.site .bar');
  if(!bar || document.querySelector('.lang-toggle')) return;
  const btn = document.createElement('button');
  btn.className = 'lang-toggle';
  btn.type = 'button';
  btn.addEventListener('click',()=>setLanguage(isZh() ? 'en' : 'zh'));
  bar.insertBefore(btn, document.getElementById('navToggle'));
}

/* ============ shared interactions ============ */
initLanguageToggle();
applyLanguage();


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
function workflowHTML(steps, stepsZh){
  const wfSteps = isZh() ? (stepsZh || steps || []) : (steps || []);
  const loopText = isZh() ? 'review-fix 循環 → 重複直到乾淨' : 'review-fix loop → repeat until clean';
  if(!steps || !steps.length) return '';
  return `
    <div class="m-workflow" aria-label="workflow diagram">
      <div class="wf-title">${isZh() ? '流程' : 'Workflow'}</div>
      <div class="wf-rail">
        ${wfSteps.map((s,i)=>`
          <div class="wf-step">
            <span class="wf-num">${String(i+1).padStart(2,'0')}</span>
            <b>${esc(s.t)}</b>
            <small>${esc(s.d)}</small>
          </div>`).join('')}
      </div>
      <div class="wf-loop">${loopText}</div>
    </div>`;
}
function openProjectModal(p, catMap){
  const cat = catMap ? catMap[p.cat] : null;
  const imgs = [p.img, p.img2].filter(Boolean);
  const title = i18n(p, 'title');
  veil.innerHTML = `
    <div class="modal" role="dialog" aria-modal="true">
      <div class="m-top"></div>
      <button class="m-close" aria-label="Close">✕</button>
      ${imgs.length ? `
      <div class="m-img" data-src="${imgs[0]}">
        <img src="${imgs[0]}" alt="${esc(title)}">
        <span class="zoom-hint">${isZh() ? '點擊放大' : 'CLICK TO ZOOM'}${imgs.length>1 ? ' · '+imgs.length+(isZh() ? ' 張圖' : ' FIGURES') : ''}</span>
      </div>` : ''}
      <div class="m-body">
        ${cat ? `<div class="m-cat" style="color:${cat.color}">${i18nCat(cat)}</div>` : ''}
        <h3>${esc(title)}</h3>
        <p class="m-tagline">${esc(i18n(p, 'tagline'))}</p>
        <ul class="m-facts">${i18nList(p, 'facts').map(f=>`<li>${f}</li>`).join('')}</ul>
        ${workflowHTML(p.workflow, p.workflowZh)}
        ${p.refs ? `<div class="m-refs">${p.refs.map(r=>'» '+r).join('<br>')}</div>` : ''}
        ${p.tags ? `<div class="m-tags">${p.tags.map(t=>`<span>${t}</span>`).join('')}</div>` : ''}
        ${p.link ? `<a class="m-link" href="${p.link}" target="_blank" rel="noopener">${isZh() ? '在 GitHub 看 write-up ↗' : 'View write-up on GitHub ↗'}</a>` : ''}
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
    const title = i18n(p, 'title');
    const shot = p.img
      ? `<img src="${p.img}" alt="${esc(title)}" loading="lazy">`
      : `<div class="abstract" style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;background:radial-gradient(circle at 25% 30%,rgba(123,107,255,.22),transparent 50%),radial-gradient(circle at 75% 70%,rgba(38,224,200,.2),transparent 50%),#0a0d10"><span style="font-family:var(--mono);font-size:30px;background:var(--spectrum);-webkit-background-clip:text;background-clip:text;color:transparent">${p.abstract||'∎'}</span></div>`;
    return `
    <article class="card reveal ${p.feature?'feature':''}" data-cat="${p.cat}" data-id="${p.id}" tabindex="0" role="button" aria-label="${esc(title)}">
      <div class="shot" style="--c:${cat.color}">
        ${shot}
        <span class="cat-badge"><i></i>${i18nCat(cat)}</span>
      </div>
      <div class="body">
        <h4>${esc(title)}<span class="arrow">${detailBase?'→':(showLinkArrow?'↗':'＋')}</span></h4>
        <p>${esc(i18n(p, 'tagline'))}</p>
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
      `<button class="filter active" data-f="all">${isZh() ? '全部' : 'All'} <span class="cnt">${items.length}</span></button>` +
      Object.entries(cats)
        .filter(([k])=>counts[k])
        .map(([k,c])=>`<button class="filter" data-f="${k}">${i18nCat(c)} <span class="cnt">${counts[k]}</span></button>`)
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
