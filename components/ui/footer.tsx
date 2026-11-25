"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Share,
  ExternalLink,
  MessageSquareShare,
  Copy,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

const footerLinks = {
  quickLinks: [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Physicians", href: "/physicians" },
    { name: "Specialties & Services", href: "/specialties" },
    { name: "Patient Resources", href: "/patient-resources" },
    { name: "Locations", href: "/locations" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ],
  services: [
    { name: "Joint Replacement", href: "/specialties/joint-replacement" },
    { name: "Sports Medicine", href: "/specialties/sports-medicine" },
    { name: "Spine Care", href: "/specialties/spine-care" },
    { name: "Hand & Wrist", href: "/specialties/hand-wrist" },
    { name: "Foot & Ankle", href: "/specialties/foot-ankle" },
    { name: "Pediatric Orthopedics", href: "/specialties/pediatric" },
    { name: "Trauma & Fracture Care", href: "/specialties/trauma" },
    { name: "Physical Therapy", href: "/specialties/physical-therapy" },
  ],
  patientResources: [
    { name: "Insurance & Billing", href: "/patient-resources/insurance" },
    { name: "Patient Forms", href: "/patient-resources/forms" },
    { name: "Pre/Post Op Instructions", href: "/patient-resources/instructions" },
    { name: "Patient Portal", href: "/patient-resources/portal" },
    { name: "FAQs", href: "/patient-resources/faqs" },
    { name: "Testimonials", href: "/patient-resources/testimonials" },
    { name: "Education Library", href: "/patient-resources/education" },
    { name: "Payment Options", href: "/patient-resources/payment" },
  ],
  company: [
    { name: "Careers", href: "/careers" },
    { name: "Press & Media", href: "/press" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Accessibility", href: "/accessibility" },
    { name: "HIPAA Notice", href: "/hipaa" },
  ],
};

const socialLinks = [
  { name: "LinkedIn", href: "https://linkedin.com", icon: ExternalLink },
  { name: "Twitter", href: "https://twitter.com", icon: Share },
  { name: "Facebook", href: "https://facebook.com", icon: Share },
  { name: "Instagram", href: "https://instagram.com", icon: Share },
];

export function Footer() {
  const [year, setYear] = useState(2024);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-healthcare-bg border-t border-border" role="contentinfo">
      <div className="container-custom section-py">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="flex items-center gap-2 text-healthcare-trust font-bold text-xl tracking-tight mb-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-lg"
              aria-label="AurTho Clinic Home"
            >
              <svg
                className="h-8 w-8"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 3v8l2 2L12 3ZM12 9v8l4-4-4-4ZM6 9l6-3 3 6-6 3Z" />
              </svg>
              <span>AurTho Clinic</span>
            </Link>
            <p className="text-healthcare-muted text-sm leading-relaxed mb-6 max-w-xs">
              Restoring mobility and quality of life through expert orthopedic care.
              Board-certified surgeons. Compassionate treatment. Exceptional outcomes.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="p-2 rounded-xl bg-healthcare-surface border border-border text-healthcare-muted hover:text-healthcare-trust hover:border-healthcare-trust hover:bg-healthcare-trust-light transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  <social.icon className="h-5 w-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-label="Quick links">
            <h3 className="font-semibold text-healthcare-text mb-4">Quick Links</h3>
            <ul className="space-y-3" role="list">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-healthcare-muted hover:text-healthcare-trust transition-colors duration-200 flex items-center gap-2 group"
                  >
                    {link.name}
                    <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <nav aria-label="Services">
            <h3 className="font-semibold text-healthcare-text mb-4">Specialties</h3>
            <ul className="space-y-3" role="list">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-healthcare-muted hover:text-healthcare-trust transition-colors duration-200 flex items-center gap-2 group"
                  >
                    {link.name}
                    <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Patient Resources */}
          <nav aria-label="Patient resources">
            <h3 className="font-semibold text-healthcare-text mb-4">Patient Resources</h3>
            <ul className="space-y-3" role="list">
              {footerLinks.patientResources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-healthcare-muted hover:text-healthcare-trust transition-colors duration-200 flex items-center gap-2 group"
                  >
                    {link.name}
                    <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact & Hours */}
          <div>
            <h3 className="font-semibold text-healthcare-text mb-4">Contact & Hours</h3>
            <address className="not-italic space-y-4 text-sm text-healthcare-muted">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-healthcare-trust mt-0.5 flex-shrink-0" aria-hidden="true" />
                <div>
                  <p className="font-medium text-healthcare-text">Main Campus</p>
                  <p>123 Medical Center Drive, Suite 500</p>
                  <p>Metropolitan City, MC 10001</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-healthcare-trust flex-shrink-0" aria-hidden="true" />
                <a href="tel:+15551234567" className="hover:text-healthcare-trust transition-colors">
                  (555) 123-4567
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-healthcare-trust flex-shrink-0" aria-hidden="true" />
                <a href="mailto:info@aurtho-clinic.com" className="hover:text-healthcare-trust transition-colors">
                  info@aurtho-clinic.com
                </a>
              </div>
              <div className="pt-2 border-t border-border">
                <p className="font-medium text-healthcare-text mb-2">Office Hours</p>
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span>Mon - Fri</span>
                    <span className="font-medium">7:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-medium">8:00 AM - 12:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-medium">Closed</span>
                  </div>
                </div>
              </div>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-healthcare-muted">
              © {year} AurTho Clinic. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:justify-end">
              <Link
                href="/privacy"
                className="text-xs text-healthcare-muted hover:text-healthcare-trust transition-colors"
              >
                Privacy Policy
              </Link>
              <span className="text-healthcare-muted">·</span>
              <Link
                href="/terms"
                className="text-xs text-healthcare-muted hover:text-healthcare-trust transition-colors"
              >
                Terms of Service
              </Link>
              <span className="text-healthcare-muted">·</span>
              <Link
                href="/hipaa"
                className="text-xs text-healthcare-muted hover:text-healthcare-trust transition-colors"
              >
                HIPAA Notice
              </Link>
              <span className="text-healthcare-muted">·</span>
              <Link
                href="/accessibility"
                className="text-xs text-healthcare-muted hover:text-healthcare-trust transition-colors"
              >
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}