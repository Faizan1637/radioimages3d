export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  summary: string;
  whatItIs: string;
  whenRecommended: string[];
  howItWorks: string;
  preparation: string[];
  duration: string;
  delivery: string;
  typicalUses: string[];
  seoTitle: string;
  seoDescription: string;
};

export const services: Service[] = [
  {
    slug: "3d-cbct",
    title: "3D CBCT Dental Imaging",
    shortTitle: "3D CBCT",
    summary:
      "High-resolution cone beam CT for precise 3D views of the jaws, teeth, sinuses and surrounding bone — essential for implants, surgery and complex diagnosis.",
    whatItIs:
      "Cone Beam Computed Tomography (CBCT) creates a three-dimensional digital model of the dental and maxillofacial region. Unlike a flat X-ray, you and your dentist can rotate, slice and measure anatomy with clinical accuracy.",
    whenRecommended: [
      "Dental implant planning and nerve mapping",
      "Impacted wisdom teeth and complex extractions",
      "Cysts, tumors and fracture assessment",
      "TMJ, zygoma and temporal bone studies",
      "Orthognathic surgery and orthodontic planning",
    ],
    howItWorks:
      "You stand or sit in the Planmeca ProMax 3D Classic while the arm rotates around your head. The scan is quick, painless and typically completed in under a minute of exposure time. Images are reconstructed instantly in Planmeca Romexis software.",
    preparation: [
      "Remove jewelry, glasses, hearing aids and metal hairpins",
      "Inform staff if you are or may be pregnant",
      "Bring your referral slip and any previous scans",
    ],
    duration: "Visit usually 15–30 minutes including setup and image review",
    delivery:
      "Images provided on USB or printed card; DVD, film and cloud/email options available on request.",
    typicalUses: [
      "Jaw / Zygoma",
      "Maxilla / Mandible",
      "TMJ / Temporal Bone",
      "Implants",
      "Impactions",
      "Endodontic evaluation",
      "Cyst / Tumor",
      "Fractures",
      "Nerve mapping",
      "Sialolithiasis",
      "Orthodontics",
      "Orthognathic surgery",
    ],
    seoTitle: "3D Dental CBCT Scan Lahore | RadioImages DHA",
    seoDescription:
      "Book a 3D CBCT dental scan in DHA Lahore. Planmeca ProMax 3D Classic imaging for implants, impactions, TMJ and surgical planning.",
  },
  {
    slug: "opg",
    title: "2D Panoramic Imaging (OPG)",
    shortTitle: "OPG",
    summary:
      "A full-mouth panoramic X-ray that gives your dentist a clear overview of teeth, jaws and surrounding structures in a single image.",
    whatItIs:
      "An Orthopantomogram (OPG) is a wide 2D X-ray that captures the entire upper and lower jaw in one view — ideal for screening, wisdom teeth assessment and general dental planning.",
    whenRecommended: [
      "General dental check-ups and screening",
      "Wisdom teeth evaluation",
      "Overview before orthodontic or surgical treatment",
      "Detection of cysts, impacted teeth or bone changes",
    ],
    howItWorks:
      "You stand still while the panoramic unit rotates around your head. The scan takes only a few seconds and produces a single high-quality panoramic image.",
    preparation: [
      "Remove earrings, necklaces and glasses",
      "Inform staff about pregnancy",
      "Wear comfortable clothing without metal near the neck",
    ],
    duration: "Usually under 10–15 minutes at the center",
    delivery: "USB, printed card, DVD, print or email — as preferred.",
    typicalUses: ["Full-mouth overview", "Wisdom teeth", "General screening"],
    seoTitle: "Panoramic Dental X-ray (OPG) Lahore | RadioImages",
    seoDescription:
      "Fast OPG panoramic dental X-rays in DHA Lahore. Clear full-mouth imaging with same-day USB or printed delivery.",
  },
  {
    slug: "cephalometric",
    title: "Cephalometric Imaging & Tracing",
    shortTitle: "CEPH",
    summary:
      "Lateral, PA and AP cephalometric radiographs for orthodontic diagnosis, growth assessment and treatment planning — with tracing when requested.",
    whatItIs:
      "Cephalometric (CEPH) imaging captures standardized side and front views of the skull and jaws. Orthodontists use these measurements to plan braces, aligners and surgical orthodontics.",
    whenRecommended: [
      "Orthodontic diagnosis and treatment planning",
      "Growth and development assessment",
      "Pre- and post-treatment records",
      "Surgical orthodontic cases",
    ],
    howItWorks:
      "Your head is carefully positioned in a cephalostat for reproducible measurements. We offer scanning cephalometric imaging and, where indicated, one-shot capture for speed and comfort.",
    preparation: [
      "Remove earrings, glasses and metal hair accessories",
      "Follow positioning guidance from our team",
      "Bring orthodontist referral notes if available",
    ],
    duration: "Typically 15–20 minutes including positioning",
    delivery: "Digital files on USB or printed card; tracing supplied when requested.",
    typicalUses: [
      "CEPH Lateral",
      "CEPH Tracing",
      "PA (CEPH)",
      "AP (CEPH)",
      "PA (Mandible)",
    ],
    seoTitle: "Cephalometric Imaging Lahore | RadioImages DHA",
    seoDescription:
      "Cephalometric X-rays and tracing in DHA Lahore for orthodontic planning — lateral, PA and AP views on Planmeca technology.",
  },
  {
    slug: "endodontic-imaging",
    title: "Endodontic Imaging",
    shortTitle: "Endodontic",
    summary:
      "Focused high-resolution imaging for root canal evaluation, complex anatomy and periapical lesions — supporting precise endodontic care.",
    whatItIs:
      "Endodontic mode on the Planmeca ProMax 3D Classic delivers finer detail in a smaller field of view, helping specialists see canals, fractures and lesions that 2D images may miss.",
    whenRecommended: [
      "Root canal treatment planning",
      "Periapical lesion assessment",
      "Suspected root fractures",
      "Retreatment and complex canal anatomy",
    ],
    howItWorks:
      "A targeted CBCT volume is acquired over the region of interest. Your endodontist receives detailed slices and 3D reconstructions for confident decision-making.",
    preparation: [
      "Bring previous periapical films if available",
      "Remove jewelry and metal objects",
      "Share any relevant dental history with staff",
    ],
    duration: "Usually 15–25 minutes",
    delivery: "High-resolution digital files on USB or printed media.",
    typicalUses: ["Endodontic evaluation", "Periapical lesion", "Root anatomy"],
    seoTitle: "Endodontic CBCT Imaging Lahore | RadioImages",
    seoDescription:
      "Specialist endodontic CBCT imaging in DHA Lahore for root canal evaluation and periapical assessment.",
  },
  {
    slug: "3d-model-scanning",
    title: "3D Dental Model Scanning",
    shortTitle: "3D Models",
    summary:
      "Digital study models from physical impressions or casts — ready for orthodontic and prosthetic planning without bulky plaster storage.",
    whatItIs:
      "3D model scanning converts dental casts into accurate digital models that can be measured, shared and archived electronically.",
    whenRecommended: [
      "Orthodontic treatment planning",
      "Prosthetic and restorative workflows",
      "Digital archiving of study models",
    ],
    howItWorks:
      "Your plaster or stone model is scanned on the Planmeca system. The digital file is cleaned and exported for your clinician’s software.",
    preparation: [
      "Ensure models are clean and undamaged",
      "Label models clearly with patient details (via referring clinic)",
    ],
    duration: "Typically a short turnaround once models are received",
    delivery: "Digital files on USB or cloud/email transfer.",
    typicalUses: ["Orthodontic planning", "Prosthetic planning", "Digital archives"],
    seoTitle: "3D Dental Model Scanning Lahore | RadioImages",
    seoDescription:
      "3D dental model scanning in DHA Lahore for orthodontic and prosthetic digital workflows.",
  },
  {
    slug: "3d-facial-photography",
    title: "3D Facial Photography",
    shortTitle: "3D Face Photo",
    summary:
      "Three-dimensional facial imaging for orthodontic and surgical planning — soft-tissue context that complements skeletal CBCT data.",
    whatItIs:
      "3D face photo captures the outer facial contour so clinicians can relate soft tissue to underlying bone and teeth during treatment planning.",
    whenRecommended: [
      "Orthodontic facial analysis",
      "Orthognathic surgical planning",
      "Before-and-after soft-tissue records",
    ],
    howItWorks:
      "A quick photographic capture creates a 3D facial surface that can be viewed alongside your dental imaging in planning software.",
    preparation: [
      "Come with a clean face (minimal makeup preferred)",
      "Remove glasses and bulky earrings",
      "Tie back long hair if it covers the face",
    ],
    duration: "Usually a few minutes of capture time",
    delivery: "Digital 3D files provided with your imaging package.",
    typicalUses: ["Facial analysis", "Surgical planning", "Orthodontic records"],
    seoTitle: "3D Facial Photography Lahore | RadioImages",
    seoDescription:
      "3D facial photography for orthodontic and surgical planning at RadioImages DHA Lahore.",
  },
  {
    slug: "additional-2d-studies",
    title: "Additional 2D Studies",
    shortTitle: "2D Studies",
    summary:
      "Targeted 2D imaging including sinuses, TMJ, PNS and hand & wrist views for growth assessment and specialised diagnostic needs.",
    whatItIs:
      "Beyond standard OPG and CEPH, we provide focused 2D projections requested on referral — matching the studies on our clinical referral forms.",
    whenRecommended: [
      "Sinus evaluation",
      "TMJ screening views",
      "PNS (post-nasal space) assessment",
      "Hand & wrist for skeletal growth assessment",
    ],
    howItWorks:
      "Each study uses the appropriate projection and positioning. Images are checked for diagnostic quality before release.",
    preparation: [
      "Follow study-specific positioning instructions",
      "Remove relevant metal objects",
      "Bring the completed referral form",
    ],
    duration: "Varies by study; most completed in a single short visit",
    delivery: "USB, printed card, DVD, print or email.",
    typicalUses: ["Sinuses", "TMJ", "PNS", "Hand & Wrist"],
    seoTitle: "Dental 2D Studies Lahore | Sinus TMJ PNS | RadioImages",
    seoDescription:
      "Additional 2D dental radiology studies in DHA Lahore — sinuses, TMJ, PNS and hand & wrist imaging.",
  },
  {
    slug: "surgical-guides",
    title: "Computer Guided Surgical Solutions",
    shortTitle: "Surgical Guides",
    summary:
      "3D stereolithography and implant surgical guides that translate CBCT planning into precise, computer-guided surgery.",
    whatItIs:
      "Using your 3D CBCT data, we support computer-guided implant workflows — including stereolithography models and implant surgical guides designed for predictable placement.",
    whenRecommended: [
      "Dental implant cases requiring guided surgery",
      "Complex anatomical situations",
      "Clinics seeking digital surgical planning support",
    ],
    howItWorks:
      "After CBCT acquisition and planning inputs from your dentist, a guide or stereolithographic model is produced for the chosen implant system. Delivery format is confirmed with the referring clinic.",
    preparation: [
      "Complete implant planning consultation with your dentist",
      "Provide implant system details on the referral",
      "Bring existing imaging if already acquired elsewhere",
    ],
    duration: "Depends on case complexity; timelines confirmed at booking",
    delivery: "Physical guide/model with supporting digital files as agreed.",
    typicalUses: [
      "Implant surgical guide",
      "3D stereolithography",
      "Computer-guided implant placement",
    ],
    seoTitle: "Implant Surgical Guide Lahore | RadioImages",
    seoDescription:
      "Computer guided surgical solutions and implant surgical guides in DHA Lahore, backed by Planmeca 3D CBCT.",
  },
  {
    slug: "one-shot-ceph",
    title: "One-Shot Cephalometric Imaging",
    shortTitle: "One-Shot CEPH",
    summary:
      "Rapid cephalometric capture that reduces motion and keeps appointments short — ideal for busy orthodontic workflows and younger patients.",
    whatItIs:
      "One-shot cephalometric imaging acquires the full cephalometric view in a single exposure, minimizing movement artefact and chair time compared with slower scanning techniques.",
    whenRecommended: [
      "Orthodontic records needing fast turnaround",
      "Patients who find longer scans difficult",
      "High-volume clinic referral days",
    ],
    howItWorks:
      "After precise head positioning, a single exposure captures the cephalometric image. Files are processed in Romexis and prepared for delivery.",
    preparation: [
      "Remove metal objects from the head and neck area",
      "Inform staff of pregnancy",
    ],
    duration: "Often completed within a short clinic visit",
    delivery: "USB, printed card or digital transfer to the referring clinic.",
    typicalUses: ["Fast cephalometric capture", "Orthodontic records"],
    seoTitle: "One-Shot Cephalometric Imaging Lahore | RadioImages",
    seoDescription:
      "One-shot cephalometric imaging in DHA Lahore for fast, clear orthodontic records with digital delivery.",
  }
];

export const techFeatures = [
  {
    id: "cbct",
    title: "Advanced 3D CBCT",
    what: "Cone beam CT volumes for true 3D diagnosis of teeth, bone and airways.",
    why: "Your dentist sees anatomy from every angle — safer implant and surgical decisions.",
  },
  {
    id: "extended",
    title: "Extended Volume Option",
    what: "Increases imaging diameter from Ø8 × 8 cm to Ø11 × 8 cm for a larger diagnostic field.",
    why: "More of the jaw and wisdom-tooth regions in one scan, without increasing patient dose.",
  },
  {
    id: "calm",
    title: "Planmeca CALM®",
    what: "Movement artefact correction that helps recover usable images if a patient moves slightly.",
    why: "Fewer retakes — especially helpful for children and anxious patients.",
  },
  {
    id: "uld",
    title: "Planmeca Ultra Low Dose™",
    what: "Imaging protocols designed to reduce radiation while preserving diagnostic quality.",
    why: "Peace of mind for patients who need detailed scans with a careful dose approach.",
  },
  {
    id: "endo",
    title: "Endodontic Mode",
    what: "High-resolution small-field imaging tuned for root canal diagnosis.",
    why: "Clearer canals, lesions and fractures for specialist endodontic care.",
  },
  {
    id: "programs",
    title: "3D Dental Programs",
    what: "Dedicated scan programs for common dental indications.",
    why: "The right volume and resolution for each clinical question.",
  },
  {
    id: "face",
    title: "3D Face Photo",
    what: "Soft-tissue facial capture aligned with dental imaging workflows.",
    why: "Better facial analysis for orthodontics and surgical planning.",
  },
  {
    id: "models",
    title: "3D Model Scanning",
    what: "Digitises plaster models into shareable 3D files.",
    why: "Modern digital records without bulky model storage.",
  },
  {
    id: "panoramic",
    title: "2D Panoramic Imaging",
    what: "Full-arch OPG imaging on the same advanced platform.",
    why: "Convenient screening and overview scans in one center.",
  },
  {
    id: "ceph",
    title: "Cephalometric Imaging",
    what: "Scanning and one-shot cephalometric options for orthodontics.",
    why: "Accurate skeletal measurements with flexible capture modes.",
  },
  {
    id: "romexis",
    title: "Planmeca Romexis® Software",
    what: "Professional imaging software for viewing, measuring and sharing studies.",
    why: "Referring dentists receive clear, usable digital datasets.",
  },
] as const;

export const volumeSizes = [
  "Ø8 × 8 cm",
  "Ø8 × 5 cm",
  "Ø5 × 8 cm",
  "Ø5 × 5 cm",
  "Ø11 × 8 cm (extended)",
  "Ø11 × 5 cm (extended)",
  "2× Ø8 × 8 cm",
  "3× Ø8 × 8 cm",
];

export const whyChoose = [
  {
    title: "Hospital-grade technology",
    body: "Planmeca ProMax 3D Classic with Ultra Low Dose, CALM and extended volume options.",
  },
  {
    title: "Specialist imaging focus",
    body: "Dedicated dental radiology center — CBCT, OPG, CEPH and guided surgery support under one roof.",
  },
  {
    title: "Fast digital delivery",
    body: "Take your scans home on USB or printed card. DVD, film, email and cloud options available.",
  },
  {
    title: "Easy DHA location",
    body: "73/6 K Block, Phase 1, Ghazi Road — open 10 AM to 10 PM, Sunday off. One-tap WhatsApp booking.",
  },
];

export const howItWorks = [
  {
    step: 1,
    title: "Message us on WhatsApp",
    body: "Tap Book Appointment. Tell us the scan type from your referral.",
  },
  {
    step: 2,
    title: "Confirm your slot",
    body: "Our team shares available times and confirms your visit.",
  },
  {
    step: 3,
    title: "Visit our center",
    body: "Bring your referral slip and previous scans. We’re open 10 AM–10 PM.",
  },
  {
    step: 4,
    title: "Receive your images",
    body: "Collect scans on USB or printed card before you leave — or arrange digital delivery.",
  },
];

export const faqs = [
  {
    question: "What is the difference between OPG and CBCT?",
    answer:
      "An OPG is a single 2D panoramic X-ray of the full mouth. CBCT creates a 3D volume so your dentist can examine bone, teeth and nerves from any angle — essential for implants, complex surgery and detailed diagnosis.",
  },
  {
    question: "Do I need a referral?",
    answer:
      "Most scans are performed on referral from your dentist or specialist. Bring your referral slip so we capture the exact study requested. Contact us on WhatsApp if you are unsure.",
  },
  {
    question: "How long does a scan take?",
    answer:
      "Exposure itself is usually seconds. Plan for about 15–30 minutes at the center for registration, positioning, scanning and image checks, depending on the study.",
  },
  {
    question: "How do I get my images?",
    answer:
      "We commonly provide images on USB or a printed card for you to take to your dentist. DVD, film, email and cloud delivery are also available — tell us your preference when you book.",
  },
  {
    question: "Is CBCT radiation safe?",
    answer:
      "CBCT uses ionising radiation at doses carefully controlled for dental diagnosis. Our Planmeca system includes Ultra Low Dose protocols. Always inform staff if you are pregnant. Your referring clinician decides when imaging is clinically justified.",
  },
  {
    question: "How do I book an appointment?",
    answer:
      "There is no online form. Tap Book on WhatsApp anywhere on this site. Our team will confirm a time slot directly with you.",
  },
  {
    question: "Where are you located?",
    answer:
      "RadioImages is at 73/6 K Block, Phase 1, Ghazi Road, DHA Lahore. Use Get Directions on this site for turn-by-turn navigation to the building.",
  },
  {
    question: "What are your opening hours?",
    answer:
      "We are open Monday to Saturday from 10:00 AM to 10:00 PM. Closed on Sunday.",
  },
  {
    question: "What should I bring?",
    answer:
      "Bring your referral form, previous relevant scans if you have them, and a valid ID. Remove jewelry before the scan when asked.",
  },
  {
    question: "Do you image children for orthodontics?",
    answer:
      "Yes. We routinely perform OPG, cephalometric and selected CBCT studies for orthodontic patients. Our team helps with positioning and comfort; parents are welcome to accompany children in the waiting area.",
  },
  {
    question: "What technology do you use?",
    answer:
      "We image on the Planmeca ProMax 3D Classic with Planmeca Romexis software — including extended volumes, CALM movement correction and Ultra Low Dose options.",
  },
  {
    question: "Can referring dentists send patients easily?",
    answer:
      "Yes. Share our WhatsApp number or website. Patients book by message; we return clear digital datasets and physical media as preferred by your clinic.",
  },
];

export const patientPrep = [
  "Bring your dentist’s referral slip and any previous X-rays or CBCT data.",
  "Remove eyeglasses, earrings, necklaces, piercings, hearing aids and metal hairpins before scanning.",
  "Tell our team if you are pregnant or think you might be.",
  "Wear comfortable clothing; avoid clothing with metal near the head and neck when possible.",
  "Arrive a few minutes early so we can register you and explain the process calmly.",
];

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/technology", label: "Technology" },
  { href: "/services", label: "Services" },
  { href: "/patient-info", label: "Patient Info" },
  { href: "/gallery", label: "Gallery" },
  { href: "/faqs", label: "FAQs" },
  { href: "/contact", label: "Contact" },
];
