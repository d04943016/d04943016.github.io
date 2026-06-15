/* ==================================================================
   Original SVG schematics for paper introduction pages — v3.
   Full-width cinematic canvas (960×460), drawn in the site's design
   language. No publisher material reproduced.
   ================================================================== */

const FIG_C = { ink:"#e8ecef", dim:"#9aa6ad", faint:"#5c686f",
  blue:"#4fc3f7", cyan:"#26e0c8", green:"#7ae582", amber:"#ffc857", red:"#ff7b6b", violet:"#7b6bff" };

function figDefs(){
  const set=(id,c)=>`
    <linearGradient id="g-${id}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="${c}" stop-opacity=".95"/><stop offset="1" stop-color="${c}" stop-opacity=".5"/>
    </linearGradient>
    <linearGradient id="beam-${id}" x1="0" y1="1" x2="0" y2="0">
      <stop offset="0" stop-color="${c}" stop-opacity=".5"/><stop offset="1" stop-color="${c}" stop-opacity="0"/>
    </linearGradient>
    <radialGradient id="halo-${id}"><stop offset="0" stop-color="${c}" stop-opacity=".45"/><stop offset="1" stop-color="${c}" stop-opacity="0"/></radialGradient>
    <marker id="arr-${id}" markerWidth="8" markerHeight="8" refX="5" refY="4" orient="auto">
      <path d="M1,1 L6.5,4 L1,7" fill="none" stroke="${c}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
    </marker>`;
  return `<defs>
    ${set('blue',FIG_C.blue)}${set('cyan',FIG_C.cyan)}${set('green',FIG_C.green)}
    ${set('amber',FIG_C.amber)}${set('red',FIG_C.red)}${set('violet',FIG_C.violet)}${set('gray','#8a97a0')}
    <filter id="soft" x="-60%" y="-60%" width="220%" height="220%"><feGaussianBlur stdDeviation="6"/></filter>
    <filter id="soft2" x="-80%" y="-80%" width="260%" height="260%"><feGaussianBlur stdDeviation="14"/></filter>
  </defs>`;
}
function gid(c){ return {[FIG_C.blue]:'blue',[FIG_C.cyan]:'cyan',[FIG_C.green]:'green',[FIG_C.amber]:'amber',[FIG_C.red]:'red',[FIG_C.violet]:'violet'}[c]||'gray'; }
function figWrap(inner){
  return `<svg viewBox="0 0 960 460" xmlns="http://www.w3.org/2000/svg" class="pf-svg" font-family="IBM Plex Sans,system-ui,sans-serif">
    ${figDefs()}${inner}</svg>`;
}
function esc2(s){ return (s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;'); }
function mono(x,y,size,fill,text,anchor='start',ls=0){
  return `<text x="${x}" y="${y}" font-size="${size}" fill="${fill}" text-anchor="${anchor}" font-family="IBM Plex Mono,monospace" ${ls?`letter-spacing="${ls}"`:''}>${esc2(text)}</text>`;
}
function figCap(t){ return t?mono(480,448,11,FIG_C.faint,t.toUpperCase(),'middle',2):''; }
function statChip(x,y,big,small){
  return `<g>
    <rect x="${x-86}" y="${y-46}" width="172" height="92" rx="20" fill="rgba(255,200,87,.06)" stroke="rgba(255,200,87,.38)" stroke-width="1.2"/>
    <text x="${x}" y="${y+6}" font-size="40" fill="${FIG_C.amber}" font-weight="700" text-anchor="middle" font-family="IBM Plex Sans,sans-serif">${big}</text>
    ${mono(x,y+30,10.5,FIG_C.dim,small||'EQE','middle',3)}
  </g>`;
}
function rayUp(x,y0,len,c,w=3){
  return `<line x1="${x}" y1="${y0}" x2="${x}" y2="${y0-len}" stroke="${c}" stroke-width="${w}" marker-end="url(#arr-${gid(c)})" stroke-linecap="round"/>`;
}
function raySlant(x,y0,dx,dy,c,w=2.4,op=.85){
  return `<line x1="${x}" y1="${y0}" x2="${x+dx}" y2="${y0-dy}" stroke="${c}" stroke-width="${w}" opacity="${op}" marker-end="url(#arr-${gid(c)})" stroke-linecap="round"/>`;
}
function hexPath(cx,cy,r,rot=0){
  let d='';
  for(let i=0;i<6;i++){ const a=(60*i+rot-90)*Math.PI/180;
    d+=(i?'L':'M')+(cx+r*Math.cos(a)).toFixed(1)+' '+(cy+r*Math.sin(a)).toFixed(1)+' '; }
  return d+'Z';
}
function hexCluster(cx,cy,c,n=3,r=30){
  const offs = n>=3 ? [[0,-r*0.55],[-r*0.95,r*0.55],[r*0.95,r*0.55]] : n===2 ? [[-r*0.55,0],[r*0.55,0]] : [[0,0]];
  let s=`<circle cx="${cx}" cy="${cy}" r="${r*2.6}" fill="url(#halo-${gid(c)})" opacity=".55"/>`;
  offs.forEach((o,i)=>{
    s+=`<path d="${hexPath(cx+o[0],cy+o[1],r)}" fill="${c}" opacity=".14"/>
        <path d="${hexPath(cx+o[0],cy+o[1],r)}" fill="none" stroke="${c}" stroke-width="2"/>`;
  });
  return s;
}

/* ================= device stack — full-width composition ================= */
function figStack(p){
  const layers=p.layers;
  const X=300, W=360, total=300, top=120;
  const hSum=layers.reduce((a,l)=>a+(l.h||1),0);
  let y=top, rows='', notes='', glowY=null, glowH=0;
  layers.forEach(l=>{
    const h=(l.h||1)/hSum*total;
    const c=l.c||'#6b7a85';
    if(l.hl && /EML|Emitting/i.test(l.n)){ glowY=y+h/2; glowH=h; }
    rows+=`<rect x="${X}" y="${y}" width="${W}" height="${h-3.4}" rx="6"
        fill="${l.hl?`url(#g-${gid(c)})`:'rgba(138,151,160,.14)'}"
        stroke="${l.hl?c:'rgba(255,255,255,.13)'}" stroke-width="${l.hl?1.6:1}"/>
      <rect x="${X+2}" y="${y+1.5}" width="${W-4}" height="2.4" rx="1.2" fill="#fff" opacity="${l.hl?.4:.07}"/>
      <text x="${X+18}" y="${y+h/2+5}" font-size="${h>34?16:13.5}" fill="${l.hl?'#08110d':FIG_C.ink}" font-weight="${l.hl?700:500}">${esc2(l.n)}</text>`;
    if(l.note){
      notes+=`<line x1="${X+W+6}" y1="${y+h/2-2}" x2="${X+W+34}" y2="${y+h/2-2}" stroke="${l.hl?c:FIG_C.faint}" stroke-width="1.2" stroke-dasharray="3 4"/>
        ${mono(X+W+42,y+h/2+3,13,l.hl?c:FIG_C.dim,l.note)}`;
    }
    y+=h;
  });
  let fx='';
  if(glowY!==null) fx+=`<ellipse cx="${X+W/2}" cy="${glowY}" rx="${W*0.7}" ry="${glowH*1.6}" fill="url(#halo-green)" filter="url(#soft2)"/>`;
  fx+=`<polygon points="${X+W/2-66},${top-4} ${X+W/2+66},${top-4} ${X+W/2+118},${top-96} ${X+W/2-118},${top-96}" fill="url(#beam-amber)" opacity=".5"/>`;
  fx+=rayUp(X+W/2,top-10,72,FIG_C.amber,3.4);
  fx+=raySlant(X+W/2-48,top-10,-40,60,FIG_C.amber,2.6);
  fx+=raySlant(X+W/2+48,top-10,40,60,FIG_C.amber,2.6);
  if(p.lens){
    fx+=`<path d="M ${X+W/2-88} ${top-12} A 104 62 0 0 1 ${X+W/2+88} ${top-12} Z" fill="rgba(79,195,247,.10)" stroke="${FIG_C.blue}" stroke-width="1.6"/>
      ${mono(X+W/2+104,top-52,12.5,FIG_C.blue,'macro lens')}`;
  }
  let chip='';
  if(p.eqe && p.eqe.length<=6) chip=statChip(140,200,p.eqe,'EQE');
  else if(p.eqe) chip=`<text x="140" y="206" font-size="19" fill="${FIG_C.amber}" text-anchor="middle" font-family="IBM Plex Sans,sans-serif" font-style="italic">${esc2(p.eqe)}</text>`;
  return figWrap(fx+rows+notes+chip+figCap(p.cap));
}

/* ================= molecule ================= */
function figMolecule(p){
  let body='';
  const cy=232;
  if(p.metal){
    const cx=480, mc=p.color||FIG_C.amber, k=gid(mc);
    body+=`<circle cx="${cx}" cy="${cy}" r="100" fill="url(#halo-${k})" opacity=".6"/>
      <circle cx="${cx}" cy="${cy}" r="40" fill="url(#g-${k})" stroke="${mc}" stroke-width="2"/>
      <text x="${cx}" y="${cy+9}" font-size="26" fill="#08110d" font-weight="700" text-anchor="middle">${esc2(p.metal)}</text>`;
    for(let i=0;i<3;i++){
      const a=(-90+i*120)*Math.PI/180, r=130;
      const lx=cx+r*Math.cos(a), ly=cy+r*Math.sin(a);
      body+=`<line x1="${cx+42*Math.cos(a)}" y1="${cy+42*Math.sin(a)}" x2="${lx-34*Math.cos(a)}" y2="${ly-34*Math.sin(a)}" stroke="${FIG_C.dim}" stroke-width="2" opacity=".7"/>
        <path d="${hexPath(lx,ly,32,i*20)}" fill="rgba(154,166,173,.08)" stroke="${FIG_C.dim}" stroke-width="2"/>`;
    }
    body+=mono(cx,cy+186,13,FIG_C.dim,p.ligand||'chelating ligands','middle');
    /* emission beam to the left */
    const emC=p.color||FIG_C.cyan, ek=gid(emC);
    body+=`<polygon points="${cx-150},${cy-26} ${cx-150},${cy+26} 120,${cy+58} 120,${cy-58}" fill="url(#beam-${ek})" opacity=".4" transform="rotate(0)"/>`;
    body+=`<line x1="${cx-150}" y1="${cy}" x2="150" y2="${cy}" stroke="${emC}" stroke-width="3.2" marker-end="url(#arr-${ek})" stroke-linecap="round"/>`;
    body+=mono(245,cy-18,13.5,emC,p.em||'emission');
  } else {
    const gap = p.link==='spiro' ? 96 : p.link==='fused' ? 30 : 64;
    const cx=430;
    const dxc=cx-gap/2-86, axc=cx+gap/2+86+(p.wideA?28:0);
    body+=hexCluster(dxc,cy,FIG_C.blue,3,30);
    body+=hexCluster(axc,cy,FIG_C.red,p.wideA?3:2,30);
    if(p.wideA) body+=hexCluster(axc+62,cy,FIG_C.red,2,30);
    body+=`<text x="${dxc}" y="${cy+94}" font-size="15" fill="${FIG_C.blue}" text-anchor="middle" font-weight="700" letter-spacing="2">DONOR</text>`
        + mono(dxc,cy+114,12.5,FIG_C.dim,p.donor||'','middle')
        + `<text x="${axc+(p.wideA?30:0)}" y="${cy+94}" font-size="15" fill="${FIG_C.red}" text-anchor="middle" font-weight="700" letter-spacing="2">ACCEPTOR</text>`
        + mono(axc+(p.wideA?30:0),cy+114,12.5,FIG_C.dim,p.acceptor||'','middle');
    if(p.link==='spiro'){
      body+=`<circle cx="${cx}" cy="${cy}" r="17" fill="#0e1216" stroke="${FIG_C.ink}" stroke-width="2.2"/>
        <line x1="${cx-11}" y1="${cy-11}" x2="${cx+11}" y2="${cy+11}" stroke="${FIG_C.ink}" stroke-width="2"/>
        <line x1="${cx-11}" y1="${cy+11}" x2="${cx+11}" y2="${cy-11}" stroke="${FIG_C.ink}" stroke-width="2"/>
        ${mono(cx,cy+40,11.5,FIG_C.faint,'spiro · 90° twist','middle')}`;
    } else if(p.link==='fused'){
      body+=mono(cx,cy-62,11.5,FIG_C.faint,'fused rings','middle');
    } else {
      body+=`<line x1="${cx-22}" y1="${cy}" x2="${cx+22}" y2="${cy}" stroke="${FIG_C.ink}" stroke-width="3.4" stroke-linecap="round"/>`;
    }
    if(p.unsym) body+=mono(cx,cy+142,12,FIG_C.faint,'deliberately unsymmetrical D–A','middle');
    if(p.wideA) body+=mono(axc+30,cy+142,12,FIG_C.faint,'expanded acceptor π-plane','middle');
    /* emission beam upward */
    const emC=p.color||FIG_C.cyan, ek=gid(emC);
    body+=`<polygon points="${cx-36},${cy-78} ${cx+36},${cy-78} ${cx+62},58 ${cx-62},58" fill="url(#beam-${ek})" opacity=".45" filter="url(#soft)"/>`;
    body+=rayUp(cx,cy-82,96,emC,3.2);
    body+=mono(cx+22,76,13.5,emC,p.em||'emission');
    /* dipole orientation strip */
    if(p.theta){
      body+=`<line x1="170" y1="404" x2="790" y2="404" stroke="rgba(255,255,255,.16)" stroke-width="1.4"/>`;
      for(let i=0;i<4;i++){
        const x0=265+i*120;
        body+=`<line x1="${x0}" y1="392" x2="${x0+62}" y2="392" stroke="${FIG_C.green}" stroke-width="3" marker-end="url(#arr-green)" stroke-linecap="round"/>`;
      }
      body+=mono(480,428,12.5,FIG_C.green,`dipoles lying flat on the substrate · θ// = ${p.theta}`,'middle');
    }
    if(p.chiral){
      body+=`<path d="M ${cx+96} 96 a 22 22 0 1 1 6 16" fill="none" stroke="${FIG_C.violet}" stroke-width="2.4" marker-end="url(#arr-violet)"/>
        ${mono(cx+150,128,12,FIG_C.violet,'circularly polarized')}`;
    }
  }
  const chip=p.eqe?statChip(140,150,p.eqe,'EQE'):'';
  return figWrap(body+chip+figCap(p.cap));
}

/* ================= display pixel cross-section ================= */
function figPixel(p){
  const gy=330;
  let body='';
  body+=`<rect x="90" y="${gy}" width="780" height="44" rx="6" fill="rgba(138,151,160,.14)" stroke="rgba(255,255,255,.1)"/>
    <rect x="92" y="${gy+1.5}" width="776" height="2.6" rx="1.3" fill="#fff" opacity=".07"/>
    ${mono(116,gy+28,13,FIG_C.dim,'substrate / backplane')}`;
  const bank=(x0,x1,tip)=>`<path d="M ${x0} ${gy} L ${tip} ${gy-96} L ${x1} ${gy} Z" fill="rgba(138,151,160,.2)" stroke="rgba(255,255,255,.12)" stroke-width="1.2"/>`;
  body+=bank(190,310,250)+bank(650,770,710);
  if(p.reflective){
    body+=`<path d="M 250 ${gy-96} L 306 ${gy-3}" stroke="${FIG_C.amber}" stroke-width="10" opacity=".22" filter="url(#soft)"/>
           <path d="M 710 ${gy-96} L 654 ${gy-3}" stroke="${FIG_C.amber}" stroke-width="10" opacity=".22" filter="url(#soft)"/>
           <path d="M 250 ${gy-96} L 306 ${gy-3}" stroke="${FIG_C.amber}" stroke-width="4.4" stroke-linecap="round"/>
           <path d="M 710 ${gy-96} L 654 ${gy-3}" stroke="${FIG_C.amber}" stroke-width="4.4" stroke-linecap="round"/>
           ${mono(480,gy+66,12.5,FIG_C.amber,'reflective electrode extended onto the bank','middle')}`;
  }
  if(p.filler) body+=`<path d="M 312 ${gy-4} Q 480 ${gy-184} 648 ${gy-4} Z" fill="url(#beam-green)" opacity=".32"/>
    <path d="M 312 ${gy-4} Q 480 ${gy-184} 648 ${gy-4}" fill="none" stroke="${FIG_C.green}" stroke-width="1.6" stroke-dasharray="6 6" opacity=".85"/>
    ${mono(480,gy-148,12.5,FIG_C.green,'high-index filler','middle')}`;
  body+=`<ellipse cx="480" cy="${gy-15}" rx="190" ry="30" fill="url(#halo-cyan)" opacity=".75" filter="url(#soft)"/>
    <rect x="318" y="${gy-22}" width="324" height="15" rx="6" fill="url(#g-cyan)" stroke="${FIG_C.cyan}" stroke-width="1.2"/>
    ${mono(480,gy-34,12.5,FIG_C.cyan,'OLED emitting stack','middle')}`;
  if(p.directional){
    body+=`<polygon points="452,${gy-28} 508,${gy-28} 522,70 438,70" fill="url(#beam-amber)" opacity=".55"/>`;
    body+=rayUp(480,gy-34,230,FIG_C.amber,3.6);
    body+=mono(480,56,13,FIG_C.amber,'highly directional emission','middle');
  } else {
    body+=`<polygon points="396,${gy-28} 564,${gy-28} 668,86 292,86" fill="url(#beam-amber)" opacity=".4"/>`;
    body+=rayUp(480,gy-34,200,FIG_C.amber,3.4);
    body+=raySlant(420,gy-34,-70,168,FIG_C.amber,2.8);
    body+=raySlant(540,gy-34,70,168,FIG_C.amber,2.8);
    if(p.reflective){ body+=raySlant(322,gy-52,-36,148,FIG_C.green,2.4); body+=raySlant(638,gy-52,36,148,FIG_C.green,2.4); }
    body+=mono(480,72,13,FIG_C.amber,`out-coupled light${p.gain?' · '+p.gain:''}`,'middle');
  }
  if(p.ambient){
    body+=`<line x1="170" y1="74" x2="362" y2="${gy-56}" stroke="${FIG_C.red}" stroke-width="2.6" stroke-dasharray="8 7" marker-end="url(#arr-red)"/>
      <circle cx="370" cy="${gy-50}" r="20" fill="url(#halo-red)"/>
      ${mono(168,58,12.5,FIG_C.red,'ambient light — absorbed, not reflected')}`;
  }
  if(p.em) body+=`<path d="M 130 130 q 14 -20 28 0 q 14 20 28 0 q 14 -20 28 0" fill="none" stroke="${FIG_C.violet}" stroke-width="2.2"/>
    ${mono(134,108,12,FIG_C.violet,'full EM-wave optics · nm → μm')}`;
  return figWrap(body+figCap(p.cap));
}

/* ================= spectral curves ================= */
function figCurveT(p){
  const L=110,R=70,T=70,B=96,W=960,H=460;
  const x=f=>L+f*(W-L-R), y=v=>T+(1-v)*(H-T-B);
  let body=`<line x1="${L}" y1="${H-B}" x2="${W-R}" y2="${H-B}" stroke="rgba(255,255,255,.18)" stroke-width="1.2"/>
    <line x1="${L}" y1="${T-8}" x2="${L}" y2="${H-B}" stroke="rgba(255,255,255,.18)" stroke-width="1.2"/>`;
  for(let i=1;i<=3;i++) body+=`<line x1="${L}" y1="${y(i/4)}" x2="${W-R}" y2="${y(i/4)}" stroke="rgba(255,255,255,.05)"/>`;
  body+=mono((L+W-R)/2,H-B+36,12.5,FIG_C.faint,p.xlab||'wavelength (nm)','middle');
  body+=`<text x="${L-44}" y="${(T+H-B)/2}" font-size="12.5" fill="${FIG_C.faint}" transform="rotate(-90 ${L-44} ${(T+H-B)/2})" text-anchor="middle" font-family="IBM Plex Mono,monospace">${esc2(p.ylab||'')}</text>`;
  if((p.xlab||'wavelength').includes('wavelength')){
    body+=`<linearGradient id="visx" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#7b6bff"/><stop offset=".3" stop-color="#4fc3f7"/><stop offset=".5" stop-color="#26e0c8"/>
      <stop offset=".65" stop-color="#7ae582"/><stop offset=".82" stop-color="#ffc857"/><stop offset="1" stop-color="#ff7b6b"/>
    </linearGradient>
    <rect x="${L}" y="${H-B+46}" width="${W-L-R}" height="5" rx="2.5" fill="url(#visx)" opacity=".75"/>`;
  }
  (p.curves||[]).forEach(c=>{
    let d='', dA=`M ${x(c.pts[0][0])} ${y(0)} `;
    c.pts.forEach((pt,i)=>{ const px=x(pt[0]).toFixed(1), py=y(pt[1]).toFixed(1);
      d+=(i?'L ':'M ')+px+' '+py+' '; dA+='L '+px+' '+py+' '; });
    dA+=`L ${x(c.pts[c.pts.length-1][0])} ${y(0)} Z`;
    const k=gid(c.color);
    if(!c.dash) body+=`<path d="${dA}" fill="url(#beam-${k})" opacity=".28"/>`;
    body+=`<path d="${d}" fill="none" stroke="${c.color}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" ${c.dash?`stroke-dasharray="${c.dash}"`:''}/>`;
    const lp=c.pts[Math.floor(c.pts.length*(c.at??0.5))];
    body+=mono(x(lp[0]),y(lp[1])-16,12.5,c.color,c.label||'','middle');
  });
  if(p.note) body+=`<text x="${x(.5)}" y="${T-28}" font-size="15" fill="${FIG_C.dim}" text-anchor="middle" font-family="IBM Plex Sans,sans-serif" font-style="italic">${esc2(p.note)}</text>`;
  return figWrap(body+figCap(p.cap));
}

/* ================= curved panel ================= */
function figCurved(p){
  let body=`<path d="M 170 330 Q 480 142 790 330" fill="none" stroke="${FIG_C.cyan}" stroke-width="20" opacity=".18" filter="url(#soft)"/>
    <path d="M 170 330 Q 480 142 790 330" fill="none" stroke="url(#g-cyan)" stroke-width="10" stroke-linecap="round"/>`;
  for(let i=0;i<=5;i++){
    const t=i/5;
    const px=(1-t)*(1-t)*170+2*(1-t)*t*480+t*t*790;
    const py=(1-t)*(1-t)*330+2*(1-t)*t*142+t*t*330;
    const tx=2*(1-t)*(480-170)+2*t*(790-480), ty=2*(1-t)*(142-330)+2*t*(330-142);
    const tl=Math.hypot(tx,ty), nx=ty/tl, ny=-tx/tl;
    body+=`<line x1="${(px+nx*12).toFixed(1)}" y1="${(py+ny*12).toFixed(1)}" x2="${(px+nx*82).toFixed(1)}" y2="${(py+ny*82).toFixed(1)}" stroke="${FIG_C.amber}" stroke-width="2.6" marker-end="url(#arr-amber)"/>`;
  }
  body+=mono(480,382,13,FIG_C.cyan,'curved panel — the escape condition follows the geometry','middle');
  if(p.grid){
    body+=`<g stroke="${FIG_C.red}" stroke-width="1.6" opacity=".85" fill="none">`;
    for(let i=0;i<6;i++) body+=`<path d="M ${330+i*55} 58 q ${8-i*3} 32 ${13-i*5} 60"/>`;
    for(let j=0;j<3;j++) body+=`<path d="M 326 ${58+j*30} Q 480 ${74+j*27} 634 ${58+j*30}"/>`;
    body+=`</g>${mono(480,40,13,FIG_C.red,'distorted grid → inverse-mapped back to true','middle')}`;
  } else {
    body+=`<circle cx="480" cy="78" r="34" fill="url(#halo-blue)" opacity=".6"/>
      <circle cx="480" cy="78" r="16" fill="none" stroke="${FIG_C.ink}" stroke-width="2.2"/>
      <circle cx="480" cy="78" r="6" fill="${FIG_C.ink}"/>
      ${mono(528,84,12.5,FIG_C.dim,'viewer')}`;
  }
  const chip=p.gain?statChip(820,120,p.gain,'OUT-COUPLING'):'';
  return figWrap(body+chip+figCap(p.cap));
}

/* ================= flexible diode ================= */
function figDiode(p){
  let body=`<path d="M 140 330 Q 480 262 820 330" fill="none" stroke="rgba(138,151,160,.4)" stroke-width="16" stroke-linecap="round"/>
    <path d="M 210 306 Q 480 252 750 306" fill="none" stroke="url(#g-cyan)" stroke-width="18" stroke-linecap="round"/>
    <path d="M 252 288 Q 480 242 708 288" fill="none" stroke="url(#g-red)" stroke-width="18" stroke-linecap="round"/>
    <path d="M 252 288 Q 480 242 708 288" fill="none" stroke="${FIG_C.red}" stroke-width="30" opacity=".14" filter="url(#soft)"/>
    ${mono(178,372,12.5,FIG_C.faint,'flexible substrate · room-temperature processed')}
    ${mono(772,308,12.5,FIG_C.cyan,'n-InGaZnO')}
    ${mono(736,282,12.5,FIG_C.red,'p-Cu₂O')}
    <path d="M 220 140 q 20 -42 40 0 q 20 42 40 0 q 20 -42 40 0" fill="none" stroke="${FIG_C.violet}" stroke-width="3" stroke-linecap="round"/>
    ${mono(280,90,12.5,FIG_C.violet,'AC in','middle')}
    <path d="M 420 118 l 26 20 l -26 20 Z" fill="none" stroke="${FIG_C.ink}" stroke-width="2"/>
    <line x1="446" y1="118" x2="446" y2="158" stroke="${FIG_C.ink}" stroke-width="2"/>
    <line x1="500" y1="138" x2="690" y2="138" stroke="${FIG_C.green}" stroke-width="3.2" stroke-linecap="round"/>
    <line x1="500" y1="138" x2="690" y2="138" stroke="${FIG_C.green}" stroke-width="11" opacity=".22" filter="url(#soft)"/>
    ${mono(596,116,12.5,FIG_C.green,'DC out · high-frequency rectification','middle')}`;
  return figWrap(body+figCap(p.cap));
}

/* ================= HTML builders (stack & molecule) ================= */
function hexIcon(color, n=3){
  const hx=(cx,cy)=>{let d='';for(let i=0;i<6;i++){const a=(60*i-90)*Math.PI/180;d+=(i?'L':'M')+(cx+19*Math.cos(a)).toFixed(1)+' '+(cy+19*Math.sin(a)).toFixed(1)+' ';}return d+'Z';};
  const offs=n>=3?[[43,22],[24,52],[62,52]]:[[33,38],[53,38]];
  return `<svg width="86" height="74" viewBox="0 0 86 74" xmlns="http://www.w3.org/2000/svg">${
    offs.map(o=>`<path d="${hx(o[0],o[1])}" fill="${color}" fill-opacity=".13" stroke="${color}" stroke-width="1.8"/>`).join('')}</svg>`;
}
/* hfig-emit down */
function emitColumn(label,color,direction='up'){
  return `<div class="hfig-emit ${direction === 'down' ? 'down' : ''}" style="--ac:${color};--bc:color-mix(in srgb,${color} 50%,transparent)">
    <span class="hfig-emitlbl">${esc2(label)}</span>
    <div class="hfig-arrows"><i></i><i></i><i></i></div>
    <div class="hfig-beam"></div>
  </div>`;
}
function htmlStack(p){
  /* Most OLED papers here are conventional planar, bottom-emitting devices. */
  const bottom = p.direction !== 'top';
  const rows=p.layers.map(l=>`
    <div class="slayer ${l.hl?'hl':''}" style="--lc:${l.c||'#5c686f'}">
      <span class="ln">${esc2(l.n)}</span>
      ${l.note?`<span class="lnote">${esc2(l.note)}</span>`:''}
    </div>`).join('');
  const lens = p.lens?'<div class="hfig-lens"></div>':'';
  const light = emitColumn(bottom ? 'light out through substrate' : 'light out','var(--amber)', bottom ? 'down' : 'up');
  return `<div class="hfig">
    ${p.eqe?`<div class="hfig-stat"><b>${esc2(p.eqe)}</b><span>EQE</span></div>`:''}
    <div style="display:flex;flex-direction:column;align-items:center">
      ${bottom ? '' : light}
      ${bottom ? '' : lens}
      <div class="v-stack ${bottom ? 'bottom-emitting' : ''}">${rows}</div>
      ${bottom ? lens : ''}
      ${bottom ? light : ''}
    </div>
    ${p.cap?`<div class="hfig-cap">${esc2(p.cap)}</div>`:''}
  </div>`;
}
function htmlMolecule(p){
  const emC = p.color || 'var(--cyan)';
  let core='';
  if(p.metal){
    core=`<div class="mol-metal" style="--mcc:${emC}">
      ${emitColumn(p.em||'emission',emC)}
      <div class="core-row">
        <span class="lig">ligand</span>
        <div class="core">${esc2(p.metal)}</div>
        <span class="lig">ligand</span>
      </div>
      <span class="lig">${esc2(p.ligand||'chelating ligand')}</span>
    </div>`;
  } else {
    const lk = p.link==='spiro'
      ? `<span class="lk">✕</span><em>spiro · 90°</em>`
      : p.link==='fused'
        ? `<span class="lk bond" style="width:46px"></span><em>fused rings</em>`
        : `<span class="lk bond"></span><em>D–A bond</em>`;
    core=`<div class="hfig-mol">
      ${emitColumn(p.em||'emission',emC)}
      <div class="mol-row">
        <div class="mol-unit" style="--mc:var(--blue)">
          <div class="mol-hex">${hexIcon('#4fc3f7',3)}</div>
          <b>DONOR</b><span>${esc2(p.donor||'')}</span>
        </div>
        <div class="mol-link">${lk}</div>
        <div class="mol-unit" style="--mc:var(--red)">
          <div class="mol-hex">${hexIcon('#ff7b6b',p.wideA?3:2)}</div>
          <b>ACCEPTOR</b><span>${esc2(p.acceptor||'')}</span>
          ${p.wideA?'<div class="mol-sub">expanded π-plane</div>':''}
          ${p.unsym?'<div class="mol-sub">deliberately unsymmetrical</div>':''}
        </div>
      </div>
      ${p.theta?`<div class="mol-theta">
        <div class="arrows"><i></i><i></i><i></i><i></i></div>
        <small>dipoles lying flat on the substrate · θ// = ${esc2(p.theta)}</small>
      </div>`:''}
    </div>`;
  }
  return `<div class="hfig" style="position:relative">
    ${p.eqe?`<div class="hfig-stat"><b>${esc2(p.eqe)}</b><span>EQE</span></div>`:''}
    ${core}
    ${p.chiral?'<div class="mol-chiral">circularly<br>polarized EL</div>':''}
    ${p.cap?`<div class="hfig-cap">${esc2(p.cap)}</div>`:''}
  </div>`;
}

const PAPER_FIGS = { stack:htmlStack, molecule:htmlMolecule, pixel:figPixel, curveT:figCurveT, curved:figCurved, diode:figDiode };
function renderPaperFig(el, spec){
  if(!spec){ el.style.display='none'; return; }
  const fn = PAPER_FIGS[spec.type];
  el.innerHTML = fn ? fn(spec) : '';
}
