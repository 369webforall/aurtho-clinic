import { Metadata } from "next";
import Link from "next/link";
import {
  ChevronRight,
  Search,
  Filter,
  HeartPulse,
  Stethoscope,
  Users,
  Award,
  ArrowRight,
  CheckCircle,
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
import { specialties, type Specialty } from "@/lib/data";

export const metadata: Metadata = {
  title: "Specialties & Services",
  description: "Explore our comprehensive orthopedic specialties including joint replacement, sports medicine, spine care, hand & wrist, foot & ankle, and pediatric orthopedics. Subspecialty-trained experts providing personalized care.",
  openGraph: {
    title: "Specialties & Services - AurTho Clinic",
    description: "Comprehensive orthopedic care across 6 subspecialties with fellowship-trained experts.",
    type: "website",
  },
};

const specialtyCategories = [
  { value: "all", label: "All Specialties" },
  ...specialties.map((s) => ({ value: s.slug, label: s.name })),
];

export default function SpecialtiesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative hero-gradient overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28" aria-labelledby="specialties-hero-heading">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--healthcare-trust-light)_0%,_transparent_70%)] opacity-50" aria-hidden="true" />
        <div className="container-custom relative">
          <div className="max-w-4xl mx-auto text-center">
            <span className="section-badge animate-fade-in-up">Our Specialties</span>
            <h1 id="specialties-hero-heading" className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-healthcare-text mt-4 mb-6 animate-fade-in-up delay-100 text-balance">
              Comprehensive
              <br />
              <span className="gradient-text">Orthopedic Care</span>
            </h1>
            <p className="text-lg sm:text-xl text-healthcare-muted max-w-3xl mx-auto animate-fade-in-up delay-200 leading-relaxed">
              Subspecialty-trained experts covering the full spectrum of musculoskeletal conditions.
              From joint replacement to pediatric orthopedics, our fellowship-trained surgeons provide
              world-class care tailored to your specific needs.
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="section-py bg-healthcare-surface border-y border-border" aria-labelledby="filter-heading">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
            <div className="flex-1 max-w-md">
              <label htmlFor="specialty-search" className="sr-only">Search specialties</label>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-healthcare-muted" aria-hidden="true" />
                <Input
                  id="specialty-search"
                  type="search"
                  placeholder="Search by condition, treatment, or specialty..."
                  className="pl-12 w-full"
                />
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Select>
                <SelectTrigger className="w-full sm:w-64">
                  <SelectValue placeholder="All Specialties" />
                  <ChevronRight className="h-4 w-4 opacity-50" aria-hidden="true" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Filter by Specialty</SelectLabel>
                    {specialtyCategories.map((cat) => (
                      <SelectItem key={cat.value} value={cat.value}>
                        {cat.label}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Button variant="outline" className="gap-2 whitespace-nowrap">
                <Filter className="h-4 w-4" aria-hidden="true" />
                Clear Filters
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Grid */}
      <section className="section-py bg-healthcare-bg" aria-labelledby="directory-heading">
        <div className="container-custom">
          <div className="section-header mb-12">
            <h2 id="directory-heading" className="section-title">Our Specialties</h2>
            <p className="section-subtitle">
              {specialties.length} subspecialty centers with dedicated teams, advanced technology, and proven outcomes
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
            {specialties.map((specialty) => (
              <article key={specialty.id} className="card-base card-hover bg-healthcare-surface border-healthcare overflow-hidden h-full flex flex-col" role="listitem">
                <Link href={`/specialties/${specialty.slug}`} className="block h-full flex flex-col">
                  <div className="relative aspect-video bg-healthcare-trust-light overflow-hidden flex-shrink-0">
                    <div className="absolute inset-0 flex items-center justify-center text-healthcare-trust-light">
                      <span className="text-6xl" aria-hidden="true">{specialty.icon}</span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" aria-hidden="true" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-healthcare-trust/90 backdrop-blur-sm text-sm font-medium">
                        <HeartPulse className="h-3.5 w-3.5" aria-hidden="true" />
                        {specialty.relatedPhysicians.length} Specialist{specialty.relatedPhysicians.length !== 1 ? 's' : ''}
                      </span>
                    </div>
                  </div>
                  <CardHeader className="p-5 flex-1 flex flex-col">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-bold text-healthcare-text group-hover:text-healthcare-trust transition-colors line-clamp-1">
                          {specialty.name}
                        </h3>
                      </div>
                    </div>
                    <p className="text-sm text-healthcare-muted line-clamp-3 mb-4 flex-1">{specialty.shortDescription}</p>
                    <div className="flex flex-wrap gap-1.5 mb-4" role="list" aria-label="Conditions treated">
                      {specialty.conditions.slice(0, 3).map((condition) => (
                        <span key={condition} className="px-2 py-1 rounded-full bg-healthcare-bg text-xs text-healthcare-muted border border-border">
                          {condition}
                        </span>
                      ))}
                      {specialty.conditions.length > 3 && (
                        <span className="px-2 py-1 rounded-full bg-healthcare-bg text-xs text-healthcare-muted border border-border">
                          +{specialty.conditions.length - 3} more conditions
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-4 text-xs text-healthcare-muted border-t border-border pt-3">
                      <div className="flex items-center gap-1">
                        <Stethoscope className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>{specialty.treatments.filter(t => t.type === 'surgical').length} Surgical Options</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <HeartPulse className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>{specialty.treatments.filter(t => t.type === 'non-surgical').length} Non-Surgical</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="px-5 pb-5">
                    <Button asChild variant="outline" className="w-full justify-between gap-2 text-sm">
                      <Link href={`/specialties/${specialty.slug}`} className="flex items-center gap-2 w-full">
                        Explore Specialty
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </Link>
                    </Button>
                  </CardContent>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Treatments Quick Access */}
      <section className="section-py bg-healthcare-surface" aria-labelledby="treatments-heading">
        <div className="container-custom">
          <div className="section-header mb-12">
            <h2 id="treatments-heading" className="section-title">Popular Treatments</h2>
            <p className="section-subtitle">Explore our most sought-after surgical and non-surgical treatment options</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialties.flatMap((specialty) =>
              specialty.treatments
                .filter((t) => t.type === "surgical")
                .slice(0, 2)
                .map((treatment) => (
                  <Link
                    key={`${specialty.id}-${treatment.name}`}
                    href={`/specialties/${specialty.slug}#treatments`}
                    className="card-base card-hover bg-healthcare-bg border-healthcare p-6 text-left group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-healthcare-trust-light text-healthcare-trust flex-shrink-0 group-hover:scale-110 transition-transform">
                        <CheckCircle className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-healthcare-text group-hover:text-healthcare-trust transition-colors mb-1 line-clamp-1">
                          {treatment.name}
                        </h3>
                        <p className="text-sm text-healthcare-muted mb-2 line-clamp-2">{treatment.description}</p>
                        <div className="flex items-center gap-3 text-xs text-healthcare-muted">
                          <span className="flex items-center gap-1">
                            <Stethoscope className="h-3.5 w-3.5" aria-hidden="true" />
                            {specialty.name}
                          </span>
                          {treatment.recoveryTime && (
                            <span className="flex items-center gap-1">
                              <Award className="h-3.5 w-3.5" aria-hidden="true" />
                              {treatment.recoveryTime} recovery
                            </span>
                          )}
                        </div>
                      </div>
                      <ChevronRight className="h-5 w-5 text-healthcare-muted group-hover:text-healthcare-trust transition-colors flex-shrink-0" aria-hidden="true" />
                    </div>
                  </Link>
                ))
            )}
          </div>

          <div className="text-center mt-10">
            <Button asChild variant="outline" size="lg" className="px-8 py-3">
              <Link href="/specialties" className="flex items-center gap-2">
                View All Treatments
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us for Specialty Care */}
      <section className="section-py bg-healthcare-bg" aria-labelledby="why-heading">
        <div className="container-custom">
          <div className="section-header mb-16 max-w-3xl">
            <span className="section-badge">The AurTho Advantage</span>
            <h2 id="why-heading" className="section-title">Why Choose Our Specialty Centers</h2>
            <p className="section-subtitle">Each center is designed around the unique needs of its subspecialty, delivering focused expertise and better outcomes.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Award,
                title: "Fellowship-Trained Experts",
                description: "Every surgeon has completed advanced fellowship training in their subspecialty beyond residency."
              },
              {
                icon: HeartPulse,
                title: "Subspecialty-Dedicated Centers",
                description: "Each specialty has its own center with dedicated ORs, imaging, therapy, and support staff."
              },
              {
                icon: Users,
                title: "Multidisciplinary Teams",
                description: "Surgeons, therapists, pain specialists, and coordinators collaborate on every complex case."
              },
              {
                icon: Stethoscope,
                title: "Advanced Technology",
                description: "Robotic surgery, navigation systems, biologic therapies, and latest implants at every center."
              },
            ].map((advantage, index) => (
              <Card key={advantage.title} className="card-base card-hover h-full bg-healthcare-surface border-healthcare text-center p-6">
                <CardContent className="pt-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-healthcare-trust-light text-healthcare-trust mb-4">
                    <advantage.icon className="h-7 w-7" aria-hidden="true" />
                  </div>
                  <h3 className="font-semibold text-healthcare-text mb-2">{advantage.title}</h3>
                  <p className="text-sm text-healthcare-muted">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-py bg-healthcare-trust" aria-labelledby="cta-heading">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 id="cta-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
              Not Sure Which Specialist You Need?
            </h2>
            <p className="text-lg text-healthcare-trust-light mb-10 max-w-2xl mx-auto">
              Our care coordinators can help match you with the right subspecialist based on your symptoms, condition, and preferences.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="w-full sm:w-auto px-8 py-4 text-base gap-3 bg-white text-healthcare-trust hover:bg-healthcare-trust-light">
                <Link href="/contact" className="flex items-center gap-2">
                  <Stethoscope className="h-5 w-5" aria-hidden="true" />
                  Get Help Finding a Specialist
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto px-8 py-4 text-base gap-3 border-white text-white hover:bg-white/10">
                <Link href="/patient-resources/faqs" className="flex items-center gap-2">
                  Browse FAQs
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