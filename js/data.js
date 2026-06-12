/* ============ Research projects (NTU, from Self Presentation Ver 7) ============ */
const RESEARCH_CATS = {
  modeling:  { label: "Modeling & Software", color: "var(--blue)"  },
  efficiency:{ label: "High-Efficiency OLED", color: "var(--cyan)" },
  display:   { label: "Display Optics",       color: "var(--green)"},
  thinfilm:  { label: "Thin-Film Design",     color: "var(--amber)"},
  materials: { label: "Materials & Photophysics", color: "var(--red)" },
  system:    { label: "Systems",              color: "var(--violet)"}
};

const RESEARCH = [
  {
    id: "eqe-timeline", cat: "efficiency", feature: true,
    title: "Pushing OLED Efficiency to the Record — 8 Years of Devices",
    tagline: "Every dot is a fabricated, measured device. From the ~25% conventional limit to 80.8% EQE.",
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
    tagline: "EM wave optics + emitter statistics + ray optics, unified in one analytical model.",
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
    tagline: "A >300-file GUI suite the whole lab designed devices with.",
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
    tagline: "Angle- and polarization-resolved PL turns a thin film into a measurable dipole ensemble.",
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
    tagline: "Symbols are experiments, lines are simulation. The model holds.",
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
    tagline: "Four routes out of the light-trapping problem — A/B/C/D, all experimentally proven.",
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
    tagline: "Sapphire substrate, thin ITO, low-index HTL, high-θ// TADF emitter — everything aligned.",
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
    tagline: "Nano-sphere lithography sculpts the anode itself into an out-coupling structure.",
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
    tagline: "Bending the panel changes the physics — derive it, then exploit it.",
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
    tagline: "Rethinking the pixel as a three-dimensional optical structure.",
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
    id: "polarizer-free", cat: "display",
    title: "Polarizer-Free Ambient Contrast",
    tagline: "Replace the thick circular polarizer with color filters and cavity design.",
    img: "assets/slides/polarizer-free.jpg",
    facts: [
      "Ambient light is absorbed twice: once by the <b>color filter</b>, once by the <b>designed microcavity</b>.",
      "Keeps high contrast without the thickness and transmission loss of a circular polarizer — relevant for foldable and thin displays."
    ],
    refs: ["Patented display-optics work (3 patents in display optics)"],
    tags: ["Contrast ratio", "Microcavity", "Patent"]
  },
  {
    id: "antiuv", cat: "thinfilm",
    title: "Anti-UV/HEV Films for OLED Panels",
    tagline: "DBR-based cover-lens stacks that block what degrades the device.",
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
    tagline: "Thin-film design as gradient descent — months of manual tuning become ~10 seconds.",
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
    tagline: "Designed for in-display fingerprint SNR — then built and measured.",
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
    id: "lightfield", cat: "display",
    title: "Light-Field Display with Metasurfaces",
    tagline: "Highly directional OLED + metasurface deflection as a light-field engine.",
    img: null, abstract: "λ field",
    facts: [
      "Concept pairing a <b>highly directional OLED light source</b> with metasurface beam deflection for glasses-free 3D.",
      "Positioned against Looking Glass and Sony eye-sensing light-field displays."
    ],
    refs: ["Related: B. Liu et al., Optics Express 27, 35728 (2019)"],
    tags: ["Metasurface", "Light field", "3D display"]
  },
  {
    id: "emitters", cat: "materials",
    title: "Three Generations of Organic Emitters",
    tagline: "Fluorescence → phosphorescence → TADF: the 75% problem and how chemistry solved it.",
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
    tagline: "Rate-equation matrices that turn transient PL into rate constants.",
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
    tagline: "Why the same emitter changes color with doping — dipoles, polarity, and rotation.",
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
    tagline: "IEEE AP-S Student Design Challenge — semifinalist, one of 6 teams worldwide.",
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
  simulation: { label: "Simulation & Optics",  color: "var(--blue)" },
  lab:        { label: "Lab Workflow",         color: "var(--cyan)" },
  aiops:      { label: "AI Tooling",           color: "var(--green)"},
  data:       { label: "Data & Finance",       color: "var(--amber)"}
};

const SOFTWARE = [
  {
    id: "atomistic", cat: "simulation",
    title: "AtomisticStudio",
    tagline: "Browser-based ASE research workbench for atomistic simulation.",
    img: "assets/projects/atomisticstudio.png",
    link: "https://github.com/d04943016/vibe-coding-portfolio/tree/main/projects/AtomisticStudio",
    facts: [
      "Structure builder, batch screening, <b>phase stability and work-function analysis</b> on top of ASE.",
      "Cross-run analysis with <b>SQLite provenance</b> — every result traceable to its inputs.",
      "Physics-aware safeguards keep generated workflows scientifically valid."
    ],
    tags: ["ASE", "FastAPI", "SQLite", "Computational chemistry"]
  },
  {
    id: "opti2layer", cat: "simulation",
    title: "Opti²Layer (TMM-FBP)",
    tagline: "Differentiable thin-film design workbench — the PhD algorithm, productized.",
    img: "assets/projects/tmmfbp.png",
    link: "https://github.com/d04943016/vibe-coding-portfolio/tree/main/projects/TMM-FBP",
    facts: [
      "Transfer-matrix simulation with <b>analytical gradients</b> and multi-target loss functions.",
      "Live optimization view: spectrum, thickness, convergence, animation tabs.",
      "Publication-grade figure export with full style control."
    ],
    tags: ["Differentiable optics", "Optimization", "Plotly"]
  },
  {
    id: "goodlab", cat: "simulation",
    title: "GoodLab Simulator",
    tagline: "React + FastAPI modernization of the legacy NTU planar-optics simulator.",
    img: "assets/projects/goodlab.png",
    link: "https://github.com/d04943016/vibe-coding-portfolio/tree/main/projects/GoodLabSimulator_aniso",
    facts: [
      "Material manager with <b>nk/PL/DOF libraries</b> and user sandboxing.",
      "<b>14 simulation forms</b> covering the original tool's physics, now with interactive plotting.",
      "Carries a decade-old research codebase into a maintainable web stack."
    ],
    tags: ["React", "FastAPI", "Planar optics"]
  },
  {
    id: "spectrafit", cat: "simulation",
    title: "SpectraFit-γ",
    tagline: "Exciton-ratio extraction from white-OLED EL spectra.",
    img: "assets/projects/spectrafit.png",
    link: "https://github.com/d04943016/vibe-coding-portfolio/tree/main/projects/SpectraFit-gamma",
    facts: [
      "<b>Cavity-modified spectral fitting</b> extracts the gamma partition ratio between emitters.",
      "Color-science metrics (CIE, CCT) and batch fitting across measurement sets."
    ],
    tags: ["Spectral fitting", "Color science", "OLED"]
  },
  {
    id: "tadf-calc", cat: "simulation",
    title: "TADF Rate Calculator",
    tagline: "Intrinsic rate constants from TRPL + PLQY with a three-level model.",
    img: "assets/projects/tadf.jpg",
    link: "https://github.com/d04943016/vibe-coding-portfolio/tree/main/projects/TADF",
    facts: [
      "Computes radiative / non-radiative / ISC / RISC rates from transient PL and PLQY.",
      "<b>Φ<sub>Tnr</sub> sweeps</b> map the full rate/efficiency envelope of an emitter."
    ],
    tags: ["Photophysics", "TRPL", "Three-level model"]
  },
  {
    id: "caloled", cat: "lab",
    title: "calOLED",
    tagline: "Docker-deployable OLED characterization platform — goodbye spreadsheet analysis.",
    img: "assets/projects/caloled.png",
    link: "https://github.com/d04943016/vibe-coding-portfolio/tree/main/projects/calOLED",
    facts: [
      "Raw EL/IV data → calibrated <b>EQE, brightness, CCT, CE/PE/LE</b> with comparison plots.",
      "<b>Calibration audit trail</b>: every number traceable to a calibration snapshot.",
      "Desktop and mobile UI for reviewing results in the lab."
    ],
    tags: ["Docker", "Flask", "Metrology", "Mobile UI"]
  },
  {
    id: "expsheet", cat: "lab",
    title: "ExpSheet",
    tagline: "Local-first process & wafer experiment notebook for semiconductor work.",
    img: "assets/projects/expsheet.png",
    link: "https://github.com/d04943016/vibe-coding-portfolio/tree/main/projects/ExpSheet",
    facts: [
      "Chambers, process flows, and experiments in linked <b>JSON-backed schemas</b>.",
      "Image comparison and a <b>process-value matrix</b> across experiments."
    ],
    tags: ["Local-first", "Process tracking", "JSON"]
  },
  {
    id: "review-pipeline", cat: "aiops",
    title: "Claude Review Pipeline",
    tagline: "Domain-aware iterative review automation for AI coding workflows.",
    img: null, abstract: "⟲ review",
    link: "https://github.com/d04943016/vibe-coding-portfolio/tree/main/projects/claude-review-pipeline",
    facts: [
      "Conversational setup generates a <b>domain-expert reviewer</b> for the project at hand.",
      "<b>Parallel reviewers + review-fix loops</b> until N consecutive clean rounds.",
      "Includes an end-to-end UI testing flow."
    ],
    tags: ["Claude Code", "Agents", "Code review"]
  },
  {
    id: "mystocks", cat: "data",
    title: "MyStocks",
    tagline: "Local Taiwan-stock portfolio manager with full performance analytics.",
    img: "assets/projects/mystocks.png",
    link: "https://github.com/d04943016/vibe-coding-portfolio/tree/main/projects/MyStocks",
    facts: [
      "<b>SQLite ledger</b> with dashboards, positions, and performance metrics.",
      "Per-stock drill-down: annual returns, asset value, dividend history."
    ],
    tags: ["SQLite", "Finance", "Dashboards"]
  }
];

/* ============ AI projects @ TSMC (slides 4-6 + CV) ============ */
const AI_PROJECTS = [
  {
    id: "chemical",
    color: "var(--cyan)",
    title: "Material Design Using Machine Learning",
    impact: "→ ~10 materials design projects",
    img: "assets/slides/ai-chemical.jpg",
    objective: [
      "Design new chemicals to accelerate <b>new-material commercialization</b> in the semiconductor industry — conventionally a ~10-year cycle.",
      "Target applications such as <b>selective deposition</b> at advanced nodes."
    ],
    challenge: [
      "<b>No existing chemical-design workflow</b> — the pipeline had to be defined from scratch.",
      "<b>No data, no headcount</b> at project start; even the design target had to be negotiated.",
    ],
    results: [
      "Integrated ML into a new chemical-design workflow: <b>generative model + GNN regression + uncertainty prediction + transfer learning + active learning</b>.",
      "Validated by simulation and preliminary physical experiments.",
      "<b>Transferred to the software product team</b>, now serving ~10 internal materials design projects.",
      "Selected for the TSMC Digital Transformation workshop poster — <b>one of 10 groups company-wide</b>."
    ]
  },
  {
    id: "recipe",
    color: "var(--blue)",
    title: "Physics-Informed Recipe Optimization",
    impact: "1–2 weeks → minutes",
    img: "assets/slides/ai-recipe.jpg",
    objective: [
      "Optimize advanced-node process recipes by <b>predicting post-process structures</b> from incoming structure, process, and nucleation conditions."
    ],
    challenge: [
      "<b>No labeled data</b> — measurement itself had to be automated first.",
      "Domain knowledge had to be embedded into the models, not bolted on.",
      "Delivered in <b>3 months including experimental validation</b>."
    ],
    results: [
      "Pipeline of <b>image segmentation → auto-measurement → conditioned image generation → optimization</b>.",
      "Predicts structure variation across different incoming structures; even <b>identifies process-tool deficiencies</b>.",
      "R&D acceleration: <b>1–2 weeks of physical experiments → several minutes</b> of computation."
    ]
  },
  {
    id: "lbd",
    color: "var(--green)",
    title: "Literature-Based Knowledge Discovery",
    impact: "company-wide RAG product",
    img: "assets/slides/ai-lbd.jpg",
    objective: [
      "Use LLMs to extract <b>cross-disciplinary knowledge</b> (semiconductor ↔ biology/chemistry) from literature.",
      "Develop an AI-assisted research flow for R&D."
    ],
    challenge: [
      "No LLM resource at the start — had to <b>persuade IT to share the internal LLM</b>.",
      "Schedule and objective mismatch: R&D wants applications, IT builds systems."
    ],
    results: [
      "Mentored an intern to a <b>GraphRAG prototype</b> for semiconductor-chemical identification.",
      "Partnered with IT on a <b>company-wide RAG + deep-research product</b>, acting as the R&D domain expert for evaluation.",
      "Internal training program scaled the methodology to TSMC R&D engineers."
    ]
  }
];
