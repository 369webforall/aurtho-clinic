import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Award,
  Heart,
  Users,
  Target,
  BookOpen,
  Building2,
  Clock,
  CheckCircle,
  ArrowRight,
  Stethoscope,
  GraduationCap,
  Shield,
  Globe,
  Calendar,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about AurTho Clinic's mission, values, leadership team, history, accreditations, and commitment to excellence in orthopedic care.",
  openGraph: {
    title: "About AurTho Clinic - Premium Orthopedic Care",
    description: "Learn about our mission, values, leadership team, history, and commitment to excellence in orthopedic care.",
    type: "website",
  },
};

const values = [
  {
    icon: Heart,
    title: "Patient-First Philosophy",
    description: "Every decision we make starts with what's best for our patients. We listen, educate, and empower you to make informed choices about your care.",
  },
  {
    icon: Target,
    title: "Clinical Excellence",
    description: "Our surgeons are fellowship-trained leaders in their subspecialties, performing thousands of procedures annually with outcomes exceeding national benchmarks.",
  },
  {
    icon: Users,
    title: "Collaborative Care",
    description: "Multidisciplinary teams — surgeons, therapists, pain specialists, and care coordinators — work together seamlessly for your optimal recovery.",
  },
  {
    icon: BookOpen,
    title: "Innovation & Research",
    description: "We advance the field through clinical research, adopting proven technologies early, and training the next generation of orthopedic leaders.",
  },
  {
    icon: Shield,
    title: "Safety & Quality",
    description: "Rigorous safety protocols, continuous quality improvement, and transparency in outcomes ensure you receive the highest standard of care.",
  },
  {
    icon: Globe,
    title: "Community Commitment",
    description: "We serve our community through outreach programs, injury prevention education, charitable care, and partnerships with local organizations.",
  },
];

const leadership = [
  {
    name: "Dr. Elena Martinez",
    title: "MD, FAAOS — Chief Medical Officer & Director, Joint Replacement Center",
    bio: "Nationally recognized leader in adult reconstruction with 15+ years of experience and 5,000+ joint replacements performed. Pioneered minimally invasive techniques reducing recovery time.",
    image: "/physicians/dr-martinez.jpg",
  },
  {
    name: "Dr. James Chen",
    title: "MD, FAAOS, FAOA — Medical Director, Sports Medicine Center",
    bio: "Head Team Physician for metropolitan professional sports teams. Expert in arthroscopic surgery and cartilage restoration with 50+ peer-reviewed publications.",
    image: "/physicians/dr-chen.jpg",
  },
  {
    name: "Dr. Priya Patel",
    title: "MD, FAAOS, MPH — Director, Spine Institute",
    bio: "Fellowship-trained in complex spine surgery and minimally invasive techniques. Leads Spine Quality Improvement Initiative with focus on patient-reported outcomes.",
    image: "/physicians/dr-patel.jpg",
  },
  {
    name: "Sarah Mitchell, MBA",
    title: "Chief Executive Officer",
    bio: "Healthcare executive with 20+ years leading academic medical centers. Passionate about operational excellence, patient experience, and physician alignment.",
    image: "/leadership/sarah-mitchell.jpg",
  },
];

const milestones = [
  { year: "1999", title: "Founded", description: "Dr. Robert Anderson establishes Anderson Orthopedic Clinic with a vision for subspecialty-focused care." },
  { year: "2005", title: "Joint Replacement Center Opens", description: "Dedicated center for hip and knee replacement performing 200+ procedures annually." },
  { year: "2010", title: "Sports Medicine Expansion", description: "Partnership with professional sports teams; Sports Medicine Center opens with biomechanics lab." },
  { year: "2015", title: "Spine Institute Established", description: "Comprehensive spine program with minimally invasive surgery and navigation technology." },
  { year: "2018", title: "Rebranded as AurTho Clinic", description: "Unified brand reflecting gold-standard (Aur = gold, Tho = ortho) orthopedic excellence across all locations." },
  { year: "2020", title: "Robotic Surgery Program", description: "Mako and Mazor X robotic systems implemented for joint replacement and spine surgery precision." },
  { year: "2022", title: "Pediatric Orthopedic Center", description: "Dedicated pediatric facility with EOS low-dose imaging and child-friendly spaces opens." },
  { year: "2024", title: "8 Locations, 50+ Surgeons", description: "Network spans metropolitan region with 15,000+ surgeries annually and top national rankings." },
];

const accreditations = [
  { name: "The Joint Commission", description: "Gold Seal of Approval for Hospital Accreditation", icon: Award },
  { name: "AAOS", description: "American Academy of Orthopaedic Surgeons Member Practice", icon: GraduationCap },
  { name: "CMS 5-Star Rating", description: "Centers for Medicare & Medicaid Services Quality Rating", icon: Star },
  { name: "Healthgrades", description: "America's 100 Best Hospitals for Orthopedic Surgery", icon: Award },
  { name: "Becker's Hospital Review", description: "100 Hospitals with Great Orthopedic Programs", icon: Building2 },
  { name: "Magnet Recognition", description: "American Nurses Credentialing Center Nursing Excellence", icon: Heart },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative hero-gradient overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28" aria-labelledby="about-hero-heading">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--healthcare-trust-light)_0%,_transparent_70%)] opacity-50" aria-hidden="true" />
        <div className="container-custom relative">
          <div className="max-w-4xl mx-auto text-center">
            <span className="section-badge animate-fade-in-up">About AurTho Clinic</span>
            <h1 id="about-hero-heading" className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-healthcare-text mt-4 mb-6 animate-fade-in-up delay-100 text-balance">
              Excellence in Orthopedic Care
              <br />
              <span className="gradient-text">Since 1999</span>
            </h1>
            <p className="text-lg sm:text-xl text-healthcare-muted max-w-3xl mx-auto animate-fade-in-up delay-200 leading-relaxed">
              For over 25 years, we've been dedicated to restoring mobility and improving quality of life through expert orthopedic care,
              innovative treatments, and compassionate patient-centered service.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="section-py bg-healthcare-surface" aria-labelledby="values-heading">
        <div className="container-custom">
          <div className="section-header mb-16 max-w-3xl">
            <span className="section-badge">Our Foundation</span>
            <h2 id="values-heading" className="section-title">Mission, Vision & Values</h2>
            <p className="section-subtitle">Guiding principles that shape every interaction, every procedure, and every outcome.</p>
          </div>

          {/* Mission Statement */}
          <div className="bg-healthcare-trust text-white rounded-3xl p-8 sm:p-12 lg:p-16 mb-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.1)_0%,_transparent_70%)]" aria-hidden="true" />
            <div className="relative max-w-3xl">
              <div className="inline-flex items-center gap-2 text-healthcare-trust-light mb-4 text-sm font-medium">
                <Target className="h-5 w-5" aria-hidden="true" />
                Our Mission
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 leading-tight">
                To restore mobility and enhance quality of life through world-class orthopedic expertise,
                innovative treatments, and compassionate, personalized care.
              </h3>
              <div className="flex flex-wrap items-center gap-4 text-healthcare-trust-light">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" aria-hidden="true" />
                  <span>Patient-centered decision making</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" aria-hidden="true" />
                  <span>Evidence-based clinical excellence</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" aria-hidden="true" />
                  <span>Continuous innovation & learning</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" aria-hidden="true" />
                  <span>Community health advocacy</span>
                </div>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <Card key={value.title} className="card-base card-hover h-full bg-healthcare-surface border-healthcare">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-healthcare-trust-light text-healthcare-trust mb-4">
                    <value.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-healthcare-text">{value.title}</CardTitle>
                  <CardDescription className="text-healthcare-muted">{value.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section-py bg-healthcare-bg" aria-labelledby="leadership-heading">
        <div className="container-custom">
          <div className="section-header mb-16">
            <span className="section-badge">Leadership</span>
            <h2 id="leadership-heading" className="section-title">Meet Our Leadership Team</h2>
            <p className="section-subtitle">Experienced physicians and executives guiding our commitment to excellence.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {leadership.map((leader, index) => (
              <Card key={leader.name} className="card-base bg-healthcare-surface border-healthcare overflow-hidden">
                <div className="flex lg:flex-row">
                  <div className="relative w-full lg:w-48 h-48 lg:h-auto min-h-[200px] bg-healthcare-trust-light flex-shrink-0 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center text-healthcare-trust-light">
                      <Stethoscope className="h-16 w-16 opacity-50" aria-hidden="true" />
                    </div>
                    {/* Image placeholder - replace with actual Image component when images available */}
                  </div>
                  <div className="flex-1 p-6 lg:p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-2 text-healthcare-trust text-sm font-medium mb-2">
                      <GraduationCap className="h-4 w-4" aria-hidden="true" />
                      <span>Medical Leadership</span>
                    </div>
                    <h3 className="text-xl lg:text-2xl font-bold text-healthcare-text mb-2">{leader.name}</h3>
                    <p className="text-healthcare-trust font-medium mb-4">{leader.title}</p>
                    <p className="text-healthcare-muted text-sm leading-relaxed">{leader.bio}</p>
                    <Button asChild variant="ghost" className="mt-4 w-fit gap-2 text-sm">
                      <Link href={`/physicians/${leader.name.toLowerCase().replace(/\s+/g, '-').replace('.', '')}`} className="flex items-center gap-2">
                        View Profile
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="px-8 py-3">
              <Link href="/physicians" className="flex items-center gap-2">
                View All Physicians
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="section-py bg-healthcare-surface" aria-labelledby="history-heading">
        <div className="container-custom">
          <div className="section-header mb-16">
            <span className="section-badge">Our Journey</span>
            <h2 id="history-heading" className="section-title">25+ Years of Excellence</h2>
            <p className="section-subtitle">From a single clinic to a regional leader in orthopedic care — our story of growth and innovation.</p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-healthcare-trust-light -translate-x-1/2 hidden lg:block" aria-hidden="true" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`
                    relative flex items-start gap-6 lg:gap-12
                    ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}
                    animate-fade-in-up
                  `}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex-1 lg:w-1/2 lg:pr-12 lg:pl-0 text-right lg:text-left">
                    <div className="inline-flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-healthcare-trust text-white font-bold text-xl lg:text-2xl z-10 relative mx-auto lg:ml-auto lg:mr-0">
                      {milestone.year}
                    </div>
                  </div>
                  <div className="flex-1 lg:w-1/2 lg:pl-12 lg:pr-0">
                    <h3 className="text-lg lg:text-xl font-bold text-healthcare-text mb-2">{milestone.title}</h3>
                    <p className="text-healthcare-muted">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Accreditations & Recognition */}
      <section className="section-py bg-healthcare-bg" aria-labelledby="accreditations-heading">
        <div className="container-custom">
          <div className="section-header mb-16">
            <span className="section-badge">Recognition</span>
            <h2 id="accreditations-heading" className="section-title">Accreditations & Awards</h2>
            <p className="section-subtitle">Independent validation of our commitment to quality, safety, and patient satisfaction.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {accreditations.map((accred, index) => (
              <Card key={accred.name} className="card-base card-hover bg-healthcare-surface border-healthcare text-center p-8">
                <CardContent className="pt-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-healthcare-trust-light text-healthcare-trust mb-4">
                    <accred.icon className="h-8 w-8" aria-hidden="true" />
                  </div>
                  <h3 className="font-semibold text-healthcare-text mb-2">{accred.name}</h3>
                  <p className="text-sm text-healthcare-muted">{accred.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="section-py bg-healthcare-cta" aria-labelledby="stats-heading">
        <div className="container-custom">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-healthcare-cta-foreground mb-2">50+</div>
              <div className="text-healthcare-cta-light">Board-Certified Surgeons</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-healthcare-cta-foreground mb-2">15,000+</div>
              <div className="text-healthcare-cta-light">Successful Surgeries Annually</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-healthcare-cta-foreground mb-2">8</div>
              <div className="text-healthcare-cta-light">Convenient Locations</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-healthcare-cta-foreground mb-2">98%</div>
              <div className="text-healthcare-cta-light">Patient Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-py bg-healthcare-surface" aria-labelledby="cta-heading">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 id="cta-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-healthcare-text mb-6">
              Experience the AurTho Difference
            </h2>
            <p className="text-lg text-healthcare-muted mb-10 max-w-2xl mx-auto">
              Schedule a consultation with one of our board-certified specialists and discover why patients trust us with their orthopedic care.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="w-full sm:w-auto px-8 py-4 text-base gap-3 animate-pulse-trust">
                <Link href="/contact" className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" aria-hidden="true" />
                  Book Appointment
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto px-8 py-4 text-base gap-3">
                <Link href="/physicians" className="flex items-center gap-2">
                  Meet Our Physicians
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