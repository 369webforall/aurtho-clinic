import { Metadata } from "next";
import Link from "next/link";
import {
  Search,
  Filter,
  MapPin,
  GraduationCap,
  Award,
  HeartPulse,
  Stethoscope,
  Users,
  ArrowRight,
  ChevronDown,
  X,
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
import {
  physicians,
  specialties,
  getPhysiciansBySpecialty,
  type Physician,
} from "@/lib/data";

export const metadata: Metadata = {
  title: "Our Physicians",
  description: "Meet our board-certified, fellowship-trained orthopedic surgeons. 50+ specialists across 8 locations providing expert care for joint replacement, sports medicine, spine, and more.",
  openGraph: {
    title: "Our Physicians - OrthoPedic Clinic",
    description: "Meet our board-certified, fellowship-trained orthopedic surgeons across all specialties.",
    type: "website",
  },
};

const allSpecialties = ["All", ...specialties.map(s => s.name)];

export default function PhysiciansPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative hero-gradient overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28" aria-labelledby="physicians-hero-heading">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--healthcare-trust-light)_0%,_transparent_70%)] opacity-50" aria-hidden="true" />
        <div className="container-custom relative">
          <div className="max-w-4xl mx-auto text-center">
            <span className="section-badge animate-fade-in-up">Our Team</span>
            <h1 id="physicians-hero-heading" className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-healthcare-text mt-4 mb-6 animate-fade-in-up delay-100 text-balance">
              World-Class
              <br />
              <span className="gradient-text">Orthopedic Surgeons</span>
            </h1>
            <p className="text-lg sm:text-xl text-healthcare-muted max-w-3xl mx-auto animate-fade-in-up delay-200 leading-relaxed">
              Our 50+ board-certified, fellowship-trained surgeons are leaders in their subspecialties,
              dedicated to restoring your mobility with compassionate, personalized care.
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="section-py bg-healthcare-surface border-y border-border" aria-labelledby="filter-heading">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
            <div className="flex-1 max-w-md">
              <label htmlFor="physician-search" className="sr-only">Search physicians</label>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-healthcare-muted" aria-hidden="true" />
                <Input
                  id="physician-search"
                  type="search"
                  placeholder="Search by name, specialty, or condition..."
                  className="pl-12 w-full"
                />
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Select>
                <SelectTrigger className="w-full sm:w-64">
                  <SelectValue placeholder="All Specialties" />
                  <ChevronDown className="h-4 w-4 opacity-50" aria-hidden="true" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Filter by Specialty</SelectLabel>
                    {allSpecialties.map((spec) => (
                      <SelectItem key={spec} value={spec}>
                        {spec}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-full sm:w-56">
                  <SelectValue placeholder="All Locations" />
                  <ChevronDown className="h-4 w-4 opacity-50" aria-hidden="true" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Filter by Location</SelectLabel>
                    <SelectItem value="all">All Locations</SelectItem>
                    {specialties.map((spec) => (
                      <SelectItem key={spec.name} value={spec.name}>
                        {spec.name}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Button variant="outline" className="gap-2 whitespace-nowrap">
                <X className="h-4 w-4" aria-hidden="true" />
                Clear Filters
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Physicians Grid */}
      <section className="section-py bg-healthcare-bg" aria-labelledby="directory-heading">
        <div className="container-custom">
          <div className="section-header mb-12">
            <h2 id="directory-heading" className="section-title">Physician Directory</h2>
            <p className="section-subtitle">
              {physicians.length} specialists across {new Set(physicians.flatMap(p => p.specialties)).size} subspecialties
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" role="list">
            {physicians.map((physician) => (
              <article key={physician.id} className="card-base card-hover bg-healthcare-surface border-healthcare overflow-hidden" role="listitem">
                <div className="relative aspect-square bg-healthcare-trust-light overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-healthcare-trust-light">
                    <Users className="h-16 w-16 opacity-50" aria-hidden="true" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 text-white">
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4" aria-hidden="true" />
                      <span>{physician.locations[0]}</span>
                    </div>
                  </div>
                </div>
                <CardHeader className="p-5">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-healthcare-text">{physician.name}</h3>
                      <p className="text-sm text-healthcare-trust font-medium">{physician.title}</p>
                    </div>
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-healthcare-trust-light text-healthcare-trust text-xs font-medium">
                      <GraduationCap className="h-3 w-3" aria-hidden="true" />
                      {physician.yearsExperience}+ yrs
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mb-4" role="list" aria-label="Specialties">
                    {physician.specialties.slice(0, 3).map((spec) => (
                      <span key={spec} className="px-2 py-1 rounded-full bg-healthcare-bg text-xs text-healthcare-muted border border-border">
                        {spec}
                      </span>
                    ))}
                    {physician.specialties.length > 3 && (
                      <span className="px-2 py-1 rounded-full bg-healthcare-bg text-xs text-healthcare-muted border border-border">
                        +{physician.specialties.length - 3} more
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-healthcare-muted line-clamp-2 mb-4">{physician.bio}</p>
                  <div className="flex items-center gap-4 text-xs text-healthcare-muted border-t border-border pt-3">
                    <div className="flex items-center gap-1">
                      <Award className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>Board Certified</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <HeartPulse className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>{physician.proceduresPerformed.toLocaleString()}+ procedures</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="px-5 pb-5">
                  <Button asChild variant="outline" className="w-full justify-between gap-2 text-sm">
                    <Link href={`/physicians/${physician.slug}`} className="flex items-center gap-2 w-full">
                      View Profile
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </Button>
                </CardContent>
              </article>
            ))}
          </div>

          {/* Load More / Pagination */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="px-8 py-3">
              View All {physicians.length} Physicians
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </section>

      {/* Specialties Quick Access */}
      <section className="section-py bg-healthcare-surface" aria-labelledby="specialties-heading">
        <div className="container-custom">
          <div className="section-header mb-12">
            <h2 id="specialties-heading" className="section-title">Browse by Specialty</h2>
            <p className="section-subtitle">Find the right specialist for your specific condition</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialties.map((specialty) => (
              <Link
                key={specialty.id}
                href={`/specialties/${specialty.slug}`}
                className="card-base card-hover bg-healthcare-bg border-healthcare p-6 text-left group"
              >
                <div className="flex items-start gap-4">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-healthcare-trust-light text-healthcare-trust flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Stethoscope className="h-7 w-7" aria-hidden="true" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-healthcare-text group-hover:text-healthcare-trust transition-colors mb-1">
                      {specialty.name}
                    </h3>
                    <p className="text-sm text-healthcare-muted mb-3 line-clamp-2">{specialty.description}</p>
                    <div className="flex items-center gap-3 text-xs text-healthcare-muted">
                      <span className="flex items-center gap-1">
                        <Users className="h-3.5 w-3.5" aria-hidden="true" />
                        {specialty.physicians?.length ?? 0} physicians
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                        {specialty.locations?.length ?? 0} locations
                      </span>
                    </div>
                  </div>
                  <ArrowRight className="h-5 w-5 text-healthcare-muted group-hover:text-healthcare-trust transition-colors flex-shrink-0" aria-hidden="true" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-py bg-healthcare-cta" aria-labelledby="cta-heading">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 id="cta-heading" className="text-3xl sm:text-4xl font-bold tracking-tight text-healthcare-cta-foreground mb-6">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-lg text-healthcare-cta-light mb-10 max-w-2xl mx-auto">
              Our care coordinators can help match you with the right specialist based on your condition and preferences.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="w-full sm:w-auto px-8 py-4 text-base gap-3 bg-white text-healthcare-cta hover:bg-healthcare-cta-light">
                <Link href="/contact" className="flex items-center gap-2">
                  <Stethoscope className="h-5 w-5" aria-hidden="true" />
                  Get Help Finding a Doctor
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