import { Metadata } from "next";
import Link from "next/link";
import {
  Search,
  Filter,
  FileText,
  BookOpen,
  PlayCircle,
  Shield,
  CreditCard,
  HelpCircle,
  ArrowRight,
  ChevronRight,
  Download,
  ExternalLink,
  Lock,
  Users,
  Stethoscope,
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
  patientResources,
  type PatientResource,
} from "@/lib/data";

export const metadata: Metadata = {
  title: "Patient Resources",
  description: "Access patient forms, pre/post-surgery guides, insurance verification, payment options, educational videos, and the patient portal at OrthoPedic Clinic.",
  openGraph: {
    title: "Patient Resources - OrthoPedic Clinic",
    description: "Complete patient resources including forms, guides, videos, insurance info, and portal access.",
    type: "website",
  },
};

const categories = [
  "All",
  ...Array.from(new Set(patientResources.map((r) => r.category))),
];

export default function PatientResourcesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative hero-gradient overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28" aria-labelledby="resources-hero-heading">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--healthcare-trust-light)_0%,_transparent_70%)] opacity-50" aria-hidden="true" />
        <div className="container-custom relative">
          <div className="max-w-4xl mx-auto text-center">
            <span className="section-badge animate-fade-in-up">Patient Resources</span>
            <h1 id="resources-hero-heading" className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-healthcare-text mt-4 mb-6 animate-fade-in-up delay-100 text-balance">
              Your Care
              <br />
              <span className="gradient-text">Resources Hub</span>
            </h1>
            <p className="text-lg sm:text-xl text-healthcare-muted max-w-3xl mx-auto animate-fade-in-up delay-200 leading-relaxed">
              Everything you need for a smooth experience — from new patient forms and insurance verification
              to pre-surgery preparation guides, recovery protocols, and educational videos.
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="section-py bg-healthcare-surface border-y border-border" aria-labelledby="filter-heading">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
            <div className="flex-1 max-w-md">
              <label htmlFor="resource-search" className="sr-only">Search resources</label>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-healthcare-muted" aria-hidden="true" />
                <Input
                  id="resource-search"
                  type="search"
                  placeholder="Search resources, forms, guides..."
                  className="pl-12 w-full"
                />
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Select>
                <SelectTrigger className="w-full sm:w-64">
                  <SelectValue placeholder="All Categories" />
                  <ChevronRight className="h-4 w-4 opacity-50" aria-hidden="true" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Filter by Category</SelectLabel>
                    {categories.map((cat) => (
                      <SelectItem key={cat} value={cat}>
                        {cat}
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

      {/* Resources Grid */}
      <section className="section-py bg-healthcare-bg" aria-labelledby="resources-heading">
        <div className="container-custom">
          <div className="section-header mb-12">
            <h2 id="resources-heading" className="section-title">All Resources</h2>
            <p className="section-subtitle">
              {patientResources.length} resources organized by category to support your care journey
            </p>
          </div>

          <div className="space-y-12">
            {categories.slice(1).map((category) => {
              const categoryResources = patientResources.filter((r) => r.category === category);
              return (
                <div key={category} className="animate-fade-in-up">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-healthcare-text flex items-center gap-2">
                      {category === "Forms" && <FileText className="h-6 w-6 text-healthcare-trust" />}
                      {category === "Guides" && <BookOpen className="h-6 w-6 text-healthcare-trust" />}
                      {category === "Education" && <PlayCircle className="h-6 w-6 text-healthcare-trust" />}
                      {category === "Insurance" && <Shield className="h-6 w-6 text-healthcare-trust" />}
                      {category === "Billing" && <CreditCard className="h-6 w-6 text-healthcare-trust" />}
                      {category === "Digital Tools" && <Lock className="h-6 w-6 text-healthcare-trust" />}
                      {category === "General" && <HelpCircle className="h-6 w-6 text-healthcare-trust" />}
                      {category}
                    </h3>
                    <span className="text-sm text-healthcare-muted">{categoryResources.length} resource{categoryResources.length !== 1 ? 's' : ''}</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categoryResources.map((resource) => (
                      <article key={resource.id} className="card-base card-hover bg-healthcare-surface border-healthcare overflow-hidden h-full flex flex-col">
                        <Link
                          href={resource.url}
                          className="block h-full flex flex-col"
                          target={resource.type === "portal" || resource.type === "link" ? "_blank" : undefined}
                          rel={resource.type === "portal" || resource.type === "link" ? "noopener noreferrer" : undefined}
                        >
                          <CardHeader className="p-5 flex-1 flex flex-col">
                            <div className="flex items-start justify-between gap-3 mb-4">
                              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-healthcare-trust-light text-healthcare-trust flex-shrink-0">
                                <span className="text-2xl" aria-hidden="true">{resource.icon}</span>
                              </div>
                              <Badge variant="outline" className="text-xs whitespace-nowrap flex-shrink-0">
                                {resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}
                              </Badge>
                            </div>
                            <h3 className="text-lg font-bold text-healthcare-text group-hover:text-healthcare-trust transition-colors mb-3 line-clamp-1">
                              {resource.title}
                            </h3>
                            <p className="text-sm text-healthcare-muted line-clamp-3 flex-1">{resource.description}</p>
                            <div className="flex items-center gap-3 text-xs text-healthcare-muted border-t border-border pt-3">
                              <span className="flex items-center gap-1">
                                {resource.type === "form" && <FileText className="h-3.5 w-3.5" />}
                                {resource.type === "guide" && <BookOpen className="h-3.5 w-3.5" />}
                                {resource.type === "video" && <PlayCircle className="h-3.5 w-3.5" />}
                                {resource.type === "link" && <ExternalLink className="h-3.5 w-3.5" />}
                                {resource.type === "portal" && <Lock className="h-3.5 w-3.5" />}
                              </span>
                            </div>
                          </CardHeader>
                          <CardContent className="px-5 pb-5">
                            <Button asChild variant="outline" className="w-full justify-between gap-2 text-sm">
                              {resource.type === "portal" || resource.type === "link" ? (
                                <a href={resource.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 w-full">
                                  Access Resource
                                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                                </a>
                              ) : (
                                <Link href={resource.url} className="flex items-center gap-2 w-full">
                                  View Resource
                                  <ChevronRight className="h-4 w-4" aria-hidden="true" />
                                </Link>
                              )}
                            </Button>
                          </CardContent>
                        </Link>
                      </article>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Access Cards */}
      <section className="section-py bg-healthcare-surface" aria-labelledby="quick-access-heading">
        <div className="container-custom">
          <div className="section-header mb-12">
            <h2 id="quick-access-heading" className="section-title">Most Accessed</h2>
            <p className="section-subtitle">Quick links to the resources patients use most frequently</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "New Patient Forms",
                description: "Complete before your first visit",
                icon: FileText,
                href: "/patient-resources/forms/new-patient",
                color: "bg-healthcare-trust-light text-healthcare-trust",
                badge: "Form",
              },
              {
                title: "Insurance Verification",
                description: "Check coverage & estimate costs",
                icon: Shield,
                href: "/patient-resources/insurance/verify",
                color: "bg-healthcare-healing-light text-healthcare-healing",
                badge: "Tool",
              },
              {
                title: "Pre-Surgery Guide",
                description: "Prepare for your procedure",
                icon: BookOpen,
                href: "/patient-resources/guides/pre-op",
                color: "bg-healthcare-warmth-light text-healthcare-warmth",
                badge: "Guide",
              },
              {
                title: "Patient Portal",
                description: "Results, messages, appointments",
                icon: Lock,
                href: "https://portal.orthopedic-clinic.com",
                color: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
                badge: "Portal",
                external: true,
              },
            ].map((item, index) => (
              <Card key={item.title} className="card-base card-hover bg-healthcare-surface border-healthcare p-6 text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 ${item.color}`}>
                  <item.icon className="h-8 w-8" aria-hidden="true" />
                </div>
                <h3 className="font-semibold text-healthcare-text mb-2">{item.title}</h3>
                <p className="text-sm text-healthcare-muted mb-4">{item.description}</p>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Badge variant="secondary">{item.badge}</Badge>
                </div>
                <Button asChild variant="outline" className="w-full gap-2">
                  {item.external ? (
                    <a href={item.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 w-full">
                      Access
                      <ExternalLink className="h-4 w-4" aria-hidden="true" />
                    </a>
                  ) : (
                    <Link href={item.href} className="flex items-center gap-2 w-full">
                      Access
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  )}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Patient Journey Guide */}
      <section className="section-py bg-healthcare-bg" aria-labelledby="journey-heading">
        <div className="container-custom">
          <div className="section-header mb-12 max-w-3xl">
            <span className="section-badge">Care Journey</span>
            <h2 id="journey-heading" className="section-title">Resources for Every Step</h2>
            <p className="section-subtitle">From your first appointment through recovery, we have guides and tools for each phase of your care.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: 1,
                title: "Before Your Visit",
                items: ["New Patient Forms", "Insurance Verification", "What to Bring", "Directions & Parking"],
                icon: Users,
              },
              {
                step: 2,
                title: "Pre-Surgery Prep",
                items: ["Pre-Op Guide", "Medication Instructions", "Fasting Guidelines", "Pre-Hab Exercises"],
                icon: BookOpen,
              },
              {
                step: 3,
                title: "Day of Surgery",
                items: ["Arrival Instructions", "What to Expect", "Family Waiting Area", "Discharge Criteria"],
                icon: Stethoscope,
              },
              {
                step: 4,
                title: "Recovery & Rehab",
                items: ["Post-Op Protocols", "Exercise Videos", "Pain Management", "Follow-Up Schedule"],
                icon: PlayCircle,
              },
            ].map((phase) => (
              <Card key={phase.title} className="card-base card-hover h-full bg-healthcare-surface border-healthcare p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-healthcare-trust text-white font-bold text-lg flex-shrink-0">
                    {phase.step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-healthcare-text">{phase.title}</h3>
                    <p className="text-sm text-healthcare-muted">Key resources for this phase</p>
                  </div>
                </div>
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-healthcare-trust-light text-healthcare-trust mb-4">
                  <phase.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <ul className="space-y-2" role="list">
                  {phase.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-healthcare-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-healthcare-trust-light" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-py bg-healthcare-cta" aria-labelledby="cta-heading">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 id="cta-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-healthcare-cta-foreground mb-6">
              Can't Find What You Need?
            </h2>
            <p className="text-lg text-healthcare-cta-light mb-10 max-w-2xl mx-auto">
              Our patient services team is here to help. Contact us for assistance with forms, insurance questions, or any other resource needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="w-full sm:w-auto px-8 py-4 text-base gap-3 bg-white text-healthcare-cta hover:bg-healthcare-cta-light">
                <Link href="/contact" className="flex items-center gap-2">
                  <Stethoscope className="h-5 w-5" aria-hidden="true" />
                  Contact Patient Services
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto px-8 py-4 text-base gap-3 border-white text-white hover:bg-white/10">
                <Link href="/patient-resources/faqs" className="flex items-center gap-2">
                  Browse All FAQs
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