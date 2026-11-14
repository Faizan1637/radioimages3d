/** Planmeca ProMax 3D Classic product photo — 1000×1000 square */
export const PROMAX_SIZE = { width: 1000, height: 1000 } as const;

/** Clinic, scan, and software imagery — no generic dentist-exam or dental-unit stock */
export const images = {
  promax: "/images/dental/promax-classic.jpg",
  reception: "/images/clinic/reception.jpg",
  ceph: "/images/clinic/ceph-lateral.jpg",
  opg: "/images/clinic/opg-panoramic.jpg",
  romexisImplant: "/images/clinic/romexis-implant.jpg",
  romexis7: "/images/clinic/romexis-7.jpg",
  romexisMonitor: "/images/clinic/romexis-monitor.jpg",
  digitalPlanning: "/images/clinic/digital-planning.jpg",
  surgicalGuide: "/images/clinic/surgical-guide.jpg",
  dentistCare: "/images/dental/dentist-care.jpg",
  dentistsTablet: "/images/dental/dentists-tablet-xray.jpg",
  operatory: "/images/dental/operatory-chair.jpg",
  xrayMonitor: "/images/dental/dental-xray-monitor.jpg",
  equipmentMonitor: "/images/dental/dental-equipment-monitor.jpg",
  opgScreen: "/images/dental/opg-screen.jpg",
  implantModel: "/images/dental/dental-implant-model.jpg",
} as const;

export const serviceImages: Record<string, string> = {
  "3d-cbct": images.romexisImplant,
  opg: images.opg,
  cephalometric: images.ceph,
  "one-shot-ceph": images.ceph,
  "endodontic-imaging": images.xrayMonitor,
  "3d-model-scanning": images.implantModel,
  "3d-facial-photography": images.digitalPlanning,
  "additional-2d-studies": images.opgScreen,
  "surgical-guides": images.surgicalGuide,
};

export const galleryImages = [
  {
    src: images.reception,
    title: "RadioImages reception",
    alt: "RadioImages 3D reception desk in DHA Lahore",
  },
  {
    src: images.promax,
    title: "Planmeca ProMax 3D Classic",
    alt: "Planmeca ProMax 3D Classic CBCT imaging unit",
  },
  {
    src: images.opg,
    title: "OPG panoramic radiograph",
    alt: "Panoramic dental X-ray (OPG) of the full dentition",
  },
  {
    src: images.ceph,
    title: "Cephalometric radiograph",
    alt: "Lateral cephalometric X-ray with calibration scale",
  },
  {
    src: images.romexisImplant,
    title: "Implant planning in Romexis",
    alt: "3D CBCT implant planning in Planmeca Romexis software",
  },
  {
    src: images.romexisMonitor,
    title: "Romexis 7",
    alt: "Planmeca Romexis 7 imaging software on a clinical monitor",
  },
  {
    src: images.romexis7,
    title: "Romexis 7",
    alt: "Planmeca Romexis 7 imaging software",
  },
  {
    src: images.surgicalGuide,
    title: "Implant surgical guide",
    alt: "Computer guided implant surgical guide illustration",
  },
  {
    src: images.digitalPlanning,
    title: "Digital treatment planning",
    alt: "3D digital dental planning visualization",
  },
  {
    src: images.dentistCare,
    title: "Patient care",
    alt: "Dentist caring for a patient in a dental clinic",
  },
  {
    src: images.dentistsTablet,
    title: "Scan review",
    alt: "Clinicians reviewing a dental X-ray on a tablet",
  },
  {
    src: images.operatory,
    title: "Dental operatory",
    alt: "Modern dental treatment chair and imaging room",
  },
  {
    src: images.xrayMonitor,
    title: "X-ray on screen",
    alt: "Dental X-ray displayed on a clinical monitor",
  },
  {
    src: images.opgScreen,
    title: "OPG on screen",
    alt: "Panoramic dental X-ray reviewed on screen",
  },
  {
    src: images.equipmentMonitor,
    title: "Imaging workstation",
    alt: "Dental imaging equipment with a diagnostic monitor",
  },
  {
    src: images.implantModel,
    title: "Implant study model",
    alt: "Dental implant model used for surgical planning",
  },
];
