import { faqs, services } from "@/lib/content";
import { siteConfig } from "@/lib/site";

function JsonLdScript({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": ["Dentist", "MedicalBusiness", "LocalBusiness"],
    "@id": `${siteConfig.url}/#business`,
    name: siteConfig.legalName,
    alternateName: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    image: `${siteConfig.url}/images/dental/promax-classic.jpg`,
    logo: `${siteConfig.url}/images/dental/promax-classic.jpg`,
    telephone: siteConfig.phones.map((p) => p.href.replace("tel:", "")),
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: `${siteConfig.address.line1}, ${siteConfig.address.line2}`,
      addressLocality: "Lahore",
      addressRegion: "Punjab",
      postalCode: "54792",
      addressCountry: "PK",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 31.4697,
      longitude: 74.4073,
    },
    hasMap: siteConfig.maps.searchUrl,
    areaServed: [
      { "@type": "City", name: "Lahore" },
      { "@type": "AdministrativeArea", name: "DHA Lahore" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "10:00",
        closes: "22:00",
      },
    ],
    medicalSpecialty: "Dentistry",
    availableService: services.slice(0, 6).map((service) => ({
      "@type": "MedicalProcedure",
      name: service.title,
      url: `${siteConfig.url}/services/${service.slug}`,
      description: service.summary,
    })),
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+923259888999",
        contactType: "customer service",
        areaServed: "PK",
        availableLanguage: ["English", "Urdu"],
      },
    ],
  };

  return <JsonLdScript data={data} />;
}

export function WebsiteJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.legalName,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: { "@id": `${siteConfig.url}/#business` },
    inLanguage: "en-PK",
  };

  return <JsonLdScript data={data} />;
}

export function FaqJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return <JsonLdScript data={data} />;
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; path: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path === "/" ? "" : item.path}`,
    })),
  };

  return <JsonLdScript data={data} />;
}

export function ServiceJsonLd({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name,
    description,
    url: `${siteConfig.url}${path}`,
    procedureType: "http://schema.org/DiagnosticProcedure",
    howPerformed: "Dental imaging at RadioImages DHA Lahore using Planmeca ProMax 3D Classic",
    preparation: "Bring referral slip; remove metal objects near the head and neck",
    status: "https://schema.org/EventScheduled",
    provider: { "@id": `${siteConfig.url}/#business` },
  };

  return <JsonLdScript data={data} />;
}
