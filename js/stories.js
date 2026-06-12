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

  /* ============ 11. Polarizer-free ============ */
  "polarizer-free": [
    {
      kicker: "The problem",
      title: "The component that saves contrast costs everything else.",
      body: "<p>A circular polarizer kills ambient reflection — and with it <b>more than half the emitted light</b>, plus precious thickness in foldable stacks.</p>",
      visual: { type: "compare", left: { k: "Circular polarizer", v: "−58%", s: "of emitted light absorbed · too thick to fold" }, right: { k: "CF + microcavity", v: "−0%", s: "emission untouched · thin by construction", win: true } }
    },
    {
      kicker: "The method",
      title: "Absorb ambient light twice — without touching emission.",
      body: "<p>Incoming ambient light is filtered once by the <b>color filter</b> and again by the <b>designed microcavity</b>; only the device's own emission is tuned to pass.</p>",
      visual: { type: "flow", nodes: [
        { t: "Ambient light arrives", s: "broadband, randomly polarized" },
        { t: "Color filter", s: "absorbs everything off-band" },
        { t: "Designed microcavity", s: "absorbs the remainder in-band" },
        { t: "Low reflection · high contrast", s: "with zero emission penalty" }
      ]}
    },
    {
      kicker: "The original figure",
      title: "The scheme, side by side with the polarizer it replaces.",
      body: "<p>Part of a 3-patent display-optics family.</p>",
      visual: { type: "image", src: "assets/slides/polarizer-free.jpg", cap: "Polarizer-free ambient contrast scheme · original presentation figure" }
    }
  ],

  /* ============ 12. Anti-UV ============ */
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

  /* ============ 15. Light field ============ */
  "lightfield": [
    {
      kicker: "The problem",
      title: "Glasses-free 3D needs control over every ray's direction.",
      body: "<p>A light-field display reconstructs the rays a real object would emit. That demands a <b>directional light source</b> and a way to steer it — at pixel scale.</p>",
      visual: { type: "quote", text: "A display that emits not just light, but light with an address.", sub: "the light-field idea" }
    },
    {
      kicker: "The concept",
      title: "Directional OLED + metasurface deflection.",
      body: "<p>Pair a <b>highly directional OLED</b> (microcavity-narrowed emission) with <b>metasurface beam deflectors</b> — a pixel that emits light with an address.</p>",
      visual: { type: "flow", nodes: [
        { t: "Microcavity OLED", s: "highly directional, narrow emission lobe" },
        { t: "Metasurface deflector", s: "steers each beam to its viewing direction" },
        { t: "Light field", s: "glasses-free 3D — every ray addressed" }
      ]}
    }
  ],

  /* ============ 16. Emitters ============ */
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
