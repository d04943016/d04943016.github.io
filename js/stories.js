/* ==================================================================
   Scrollytelling stories for every research project.
   Each step: { kicker, title, body (html), visual: {...} }
   Visual types: quote | bignum | bars | flow | stack | compare | image
   ================================================================== */
const STORIES = {

  /* ============ 1. EQE timeline (feature) ============ */
  "eqe-timeline": [
    {
      kicker: "The problem",
      title: "An OLED makes light almost perfectly — then traps it.",
      body: "<p>Modern emitters convert electrons to photons with <b>nearly 100% internal quantum efficiency</b>. But the refractive-index mismatch between organic layers, electrodes, and glass traps most of that light inside the device.</p><p>A typical planar OLED lets only one photon in four escape.</p>",
      visual: { type: "bignum", value: "~25%", label: "Conventional external quantum efficiency", sub: "75% of the light never leaves the device" }
    },
    {
      kicker: "The method",
      title: "Simulate first. Fabricate second. Repeat for eight years.",
      body: "<p>Every efficiency strategy in this campaign was <b>predicted by our self-developed optical simulator before a single device was fabricated</b> — then verified by experiments in the lab.</p><p>That loop, run over and over from 2013 to 2021, is the real result.</p>",
      visual: { type: "flow", loop: true, nodes: [
        { t: "Model", s: "EM wave + ray optics, dipole ensembles" },
        { t: "Design", s: "Layer indices and thicknesses chosen by simulation" },
        { t: "Fabricate", s: "Thermal evaporation, full device stacks" },
        { t: "Measure", s: "EQE, spectra, angular profiles — feed back into the model" }
      ]}
    },
    {
      kicker: "The results — watch it happen",
      title: "From the conventional limit to 80.8%.",
      body: "<p>Every dot is a published, fabricated device, appearing in the order we built them. The amber staircase traces the running record.</p><p><b>Hover any device</b> for its structure and reference; toggle the lens groups; replay the eight years at will.</p>",
      visual: { type: "chart", kind: "eqe" }
    },
    {
      kicker: "The original figure",
      title: "Eight years on one chart.",
      body: "<p>The summary slide from my own presentations — every dot a measured device, the dashed red line the conventional limit the field started from.</p>",
      visual: { type: "image", src: "assets/slides/eqe-timeline.jpg", cap: "Experimental EQE results, 2013–2021 · original presentation figure" }
    }
  ],

  /* ============ 2. Optical model ============ */
  "optical-model": [
    {
      kicker: "The problem",
      title: "An emitter inside an OLED is not a light bulb.",
      body: "<p>It is a <b>quantum emitter inside a nanoscale optical cavity</b>. Interference, polarization, near-field coupling, and the Purcell effect all change how much light gets out — none of which classical ray tracing can see.</p>",
      visual: { type: "compare", left: { k: "EM wave optics", v: "nm", s: "interference · TE/TM · near field · microcavity" }, right: { k: "Ray optics", v: "mm", s: "substrate, lenses, and the path to the eye" }, win: null }
    },
    {
      kicker: "The method",
      title: "From Maxwell's equations to the human eye, in one chain.",
      body: "<p>The model starts from a <b>single electric dipole solved with dyadic Green's functions</b>, adds the statistics of a real emitter ensemble, then hands the result to ray optics.</p>",
      visual: { type: "flow", nodes: [
        { t: "Maxwell's equations", s: "Dyadic Green's function · electric dipole source" },
        { t: "Emitter ensemble", s: "Dipole orientation · intrinsic spectrum · PLQY" },
        { t: "Purcell effect", s: "Cavity-modified radiative rates, q_eff" },
        { t: "Ray optics", s: "Substrate, lens, viewing angle — the measurable world" }
      ]}
    },
    {
      kicker: "The impact",
      title: "The foundation under everything else.",
      body: "<p>This model became the lab's simulation software, its parameter-extraction methods, and the design engine behind every record-efficiency device on this site.</p>",
      visual: { type: "bignum", value: "37", label: "journal papers built on this foundation", sub: "citations > 4,000" }
    },
    {
      kicker: "The original figure",
      title: "The three-step model, as I presented it.",
      body: "",
      visual: { type: "image", src: "assets/slides/optical-model.jpg", cap: "Optical model of planar OLEDs · original presentation figure" }
    }
  ],

  /* ============ 3. Simulator ============ */
  "simulator": [
    {
      kicker: "The problem",
      title: "A model only one person can run is not a tool.",
      body: "<p>The optical model lived in scripts. Every new student needed months to use it; every device study burned expert time on setup instead of physics.</p>",
      visual: { type: "quote", text: "The bottleneck was never the physics — it was that only the author could operate it.", sub: "why the software had to exist" }
    },
    {
      kicker: "The build",
      title: "A commercial-grade simulator, built in the lab.",
      body: "<p>A Python GUI suite with <b>structure, material, and user management</b>, anisotropic nk, coherent–incoherent stacks, batch simulation, and 12 function panels for EM analysis, optimization, and parameter extraction.</p>",
      visual: { type: "image", src: "assets/slides/software-gui.jpg", cap: "GUI · >300 source files · original presentation figure" }
    },
    {
      kicker: "The architecture",
      title: "Modular, because research changes weekly.",
      body: "<p>Plane-wave, source-optics, ensemble, and parameter-extraction modules behind one command interface — new physics drops in without touching the GUI.</p>",
      visual: { type: "image", src: "assets/slides/software-arch.jpg", cap: "Program architecture · original presentation figure" }
    },
    {
      kicker: "The result",
      title: "Design the device before you build it.",
      body: "<p>With simulation-first workflows, the share of fabricated devices that performed as intended jumped — the lab stopped guessing.</p>",
      visual: { type: "compare", left: { k: "Before", v: "~20%", s: "experimental efficiency, trial-and-error era" }, right: { k: "After", v: "~80%", s: "simulation-guided device design", win: true } }
    }
  ],

  /* ============ 4. Dipole orientation ============ */
  "dipole": [
    {
      kicker: "The problem",
      title: "Two films, same emitter, different EQE. Why?",
      body: "<p>Because emitters are <b>antennas, not point sources</b>. A horizontal dipole radiates out of the device; a vertical one feeds waveguided and plasmonic loss. Orientation is the hidden variable — and you cannot see it under a microscope.</p><p><b>Flip the dipole</b> with the buttons and watch where the light goes.</p>",
      visual: { type: "chart", kind: "dipole" }
    },
    {
      kicker: "The method",
      title: "Make the film tell you its orientation.",
      body: "<p>A custom <b>angle- and polarization-resolved photoluminescence setup</b> — quartz half-cylinder lens, rotating detector — measures the angular emission pattern, and the anisotropic optical model inverts it into orientation factors and intrinsic spectra.</p>",
      visual: { type: "image", src: "assets/slides/dipole-setup.jpg", cap: "Angle- & p-polarization-dependent PL setup · original presentation figure" }
    },
    {
      kicker: "The result",
      title: "The anisotropic model wins — measurably.",
      body: "<p>With thick spacer layers, isotropic fitting shows clear systematic error; the anisotropic treatment stays on the data. The extracted parameters became <b>standard inputs for every device simulation in the lab</b>, including the θ<sub>//</sub> = 83–87% emitters behind the record devices.</p>",
      visual: { type: "flow", nodes: [
        { t: "Measure", s: "angular + polarized PL spectra" },
        { t: "Fit", s: "anisotropic optical model" },
        { t: "Extract", s: "orientation factors · intrinsic spectrum" },
        { t: "Feed forward", s: "device simulation & design" }
      ]}
    }
  ],

  /* ============ 5. Validation ============ */
  "validation": [
    {
      kicker: "The test",
      title: "A model earns trust in the lab, not on the whiteboard.",
      body: "<p>Thin transparent electrodes were predicted to cut waveguided loss. So we fabricated the devices and put the model on trial: <b>symbols are experiments, lines are simulation</b>.</p>",
      visual: { type: "image", src: "assets/slides/thinito-validation.jpg", cap: "J-V-L + optical simulation vs experiment · Org. Electron. 89, 106057 (2021)" }
    },
    {
      kicker: "The result",
      title: "The lines go through the symbols.",
      body: "<p>Current, luminance, spectra, and angular profiles all reproduced without fitting gymnastics — and the thin-ITO strategy itself delivered.</p>",
      visual: { type: "bignum", value: "57.5%", label: "EQE with thin ITO + macro lens", sub: "first-author work · Org. Electron. 2021" }
    }
  ],

  /* ============ 6. Design strategies ============ */
  "strategy": [
    {
      kicker: "The problem",
      title: "Light dies in four places.",
      body: "<p>Radiation escapes; everything else is loss: <b>waveguided modes</b> in the high-index ITO and organics, <b>surface plasmons</b> at the metal cathode, and <b>substrate modes</b> stuck in the glass.</p><p>Each loss channel needs its own counter-strategy.</p>",
      visual: { type: "bars", items: [
        { l: "Radiation (escapes)", v: "~25%", w: 25, hot: true },
        { l: "Substrate mode", v: "~23%", w: 23 },
        { l: "Waveguided mode", v: "~26%", w: 26 },
        { l: "Surface plasmon", v: "~26%", w: 26 }
      ]}
    },
    {
      kicker: "The method",
      title: "Four routes out — A, B, C, D.",
      body: "<p><b>A.</b> High-index anode + low-index HIL.<br><b>B.</b> Low-index PEDOT:PSS anode, ITO-free.<br><b>C.</b> Thin HTL and anode — move the emitter closer to the substrate.<br><b>D.</b> Thin anode on a high-index sapphire substrate.</p><p>All four predicted by simulation, all four fabricated and published.</p>",
      visual: { type: "image", src: "assets/slides/strategy.jpg", cap: "Design strategies A–D · original presentation figure" }
    },
    {
      kicker: "The results",
      title: "Each strategy, measured.",
      body: "<p>With macro lens where noted — strategy D combined with high-θ<sub>//</sub> emitters reached the record.</p>",
      visual: { type: "bars", items: [
        { l: "A · TNO + TZ-SBA", v: "41.5%", w: 42 },
        { l: "B · PEDOT + lens", v: "64.5%", w: 65 },
        { l: "C · Thin ITO + lens", v: "57.5%", w: 58 },
        { l: "D · Sapphire + lens", v: "80.8%", w: 82, hot: true }
      ]}
    }
  ],

  /* ============ 7. Record device ============ */
  "record-device": [
    {
      kicker: "The goal",
      title: "What happens when every trick aligns?",
      body: "<p>One device, every strategy at once: a high-index substrate to collect what glass loses, a thin anode to silence the waveguide, a low-index HTL to suppress plasmons, and an emitter that radiates the right way.</p>",
      visual: { type: "stack", cap: "The 80.8% device, layer by layer", layers: [
        { n: "Macro lens", note: "harvests substrate light", c: "#9aa6ad" },
        { n: "Sapphire substrate", note: "n ≈ 1.7 — strategy D", c: "#ffc857", hl: true },
        { n: "Thin ITO anode", note: "kills waveguided loss", c: "#4fc3f7", hl: true },
        { n: "Low-n HTL", note: "suppresses plasmon coupling", c: "#26e0c8", hl: true },
        { n: "EML · TZ-SBA", note: "θ// = 87% horizontal dipoles", c: "#7ae582", hl: true },
        { n: "ETL / EIL", note: "", c: "#5c686f" },
        { n: "Al cathode", note: "", c: "#9aa6ad" }
      ]}
    },
    {
      kicker: "The result",
      title: "80.8% of injected charge leaves as light.",
      body: "<p>Approaching the practical ceiling for planar OLEDs — and the simulator called it before fabrication.</p>",
      visual: { type: "bignum", value: "80.8%", label: "external quantum efficiency", sub: "W.-K. Lee et al., Org. Electron. 89, 106057 (2021)" }
    },
    {
      kicker: "The original figure",
      title: "The measurement behind the number.",
      body: "",
      visual: { type: "image", src: "assets/slides/eqe-record.jpg", cap: "Strategy D record device · original presentation figure" }
    }
  ],

  /* ============ 8. Nanomesh ============ */
  "nanomesh": [
    {
      kicker: "The problem",
      title: "The plasmon tax at the metal mirror.",
      body: "<p>A flat metal cathode supports surface plasmons that silently absorb a quarter of the emitter's power. Flat interfaces pay full price — so the interface had to stop being flat.</p>",
      visual: { type: "quote", text: "If the surface plasmon needs a smooth metal surface, don't give it one.", sub: "the idea in one line" }
    },
    {
      kicker: "The method",
      title: "Sculpt the anode with spheres.",
      body: "<p><b>Nano-/micro-sphere lithography</b> shapes an ITO-PEDOT high/low-index hybrid anode into a corrugated nanomesh — disrupting plasmon modes while keeping conduction intact.</p>",
      visual: { type: "image", src: "assets/slides/nanomesh.jpg", cap: "ITO nanomesh + conducting polymer composite electrode · Adv. Mater. 27, 4883 (2015)" }
    },
    {
      kicker: "The result",
      title: "61.9% — with a nanostructured electrode.",
      body: "<p>Published in Advanced Materials, 2015 — one of the earliest demonstrations that electrode geometry itself could be an out-coupling strategy.</p>",
      visual: { type: "bignum", value: "61.9%", label: "EQE with macro lens", sub: "Adv. Mater. 27, 4883 (2015)" }
    }
  ],

  /* ============ 9. Curved OLED ============ */
  "curved": [
    {
      kicker: "The problem",
      title: "Panels started bending. The optics textbooks didn't.",
      body: "<p>Curvature changes the angle at which light meets the surface — so the <b>critical angle itself becomes a function of geometry</b>. Nobody had written down the rules.</p>",
      visual: { type: "quote", text: "The curved region is visibly brighter than the planar region — geometry alone changed the physics.", sub: "the observation that started it" }
    },
    {
      kicker: "The theory",
      title: "Derive the effective critical angle — for every bend.",
      body: "<p>Convex and concave, spherical and cylindrical: each case gets an analytical relation between incidence and emission angle, governed by a geometric factor <b>g</b>.</p>",
      visual: { type: "image", src: "assets/slides/curved.jpg", cap: "Curved OLED out-coupling theory · SID Display Week 2019" }
    },
    {
      kicker: "The catch — and the fix",
      title: "Curvature distorts the image. So invert the distortion.",
      body: "<p>Mapping the emission surface to the viewing plane quantifies the distortion — and applying the <b>inverse mapping in software</b> restores the image on a curved display.</p>",
      visual: { type: "image", src: "assets/slides/curved-correction.jpg", cap: "Image distortion & correction · SID Display Week 2020, W.-K. Lee et al." }
    },
    {
      kicker: "The result",
      title: "1.6× more light, distortion-free.",
      body: "<p>Theory, demonstration, and the correction algorithm — first-author SID work.</p>",
      visual: { type: "bignum", value: "1.6×", label: "out-coupling enhancement vs planar", sub: "SID Display Week 2019 / 2020" }
    }
  ],

  /* ============ 10. 3D pixel ============ */
  "pixel3d": [
    {
      kicker: "The problem",
      title: "The pixel was always treated as flat. It isn't.",
      body: "<p>A real OLED pixel is a <b>three-dimensional landscape</b> — banks, fillers, encapsulation. Each surface is an optical opportunity the planar picture ignores.</p>",
      visual: { type: "quote", text: "Treat the pixel as an optical component, not a footprint.", sub: "Advanced Science 5, 1800467 (2018)" }
    },
    {
      kicker: "The method",
      title: "Three mechanisms, one architecture.",
      body: "<p><b>High-index filler</b> in the concave pixel area extracts the waveguided mode. <b>Top-TCO devices</b> suppress surface plasmons and angular color shift. The <b>reflective bottom electrode extended onto the bank</b> redirects confined light outward.</p>",
      visual: { type: "image", src: "assets/slides/pixel3d.jpg", cap: "3D pixel configuration · Advanced Science 5, 1800467 (2018)" }
    },
    {
      kicker: "The result",
      title: "Up to 4× the baseline.",
      body: "<p>A vision paper for where display out-coupling can go when the pixel geometry joins the optical design.</p>",
      visual: { type: "bignum", value: "2–4×", label: "out-coupling vs planar baseline", sub: "simulation-led pixel architecture" }
    }
  ],

  /* ============ 11. Anti-UV ============ */
  "antiuv": [
    {
      kicker: "The problem",
      title: "Sunlight slowly poisons OLEDs.",
      body: "<p>UV and high-energy visible light shift the device's voltage and degrade its materials. The cover lens is the last line of defense — but it must stay perfectly transparent to everything the viewer should see.</p>",
      visual: { type: "compare", left: { k: "UV / HEV band", v: "block", s: "the wavelengths that degrade the device" }, right: { k: "Visible band", v: "pass", s: "high and flat transmission for image quality", win: true } }
    },
    {
      kicker: "The method",
      title: "DBR stacks, modified until the spectrum behaves.",
      body: "<p>Starting from distributed Bragg reflectors, the modified designs push transmission low in the UV/HEV band while <b>flattening the passband ripple</b> a plain DBR leaves in the visible. Toggle the two designs to compare.</p>",
      visual: { type: "chart", kind: "antiuv" }
    },
    {
      kicker: "The result",
      title: "Verified on devices, not just spectra.",
      body: "<p>Devices behind the modified DBR stacks show <b>measurably reduced UV-induced voltage shift</b> — reliability engineering by optical design.</p>",
      visual: { type: "quote", text: "The film blocks what degrades the device, and the viewer never knows it's there.", sub: "K.-C. Lin et al., SID 2019" }
    },
    {
      kicker: "The original figure",
      title: "The measured structures.",
      body: "",
      visual: { type: "image", src: "assets/slides/antiuv.jpg", cap: "Anti-UV/HEV thin-film structures · SID Display Week 2019" }
    }
  ],

  /* ============ 13. TMM backprop ============ */
  "tmm-backprop": [
    {
      kicker: "The problem",
      title: "Thin-film design was a three-month conversation with intuition.",
      body: "<p>Choosing layer thicknesses for a target spectrum meant an expert iterating by hand — for weeks or months per design.</p>",
      visual: { type: "compare", left: { k: "Expert, manual", v: "~3 mo", s: "per thin-film design target" }, right: { k: "This algorithm", v: "~10 s", s: "arbitrary spectral targets", win: true } }
    },
    {
      kicker: "The insight",
      title: "The transfer matrix method is differentiable. Use that.",
      body: "<p>Deriving <b>analytical gradients through the TMM</b> turns thin-film design into gradient descent — and collapses the complexity from O(N²) to O(N) in layer number, fully vectorized.</p>",
      visual: { type: "flow", loop: true, nodes: [
        { t: "Forward TMM", s: "stack → spectrum" },
        { t: "Loss function", s: "distance to target (any objective)" },
        { t: "Analytical backprop", s: "exact gradients w.r.t. every thickness" },
        { t: "Update & repeat", s: "converges in seconds" }
      ]}
    },
    {
      kicker: "Watch it converge",
      title: "Sixty iterations. A few seconds. Done.",
      body: "<p>A live view of one optimization run: the loss falls three orders of magnitude while the layer thicknesses settle. <b>Replay it</b> — it really is this fast.</p>",
      visual: { type: "chart", kind: "converge" }
    },
    {
      kicker: "The result",
      title: "Months of expertise, compressed into seconds.",
      body: "<p>Anti-UV films, AR coatings, band-pass structures — designed on demand. The same algorithm later became the <b>Opti²Layer</b> side project.</p>",
      visual: { type: "bignum", value: "O(N)", label: "gradient complexity, down from O(N²)", sub: "fully vectorized · arbitrary objectives" }
    },
    {
      kicker: "The original figure",
      title: "Forward and backward, on one slide.",
      body: "",
      visual: { type: "image", src: "assets/slides/tmm-backprop.jpg", cap: "TMM + backpropagation · original presentation figure" }
    }
  ],

  /* ============ 14. Glass ============ */
  "glass": [
    {
      kicker: "The problem",
      title: "A fingerprint sensor under the display sees mostly noise.",
      body: "<p>Every percent of transmission lost at the cover glass is signal the sensor never gets. Bare glass reflects ~8% — an SNR tax on every photon, both ways.</p>",
      visual: { type: "bars", items: [
        { l: "Bare glass", v: "~92%", w: 92 },
        { l: "Single-side AR", v: "~96%", w: 96 },
        { l: "Double-side AR", v: ">99%", w: 99.5, hot: true }
      ]}
    },
    {
      kicker: "The method",
      title: "Designed by the backprop optimizer. Then actually built.",
      body: "<p>The TMM-backprop algorithm searched the design space; a <b>TiO₂/LiF 2-pair stack</b> was then fabricated and measured: <b>T = 99.4% peak, 98.1% average</b> — nearly flat across the visible. Toggle each coating to compare.</p>",
      visual: { type: "chart", kind: "glassT" }
    },
    {
      kicker: "The result",
      title: "Glass that almost isn't there.",
      body: "<p>From algorithm to coating chamber to spectrometer — the full loop, closed.</p>",
      visual: { type: "bignum", value: "99.4%", label: "measured peak transmittance", sub: "TiO₂/LiF · 2 pairs · double-side AR" }
    },
    {
      kicker: "The original figure",
      title: "Design and experiment, side by side.",
      body: "",
      visual: { type: "image", src: "assets/slides/glass.jpg", cap: "High-transmittance glass: design + experiment · original presentation figure" }
    }
  ],

  /* ============ 15. Emitters ============ */
  "emitters": [
    {
      kicker: "The problem",
      title: "Physics takes 75% off the top.",
      body: "<p>Spin statistics send three of every four excitons into triplet states — invisible to a fluorescent emitter. The first generation of OLEDs was capped at 25% internal efficiency <b>before optics even entered the room</b>.</p>",
      visual: { type: "bignum", value: "75%", label: "of excitons lost to triplets in 1st-gen emitters", sub: "the spin-statistics problem" }
    },
    {
      kicker: "The evolution",
      title: "Three generations of getting the triplets back.",
      body: "<p><b>Phosphorescence</b> harvests triplets with heavy metals. <b>TADF</b> does it with molecular design alone — donor-acceptor systems where thermal energy recycles triplets into emissive singlets.</p>",
      visual: { type: "flow", nodes: [
        { t: "1st gen · Fluorescence", s: "IQE ≤ 25% — singlets only" },
        { t: "2nd gen · Phosphorescence", s: "IQE ~100% — iridium/platinum complexes" },
        { t: "3rd gen · TADF", s: "IQE ~100% — no heavy metals, pure organic design" }
      ]}
    },
    {
      kicker: "The original figure",
      title: "The three generations, side by side.",
      body: "<p>Our materials studies across phosphorescent and TADF systems contributed to 19 journal papers.</p>",
      visual: { type: "image", src: "assets/slides/emitters.jpg", cap: "Organic emitter generations · original presentation figure" }
    }
  ],

  /* ============ 17. Exciton dynamics ============ */
  "exciton": [
    {
      kicker: "The problem",
      title: "A TRPL curve is a riddle with five unknowns.",
      body: "<p>Radiative, non-radiative, intersystem crossing, reverse intersystem crossing — all tangled inside one transient decay. Materials chemistry needed the <b>individual rate constants</b>, not the blur.</p>",
      visual: { type: "quote", text: "The decay curve everyone measures hides the five numbers everyone needs.", sub: "why rate extraction matters" }
    },
    {
      kicker: "The method",
      title: "Write the kinetics as a matrix. Solve it honestly.",
      body: "<p><b>Matrix-form rate equations</b> for the S₁/T₁ populations, fit against transient PL and PLQY together — yielding each intrinsic rate constant with its physical constraints intact.</p>",
      visual: { type: "image", src: "assets/slides/exciton.jpg", cap: "Exciton dynamics & rate equations · original presentation figure" }
    },
    {
      kicker: "The result",
      title: "Design rules for the chemists.",
      body: "<p>Comparing acridine donors and <b>CN-substituted pyridine/pyrimidine acceptors</b> yielded orientation-adjustable TADF emitters (AFM 2016). The model lives on as the <b>TADF rate-calculator</b> side project.</p>",
      visual: { type: "flow", nodes: [
        { t: "Measure", s: "TRPL + PLQY" },
        { t: "Fit", s: "three-level matrix model" },
        { t: "Extract", s: "k_r, k_nr, k_ISC, k_RISC" },
        { t: "Inform synthesis", s: "next-generation emitter design" }
      ]}
    }
  ],

  /* ============ 18. Spectrum shift ============ */
  "spectrum-shift": [
    {
      kicker: "The problem",
      title: "Same molecule, different color. Nobody changed the molecule.",
      body: "<p>TADF emitters shift their spectrum with doping concentration — a headache for device engineers who need the color to stay put.</p>",
      visual: { type: "quote", text: "The emitter wasn't changing. Its neighborhood was.", sub: "concentration-induced spectral shift" }
    },
    {
      kicker: "The explanation",
      title: "Polarity, permanent dipoles, and the freedom to rotate.",
      body: "<p>The shift tracks the <b>environment's polarity</b> and the emitter's <b>permanent dipole moments</b> — up to 32.7 D for Py56 — and splits into rotatable (solution, RT) vs frozen (solid, 77 K) regimes.</p>",
      visual: { type: "image", src: "assets/slides/spectrum-shift.jpg", cap: "Concentration-induced spectral shift mechanism · original presentation figure" }
    },
    {
      kicker: "The payoff",
      title: "Predictable color, by design.",
      body: "<p>With the mechanism quantified, spectral position becomes a design parameter instead of a surprise.</p>",
      visual: { type: "bignum", value: "32.7 D", label: "permanent dipole moment, Py56 excited state", sub: "the lever behind the shift" }
    }
  ],

  /* ============ 19. Antenna ============ */
  "antenna": [
    {
      kicker: "The challenge",
      title: "Build an antenna that aims itself.",
      body: "<p>The IEEE AP-S Student Design Challenge, undergraduate year: a self-adaptive antenna system that detects where the signal comes from and reconfigures itself to follow — hardware included.</p>",
      visual: { type: "bignum", value: "6", label: "semifinalist teams worldwide", sub: "IEEE AP-S Student Design Challenge · team of 5" }
    },
    {
      kicker: "The system",
      title: "A pilot listens. Followers reshape. A GA decides.",
      body: "<p>The <b>pilot antenna</b> detects signal direction; <b>follower antennas</b> reconfigure via a <b>genetic algorithm</b>; custom RF hardware — phase shifters, power detectors, switches, DAQ — closes the loop from a laptop.</p>",
      visual: { type: "image", src: "assets/slides/antenna.jpg", cap: "Self-adaptive antenna system · hardware + software design" }
    },
    {
      kicker: "The takeaway",
      title: "The first full-stack project.",
      body: "<p>Optimization algorithms driving physical hardware through custom electronics — a pattern that returned in every project after.</p>",
      visual: { type: "flow", nodes: [
        { t: "Sense", s: "pilot antenna, region detection" },
        { t: "Optimize", s: "genetic-algorithm configuration search" },
        { t: "Actuate", s: "switches, phase shifters, followers" }
      ]}
    }
  ]
};

const STORIES_ZH = {
  "eqe-timeline": [
    {
      kicker: "問題",
      title: "OLED 幾乎完美地產生光，卻把光困在元件裡。",
      body: "<p>現代發光材料能以<b>接近 100% 的內部量子效率</b>把電子轉成光子。但有機層、電極與玻璃之間的折射率落差，會把大部分光困在元件內部。</p><p>典型平面 OLED 只有大約四分之一的光能真正逃出來。</p>",
      visual: { label: "傳統外部量子效率", sub: "75% 的光沒有離開元件" }
    },
    {
      kicker: "方法",
      title: "先模擬，再製作；八年持續迭代。",
      body: "<p>這段效率研究中的每個策略，都先由<b>我們自行開發的光學模擬器在製作元件前預測</b>，再由實驗室實際製作與量測驗證。</p><p>2013 到 2021 年反覆執行的這個閉環，才是真正的成果。</p>",
      visual: { nodes: [
        { t: "建模", s: "電磁波 + 幾何光學，偶極群體" },
        { t: "設計", s: "用模擬選定層折射率與厚度" },
        { t: "製作", s: "熱蒸鍍與完整元件堆疊" },
        { t: "量測", s: "EQE、光譜、角度分佈，回饋模型" }
      ]}
    },
    {
      kicker: "結果：看它發生",
      title: "從傳統極限推進到 80.8%。",
      body: "<p>每個點都是已發表、已實際製作的元件，依照我們完成它們的時間排序。黃色階梯代表當時持續刷新中的紀錄。</p><p><b>滑過任何元件</b>可看結構與文獻；也可以切換透鏡組別，重新播放這八年的演進。</p>"
    },
    {
      kicker: "原始圖",
      title: "八年濃縮在一張圖。",
      body: "<p>這是我自己簡報中的總結圖：每個點都是實測元件，紅色虛線是這個領域一開始面對的傳統極限。</p>",
      visual: { cap: "實驗 EQE 結果，2013–2021 · 原始簡報圖" }
    }
  ],

  "optical-model": [
    {
      kicker: "問題",
      title: "OLED 裡的發光體不是一顆燈泡。",
      body: "<p>它是位在<b>奈米尺度光學腔中的量子發光體</b>。干涉、偏振、近場耦合與 Purcell effect 都會改變光能否出來；傳統 ray tracing 看不到這些物理。</p>",
      visual: { left: { k: "電磁波光學", s: "干涉 · TE/TM · 近場 · 微腔" }, right: { k: "幾何光學", s: "基板、透鏡，以及通往眼睛的路徑" } }
    },
    {
      kicker: "方法",
      title: "從 Maxwell 方程式一路接到人眼能量測的世界。",
      body: "<p>模型從<b>以 dyadic Green function 求解的單一電偶極</b>出發，加入真實發光體群體的統計，再把結果交給幾何光學。</p>",
      visual: { nodes: [
        { t: "Maxwell 方程式", s: "Dyadic Green function · 電偶極源" },
        { t: "發光體群體", s: "偶極方向 · 本質光譜 · PLQY" },
        { t: "Purcell effect", s: "光腔改變的輻射速率與 q_eff" },
        { t: "幾何光學", s: "基板、透鏡、視角，也就是可量測世界" }
      ]}
    },
    {
      kicker: "影響",
      title: "後續所有工作的地基。",
      body: "<p>這個模型後來成為實驗室的模擬軟體、參數萃取方法，以及本站每個高效率元件設計背後的引擎。</p>",
      visual: { label: "篇期刊論文建立在這個基礎上", sub: "引用 > 4,000" }
    },
    {
      kicker: "原始圖",
      title: "我在簡報中使用的三步驟模型。",
      visual: { cap: "平面 OLED 光學模型 · 原始簡報圖" }
    }
  ],

  "simulator": [
    {
      kicker: "問題",
      title: "只有一個人會跑的模型，還不是工具。",
      body: "<p>光學模型原本活在 scripts 裡。每位新學生都要花數月才能使用；每個元件研究也會把專家時間消耗在設定，而不是物理本身。</p>",
      visual: { text: "瓶頸從來不是物理，而是只有作者本人能操作它。", sub: "為什麼必須把它做成軟體" }
    },
    {
      kicker: "建置",
      title: "在實驗室裡做出接近商用等級的模擬器。",
      body: "<p>這是一套 Python GUI 工具，包含<b>結構、材料與使用者管理</b>、anisotropic nk、coherent-incoherent stacks、批次模擬，以及 12 個用於電磁分析、最佳化與參數萃取的功能面板。</p>",
      visual: { cap: "GUI · 超過 300 個 source files · 原始簡報圖" }
    },
    {
      kicker: "架構",
      title: "模組化，因為研究每週都在變。",
      body: "<p>平面波、source optics、ensemble 與參數萃取模組，都藏在同一套 command interface 後面；新的物理可以放進來，而不用改 GUI。</p>",
      visual: { cap: "程式架構 · 原始簡報圖" }
    },
    {
      kicker: "結果",
      title: "先設計元件，再把它做出來。",
      body: "<p>在 simulation-first workflow 下，實際做出的元件更常符合預期；實驗室不再只靠猜。</p>",
      visual: { left: { k: "之前", s: "trial-and-error 時期的實驗效率" }, right: { k: "之後", s: "模擬導引的元件設計" } }
    }
  ],

  "dipole": [
    {
      kicker: "問題",
      title: "同一種發光體，兩個薄膜卻有不同 EQE。為什麼？",
      body: "<p>因為發光體是<b>天線，不是點光源</b>。水平偶極比較容易把光送出元件；垂直偶極則更容易餵進 waveguide 與 plasmon loss。方向性是看不見的隱藏變數，也無法靠顯微鏡直接看出來。</p><p><b>用按鈕翻轉偶極</b>，觀察光往哪裡走。</p>"
    },
    {
      kicker: "方法",
      title: "讓薄膜自己說出它的方向性。",
      body: "<p>自製<b>角度與偏振解析 photoluminescence 量測系統</b>，搭配石英半圓柱透鏡與旋轉偵測器，量到角度發光圖樣，再用各向異性光學模型反推出方向因子與本質光譜。</p>",
      visual: { cap: "角度與 p 偏振相依 PL 架設 · 原始簡報圖" }
    },
    {
      kicker: "結果",
      title: "各向異性模型用量測證明自己勝出。",
      body: "<p>當 spacer layer 變厚時，isotropic fitting 會出現系統性誤差；anisotropic treatment 則能貼住資料。萃取出的參數後來成為<b>實驗室每個元件模擬的標準輸入</b>，包括紀錄元件背後 θ<sub>//</sub> = 83–87% 的發光體。</p>",
      visual: { nodes: [
        { t: "量測", s: "角度 + 偏振 PL 光譜" },
        { t: "擬合", s: "各向異性光學模型" },
        { t: "萃取", s: "方向因子 · 本質光譜" },
        { t: "回饋", s: "元件模擬與設計" }
      ]}
    }
  ],

  "validation": [
    {
      kicker: "驗證",
      title: "模型是在實驗室裡取得信任，不是在白板上。",
      body: "<p>模型預測薄透明電極能降低 waveguided loss，所以我們實際製作元件並把模型拿來受測：<b>符號是實驗，線是模擬</b>。</p>",
      visual: { cap: "J-V-L 與光學模擬對實驗 · Org. Electron. 89, 106057 (2021)" }
    },
    {
      kicker: "結果",
      title: "線穿過了實驗點。",
      body: "<p>電流、亮度、光譜與角度分佈都不用過度 fitting 就能重現；薄 ITO 策略本身也確實有效。</p>",
      visual: { label: "薄 ITO + macro lens 的 EQE", sub: "第一作者工作 · Org. Electron. 2021" }
    }
  ],

  "strategy": [
    {
      kicker: "問題",
      title: "光會死在四個地方。",
      body: "<p>Radiation 能逃出來；其餘都是損失：高折射率 ITO 與有機層中的 <b>waveguided modes</b>、金屬陰極附近的 <b>surface plasmons</b>，以及困在玻璃中的 <b>substrate modes</b>。</p><p>每個損失通道都需要自己的對策。</p>",
      visual: { items: [
        { l: "Radiation（逃出）" },
        { l: "基板模式" },
        { l: "波導模式" },
        { l: "表面電漿" }
      ]}
    },
    {
      kicker: "方法",
      title: "四條出光路徑：A、B、C、D。",
      body: "<p><b>A.</b> 高折射率陽極 + 低折射率 HIL。<br><b>B.</b> 低折射率 PEDOT:PSS 陽極，移除 ITO。<br><b>C.</b> 薄 HTL 與薄陽極，讓發光層更靠近基板。<br><b>D.</b> 高折射率藍寶石基板上的薄陽極。</p><p>四個策略都先由模擬預測，再被實際製作並發表。</p>",
      visual: { cap: "設計策略 A–D · 原始簡報圖" }
    },
    {
      kicker: "結果",
      title: "每個策略都被量測。",
      body: "<p>部分結果搭配 macro lens；策略 D 與高 θ<sub>//</sub> 發光體結合後達到紀錄。</p>",
      visual: { items: [
        { l: "A · TNO + TZ-SBA" },
        { l: "B · PEDOT + lens" },
        { l: "C · 薄 ITO + lens" },
        { l: "D · 藍寶石 + lens" }
      ]}
    }
  ],

  "record-device": [
    {
      kicker: "目標",
      title: "當所有策略都對齊，會發生什麼？",
      body: "<p>一個元件，同時放進所有策略：高折射率基板收下玻璃留不住的光；薄陽極壓低 waveguide；低折射率 HTL 抑制 plasmon；再加上朝正確方向輻射的發光體。</p>",
      visual: { cap: "80.8% 元件，逐層拆解", layers: [
        { n: "Macro lens", note: "收集基板光" },
        { n: "藍寶石基板", note: "n ≈ 1.7，策略 D" },
        { n: "薄 ITO 陽極", note: "降低 waveguided loss" },
        { n: "低折射率 HTL", note: "抑制 plasmon coupling" },
        { n: "EML · TZ-SBA", note: "θ// = 87% 水平偶極" },
        { n: "ETL / EIL" },
        { n: "Al 陰極" }
      ]}
    },
    {
      kicker: "結果",
      title: "80.8% 的注入電荷最後變成離開元件的光。",
      body: "<p>這接近平面 OLED 的實用極限，而且模擬器在製作前就預測到這個方向。</p>",
      visual: { label: "外部量子效率", sub: "W.-K. Lee et al., Org. Electron. 89, 106057 (2021)" }
    },
    {
      kicker: "原始圖",
      title: "這個數字背後的量測。",
      visual: { cap: "策略 D 紀錄元件 · 原始簡報圖" }
    }
  ],

  "nanomesh": [
    {
      kicker: "問題",
      title: "金屬鏡面附近的 plasmon 稅。",
      body: "<p>平坦金屬陰極會支撐 surface plasmon，悄悄吃掉約四分之一的發光體能量。平坦介面要付全額代價，所以介面必須不再平坦。</p>",
      visual: { text: "如果 surface plasmon 需要平滑金屬表面，那就不要給它平滑表面。", sub: "一句話概念" }
    },
    {
      kicker: "方法",
      title: "用球把陽極雕塑出來。",
      body: "<p><b>奈米/微米球微影</b>把 ITO-PEDOT 高/低折射率複合陽極做成 corrugated nanomesh；它能擾動 plasmon modes，同時保留導電性。</p>",
      visual: { cap: "ITO nanomesh + 導電高分子複合電極 · Adv. Mater. 27, 4883 (2015)" }
    },
    {
      kicker: "結果",
      title: "61.9%：來自奈米結構電極。",
      body: "<p>2015 年發表於 Advanced Materials，是較早證明電極幾何本身也能成為出光策略的例子之一。</p>",
      visual: { label: "搭配 macro lens 的 EQE", sub: "Adv. Mater. 27, 4883 (2015)" }
    }
  ],

  "curved": [
    {
      kicker: "問題",
      title: "面板開始彎曲，但光學教科書還停在平面。",
      body: "<p>曲率會改變光抵達表面的角度，因此<b>臨界角本身會變成幾何的函數</b>。當時還沒有人把這套規則寫下來。</p>",
      visual: { text: "曲面區域明顯比平面區域亮；光是幾何就改變了物理。", sub: "啟動這個工作的觀察" }
    },
    {
      kicker: "理論",
      title: "推導每一種彎曲下的有效臨界角。",
      body: "<p>凸面、凹面、球面與柱面：每個情況都有入射角與出射角的解析關係，並由幾何因子 <b>g</b> 控制。</p>",
      visual: { cap: "曲面 OLED 出光理論 · SID Display Week 2019" }
    },
    {
      kicker: "代價與修正",
      title: "曲率會扭曲影像，所以反向補償它。",
      body: "<p>把發光面映射到觀看平面，可以量化影像扭曲；再把<b>反向映射寫進軟體</b>，就能在曲面顯示器上恢復幾何正確的影像。</p>",
      visual: { cap: "影像扭曲與修正 · SID Display Week 2020, W.-K. Lee et al." }
    },
    {
      kicker: "結果",
      title: "1.6× 更多光，而且沒有幾何扭曲。",
      body: "<p>理論、展示與修正演算法，都是第一作者 SID 工作。</p>",
      visual: { label: "相對平面元件的出光增益", sub: "SID Display Week 2019 / 2020" }
    }
  ],

  "pixel3d": [
    {
      kicker: "問題",
      title: "像素一直被當成平面，但它不是。",
      body: "<p>真實 OLED 像素是<b>三維地形</b>，包含 bank、filler、encapsulation。每個表面都是平面模型忽略掉的光學機會。</p>",
      visual: { text: "把像素當作光學元件，而不是版圖 footprint。", sub: "Advanced Science 5, 1800467 (2018)" }
    },
    {
      kicker: "方法",
      title: "三種機制，一個架構。",
      body: "<p>凹陷像素區中的<b>高折射率 filler</b>萃取 waveguided mode；<b>Top-TCO devices</b>抑制 surface plasmon 與角度色偏；<b>延伸到 bank 上的反射底電極</b>把受困光重新導向外部。</p>",
      visual: { cap: "3D 像素結構 · Advanced Science 5, 1800467 (2018)" }
    },
    {
      kicker: "結果",
      title: "最高可達基準值的 4 倍。",
      body: "<p>這是一篇 vision paper，說明當像素幾何也加入光學設計時，顯示器出光可以走到哪裡。</p>",
      visual: { label: "相對平面基準的出光", sub: "以模擬導引的像素架構" }
    }
  ],

  "antiuv": [
    {
      kicker: "問題",
      title: "陽光會慢慢毒化 OLED。",
      body: "<p>UV 與高能量可見光會造成元件電壓漂移並劣化材料。Cover lens 是最後一道防線，但對觀眾應該看到的可見光，它又必須維持高度透明。</p>",
      visual: { left: { k: "UV / HEV 波段", s: "會劣化元件的波長" }, right: { k: "可見光波段", s: "影像品質需要高且平坦的穿透率" } }
    },
    {
      kicker: "方法",
      title: "從 DBR 堆疊出發，調到光譜聽話為止。",
      body: "<p>以 distributed Bragg reflector 為起點，修改後的設計能把 UV/HEV 波段穿透率壓低，同時<b>撫平一般 DBR 在可見光留下的 passband ripple</b>。可切換兩種設計進行比較。</p>"
    },
    {
      kicker: "結果",
      title: "不只光譜，還在元件上驗證。",
      body: "<p>放在修改版 DBR 堆疊後方的元件，呈現<b>可量測的 UV-induced voltage shift 降低</b>；這是用光學設計做可靠度工程。</p>",
      visual: { text: "薄膜阻擋會劣化元件的光，而觀眾完全感覺不到它的存在。", sub: "K.-C. Lin et al., SID 2019" }
    },
    {
      kicker: "原始圖",
      title: "實際量測的結構。",
      visual: { cap: "Anti-UV/HEV 薄膜結構 · SID Display Week 2019" }
    }
  ],

  "tmm-backprop": [
    {
      kicker: "問題",
      title: "薄膜設計原本是和直覺對話三個月。",
      body: "<p>為了達到目標光譜選擇層厚，往往需要專家手動迭代；每個設計目標可能花上數週到數月。</p>",
      visual: { left: { k: "專家手動", s: "每個薄膜設計目標" }, right: { k: "這個演算法", s: "任意光譜目標" } }
    },
    {
      kicker: "洞察",
      title: "Transfer matrix method 是可微分的，那就使用它。",
      body: "<p>推導<b>穿過 TMM 的解析梯度</b>後，薄膜設計就能變成梯度下降；層數複雜度也從 O(N²) 降到 O(N)，並可完整向量化。</p>",
      visual: { nodes: [
        { t: "Forward TMM", s: "堆疊 → 光譜" },
        { t: "Loss function", s: "與目標的距離，可任意定義" },
        { t: "解析 backprop", s: "對每一層厚度的精確梯度" },
        { t: "更新並重複", s: "數秒內收斂" }
      ]}
    },
    {
      kicker: "看它收斂",
      title: "六十次迭代，幾秒鐘，完成。",
      body: "<p>這是一個最佳化 run 的即時視角：loss 下降三個數量級，層厚也逐漸穩定。<b>重播看看</b>，真的就是這麼快。</p>"
    },
    {
      kicker: "結果",
      title: "把數月專家經驗壓縮成幾秒鐘。",
      body: "<p>Anti-UV 薄膜、AR coatings、band-pass structures，都能依需求設計。同一個演算法後來也變成 <b>Opti²Layer</b> side project。</p>",
      visual: { label: "梯度複雜度，從 O(N²) 降下來", sub: "完整向量化 · 任意 objective" }
    },
    {
      kicker: "原始圖",
      title: "Forward 與 backward 放在同一張投影片。",
      visual: { cap: "TMM + backpropagation · 原始簡報圖" }
    }
  ],

  "glass": [
    {
      kicker: "問題",
      title: "螢幕下指紋感測器看到的大多是雜訊。",
      body: "<p>Cover glass 每少一點穿透率，都是感測器再也收不到的訊號。裸玻璃反射約 8%，等於對來回每個光子都課了一次 SNR 稅。</p>",
      visual: { items: [
        { l: "裸玻璃" },
        { l: "單面 AR" },
        { l: "雙面 AR" }
      ]}
    },
    {
      kicker: "方法",
      title: "先由 backprop optimizer 設計，然後真的做出來。",
      body: "<p>TMM-backprop 演算法搜尋設計空間；接著實際製作並量測 <b>TiO₂/LiF 2-pair stack</b>：<b>T = 99.4% peak、98.1% average</b>，在可見光範圍幾乎平坦。可切換不同 coating 比較。</p>"
    },
    {
      kicker: "結果",
      title: "幾乎不存在的玻璃。",
      body: "<p>從演算法到鍍膜機，再到光譜儀；完整閉環被關上了。</p>",
      visual: { label: "實測峰值穿透率", sub: "TiO₂/LiF · 2 pairs · 雙面 AR" }
    },
    {
      kicker: "原始圖",
      title: "設計與實驗並排。",
      visual: { cap: "高穿透率玻璃：設計 + 實驗 · 原始簡報圖" }
    }
  ],

  "emitters": [
    {
      kicker: "問題",
      title: "物理先拿走了 75%。",
      body: "<p>自旋統計會讓四分之三的 excitons 進入 triplet states；對螢光材料來說，這些狀態是看不見的。第一代 OLED 在還沒碰到光學之前，內部效率就先被限制在 25%。</p>",
      visual: { label: "第一代發光材料中進入 triplets 的 excitons", sub: "自旋統計問題" }
    },
    {
      kicker: "演進",
      title: "三代材料，把 triplets 一步步拿回來。",
      body: "<p><b>Phosphorescence</b> 用重金屬收割 triplets。<b>TADF</b> 則只靠分子設計做到同樣的事：donor-acceptor 系統利用熱能把 triplets 回收成可發光的 singlets。</p>",
      visual: { nodes: [
        { t: "第一代 · 螢光", s: "IQE ≤ 25%，只用 singlets" },
        { t: "第二代 · 磷光", s: "IQE 約 100%，銥/鉑錯合物" },
        { t: "第三代 · TADF", s: "IQE 約 100%，無重金屬、純有機設計" }
      ]}
    },
    {
      kicker: "原始圖",
      title: "三代材料並排比較。",
      body: "<p>我們在 phosphorescent 與 TADF 系統上的材料研究，共貢獻到 19 篇期刊論文。</p>",
      visual: { cap: "有機發光材料三代演進 · 原始簡報圖" }
    }
  ],

  "exciton": [
    {
      kicker: "問題",
      title: "一條 TRPL 曲線，是有五個未知數的謎題。",
      body: "<p>Radiative、non-radiative、intersystem crossing、reverse intersystem crossing，全都糾纏在同一條 transient decay 裡。材料化學需要的是<b>各別的本質速率常數</b>，不是混在一起的模糊曲線。</p>",
      visual: { text: "大家都量的 decay curve，藏著大家真正需要的五個數字。", sub: "為什麼速率萃取重要" }
    },
    {
      kicker: "方法",
      title: "把 kinetics 寫成矩陣，誠實地解它。",
      body: "<p>以<b>矩陣形式速率方程</b>描述 S₁/T₁ population，同時擬合 transient PL 與 PLQY，並在物理限制下得到每一個本質速率常數。</p>",
      visual: { cap: "Exciton dynamics 與 rate equations · 原始簡報圖" }
    },
    {
      kicker: "結果",
      title: "給化學家的設計規則。",
      body: "<p>比較 acridine donors 與 <b>CN-substituted pyridine/pyrimidine acceptors</b> 後，我們得到方向性可調的 TADF 發光體（AFM 2016）。這個模型後來也延伸成 <b>TADF rate-calculator</b> side project。</p>",
      visual: { nodes: [
        { t: "量測", s: "TRPL + PLQY" },
        { t: "擬合", s: "三能階矩陣模型" },
        { t: "萃取", s: "k_r、k_nr、k_ISC、k_RISC" },
        { t: "回饋合成", s: "下一代發光體設計" }
      ]}
    }
  ],

  "spectrum-shift": [
    {
      kicker: "問題",
      title: "同一個分子，顏色卻變了；但沒有人改分子。",
      body: "<p>TADF 發光體會隨摻雜濃度發生光譜位移，對需要顏色穩定的元件工程來說是一個麻煩。</p>",
      visual: { text: "改變的不是發光體，而是它的鄰居。", sub: "濃度誘發光譜位移" }
    },
    {
      kicker: "解釋",
      title: "極性、永久偶極，以及分子是否能旋轉。",
      body: "<p>這個位移跟<b>環境極性</b>與發光體的<b>永久偶極矩</b>有關，Py56 的 excited state 可高達 32.7 D；並可分成可旋轉（溶液、室溫）與凍結（固態、77 K）兩種 regime。</p>",
      visual: { cap: "濃度誘發光譜位移機制 · 原始簡報圖" }
    },
    {
      kicker: "價值",
      title: "讓顏色成為可預測的設計參數。",
      body: "<p>當機制被量化後，光譜位置就不再只是 surprise，而是可以設計的參數。</p>",
      visual: { label: "Py56 excited state 的永久偶極矩", sub: "造成位移的槓桿" }
    }
  ],

  "antenna": [
    {
      kicker: "挑戰",
      title: "做一個會自己瞄準的天線。",
      body: "<p>大學時參加 IEEE AP-S Student Design Challenge：設計一套自適應天線系統，能偵測訊號方向並重新配置自己去追蹤，包含實體硬體。</p>",
      visual: { label: "全球準決賽隊伍", sub: "IEEE AP-S Student Design Challenge · 5 人團隊" }
    },
    {
      kicker: "系統",
      title: "Pilot 先聽，followers 變形，GA 做決策。",
      body: "<p><b>Pilot antenna</b> 偵測訊號方向；<b>follower antennas</b> 透過<b>genetic algorithm</b>重新配置；自製 RF 硬體包含 phase shifters、power detectors、switches、DAQ，從筆電把閉環關起來。</p>",
      visual: { cap: "自適應天線系統 · 硬體 + 軟體設計" }
    },
    {
      kicker: "收穫",
      title: "第一個完整 full-stack 專案。",
      body: "<p>最佳化演算法透過自製電子電路驅動真實硬體；這個模式後來在每個專案裡不斷重現。</p>",
      visual: { nodes: [
        { t: "感測", s: "pilot antenna、區域偵測" },
        { t: "最佳化", s: "genetic-algorithm configuration search" },
        { t: "驅動", s: "switches、phase shifters、followers" }
      ]}
    }
  ]
};
