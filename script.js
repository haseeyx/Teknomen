/* ============================================================
   IMAGE MAP
============================================================ */
const IMG = {
  spinguard:  ['SpinGuard Main.png'],
  fibrotek:   ['FIBROTEK Product image (1).png', 'FIBROTEK Product image (2).png'],
  spindle:    ['Spindle monitoring Main.png'],
  usps:       ['Industrial USPS.png'],
  vfd:        ['Variable Frequency Drives.png'],
  pressure:   ['Pressure Transmitter.png', 'Pressure transmitter 2.png'],
  lengthBatch:['Lenght & Batch.png'],
  servo:      ['Servo Meter & Drives 1.png', 'Servo Meter & Drives 2.png']
};

function expandImages(arr){
  const out = [];
  for(let i = 0; i < 3; i++) out.push(arr[i % arr.length]);
  return out;
}

const WA_NUMBER = '923156185476';
function waLink(message){
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

/* ============================================================
   PRODUCT DATA
============================================================ */
const PRODUCTS = [
  {
    id: 'spinguard-pro', name: 'SPINGUARD PRO', category: '',
    tagline: 'Intelligent Control, Smarter Spinning', subtitle: 'Software-Based Automation For Textile Ring Spinning Frames',
    images: expandImages(IMG.spinguard), brochure: 'SPINGUARD-Pro-Brochure.pdf',
    shortDesc: 'Software upgrade that transforms existing ring spinning frames — no additional hardware required.',
    description: `Transform your existing ring spinning frame with intelligent software automation designed to improve doffing control, machine safety, power-failure recovery, production reliability, lubrication management, and machine monitoring without adding additional hardware or making modifications to the existing machine.

SPINGUARD PRO is a complete software-based automation solution for textile ring spinning frames, designed to enhance machine operation using the existing machine control system. The software intelligently manages critical machine functions such as ring rail movement, doffing, power-failure recovery, limit-switch supervision, overhead cleaner positioning, and automatic lubrication.`,
    features: [
      { title: 'Smart Doffing Control', desc: 'Intelligently controls ring rail movement throughout the doffing sequence for smoother doffing, reduced yarn end-downs and reliable machine restart.' },
      { title: 'Doffing Switch Supervision', desc: 'Continuously monitors ring rail limit-switch feedback to prevent unsafe rail movement and protect the machine against feedback or switch failures.' },
      { title: 'Overhead Cleaner Interlock', desc: 'Automatically positions and interlocks the overhead cleaner during doffing to prevent interference and ensure safe, controlled machine operation.' },
      { title: 'Power Failure Recovery', desc: 'Automatically restores machine state and resumes production after unexpected power interruptions — without operator intervention.' },
      { title: 'Full Doff Verification', desc: 'Verifies complete doff cycles and confirms all spindles are correctly positioned before the machine resumes normal operation.' },
      { title: 'Automatic Lubrication Control', desc: 'Manages lubrication cycles based on actual machine running time — reducing wear and extending service intervals.' }
    ],
    specs: [
      { l: 'Product', v: 'SPINGUARD PRO' },{ l: 'Application', v: 'Textile Ring Spinning Frames' },
      { l: 'Technology', v: 'Software-Based Automation' },{ l: 'Installation', v: 'Software Upgrade' },
      { l: 'Additional Hardware', v: 'Not Required' },
      { l: 'Compatible Machines', v: 'EJM-128 · EJM-168 · EJM-178 · FA-507 · F1518-A' },
      { l: 'Monitoring Parameters', v: 'Pre-Built &amp; Customizable' }
    ],
    applications: ['Machine Status','Running Time','Stoppage Analysis','Fault Information','Production Information','Custom Parameters'],
    applicationsNote: 'Additional monitoring parameters can be configured according to the customer\u2019s requirements.'
  },
  {
    id: 'fibrotek', name: 'FibroTek', category: '',
    tagline: 'Precision in Every Spindle', subtitle: 'Advanced Suction And Hairiness Control System For Textile Ring Spinning Frames',
    images: expandImages(IMG.fibrotek), brochure: 'FIBROTEK-Brochure.pdf',
    shortDesc: 'Intelligent suction-control system that maintains consistent yarn hairiness across every spindle.',
    description: `FibroTek is an intelligent suction-control system designed for textile ring spinning frames to continuously regulate airflow at the compacting zone and maintain consistent yarn hairiness across every spindle and throughout the complete doff.

By optimizing suction according to actual operating requirements, FibroTek helps improve Hairiness Index, Hairiness CV%, yarn evenness, fiber cohesion and overall yarn quality, while reducing suction-system energy consumption and maintenance requirements.

Suitable for all material counts and a wide range of fiber/material types used in yarn production.`,
    features: [
      { title: 'Better Yarn Quality', desc: 'Improves Hairiness Index, Hairiness CV% and overall yarn evenness across every spindle.' },
      { title: 'Low Energy Consumption', desc: 'Optimizes suction to actual operating needs — significantly reducing electrical consumption.' },
      { title: 'Early Fault Detection', desc: 'Detects low suction, blocked ducts and blower issues before they affect yarn quality.' },
      { title: 'Consistent Spindle Performance', desc: 'Maintains uniform suction across the entire doff cycle and every spindle position.' },
      { title: 'Less Manual Cleaning', desc: 'Automatic high-suction duct cleaning cycle reduces manual intervention and downtime.' },
      { title: 'One Integrated Solution', desc: 'Suction control, monitoring display and cleaning — combined in a single package.' }
    ],
    specs: [
      { l: 'Product', v: 'FibroTek' },{ l: 'Application', v: 'Textile Ring Spinning Frames' },
      { l: 'Primary Function', v: 'Yarn Hairiness &amp; Hairiness CV control' },
      { l: 'Material Compatibility', v: 'Various fiber / material types' },
      { l: 'Material Counts', v: 'Suitable for different material counts' },
      { l: 'Power Supply', v: '24 VDC' },{ l: 'Display', v: 'Integrated monitoring display' },
      { l: 'Blower Control', v: 'VFD-based control' },{ l: 'Duct Cleaning', v: 'Automatic high-suction cleaning cycle' },
      { l: 'Suction Monitoring', v: 'Continuous' },{ l: 'Low-Suction Alarm', v: 'Yes' }
    ],
    applications: ['Textile Ring Spinning Frames','Different material counts','Different fiber / material types','Compact spinning applications','Ring spinning production lines','Textile mills seeking improved suction consistency','Applications requiring suction monitoring and optimization'],
  },
  {
    id: 'spindle-monitoring', name: 'Spindle Monitoring System', category: 'Machine Monitoring',
    tagline: 'Complete Visibility. Every Spindle.', subtitle: 'Real-time spindle-level monitoring for textile ring spinning frames',
    images: expandImages(IMG.spindle),
    shortDesc: 'Real-time visibility into the operating condition and performance of every individual spindle.',
    description: `The Spindle Monitoring System is an advanced monitoring solution for ring spinning frames that provides real-time visibility into the operating condition and production performance of individual spindles.

From individual spindle monitoring to centralized multi-machine production visibility, the system gives operators, supervisors and production teams the information they need to identify problems faster, improve machine performance and maintain consistent yarn production.`,
    features: [
      { title: 'Yarn Breakage Detection', desc: 'Detects yarn breakage at individual spindle level — instantly notifying operators to minimize waste.' },
      { title: 'Yarn Speed Monitoring', desc: 'Continuously monitors spindle speed to detect deviations from target production rates.' },
      { title: 'Lazy Spindle Detection', desc: 'Identifies underperforming spindles that spin below required speed — a hidden source of production loss.' },
      { title: 'Machine Level Monitoring', desc: 'Aggregates spindle data to give a complete overview of each machine\u2019s performance.' },
      { title: 'Yarn Twist Monitoring', desc: 'Monitors twist consistency across spindles to maintain uniform yarn quality.' },
      { title: 'Optical Yarn Quality Monitoring', desc: 'Uses optical sensing to detect quality anomalies in real time as the yarn is produced.' },
      { title: 'Spindle Level Production Monitoring', desc: 'Tracks per-spindle production data for precise performance analysis and benchmarking.' },
      { title: 'Centralized Multi-Machine Monitoring', desc: 'Connects multiple machines into a single dashboard for plant-wide production visibility.' }
    ],
    specs: [
      { l: 'Product', v: 'Spindle Monitoring System' },{ l: 'Application', v: 'Textile Ring Spinning Frames' },
      { l: 'Monitoring Scope', v: 'Individual spindle to plant-wide' },
      { l: 'Detection', v: 'Yarn breakage · Lazy spindle · Twist' },
      { l: 'Data Output', v: 'Real-time production visibility' },
      { l: 'Connectivity', v: 'Centralized multi-machine dashboard' }
    ],
    applications: ['Spinning mills','Compact spinning','Ring spinning lines','Quality assurance','Production analytics','Maintenance planning']
  },
  {
    id: 'industrial-usps', name: 'Industrial USPS', category: 'Industrial Power',
    tagline: 'Uninterrupted Power. Protected Control', subtitle: 'Industrial Power Backup for Embedded Computers',
    images: expandImages(IMG.usps), brochure: 'Industrial_USPS_Brochure.pdf',
    shortDesc: 'Dedicated power backup that protects industrial embedded computers from unexpected interruptions.',
    description: `USPS is a dedicated power-backup solution designed to protect industrial embedded computers and machine-control systems from the effects of unexpected power interruptions.

An unscheduled power failure can cause loss of machine settings, corrupted operating systems, incomplete data, and unexpected downtime. USPS provides backup power for up to one hour, giving the system sufficient time to save critical data and perform a controlled shutdown.

If the main power supply is restored within the backup period, the embedded computer can resume normal operation without requiring a complete shutdown cycle.`,
    features: [
      { title: 'Extended Backup', desc: 'Provides up to one hour of backup power — enough for critical data saving and controlled shutdown.' },
      { title: 'OS Protection', desc: 'Prevents operating system corruption by maintaining stable power during unexpected outages.' },
      { title: 'Power Recovery', desc: 'If main power returns within the backup window, the system resumes normal operation without a full shutdown cycle.' },
      { title: 'Data Protection', desc: 'Ensures unsaved settings and production data are preserved through power interruptions.' },
      { title: 'Automatic Power Backup', desc: 'Switches to battery backup automatically — no operator intervention required.' },
      { title: 'Voltage &amp; Backup Monitoring', desc: 'Integrated display shows real-time voltage and remaining backup time for full visibility.' }
    ],
    specs: [
      { l: 'Product', v: 'USPS' },{ l: 'Application', v: 'Industrial Embedded Computers / All 24VDC devices' },
      { l: 'Operating Voltage', v: '220 VAC' },{ l: 'Output Voltage', v: '24 VDC' },
      { l: 'Backup Time', v: 'Up to 1 Hour*' },{ l: 'Battery', v: '24 V, 7 Ah' },
      { l: 'Display', v: 'Voltage &amp; Backup Time' },{ l: 'Power Cables', v: 'Included' },
      { l: 'Computer Connection Cable', v: 'Included' },{ l: 'Battery Connection Cable', v: 'Included' },
      { l: 'Battery Supply', v: 'Optional / Additional Cost' }
    ],
    applications: ['Loss of unsaved settings prevention','Data corruption prevention','OS corruption prevention','Unexpected shutdown prevention','Machine downtime reduction','Reduced maintenance effort','Production information preservation'],
    applicationsNote: '*Actual backup duration depends on the load connected to the USPS and battery condition.'
  },
  {
    id: 'vfds', name: 'Variable Frequency Drives', category: 'Motor Control',
    tagline: 'Precise Speed. Efficient Power.', subtitle: 'VFDs for Industrial, Commercial & Domestic Applications',
    images: expandImages(IMG.vfd), repair: true,
    shortDesc: 'A wide range of VFDs for every motor application — economical, high quality, and application-specific.',
    description: `TEKNOMEN provides a wide range of Variable Frequency Drives (VFDs) for different motor applications, offering economical and high-quality solutions according to customer requirements.

From standard motor-control applications to challenging industrial environments, we provide application-specific and customized VFD solutions to ensure reliable and efficient operation.`,
    features: [
      { title: 'Industrial Motors', desc: 'Heavy-duty VFDs designed for continuous industrial motor operation and harsh environments.' },
      { title: 'Domestic Applications', desc: 'Compact and economical VFDs for domestic pumps, fans and household motor loads.' },
      { title: 'Pumps, Fans &amp; Blowers', desc: 'Energy-saving drives optimized for variable-torque applications and flow control.' },
      { title: 'Commercial Applications', desc: 'Reliable drives for HVAC, water treatment and commercial facility automation.' },
      { title: 'Textile Machinery', desc: 'Purpose-matched VFDs for spinning, weaving and finishing equipment.' },
      { title: 'Specialized Motor Control', desc: 'Custom-configured drives for unique motor profiles and application constraints.' }
    ],
    specs: [
      { l: 'Product', v: 'Variable Frequency Drives (VFDs)' },
      { l: 'Application', v: 'Industrial · Commercial · Domestic' },
      { l: 'Range', v: 'Multiple performance &amp; economic grades' },
      { l: 'Services', v: 'Selection · Installation · Maintenance · Repair · Spare Parts' }
    ],
    applications: ['Sales &amp; Selection — Application-based VFD selection according to motor and machine requirements','Installation &amp; Commissioning — Professional installation, configuration and commissioning','Maintenance — Technical maintenance and preventive servicing to improve drive reliability','Repair &amp; Troubleshooting — Diagnosis, repair and restoration of faulty VFDs','Spare Parts — VFD spare components available on demand to minimize equipment downtime']
  },
  {
    id: 'pressure-transmitters', name: 'Pressure Transmitters', category: 'Process Control',
    tagline: 'Measure. Monitor. Control.', subtitle: 'Industrial Pressure Transmitters for Monitoring &amp; Process Control',
    images: expandImages(IMG.pressure),
    shortDesc: 'Analog and digital industrial-grade pressure transmitters with customizable configurations.',
    description: `TEKNOMEN offers a wide range of industrial-grade pressure transmitters for pressure measurement, monitoring and process-control applications.

Our range includes analog and digital pressure transmitters, with application-specific configurations and customized solutions available according to customer requirements.`,
    features: [
      { title: 'Industrial Automation', desc: 'Integrates directly into automated control systems for continuous pressure feedback.' },
      { title: 'Pneumatic &amp; Air Systems', desc: 'Accurate measurement for compressed-air networks and pneumatic control loops.' },
      { title: 'Process Control', desc: 'Provides precise pressure data for closed-loop process regulation and safety interlocks.' },
      { title: 'Textile Machinery', desc: 'Monitors suction, compacting air and pneumatic actuators on spinning frames.' },
      { title: 'Suction &amp; Vacuum Systems', desc: 'Detects negative pressure for duct monitoring and low-suction alarms.' },
      { title: 'Machine Monitoring', desc: 'Supplies real-time pressure data to machine-level dashboards for diagnostics.' }
    ],
    specs: [
      { l: 'Product', v: 'Pressure Transmitters' },{ l: 'Type', v: 'Analog &amp; Digital' },
      { l: 'Application', v: 'Industrial · Process Control · Textile' },
      { l: 'Configuration', v: 'Application-specific &amp; Customized' }
    ],
    applications: ['Industrial Automation','Pneumatic &amp; Air Systems','Process Control','Textile Machinery','Suction &amp; Vacuum Systems','Machine Monitoring'],
    applicationsNote: 'Whether you need a standard industrial transmitter or a customized pressure-sensing solution, TEKNOMEN can provide a transmitter configured around your application requirements.'
  },
  {
    id: 'length-batch', name: 'Length &amp; Batch Controllers', category: 'Machine Control',
    tagline: 'Measure. Count. Control.', subtitle: 'Dedicated Production &amp; Batch Monitoring for Industrial Machines',
    images: expandImages(IMG.lengthBatch),
    shortDesc: 'Dedicated controllers that track produced length and completed batches with preset alarms.',
    description: `TEKNOMEN\u2019s Length &amp; Batch Controllers are dedicated machine production monitoring devices designed to track produced length and completed batches while providing preset alarms and automatic actions based on configured values.

The controller allows operators to set specific length and batch parameters, helping improve production monitoring and process control.`,
    features: [
      { title: 'Length Counting', desc: 'Tracks produced length in real time with high accuracy for continuous processes.' },
      { title: 'Preset Values', desc: 'Operators set target length thresholds — controller acts automatically when reached.' },
      { title: 'Automatic Actions', desc: 'Triggers relays, alarms or machine stops when presets are met.' },
      { title: 'Batch Counting', desc: 'Counts completed production batches and maintains running total.' },
      { title: 'Preset Alarms', desc: 'Configurable alerts signal when length or batch targets are approaching or reached.' },
      { title: 'Dedicated Machine Monitoring', desc: 'Purpose-built device focused solely on length and batch accuracy.' }
    ],
    specs: [
      { l: 'Product', v: 'Length &amp; Batch Controllers' },
      { l: 'AC Version', v: '220 VAC' },{ l: 'DC Version', v: '24 VDC' },
      { l: 'Applications', v: 'Industrial machines requiring length measurement, production counting, batch tracking and preset-based control' }
    ],
    applications: ['Length measurement','Production counting','Batch tracking','Preset-based control','Automatic machine stop','Production monitoring']
  },
  {
    id: 'servo-motors', name: 'Servo Motors &amp; Drives', category: 'Motion Control',
    tagline: 'Precision Motion. Reliable Control.', subtitle: 'Servo Motion Solutions, Integration, Troubleshooting &amp; Repair',
    images: expandImages(IMG.servo), repair: true,
    shortDesc: 'Complete servo solutions — from system selection to commissioning, maintenance and repair.',
    description: `TEKNOMEN provides servo motor and drive solutions for industrial motion-control applications, supporting customers from system selection and installation to troubleshooting, maintenance and repair.

Whether you require a new servo system or need to restore an existing machine, our technical team can assist with system evaluation, configuration, commissioning and fault diagnosis.`,
    features: [
      { title: 'New Servo System', desc: 'Complete selection and supply of servo motors, drives and accessories for new installations.' },
      { title: 'Servo Integration', desc: 'Seamless integration of servo systems into existing machine control architectures.' },
      { title: 'Troubleshooting', desc: 'Expert fault diagnosis for unstable or malfunctioning servo motion systems.' },
      { title: 'Preventive Maintenance', desc: 'Scheduled servicing to prevent unplanned downtime and extend servo system life.' },
      { title: 'Commissioning &amp; Setup', desc: 'Professional tuning, parameterization and commissioning for optimal performance.' },
      { title: 'Servo Drive Repair', desc: 'Component-level repair and restoration of faulty servo drives at our facility.' }
    ],
    specs: [
      { l: 'Product', v: 'Servo Motors &amp; Drives' },
      { l: 'Application', v: 'Industrial Motion Control' },
      { l: 'Services', v: 'Selection · Integration · Commissioning · Repair' },
      { l: 'Support', v: 'System evaluation · Configuration · Fault diagnosis' }
    ],
    applications: ['Textile Machinery','Industrial Automation','Packaging Machines','Conveyors &amp; Material Handling','CNC &amp; Precision Machinery','Winding &amp; Unwinding Systems','Pick-and-Place Applications','Specialized Motion-Control Systems']
  }
];

/* ============================================================
   RENDER PRODUCT CARDS
============================================================ */
const grid = document.getElementById('productsGrid');
PRODUCTS.forEach((p, i) => {
  const card = document.createElement('div');
  card.className = 'prod reveal';
  card.dataset.delay = String((i % 3) + 1);
  card.dataset.id = p.id;
  card.innerHTML = `
    <div class="prod-img">
      <span class="prod-badge">${String(i + 1).padStart(2, '0')}</span>
      <img src="${p.images[0]}" alt="${p.name}" loading="lazy">
    </div>
    <div class="prod-body">
      ${p.category ? `<div class="prod-cat">${p.category}</div>` : ''}
      <h3>${p.name}</h3>
      <p>${p.shortDesc}</p>
      <span class="prod-more">More Details <i class="fa-solid fa-arrow-right"></i></span>
    </div>`;
  card.addEventListener('click', () => openProduct(p.id));
  grid.appendChild(card);
});

/* ============================================================
   MODAL LOGIC
============================================================ */
const modal = document.getElementById('productModal');
const modalContent = document.getElementById('modalContent');
let savedScrollY = 0;
let galleryTimer = null;

function buildCTAs(p){
  const name = p.name.replace(/&amp;/g, '&');
  let html = `
    <a href="${waLink('Hi, I would like to request technical consultation for ' + name + '. Could you please share more information?')}"
       target="_blank" rel="noopener" class="btn btn-primary">
      <i class="fa-solid fa-comments"></i><span>Request Technical Consultation</span>
    </a>`;
  if(p.brochure){
    html += `
    <a href="${p.brochure}" target="_blank" rel="noopener noreferrer" class="btn btn-brochure">
        <i class="fa-solid fa-file-arrow-down"></i><span>Download Product Brochure</span>
      </a>`;
  }
  if(p.repair){
    html += `
      <a href="${waLink('Hi, I would like to request repair service for ' + name + '. Please let me know the process.')}"
         target="_blank" rel="noopener" class="btn btn-repair">
        <i class="fa-solid fa-screwdriver-wrench"></i><span>Request Repair Service</span>
      </a>`;
  } else {
    html += `
      <a href="${waLink('Hi, I would like to request a quotation for ' + name + '. Please share pricing and lead time.')}"
         target="_blank" rel="noopener" class="btn btn-ghost">
        <i class="fa-solid fa-file-invoice"></i><span>Request For Quotation</span>
      </a>`;
  }
  return html;
}

function openProduct(id){
  const p = PRODUCTS.find(x => x.id === id);
  if(!p) return;

  modalContent.innerHTML = `
    <button class="modal-close" aria-label="Close"><i class="fa-solid fa-xmark"></i></button>

    <div class="modal-head">
      ${p.category ? `<div class="modal-cat">${p.category}</div>` : ''}
      <h2>${p.name}</h2>
      <div class="modal-tagline">${p.tagline}</div>
      <div class="modal-subtitle">${p.subtitle}</div>
    </div>

    <div class="modal-gallery">
      <div class="gallery-stage">
        ${p.images.map((src, i) => `<img class="gallery-img ${i===0?'active':''}" src="${src}" alt="${p.name} — view ${i+1}" data-idx="${i}">`).join('')}
      </div>
      <div class="gallery-dots">
        ${p.images.map((_, i) => `<button class="gallery-dot ${i===0?'active':''}" data-idx="${i}" aria-label="Image ${i+1}"></button>`).join('')}
      </div>
    </div>

    <div class="modal-body">
      <div class="modal-section">
        ${p.description.split('\n\n').map(par => `<p class="overview-text">${par.trim()}</p>`).join('')}
      </div>

      <div class="modal-section">
        <h3>Key Features</h3>
        <span class="section-sub-line">Click any feature to expand</span>
        <div class="chips">
          ${p.features.map(f => `
            <div class="chip">
              <div class="chip-head">${f.title}<i class="fa-solid fa-chevron-down"></i></div>
              <div class="chip-desc">${f.desc}</div>
            </div>`).join('')}
        </div>
      </div>

      <div class="modal-section">
        <h3>Technical Specifications</h3>
        <div class="spec-table-wrap">
          <table class="spec-table">
            ${p.specs.map(s => `<tr><td>${s.l}</td><td>${s.v}</td></tr>`).join('')}
          </table>
        </div>
      </div>

      <div class="modal-section">
        <h3>Monitoring &amp; Analytics</h3>
        <ul class="list-grid">
          ${p.applications.map(a => `<li><i class="fa-solid fa-circle"></i><span>${a}</span></li>`).join('')}
        </ul>
        ${p.applicationsNote ? `<p class="list-note">${p.applicationsNote}</p>` : ''}
      </div>

      <div class="modal-cta">
        <span class="hint">Interested in <strong>${p.name}</strong>?</span>
        <div class="cta-buttons">${buildCTAs(p)}</div>
      </div>
    </div>
  `;

  /* Gallery */
  const imgs = modalContent.querySelectorAll('.gallery-img');
  const dots = modalContent.querySelectorAll('.gallery-dot');
  let idx = 0;
  function showImage(n){
    idx = (n + imgs.length) % imgs.length;
    imgs.forEach((im, i) => im.classList.toggle('active', i === idx));
    dots.forEach((d, i) => d.classList.toggle('active', i === idx));
  }
  dots.forEach(d => d.addEventListener('click', () => { showImage(+d.dataset.idx); restartGallery(); }));
  function startGallery(){ if(imgs.length > 1) galleryTimer = setInterval(() => showImage(idx + 1), 3800); }
  function restartGallery(){ clearInterval(galleryTimer); startGallery(); }
  if(imgs.length > 1) startGallery();

  /* Chips */
  modalContent.querySelectorAll('.chip').forEach(chip => {
    chip.querySelector('.chip-head').addEventListener('click', () => chip.classList.toggle('open'));
  });

  /* Section reveal */
  const sections = modalContent.querySelectorAll('.modal-section');
  const secObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if(e.isIntersecting){ e.target.classList.add('in'); secObs.unobserve(e.target); }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
  sections.forEach((s, i) => setTimeout(() => secObs.observe(s), 100 + i * 60));

  /* Close */
  modalContent.querySelector('.modal-close').addEventListener('click', closeProduct);

  /* Body lock */
  savedScrollY = window.scrollY;
  document.body.classList.add('modal-open');

  modal.classList.add('open');
  modal.scrollTop = 0;
  modalContent.scrollTop = 0;
}

function closeProduct(){
  clearInterval(galleryTimer);
  modal.classList.remove('open');
  document.body.classList.remove('modal-open');
  window.scrollTo(0, savedScrollY);
}

modal.addEventListener('click', e => { if(e.target === modal) closeProduct(); });
document.addEventListener('keydown', e => { if(e.key === 'Escape' && modal.classList.contains('open')) closeProduct(); });

/* Footer product links */
document.querySelectorAll('[data-open]').forEach(el => {
  el.addEventListener('click', e => {
    e.preventDefault();
    e.stopPropagation();
    const id = el.getAttribute('data-open');
    if(id) openProduct(id);
  });
});

/* ============================================================
   THEME
============================================================ */
(function(){
  const root = document.documentElement;
  const saved = localStorage.getItem('tek-theme');
  const prefersDark = matchMedia('(prefers-color-scheme: dark)').matches;
  root.setAttribute('data-theme', saved || (prefersDark ? 'dark' : 'light'));
  document.getElementById('themeToggle').addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('tek-theme', next);
  });
})();

/* SCROLL PROGRESS */
const progressBar = document.getElementById('progressBar');
function updateProgress(){
  const h = document.documentElement;
  const scrolled = h.scrollTop / (h.scrollHeight - h.clientHeight);
  progressBar.style.width = (scrolled * 100) + '%';
}
window.addEventListener('scroll', updateProgress, { passive: true });
window.addEventListener('resize', updateProgress);
updateProgress();

/* HEADER + MENU + TOP */
const header = document.getElementById('header');
const nav = document.getElementById('nav');
const menuToggle = document.getElementById('menuToggle');
const toTop = document.getElementById('toTop');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 20);
  toTop.classList.toggle('show', window.scrollY > 500);
}, { passive: true });
menuToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
  const i = menuToggle.querySelector('i');
  i.className = nav.classList.contains('open') ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open');
  menuToggle.querySelector('i').className = 'fa-solid fa-bars';
}));
toTop.addEventListener('click', () => scrollTo({ top: 0, behavior: 'smooth' }));

/* REVEAL */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if(e.isIntersecting){ e.target.classList.add('in'); revealObserver.unobserve(e.target); }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* COUNTERS */
function animateCount(el){
  const target = +el.dataset.count;
  const dur = 2000;
  const start = performance.now();
  function step(now){
    const p = Math.min((now - start) / dur, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.floor(eased * target);
    if(p < 1) requestAnimationFrame(step);
    else el.textContent = target;
  }
  requestAnimationFrame(step);
}
const counterObs = new IntersectionObserver((entries) => {
  entries.forEach(e => { if(e.isIntersecting){ animateCount(e.target); counterObs.unobserve(e.target); }});
}, { threshold: 0.5 });
document.querySelectorAll('[data-count]').forEach(el => counterObs.observe(el));

/* HERO IMAGE ROTATION */
(function(){
  const img = document.getElementById('heroMainImg');
  if(!img) return;
  const list = ['SpinGuard Main.png','FIBROTEK Product image (1).png','Spindle monitoring Main.png','Variable Frequency Drives.png','Pressure Transmitter.png'];
  let i = 0;
  setInterval(() => {
    i = (i + 1) % list.length;
    img.classList.add('fade-swap');
    setTimeout(() => {
      img.src = list[i];
      img.onload = () => img.classList.remove('fade-swap');
    }, 380);
  }, 5500);
})();

/* PROCESS FILL */
(function(){
  const fill = document.getElementById('processFill');
  const wrap = document.getElementById('process');
  if(!fill || !wrap) return;
  function update(){
    const rect = wrap.getBoundingClientRect();
    const vh = window.innerHeight;
    const start = vh * 0.85;
    const end = -rect.height + vh * 0.35;
    const total = start - end;
    const passed = start - rect.top;
    const p = Math.max(0, Math.min(1, passed / total));
    fill.style.height = (p * 100) + '%';
  }
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update();
})();

/* FAQ */
document.querySelectorAll('.faq-item').forEach(item => {
  const btn = item.querySelector('.faq-q');
  btn.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if(!isOpen) item.classList.add('open');
  });
});

/* CLIENTS MARQUEE */
(function(){
  const t = document.getElementById('clientsStrip');
  if(t) t.innerHTML += t.innerHTML;
})();

/* TILT */
if(matchMedia('(hover:hover)').matches && !matchMedia('(prefers-reduced-motion: reduce)').matches){
  document.querySelectorAll('.why-card, .prod, .testi, .ind').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = `translateY(-8px) perspective(900px) rotateX(${y * -4}deg) rotateY(${x * 4}deg)`;
    });
    card.addEventListener('mouseleave', () => { card.style.transform = ''; });
  });
}

/* YEAR */
document.getElementById('year').textContent = new Date().getFullYear();