/* ==================================================================
   Publication, conference, patent & thesis data.
   Source: verified paper archive and CV data.
   role: "first" | "cofirst" | "coauthor"
   Each entry: id, points (key findings), contrib (my role), doi,
   img (page-1 render in assets/papers/), story (research story link)
   ================================================================== */
const PUB_TOPICS = {
  outcoupling: { label: "Out-coupling & Electrodes", labelZh: "出光與電極", color: "var(--cyan)" },
  materials:   { label: "TADF & Emitter Materials", labelZh: "TADF 與發光材料",  color: "var(--red)" },
  display:     { label: "Display Optics & Pixels", labelZh: "顯示光學與像素",   color: "var(--green)" },
  analysis:    { label: "Modeling & Analyses", labelZh: "建模與分析",       color: "var(--blue)" },
  other:       { label: "Beyond OLED", labelZh: "OLED 之外",               color: "var(--violet)" }
};

const PUBS = [
  /* ---- 2024 ---- */
  { id:"oe2024backlight", y:2024, t:"Stacking architecture for collimated backlight using cylindrical lens sheet with linear light sources or edge-lit/direct-lit BLU", j:"Opt. Express", topic:"display", role:"coauthor", doi:"10.1364/OE.519269",
    points:[
      "A cylindrical-lens-sheet stack collimates backlight architectures built from linear light sources or edge-lit/direct-lit BLUs.",
      "Extends the display-optics toolkit beyond OLED emission stacks into directional backlight design."],
    contrib:"Optical modeling and display-optics analysis support for the collimated-backlight architecture." },

  /* ---- 2014 ---- */
  { id:"apl2014", y:2014, t:"Enhancing light out-coupling of organic light-emitting devices using indium tin oxide-free low-index transparent electrodes", j:"Appl. Phys. Lett.", topic:"outcoupling", role:"coauthor", doi:"10.1063/1.4876607",
    points:[
      "Replacing the high-index ITO anode with a <b>low-index PEDOT:PSS transparent electrode</b> suppresses waveguided loss at its source.",
      "ITO-free devices substantially outperform their ITO twins — an early demonstration of the index-engineering route the lab pursued for years."],
    contrib:"Optical simulation and out-coupling analysis of the ITO-free device structures — my first paper in the index-engineering campaign that later led to the 64.5% and 80.8% devices.",
    story:"strategy" },
  { id:"jpd2014", y:2014, t:"Room-temperature-processed flexible n-InGaZnO/p-Cu₂O heterojunction diodes and high-frequency diode rectifiers", j:"J. Phys. D: Appl. Phys.", topic:"other", role:"coauthor", doi:"10.1088/0022-3727/47/36/365101",
    points:[
      "All-oxide heterojunction diodes fabricated entirely at <b>room temperature on flexible substrates</b>.",
      "The diodes operate as <b>high-frequency rectifiers</b>, demonstrating flexible-electronics readiness."],
    contrib:"Device characterization support for the flexible-electronics study — a detour beyond OLEDs during my early graduate years." },

  /* ---- 2015 ---- */
  { id:"cc2015", y:2015, t:"A versatile thermally activated delayed fluorescence emitter for both highly efficient doped and non-doped organic light emitting devices", j:"Chem. Commun.", topic:"materials", role:"coauthor", doi:"10.1039/c5cc05022g",
    points:[
      "One TADF emitter that performs in <b>both doped and non-doped</b> device architectures — rare versatility.",
      "Non-doped devices reach ~20% EQE, simplifying fabrication by removing the co-evaporation step."],
    contrib:"Device optics: optical simulation of the emitting-layer environment and quantitative EQE analysis connecting the photophysics to the device numbers.",
    story:"exciton" },
  { id:"am2015nano", y:2015, t:"Enhancing optical out-coupling of OLEDs with nanostructured composite electrodes consisting of ITO nanomesh and conducting polymer", j:"Adv. Mater.", topic:"outcoupling", role:"coauthor", doi:"10.1002/adma.201502516", hl:"EQE 61.9%", story:"nanomesh",
    points:[
      "Nano-/micro-sphere lithography sculpts an <b>ITO-PEDOT corrugated nanomesh anode</b> that disrupts surface-plasmon loss.",
      "<b>EQE 61.9% with macro lens</b> — among the earliest demonstrations that electrode geometry itself is an out-coupling strategy."],
    contrib:"Optical analysis of the nanostructured electrode: modeling how the corrugation suppresses surface-plasmon coupling and quantifying the resulting out-coupling gain." },
  { id:"aom2015", y:2015, t:"Simple planar indium-tin-oxide-free organic light-emitting devices with nearly 39% external quantum efficiency", j:"Adv. Optical Mater.", topic:"outcoupling", role:"coauthor", doi:"10.1002/adom.201500576", hl:"EQE 38.8%",
    points:[
      "A <b>completely planar, ITO-free device</b> — TiO₂/PEDOT composite anode — reaches nearly 39% EQE with no scattering structures.",
      "Shows record-level efficiency does not require nanostructuring if the layer indices are engineered correctly."],
    contrib:"Optical design and simulation of the high-index/low-index anode stack — choosing the layer indices and thicknesses that made planar 39% possible.",
    story:"strategy" },
  { id:"am2015pedot", y:2015, t:"Unlocking the full potential of conducting polymers for high-efficiency organic light-emitting devices", j:"Adv. Mater.", topic:"outcoupling", role:"coauthor", doi:"10.1002/adma.201404546", hl:"EQE 44.1%", story:"strategy",
    points:[
      "High-conductivity PEDOT:PSS as a <b>low-index ITO replacement</b> redirects power away from waveguided modes.",
      "<b>EQE 44.1% with lens</b> vs 39.0% for the ITO control — the index of the anode alone buys five points."],
    contrib:"Optical simulation quantifying the mode redistribution between ITO and PEDOT devices, and EQE analysis across the lens/no-lens configurations." },

  /* ---- 2016 ---- */
  { id:"afm2016", y:2016, t:"Achieving above 60% external quantum efficiency in OLEDs using ITO-free low-index transparent electrode and emitters with preferential horizontal emitting dipoles", j:"Adv. Funct. Mater.", topic:"outcoupling", role:"coauthor", doi:"10.1002/adfm.201505312", hl:"EQE 64.5%", story:"strategy",
    points:[
      "Combines the <b>low-index PEDOT anode</b> with emitters whose dipoles lie <b>preferentially horizontal</b> (θ// = 76%).",
      "<b>EQE 64.5% with macro lens</b> — first time the lab broke 60%, and proof that electrode and emitter strategies multiply."],
    contrib:"Dipole-orientation analysis and optical simulation showing how horizontal emitters and the low-index anode compound — the quantitative backbone of the 60% claim." },
  { id:"oe2016opt", y:2016, t:"Analyses of optical out-coupling of OLEDs having micromesh indium tin oxide and conducting polymer as composite transparent electrode", j:"Opt. Express", topic:"analysis", role:"coauthor", doi:"10.1364/OE.24.00A810",
    points:[
      "Full optical analysis of <b>micromesh ITO-PEDOT composite electrodes</b> — where the light goes, mode by mode.",
      "Establishes the simulation methodology behind the nanomesh devices' measured gains."],
    contrib:"Co-developed the optical analysis: mode-distribution calculations for the composite electrode geometry, connecting the Adv. Mater. device results to first-principles optics.",
    story:"optical-model" },
  { id:"am2016ir", y:2016, t:"Bis-tridentate Ir(III) complexes with nearly unitary RGB phosphorescence and OLEDs with external quantum efficiency exceeding 31%", j:"Adv. Mater.", topic:"materials", role:"coauthor", doi:"10.1002/adma.201505790",
    points:[
      "Bis-tridentate Ir(III) complexes with <b>near-100% phosphorescence quantum yield in R, G, and B</b>.",
      "Devices exceed <b>31% EQE</b> — at the theoretical edge for conventional structures, signalling favorable dipole orientation."],
    contrib:"Device optics: EQE quantification and dipole-orientation analysis showing the emitters' horizontal alignment is what pushes the devices past the conventional limit.",
    story:"dipole" },
  { id:"orgel2016", y:2016, t:"Effects of transparent bottom electrode thickness on characteristics of transparent organic light-emitting devices", j:"Org. Electron.", topic:"analysis", role:"coauthor", doi:"10.1016/j.orgel.2016.10.007",
    points:[
      "Systematic study of how <b>bottom-electrode thickness</b> shapes transparency, efficiency, and angular behavior of transparent OLEDs.",
      "Maps the design space for see-through display applications."],
    contrib:"Optical simulation of the electrode-thickness series — the microcavity analysis explaining the measured trends.",
    story:"validation" },
  { id:"afm2016cn", y:2016, t:"Efficient and tunable thermally activated delayed fluorescence emitters having orientation-adjustable CN-substituted pyridine and pyrimidine acceptor units", j:"Adv. Funct. Mater.", topic:"materials", role:"coauthor", doi:"10.1002/adfm.201602501", story:"exciton",
    points:[
      "CN-substituted pyridine/pyrimidine acceptors make the emitting dipole orientation <b>chemically adjustable</b>.",
      "Establishes a molecular design rule: acceptor substitution position steers both color and orientation."],
    contrib:"Measured and extracted the <b>dipole orientation factors</b> with the angle-resolved PL method and quantified their EQE consequences — the orientation data that anchors the 'orientation-adjustable' claim." },
  { id:"am2016sky", y:2016, t:"Sky-blue organic light emitting diode with 37% external quantum efficiency using thermally activated delayed fluorescence from spiroacridine-triazine hybrid", j:"Adv. Mater.", topic:"materials", role:"coauthor", doi:"10.1002/adma.201601675", hl:"world record 2016", story:"eqe-timeline",
    points:[
      "SpiroAC-TRZ: rigid spiro-linked donor-acceptor TADF emitter with <b>100% PLQY and θ// = 83% horizontal dipoles</b>.",
      "<b>36.7% EQE without out-coupling structures — the world record for TADF OLEDs at publication</b> (62.8% with lens).",
      "Cited as a landmark for orientation-engineered TADF design."],
    contrib:"Optical side of the record: dipole-orientation measurement, microcavity simulation, and the quantitative EQE decomposition proving the number was real physics, not luck." },
  { id:"acsami2016", y:2016, t:"Triboluminescence and metal phosphor for OLEDs: functional Pt(II) complexes with both 2-pyridylimidazol-2-ylidene and bipyrazolate chelates", j:"ACS Appl. Mater. Interfaces", topic:"materials", role:"coauthor", doi:"10.1021/acsami.6b12707",
    points:[
      "Pt(II) complexes that are simultaneously <b>triboluminescent and efficient OLED phosphors</b>.",
      "Non-doped devices reach ~26% EQE from a mechanically responsive emitter class."],
    contrib:"Device optical characterization and EQE analysis for the OLED half of the study." },

  /* ---- 2017 ---- */
  { id:"am2017nai", y:2017, t:"Achieving nearly 30% external quantum efficiency for orange-red OLEDs by employing TADF emitters composed of 1,8-naphthalimide-acridine hybrids", j:"Adv. Mater.", topic:"materials", role:"coauthor", doi:"10.1002/adma.201704961",
    points:[
      "NAI-DPAC orange-red TADF emitters with high PLQY and favorable orientation.",
      "<b>~30% EQE for orange-red</b> — closing the efficiency gap of long-wavelength TADF."],
    contrib:"Photophysical and optical analysis: orientation factors, cavity design, and EQE quantification for the orange-red devices.",
    story:"exciton" },
  { id:"blue2017", y:2017, t:"Anomalously long-lasting blue PhOLED featuring phenyl-pyrimidine cyclometalated iridium emitter", j:"Chem", topic:"materials", role:"coauthor", doi:"10.1016/j.chempr.2017.08.001",
    points:[
      "Phenyl-pyrimidine Ir emitter delivering <b>anomalously long operational lifetime for blue phosphorescence</b> — the field's hardest stability problem.",
      "Published in Cell Press's flagship chemistry journal."],
    contrib:"Device optics and efficiency analysis supporting the stability study." },
  { id:"jmcc2017", y:2017, t:"Efficient thermally activated delayed fluorescence of functional phenylpyridinato boron complexes and high performance organic light-emitting diodes", j:"J. Mater. Chem. C", topic:"materials", role:"coauthor", doi:"10.1039/c6tc04994j",
    points:[
      "Boron-based TADF complexes as an alternative to classic donor-acceptor designs.",
      "High-performance devices validate boron chemistry as a TADF platform."],
    contrib:"Optical simulation and device EQE analysis for the boron-complex devices." },

  /* ---- 2018 ---- */
  { id:"advsci2018", y:2018, t:"A vision toward ultimate optical out-coupling for organic light-emitting diode displays: 3D pixel configuration", j:"Advanced Science", topic:"display", role:"cofirst", doi:"10.1002/advs.201800467", hl:"2–4× out-coupling", story:"pixel3d",
    points:[
      "Treats the real pixel as a <b>three-dimensional optical structure</b>: high-index filler extracts waveguided modes, reflective bank electrodes redirect confined light.",
      "<b>2–4× out-coupling vs the planar baseline</b> in simulation — a roadmap paper for display makers."],
    contrib:"<b>Co-first author.</b> Co-developed the optical simulation framework for non-planar pixels — extending the lab's planar model to 3D geometries was the enabling step for this vision paper." },
  { id:"jpe2018", y:2018, t:"Quantitative analyses of high electroluminescence efficiency of thermally activated delayed fluorescence emitters based on acridine-triazine hybrids", j:"J. Photon. Energy", topic:"analysis", role:"first", doi:"10.1117/1.JPE.8.032105", story:"strategy",
    points:[
      "Dissects <b>why acridine-triazine TADF devices are so efficient</b>: PLQY, dipole orientation, and low-index transport layers each quantified.",
      "Shows low-index HTL/ETL suppress waveguided and plasmon losses — a transferable design rule.",
      "Invited contribution tied to the 2016 world-record device."],
    contrib:"<b>First author.</b> Conceived and performed the full quantitative decomposition — optical modeling, parameter extraction, and the loss-channel analysis — and wrote the paper." },

  /* ---- 2019 ---- */
  { id:"blue2019", y:2019, t:"High-efficiency pure blue TADF emitters with preferentially horizontal emitting dipole orientation via a spiro-linked double D-A molecular architecture", j:"J. Mater. Chem. C", topic:"materials", role:"coauthor", doi:"10.1039/C9TC03582F",
    points:[
      "Spiro-linked <b>double donor-acceptor architecture</b> locks pure-blue TADF emitters into horizontal orientation.",
      "Extends the SpiroAC-TRZ design philosophy to the hardest color: pure blue."],
    contrib:"Dipole-orientation measurement and optical/EQE analysis for the blue emitter series.",
    story:"dipole" },
  { id:"jsid2019pixel", y:2019, t:"Three-dimensional pixel configurations for optical outcoupling of OLED displays—optical simulation", j:"J. Soc. Inf. Display", topic:"display", role:"first", doi:"10.1002/jsid.769", story:"pixel3d",
    points:[
      "Journal version of the 3D-pixel optical-simulation framework, selected from the SID Display Week distinguished papers.",
      "Models high-index filler and reflective geometry as pixel-scale extraction structures for OLED displays."],
    contrib:"<b>First author.</b> Built the optical simulation framework and wrote the journal paper translating the SID work into a full article." },

  /* ---- 2020 ---- */
  { id:"afm2020red", y:2020, t:"A red TADF emitter simultaneously having high photoluminescence quantum efficiency and preferentially horizontal emitting dipole orientation", j:"Adv. Funct. Mater.", topic:"materials", role:"coauthor", doi:"10.1002/adfm.201908839",
    points:[
      "Red TADF emitter combining <b>high PLQY with horizontal orientation</b> — the two levers that usually trade off.",
      "High-efficiency red electroluminescence from a purely organic emitter."],
    contrib:"Orientation-factor extraction and device optical simulation quantifying the orientation advantage.",
    story:"dipole" },
  { id:"acceptor2020", y:2020, t:"Acceptor plane expansion enhances horizontal orientation of thermally activated delayed fluorescence emitters", j:"Sci. Adv.", topic:"materials", role:"coauthor", doi:"10.1126/sciadv.aba7855",
    points:[
      "Expanding the <b>acceptor's molecular plane</b> systematically increases horizontal dipole orientation.",
      "Turns orientation from an empirical observation into a molecular design parameter."],
    contrib:"Angle-resolved PL orientation measurements across the emitter series — the data that established the plane-expansion → orientation correlation.",
    story:"dipole" },
  { id:"oe2020tno", y:2020, t:"High-efficiency organic light emitting diodes using high-index transparent electrode", j:"Org. Electron.", topic:"outcoupling", role:"coauthor", doi:"10.1016/j.orgel.2020.105984", hl:"EQE 41.5%", story:"strategy",
    points:[
      "<b>TNO high-index transparent electrode</b> + low-index HIL implements design strategy A.",
      "<b>EQE 41.5% without lens</b> for TZ-SBA — the highest lens-free planar value in the lab's campaign."],
    contrib:"Optical design of the high-index electrode stack and the simulation-experiment EQE analysis." },
  { id:"benzo2020", y:2020, t:"High-efficiency red TADF emitters based on benzothiophene-fused spiro-acridine donor", j:"Chem. Eng. J.", topic:"materials", role:"coauthor", doi:"10.1016/j.cej.2020.126663",
    points:[
      "Benzothiophene-fused spiro-acridine donors push red TADF efficiency further.",
      "Fused-ring rigidity maintains PLQY at long wavelengths."],
    contrib:"Device optics and EQE analysis for the red emitter devices." },
  { id:"cpel2020", y:2021, t:"Integrating molecular rigidity and chirality into TADF for highly efficient sky-blue circularly polarized electroluminescence", j:"Mater. Horiz.", topic:"materials", role:"coauthor", doi:"10.1039/D0MH01521K",
    points:[
      "Chiral TADF emitters produce <b>circularly polarized electroluminescence</b> at sky-blue wavelengths with high efficiency.",
      "Molecular rigidity preserves both PLQY and dissymmetry."],
    contrib:"Optical characterization and device efficiency analysis for the CP-EL devices." },
  { id:"rational2020", y:2020, t:"Rational design of perfectly oriented thermally activated delayed fluorescence emitter for efficient red electroluminescence", j:"Sci. China Mater.", topic:"materials", role:"coauthor", doi:"10.1007/s40843-020-1501-1",
    points:[
      "A red TADF emitter designed for <b>near-perfect horizontal orientation</b>.",
      "Demonstrates that orientation can be engineered deliberately, not discovered accidentally."],
    contrib:"Orientation measurement and optical analysis verifying the 'perfectly oriented' claim quantitatively.",
    story:"dipole" },

  /* ---- 2021 ---- */
  { id:"oe2021antiuv", y:2021, t:"Modified distributed Bragg reflector for protecting organic light-emitting diode displays against ultraviolet light", j:"Opt. Express", topic:"display", role:"coauthor", doi:"10.1364/OE.418105", story:"antiuv",
    points:[
      "Modified <b>distributed Bragg reflector</b> cover-lens stacks block UV/HEV light while preserving high visible transmission.",
      "Device tests confirm reduced UV-induced degradation, connecting thin-film design to display reliability."],
    contrib:"Thin-film optical design and device-level verification workflow for the UV/HEV-blocking OLED display structures." },
  { id:"oe2021thin", y:2021, t:"Enhance external quantum efficiency of organic light-emitting devices using thin transparent electrodes", j:"Org. Electron.", topic:"outcoupling", role:"first", doi:"10.1016/j.orgel.2020.106057", hl:"EQE 57.5%", story:"validation",
    points:[
      "Thinning the transparent electrode <b>suppresses the waveguided mode at its origin</b> — design strategy C, quantified.",
      "<b>EQE 57.5% with macro lens</b>; full J-V-L and angular spectra reproduced by simulation.",
      "A clean validation case: symbols (experiment) on lines (model)."],
    contrib:"<b>First author.</b> Designed the study, ran the optical simulations, fabricated and measured the devices, and wrote the paper." },
  { id:"oe2021record", y:2021, t:"Realization of exceeding 80% external quantum efficiency in OLEDs using high-index substrates and highly horizontal emitters", j:"Org. Electron.", topic:"outcoupling", role:"cofirst", doi:"10.1016/j.orgel.2020.106049", hl:"EQE 80.8%", story:"record-device",
    points:[
      "Every strategy at once: <b>sapphire substrate (n≈1.7), thin ITO, low-index HTL, θ// = 87% emitter</b>.",
      "<b>EQE 80.8%</b> — approaching the practical ceiling for planar OLEDs.",
      "The capstone of the eight-year out-coupling campaign."],
    contrib:"<b>Co-first author.</b> Led the optical design and simulation that predicted the 80% device before fabrication, and the loss-channel analysis proving where every photon went." },
  { id:"unsym2021", y:2021, t:"An unsymmetrical TADF emitter enables orange-red electroluminescence with 31.7% external quantum efficiency", j:"Mater. Horiz.", topic:"materials", role:"coauthor", doi:"10.1039/D1MH00613D",
    points:[
      "Unsymmetrical donor-acceptor design lifts orange-red TADF to <b>31.7% EQE</b>.",
      "Breaks the symmetry habit in TADF molecular design."],
    contrib:"Device optics and EQE analysis connecting molecular asymmetry to device performance." },
  { id:"cu2021", y:2021, t:"High-efficiency red electroluminescence based on a carbene-Cu(I)-acridine complex", j:"ACS Appl. Mater. Interfaces", topic:"materials", role:"coauthor", doi:"10.1021/acsami.0c22109",
    points:[
      "<b>Copper-based</b> (earth-abundant) emitter achieving high-efficiency red electroluminescence.",
      "Carbene-metal-amide design as a sustainable alternative to iridium."],
    contrib:"Optical simulation and device efficiency analysis for the Cu(I) devices." },
  { id:"jmcc2021", y:2021, t:"Quinazoline-based TADF emitters for high-performance OLEDs with external quantum efficiencies about 28%", j:"J. Mater. Chem. C", topic:"materials", role:"coauthor", doi:"10.1039/d1tc02633j",
    points:[
      "Quinazoline acceptors as a new TADF building block reaching <b>~28% EQE</b>.",
      "Broadens the acceptor library beyond triazine chemistry."],
    contrib:"Device optical characterization and EQE quantification." },

  /* ---- 2022-2023 ---- */
  { id:"oe2022film", y:2022, t:"Using angle-selective optical film to enhance the light extraction of a thin-film encapsulated 3D reflective pixel for OLED displays", j:"Opt. Express", topic:"display", role:"cofirst", doi:"10.1364/OE.477797", story:"pixel3d",
    points:[
      "Angle-selective optical film mitigates thin-film-encapsulation optical losses in reflective 3D OLED pixels.",
      "Optical simulation shows how angular filtering recovers light otherwise trapped by encapsulation layers."],
    contrib:"<b>Co-first author.</b> Optical simulation and design analysis for angle-selective extraction in thin-film-encapsulated 3D pixels." },
  { id:"oe2022white", y:2022, t:"Analyses of emission efficiencies of white organic light-emitting diodes having multiple emitters in single emitting layer", j:"Org. Electron.", topic:"analysis", role:"coauthor", doi:"10.1016/j.orgel.2022.106474",
    points:[
      "Analytical framework for <b>multi-emitter white OLEDs</b>: how cavity and energy transfer partition emission between emitters in one layer.",
      "The exciton-partition method behind the SpectraFit-γ software."],
    contrib:"Co-developed the cavity-modified analysis of emitter partition ratios — the optical-modeling core of the paper (later productized as my SpectraFit-γ side project)." },
  { id:"oe2022pixel", y:2022, t:"Reflective 3D pixel configuration for enhancing efficiency of OLED displays", j:"Org. Electron.", topic:"display", role:"coauthor", doi:"10.1016/j.orgel.2022.106451", story:"pixel3d",
    points:[
      "Experimental realization of the <b>reflective 3D pixel</b>: bank-extended reflective electrodes redirect confined light outward.",
      "Closes the loop on the 2018 Advanced Science vision paper."],
    contrib:"Optical simulation methodology for the 3D pixel geometry — carried over from the framework I co-built for the 2018 vision paper." },
  { id:"oe2023em", y:2023, t:"Fully electromagnetic wave optic simulation and analyses of the cross-scale reflective 3D OLED pixel configuration", j:"Org. Electron.", topic:"display", role:"coauthor", doi:"10.1016/j.orgel.2022.106734", story:"pixel3d",
    points:[
      "<b>Full-EM-wave simulation across scales</b> — from nm interference to μm pixel geometry — for reflective 3D pixels.",
      "Resolves where ray-optics approximations break down in real pixel structures."],
    contrib:"The cross-scale simulation approach extends the wave-optics/ray-optics bridging I developed in the planar optical model — published after I joined TSMC, from work seeded during my postdoc." }
];

const CONFS = [
  { id:"sid2020curved", y:2020, t:"Image distortion and image correction of curved OLED displays", v:"SID Display Week 2020", role:"first",
    points:["Mapped <b>geometric image distortion</b> of curved displays analytically, then demonstrated software correction via the inverse mapping."],
    contrib:"<b>First author.</b> Derived the distortion theory, built the correction algorithm, presented at Display Week.", story:"curved" },
  { id:"sid2020pixel", y:2020, t:"Ultra-high-efficiency OLED display by 3D pixel configuration", v:"SID Display Week 2020",
    points:["Display-level projection of the 3D-pixel out-coupling gains."],
    contrib:"Simulation framework co-author for the 3D pixel programme.", story:"pixel3d" },
  { id:"sid2019curved", y:2019, t:"Optics of curved OLEDs", v:"SID Display Week 2019",
    points:["Derived the <b>effective critical angle</b> for convex/concave, spherical/cylindrical curvature; demonstrated 1.6× out-coupling enhancement."],
    contrib:"Co-developed the curvature optics theory and the experimental validation.", story:"curved" },
  { id:"sid2019antiuv", y:2019, t:"Development of anti-UV structures for OLED displays", v:"SID Display Week 2019",
    points:["Modified DBR cover-lens stacks that <b>block UV/HEV while keeping visible transmission flat</b> — verified by reduced device voltage shift."],
    contrib:"Thin-film optical design via the TMM optimizer I developed; experimental verification on devices.", story:"antiuv" },
  { id:"sid2019pixel", y:2019, t:"3D pixel configurations for optical out-coupling of OLED displays — Part I: optical simulation / Part II: experimental validation", v:"SID Display Week 2019",
    points:["Two-part series: simulation predictions and experimental validation of the 3D pixel out-coupling concept."],
    contrib:"Co-author of the optical-simulation methodology in Part I.", story:"pixel3d" }
];

const PATENTS = [
  { t:"Electroluminescent devices with improved optical out-coupling efficiencies", regions:["US","TW","CN"] },
  { t:"Spiroacridine-triazine hybrids and applications for electroluminescent devices", regions:["US","TW","CN"] },
  { t:"Nanocomposite electrode with interpenetrating high-index and low-index conductors for OLEDs", regions:["US","TW"] },
  { t:"PEDOT:PSS-based layer stack, method for forming the same, and use thereof", regions:["US"] },
  { t:"Electroluminescent device with improved light extraction", regions:["US","TW"] },
  { t:"Nanofibrillar, nanoporous, electrochemically active high-conductivity conducting polymer", regions:["US"] }
];

const THESIS = {
  zh: "有機發光材料與元件之發光理論模型探討、以及其在材料分析和高效率元件設計上之應用",
  en: "Investigation of emission theories of organic light-emitting materials and devices, and their applications in emitting material analyses and high-efficiency device designs",
  doi: "10.6342/NTU201802393",
  advisor: "Prof. Chung-Chih Wu",
  school: "Graduate Institute of Electronics Engineering, National Taiwan University",
  year: "July 2018"
};

/* helper: ordered list for paper.html prev/next */
const ALL_PAPERS = [...PUBS].sort((a,b)=>b.y-a.y).concat(CONFS);
function findPaper(id){
  return PUBS.find(p=>p.id===id) || CONFS.find(p=>p.id===id) || null;
}
function paperUrl(p){
  if(!p) return '';
  if(p.link) return p.link;
  return p.doi ? `https://doi.org/${p.doi}` : '';
}

/* ==================================================================
   Original introductions + redrawn SVG figure specs (no publisher
   material). Merged into PUBS/CONFS entries at load time.
   ================================================================== */
const PAPER_EXTRA = {
oe2024backlight:{ intro:"This 2024 Optics Express paper moves the display-optics story from OLED pixels to the illumination engine behind LCD-style systems: how to collimate a backlight using cylindrical lens sheets with linear light sources or edge-lit/direct-lit BLUs. The useful theme is the same as the OLED work — control the angular distribution of light at the architecture level, not only by making emitters brighter.",
  fig:{type:'curveT', ylab:'relative intensity', xlab:'viewing angle', note:'collimation narrows the angular spread', cap:'Redrawn illustration — cylindrical-lens backlight collimation', curves:[
    {color:'#5c686f', label:'conventional BLU', at:.22, dash:'5 4', pts:[[0,.16],[.15,.32],[.3,.55],[.5,.68],[.7,.55],[.85,.32],[1,.16]]},
    {color:'#26e0c8', label:'collimated stack', at:.52, pts:[[0,.03],[.22,.05],[.38,.24],[.48,.94],[.52,.94],[.62,.24],[.78,.05],[1,.03]]}]}},
apl2014:{ intro:"In a planar OLED, the indium-tin-oxide anode is one of the main culprits behind trapped light: its high refractive index feeds the waveguided modes that never leave the device. This paper asks a simple question — what happens if the transparent electrode simply has a low index instead? Replacing ITO with a high-conductivity PEDOT:PSS electrode removes the waveguide at its source and lifts the device efficiency well beyond the ITO control, opening the index-engineering route our group pursued for the rest of the decade.",
  fig:{type:'stack', cap:'Redrawn schematic — low-index polymer anode removes the waveguided channel', eqe:'↑', layers:[
    {n:'Al cathode', c:'#9aa6ad'},{n:'ETL / EIL'},{n:'Emitting layer', c:'#7ae582', hl:true},{n:'HTL'},
    {n:'PEDOT:PSS anode (n≈1.5)', c:'#26e0c8', hl:true, note:'replaces high-index ITO'},{n:'Glass substrate', h:1.4}]}},
jpd2014:{ intro:"Beyond OLEDs, this work explores flexible all-oxide electronics: an n-InGaZnO / p-Cu₂O heterojunction diode fabricated entirely at room temperature, so the whole device can live on a plastic substrate. The diodes rectify at high frequency, demonstrating that oxide heterojunctions can serve real flexible-circuit applications without any high-temperature step.",
  fig:{type:'diode', cap:'Redrawn schematic — flexible oxide heterojunction rectifier'}},
cc2015:{ intro:"Most TADF emitters are optimized for one device architecture: either dispersed in a host (doped) or as a neat film (non-doped). This communication reports an emitter that performs in both — the molecular design suppresses the concentration quenching that usually ruins neat-film devices, simplifying fabrication by removing the delicate co-evaporation step entirely.",
  fig:{type:'molecule', donor:'acridine-type', acceptor:'triazine-type', link:'bond', em:'doped & non-doped', color:'#26e0c8', eqe:'~20%', cap:'Redrawn schematic — one emitter, two device architectures'}},
am2015nano:{ intro:"A flat metal cathode supports surface-plasmon modes that silently absorb a large share of an OLED's power. Instead of fighting plasmons with extra films, this work reshapes the electrode itself: nano-/micro-sphere lithography sculpts the ITO into a corrugated nanomesh interpenetrated with conducting polymer. The corrugation disrupts plasmon formation while the composite stays conductive — and the devices reach 61.9% EQE with a macro lens.",
  fig:{type:'stack', cap:'Redrawn schematic — corrugated nanomesh composite anode', eqe:'61.9%', lens:true, layers:[
    {n:'Al cathode', c:'#9aa6ad'},{n:'Organic stack'},{n:'Emitting layer', c:'#7ae582', hl:true},
    {n:'ITO nanomesh ⌇⌇⌇ + PEDOT', c:'#26e0c8', hl:true, note:'corrugated — disrupts plasmons'},{n:'Glass substrate', h:1.4}]}},
aom2015:{ intro:"Can a completely planar OLED — no lenses, no scattering layers, no nanostructures — still reach record efficiency? This paper says yes, if the electrode indices are engineered correctly. A TiO₂/PEDOT:PSS composite anode pairs a high-index dielectric with a low-index conductor, and the resulting planar, ITO-free device reaches nearly 39% EQE.",
  fig:{type:'stack', cap:'Redrawn schematic — planar TiO₂/PEDOT composite anode device', eqe:'38.8%', layers:[
    {n:'Al cathode', c:'#9aa6ad'},{n:'ETL'},{n:'Emitting layer', c:'#7ae582', hl:true},{n:'HTL'},
    {n:'TiO₂ (n≈2.4)', c:'#4fc3f7', hl:true, note:'high-index dielectric'},
    {n:'PEDOT:PSS (n≈1.5)', c:'#26e0c8', hl:true, note:'low-index conductor'},{n:'Glass substrate', h:1.3}]}},
am2015pedot:{ intro:"PEDOT:PSS had long been treated as a hole-injection layer, not a serious electrode. This paper unlocks its full potential: with conductivity enhancement, the polymer becomes a stand-alone low-index transparent anode. Because its refractive index (~1.5) matches glass, the waveguided mode largely disappears — the ITO-free device delivers 44.1% EQE with a lens versus 39.0% for its ITO twin.",
  fig:{type:'stack', cap:'Redrawn schematic — conducting-polymer anode vs ITO', eqe:'44.1%', lens:true, layers:[
    {n:'Al cathode', c:'#9aa6ad'},{n:'Organic stack'},{n:'Emitting layer', c:'#7ae582', hl:true},
    {n:'PEDOT:PSS anode (n≈1.5)', c:'#26e0c8', hl:true, note:'index-matched to glass'},{n:'Glass substrate', h:1.4}]}},
afm2016:{ intro:"Two strategies, multiplied: a low-index ITO-free electrode removes the waveguided loss, and an emitter whose transition dipoles lie preferentially horizontal (θ// = 76%) sends more light toward the escape cone in the first place. Together they push the device above 60% EQE — the first time our campaign crossed that line, and clear evidence that electrode engineering and emitter orientation are independent levers that stack.",
  fig:{type:'stack', cap:'Redrawn schematic — low-index electrode × horizontal dipoles', eqe:'64.5%', lens:true, layers:[
    {n:'Al cathode', c:'#9aa6ad'},{n:'ETL'},{n:'EML · θ// = 76% →→', c:'#7ae582', hl:true, note:'horizontal dipoles'},
    {n:'HTL'},{n:'PEDOT:PSS anode', c:'#26e0c8', hl:true, note:'ITO-free, low index'},{n:'Glass substrate', h:1.3}]}},
oe2016opt:{ intro:"The companion analysis to the nanomesh devices: a mode-by-mode optical accounting of where the power goes in OLEDs with micromesh ITO / conducting-polymer composite electrodes. The simulations decompose radiation, substrate, waveguided, and plasmon channels as a function of the electrode geometry — turning the measured efficiency gains into quantitative, transferable understanding.",
  fig:{type:'curveT', ylab:'power fraction', xlab:'electrode geometry →', note:'mode-resolved power accounting (illustrative)', cap:'Redrawn illustration — mode analysis of composite electrodes', curves:[
    {color:'#ffc857', label:'radiation', at:.75, pts:[[0,.25],[.25,.32],[.5,.4],[.75,.47],[1,.52]]},
    {color:'#ff7b6b', label:'plasmon', at:.7, pts:[[0,.3],[.25,.24],[.5,.18],[.75,.13],[1,.1]]},
    {color:'#4fc3f7', label:'waveguided', at:.3, pts:[[0,.28],[.25,.22],[.5,.17],[.75,.14],[1,.12]]}]}},
am2016ir:{ intro:"Bis-tridentate Ir(III) complexes deliver something rare: near-unity phosphorescence quantum yield across red, green, and blue. The devices exceed 31% EQE — beyond what isotropic emitters allow in a conventional structure — which is itself optical evidence that the emitting dipoles align favorably. Chemistry sets the yield; orientation quietly sets the ceiling.",
  fig:{type:'molecule', metal:'Ir', ligand:'tridentate chelate', em:'R · G · B phosphorescence', color:'#7ae582', eqe:'>31%', cap:'Redrawn schematic — bis-tridentate Ir(III) emitter concept'}},
orgel2016:{ intro:"Transparent OLEDs put a see-through electrode on both faces — and every nanometer of the bottom electrode changes the microcavity. This study walks the bottom-ITO thickness through a systematic series and maps how transparency, efficiency, and angular color respond, charting the practical design space for see-through displays.",
  fig:{type:'curveT', ylab:'device response', xlab:'bottom electrode thickness (nm)', cap:'Redrawn illustration — thickness series trends (schematic)', curves:[
    {color:'#26e0c8', label:'transmittance', at:.8, pts:[[0,.8],[.3,.72],[.6,.62],[1,.5]]},
    {color:'#ffc857', label:'efficiency', at:.35, pts:[[0,.4],[.2,.55],[.45,.62],[.7,.55],[1,.45]]}]}},
afm2016cn:{ intro:"In TADF design, where you put a substituent can matter as much as what it is. Moving the CN group around pyridine and pyrimidine acceptor units tunes not only the emission color but the orientation of the emitting dipole itself — making orientation a chemically addressable parameter rather than an accident of deposition. The angle-resolved photoluminescence measurements behind this claim became a standard tool in our lab.",
  fig:{type:'molecule', donor:'acridine', acceptor:'CN-pyridine / pyrimidine', link:'bond', em:'tunable color', color:'#4fc3f7', theta:'adjustable', cap:'Redrawn schematic — substitution position steers orientation'}},
am2016sky:{ intro:"SpiroAC-TRZ joins a rigid spiro-acridine donor to a triazine acceptor at a fixed 90° twist. The geometry buys everything at once: 100% photoluminescence quantum yield, fast reverse intersystem crossing, and — crucially — transition dipoles that lie 83% horizontal. The sky-blue device reached 36.7% EQE without any out-coupling structure, the world record for TADF OLEDs at publication, and 62.8% with a lens. This paper is the reason 'orientation engineering' became a design pillar of high-efficiency TADF.",
  fig:{type:'molecule', donor:'SpiroAC', acceptor:'TRZ (triazine)', link:'spiro', em:'sky-blue', color:'#4fc3f7', theta:'83%', eqe:'36.7%', cap:'Redrawn schematic — SpiroAC-TRZ world-record emitter'}},
acsami2016:{ intro:"A Pt(II) complex that glows when you grind it — and also runs an OLED. These dual-chelate platinum phosphors exhibit triboluminescence alongside conventional electroluminescence, and non-doped devices reach roughly 26% EQE, showing that mechanically responsive emitters need not sacrifice device performance.",
  fig:{type:'molecule', metal:'Pt', ligand:'carbene / pyrazolate', em:'EL + triboluminescence', color:'#ffc857', eqe:'~26%', cap:'Redrawn schematic — dual-chelate Pt(II) phosphor'}},
am2017nai:{ intro:"Long-wavelength TADF has a built-in handicap: the energy-gap law accelerates non-radiative decay as emission shifts red. Naphthalimide-acridine hybrids fight back with a rigid, planar acceptor that keeps the quantum yield high at orange-red wavelengths — and the devices land near 30% EQE, then a benchmark for the color.",
  fig:{type:'molecule', donor:'acridine (DPAC)', acceptor:'1,8-naphthalimide', link:'bond', em:'orange-red', color:'#ff7b6b', eqe:'~30%', cap:'Redrawn schematic — NAI-acridine orange-red TADF'}},
blue2017:{ intro:"Blue phosphorescence has a notorious weakness: operational lifetime. This work in Cell Press's Chem reports a phenyl-pyrimidine cyclometalated iridium emitter whose blue devices last anomalously long — attacking the stability problem at the molecular-design level rather than by device band-aids.",
  fig:{type:'molecule', metal:'Ir', ligand:'phenyl-pyrimidine', em:'stable blue', color:'#4fc3f7', cap:'Redrawn schematic — long-lived blue PhOLED emitter'}},
jmcc2017:{ intro:"Most TADF designs revolve around nitrogen-donor / triazine-acceptor pairs. Here, boron takes the acceptor role: phenylpyridinato boron complexes show efficient thermally activated delayed fluorescence and build high-performance OLEDs, broadening the chemical space available to TADF designers.",
  fig:{type:'molecule', donor:'phenylpyridinato', acceptor:'boron center', link:'bond', em:'TADF', color:'#26e0c8', cap:'Redrawn schematic — boron-complex TADF platform'}},
advsci2018:{ intro:"Every out-coupling paper before this one treated the pixel as a flat stack. A real display pixel is three-dimensional — banks, fillers, encapsulation — and each surface is an optical opportunity. This vision paper assembles them into one architecture: high-index filler extracts the waveguided mode, top-TCO devices suppress plasmons, and the reflective bottom electrode extended onto the bank redirects confined light outward. Simulated gain: two to four times the planar baseline.",
  fig:{type:'pixel', filler:true, reflective:true, gain:'2–4×', cap:'Redrawn schematic — the 3D pixel out-coupling concept'}},
jpe2018:{ intro:"Why exactly are acridine-triazine TADF devices so efficient? This invited first-author paper answers with numbers instead of adjectives: photoluminescence quantum yield, dipole orientation, and the refractive indices of the transport layers are each measured and fed into the optical model, decomposing the EQE into its physical ingredients. The analysis shows low-index hole- and electron-transport layers quietly suppress waveguided and plasmon losses — a transferable design rule that costs nothing at the materials level.",
  fig:{type:'stack', cap:'Redrawn schematic — loss-channel decomposition of the record device', eqe:'analysis', layers:[
    {n:'Al cathode', c:'#9aa6ad'},{n:'Low-n ETL', c:'#26e0c8', hl:true, note:'suppresses plasmon loss'},
    {n:'EML · θ// = 83% →→', c:'#7ae582', hl:true, note:'oriented TADF'},
    {n:'Low-n HTL', c:'#26e0c8', hl:true, note:'suppresses waveguided loss'},{n:'ITO anode'},{n:'Glass substrate', h:1.3}]}},
blue2019:{ intro:"Pure blue is TADF's hardest color: the wide gap fights both efficiency and orientation. The spiro-linked double donor-acceptor architecture answers with geometry — two D-A arms locked by a spiro junction force the molecule flat against the substrate, keeping the emitting dipoles horizontal at deep-blue wavelengths.",
  fig:{type:'molecule', donor:'double donor arms', acceptor:'double acceptor arms', link:'spiro', em:'pure blue', color:'#7b6bff', theta:'high', cap:'Redrawn schematic — spiro-locked double D-A blue emitter'}},
jsid2019pixel:{ intro:"This journal paper is the optical-simulation half of the 3D pixel programme: instead of treating a display as a flat OLED stack, it models the real pixel geometry as an extraction structure. High-index filler redirects trapped modes, while the pixel bank and reflective surfaces become optical elements rather than dead layout.",
  fig:{type:'pixel', filler:true, reflective:true, gain:'simulation', cap:'Redrawn schematic — 3D pixel optical-simulation framework'}},
afm2020red:{ intro:"High photoluminescence quantum yield and horizontal dipole orientation usually trade against each other in red TADF — the flexible donors that help one hurt the other. This emitter achieves both simultaneously, and the optical analysis quantifies how much each property contributes to the final red electroluminescence efficiency.",
  fig:{type:'molecule', donor:'rigid donor', acceptor:'red-shifting acceptor', link:'bond', em:'red', color:'#ff7b6b', theta:'high', cap:'Redrawn schematic — red TADF with PLQY and orientation together'}},
acceptor2020:{ intro:"What makes a TADF molecule lie down? This study finds a systematic answer: expanding the π-plane of the acceptor increases the horizontal orientation of the emitting dipole, film after film. Orientation stops being folklore and becomes a design parameter you can dial with molecular area.",
  fig:{type:'molecule', donor:'donor', acceptor:'expanded π-plane', link:'bond', wideA:true, em:'TADF', color:'#26e0c8', theta:'increases with plane', cap:'Redrawn schematic — acceptor plane expansion → orientation'}},
oe2020tno:{ intro:"Design strategy A in device form: a TNO high-index transparent electrode paired with a low-index hole-injection layer reshapes the optical environment so that more dipole power couples into escaping modes. With the TZ-SBA oriented emitter, the lens-free planar device reaches 41.5% EQE — the highest bare-device value of our campaign.",
  fig:{type:'stack', cap:'Redrawn schematic — high-index electrode strategy', eqe:'41.5%', layers:[
    {n:'Al cathode', c:'#9aa6ad'},{n:'ETL'},{n:'EML · TZ-SBA →→', c:'#7ae582', hl:true, note:'θ// = 87%'},
    {n:'Low-n HIL', c:'#26e0c8', hl:true},{n:'TNO anode (n≈2.4)', c:'#4fc3f7', hl:true, note:'high-index TCO'},{n:'Glass substrate', h:1.3}]}},
benzo2020:{ intro:"Fusing a benzothiophene onto the spiro-acridine donor stiffens the molecule exactly where red TADF needs it: the rigidity suppresses the non-radiative decay that the energy-gap law accelerates at long wavelengths, keeping red emission efficient.",
  fig:{type:'molecule', donor:'benzothiophene-fused spiro-acridine', acceptor:'acceptor', link:'fused', em:'red', color:'#ff7b6b', cap:'Redrawn schematic — fused-donor red TADF'}},
cpel2020:{ intro:"Add chirality to a rigid TADF skeleton and the device emits circularly polarized light directly — no polarizer, no waste. This work integrates molecular rigidity (for efficiency) with chirality (for polarization) in one sky-blue emitter, achieving efficient circularly polarized electroluminescence.",
  fig:{type:'molecule', donor:'chiral donor', acceptor:'acceptor', link:'spiro', em:'sky-blue CP light', color:'#4fc3f7', chiral:true, cap:'Redrawn schematic — chiral TADF for CP-EL'}},
rational2020:{ intro:"Rather than screening molecules and hoping for orientation, this work designs for it: the red TADF emitter is built so its transition dipole has essentially no out-of-plane option. The result is near-perfect horizontal orientation, verified by angle-resolved measurement, and efficient red electroluminescence.",
  fig:{type:'molecule', donor:'planar donor', acceptor:'planar acceptor', link:'bond', em:'red', color:'#ff7b6b', theta:'~perfect', cap:'Redrawn schematic — orientation by design'}},
oe2021antiuv:{ intro:"Sunlight and UV exposure degrade OLED displays long before the user sees the chemistry happening. This work uses modified distributed-Bragg-reflector cover-lens stacks to block UV and high-energy visible light while keeping the visible band highly transmissive and flat. The important part is that the optical design is validated on devices, not just on spectra.",
  fig:{type:'curveT', ylab:'transmittance', xlab:'wavelength (nm)', note:'block UV/HEV · pass the visible, flat', cap:'Redrawn illustration — modified DBR anti-UV design', curves:[
    {color:'#5c686f', label:'plain DBR (ripple)', at:.75, dash:'5 4', pts:[[0,.04],[.18,.06],[.28,.5],[.4,.86],[.5,.78],[.6,.9],[.7,.8],[.85,.9],[1,.84]]},
    {color:'#26e0c8', label:'modified DBR', at:.6, pts:[[0,.02],[.18,.03],[.3,.55],[.42,.93],[.6,.95],[.8,.94],[1,.95]]}]}},
oe2021thin:{ intro:"The waveguided mode lives mostly inside the high-index ITO layer — so make the layer too thin to host it. This first-author study walks the transparent electrode down in thickness, with simulation and experiment side by side at every step: current-voltage-luminance, spectra, and angular profiles all tracked by the optical model. The thin-ITO device reaches 57.5% EQE with a lens, and the agreement between symbols and lines is the quiet headline.",
  fig:{type:'stack', cap:'Redrawn schematic — strategy C, thin transparent electrode', eqe:'57.5%', lens:true, layers:[
    {n:'Al cathode', c:'#9aa6ad'},{n:'ETL'},{n:'Emitting layer →→', c:'#7ae582', hl:true},{n:'HTL'},
    {n:'Thin ITO', c:'#4fc3f7', hl:true, h:.55, note:'too thin to guide light'},{n:'Glass substrate', h:1.3}]}},
oe2021record:{ intro:"The capstone: every strategy from eight years of out-coupling research, in one device. A sapphire substrate (n≈1.78) accepts the light that glass refuses; a thin ITO anode silences the waveguide; a low-index HTL starves the plasmon mode; and the TZ-SBA emitter radiates from dipoles that are 87% horizontal. With a simple extraction lens, the external quantum efficiency exceeds 80% — about as close to the planar ceiling as OLEDs have come.",
  fig:{type:'stack', cap:'Redrawn schematic — the 80.8% device', eqe:'80.8%', lens:true, layers:[
    {n:'Al cathode', c:'#9aa6ad'},{n:'Low-n ETL', c:'#26e0c8', hl:true},{n:'EML · TZ-SBA →→', c:'#7ae582', hl:true, note:'θ// = 87%'},
    {n:'Low-n HTL', c:'#26e0c8', hl:true},{n:'Thin ITO', c:'#4fc3f7', hl:true, h:.55},
    {n:'Sapphire substrate (n≈1.78)', c:'#ffc857', hl:true, h:1.3, note:'strategy D'}]}},
unsym2021:{ intro:"TADF designers habitually build symmetric molecules. Breaking that habit — one donor, one acceptor, deliberately unbalanced — turns out to favor orange-red emission, and the resulting device reaches 31.7% EQE, among the best for the color at publication.",
  fig:{type:'molecule', donor:'single donor', acceptor:'acceptor', link:'bond', unsym:true, em:'orange-red', color:'#ff7b6b', eqe:'31.7%', cap:'Redrawn schematic — unsymmetrical D-A design'}},
cu2021:{ intro:"Iridium is scarce; copper is not. This carbene-Cu(I)-acridine complex shows that earth-abundant metals can drive efficient red electroluminescence, with the carbene-metal-amide motif providing the fast radiative pathway that copper emitters usually lack.",
  fig:{type:'molecule', metal:'Cu', ligand:'carbene / acridine', em:'red', color:'#ff7b6b', cap:'Redrawn schematic — earth-abundant Cu(I) emitter'}},
jmcc2021:{ intro:"Quinazoline enters the TADF acceptor library: paired with standard donors it yields emitters whose devices reach about 28% EQE, demonstrating that the acceptor space beyond triazine still holds high-performance chemistry.",
  fig:{type:'molecule', donor:'donor', acceptor:'quinazoline', link:'bond', em:'TADF', color:'#26e0c8', eqe:'~28%', cap:'Redrawn schematic — quinazoline-acceptor TADF'}},
oe2022film:{ intro:"Thin-film encapsulation protects OLED displays, but it can also trap light by steering useful rays into the wrong angular channels. This co-first-author Optics Express paper introduces an angle-selective optical film between the pixel and the encapsulation layers, using angular filtering to retain the 3D reflective pixel's extraction benefit after encapsulation.",
  fig:{type:'pixel', filler:true, reflective:true, gain:'TFE loss recovered', cap:'Redrawn schematic — angle-selective film on a reflective 3D pixel'}},
oe2022white:{ intro:"White OLEDs that mix several emitters in a single layer hide a quantitative puzzle: how much of the injected energy does each emitter actually receive? This analysis builds a cavity-aware framework that extracts the partition ratios from the measured spectrum, separating optics from energy transfer. The method later became my SpectraFit-γ software.",
  fig:{type:'curveT', ylab:'EL intensity', xlab:'wavelength (nm)', note:'one spectrum, two emitters — partition extracted by cavity-aware fitting', cap:'Redrawn illustration — multi-emitter white OLED analysis', curves:[
    {color:'#4fc3f7', label:'blue emitter · γ₁', at:.22, pts:[[0,.05],[.12,.45],[.22,.75],[.32,.45],[.45,.12],[.7,.03],[1,.01]]},
    {color:'#ffc857', label:'yellow emitter · γ₂', at:.62, pts:[[0,.01],[.3,.06],[.45,.3],[.6,.62],[.75,.4],[.9,.12],[1,.04]]},
    {color:'#e8ecef', label:'measured white', at:.42, dash:'5 4', pts:[[0,.06],[.12,.48],[.22,.78],[.35,.55],[.5,.5],[.6,.68],[.75,.45],[.9,.14],[1,.05]]}]}},
oe2022pixel:{ intro:"The 2018 vision paper predicted it; this one builds it. Extending the reflective bottom electrode up the bank of a real pixel redirects laterally confined light toward the viewer, and the measured devices confirm the simulated out-coupling gain — the 3D pixel concept passes its experimental test.",
  fig:{type:'pixel', reflective:true, cap:'Redrawn schematic — reflective 3D pixel, realized'}},
oe2023em:{ intro:"At pixel scale, ray optics and wave optics both break somewhere: interference rules the nanometer stack while geometry rules the micron bank. This paper carries full electromagnetic wave simulation across both scales for the reflective 3D pixel, locating exactly where the simpler approximations fail — and where they are safe.",
  fig:{type:'pixel', reflective:true, em:true, cap:'Redrawn schematic — cross-scale full-EM simulation'}},
sid2019pixel:{ intro:"The two-part SID debut of the 3D pixel programme: Part I lays out the optical simulation of pixel-scale out-coupling structures; Part II validates the predictions on fabricated test structures — simulation and experiment introduced together, deliberately.",
  fig:{type:'pixel', filler:true, cap:'Redrawn schematic — 3D pixel simulation + validation'}},
sid2019antiuv:{ intro:"UV and high-energy visible light slowly poison OLED panels, shifting drive voltage over time. These modified distributed-Bragg-reflector cover-lens stacks block the harmful band while keeping visible transmission high and flat — verified not just on spectra but on devices, which show measurably reduced UV-induced voltage shift.",
  fig:{type:'curveT', ylab:'transmittance', xlab:'wavelength (nm)', note:'block UV/HEV · pass the visible, flat', cap:'Redrawn illustration — modified DBR anti-UV design', curves:[
    {color:'#5c686f', label:'plain DBR (ripple)', at:.75, dash:'5 4', pts:[[0,.04],[.18,.06],[.28,.5],[.4,.86],[.5,.78],[.6,.9],[.7,.8],[.85,.9],[1,.84]]},
    {color:'#26e0c8', label:'modified DBR', at:.6, pts:[[0,.02],[.18,.03],[.3,.55],[.42,.93],[.6,.95],[.8,.94],[1,.95]]}]}},
sid2019curved:{ intro:"When a panel bends, the angle at which light meets the surface changes everywhere — so the critical angle itself becomes a function of geometry. This SID paper derives the effective critical angle for convex, concave, spherical, and cylindrical curvature, and demonstrates a curved OLED whose out-coupling beats its planar twin by 1.6×.",
  fig:{type:'curved', gain:'1.6×', cap:'Redrawn schematic — curvature changes the escape condition'}},
sid2020curved:{ intro:"Curvature giveth efficiency and taketh image fidelity: a curved emitting surface projects a distorted image onto the viewer's plane. This first-author work maps the distortion analytically — emission surface to viewing plane — and then inverts the mapping in software, restoring a geometrically correct image on a curved display.",
  fig:{type:'curved', grid:true, cap:'Redrawn schematic — distortion mapped, then inverted'}},
sid2020pixel:{ intro:"Scaling the 3D-pixel results from test structures to display projections: this SID talk estimates what the measured pixel-level out-coupling gains mean for full-panel efficiency — the display-engineering case for adopting the architecture.",
  fig:{type:'pixel', filler:true, reflective:true, gain:'ultra-high', cap:'Redrawn schematic — display-level 3D pixel projection'}},
};

const PAPER_META_DEFAULT = {
  authors: "Wei-Kai Lee, Chung-Chih Wu, and collaborators",
  affiliations: ["National Taiwan University; collaborating institutions are listed on the publisher page"]
};
const PAPER_META = {
  oe2024backlight: {
    authors: "Chi-Jui Chang, Chin-Chuan Wu, Po-Jui Chen, Wei-Kai Lee, Cheng-Ting Tsai, Guo-Dung J. Su, Sheng-Wen Cheng, Ren-Wei Liao, Ren-Lang Dong, and Chung-Chih Wu",
    affiliations: [
      "Graduate Institute of Electronics Engineering, National Taiwan University",
      "Graduate Institute of Photonics and Optoelectronics / Department of Electrical Engineering, National Taiwan University",
      "AU Optronics Corporation"
    ]
  },
  oe2021record: {
    authors: "Bo-Kai Wang, Wei-Kai Lee, Kai-Chen Lin, Po-Jui Chen, Yu-Hsin Huang, Sheng-Wen Wen, Xuan Zeng, Fan Ni, Shaolong Gong, Chuluo Yang, and Chung-Chih Wu",
    affiliations: [
      "Department of Electrical Engineering, Graduate Institute of Electronics Engineering, and Graduate Institute of Photonics and Optoelectronics, National Taiwan University",
      "Hubei Key Lab on Organic and Polymeric Optoelectronic Materials, Department of Chemistry, Wuhan University",
      "College of Materials Science and Engineering, Shenzhen University"
    ]
  }
};

const PAPER_ZH = {
  oe2024backlight: {
    introZh: "這篇 2024 Optics Express 論文把顯示光學的故事從 OLED 像素推到 LCD 類系統背後的照明引擎：如何用柱狀透鏡片，搭配線光源或 edge-lit/direct-lit BLU，形成高準直背光。它和 OLED 工作共用同一個核心：不是只讓光更亮，而是在架構層級控制角度分佈。",
    pointsZh: [
      "以柱狀透鏡片堆疊，將線光源、edge-lit BLU 或 direct-lit BLU 轉成高度準直的背光。",
      "把顯示光學工具箱從 OLED 發光堆疊延伸到 directional backlight 設計。"
    ],
    contribZh: "提供準直背光架構的光學建模與顯示光學分析支援。"
  },
  oe2021record: {
    introZh: "這是八年出光研究的總結：把高折射率基板、薄 ITO、低折射率 HTL 與高度水平偶極發光體放進同一個元件。藍寶石基板接收玻璃接不住的光，薄 ITO 壓低 waveguide，低折射率 HTL 減少 plasmon loss，而 TZ-SBA 發光體以 87% 水平偶極發光。搭配簡單外部透鏡後，外部量子效率超過 80%。",
    pointsZh: [
      "把 sapphire substrate、薄 ITO、低折射率 HTL 與 θ// = 87% 發光體整合在同一個 bottom-emitting OLED 中。",
      "達到 <b>80.8% EQE</b>，接近平面 OLED 的實用出光極限。",
      "這是八年 OLED out-coupling campaign 的總結性元件。"
    ],
    contribZh: "<b>共同第一作者。</b> 主導能在製作前預測 80% 元件的光學設計與模擬，並完成 loss-channel analysis，說明每一部分光最後去了哪裡。"
  },
  oe2021thin: {
    introZh: "Waveguided mode 主要住在高折射率 ITO 裡，所以這篇工作直接把透明電極做薄，讓它不足以支撐 waveguide。研究系統性改變透明電極厚度，並把電流、亮度、光譜與角度分佈都拿來和模擬對照；薄 ITO 元件搭配透鏡達到 57.5% EQE。",
    pointsZh: [
      "以變薄的透明電極從源頭抑制 waveguided mode，對應設計策略 C。",
      "<b>薄 ITO + macro lens 達到 57.5% EQE</b>，J-V-L 與角度光譜皆由模型重現。",
      "這是一個乾淨的模型驗證案例：實驗點落在模擬線上。"
    ],
    contribZh: "<b>第一作者。</b> 設計研究、執行光學模擬、製作與量測元件，並撰寫論文。"
  }
};

const PAPER_ZH_BY_TOPIC = {
  outcoupling: {
    intro: p => `這篇 ${p.j || p.v} 工作聚焦於 OLED 出光：如何透過電極、基板、折射率或偶極方向設計，減少被困在元件內部的光。本站以中文整理它和我主軸工作的關係。`,
    points: [
      "核心問題是降低 waveguided、substrate 或 plasmon loss，讓更多光從元件離開。",
      "設計邏輯同時由光學模擬與實際元件效率驗證。"
    ],
    contrib: p => p.role === 'first' ? "我的貢獻包含研究設計、光學模擬、元件結果分析與論文撰寫。" : "我的貢獻集中在光學模擬、出光分析與元件效率的物理解釋。"
  },
  materials: {
    intro: p => `這篇 ${p.j || p.v} 工作聚焦於 OLED 發光材料：如何用分子設計改善 PLQY、TADF/磷光機制、偶極方向或發光顏色。本站以中文整理其材料物理與元件效率之間的連結。`,
    points: [
      "分子設計改變發光效率、光譜位置、偶極方向或 exciton 動力學。",
      "元件結果用來驗證材料 photophysics 是否真的轉化成高 EQE。"
    ],
    contrib: "我的貢獻集中在角度解析量測、偶極方向萃取、光學模擬與 EQE 分析。"
  },
  display: {
    intro: p => `這篇 ${p.j || p.v} 工作把光學設計放到顯示架構層級：像素幾何、封裝薄膜、抗 UV 結構或背光準直都會改變觀看方向的光分佈。本站以中文整理其 display-optics 重點。`,
    points: [
      "重點不只是提高材料亮度，而是在顯示結構層級控制光的方向、損失與可靠度。",
      "模擬與實驗一起用來確認光學架構是否能轉化為顯示效率或功能。"
    ],
    contrib: "我的貢獻集中在顯示光學建模、結構設計分析，以及把物理模型連到實際顯示元件。"
  },
  analysis: {
    intro: p => `這篇 ${p.j || p.v} 工作聚焦於分析方法：把量測到的光譜、角度分佈或元件效率拆解成可設計的物理參數。本站以中文整理模型如何服務後續設計。`,
    points: [
      "把實驗量測轉換成 loss channels、emitter partition 或結構參數等可解釋量。",
      "分析框架後續可被重複用在元件設計與軟體工具中。"
    ],
    contrib: "我的貢獻集中在模型建立、參數萃取、光學分析與結果詮釋。"
  },
  other: {
    intro: p => `這篇 ${p.j || p.v} 工作位於 OLED 主軸之外，但仍和元件物理、薄膜或柔性電子相關。本站以中文整理它在早期研究脈絡中的位置。`,
    points: [
      "工作展示了元件結構、材料或製程條件如何影響實際電性/光電表現。",
      "它補足了我早期對薄膜元件與實驗設計的訓練。"
    ],
    contrib: "我的貢獻集中在元件量測、資料整理與物理分析支援。"
  }
};

function fitZhList(items, fallback){
  const base = fallback.points || [];
  return (items || []).map((_, i) => base[i] || base[base.length - 1] || "以中文整理此工作的核心發現。");
}
ALL_PAPERS.forEach(p => {
  Object.assign(p, PAPER_EXTRA[p.id] || {});
  Object.assign(p, PAPER_META_DEFAULT, PAPER_META[p.id] || {});
  Object.assign(p, PAPER_ZH[p.id] || {});
  const fb = PAPER_ZH_BY_TOPIC[p.topic] || PAPER_ZH_BY_TOPIC.display;
  if (p.intro && !p.introZh) p.introZh = fb.intro(p);
  if (Array.isArray(p.points) && !p.pointsZh) p.pointsZh = fitZhList(p.points, fb);
  if (p.contrib && !p.contribZh) p.contribZh = typeof fb.contrib === 'function' ? fb.contrib(p) : fb.contrib;
  if (p.fig && p.fig.type === 'stack' && !p.fig.direction) p.fig.direction = 'bottom';
});
