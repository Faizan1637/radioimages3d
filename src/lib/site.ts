const displayAddress =
  "Radioimages 3D, 73-6, Sector K Dha Phase 1, Lahore, 54000, Pakistan";
const mapAddress =
  "Radioimages 3D, K, 73-6, Sector K Dha Phase 1, Lahore, 54000, Pakistan";
const mapQuery = encodeURIComponent(mapAddress);

export const siteConfig = {
  name: "RadioImages",
  legalName: "RadioImages 3D Dental Imaging Center",
  tagline: "Dental Imaging Center | 3D CBCT | OPG | CEPH",
  description:
    "Advanced dental imaging in DHA Lahore — 3D CBCT, OPG, cephalometric imaging and computer guided surgical solutions on the Planmeca ProMax 3D Classic.",
  url: "https://radioimages.com",
  address: {
    line1: "73-6, Sector K",
    line2: "DHA Phase 1, Lahore, 54000",
    full: displayAddress,
    street: "73-6, Sector K Dha Phase 1",
    city: "Lahore",
    region: "Punjab",
    postalCode: "54000",
    country: "Pakistan",
  },
  phones: [
    { label: "Primary", number: "0325-9888999", href: "tel:+923259888999" },
    { label: "Secondary", number: "0315-5551505", href: "tel:+923155551505" },
  ],
  whatsapp: {
    number: "923259888999",
    display: "0325-9888999",
  },
  hours: {
    weekdays: "10:00 AM – 10:00 PM",
    friday: "10:00 AM – 10:00 PM",
    sunday: "Closed",
    note: "Open Monday to Saturday, 10 AM to 10 PM. Sunday off.",
    openNowDays: [1, 2, 3, 4, 5, 6] as number[],
    openHour: 10,
    closeHour: 22,
  },
  maps: {
    query: mapAddress,
    embedUrl: `https://www.google.com/maps?q=${mapQuery}&output=embed`,
    directionsUrl: `https://www.google.com/maps/dir/?api=1&destination=${mapQuery}`,
    searchUrl: `https://www.google.com/maps/search/?api=1&query=${mapQuery}`,
  },
  delivery: ["USB", "Printed card / film", "DVD", "Email / Cloud"],
} as const;

export function buildWhatsAppUrl(message?: string) {
  const text =
    message ??
    "Hello RadioImages, I would like to book an appointment. Please share the available slots.";
  return `https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(text)}`;
}

export function bookScanMessage(scanType: string) {
  return `Hello RadioImages, I would like to book an appointment for ${scanType}. Please share the available slots.`;
}
