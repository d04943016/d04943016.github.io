/* ============ Research projects (NTU) ============ */
const RESEARCH_CATS = {
  modeling:  { label: "Modeling & Software", labelZh: "建模與軟體", color: "var(--blue)"  },
  efficiency:{ label: "High-Efficiency OLED", labelZh: "高效率 OLED", color: "var(--cyan)" },
  display:   { label: "Display Optics", labelZh: "顯示光學",       color: "var(--green)"},
  thinfilm:  { label: "Thin-Film Design", labelZh: "薄膜設計",     color: "var(--amber)"},
  materials: { label: "Materials & Photophysics", labelZh: "材料與光物理", color: "var(--red)" },
  system:    { label: "Systems", labelZh: "系統",              color: "var(--violet)"}
};

const RESEARCH = [
  {
    id: "eqe-timeline", cat: "efficiency", feature: true,
    title: "Pushing OLED Efficiency to the Record — 8 Years of Devices",
    titleZh: "把 OLED 效率推向紀錄：8 年元件演進",
    tagline: "Every dot is a fabricated, measured device. From the ~25% conventional limit to 80.8% EQE.",
    taglineZh: "每一個點都是實際製作並量測的元件，從傳統約 25% 極限推進到 80.8% EQE。",
    img: "assets/slides/eqe-timeline.jpg",
    facts: [
      "Systematic optical design strategies validated <b>device by device from 2013 to 2021</b> — spanning phosphorescent, TADF, and non-doped emitters.",
      "<b>36.7% EQE sky-blue TADF (2016)</b> — world record at publication (Adv. Mater. 28, 6976).",
      "<b>64.5% EQE</b> with PEDOT low-index anode + macro lens; <b>80.8% EQE</b> with sapphire substrate + thin ITO + low-n HTL (2021).",
      "Each strategy was first predicted by the self-developed optical simulator, then confirmed experimentally."
    ],
    refs: ["Adv. Mater. 28, 6976 (2016)", "Adv. Funct. Mater. 26, 3250 (2016)", "Org. Electron. 89, 106057 (2021)"],
    tags: ["EQE record", "Device fabrication", "Optical design"]
  },
  {
    id: "optical-model", cat: "modeling",
    title: "Optical Model of Planar OLEDs",
    titleZh: "平面 OLED 光學模型",
    tagline: "EM wave optics + emitter statistics + ray optics, unified in one analytical model.",
    taglineZh: "把電磁波光學、發光體統計與幾何光學整合在同一套解析模型中。",
    img: "assets/slides/optical-model.jpg",
    facts: [
      "Built from <b>Maxwell's equations via dyadic Green's functions</b> with electric-dipole sources — interference, TE/TM, near-field, microcavity, Purcell effect.",
      "Adds emitter-ensemble statistics: <b>dipole orientation, intrinsic spectrum, PLQY</b>.",
      "Bridges nm-scale wave optics with mm-scale ray optics in a single simulation chain."
    ],
    refs: ["Foundation of 37 journal papers, citations > 4,000"],
    tags: ["EM theory", "Green's functions", "Microcavity"]
  },
  {
    id: "simulator", cat: "modeling",
    title: "Commercial-Ready OLED Simulation Software",
    titleZh: "接近產品化的 OLED 模擬軟體",
    tagline: "A >300-file GUI suite the whole lab designed devices with.",
    taglineZh: "一套超過 300 個檔案的 GUI 工具，支撐整個實驗室做元件設計。",
    img: "assets/slides/software-gui.jpg",
    img2: "assets/slides/software-arch.jpg",
    facts: [
      "Python GUI with <b>structure / material / user management</b>, anisotropic nk, coherent–incoherent stacks, and batch simulation.",
      "12 function panels: EM analysis, structure optimization, parameter extraction.",
      "Raised lab experimental efficiency <b>from ~20% to ~80%</b> — devices were designed before they were fabricated.",
      "Modular architecture: plane-wave, source-optics, ensemble, and parameter-extraction modules behind one command interface."
    ],
    refs: ["github.com/d04943016/Planar-Optics-Simulator-User_Manual"],
    tags: ["Python", "GUI", "Simulation tool"]
  },
  {
    id: "dipole", cat: "modeling",
    title: "Dipole Orientation & Intrinsic Spectrum Extraction",
    titleZh: "偶極方向與本質光譜萃取",
    tagline: "Angle- and polarization-resolved PL turns a thin film into a measurable dipole ensemble.",
    taglineZh: "利用角度與偏振解析 PL，把薄膜轉化成可量測的偶極群體。",
    img: "assets/slides/dipole-setup.jpg",
    facts: [
      "Custom <b>angle- and p-polarization-dependent photoluminescence setup</b> built around a quartz half-cylinder lens.",
      "Anisotropic optical model extracts <b>orientation factors and intrinsic spectra</b> from measured angular spectra.",
      "Anisotropic treatment proved essential — isotropic models show clear systematic errors at thicker spacer layers."
    ],
    refs: ["Setup & method used across the lab's TADF emitter studies"],
    tags: ["Photoluminescence", "Parameter extraction", "Anisotropy"]
  },
  {
    id: "validation", cat: "modeling",
    title: "Simulation vs. Experiment — Thin-ITO Devices",
    titleZh: "模擬與實驗驗證：薄 ITO 元件",
    tagline: "Symbols are experiments, lines are simulation. The model holds.",
    taglineZh: "點是實驗、線是模擬；模型經得起元件量測檢驗。",
    img: "assets/slides/thinito-validation.jpg",
    facts: [
      "Full J-V-L and angular spectra of thin-ITO OLEDs reproduced by the optical model with <b>no fitting gymnastics</b>.",
      "Thin transparent electrodes reduce waveguided loss → <b>57.5% EQE with macro lens</b>."
    ],
    refs: ["W.-K. Lee et al., Org. Electron. 89, 106057 (2021)"],
    tags: ["Model validation", "Thin ITO", "First-author"]
  },
  {
    id: "strategy", cat: "efficiency",
    title: "Design Strategies for Highly Efficient OLEDs",
    titleZh: "高效率 OLED 的設計策略",
    tagline: "Four routes out of the light-trapping problem — A/B/C/D, all experimentally proven.",
    taglineZh: "四條走出光侷限問題的路徑：A/B/C/D，皆經實驗驗證。",
    img: "assets/slides/strategy.jpg",
    facts: [
      "<b>A.</b> High-index anode + low-index HIL (TiO₂ / TNO + PEDOT:PSS) → EQE up to 41.5%.",
      "<b>B.</b> Low-index anode (PEDOT:PSS, ITO-free) → 44.1%, and 64.5% with macro lens.",
      "<b>C.</b> Thin HTL & anode → 57.5% with lens.",
      "<b>D.</b> Thin anode + high-index sapphire substrate → <b>80.8% EQE</b>."
    ],
    refs: ["Adv. Mater. 27, 929 (2015)", "Adv. Optical Mater. 4, 365 (2016)", "Org. Electron. 87, 105984 (2020)", "Org. Electron. 89, 106057 (2021)"],
    tags: ["Out-coupling", "Index engineering", "Device design"]
  },
  {
    id: "record-device", cat: "efficiency",
    title: "The 80.8% EQE Device",
    titleZh: "80.8% EQE 元件",
    tagline: "Sapphire substrate, thin ITO, low-index HTL, high-θ// TADF emitter — everything aligned.",
    taglineZh: "藍寶石基板、薄 ITO、低折射率 HTL、高水平偶極 TADF 發光體，全數對齊。",
    img: "assets/slides/eqe-record.jpg",
    facts: [
      "Combines strategy D with TZ-SBA emitter (<b>θ<sub>//</sub> = 87%</b> horizontal dipole ratio).",
      "Sapphire substrate (n≈1.7) recovers substrate-confined light through a macro lens.",
      "<b>EQE ≈ 80.8%</b> — approaching the theoretical out-coupling ceiling for planar OLEDs."
    ],
    refs: ["W.-K. Lee et al., Org. Electron. 89, 106057 (2021)"],
    tags: ["EQE 80.8%", "Sapphire", "First-author"]
  },
  {
    id: "nanomesh", cat: "efficiency",
    title: "Nanomesh Composite Electrodes",
    titleZh: "奈米網格複合電極",
    tagline: "Nano-sphere lithography sculpts the anode itself into an out-coupling structure.",
    taglineZh: "以奈米球微影把陽極本身雕塑成出光結構。",
    img: "assets/slides/nanomesh.jpg",
    facts: [
      "ITO-PEDOT high/low-index <b>hybrid anode with corrugated nanomesh</b> shape via nano-/micro-sphere lithography.",
      "Suppresses surface-plasmon loss at the metal interface.",
      "<b>EQE 61.9%</b> with macro lens (2015)."
    ],
    refs: ["C.-Y. Chen et al., Adv. Mater. 27, 4883 (2015)"],
    tags: ["Nanofabrication", "Plasmonics", "Hybrid electrode"]
  },
  {
    id: "curved", cat: "display",
    title: "Optics of Curved OLEDs",
    titleZh: "曲面 OLED 光學",
    tagline: "Bending the panel changes the physics — derive it, then exploit it.",
    taglineZh: "面板一旦彎曲，物理也跟著改變；先推導，再利用。",
    img: "assets/slides/curved.jpg",
    img2: "assets/slides/curved-correction.jpg",
    facts: [
      "Derived the <b>effective critical angle</b> for convex/concave, spherical/cylindrical curvature — a geometric factor g governs out-coupling.",
      "Demonstrated curved OLEDs with <b>1.6× out-coupling enhancement</b> over planar.",
      "Modeled <b>image distortion</b> between emission surface and viewing plane, and built the inverse mapping for distortion-free curved displays."
    ],
    refs: ["SID Display Week 2019 (curved optics)", "SID Display Week 2020 (image correction, W.-K. Lee et al.)"],
    tags: ["Curved display", "Ray tracing", "Image correction"]
  },
  {
    id: "pixel3d", cat: "display",
    title: "3D Pixel Configuration",
    titleZh: "3D 像素結構",
    tagline: "Rethinking the pixel as a three-dimensional optical structure.",
    taglineZh: "把像素重新視為三維光學結構來設計。",
    img: "assets/slides/pixel3d.jpg",
    facts: [
      "High-index filler in the concave pixel area <b>extracts the waveguided mode</b>; top-TCO devices suppress surface plasmons and angular color shift.",
      "Reflective bottom electrode extended onto the PDL bank <b>redirects confined light outward</b>.",
      "<b>2–4× out-coupling</b> over the planar baseline."
    ],
    refs: ["Y.-J. Chen et al., Advanced Science 5, 1800467 (2018)"],
    tags: ["Pixel architecture", "Out-coupling", "OLED display"]
  },
  {
    id: "antiuv", cat: "thinfilm",
    title: "Anti-UV/HEV Films for OLED Panels",
    titleZh: "OLED 面板抗 UV/HEV 薄膜",
    tagline: "DBR-based cover-lens stacks that block what degrades the device.",
    taglineZh: "以 DBR 為基礎的 cover-lens 薄膜堆疊，阻擋造成元件劣化的光。",
    img: "assets/slides/antiuv.jpg",
    facts: [
      "UV/HEV light causes voltage shift and degradation in OLEDs; modified <b>DBR structures block UV/HEV</b> while keeping visible transmission high and flat.",
      "Experimentally confirmed reduction of UV-induced voltage shift."
    ],
    refs: ["K.-C. Lin et al., SID Display Week 2019"],
    tags: ["DBR", "Reliability", "Cover lens"]
  },
  {
    id: "tmm-backprop", cat: "thinfilm",
    title: "Backpropagation Through the Transfer Matrix Method",
    titleZh: "穿透轉移矩陣法的反向傳播",
    tagline: "Thin-film design as gradient descent — months of manual tuning become ~10 seconds.",
    taglineZh: "把薄膜設計變成梯度下降，將數月手動調參縮短到約 10 秒。",
    img: "assets/slides/tmm-backprop.jpg",
    facts: [
      "Derived <b>analytical gradients of TMM</b>, reducing complexity from O(N²) to O(N) in layer number — fully vectorized.",
      "Arbitrary spectral targets (anti-UV, AR, band-pass) optimized in <b>~10 s vs ~3 months</b> of expert manual design.",
      "The same idea now powers the Opti²Layer side project."
    ],
    refs: ["Method foundation for thin-film projects & Opti²Layer"],
    tags: ["Differentiable optics", "Optimization", "O(n²)→O(n)"]
  },
  {
    id: "glass", cat: "thinfilm",
    title: ">99% Flat-Transmittance Glass",
    titleZh: ">99% 平坦穿透率玻璃",
    tagline: "Designed for in-display fingerprint SNR — then built and measured.",
    taglineZh: "為螢幕下指紋辨識 SNR 而設計，並完成製作與量測。",
    img: "assets/slides/glass.jpg",
    facts: [
      "Double-side AR coatings raise glass transmission from ~92% to <b>>99% flat across the visible</b>.",
      "Experimental TiO₂/LiF 2-pair stack reached <b>T = 99.4% (max)</b> / 98.1% average.",
      "Direct application: improving signal-to-noise of under-display fingerprint sensors."
    ],
    refs: ["Designed with the TMM-backprop optimizer"],
    tags: ["AR coating", "Fabrication", "Fingerprint SNR"]
  },
  {
    id: "emitters", cat: "materials",
    title: "Three Generations of Organic Emitters",
    titleZh: "三代有機發光材料",
    tagline: "Fluorescence → phosphorescence → TADF: the 75% problem and how chemistry solved it.",
    taglineZh: "螢光、磷光到 TADF：75% 激子問題，以及化學如何解開它。",
    img: "assets/slides/emitters.jpg",
    facts: [
      "Worked across <b>phosphorescent transition-metal complexes and TADF donor–acceptor emitters</b> with ~100% theoretical internal quantum efficiency.",
      "Materials studies contributed to <b>19 journal papers</b> in the group."
    ],
    refs: ["19 journal papers (materials)"],
    tags: ["TADF", "Phosphorescence", "OLED materials"]
  },
  {
    id: "exciton", cat: "materials",
    title: "Exciton Dynamics in TADF Materials",
    titleZh: "TADF 材料中的激子動力學",
    tagline: "Rate-equation matrices that turn transient PL into rate constants.",
    taglineZh: "以速率方程矩陣將暫態 PL 轉換為本質速率常數。",
    img: "assets/slides/exciton.jpg",
    facts: [
      "Matrix-form rate equations for S₁/T₁ populations extract <b>intrinsic radiative, non-radiative, ISC and RISC rate constants</b>.",
      "Compared acridine donors with different substitutions; CN-substituted pyridine/pyrimidine acceptors give <b>orientation-adjustable TADF emitters</b>.",
      "The same model now lives on as the TADF rate-calculator side project."
    ],
    refs: ["Adv. Funct. Mater. 26, 7560 (2016)"],
    tags: ["Photophysics", "RISC", "Rate equations"]
  },
  {
    id: "spectrum-shift", cat: "materials",
    title: "Concentration-Induced Spectral Shift in TADF",
    titleZh: "TADF 中的濃度誘發光譜位移",
    tagline: "Why the same emitter changes color with doping — dipoles, polarity, and rotation.",
    taglineZh: "為什麼同一個發光體會因摻雜濃度改變顏色：偶極、極性與轉動。",
    img: "assets/slides/spectrum-shift.jpg",
    facts: [
      "Explained spectral shifts via <b>environment polarity and permanent dipole strength</b> of singlet/triplet states (Py56: up to 32.7 D).",
      "Distinguished rotatable (solution, RT) vs non-rotatable (solid state, 77 K) regimes."
    ],
    refs: ["TADF emitter photophysics studies"],
    tags: ["Solvatochromism", "Dipole moments", "Spectroscopy"]
  },
  {
    id: "antenna", cat: "system",
    title: "Self-Adaptive Antenna System",
    titleZh: "自適應天線系統",
    tagline: "IEEE AP-S Student Design Challenge — semifinalist, one of 6 teams worldwide.",
    taglineZh: "IEEE AP-S Student Design Challenge 準決賽隊伍，全球 6 隊之一。",
    img: "assets/slides/antenna.jpg",
    facts: [
      "Pilot/follower antenna architecture with <b>genetic-algorithm configuration optimization</b> and region detection.",
      "Custom RF hardware: phase shifters, power detectors, switches, DAQ — controlled from a laptop.",
      "Team of five; undergraduate project at NTU EE."
    ],
    refs: ["IEEE Antennas & Propagation Society Student Design Challenge"],
    tags: ["RF hardware", "Genetic algorithm", "Undergrad"]
  }
];

/* ============ Software / side projects (vibe-coding-portfolio) ============ */
const SOFTWARE_CATS = {
  molecules:  { label: "Simulation & Molecules", labelZh: "模擬與分子", color: "var(--blue)" },
  simulation: { label: "Simulation & Optics", labelZh: "模擬與光學",    color: "var(--blue)" },
  exciton:    { label: "Exciton Ratio & Optics", labelZh: "激子比例與光學", color: "var(--blue)" },
  dynamics:   { label: "Exciton Dynamics", labelZh: "激子動力學",       color: "var(--blue)" },
  lab:        { label: "Lab Workflow & Analysis", labelZh: "實驗流程與分析", color: "var(--cyan)" },
  labml:      { label: "Lab Workflow & ML", labelZh: "實驗流程與機器學習",       color: "var(--cyan)" },
  aiops:      { label: "AI Tooling", labelZh: "AI 工具",           color: "var(--green)"},
  data:       { label: "Data & Finance", labelZh: "資料與金融",       color: "var(--amber)"}
};

const SOFTWARE = [
  {
    id: "atomistic", cat: "molecules",
    title: "AtomisticStudio",
    titleZh: "AtomisticStudio",
    tagline: "Browser-based ASE research workbench for atomistic simulation.",
    taglineZh: "瀏覽器版 ASE 研究工作台，用於原子尺度模擬。",
    img: "assets/projects/atomisticstudio.png",
    link: "https://github.com/d04943016/vibe-coding-portfolio/tree/main/projects/AtomisticStudio",
    facts: [
      "Structure builder, batch screening, <b>phase stability and work-function analysis</b> on top of ASE.",
      "Cross-run analysis with <b>SQLite provenance</b> — every result traceable to its inputs.",
      "Physics-aware safeguards keep generated workflows scientifically valid."
    ],
    factsZh: [
      "在 ASE 之上建立結構產生、批次篩選、<b>相穩定性與功函數分析</b>。",
      "以 <b>SQLite provenance</b> 做跨批次分析，每個結果都能追溯到輸入。",
      "加入物理感知的保護機制，讓自動生成流程維持科學合理性。"
    ],
    tags: ["ASE", "FastAPI", "SQLite", "Computational chemistry"]
  },
  {
    id: "opti2layer", cat: "simulation",
    title: "Opti²Layer (TMM-FBP)",
    titleZh: "Opti²Layer (TMM-FBP)",
    tagline: "Differentiable thin-film design workbench — the PhD algorithm, productized.",
    taglineZh: "可微分薄膜設計工作台，把博士期間的演算法產品化。",
    img: "assets/projects/tmmfbp.png",
    link: "https://github.com/d04943016/vibe-coding-portfolio/tree/main/projects/TMM-FBP",
    facts: [
      "Transfer-matrix simulation with <b>analytical gradients</b> and multi-target loss functions.",
      "Live optimization view: spectrum, thickness, convergence, animation tabs.",
      "Publication-grade figure export with full style control."
    ],
    factsZh: [
      "結合轉移矩陣模擬、<b>解析梯度</b>與多目標 loss function。",
      "即時優化視圖：光譜、厚度、收斂曲線與動畫分頁。",
      "可輸出接近論文等級的圖，並完整控制樣式。"
    ],
    tags: ["Differentiable optics", "Optimization", "Plotly"]
  },
  {
    id: "goodlab", cat: "simulation",
    title: "GoodLab Simulator",
    titleZh: "GoodLab Simulator",
    tagline: "React + FastAPI modernization of the legacy NTU planar-optics simulator.",
    taglineZh: "以 React + FastAPI 現代化 NTU 舊版平面光學模擬器。",
    img: "assets/projects/goodlab.png",
    link: "https://github.com/d04943016/vibe-coding-portfolio/tree/main/projects/GoodLabSimulator_aniso",
    facts: [
      "Material manager with <b>nk/PL/DOF libraries</b> and user sandboxing.",
      "<b>14 simulation forms</b> covering the original tool's physics, now with interactive plotting.",
      "Carries a decade-old research codebase into a maintainable web stack."
    ],
    factsZh: [
      "材料管理器支援 <b>nk/PL/DOF library</b> 與使用者 sandbox。",
      "<b>14 種模擬表單</b>涵蓋原工具的物理模型，並加入互動式繪圖。",
      "把十年前的研究程式帶到可維護的 web stack。"
    ],
    tags: ["React", "FastAPI", "Planar optics"]
  },
  {
    id: "spectrafit", cat: "exciton",
    title: "SpectraFit-γ",
    titleZh: "SpectraFit-γ",
    tagline: "Exciton-ratio extraction from white-OLED EL spectra.",
    taglineZh: "從白光 OLED EL 光譜萃取激子比例。",
    img: "assets/projects/spectrafit.png",
    link: "https://github.com/d04943016/vibe-coding-portfolio/tree/main/projects/SpectraFit-gamma",
    facts: [
      "<b>Cavity-modified spectral fitting</b> extracts the gamma partition ratio between emitters.",
      "Color-science metrics (CIE, CCT) and batch fitting across measurement sets."
    ],
    factsZh: [
      "用<b>腔體修正光譜擬合</b>萃取不同發光體之間的 gamma 分配比例。",
      "支援色彩科學指標（CIE、CCT）與跨量測批次擬合。"
    ],
    tags: ["Spectral fitting", "Color science", "OLED"]
  },
  {
    id: "tadf-calc", cat: "dynamics",
    title: "TADF Rate Calculator",
    titleZh: "TADF Rate Calculator",
    tagline: "Intrinsic rate constants from TRPL + PLQY with a three-level model.",
    taglineZh: "用三能階模型從 TRPL + PLQY 反推出本質速率常數。",
    img: "assets/projects/tadf.jpg",
    link: "https://github.com/d04943016/vibe-coding-portfolio/tree/main/projects/TADF",
    facts: [
      "Computes radiative / non-radiative / ISC / RISC rates from transient PL and PLQY.",
      "<b>Φ<sub>Tnr</sub> sweeps</b> map the full rate/efficiency envelope of an emitter."
    ],
    factsZh: [
      "從暫態 PL 與 PLQY 計算輻射、非輻射、ISC、RISC 速率。",
      "<b>Φ<sub>Tnr</sub> 掃描</b>可描出發光體完整的速率/效率邊界。"
    ],
    tags: ["Photophysics", "TRPL", "Three-level model"]
  },
  {
    id: "caloled", cat: "lab",
    title: "calOLED",
    titleZh: "calOLED",
    tagline: "Docker-deployable OLED characterization platform — goodbye spreadsheet analysis.",
    taglineZh: "可 Docker 部署的 OLED 量測分析平台，告別試算表分析。",
    img: "assets/projects/caloled.png",
    link: "https://github.com/d04943016/vibe-coding-portfolio/tree/main/projects/calOLED",
    facts: [
      "Raw EL/IV data → calibrated <b>EQE, brightness, CCT, CE/PE/LE</b> with comparison plots.",
      "<b>Calibration audit trail</b>: every number traceable to a calibration snapshot.",
      "Desktop and mobile UI for reviewing results in the lab."
    ],
    factsZh: [
      "原始 EL/IV 資料轉成校正後的 <b>EQE、亮度、CCT、CE/PE/LE</b> 與比較圖。",
      "<b>校正 audit trail</b>：每個數字都能追溯到 calibration snapshot。",
      "提供桌機與手機 UI，方便在實驗室即時檢視結果。"
    ],
    tags: ["Docker", "Flask", "Metrology", "Mobile UI"]
  },
  {
    id: "expsheet", cat: "labml",
    title: "ExpSheet",
    titleZh: "ExpSheet",
    tagline: "Local-first process & wafer experiment notebook for semiconductor work.",
    taglineZh: "為半導體工作設計的 local-first 製程與 wafer 實驗筆記本。",
    img: "assets/projects/expsheet.png",
    link: "https://github.com/d04943016/vibe-coding-portfolio/tree/main/projects/ExpSheet",
    facts: [
      "Chambers, process flows, and experiments in linked <b>JSON-backed schemas</b>.",
      "Image comparison and a <b>process-value matrix</b> across experiments."
    ],
    factsZh: [
      "以相互連結的 <b>JSON-backed schema</b> 管理機台、製程 flow 與實驗。",
      "支援跨實驗影像比較與 <b>process-value matrix</b>。"
    ],
    tags: ["Local-first", "Process tracking", "JSON"]
  },
  {
    id: "review-pipeline", cat: "aiops",
    title: "Claude Review Pipeline",
    titleZh: "Claude Review Pipeline",
    tagline: "Domain-aware iterative review automation for AI coding workflows.",
    taglineZh: "為 AI coding workflow 設計的領域感知迭代 review 自動化。",
    img: null, abstract: "⟲ review",
    link: "https://github.com/d04943016/vibe-coding-portfolio/tree/main/projects/claude-review-pipeline",
    facts: [
      "Conversational setup generates a <b>domain-expert reviewer</b> for the project at hand.",
      "<b>Parallel reviewers + review-fix loops</b> until N consecutive clean rounds.",
      "Includes an end-to-end UI testing flow."
    ],
    factsZh: [
      "透過對話式設定，為當前專案產生<b>領域專家 reviewer</b>。",
      "<b>平行 reviewers + review-fix loop</b>，直到連續 N 輪乾淨。",
      "包含端到端 UI 測試流程。"
    ],
    workflow: [
      { t: "Setup", d: "Install skills, reviewer agents, and the domain review framework." },
      { t: "Domain review", d: "Codex audit surfaces risk, gaps, and the next scope." },
      { t: "Design + plan", d: "User-approved Superpowers spec and implementation plan." },
      { t: "Review cycle", d: "Implement, freeze, then run reviewers plus Codex xhigh." },
      { t: "Clean rounds", d: "Fix Critical/Major findings until 3 clean rounds." },
      { t: "Orchestrator", d: "Run UI tests, collect errors/examples, and update metrics." }
    ],
    workflowZh: [
      { t: "設定", d: "安裝 skills、reviewer agents 與領域 review framework。" },
      { t: "領域 review", d: "Codex 稽核風險、缺口與下一步 scope。" },
      { t: "設計與計畫", d: "使用者確認 Superpowers spec 與實作計畫。" },
      { t: "Review 循環", d: "實作、freeze，再跑 reviewers 與 Codex xhigh。" },
      { t: "乾淨輪次", d: "修 Critical/Major findings，直到連續 3 輪乾淨。" },
      { t: "Orchestrator", d: "跑 UI tests、收集錯誤/範例並更新 metrics。" }
    ],
    tags: ["Claude Code", "Agents", "Code review"]
  },
  {
    id: "mystocks", cat: "data",
    title: "MyStocks",
    titleZh: "MyStocks",
    tagline: "Local Taiwan-stock portfolio manager with full performance analytics.",
    taglineZh: "本機優先的台股投資組合管理器，具完整績效分析。",
    img: "assets/projects/mystocks.png",
    link: "https://github.com/d04943016/vibe-coding-portfolio/tree/main/projects/MyStocks",
    facts: [
      "<b>SQLite ledger</b> with dashboards, positions, and performance metrics.",
      "Per-stock drill-down: annual returns, asset value, dividend history."
    ],
    factsZh: [
      "以 <b>SQLite ledger</b> 管理 dashboard、持股與績效指標。",
      "支援單一股票 drill-down：年度報酬、資產價值、股利歷史。"
    ],
    tags: ["SQLite", "Finance", "Dashboards"]
  }
];

/* ============ AI projects @ TSMC ============ */
const AI_PROJECTS = [
  {
    id: "chemical",
    color: "var(--cyan)",
    title: "Material Design Using Machine Learning",
    titleZh: "以機器學習進行材料設計",
    impact: "materials design workflow",
    impactZh: "材料設計 workflow",
    objective: [
      "Explore AI-assisted materials design for semiconductor R&D.",
      "Connect molecular candidates, domain constraints, and validation signals."
    ],
    objectiveZh: [
      "探索用於半導體 R&D 的 AI 輔助材料設計。",
      "連結分子候選、領域限制與驗證訊號。"
    ],
    challenge: [
      "Built a materials-design pipeline from early project requirements.",
      "Defined data strategy and validation criteria with cross-functional partners.",
    ],
    challengeZh: [
      "從早期專案需求建立材料設計 pipeline。",
      "與跨職能夥伴定義資料策略與驗證標準。"
    ]
  },
  {
    id: "recipe",
    color: "var(--blue)",
    title: "Physics-Informed Recipe Optimization",
    titleZh: "物理導向製程 Recipe 優化",
    impact: "recipe optimization workflow",
    impactZh: "recipe 優化 workflow",
    objective: [
      "Optimize process recipes by linking incoming conditions with measured outcomes."
    ],
    objectiveZh: [
      "透過連結輸入條件與量測結果來優化製程 recipe。"
    ],
    challenge: [
      "Measurement automation came first, so training data could be generated consistently.",
      "Domain knowledge had to be embedded into the models, not bolted on.",
      "Validation had to be part of the workflow from the beginning."
    ],
    challengeZh: [
      "必須先建立量測自動化，才能穩定產生訓練資料。",
      "領域知識需要嵌入模型，而不是事後補上。",
      "驗證必須從一開始就是 workflow 的一部分。"
    ]
  },
  {
    id: "lbd",
    color: "var(--green)",
    title: "Literature-Based Knowledge Discovery",
    titleZh: "文獻式知識探索",
    impact: "literature discovery workflow",
    impactZh: "文獻探索 workflow",
    objective: [
      "Use LLMs to extract <b>cross-disciplinary knowledge</b> from literature.",
      "Develop an AI-assisted research flow for R&D."
    ],
    objectiveZh: [
      "使用 LLM 從文獻中萃取<b>跨領域知識</b>。",
      "建立 AI 輔助的 R&D 研究流程。"
    ],
    challenge: [
      "Coordinated evaluation and deployment constraints with platform stakeholders.",
      "Aligned research needs with platform-building constraints."
    ],
    challengeZh: [
      "與平台 stakeholders 協調評估與部署限制。",
      "在研究需求與平台建置限制之間取得對齊。"
    ]
  }
];
