import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Calendar,
  GraduationCap,
  Award,
  HeartPulse,
  Stethoscope,
  BookOpen,
  Hospital,
  Building2,
  Clock,
  ArrowRight,
  ArrowLeft,
  Star,
  CheckCircle,
  ExternalLink,
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
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";
import {
  physicians,
  getLocationById,
  type Physician,
  type Location,
} from "@/lib/data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const physician = physicians.find(p => p.slug === resolvedParams.slug);

  if (!physician) {
    return { title: "Physician Not Found" };
  }

  return {
    title: physician.name,
    description: `${physician.title} at AurTho Clinic. ${physician.bio.substring(0, 160)}...`,
    openGraph: {
      title: `${physician.name} - AurTho Clinic`,
      description: physician.bio.substring(0, 160),
      type: "profile",
      images: physician.image ? [`/physicians${physician.image}`] : [],
    },
  };
}

export async function generateStaticParams() {
  return physicians.map((physician) => ({
    slug: physician.slug,
  }));
}

export default async function PhysicianProfilePage({ params }: Props) {
  const resolvedParams = await params;
  const physician = physicians.find(p => p.slug === resolvedParams.slug);

  if (!physician) {
    notFound();
  }

  const physicianLocations = physician.locationIds.map(id => getLocationById(id)).filter(Boolean) as Location[];

  return (
    <>
      {/* Breadcrumb */}
      <nav className="bg-healthcare-surface border-b border-border py-4" aria-label="Breadcrumb">
        <div className="container-custom">
          <ol className="flex items-center gap-2 text-sm" role="list">
            <li>
              <Link href="/" className="text-healthcare-muted hover:text-healthcare-trust transition-colors">
                Home
              </Link>
            </li>
            <li className="text-healthcare-muted" aria-hidden="true">/</li>
            <li>
              <Link href="/physicians" className="text-healthcare-muted hover:text-healthcare-trust transition-colors">
                Physicians
              </Link>
            </li>
            <li className="text-healthcare-muted" aria-hidden="true">/</li>
            <li className="text-healthcare-text font-medium" aria-current="page">
              {physician.name}
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-healthcare-bg pt-20 pb-16 sm:pt-28 sm:pb-24" aria-labelledby="physician-name">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-10 lg:gap-16 items-start">
            {/* Photo & Info */}
            <div className="lg:col-span-1">
              <div className="relative aspect-square max-w-xs mx-auto lg:max-w-none lg:mx-0 bg-healthcare-trust-light rounded-3xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-healthcare-trust-light">
                  <Stethoscope className="h-24 w-24 opacity-30" aria-hidden="true" />
                </div>
              </div>

              {/* Quick Actions */}
              <div className="mt-6 grid grid-cols-3 gap-3 sm:grid-cols-6">
                <Button asChild variant="outline" className="h-auto py-3 gap-1.5 text-sm col-span-3 sm:col-span-2">
                  <Link href="/contact?physician={physician.slug}" className="flex items-center justify-center gap-1.5 w-full">
                    <Calendar className="h-4 w-4" aria-hidden="true" />
                    Book Appointment
                  </Link>
                </Button>
                <Button asChild variant="ghost" className="h-auto py-3 gap-1.5 text-sm">
                  <a href={`tel:${physician.phone}`} className="flex items-center justify-center gap-1.5 w-full">
                    <Phone className="h-4 w-4" aria-hidden="true" />
                    <span className="hidden sm:inline">Call</span>
                  </a>
                </Button>
                <Button asChild variant="ghost" className="h-auto py-3 gap-1.5 text-sm">
                  <a href={`mailto:${physician.email}`} className="flex items-center justify-center gap-1.5 w-full">
                    <Mail className="h-4 w-4" aria-hidden="true" />
                    <span className="hidden sm:inline">Email</span>
                  </a>
                </Button>
              </div>

              {/* Badges */}
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-healthcare-trust-light text-healthcare-trust text-sm font-medium">
                  <Award className="h-3.5 w-3.5" aria-hidden="true" />
                  Board Certified
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-healthcare-healing-light text-healthcare-healing text-sm font-medium">
                  <CheckCircle className="h-3.5 w-3.5" aria-hidden="true" />
                  Accepting New Patients
                </span>
                {physician.telehealth && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-healthcare-warmth-light text-healthcare-warmth text-sm font-medium">
                    <Building2 className="h-3.5 w-3.5" aria-hidden="true" />
                    Telehealth Available
                  </span>
                )}
              </div>
            </div>

            {/* Main Info */}
            <div className="lg:col-span-2">
              <div className="flex items-start gap-2 mb-4">
                <span className="px-3 py-1 rounded-full bg-healthcare-trust-light text-healthcare-trust text-sm font-medium">
                  {physician.title.split('—')[0]?.trim() || physician.title}
                </span>
              </div>

              <h1 id="physician-name" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-healthcare-text mb-4">
                {physician.name}
              </h1>

              <p className="text-lg text-healthcare-trust font-medium mb-6">{physician.title}</p>

              <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-healthcare-muted mb-6">
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-4 w-4 text-healthcare-trust" aria-hidden="true" />
                  <span>{physician.yearsExperience}+ years experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <HeartPulse className="h-4 w-4 text-healthcare-trust" aria-hidden="true" />
                  <span>{physician.proceduresPerformed.toLocaleString()}+ procedures</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" aria-hidden="true" />
                  <span>4.9/5 patient rating ({physician.patientRating})</span>
                </div>
              </div>

              <div className="prose prose-healthcare max-w-none text-healthcare-muted">
                <p className="leading-relaxed">{physician.bio}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Content */}
      <section className="section-py bg-healthcare-surface" aria-labelledby="details-heading">
        <div className="container-custom">
          <Tabs defaultValue="about" className="w-full">
            <TabsList className="grid w-full grid-cols-4 bg-healthcare-bg p-1 rounded-xl" role="tablist">
              <TabsTrigger value="about" className="data-[state=active]:bg-healthcare-trust data-[state=active]:text-white">
                About
              </TabsTrigger>
              <TabsTrigger value="education" className="data-[state=active]:bg-healthcare-trust data-[state=active]:text-white">
                Education & Training
              </TabsTrigger>
              <TabsTrigger value="specialties" className="data-[state=active]:bg-healthcare-trust data-[state=active]:text-white">
                Clinical Focus
              </TabsTrigger>
              <TabsTrigger value="locations" className="data-[state=active]:bg-healthcare-trust data-[state=active]:text-white">
                Locations
              </TabsTrigger>
            </TabsList>

            {/* About Tab */}
            <TabsContent value="about" className="mt-8 animate-fade-in-up">
              <div className="grid lg:grid-cols-2 gap-10">
                <div>
                  <h3 className="text-xl font-bold text-healthcare-text mb-4">Professional Philosophy</h3>
                  <div className="prose prose-healthcare max-w-none text-healthcare-muted">
                    <p className="leading-relaxed">
                      {physician.name} believes in a patient-centered approach to orthopedic care,
                      combining the latest evidence-based treatments with compassionate communication.
                      Every treatment plan is tailored to the individual's goals, lifestyle, and preferences.
                    </p>
                    <p className="leading-relaxed mt-4">
                      With over {physician.yearsExperience} years of experience and {physician.proceduresPerformed.toLocaleString()}+ procedures performed,
                      Dr. {physician.name.split(' ').pop()} has developed expertise in both routine and complex cases,
                      consistently achieving outcomes that exceed national benchmarks.
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-healthcare-text mb-4">Professional Memberships</h3>
                  <ul className="space-y-3" role="list">
                    {[
                      "American Academy of Orthopaedic Surgeons (AAOS)",
                      "American Association of Hip and Knee Surgeons (AAHKS)",
                      "American Orthopaedic Society for Sports Medicine (AOSSM)",
                      "North American Spine Society (NASS)",
                      "American College of Surgeons (FACS)",
                    ].map((membership) => (
                      <li key={membership} className="flex items-center gap-3 text-healthcare-muted">
                        <CheckCircle className="h-5 w-5 text-healthcare-healing flex-shrink-0" aria-hidden="true" />
                        {membership}
                      </li>
                    ))}
                  </ul>

                  <h3 className="text-xl font-bold text-healthcare-text mt-8 mb-4">Languages Spoken</h3>
                  <div className="flex flex-wrap gap-2">
                    {physician.languages.map((lang) => (
                      <span key={lang} className="px-3 py-1.5 rounded-full bg-healthcare-bg border border-border text-sm text-healthcare-text">
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Education Tab */}
            <TabsContent value="education" className="mt-8 animate-fade-in-up">
              <div className="grid lg:grid-cols-2 gap-10">
                <div>
                  <h3 className="text-xl font-bold text-healthcare-text mb-4">Medical Education</h3>
                  <div className="space-y-6">
                    {[
                      { degree: "MD", school: "Harvard Medical School", year: "2008", honors: "Magna Cum Laude" },
                      { degree: "Residency", school: "Hospital for Special Surgery, NY", year: "2013", honors: "Chief Resident" },
                      { degree: "Fellowship", school: "Rothman Institute, Philadelphia", year: "2014", honors: "Adult Reconstruction" },
                    ].map((edu, index) => (
                      <div key={index} className="relative pl-6 pb-6 border-l-2 border-healthcare-trust-light last:border-0">
                        <div className="absolute left-0 top-0 w-3 h-3 rounded-full bg-healthcare-trust border-2 border-healthcare-bg" aria-hidden="true" />
                        <h4 className="font-semibold text-healthcare-text">{edu.degree}</h4>
                        <p className="text-healthcare-trust font-medium">{edu.school}</p>
                        <div className="flex items-center gap-3 mt-1 text-sm text-healthcare-muted">
                          <span>{edu.year}</span>
                          <span className="px-2 py-0.5 rounded-full bg-healthcare-trust-light text-healthcare-trust text-xs">{edu.honors}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-healthcare-text mb-4">Certifications & Credentials</h3>
                  <div className="space-y-4">
                    {[
                      { name: "American Board of Orthopaedic Surgery", year: "2014", status: "Active" },
                      { name: "Subspecialty Certification in Sports Medicine", year: "2015", status: "Active" },
                      { name: "Advanced Trauma Life Support (ATLS)", year: "2023", status: "Current" },
                      { name: "Robotic-Assisted Surgery Certification (Mako)", year: "2021", status: "Current" },
                    ].map((cert, index) => (
                      <Card key={index} className="card-base bg-healthcare-bg border-healthcare">
                        <CardContent className="pt-4">
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <h4 className="font-medium text-healthcare-text">{cert.name}</h4>
                              <p className="text-sm text-healthcare-muted">Certified {cert.year}</p>
                            </div>
                            <span className="px-2 py-1 rounded-full bg-healthcare-healing-light text-healthcare-healing text-xs font-medium">
                              {cert.status}
                            </span>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <h3 className="text-xl font-bold text-healthcare-text mt-8 mb-4">Research & Publications</h3>
                  <div className="space-y-3">
                    {[
                      "Outcomes of Minimally Invasive Total Hip Arthroplasty: A 10-Year Follow-Up (JAAOS, 2023)",
                      "Patient-Reported Outcomes After Robotic-Assisted Knee Replacement (JBJS, 2022)",
                      "Revision Strategies for Failed Total Joint Arthroplasty (CORR, 2021)",
                    ].map((pub, index) => (
                      <p key={index} className="text-sm text-healthcare-muted leading-relaxed">
                        {pub}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Clinical Focus Tab */}
            <TabsContent value="specialties" className="mt-8 animate-fade-in-up">
              <div className="grid lg:grid-cols-2 gap-10">
                <div>
                  <h3 className="text-xl font-bold text-healthcare-text mb-4">Clinical Expertise</h3>
                  <div className="space-y-4">
                    {physician.specialties.map((spec) => (
                      <Card key={spec} className="card-base bg-healthcare-bg border-healthcare">
                        <CardContent className="pt-4">
                          <div className="flex items-center gap-3">
                            <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-healthcare-trust-light text-healthcare-trust">
                              <Stethoscope className="h-5 w-5" aria-hidden="true" />
                            </div>
                            <div>
                              <h4 className="font-medium text-healthcare-text">{spec}</h4>
                              <p className="text-sm text-healthcare-muted">Subspecialty focus area</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-healthcare-text mb-4">Conditions Treated</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Osteoarthritis",
                      "Rheumatoid Arthritis",
                      "Sports Injuries",
                      "Rotator Cuff Tears",
                      "ACL/PCL Tears",
                      "Meniscus Tears",
                      "Herniated Discs",
                      "Spinal Stenosis",
                      "Carpal Tunnel Syndrome",
                      "Fractures & Trauma",
                      "Joint Instability",
                      "Tendonitis & Bursitis",
                    ].map((condition) => (
                      <span key={condition} className="px-3 py-1.5 rounded-full bg-healthcare-bg border border-border text-sm text-healthcare-text">
                        {condition}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-bold text-healthcare-text mt-8 mb-4">Procedures Performed</h3>
                  <div className="space-y-2">
                    {[
                      "Total Hip Replacement (Anterior & Posterior)",
                      "Total Knee Replacement (Robotic-Assisted)",
                      "Partial Knee Replacement",
                      "Revision Joint Replacement",
                      "Arthroscopic Shoulder Surgery",
                      "Arthroscopic Knee Surgery",
                      "Minimally Invasive Spine Surgery",
                      "Hand & Wrist Surgery",
                    ].map((proc, index) => (
                      <div key={index} className="flex items-center gap-3 text-healthcare-muted">
                        <CheckCircle className="h-5 w-5 text-healthcare-healing flex-shrink-0" aria-hidden="true" />
                        {proc}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Locations Tab */}
            <TabsContent value="locations" className="mt-8 animate-fade-in-up">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {physicianLocations.map((location) => (
                  <Card key={location.id} className="card-base card-hover bg-healthcare-surface border-healthcare">
                    <CardHeader>
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="font-semibold text-healthcare-text">{location.name}</h3>
                          <p className="text-sm text-healthcare-trust font-medium">{location.type}</p>
                        </div>
                        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-healthcare-trust-light text-healthcare-trust text-xs font-medium">
                          <MapPin className="h-3 w-3" aria-hidden="true" />
                          {location.distance}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <address className="not-italic text-sm text-healthcare-muted space-y-2 mb-4">
                        <p>{location.address}</p>
                        <p>{location.city}, {location.state} {location.zip}</p>
                      </address>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {location.services.slice(0, 3).map((svc) => (
                          <span key={svc} className="px-2 py-1 rounded-full bg-healthcare-bg text-xs text-healthcare-muted border border-border">
                            {svc}
                          </span>
                        ))}
                        {location.services.length > 3 && (
                          <span className="px-2 py-1 rounded-full bg-healthcare-bg text-xs text-healthcare-muted border border-border">
                            +{location.services.length - 3} more
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-4 text-sm text-healthcare-muted border-t border-border pt-4">
                        <div className="flex items-center gap-1">
                          <Phone className="h-4 w-4" aria-hidden="true" />
                          <a href={`tel:${location.phone}`} className="hover:text-healthcare-trust transition-colors">{location.phone}</a>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" aria-hidden="true" />
                          <span>Mon-Fri 7AM-6PM</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center mt-10">
                <Button asChild variant="outline" size="lg" className="px-8 py-3">
                  <Link href="/locations">
                    View All Locations
                    <ArrowRight className="h-5 w-5" aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Related Physicians */}
      <section className="section-py bg-healthcare-bg" aria-labelledby="related-heading">
        <div className="container-custom">
          <div className="section-header mb-12">
            <h2 id="related-heading" className="section-title">Other Specialists in This Field</h2>
            <p className="section-subtitle">Explore other physicians who share similar clinical interests</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {physicians
              .filter((p) => p.id !== physician.id && p.specialties.some((s) => physician.specialties.includes(s)))
              .slice(0, 3)
              .map((related) => (
                <Card key={related.id} className="card-base card-hover bg-healthcare-surface border-healthcare">
                  <div className="relative aspect-square bg-healthcare-trust-light overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center text-healthcare-trust-light">
                      <Users className="h-12 w-12 opacity-50" aria-hidden="true" />
                    </div>
                  </div>
                  <CardHeader>
                    <h3 className="font-semibold text-healthcare-text">{related.name}</h3>
                    <p className="text-sm text-healthcare-trust">{related.title}</p>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {related.specialties.slice(0, 2).map((spec) => (
                        <span key={spec} className="px-2 py-1 rounded-full bg-healthcare-bg text-xs text-healthcare-muted border border-border">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <Button asChild variant="ghost" className="w-full justify-start gap-2 text-sm">
                      <Link href={`/physicians/${related.slug}`} className="flex items-center gap-2 w-full">
                        View Profile
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-py bg-healthcare-cta" aria-labelledby="book-heading">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 id="book-heading" className="text-3xl sm:text-4xl font-bold tracking-tight text-healthcare-cta-foreground mb-4">
              Ready to Schedule an Appointment?
            </h2>
            <p className="text-lg text-healthcare-cta-light mb-8">
              Book a consultation with Dr. {physician.name.split(' ').pop()} at any of our convenient locations.
            </p>
            <Button asChild size="lg" className="w-full sm:w-auto px-8 py-4 text-base gap-3 bg-white text-healthcare-cta hover:bg-healthcare-cta-light">
              <Link href={`/contact?physician=${physician.slug}`} className="flex items-center justify-center gap-3 w-full">
                <Calendar className="h-5 w-5" aria-hidden="true" />
                Book Appointment with Dr. {physician.name.split(' ').pop()}
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}