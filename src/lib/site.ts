export const siteConfig = {
  name: "RadioImages",
  legalName: "RadioImages 3D Dental Imaging Center",
  tagline: "Dental Imaging Center | 3D CBCT | OPG | CEPH",
  description:
    "Advanced dental imaging in DHA Lahore — 3D CBCT, OPG, cephalometric imaging and computer guided surgical solutions on the Planmeca ProMax 3D Classic.",
  url: "https://radioimages.com",
  address: {
    line1: "73/6 K Block, Phase 1",
    line2: "Ghazi Road, DHA Lahore",
    full: "73/6 K Block, Phase 1, Ghazi Road, DHA Lahore",
    city: "Lahore",
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
    embedUrl:
      "https://www.google.com/maps?q=73/6+K+Block,+Phase+1,+Ghazi+Road,+DHA+Lahore&output=embed",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=73%2F6%20K%20Block%2C%20Phase%201%2C%20Ghazi%20Road%2C%20DHA%20Lahore",
    searchUrl:
      "https://www.google.com/maps/search/?api=1&query=73%2F6%20K%20Block%2C%20Phase%201%2C%20Ghazi%20Road%2C%20DHA%20Lahore",
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
