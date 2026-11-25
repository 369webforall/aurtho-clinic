import { Metadata } from "next";
import Link from "next/link";
import {
  Search,
  Filter,
  MapPin,
  Phone,
  Clock,
  CheckCircle,
  ArrowRight,
  ChevronRight,
  X,
  Building2,
  Car,
  Bus,
  HeartPulse,
  Stethoscope,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  locations,
  type Location,
  physicians,
  specialties,
} from "@/lib/data";

export const metadata: Metadata = {
  title: "Locations & Hours",
  description: "Find an OrthoPedic Clinic location near you. 9 locations across Metropolitan City including our Main Campus, specialty centers, and Urgent Ortho Care walk-in clinic. View hours, services, parking, and transit info.",
  openGraph: {
    title: "Locations & Hours - OrthoPedic Clinic",
    description: "9 convenient locations with specialized orthopedic centers. View hours, services, parking, and public transit.",
    type: "website",
  },
};

const allServices = [
  "All Services",
  ...Array.from(new Set(locations.flatMap((l) => l.services))),
];

export default function LocationsPage() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative hero-gradient overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28"
        aria-labelledby="locations-hero-heading"
      >
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--healthcare-trust-light)_0%,_transparent_70%)] opacity-50"
          aria-hidden="true"
        />
        <div className="container-custom relative">
          <div className="max-w-4xl mx-auto text-center">
            <span className="section-badge animate-fade-in-up">Our Locations</span>
            <h1
              id="locations-hero-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-healthcare-text mt-4 mb-6 animate-fade-in-up delay-100 text-balance"
            >
              Convenient
              <br />
              <span className="gradient-text">Orthopedic Care</span>
            </h1>
            <p className="text-lg sm:text-xl text-healthcare-muted max-w-3xl mx-auto animate-fade-in-up delay-200 leading-relaxed">
              9 locations across Metropolitan City — from our comprehensive Main Campus to specialized
              centers and walk-in urgent care. Same expert team, closer to home.
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section
        className="section-py bg-healthcare-surface border-y border-border"
        aria-labelledby="filter-heading"
      >
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
            <div className="flex-1 max-w-md">
              <label htmlFor="location-search" className="sr-only">
                Search locations
              </label>
              <div className="relative">
                <Search
                  className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-healthcare-muted"
                  aria-hidden="true"
                />
                <Input
                  id="location-search"
                  type="search"
                  placeholder="Search by name, service, or neighborhood..."
                  className="pl-12 w-full"
                />
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Select>
                <SelectTrigger className="w-full sm:w-64">
                  <SelectValue placeholder="All Services" />
                  <ChevronRight className="h-4 w-4 opacity-50" aria-hidden="true" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Filter by Service</SelectLabel>
                    {allServices.map((svc) => (
                      <SelectItem key={svc} value={svc}>
                        {svc}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent></Select>
              <Button variant="outline" className="gap-2 whitespace-nowrap">
                <X className="h-4 w-4" aria-hidden="true" />
                Clear Filters
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Grid */}
      <section
        className="section-py bg-healthcare-bg"
        aria-labelledby="locations-heading"
      >
        <div className="container-custom">
          <div className="section-header mb-12">
            <h2 id="locations-heading" className="section-title">
              All Locations
            </h2>
            <p className="section-subtitle">
              {locations.length} convenient locations with specialized services and expert physicians
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6" role="list">
            {locations.map((location) => (
              <article
                key={location.id}
                className="card-base card-hover bg-healthcare-surface border-healthcare overflow-hidden h-full flex flex-col"
                role="listitem"
              >
                <div className="relative aspect-video bg-healthcare-trust-light overflow-hidden flex-shrink-0">
                  <div className="absolute inset-0 flex items-center justify-center text-healthcare-trust-light">
                    <Building2 className="h-16 w-16 opacity-50" aria-hidden="true" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" aria-hidden="true" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-healthcare-trust/90 backdrop-blur-sm text-sm font-medium">
                      <HeartPulse className="h-3.5 w-3.5" aria-hidden="true" />
                      {location.physicians.length} Specialist{location.physicians.length !== 1 ? 's' : ''}
                    </span>
                  </div>
                </div>
                <CardHeader className="p-5 flex-1 flex flex-col">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-healthcare-text group-hover:text-healthcare-trust transition-colors line-clamp-1">
                        {location.name}
                      </h3>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-healthcare-muted mb-4">
                    <MapPin className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
                    <address className="not-italic line-clamp-1">
                      {location.address}, {location.city}, {location.state} {location.zip}
                    </address>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-healthcare-muted mb-4">
                    <span className="flex items-center gap-1">
                      <Phone className="h-4 w-4" aria-hidden="true" />
                      <a href={`tel:${location.phone.replace(/\D/g, '')}`} className="hover:text-healthcare-trust transition-colors">
                        {location.phone}
                      </a>
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mb-4" role="list" aria-label="Services offered">
                    {location.services.slice(0, 4).map((service) => (
                      <span
                        key={service}
                        className="px-2 py-1 rounded-full bg-healthcare-bg text-xs text-healthcare-muted border border-border"
                      >
                        {service}
                      </span>
                    ))}
                    {location.services.length > 4 && (
                      <span className="px-2 py-1 rounded-full bg-healthcare-bg text-xs text-healthcare-muted border border-border">
                        +{location.services.length - 4} more
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs text-healthcare-muted border-t border-border pt-3 mb-4">
                    {location.features.slice(0, 3).map((feature) => (
                      <span key={feature} className="flex items-center gap-1 px-2 py-1 rounded-full bg-healthcare-trust-light text-healthcare-trust">
                        <CheckCircle className="h-3 w-3" aria-hidden="true" />
                        {feature}
                      </span>
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="px-5 pb-5">
                  <div className="space-y-3 mb-4">
                    <Link
                      href={`/locations/${location.id}`}
                      className="card-base card-hover p-3 flex items-center gap-3 group"
                    >
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-healthcare-trust-light text-healthcare-trust flex-shrink-0 group-hover:scale-110 transition-transform">
                        <ArrowRight className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="font-medium text-healthcare-text group-hover:text-healthcare-trust transition-colors">
                          View Location Details
                        </span>
                        <p className="text-xs text-healthcare-muted">Hours, parking, transit & physicians</p>
                      </div>
                      <ChevronRight className="h-4 w-4 text-healthcare-muted group-hover:text-healthcare-trust transition-colors flex-shrink-0" aria-hidden="true" />
                    </Link>
                    <Button asChild variant="outline" className="w-full justify-between gap-2 text-sm">
                      <Link href="/contact" className="flex items-center gap-2 w-full">
                        Schedule Appointment
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Hours Quick Reference */}
      <section
        className="section-py bg-healthcare-surface"
        aria-labelledby="hours-heading"
      >
        <div className="container-custom">
          <div className="section-header mb-12">
            <h2 id="hours-heading" className="section-title">Hours at a Glance</h2>
            <p className="section-subtitle">Standard hours for each location — always verify before visiting</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left" role="table">
              <thead>
                <tr className="border-b border-border">
                  <th className="px-4 py-3 font-semibold text-healthcare-text">Location</th>
                  <th className="px-4 py-3 font-semibold text-healthcare-text">Mon-Fri</th>
                  <th className="px-4 py-3 font-semibold text-healthcare-text">Saturday</th>
                  <th className="px-4 py-3 font-semibold text-healthcare-text">Sunday</th>
                  <th className="px-4 py-3 font-semibold text-healthcare-text">Type</th>
                </tr>
              </thead>
              <tbody>
                {locations.map((location) => (
                  <tr key={location.id} className="border-b border-border/50 hover:bg-healthcare-bg/50">
                    <td className="px-4 py-3">
                      <Link href={`/locations/${location.id}`} className="font-medium text-healthcare-text hover:text-healthcare-trust transition-colors">
                        {location.name}
                      </Link>
                    </td>
                    <td className="px-4 py-3 text-sm text-healthcare-muted">
                      {location.hours.find((h) => h.day.includes("Monday"))?.hours || "—"}
                    </td>
                    <td className="px-4 py-3 text-sm text-healthcare-muted">
                      {location.hours.find((h) => h.day.includes("Saturday"))?.hours || "Closed"}
                    </td>
                    <td className="px-4 py-3 text-sm text-healthcare-muted">
                      {location.hours.find((h) => h.day.includes("Sunday"))?.hours || "Closed"}
                    </td>
                    <td className="px-4 py-3">
                      <Badge variant="secondary" className="text-xs">
                        {location.id === "urgent-ortho" ? "Walk-In" : "Appointment"}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Parking & Transit */}
      <section
        className="section-py bg-healthcare-bg"
        aria-labelledby="access-heading"
      >
        <div className="container-custom">
          <div className="section-header mb-12 max-w-3xl">
            <span className="section-badge">Getting Here</span>
            <h2 id="access-heading" className="section-title">Parking & Public Transit</h2>
            <p className="section-subtitle">We make it easy to reach your appointment with ample parking and convenient transit options.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((location) => (
              <Card key={location.id} className="card-base card-hover h-full bg-healthcare-surface border-healthcare p-6">
                <h3 className="font-semibold text-healthcare-text mb-4 flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-healthcare-trust" aria-hidden="true" />
                  {location.name}
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3 p-3 bg-healthcare-bg rounded-xl">
                    <div className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-healthcare-trust-light text-healthcare-trust flex-shrink-0">
                      <Car className="h-4 w-4" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-medium text-healthcare-text">Parking</p>
                      <p className="text-healthcare-muted">{location.parking}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-healthcare-bg rounded-xl">
                    <div className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-healthcare-healing-light text-healthcare-healing flex-shrink-0">
                      <Bus className="h-4 w-4" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-medium text-healthcare-text">Public Transit</p>
                      <p className="text-healthcare-muted">{location.publicTransport}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specialty Centers Quick Access */}
      <section
        className="section-py bg-healthcare-surface"
        aria-labelledby="centers-heading"
      >
        <div className="container-custom">
          <div className="section-header mb-12">
            <h2 id="centers-heading" className="section-title">Specialty Centers</h2>
            <p className="section-subtitle">Dedicated centers for focused, expert care in each subspecialty</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialties.map((specialty) => {
              const specialtyLocation = locations.find((l) =>
                l.services.some((s) => s.toLowerCase().includes(specialty.name.toLowerCase().split(" ")[0]))
              );
              return (
                <Link
                  key={specialty.id}
                  href={`/specialties/${specialty.slug}`}
                  className="card-base card-hover bg-healthcare-bg border-healthcare p-6 text-left group"
                >
                  <div className="flex items-start gap-4">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-healthcare-trust-light text-healthcare-trust flex-shrink-0 group-hover:scale-110 transition-transform">
                      <span className="text-2xl" aria-hidden="true">{specialty.icon}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-healthcare-text group-hover:text-healthcare-trust transition-colors mb-1">
                        {specialty.name} Center
                      </h3>
                      <p className="text-sm text-healthcare-muted mb-3 line-clamp-2">{specialty.shortDescription}</p>
                      <div className="flex items-center gap-3 text-xs text-healthcare-muted">
                        <span className="flex items-center gap-1">
                          <Users className="h-3.5 w-3.5" aria-hidden="true" />
                          {specialty.relatedPhysicians.length} Specialist{specialty.relatedPhysicians.length !== 1 ? 's' : ''}
                        </span>
                        {specialtyLocation && (
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                            {specialtyLocation.name}
                          </span>
                        )}
                      </div>
                    </div>
                    <ArrowRight className="h-5 w-5 text-healthcare-muted group-hover:text-healthcare-trust transition-colors flex-shrink-0" aria-hidden="true" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="section-py bg-healthcare-trust"
        aria-labelledby="cta-heading"
      >
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 id="cta-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
              Ready to Schedule Your Visit?
            </h2>
            <p className="text-lg text-healthcare-trust-light mb-10 max-w-2xl mx-auto">
              Choose the location that works best for you. Our care coordinators can help with scheduling, directions, and any questions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="w-full sm:w-auto px-8 py-4 text-base gap-3 bg-white text-healthcare-trust hover:bg-healthcare-trust-light">
                <Link href="/contact" className="flex items-center gap-2">
                  <Stethoscope className="h-5 w-5" aria-hidden="true" />
                  Request Appointment
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto px-8 py-4 text-base gap-3 border-white text-white hover:bg-white/10">
                <Link href="/patient-resources/portal" className="flex items-center gap-2">
                  Patient Portal
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}