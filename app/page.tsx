import Link from "next/link";
import Image from "next/image";
import {
  Calendar,
  Shield,
  HeartPulse,
  Award,
  ArrowRight,
  CheckCircle,
  Stethoscope,
  Users,
  Clock,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const stats = [
  { value: "50+", label: "Board-Certified Surgeons", icon: Award },
  { value: "15,000+", label: "Successful Surgeries", icon: CheckCircle },
  { value: "25+", label: "Years of Excellence", icon: Calendar },
  { value: "8", label: "Convenient Locations", icon: MapPin },
];

const features = [
  {
    icon: Shield,
    title: "Board-Certified Experts",
    description:
      "All our surgeons are fellowship-trained and board-certified in their subspecialties.",
  },
  {
    icon: HeartPulse,
    title: "Patient-Centered Care",
    description:
      "Personalized treatment plans focused on your goals and quality of life.",
  },
  {
    icon: Stethoscope,
    title: "Advanced Technology",
    description:
      "State-of-the-art surgical techniques including robotic-assisted procedures.",
  },
  {
    icon: Users,
    title: "Multidisciplinary Team",
    description:
      "Surgeons, physical therapists, and pain specialists working together.",
  },
  {
    icon: Clock,
    title: "Same-Week Appointments",
    description:
      "Fast access to specialists when you need care most.",
  },
  {
    icon: Award,
    title: "Top-Rated Outcomes",
    description:
      "Consistently ranked among the nation's best for patient satisfaction.",
  },
];

const featuredServices = [
  {
    name: "Joint Replacement",
    description:
      "Total hip, knee, and shoulder replacement using minimally invasive techniques.",
    href: "/specialties/joint-replacement",
    icon: "🦴",
    conditions: ["Osteoarthritis", "Rheumatoid Arthritis", "Post-Traumatic Arthritis"],
  },
  {
    name: "Sports Medicine",
    description:
      "Arthroscopic surgery and comprehensive care for athletic injuries.",
    href: "/specialties/sports-medicine",
    icon: "🏃",
    conditions: ["ACL Tears", "Rotator Cuff", "Meniscus Tears"],
  },
  {
    name: "Spine Care",
    description:
      "Surgical and non-surgical treatment for spine conditions.",
    href: "/specialties/spine-care",
    icon: "🦴",
    conditions: ["Herniated Disc", "Spinal Stenosis", "Scoliosis"],
  },
  {
    name: "Hand & Wrist",
    description:
      "Specialized care for complex hand and upper extremity conditions.",
    href: "/specialties/hand-wrist",
    icon: "🤲",
    conditions: ["Carpal Tunnel", "Trigger Finger", "Arthritis"],
  },
];

const testimonials = [
  {
    quote:
      "Dr. Martinez performed my total knee replacement and I'm back to hiking within 3 months. The entire team was incredible - from pre-op education through physical therapy.",
    author: "Sarah Johnson",
    role: "Total Knee Replacement Patient",
    location: "Downtown Campus",
    rating: 5,
  },
  {
    quote:
      "After my rotator cuff tear, I thought my tennis days were over. Dr. Chen's minimally invasive approach got me back on the court faster than I imagined possible.",
    author: "Michael Torres",
    role: "Sports Medicine Patient",
    location: "Sports Medicine Center",
    rating: 5,
  },
  {
    quote:
      "The spine team took time to explain all my options. I avoided surgery with their conservative approach and am now pain-free. Truly patient-first care.",
    author: "Linda Chen",
    role: "Spine Care Patient",
    location: "Spine Institute",
    rating: 5,
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative hero-gradient overflow-hidden" aria-labelledby="hero-heading">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--healthcare-trust-light)_0%,_transparent_70%)] opacity-50" aria-hidden="true" />
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" aria-hidden="true" />

        <div className="container-custom relative py-20 sm:py-28 lg:py-36">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-healthcare-trust-light px-4 py-1.5 text-sm font-medium text-healthcare-trust mb-6 animate-fade-in-up">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inset-0 h-full w-full rounded-full bg-healthcare-trust opacity-75" />
                <span className="relative block h-full w-full rounded-full bg-healthcare-trust" />
              </span>
              Now Accepting New Patients — Same-Week Appointments Available
            </div>

            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-healthcare-text mb-6 animate-fade-in-up delay-100 text-balance"
            >
              Expert Orthopedic Care
              <br />
              <span className="gradient-text">Restoring Your Mobility</span>
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-healthcare-muted max-w-3xl mx-auto mb-10 animate-fade-in-up delay-200 leading-relaxed">
              Board-certified surgeons. Advanced minimally invasive techniques.
              Personalized treatment plans. Your journey back to an active life starts here.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-300">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto px-8 py-4 text-base gap-3 animate-pulse-trust"
              >
                <Link href="/contact" className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" aria-hidden="true" />
                  Book Appointment
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:w-auto px-8 py-4 text-base gap-3"
              >
                <Link href="/specialties" className="flex items-center gap-2">
                  Explore Specialties
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 animate-fade-in-up delay-400">
              {stats.map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <stat.icon className="h-6 w-6 text-healthcare-trust" aria-hidden="true" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-bold text-healthcare-text">{stat.value}</div>
                  <div className="text-sm text-healthcare-muted">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative wave divider */}
        <div className="absolute bottom-0 left-0 right-0 h-16" aria-hidden="true">
          <svg viewBox="0 0 1440 100" fill="none" className="w-full h-full">
            <path
              d="M0,64 C240,32 480,96 720,64 C960,32 1200,96 1440,64 L1440,100 L0,100 Z"
              fill="var(--healthcare-bg)"
            />
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-py bg-healthcare-surface" aria-labelledby="features-heading">
        <div className="container-custom">
          <div className="section-header mb-16">
            <span className="section-badge">Why Choose AurTho Clinic</span>
            <h2 id="features-heading" className="section-title">
              Excellence in Every Aspect of Your Care
            </h2>
            <p className="section-subtitle">
              From diagnosis through recovery, we combine world-class expertise with compassionate, personalized attention.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card
                key={feature.title}
                className="card-base card-hover h-full bg-healthcare-surface border-healthcare"
              >
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-healthcare-trust-light text-healthcare-trust mb-4">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-healthcare-text">{feature.title}</CardTitle>
                  <CardDescription className="text-healthcare-muted">{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Specialties */}
      <section className="section-py bg-healthcare-bg" aria-labelledby="specialties-heading">
        <div className="container-custom">
          <div className="section-header mb-16">
            <span className="section-badge">Our Specialties</span>
            <h2 id="specialties-heading" className="section-title">
              Comprehensive Orthopedic Care
            </h2>
            <p className="section-subtitle">
              Subspecialty-trained experts covering the full spectrum of musculoskeletal conditions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredServices.map((service, index) => (
              <Card
                key={service.name}
                className="card-base card-hover h-full bg-healthcare-surface border-healthcare group"
              >
                <CardHeader>
                  <div className="text-4xl mb-3">{service.icon}</div>
                  <CardTitle className="text-healthcare-text group-hover:text-healthcare-trust transition-colors">
                    {service.name}
                  </CardTitle>
                  <CardDescription className="text-healthcare-muted">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2 mb-4" role="list">
                    {service.conditions.map((condition) => (
                      <li key={condition} className="flex items-center gap-2 text-sm text-healthcare-muted">
                        <CheckCircle className="h-4 w-4 text-healthcare-healing flex-shrink-0" aria-hidden="true" />
                        {condition}
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    variant="ghost"
                    className="w-full justify-start gap-2 text-healthcare-trust hover:text-healthcare-trust-dark hover:bg-healthcare-trust-light group-hover:bg-healthcare-trust-light"
                  >
                    <Link href={service.href} className="flex items-center gap-2">
                      Learn More
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="px-8 py-3">
              <Link href="/specialties" className="flex items-center gap-2">
                View All Specialties
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-py bg-healthcare-surface" aria-labelledby="testimonials-heading">
        <div className="container-custom">
          <div className="section-header mb-16">
            <span className="section-badge">Patient Stories</span>
            <h2 id="testimonials-heading" className="section-title">
              Real Patients. Real Results.
            </h2>
            <p className="section-subtitle">
              Hear from patients who've regained their active lifestyles with our expert care.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card
                key={testimonial.author}
                className="card-base h-full bg-healthcare-surface border-healthcare"
              >
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4" aria-label={`${testimonial.rating} out of 5 stars`}>
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-current"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="text-healthcare-text mb-6 leading-relaxed">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                  <div className="border-t border-border pt-4">
                    <div className="font-medium text-healthcare-text">{testimonial.author}</div>
                    <div className="text-sm text-healthcare-muted">{testimonial.role}</div>
                    <div className="text-xs text-healthcare-muted mt-1">{testimonial.location}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="px-8 py-3">
              <Link href="/patient-resources/testimonials" className="flex items-center gap-2">
                Read More Stories
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-py bg-healthcare-cta" style={{ background: 'var(--healthcare-cta-gradient)' }} aria-labelledby="cta-heading">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 id="cta-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
              Ready to Start Your Recovery Journey?
            </h2>
            <p className="text-lg sm:text-xl text-healthcare-cta-light mb-10 max-w-2xl mx-auto">
              Schedule a consultation with one of our board-certified specialists today.
              Same-week appointments available at all locations.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto px-8 py-4 text-base gap-3 bg-white text-healthcare-cta hover:bg-[var(--healthcare-cta-button-hover)]"
              >
                <Link href="/contact" className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" aria-hidden="true" />
                  Book Appointment
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:w-auto px-8 py-4 text-base gap-3 border-white text-white hover:bg-white/10"
              >
                <Link href="/locations" className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                  Find a Location
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance & Partners */}
      <section className="section-py bg-healthcare-bg border-t border-border" aria-labelledby="insurance-heading">
        <div className="container-custom">
          <div className="section-header mb-12 max-w-2xl">
            <h2 id="insurance-heading" className="section-title text-2xl sm:text-3xl">
              We Accept Most Major Insurance Plans
            </h2>
            <p className="section-subtitle mt-4">
              Our team works with your insurance provider to maximize your benefits and minimize out-of-pocket costs.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 opacity-60 hover:opacity-100 transition-opacity">
            <span className="text-sm font-medium text-healthcare-text">Insurance Partners:</span>
            <div className="flex flex-wrap items-center gap-6 text-healthcare-muted">
              <span className="font-semibold">Medicare</span>
              <span className="font-semibold">Blue Cross Blue Shield</span>
              <span className="font-semibold">Aetna</span>
              <span className="font-semibold">Cigna</span>
              <span className="font-semibold">UnitedHealthcare</span>
              <span className="font-semibold">Humana</span>
              <span className="font-semibold">+ 50 More</span>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Button asChild variant="outline" className="px-6 py-3">
              <Link href="/patient-resources/insurance" className="flex items-center gap-2">
                Verify Your Insurance
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}