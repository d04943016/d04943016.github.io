/* ==================================================================
   Interactive, animated chart renderers (pure SVG, zero dependencies).
   Each renderer receives a container element and builds itself when
   its story step scrolls into view.  data-chart="<kind>"
   ================================================================== */

const NS = "http://www.w3.org/2000/svg";
function svgEl(tag, attrs){
  const el = document.createElementNS(NS, tag);
  for(const k in attrs) el.setAttribute(k, attrs[k]);
  return el;
}

/* ================= EQE vs year — the flagship chart ================= */
const EQE_DATA = [
  { y:2013, v:23.1, n:"ITO baseline",        e:"Ir(ppy)₂(acac)", lens:false },
  { y:2013, v:19.6, n:"PEDOT anode",         e:"Ir(ppy)₂(acac)", lens:false },
  { y:2014, v:39.0, n:"ITO + lens",          e:"Ir(ppy)₂(acac)", lens:true },
  { y:2014, v:44.1, n:"PEDOT + lens",        e:"Ir(ppy)₂(acac)", lens:true, rec:true },
  { y:2015, v:33.7, n:"TiO₂-PEDOT anode",    e:"Ir(ppy)₂(acac)", lens:false, ref:"Adv. Mater. 27, 929 (2015)" },
  { y:2015, v:54.3, n:"TiO₂-PEDOT + lens",   e:"Ir(ppy)₂(acac)", lens:true },
  { y:2015, v:61.9, n:"Nanomesh + lens",     e:"Ir(ppy)₂(acac)", lens:true, rec:true, ref:"Adv. Mater. 27, 4883 (2015)" },
  { y:2016, v:38.8, n:"TiO₂-PEDOT (ITO-free)", e:"Ir(ppy)₂(acac)", lens:false, ref:"Adv. Optical Mater. 4, 365 (2016)" },
  { y:2016, v:36.7, n:"SpiroAC-TRZ · sky-blue TADF", e:"world record 2016", lens:false, rec:true, ref:"Adv. Mater. 28, 6976 (2016)" },
  { y:2016, v:62.8, n:"SpiroAC-TRZ + lens",  e:"TADF", lens:true },
  { y:2016, v:50.3, n:"ITO + lens",          e:"Ir(ppy)₂(acac)", lens:true },
  { y:2016, v:64.5, n:"PEDOT (ITO-free) + lens", e:"Ir(ppy)₂(acac)", lens:true, rec:true, ref:"Adv. Funct. Mater. 26, 3250 (2016)" },
  { y:2017, v:29.2, n:"NAI-DPAC",            e:"TADF", lens:false },
  { y:2017, v:31.4, n:"Ir(III) complexes",   e:"phosphorescent series", lens:false },
  { y:2019, v:25.5, n:"SBA-2DPS",            e:"TADF", lens:false },
  { y:2020, v:41.5, n:"TNO + TZ-SBA",        e:"high-index electrode", lens:false, ref:"Org. Electron. 87, 105984 (2020)" },
  { y:2020, v:37.4, n:"TNO + tBu-MS2",       e:"high-index electrode", lens:false },
  { y:2020, v:27.5, n:"ANQDC-DMAC",          e:"TADF", lens:false },
  { y:2021, v:57.5, n:"Thin ITO + lens",     e:"first-author", lens:true, ref:"Org. Electron. 89, 106057 (2021)" },
  { y:2021, v:80.8, n:"Sapphire + TZ-SBA + lens", e:"the record", lens:true, rec:true, ref:"Org. Electron. 89, 106057 (2021)" }
];

function chartEQE(host){
  const W=760, H=470, L=62, R=20, T=46, B=52;
  const x = yr => L + (yr-2012.4)/(2021.8-2012.4)*(W-L-R);
  const y = v  => T + (1 - v/100)*(H-T-B);

  host.innerHTML = `
    <div class="ch-top">
      <div class="ch-title">External quantum efficiency · every published device</div>
      <div class="ch-controls">
        <button class="ch-leg on" data-g="lens"><i style="background:var(--amber)"></i>w/ macro lens</button>
        <button class="ch-leg on" data-g="bare"><i style="background:var(--cyan)"></i>w/o lens</button>
        <button class="ch-replay">↺ replay</button>
      </div>
    </div>
    <div class="ch-stage"></div>
    <div class="ch-tip" hidden></div>`;
  const stage = host.querySelector('.ch-stage');
  const tip = host.querySelector('.ch-tip');

  const svg = svgEl('svg', { viewBox:`0 0 ${W} ${H}`, class:'ch-svg' });
  stage.appendChild(svg);

  /* grid + axes */
  for(let v=0; v<=100; v+=20){
    svg.appendChild(svgEl('line',{x1:L,y1:y(v),x2:W-R,y2:y(v),class:'ch-grid'}));
    const lbl = svgEl('text',{x:L-10,y:y(v)+4,class:'ch-axis',
      'text-anchor':'end'}); lbl.textContent = v+'%'; svg.appendChild(lbl);
  }
  for(let yr=2013; yr<=2021; yr++){
    const lbl = svgEl('text',{x:x(yr),y:H-B+24,class:'ch-axis','text-anchor':'middle'});
    lbl.textContent = yr; svg.appendChild(lbl);
    svg.appendChild(svgEl('line',{x1:x(yr),y1:H-B,x2:x(yr),y2:H-B+6,class:'ch-tick'}));
  }
  svg.appendChild(svgEl('line',{x1:L,y1:H-B,x2:W-R,y2:H-B,class:'ch-axisline'}));

  /* conventional limit band */
  const band = svgEl('rect',{x:L,y:y(30),width:W-L-R,height:y(20)-y(30),class:'ch-band'});
  svg.appendChild(band);
  const bandLbl = svgEl('text',{x:W-R-8,y:y(30)-7,class:'ch-bandlbl','text-anchor':'end'});
  bandLbl.textContent = 'conventional planar limit · 20–30%';
  svg.appendChild(bandLbl);

  /* record staircase (w/ lens running max) */
  const recPts = [];
  let mx = 0;
  EQE_DATA.slice().sort((a,b)=>a.y-b.y || a.v-b.v).forEach(d=>{
    if(d.v > mx){ mx = d.v; recPts.push([x(d.y), y(d.v)]); }
  });
  let dStr = `M ${recPts[0][0]} ${recPts[0][1]}`;
  for(let i=1;i<recPts.length;i++) dStr += ` L ${recPts[i][0]} ${recPts[i][1]}`;
  const recPath = svgEl('path',{d:dStr,class:'ch-recpath'});
  svg.appendChild(recPath);

  /* year cursor label */
  const yearLbl = svgEl('text',{x:L+8,y:T+6,class:'ch-year'});
  svg.appendChild(yearLbl);

  /* points */
  const pts = EQE_DATA.slice().sort((a,b)=>a.y-b.y || a.v-b.v);
  const circles = pts.map((d,i)=>{
    const g = svgEl('g',{class:`ch-pt ${d.lens?'g-lens':'g-bare'} ${d.rec?'rec':''}`,
      transform:`translate(${x(d.y)},${y(d.v)})`});
    if(d.rec) g.appendChild(svgEl('circle',{r:11,class:'halo'}));
    g.appendChild(svgEl('circle',{r:5.5,class:'dot'}));
    svg.appendChild(g);

    const show = (evt)=>{
      tip.innerHTML = `<b>${d.n}</b><span>${d.v}% EQE · ${d.y} · ${d.lens?'w/ lens':'w/o lens'}</span>
        ${d.e?`<span>${d.e}</span>`:''}${d.ref?`<em>${d.ref}</em>`:''}`;
      tip.hidden = false;
      const r = stage.getBoundingClientRect();
      const px = r.width * (x(d.y)/W), py = r.height * (y(d.v)/H);
      tip.style.left = Math.min(Math.max(px, 90), r.width-110) + 'px';
      tip.style.top  = (py - 14) + 'px';
    };
    g.addEventListener('mouseenter', show);
    g.addEventListener('click', show);
    g.addEventListener('mouseleave', ()=>tip.hidden = true);
    return g;
  });

  /* play animation */
  let timer = [];
  function play(){
    timer.forEach(clearTimeout); timer = [];
    circles.forEach(c=>c.classList.remove('in'));
    recPath.classList.remove('draw');
    void recPath.getBoundingClientRect();
    const len = recPath.getTotalLength();
    recPath.style.strokeDasharray = len;
    recPath.style.strokeDashoffset = len;
    const totalMs = 3600;
    pts.forEach((d,i)=>{
      timer.push(setTimeout(()=>{
        circles[i].classList.add('in');
        yearLbl.textContent = d.y;
        if(d.rec || d.v > 75) yearLbl.classList.add('hot');
      }, 250 + (d.y-2013)/(2021-2013) * totalMs + (i%3)*90));
    });
    timer.push(setTimeout(()=>{
      recPath.classList.add('draw');
      recPath.style.transition = `stroke-dashoffset 2.8s cubic-bezier(.3,.6,.2,1)`;
      recPath.style.strokeDashoffset = 0;
    }, 600));
    timer.push(setTimeout(()=>{ yearLbl.textContent = '2013 → 2021'; yearLbl.classList.remove('hot'); }, 250+totalMs+700));
  }
  host.querySelector('.ch-replay').addEventListener('click', play);

  /* legend toggles */
  host.querySelectorAll('.ch-leg').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      btn.classList.toggle('on');
      const cls = btn.dataset.g === 'lens' ? 'g-lens' : 'g-bare';
      svg.querySelectorAll('.'+cls).forEach(g=>g.classList.toggle('off', !btn.classList.contains('on')));
    });
  });

  play();
}

/* ================= transmittance curves (glass / anti-UV) ================= */
function lineChart(host, cfg){
  const W=760, H=440, L=62, R=20, T=40, B=52;
  const x = wl => L + (wl-cfg.x0)/(cfg.x1-cfg.x0)*(W-L-R);
  const y = v  => T + (1 - v/100)*(H-T-B);

  host.innerHTML = `
    <div class="ch-top">
      <div class="ch-title">${cfg.title}</div>
      <div class="ch-controls">${cfg.series.map((s,i)=>
        `<button class="ch-leg on" data-i="${i}"><i style="background:${s.color}"></i>${s.name}</button>`).join('')}
        <button class="ch-replay">↺ replay</button>
      </div>
    </div>
    <div class="ch-stage"></div>`;
  const stage = host.querySelector('.ch-stage');
  const svg = svgEl('svg',{viewBox:`0 0 ${W} ${H}`,class:'ch-svg'});
  stage.appendChild(svg);

  for(let v=0;v<=100;v+=25){
    svg.appendChild(svgEl('line',{x1:L,y1:y(v),x2:W-R,y2:y(v),class:'ch-grid'}));
    const t=svgEl('text',{x:L-10,y:y(v)+4,class:'ch-axis','text-anchor':'end'}); t.textContent=v+'%'; svg.appendChild(t);
  }
  for(let wl=cfg.x0; wl<=cfg.x1; wl+=cfg.xstep){
    const t=svgEl('text',{x:x(wl),y:H-B+24,class:'ch-axis','text-anchor':'middle'}); t.textContent=wl; svg.appendChild(t);
  }
  const xl=svgEl('text',{x:(L+W-R)/2,y:H-6,class:'ch-axis','text-anchor':'middle'}); xl.textContent=cfg.xlabel; svg.appendChild(xl);
  svg.appendChild(svgEl('line',{x1:L,y1:H-B,x2:W-R,y2:H-B,class:'ch-axisline'}));

  /* visible-spectrum strip */
  if(cfg.spectrumStrip){
    const grad = svgEl('linearGradient',{id:'visspec',x1:0,y1:0,x2:1,y2:0});
    [['#7b6bff',380],['#4fc3f7',460],['#26e0c8',500],['#7ae582',540],['#ffc857',600],['#ff7b6b',680]].forEach(([c,wl])=>{
      const st=svgEl('stop',{offset:((wl-cfg.x0)/(cfg.x1-cfg.x0)*100)+'%','stop-color':c}); grad.appendChild(st);
    });
    const defs=svgEl('defs',{}); defs.appendChild(grad); svg.appendChild(defs);
    svg.appendChild(svgEl('rect',{x:x(Math.max(380,cfg.x0)),y:H-B+30,width:x(Math.min(700,cfg.x1))-x(Math.max(380,cfg.x0)),height:4,rx:2,fill:'url(#visspec)',opacity:.8}));
  }

  const paths = cfg.series.map(s=>{
    let d='';
    s.pts.forEach((p,i)=>{ d += (i?' L ':'M ') + x(p[0]) + ' ' + y(p[1]); });
    const path = svgEl('path',{d,class:'ch-line','stroke':s.color,'stroke-dasharray':s.dash||'none'});
    svg.appendChild(path);
    if(s.label){
      const lp = s.pts[Math.floor(s.pts.length*s.labelAt)];
      const t = svgEl('text',{x:x(lp[0]),y:y(lp[1])-10,class:'ch-linelbl',fill:s.color,'text-anchor':'middle'});
      t.textContent = s.label; svg.appendChild(t);
    }
    return path;
  });
  if(cfg.note){
    const t=svgEl('text',{x:x(cfg.note.x),y:y(cfg.note.y),class:'ch-note','text-anchor':cfg.note.anchor||'start'});
    t.textContent=cfg.note.text; svg.appendChild(t);
  }

  function play(){
    paths.forEach((p,i)=>{
      const len = p.getTotalLength();
      p.style.transition='none';
      p.style.strokeDasharray = cfg.series[i].dash ? cfg.series[i].dash : len;
      if(!cfg.series[i].dash){
        p.style.strokeDashoffset = len;
        void p.getBoundingClientRect();
        p.style.transition = `stroke-dashoffset 2.2s ease ${i*0.5}s`;
        p.style.strokeDashoffset = 0;
      } else {
        p.style.opacity = 0;
        void p.getBoundingClientRect();
        p.style.transition = `opacity 1.2s ease ${i*0.5}s`;
        p.style.opacity = 1;
      }
    });
  }
  host.querySelectorAll('.ch-leg').forEach(btn=>{
    btn.addEventListener('click',()=>{
      btn.classList.toggle('on');
      paths[+btn.dataset.i].style.opacity = btn.classList.contains('on') ? 1 : .08;
    });
  });
  host.querySelector('.ch-replay').addEventListener('click', play);
  play();
}

function chartGlassT(host){
  const flat=(v,j=0)=>{ const a=[]; for(let wl=400; wl<=700; wl+=20) a.push([wl, v + Math.sin(wl/37)*j]); return a; };
  lineChart(host,{
    title:'Cover-glass transmittance · designed by TMM-backprop, then fabricated',
    x0:400, x1:700, xstep:50, xlabel:'wavelength (nm)', spectrumStrip:true,
    series:[
      { name:'bare glass',      color:'#5c686f', pts:flat(92,.3),  label:'~92%', labelAt:.82 },
      { name:'single-side AR',  color:'#4fc3f7', pts:flat(96,.4),  label:'~96%', labelAt:.55 },
      { name:'double-side AR',  color:'#ffc857', pts:flat(99.2,.35), label:'>99% · measured 99.4% peak', labelAt:.3 }
    ],
    note:{x:405,y:13,text:'every % here is fingerprint-sensor SNR', anchor:'start'}
  });
}

function chartAntiUV(host){
  const block=[]; for(let wl=320; wl<=700; wl+=10){
    let v; if(wl<400) v=2+Math.random()*2; else if(wl<425) v=2+(wl-400)/25*90; else v=93+Math.sin(wl/26)*1.6;
    block.push([wl,v]);
  }
  const dbr=[]; for(let wl=320; wl<=700; wl+=10){
    let v; if(wl<400) v=4+Math.random()*3; else if(wl<430) v=4+(wl-400)/30*82; else v=88+Math.sin(wl/13)*7;
    dbr.push([wl,v]);
  }
  lineChart(host,{
    title:'Anti-UV/HEV cover film · block the damage, pass the image',
    x0:320, x1:700, xstep:50, xlabel:'wavelength (nm)', spectrumStrip:true,
    series:[
      { name:'plain DBR (ripple)', color:'#5c686f', dash:'5 5', pts:dbr, label:'passband ripple', labelAt:.75 },
      { name:'modified DBR',       color:'#26e0c8', pts:block, label:'high & flat in the visible', labelAt:.62 }
    ],
    note:{x:328,y:55,text:'UV/HEV blocked →', anchor:'start'}
  });
}

/* ================= dipole orientation ================= */
function chartDipole(host){
  const W=760, H=470;
  host.innerHTML = `
    <div class="ch-top">
      <div class="ch-title">Why orientation decides efficiency</div>
      <div class="ch-controls">
        <button class="ch-leg dip-btn on" data-o="h"><i style="background:var(--green)"></i>horizontal dipole</button>
        <button class="ch-leg dip-btn" data-o="v"><i style="background:var(--red)"></i>vertical dipole</button>
      </div>
    </div>
    <div class="ch-stage">
      <svg viewBox="0 0 ${W} ${H}" class="ch-svg" id="dipSvg">
        <defs>
          <radialGradient id="lobeG" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#7ae582" stop-opacity=".55"/>
            <stop offset="100%" stop-color="#7ae582" stop-opacity="0"/>
          </radialGradient>
          <radialGradient id="lobeR" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#ff7b6b" stop-opacity=".55"/>
            <stop offset="100%" stop-color="#ff7b6b" stop-opacity="0"/>
          </radialGradient>
        </defs>
        <!-- air -->
        <rect x="60" y="40" width="640" height="86" fill="rgba(255,255,255,.022)"/>
        <text x="80" y="78" class="ch-axis">air — where light must go</text>
        <!-- glass -->
        <rect x="60" y="126" width="640" height="70" fill="rgba(79,195,247,.05)"/>
        <text x="80" y="166" class="ch-axis">glass substrate</text>
        <!-- organics -->
        <rect x="60" y="196" width="640" height="120" fill="rgba(38,224,200,.06)"/>
        <text x="80" y="232" class="ch-axis">organic layers · emitter sits here</text>
        <!-- metal -->
        <rect x="60" y="316" width="640" height="40" fill="rgba(255,255,255,.07)"/>
        <text x="80" y="342" class="ch-axis">metal cathode — plasmon loss lives here</text>

        <!-- lobes -->
        <ellipse id="lobeH" cx="380" cy="258" rx="56" ry="150" fill="url(#lobeG)" style="transform-origin:380px 258px"/>
        <ellipse id="lobeV" cx="380" cy="258" rx="190" ry="48" fill="url(#lobeR)" style="transform-origin:380px 258px" opacity="0"/>

        <!-- dipole -->
        <g id="dipRod" style="transform-origin:380px 258px">
          <line x1="362" y1="258" x2="398" y2="258" stroke="#e8ecef" stroke-width="5" stroke-linecap="round"/>
        </g>
        <circle cx="380" cy="258" r="7" fill="#e8ecef"/>

        <!-- escape arrows -->
        <g id="escGood" class="esc">
          <path d="M 380 200 L 380 96" stroke="#7ae582" stroke-width="2.5" marker-end="url(#arrG)"/>
          <path d="M 348 204 L 318 110" stroke="#7ae582" stroke-width="2" opacity=".6"/>
          <path d="M 412 204 L 442 110" stroke="#7ae582" stroke-width="2" opacity=".6"/>
        </g>
        <g id="escBad" class="esc" opacity="0">
          <path d="M 320 258 L 130 258" stroke="#ff7b6b" stroke-width="2.5"/>
          <path d="M 440 258 L 630 258" stroke="#ff7b6b" stroke-width="2.5"/>
          <path d="M 380 300 L 380 330" stroke="#ff7b6b" stroke-width="2" opacity=".7"/>
        </g>
        <defs>
          <marker id="arrG" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 z" fill="#7ae582"/>
          </marker>
        </defs>
        <text id="dipVerdict" x="380" y="420" text-anchor="middle" class="ch-verdict" fill="#7ae582">most light escapes upward → HIGH EQE · this is why θ// = 83–87% emitters matter</text>
      </svg>
    </div>`;

  const $ = id => host.querySelector('#'+id);
  function setMode(o){
    const horizontal = o === 'h';
    $('dipRod').style.transition = 'transform .8s cubic-bezier(.5,0,.3,1)';
    $('dipRod').style.transform = horizontal ? 'rotate(0deg)' : 'rotate(90deg)';
    [['lobeH', horizontal],['lobeV', !horizontal],['escGood', horizontal],['escBad', !horizontal]].forEach(([id,on])=>{
      const el = $(id); el.style.transition='opacity .8s ease';
      el.style.opacity = on ? 1 : 0;
    });
    const v = $('dipVerdict');
    v.textContent = horizontal
      ? 'most light escapes upward → HIGH EQE · this is why θ// = 83–87% emitters matter'
      : 'light races along the plane → trapped in waveguide & plasmon modes → LOW EQE';
    v.setAttribute('fill', horizontal ? '#7ae582' : '#ff7b6b');
    host.querySelectorAll('.dip-btn').forEach(b=>b.classList.toggle('on', b.dataset.o===o));
  }
  host.querySelectorAll('.dip-btn').forEach(b=>b.addEventListener('click',()=>setMode(b.dataset.o)));

  /* auto demo: flip once after entry */
  setTimeout(()=>setMode('v'), 2400);
  setTimeout(()=>setMode('h'), 4800);
}

/* ================= optimizer convergence ================= */
function chartConverge(host){
  const W=760, H=440, L=62, R=20, T=40, B=52;
  const N=60;
  const loss=[]; let v=1;
  for(let i=0;i<N;i++){ v = v*0.86 + 0.002; loss.push(v + (i>4? (Math.sin(i*2.7)*0.012*Math.exp(-i/18)) : 0)); }
  const x = i => L + i/(N-1)*(W-L-R);
  const y = l => T + (1 - Math.max(0,Math.log10(l/0.001)/3)) * 0 + (1-(Math.log10(l)+3)/3)*(H-T-B);

  host.innerHTML = `
    <div class="ch-top">
      <div class="ch-title">One optimization run · analytical gradients through the TMM</div>
      <div class="ch-controls"><button class="ch-replay">↺ run again</button></div>
    </div>
    <div class="ch-stage"></div>
    <div class="ch-foot"><span class="ch-iter">iteration <b id="cvIter">0</b></span><span class="ch-time" id="cvTime"></span></div>`;
  const stage = host.querySelector('.ch-stage');
  const svg = svgEl('svg',{viewBox:`0 0 ${W} ${H}`,class:'ch-svg'});
  stage.appendChild(svg);

  [['1',1],['0.1',.1],['0.01',.01],['0.001',.001]].forEach(([lbl,val])=>{
    svg.appendChild(svgEl('line',{x1:L,y1:y(val),x2:W-R,y2:y(val),class:'ch-grid'}));
    const t=svgEl('text',{x:L-10,y:y(val)+4,class:'ch-axis','text-anchor':'end'}); t.textContent=lbl; svg.appendChild(t);
  });
  const xt=svgEl('text',{x:(L+W-R)/2,y:H-10,class:'ch-axis','text-anchor':'middle'}); xt.textContent='iteration (loss, log scale)'; svg.appendChild(xt);
  svg.appendChild(svgEl('line',{x1:L,y1:H-B,x2:W-R,y2:H-B,class:'ch-axisline'}));

  let d='';
  loss.forEach((l,i)=>{ d += (i?' L ':'M ')+x(i)+' '+y(l); });
  const path = svgEl('path',{d,class:'ch-line',stroke:'var(--amber)'});
  svg.appendChild(path);
  const head = svgEl('circle',{r:6,class:'ch-head',fill:'var(--amber)'});
  svg.appendChild(head);

  const iterEl = host.querySelector('#cvIter'), timeEl = host.querySelector('#cvTime');
  let raf;
  function play(){
    cancelAnimationFrame(raf);
    const len = path.getTotalLength();
    const t0 = performance.now(), dur = 3000;
    function tick(now){
      const p = Math.min((now-t0)/dur, 1);
      const ease = 1-Math.pow(1-p,2.2);
      path.style.strokeDasharray = len;
      path.style.strokeDashoffset = len*(1-ease);
      const pt = path.getPointAtLength(len*ease);
      head.setAttribute('cx',pt.x); head.setAttribute('cy',pt.y);
      iterEl.textContent = Math.round(ease*(N-1));
      timeEl.textContent = (ease*10).toFixed(1)+' s on a laptop — vs ~3 months by hand';
      if(p<1) raf=requestAnimationFrame(tick);
    }
    raf=requestAnimationFrame(tick);
  }
  host.querySelector('.ch-replay').addEventListener('click', play);
  play();
}

/* ================= registry + lazy init ================= */
const CHARTS = { eqe:chartEQE, glassT:chartGlassT, antiuv:chartAntiUV, dipole:chartDipole, converge:chartConverge };
function initChartsIn(root){
  root.querySelectorAll('[data-chart]:not([data-chinit])').forEach(el=>{
    const fn = CHARTS[el.dataset.chart];
    if(fn){ el.dataset.chinit='1'; fn(el); }
  });
}

/* ================= publications per year (stacked) ================= */
function chartPubs(host){
  const W=760, H=380, L=50, R=16, T=30, B=46;
  const years=[]; for(let y=2014;y<=2023;y++) years.push(y);
  const byYear={};
  years.forEach(y=>byYear[y]=[]);
  PUBS.forEach(p=>{ if(byYear[p.y]) byYear[p.y].push(p); });
  const maxN = Math.max(...years.map(y=>byYear[y].length));
  const bw = (W-L-R)/years.length*0.58;
  const x = i => L + (i+0.5)*(W-L-R)/years.length;
  const y = n => T + (1-n/(maxN+1))*(H-T-B);

  host.innerHTML = `
    <div class="ch-top">
      <div class="ch-title">Journal papers per year · colored by topic · hover a block</div>
      <div class="ch-controls">${Object.entries(PUB_TOPICS).map(([k,c])=>
        `<span class="ch-leg on" style="cursor:default"><i style="background:${c.color}"></i>${c.label}</span>`).join('')}</div>
    </div>
    <div class="ch-stage"></div>
    <div class="ch-tip" hidden></div>`;
  const stage = host.querySelector('.ch-stage');
  const tip = host.querySelector('.ch-tip');
  const svg = svgEl('svg',{viewBox:`0 0 ${W} ${H}`,class:'ch-svg'});
  stage.appendChild(svg);

  for(let n=0;n<=maxN;n+=2){
    svg.appendChild(svgEl('line',{x1:L,y1:y(n),x2:W-R,y2:y(n),class:'ch-grid'}));
    const t=svgEl('text',{x:L-8,y:y(n)+4,class:'ch-axis','text-anchor':'end'}); t.textContent=n; svg.appendChild(t);
  }
  svg.appendChild(svgEl('line',{x1:L,y1:H-B,x2:W-R,y2:H-B,class:'ch-axisline'}));

  const cssVar = v => getComputedStyle(document.documentElement).getPropertyValue(v.replace('var(','').replace(')','')).trim() || '#26e0c8';

  years.forEach((yr,i)=>{
    const lbl=svgEl('text',{x:x(i),y:H-B+22,class:'ch-axis','text-anchor':'middle'}); lbl.textContent=yr; svg.appendChild(lbl);
    let stack=0;
    byYear[yr].forEach((p,k)=>{
      const h = (H-T-B)/(maxN+1);
      const rect = svgEl('rect',{
        x:x(i)-bw/2, y:y(stack+1), width:bw, height:h-2.5, rx:3,
        fill:cssVar(PUB_TOPICS[p.topic].color), class:'pub-block',
        style:`opacity:0;transition:opacity .4s ease ${(i*0.08+k*0.05)}s${p.role!=='coauthor'?';stroke:#ffc857;stroke-width:1.5':''}`
      });
      svg.appendChild(rect);
      const show=()=>{
        tip.innerHTML=`<b>${p.t.length>90?p.t.slice(0,90)+'…':p.t}</b><span>${p.j||yr} · ${PUB_TOPICS[p.topic].label}</span>${p.role!=='coauthor'?`<em>${p.role==='first'?'first author':'co-first author'}</em>`:''}`;
        tip.hidden=false;
        const r=stage.getBoundingClientRect();
        tip.style.left=Math.min(Math.max(r.width*(x(i)/W),120),r.width-130)+'px';
        tip.style.top=(r.height*(y(stack+1)/H)-10)+'px';
      };
      rect.addEventListener('mouseenter',show);
      rect.addEventListener('click',show);
      rect.addEventListener('mouseleave',()=>tip.hidden=true);
      stack++;
    });
  });
  requestAnimationFrame(()=>svg.querySelectorAll('.pub-block').forEach(r=>r.style.opacity=.92));
}
CHARTS.pubs = chartPubs;
