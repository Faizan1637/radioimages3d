import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for the RadioImages website.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy policy"
        description="This website is designed not to collect or store patient medical records through online forms."
      />
      <section className="mx-auto max-w-3xl px-4 py-16 text-slate leading-relaxed sm:px-6 lg:px-8">
        <div className="space-y-5 rounded-[1.5rem] bg-white p-8 ring-1 ring-ink/5">
          <p>
            RadioImages operates this website to provide public information about services,
            technology and location. Appointment requests are handled through WhatsApp or phone, not
            through a website booking database.
          </p>
          <p>
            If analytics tools are enabled in future, a cookie notice will explain what is measured.
            Contact details you share on WhatsApp or by phone are used only to schedule visits and
            respond to enquiries.
          </p>
          <p>
            For privacy questions, contact the center using the phone numbers or WhatsApp link on
            the Contact page.
          </p>
        </div>
      </section>
    </>
  );
}
