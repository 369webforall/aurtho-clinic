import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ChevronRight,
  ChevronDown,
  ChevronUp,
  HeartPulse,
  Stethoscope,
  Users,
  Award,
  ArrowRight,
  MapPin,
  Calendar,
  Clock,
  CheckCircle,
  BookOpen,
  Shield,
  Search,
  X,
  ExternalLink,
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
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import {
  Separator,
} from "@/components/ui/separator";
import {
  Badge,
} from "@/components/ui/badge";
import { getSpecialtyBySlug, specialties, type Specialty, type Physician, type Treatment } from "@/lib/data";

interface SpecialtyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: SpecialtyPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const specialty = getSpecialtyBySlug(resolvedParams.slug);

  if (!specialty) {
    return {
      title: "Specialty Not Found",
    };
  }

  return {
    title: `${specialty.name} | Specialties & Services`,
    description: specialty.description,
    openGraph: {
      title: `${specialty.name} - AurTho Clinic`,
      description: specialty.description,
      type: "website",
    },
  };
}

export async function generateStaticParams() {
  return specialties.map((specialty) => ({
    slug: specialty.slug,
  }));
}

export default async function SpecialtyDetailPage({ params }: SpecialtyPageProps) {
  const resolvedParams = await params;
  const specialty = getSpecialtyBySlug(resolvedParams.slug);

  if (!specialty) {
    notFound();
  }

  // Helper to get physicians for this specialty
  const specialtyPhysicians = specialty.relatedPhysicians.map(id => {
    // We'd need to import getPhysicianById from data, but let's just use the relatedPhysicians array
    // For now, we'll use the physician data that's referenced
    return null;
  }).filter(Boolean);

  const surgicalTreatments = specialty.treatments.filter(t => t.type === 'surgical');
  const nonSurgicalTreatments = specialty.treatments.filter(t => t.type === 'non-surgical');

  return (
    <>
      {/* Hero Section */}
      <section className="relative hero-gradient overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20" aria-labelledby="specialty-hero-heading">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--healthcare-trust-light)_0%,_transparent_70%)] opacity-50" aria-hidden="true" />
        <div className="container-custom relative">
          <nav className="mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm text-healthcare-muted flex-wrap">
              <li>
                <Link href="/" className="hover:text-healthcare-trust transition-colors">Home</Link>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
                <Link href="/specialties" className="hover:text-healthcare-trust transition-colors">Specialties</Link>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
                <span className="text-healthcare-text font-medium" aria-current="page">{specialty.name}</span>
              </li>
            </ol>
          </nav>

          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              <div>
                <span className="section-badge animate-fade-in-up">{specialty.name}</span>
                <h1 id="specialty-hero-heading" className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-healthcare-text mt-4 mb-6 animate-fade-in-up delay-100 text-balance">
                  {specialty.name}
                </h1>
                <p className="text-lg sm:text-xl text-healthcare-muted animate-fade-in-up delay-200 leading-relaxed mb-8">
                  {specialty.description}
                </p>

                {/* Quick Stats */}
                <div className="flex flex-wrap gap-6 animate-fade-in-up delay-300">
                  <div className="flex items-center gap-2">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-healthcare-trust-light text-healthcare-trust">
                      <Users className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="font-semibold text-healthcare-text">{specialty.relatedPhysicians.length}</div>
                      <div className="text-xs text-healthcare-muted">Specialists</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-healthcare-trust-light text-healthcare-trust">
                      <MapPin className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="font-semibold text-healthcare-text">{specialty.locations.length}</div>
                      <div className="text-xs text-healthcare-muted">Locations</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-healthcare-trust-light text-healthcare-trust">
                      <HeartPulse className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="font-semibold text-healthcare-text">{surgicalTreatments.length + nonSurgicalTreatments.length}</div>
                      <div className="text-xs text-healthcare-muted">Treatment Options</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-healthcare-trust-light text-healthcare-trust">
                      <Award className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="font-semibold text-healthcare-text">{specialty.conditions.length}</div>
                      <div className="text-xs text-healthcare-muted">Conditions Treated</div>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4 mt-8 animate-fade-in-up delay-400">
                  <Button asChild size="lg" className="px-8 py-3 gap-2">
                    <Link href="/contact" className="flex items-center justify-center gap-2">
                      <Calendar className="h-5 w-5" aria-hidden="true" />
                      Schedule Consultation
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="px-8 py-3 gap-2">
                    <Link href="/physicians" className="flex items-center justify-center gap-2">
                      <Users className="h-5 w-5" aria-hidden="true" />
                      Meet Our Specialists
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Hero Image/Visual */}
              <div className="relative hidden lg:block animate-fade-in-up delay-200">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-healthcare-trust-light">
                  <div className="absolute inset-0 flex items-center justify-center text-healthcare-trust-light">
                    <span className="text-9xl" aria-hidden="true">{specialty.icon}</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-healthcare-trust/10 via-transparent to-healthcare-warmth/10" aria-hidden="true" />
                  {/* Placeholder for actual specialty image */}
                  {specialty.image && (
                    <Image
                      src={specialty.image}
                      alt={`${specialty.name} specialty center`}
                      fill
                      className="object-cover"
                      priority
                    />
                  )}
                </div>
                {/* Floating stats card */}
                <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-border min-w-[280px] animate-float">
                  <h4 className="font-semibold text-healthcare-text mb-4 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-healthcare-trust" aria-hidden="true" />
                    Why Choose Our {specialty.name} Center
                  </h4>
                  <ul className="space-y-3 text-sm text-healthcare-muted">
                    {[
                      "Fellowship-trained subspecialists",
                      "Dedicated ORs & imaging suites",
                      "Multidisciplinary care teams",
                      "Latest robotic & navigation tech",
                      "Personalized treatment plans",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-healthcare-trust flex-shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conditions Treated */}
      <section className="section-py bg-healthcare-surface border-y border-border" aria-labelledby="conditions-heading">
        <div className="container-custom">
          <div className="section-header mb-12 max-w-3xl">
            <h2 id="conditions-heading" className="section-title">Conditions We Treat</h2>
            <p className="section-subtitle">
              Our {specialty.name.toLowerCase()} specialists diagnose and treat the full spectrum of conditions affecting your musculoskeletal system.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {specialty.conditions.map((condition, index) => (
              <Button
                key={condition}
                variant="outline"
                className="h-auto py-4 px-6 text-left justify-start gap-3 group card-base card-hover"
              >
                <CheckCircle className="h-5 w-5 text-healthcare-trust flex-shrink-0 group-hover:scale-110 transition-transform" aria-hidden="true" />
                <span className="font-medium text-healthcare-text group-hover:text-healthcare-trust transition-colors">{condition}</span>
                <ChevronRight className="h-4 w-4 text-healthcare-muted group-hover:text-healthcare-trust transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Button>
            ))}
          </div>

          {specialty.symptoms && specialty.symptoms.length > 0 && (
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-healthcare-text mb-6">Common Symptoms</h3>
              <p className="text-healthcare-muted mb-6 max-w-3xl">
                If you're experiencing any of these symptoms, it may be time to see a {specialty.name.toLowerCase()} specialist:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {specialty.symptoms.map((symptom, index) => (
                  <div key={symptom} className="card-base bg-healthcare-bg border-healthcare p-5 group">
                    <div className="flex items-start gap-3">
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-healthcare-trust-light text-healthcare-trust flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Stethoscope className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <span className="font-medium text-healthcare-text">{symptom}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {specialty.whenToSee && specialty.whenToSee.length > 0 && (
            <div className="mt-12 p-8 bg-healthcare-trust-light rounded-2xl border border-healthcare-trust/20">
              <h3 className="text-2xl font-bold text-healthcare-text mb-4 flex items-center gap-2">
                <Calendar className="h-6 w-6 text-healthcare-trust" aria-hidden="true" />
                When to See a Specialist
              </h3>
              <ul className="space-y-3 text-healthcare-text/90">
                {specialty.whenToSee.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-healthcare-trust/10 text-healthcare-trust flex-shrink-0 mt-0.5">
                      <CheckCircle className="h-3.5 w-3.5" aria-hidden="true" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* Treatments */}
      <section id="treatments" className="section-py bg-healthcare-bg" aria-labelledby="treatments-heading">
        <div className="container-custom">
          <div className="section-header mb-12 max-w-3xl">
            <h2 id="treatments-heading" className="section-title">Treatment Options</h2>
            <p className="section-subtitle">
              Comprehensive surgical and non-surgical approaches tailored to your specific condition, lifestyle, and goals.
            </p>
          </div>

          {/* Surgical Treatments */}
          {surgicalTreatments.length > 0 && (
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-healthcare-trust-light text-healthcare-trust">
                  <HeartPulse className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-bold text-healthcare-text">Surgical Treatments</h3>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {surgicalTreatments.map((treatment) => (
                  <Card key={treatment.name} className="card-base card-hover bg-healthcare-surface border-healthcare overflow-hidden">
                    <CardHeader className="p-6 pb-0">
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-healthcare-text mb-2">{treatment.name}</h4>
                          <Badge variant="outline" className="text-xs">Surgical</Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6 pt-0">
                      <p className="text-healthcare-muted mb-4">{treatment.description}</p>

                      <div className="grid grid-cols-2 gap-4 mb-4">
                        {treatment.recoveryTime && (
                          <div className="p-3 bg-healthcare-bg rounded-xl border border-border">
                            <div className="flex items-center gap-2 text-xs text-healthcare-muted mb-1">
                              <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                              Recovery Time
                            </div>
                            <div className="font-medium text-healthcare-text">{treatment.recoveryTime}</div>
                          </div>
                        )}
                        {treatment.successRate && (
                          <div className="p-3 bg-healthcare-bg rounded-xl border border-border">
                            <div className="flex items-center gap-2 text-xs text-healthcare-muted mb-1">
                              <Award className="h-3.5 w-3.5" aria-hidden="true" />
                              Success Rate
                            </div>
                            <div className="font-medium text-healthcare-text">{treatment.successRate}</div>
                          </div>
                        )}
                        {treatment.technique && (
                          <div className="p-3 bg-healthcare-bg rounded-xl border border-border col-span-2">
                            <div className="flex items-center gap-2 text-xs text-healthcare-muted mb-1">
                              <Shield className="h-3.5 w-3.5" aria-hidden="true" />
                              Technique
                            </div>
                            <div className="font-medium text-healthcare-text">{treatment.technique}</div>
                          </div>
                        )}
                      </div>

                      <div className="pt-4 border-t border-border">
                        <Link
                          href={`/contact?specialty=${specialty.slug}&treatment=${treatment.name}`}
                          className="inline-flex items-center gap-2 text-sm font-medium text-healthcare-trust hover:text-healthcare-trust-dark transition-colors"
                        >
                          Learn More & Schedule
                          <ChevronRight className="h-4 w-4" aria-hidden="true" />
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Non-Surgical Treatments */}
          {nonSurgicalTreatments.length > 0 && (
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-healthcare-healing-light text-healthcare-healing">
                  <Shield className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-bold text-healthcare-text">Non-Surgical & Conservative Care</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {nonSurgicalTreatments.map((treatment) => (
                  <Card key={treatment.name} className="card-base card-hover bg-healthcare-surface border-healthcare p-6">
                    <div className="flex items-start gap-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-healthcare-healing-light text-healthcare-healing flex-shrink-0">
                        <CheckCircle className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-healthcare-text mb-1">{treatment.name}</h4>
                        <p className="text-sm text-healthcare-muted mb-3 line-clamp-2">{treatment.description}</p>
                        {treatment.recoveryTime && (
                          <div className="flex items-center gap-2 text-xs text-healthcare-muted">
                            <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                            <span>Typical timeline: {treatment.recoveryTime}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Our Specialists */}
      <section className="section-py bg-healthcare-surface" aria-labelledby="specialists-heading">
        <div className="container-custom">
          <div className="section-header mb-12">
            <h2 id="specialists-heading" className="section-title">Our {specialty.name} Specialists</h2>
            <p className="section-subtitle">
              Fellowship-trained experts dedicated to {specialty.name.toLowerCase()} excellence
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialty.relatedPhysicians.map((physicianId) => (
              <article key={physicianId} className="card-base card-hover bg-healthcare-bg border-healthcare overflow-hidden">
                <div className="relative aspect-square bg-healthcare-trust-light overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-healthcare-trust-light">
                    <Users className="h-16 w-16 opacity-50" aria-hidden="true" />
                  </div>
                </div>
                <CardHeader className="p-5">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-healthcare-text">Dr. {physicianId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</h3>
                      <p className="text-sm text-healthcare-trust font-medium">{specialty.name} Specialist</p>
                    </div>
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-healthcare-trust-light text-healthcare-trust text-xs font-medium">
                      <Award className="h-3 w-3" aria-hidden="true" />
                      Board Certified
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mb-4" role="list" aria-label="Specialties">
                    <span className="px-2 py-1 rounded-full bg-healthcare-surface text-xs text-healthcare-muted border border-border">
                      {specialty.name}
                    </span>
                  </div>
                  <p className="text-sm text-healthcare-muted line-clamp-2 mb-4">
                    Expert in {specialty.name.toLowerCase()} with advanced fellowship training and extensive experience in both surgical and non-surgical treatments.
                  </p>
                  <div className="flex items-center gap-4 text-xs text-healthcare-muted border-t border-border pt-3">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>{specialty.locations[0] || 'Main Campus'}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>Accepting New Patients</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="px-5 pb-5">
                  <Button asChild variant="outline" className="w-full justify-between gap-2 text-sm">
                    <Link href={`/physicians/${physicianId}`} className="flex items-center justify-between gap-2 w-full">
                      View Profile
                      <ChevronRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </Button>
                </CardContent></article>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button asChild variant="outline" size="lg" className="px-8 py-3">
              <Link href="/physicians" className="flex items-center justify-center gap-2">
                View All Physicians
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="section-py bg-healthcare-bg" aria-labelledby="locations-heading">
        <div className="container-custom">
          <div className="section-header mb-12">
            <h2 id="locations-heading" className="section-title">{specialty.name} Locations</h2>
            <p className="section-subtitle">Convenient access to expert care across our network</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialty.locations.map((location, index) => (
              <Card key={location} className="card-base card-hover bg-healthcare-surface border-healthcare p-6">
                <div className="flex items-start gap-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-healthcare-trust-light text-healthcare-trust flex-shrink-0">
                    <MapPin className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-healthcare-text mb-1">{location}</h3>
                    <p className="text-sm text-healthcare-muted mb-3">Full {specialty.name.toLowerCase()} services available</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-xs">Consultations</Badge>
                      <Badge variant="outline" className="text-xs">Imaging</Badge>
                      <Badge variant="outline" className="text-xs">Therapy</Badge>
                      {surgicalTreatments.length > 0 && <Badge variant="outline" className="text-xs">Surgery</Badge>}
                    </div>
                  </div>
                  <Button asChild variant="ghost" size="sm" className="flex-shrink-0 mt-1">
                    <Link href="/locations" className="flex items-center justify-center gap-2">
                      <ExternalLink className="h-4 w-4" aria-hidden="true" />
                      <span className="sr-only">View location details</span>
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      {specialty.faqs && specialty.faqs.length > 0 && (
        <section className="section-py bg-healthcare-surface border-y border-border" aria-labelledby="faqs-heading">
          <div className="container-custom">
            <div className="section-header mb-12 max-w-3xl">
              <h2 id="faqs-heading" className="section-title">Frequently Asked Questions</h2>
              <p className="section-subtitle">Common questions about {specialty.name.toLowerCase()} care and treatment</p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" className="w-full space-y-4">
                {specialty.faqs.map((faq, index) => (
                  <AccordionItem key={index} value={index.toString()}>
                    <AccordionTrigger className="text-left font-medium text-healthcare-text hover:text-healthcare-trust">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-healthcare-muted pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              <div className="text-center mt-10">
                <Button asChild variant="outline" size="lg" className="px-8 py-3">
                  <Link href="/patient-resources/faqs" className="flex items-center justify-center gap-2">
                    View All FAQs
                    <ArrowRight className="h-5 w-5" aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Related Specialties */}
      <section className="section-py bg-healthcare-bg" aria-labelledby="related-heading">
        <div className="container-custom">
          <div className="section-header mb-12">
            <h2 id="related-heading" className="section-title">Related Specialties</h2>
            <p className="section-subtitle">Explore other orthopedic subspecialties that may be relevant to your care</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialties
              .filter(s => s.slug !== specialty.slug)
              .slice(0, 3)
              .map((relatedSpecialty) => (
                <Link
                  key={relatedSpecialty.id}
                  href={`/specialties/${relatedSpecialty.slug}`}
                  className="card-base card-hover bg-healthcare-surface border-healthcare p-6 text-left group"
                >
                  <div className="flex items-start gap-4">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-healthcare-trust-light text-healthcare-trust flex-shrink-0 group-hover:scale-110 transition-transform">
                      <span className="text-3xl" aria-hidden="true">{relatedSpecialty.icon}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-healthcare-text group-hover:text-healthcare-trust transition-colors mb-1">
                        {relatedSpecialty.name}
                      </h3>
                      <p className="text-sm text-healthcare-muted mb-3 line-clamp-2">{relatedSpecialty.shortDescription}</p>
                      <div className="flex items-center gap-3 text-xs text-healthcare-muted">
                        <span className="flex items-center gap-1">
                          <Users className="h-3.5 w-3.5" aria-hidden="true" />
                          {relatedSpecialty.relatedPhysicians.length} specialists
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                          {relatedSpecialty.locations.length} locations
                        </span>
                      </div>
                    </div>
                    <ChevronRight className="h-5 w-5 text-healthcare-muted group-hover:text-healthcare-trust transition-colors flex-shrink-0" aria-hidden="true" />
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
            <h2 id="cta-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-healthcare-cta-foreground mb-6">
              Ready to See a {specialty.name} Specialist?
            </h2>
            <p className="text-lg text-healthcare-cta-light mb-10 max-w-2xl mx-auto">
              Schedule a consultation with one of our fellowship-trained experts and take the first step toward recovery.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="w-full sm:w-auto px-8 py-4 text-base gap-3 bg-white text-healthcare-cta hover:bg-healthcare-cta-light">
                <Link href="/contact" className="flex items-center justify-center gap-2">
                  <Calendar className="h-5 w-5" aria-hidden="true" />
                  Book Appointment
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto px-8 py-4 text-base gap-3 border-white text-white hover:bg-white/10">
                <Link href="/patient-resources/portal" className="flex items-center justify-center gap-2">
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