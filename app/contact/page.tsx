import { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us & Book an Appointment",
  description: "Contact OrthoPedic Clinic for orthopedic care. Book appointments online, find our locations, view hours, and get answers to frequently asked questions. Fellowship-trained specialists ready to help.",
  openGraph: {
    title: "Contact Us & Book an Appointment - OrthoPedic Clinic",
    description: "Schedule your orthopedic appointment online. Multiple locations, extended hours, and fellowship-trained specialists.",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative hero-gradient overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28" aria-labelledby="contact-hero-heading">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--healthcare-trust-light)_0%,_transparent_70%)] opacity-50" aria-hidden="true" />
        <div className="container-custom relative">
          <div className="max-w-4xl mx-auto text-center">
            <span className="section-badge animate-fade-in-up">Contact & Appointments</span>
            <h1 id="contact-hero-heading" className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-healthcare-text mt-4 mb-6 animate-fade-in-up delay-100 text-balance">
              Get In Touch
              <br />
              <span className="gradient-text">With Our Team</span>
            </h1>
            <p className="text-lg sm:text-xl text-healthcare-muted max-w-3xl mx-auto animate-fade-in-up delay-200 leading-relaxed">
              Schedule an appointment, find a location, or get answers to your questions.
              Our fellowship-trained specialists are ready to provide expert orthopedic care.
            </p>
          </div>
        </div>
      </section>

      <ContactForm />
    </>
  );
}