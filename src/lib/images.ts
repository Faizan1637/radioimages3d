/** Professional stock imagery (Unsplash) + local brand/equipment assets */
export const images = {
  hero: "/images/stock/hero-clinic.jpg",
  scannerRoom: "/images/stock/scanner-room.jpg",
  dentalChair: "/images/stock/dental-chair.jpg",
  dentalTools: "/images/stock/dental-tools.jpg",
  dentistCare: "/images/stock/dentist-care.jpg",
  smilePatient: "/images/stock/smile-patient.jpg",
  xrayLight: "/images/stock/xray-light.jpg",
  clinicCorridor: "/images/stock/clinic-corridor.jpg",
  medicalTech: "/images/stock/medical-tech.jpg",
  orthodontics: "/images/stock/orthodontics.jpg",
  dentalTeam: "/images/stock/dental-team.jpg",
  reception: "/images/stock/reception.jpg",
  implantConcept: "/images/stock/implant-concept.jpg",
  cleanClinic: "/images/stock/clean-clinic.jpg",
  digitalHealth: "/images/stock/digital-health.jpg",
  cbctConcept: "/images/stock/cbct-concept.jpg",
  gloveCare: "/images/stock/glove-care.jpg",
  techScreen: "/images/stock/tech-screen.jpg",
  logoBanner: "/images/brand/logo-banner.jpg",
  brochureCover: "/images/brand/brochure-cover.jpg",
  promax: "/images/equipment/promax-classic.jpg",
  extendedVolume: "/images/equipment/extended-volume.jpg",
  featuresChecklist: "/images/equipment/features-checklist.jpg",
} as const;

export const serviceImages: Record<string, string> = {
  "3d-cbct": images.cbctConcept,
  opg: images.xrayLight,
  cephalometric: images.orthodontics,
  "one-shot-ceph": images.dentalChair,
  "endodontic-imaging": images.dentalTools,
  "3d-model-scanning": images.digitalHealth,
  "3d-facial-photography": images.smilePatient,
  "additional-2d-studies": images.clinicCorridor,
  "surgical-guides": images.implantConcept,
};

export const galleryImages = [
  {
    src: images.hero,
    title: "Modern imaging environment",
    alt: "Bright professional dental clinic interior",
  },
  {
    src: images.dentalChair,
    title: "Patient-ready operatory",
    alt: "Contemporary dental treatment chair and equipment",
  },
  {
    src: images.dentistCare,
    title: "Care with clarity",
    alt: "Dental professional providing patient care",
  },
  {
    src: images.medicalTech,
    title: "Precision technology",
    alt: "Digital healthcare technology and diagnostics",
  },
  {
    src: images.orthodontics,
    title: "Orthodontic imaging support",
    alt: "Orthodontic dental care setting",
  },
  {
    src: images.smilePatient,
    title: "Comfort-focused visits",
    alt: "Patient smiling in a dental clinic",
  },
  {
    src: images.cleanClinic,
    title: "Clinical calm",
    alt: "Clean modern medical clinic space",
  },
  {
    src: images.dentalTeam,
    title: "Professional team setting",
    alt: "Dental clinic team in a professional environment",
  },
  {
    src: images.gloveCare,
    title: "Clinical standards",
    alt: "Healthcare professional in clinical gloves",
  },
  {
    src: images.techScreen,
    title: "Digital diagnostics",
    alt: "Medical imaging review on digital screens",
  },
  {
    src: images.promax,
    title: "Planmeca ProMax 3D Classic",
    alt: "Planmeca ProMax 3D Classic dental imaging unit",
  },
  {
    src: images.extendedVolume,
    title: "Extended CBCT volumes",
    alt: "Extended volume CBCT imaging diagram",
  },
];
