/** Planmeca ProMax 3D Classic product photo — 1000×1000 square */
export const PROMAX_SIZE = { width: 1000, height: 1000 } as const;

/** Dental-only imagery: CBCT / OPG / CEPH, Planmeca ProMax, dentist clinic */
export const images = {
  hero: "/images/dental/clinic-interior.jpg",
  promax: "/images/dental/promax-classic.jpg",
  opgPatient: "/images/dental/opg-patient.jpg",
  opgScreen: "/images/dental/opg-screen.jpg",
  dentalXrayMonitor: "/images/dental/dental-xray-monitor.jpg",
  dentistXrayReview: "/images/dental/dentist-xray-review.jpg",
  dentistsTabletXray: "/images/dental/dentists-tablet-xray.jpg",
  dentalEquipmentMonitor: "/images/dental/dental-equipment-monitor.jpg",
  dentistPatient: "/images/dental/dentist-patient-clinic.jpg",
  dentistCare: "/images/dental/dentist-care.jpg",
  dentistToolsPatient: "/images/dental/dentist-tools-patient.jpg",
  dentalTreatment: "/images/dental/dental-treatment.jpg",
  operatoryChair: "/images/dental/operatory-chair.jpg",
  dentalClinicChair: "/images/dental/dental-clinic-chair.jpg",
  orthoBraces: "/images/dental/ortho-braces.jpg",
  cephOrtho: "/images/dental/ceph-ortho.jpg",
  dentalTeam: "/images/dental/dental-team.jpg",
  patientSmile: "/images/dental/patient-smile.jpg",
  teethModel: "/images/dental/teeth-model.jpg",
  dentalInstruments: "/images/dental/dental-instruments.jpg",
  dentalImplantModel: "/images/dental/dental-implant-model.jpg",
  dentistExam: "/images/dental/dentist-exam.jpg",
} as const;

/** Service pages mapped to CBCT / OPG / CEPH / dentist imaging themes */
export const serviceImages: Record<string, string> = {
  "3d-cbct": images.promax,
  opg: images.opgPatient,
  cephalometric: images.cephOrtho,
  "one-shot-ceph": images.orthoBraces,
  "endodontic-imaging": images.dentalXrayMonitor,
  "3d-model-scanning": images.teethModel,
  "3d-facial-photography": images.patientSmile,
  "additional-2d-studies": images.opgScreen,
  "surgical-guides": images.dentalImplantModel,
};

export const galleryImages = [
  {
    src: images.promax,
    title: "Planmeca ProMax 3D Classic",
    alt: "Planmeca ProMax 3D Classic CBCT imaging unit",
  },
  {
    src: images.opgPatient,
    title: "OPG panoramic imaging",
    alt: "Patient positioned for panoramic dental X-ray (OPG)",
  },
  {
    src: images.opgScreen,
    title: "Dental X-ray on screen",
    alt: "Panoramic dental X-ray displayed for diagnosis",
  },
  {
    src: images.dentalXrayMonitor,
    title: "CBCT / X-ray review",
    alt: "Dental X-ray imaging on a clinical monitor",
  },
  {
    src: images.dentistXrayReview,
    title: "Dentist reviewing scans",
    alt: "Dentist reviewing dental imaging with a patient",
  },
  {
    src: images.dentistsTabletXray,
    title: "Collaborative diagnosis",
    alt: "Dentists reviewing a dental X-ray on a tablet",
  },
  {
    src: images.operatoryChair,
    title: "Dental operatory",
    alt: "Modern dental treatment chair and clinic equipment",
  },
  {
    src: images.dentistCare,
    title: "Dentist patient care",
    alt: "Dentist providing care in a dental clinic",
  },
  {
    src: images.orthoBraces,
    title: "Orthodontic imaging support",
    alt: "Orthodontic dental care for CEPH and planning scans",
  },
  {
    src: images.dentalImplantModel,
    title: "Implant planning",
    alt: "Dental implant model for guided surgery planning",
  },
  {
    src: images.teethModel,
    title: "3D dental models",
    alt: "Dental study model used in digital planning",
  },
  {
    src: images.dentalTeam,
    title: "Dental imaging team setting",
    alt: "Professional dental clinic team environment",
  },
];
