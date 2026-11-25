"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Calendar,
  User,
  Stethoscope,
  MessageSquare,
  ChevronRight,
  ChevronDown,
  CheckCircle,
  AlertCircle,
  Loader2,
  Map,
  Building,
  ArrowRight,
  ExternalLink,
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
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Toaster,
  toast,
} from "@/components/ui/toast";
import {
  locations,
  specialties,
  physicians,
  type Location,
  type Specialty,
  type Physician,
} from "@/lib/data";

const faqs = [
  {
    question: "Do I need a referral to see an orthopedic specialist?",
    answer: "Most insurance plans do not require a referral for orthopedic care. However, some HMOs and managed care plans may require one. We recommend checking with your insurance provider. Our team can also help verify your coverage before your appointment.",
  },
  {
    question: "How do I schedule an appointment?",
    answer: "You can schedule an appointment using the form on this page, by calling our main line at (555) 123-4567, or through our patient portal. We offer same-day and next-day appointments for urgent orthopedic needs at our Urgent Ortho Care location.",
  },
  {
    question: "What should I bring to my first appointment?",
    answer: "Please bring your insurance card, photo ID, any imaging studies (X-rays, MRIs, CT scans) on a CD or accessible via patient portal, a list of current medications, and any referral documentation if required. New patient forms can be completed online before your visit.",
  },
  {
    question: "What insurance plans do you accept?",
    answer: "We accept most major insurance plans including Medicare, Medicaid, Blue Cross Blue Shield, Aetna, Cigna, UnitedHealthcare, Humana, Tricare, and Workers' Compensation. Use our insurance verification tool or contact our billing department for plan-specific details.",
  },
  {
    question: "Do you offer telehealth appointments?",
    answer: "Yes, we offer telehealth visits for follow-up appointments, post-operative checks, and certain consultations. In-person visits are required for initial evaluations, procedures, and physical examinations. Contact us to determine if your visit type qualifies for telehealth.",
  },
  {
    question: "What are your hours for urgent orthopedic care?",
    answer: "Our Urgent Ortho Care walk-in clinic is open Monday-Friday 8:00 AM - 8:00 PM, Saturday 9:00 AM - 5:00 PM, and Sunday 10:00 AM - 4:00 PM. No appointment needed for acute injuries like fractures, sprains, and sports injuries.",
  },
  {
    question: "How long will my appointment take?",
    answer: "Initial consultations typically take 45-60 minutes. Follow-up visits are usually 15-30 minutes. Procedure and surgery scheduling appointments may take longer. Please arrive 15 minutes early for check-in, or complete pre-visit forms online to save time.",
  },
  {
    question: "Can I request a specific physician?",
    answer: "Yes, you can request a specific physician when scheduling. If your preferred physician is not available for your desired timeframe, we can offer you the next available appointment with another fellowship-trained specialist in the same subspecialty.",
  },
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    preferredDate: "",
    specialty: "",
    physician: "",
    message: "",
    isNewPatient: true,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  // Filter physicians based on selected specialty
  const filteredPhysicians = specialties.find((s) => s.id === formData.specialty)
    ? physicians.filter((p) =>
        p.specialties.some((sp) =>
          sp.toLowerCase().includes(formData.specialty.replace("-", " "))
        )
      )
    : physicians.filter((p) => p.acceptingPatients);

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[\d\s\-\(\)\+]{10,}$/.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Please enter a valid phone number";
    }
    if (!formData.preferredDate) {
      newErrors.preferredDate = "Preferred date is required";
    } else {
      const selectedDate = new Date(formData.preferredDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        newErrors.preferredDate = "Please select a future date";
      }
    }
    if (!formData.specialty) {
      newErrors.specialty = "Please select a specialty";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Please describe the reason for your visit";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Please provide more details (at least 10 characters)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      setSubmitStatus("error");
      toast.error("Please fix the errors above and try again", {
        description: "All required fields must be completed correctly",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // In a real app, this would be an API call
    const success = Math.random() > 0.1; // 90% success rate for demo

    setIsSubmitting(false);

    if (success) {
      setSubmitStatus("success");
      toast.success("Appointment Request Submitted!", {
        description: "Our scheduling team will contact you within 24 hours to confirm your appointment.",
        actionProps: {
          children: (
            <Button variant="ghost" size="sm" onClick={() => setSubmitStatus("idle")}>
              Dismiss
            </Button>
          ),
          onClick: () => setSubmitStatus("idle"),
        },
      });
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        preferredDate: "",
        specialty: "",
        physician: "",
        message: "",
        isNewPatient: true,
      });
    } else {
      setSubmitStatus("error");
      toast.error("Submission Failed", {
        description: "Please try again or call us directly at (555) 123-4567",
        actionProps: {
          children: (
            <Button variant="ghost" size="sm" onClick={() => setSubmitStatus("idle")}>
              Dismiss
            </Button>
          ),
          onClick: () => setSubmitStatus("idle"),
        },
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
    // Reset physician when specialty changes
    if (name === "specialty") {
      setFormData((prev) => ({ ...prev, physician: "" }));
    }
  };

  const [minDate, setMinDate] = useState("2024-01-01");

  useEffect(() => {
    setMinDate(new Date().toISOString().split("T")[0]);
  }, []);

  return (
    <>
      <Toaster />

      {/* Contact Info Cards */}
      <section className="section-py bg-healthcare-surface border-y border-border" aria-labelledby="contact-info-heading">
        <div className="container-custom">
          <div className="section-header mb-12">
            <h2 id="contact-info-heading" className="section-title">Contact Information</h2>
            <p className="section-subtitle">Multiple ways to reach us — choose what works best for you</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="card-base card-hover bg-healthcare-surface border-healthcare p-6 text-center">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-healthcare-trust-light text-healthcare-trust mb-4">
                  <Phone className="h-7 w-7" aria-hidden="true" />
                </div>
                <CardTitle className="text-lg">Call Us</CardTitle>
                <CardDescription className="text-healthcare-muted">Main appointment line</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <a href="tel:+15551234567" className="text-2xl font-bold text-healthcare-text hover:text-healthcare-trust transition-colors block mb-2">
                  (555) 123-4567
                </a>
                <p className="text-sm text-healthcare-muted">Mon-Fri 7AM-6PM, Sat 8AM-12PM</p>
                <Button asChild variant="outline" className="mt-4 w-full gap-2">
                  <a href="tel:+15551234567" className="flex items-center gap-2 w-full">
                    Call Now
                    <Phone className="h-4 w-4" aria-hidden="true" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="card-base card-hover bg-healthcare-surface border-healthcare p-6 text-center">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-healthcare-healing-light text-healthcare-healing mb-4">
                  <Mail className="h-7 w-7" aria-hidden="true" />
                </div>
                <CardTitle className="text-lg">Email Us</CardTitle>
                <CardDescription className="text-healthcare-muted">General inquiries & records</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <a href="mailto:info@orthopedic-clinic.com" className="text-lg font-medium text-healthcare-text hover:text-healthcare-healing transition-colors block mb-2 break-all">
                  info@orthopedic-clinic.com
                </a>
                <a href="mailto:medicalrecords@orthopedic-clinic.com" className="text-sm text-healthcare-muted block mb-2 hover:text-healthcare-healing transition-colors">
                  medicalrecords@orthopedic-clinic.com
                </a>
                <a href="mailto:billing@orthopedic-clinic.com" className="text-sm text-healthcare-muted block hover:text-healthcare-healing transition-colors">
                  billing@orthopedic-clinic.com
                </a>
              </CardContent>
            </Card>

            <Card className="card-base card-hover bg-healthcare-surface border-healthcare p-6 text-center">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-healthcare-warmth-light text-healthcare-warmth mb-4">
                  <MapPin className="h-7 w-7" aria-hidden="true" />
                </div>
                <CardTitle className="text-lg">Our Locations</CardTitle>
                <CardDescription className="text-healthcare-muted">8 convenient locations</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-healthcare-text font-medium mb-2">{locations.length} Clinics Across the Metro Area</p>
                <p className="text-sm text-healthcare-muted mb-4">Main Campus • Specialty Centers • Urgent Care</p>
                <Button asChild variant="outline" className="w-full gap-2">
                  <Link href="#locations" className="flex items-center gap-2 w-full">
                    View All Locations
                    <Map className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="card-base card-hover bg-healthcare-surface border-healthcare p-6 text-center">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 mb-4">
                  <Clock className="h-7 w-7" aria-hidden="true" />
                </div>
                <CardTitle className="text-lg">Hours of Operation</CardTitle>
                <CardDescription className="text-healthcare-muted">Varies by location</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="text-left space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-healthcare-muted">Mon - Fri</span>
                    <span className="text-healthcare-text font-medium">7:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-healthcare-muted">Saturday</span>
                    <span className="text-healthcare-text font-medium">8:00 AM - 12:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-healthcare-muted">Sunday</span>
                    <span className="text-healthcare-text font-medium">Closed</span>
                  </div>
                  <p className="text-xs text-healthcare-muted mt-2">*Urgent Care open 7 days with extended hours</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Appointment Booking Form */}
      <section className="section-py bg-healthcare-bg" aria-labelledby="appointment-heading">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="section-header mb-8 text-left max-w-none">
                <span className="section-badge">Book an Appointment</span>
                <h2 id="appointment-heading" className="section-title">Schedule Your Visit</h2>
                <p className="section-subtitle text-left mx-0">
                  Fill out the form and our scheduling team will contact you within 24 hours to confirm your appointment.
                  For urgent needs, call us directly or visit our Urgent Ortho Care walk-in clinic.
                </p>
              </div>

              <Card className="card-base bg-healthcare-surface border-healthcare overflow-hidden">
                <CardHeader className="p-6 border-b border-border">
                  <CardTitle className="text-xl">Appointment Request Form</CardTitle>
                  <CardDescription className="text-healthcare-muted">
                    * Required fields. We'll confirm your appointment by phone or email.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} noValidate aria-label="Appointment booking form">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="firstName" className="label-field">
                          First Name <span className="text-healthcare-error" aria-hidden="true">*</span>
                        </label>
                        <Input
                          id="firstName"
                          name="firstName"
                          type="text"
                          value={formData.firstName}
                          onChange={handleChange}
                          className={errors.firstName ? "border-destructive focus:border-destructive focus:ring-destructive/20" : ""}
                          aria-invalid={errors.firstName ? "true" : "false"}
                          aria-describedby={errors.firstName ? "firstName-error" : undefined}
                          autoComplete="given-name"
                          required
                        />
                        {errors.firstName && (
                          <p id="firstName-error" className="text-sm text-healthcare-error" role="alert">
                            <AlertCircle className="h-3.5 w-3.5 inline-block mr-1" aria-hidden="true" />
                            {errors.firstName}
                          </p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="lastName" className="label-field">
                          Last Name <span className="text-healthcare-error" aria-hidden="true">*</span>
                        </label>
                        <Input
                          id="lastName"
                          name="lastName"
                          type="text"
                          value={formData.lastName}
                          onChange={handleChange}
                          className={errors.lastName ? "border-destructive focus:border-destructive focus:ring-destructive/20" : ""}
                          aria-invalid={errors.lastName ? "true" : "false"}
                          aria-describedby={errors.lastName ? "lastName-error" : undefined}
                          autoComplete="family-name"
                          required
                        />
                        {errors.lastName && (
                          <p id="lastName-error" className="text-sm text-healthcare-error" role="alert">
                            <AlertCircle className="h-3.5 w-3.5 inline-block mr-1" aria-hidden="true" />
                            {errors.lastName}
                          </p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="email" className="label-field">
                          Email <span className="text-healthcare-error" aria-hidden="true">*</span>
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={errors.email ? "border-destructive focus:border-destructive focus:ring-destructive/20" : ""}
                          aria-invalid={errors.email ? "true" : "false"}
                          aria-describedby={errors.email ? "email-error" : undefined}
                          autoComplete="email"
                          required
                        />
                        {errors.email && (
                          <p id="email-error" className="text-sm text-healthcare-error" role="alert">
                            <AlertCircle className="h-3.5 w-3.5 inline-block mr-1" aria-hidden="true" />
                            {errors.email}
                          </p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="phone" className="label-field">
                          Phone <span className="text-healthcare-error" aria-hidden="true">*</span>
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="(555) 123-4567"
                          className={errors.phone ? "border-destructive focus:border-destructive focus:ring-destructive/20" : ""}
                          aria-invalid={errors.phone ? "true" : "false"}
                          aria-describedby={errors.phone ? "phone-error" : undefined}
                          autoComplete="tel"
                          required
                        />
                        {errors.phone && (
                          <p id="phone-error" className="text-sm text-healthcare-error" role="alert">
                            <AlertCircle className="h-3.5 w-3.5 inline-block mr-1" aria-hidden="true" />
                            {errors.phone}
                          </p>
                        )}
                      </div>

                      <div className="space-y-2 sm:col-span-2">
                        <label htmlFor="preferredDate" className="label-field">
                          Preferred Date <span className="text-healthcare-error" aria-hidden="true">*</span>
                        </label>
                        <Input
                          id="preferredDate"
                          name="preferredDate"
                          type="date"
                          value={formData.preferredDate}
                          onChange={handleChange}
                          min={minDate}
                          className={errors.preferredDate ? "border-destructive focus:border-destructive focus:ring-destructive/20" : ""}
                          aria-invalid={errors.preferredDate ? "true" : "false"}
                          aria-describedby={errors.preferredDate ? "preferredDate-error" : undefined}
                          required
                        />
                        {errors.preferredDate && (
                          <p id="preferredDate-error" className="text-sm text-healthcare-error" role="alert">
                            <AlertCircle className="h-3.5 w-3.5 inline-block mr-1" aria-hidden="true" />
                            {errors.preferredDate}
                          </p>
                        )}
                      </div>

                      <div className="space-y-2 sm:col-span-2">
                        <label htmlFor="specialty" className="label-field">
                          Specialty <span className="text-healthcare-error" aria-hidden="true">*</span>
                        </label>
                        <Select
                          value={formData.specialty}
                          onValueChange={(value) => handleChange({ target: { name: "specialty", value } } as React.ChangeEvent<HTMLSelectElement>)}
                        >
                          <SelectTrigger className={errors.specialty ? "border-destructive focus:border-destructive focus:ring-destructive/20" : ""} aria-invalid={errors.specialty ? "true" : "false"}>
                            <SelectValue placeholder="Select a specialty" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Choose a specialty</SelectLabel>
                              {specialties.map((spec) => (
                                <SelectItem key={spec.id} value={spec.id}>
                                  <div className="flex items-center gap-2">
                                    <span aria-hidden="true">{spec.icon}</span>
                                    <span>{spec.name}</span>
                                  </div>
                                </SelectItem>
                              ))}
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                        {errors.specialty && (
                          <p id="specialty-error" className="text-sm text-healthcare-error" role="alert">
                            <AlertCircle className="h-3.5 w-3.5 inline-block mr-1" aria-hidden="true" />
                            {errors.specialty}
                          </p>
                        )}
                      </div>

                      <div className="space-y-2 sm:col-span-2">
                        <label htmlFor="physician" className="label-field">
                          Preferred Physician (Optional)
                        </label>
                        <Select
                          value={formData.physician}
                          onValueChange={(value) => handleChange({ target: { name: "physician", value } } as React.ChangeEvent<HTMLSelectElement>)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select a physician or leave blank for first available" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Choose a physician</SelectLabel>
                              <SelectItem value="">First Available</SelectItem>
                              {filteredPhysicians.map((physician) => (
                                <SelectItem key={physician.id} value={physician.id}>
                                  <div className="flex flex-col gap-0.5">
                                    <span className="font-medium">{physician.name}, {physician.title}</span>
                                    <span className="text-xs text-muted-foreground">{physician.specialties.join(", ")}</span>
                                  </div>
                                </SelectItem>
                              ))}
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2 sm:col-span-2">
                        <div className="flex items-center gap-3">
                          <input
                            type="checkbox"
                            id="isNewPatient"
                            name="isNewPatient"
                            checked={formData.isNewPatient}
                            onChange={(e) => setFormData((prev) => ({ ...prev, isNewPatient: e.target.checked }))}
                            className="h-4 w-4 rounded border-input text-primary focus:ring-primary focus:ring-2"
                          />
                          <label htmlFor="isNewPatient" className="text-sm font-medium text-healthcare-text cursor-pointer">
                            I am a new patient
                          </label>
                        </div>
                      </div>

                      <div className="space-y-2 sm:col-span-2">
                        <label htmlFor="message" className="label-field">
                          Reason for Visit <span className="text-healthcare-error" aria-hidden="true">*</span>
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={5}
                          placeholder="Please describe your symptoms, injury, or reason for seeking care..."
                          className={errors.message ? "border-destructive focus:border-destructive focus:ring-destructive/20" : ""}
                          aria-invalid={errors.message ? "true" : "false"}
                          aria-describedby={errors.message ? "message-error" : "message-hint"}
                          required
                        />
                        {errors.message ? (
                          <p id="message-error" className="text-sm text-healthcare-error" role="alert">
                            <AlertCircle className="h-3.5 w-3.5 inline-block mr-1" aria-hidden="true" />
                            {errors.message}
                          </p>
                        ) : (
                          <p id="message-hint" className="text-sm text-healthcare-muted">
                            Include details like: when symptoms started, what makes them better/worse, previous treatments
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-border">
                      <Button
                        type="submit"
                        className="w-full sm:w-auto px-8 py-4 text-base gap-3"
                        disabled={isSubmitting}
                        aria-busy={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
                            Submitting...
                          </>
                        ) : (
                          <>
                            <Calendar className="h-5 w-5" aria-hidden="true" />
                            Submit Appointment Request
                          </>
                        )}
                      </Button>
                      <p className="mt-4 text-sm text-healthcare-muted text-center sm:text-left">
                        By submitting, you agree to our{" "}
                        <a href="#" className="underline hover:text-healthcare-trust">Privacy Policy</a>
                        {" "}and consent to be contacted via phone, email, or text.
                      </p>
                    </div>
                  </form>

                  {submitStatus === "success" && (
                    <div className="mt-6 p-4 rounded-xl bg-healthcare-success/10 border border-healthcare-success/30 animate-fade-in-up" role="status" aria-live="polite">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-healthcare-success flex-shrink-0 mt-0.5" aria-hidden="true" />
                        <div>
                          <h3 className="font-semibold text-healthcare-success">Request Submitted Successfully!</h3>
                          <p className="text-sm text-healthcare-muted mt-1">
                            Our scheduling team will contact you within 24 hours to confirm your appointment.
                            You can also call us directly at (555) 123-4567 for immediate assistance.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            <div className="hidden lg:block">
              <Card className="card-base bg-healthcare-surface border-healthcare h-full sticky top-24">
                <CardHeader className="p-6 border-b border-border">
                  <div className="flex items-center gap-3">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-healthcare-trust-light text-healthcare-trust">
                      <Stethoscope className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Why Choose OrthoPedic Clinic?</CardTitle>
                      <CardDescription className="text-healthcare-muted">Fellowship-trained specialists</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  {[
                    { icon: CheckCircle, color: "text-healthcare-healing", title: "Fellowship-Trained Experts", desc: "All physicians completed advanced subspecialty fellowships at top institutions" },
                    { icon: CheckCircle, color: "text-healthcare-healing", title: "Comprehensive Care", desc: "7 subspecialty centers under one roof — from diagnosis to rehabilitation" },
                    { icon: CheckCircle, color: "text-healthcare-healing", title: "Advanced Technology", desc: "Robotic surgery, navigation systems, and on-site advanced imaging" },
                    { icon: CheckCircle, color: "text-healthcare-healing", title: "Enhanced Recovery", desc: "Evidence-based protocols for faster recovery and better outcomes" },
                    { icon: CheckCircle, color: "text-healthcare-healing", title: "Convenient Access", desc: "8 locations, extended hours, same-day urgent care, and telehealth options" },
                    { icon: CheckCircle, color: "text-healthcare-healing", title: "Patient-Centered", desc: "Shared decision-making, personalized treatment plans, and continuous support" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className={`inline-flex items-center justify-center w-8 h-8 rounded-full bg-healthcare-healing/10 ${item.color} flex-shrink-0`}>
                        <item.icon className="h-4 w-4" aria-hidden="true" />
                      </div>
                      <div>
                        <h4 className="font-medium text-healthcare-text">{item.title}</h4>
                        <p className="text-sm text-healthcare-muted">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="section-py bg-healthcare-surface border-y border-border" aria-labelledby="faq-heading">
        <div className="container-custom">
          <div className="section-header mb-12">
            <h2 id="faq-heading" className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">Quick answers to common questions about appointments, insurance, and your visit</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`} className="border border-border rounded-xl overflow-hidden bg-healthcare-bg">
                  <AccordionTrigger className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 text-left font-medium text-healthcare-text hover:bg-healthcare-surface transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                    <span>{faq.question}</span>
                    <ChevronDown className="h-5 w-5 text-healthcare-muted transition-transform duration-200 data-[state=open]:rotate-180 flex-shrink-0" aria-hidden="true" />
                  </AccordionTrigger>
                  <AccordionContent className="px-5 pb-5 text-healthcare-muted leading-relaxed animate-fade-in">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="mt-10 text-center">
            <Button asChild variant="outline" className="gap-2">
              <Link href="/patient-resources/faqs" className="flex items-center gap-2">
                View All FAQs
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section id="locations" className="section-py bg-healthcare-bg" aria-labelledby="locations-heading">
        <div className="container-custom">
          <div className="section-header mb-12">
            <h2 id="locations-heading" className="section-title">Our Locations</h2>
            <p className="section-subtitle">8 convenient locations across the metropolitan area — find the one closest to you</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((location, index) => (
              <article
                key={location.id}
                className="card-base card-hover bg-healthcare-surface border-healthcare overflow-hidden flex flex-col animate-fade-in-up"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="relative aspect-video overflow-hidden bg-healthcare-trust-light flex-shrink-0">
                  <div className="absolute inset-0 flex items-center justify-center text-healthcare-trust-light">
                    <Building className="h-12 w-12" aria-hidden="true" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" aria-hidden="true" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <Badge className="bg-healthcare-trust/90 backdrop-blur-sm text-white border-0" variant="default">
                      {location.services[0]}
                    </Badge>
                  </div>
                </div>
                <CardHeader className="p-5 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-healthcare-text mb-2">{location.name}</h3>
                  <address className="text-sm text-healthcare-muted not-italic mb-4 line-clamp-3">
                    {location.address}<br />
                    {location.city}, {location.state} {location.zip}
                  </address>
                  <div className="space-y-2 text-sm text-healthcare-muted mb-4 border-t border-border pt-4">
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
                      <a href={`tel:${location.phone.replace(/\D/g, "")}`} className="hover:text-healthcare-trust transition-colors">
                        {location.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
                      <span>{location.hours[0].day}: {location.hours[0].hours}</span>
                    </div>
                    {location.hours[1] && (
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
                        <span>{location.hours[1].day}: {location.hours[1].hours}</span>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-1.5 mb-4" role="list" aria-label="Services offered">
                    {location.services.slice(0, 3).map((service) => (
                      <Badge key={service} variant="secondary" className="text-xs">
                        {service}
                      </Badge>
                    ))}
                    {location.services.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{location.services.length - 3} more
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="px-5 pb-5 pt-0 space-y-3">
                  <div className="flex items-center gap-2 text-sm text-healthcare-muted border-t border-border pt-3">
                    <MapPin className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
                    <span className="truncate">{location.address}, {location.city}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-healthcare-muted">
                    <span className="w-4 h-4 rounded-full bg-healthcare-trust-light text-healthcare-trust flex items-center justify-center text-[10px] font-bold flex-shrink-0" aria-label="Parking available">
                      P
                    </span>
                    <span className="truncate">{location.parking}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-healthcare-muted">
                    <span className="w-4 h-4 rounded-full bg-healthcare-healing-light text-healthcare-healing flex items-center justify-center text-[10px] font-bold flex-shrink-0" aria-label="Public transport available">
                      T
                    </span>
                    <span className="truncate">{location.publicTransport}</span>
                  </div>
                  <div className="flex gap-3 pt-2">
                    <Button asChild variant="outline" className="flex-1 gap-2 justify-center">
                      <a
                        href={`https://maps.google.com/?q=${encodeURIComponent(`${location.address}, ${location.city}, ${location.state} ${location.zip}`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 w-full"
                      >
                        <MapPin className="h-4 w-4" aria-hidden="true" />
                        Directions
                      </a>
                    </Button>
                    <Button asChild variant="ghost" className="gap-2">
                      <a
                        href={`https://maps.google.com/?q=${encodeURIComponent(`${location.address}, ${location.city}, ${location.state} ${location.zip}`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                        aria-label={`View ${location.name} on Google Maps`}
                      >
                        <ExternalLink className="h-4 w-4" aria-hidden="true" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="secondary" className="gap-2 px-8 py-3">
              <Link href="/locations" className="flex items-center gap-2">
                View All Locations & Details
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Emergency / Urgent Care CTA */}
      <section className="section-py bg-healthcare-cta" aria-labelledby="urgent-heading">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-healthcare-warmth opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-healthcare-warmth" />
              </span>
              <span className="text-sm font-medium text-healthcare-cta-foreground">Urgent Ortho Care: Open 7 Days a Week</span>
            </div>
            <h2 id="urgent-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-healthcare-cta-foreground mb-6">
              Need Care Today?
            </h2>
            <p className="text-lg text-healthcare-cta-light mb-10 max-w-2xl mx-auto">
              Our Urgent Ortho Care walk-in clinic treats acute injuries — fractures, sprains, sports injuries —
              with on-site X-ray, casting, and same-day specialist referrals. No appointment needed.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="w-full sm:w-auto px-8 py-4 text-base gap-3 bg-white text-healthcare-cta hover:bg-healthcare-cta-light">
                <Link href="tel:+15551234574" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" aria-hidden="true" />
                  Call Urgent Care: (555) 123-4574
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto px-8 py-4 text-base gap-3 border-white text-white hover:bg-white/10">
                <Link href="/locations/urgent-ortho" className="flex items-center gap-2">
                  View Urgent Care Details
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </Link>
              </Button>
            </div>
            <p className="mt-6 text-sm text-healthcare-cta-light">
              <strong>Medical Emergency?</strong> Call 911 or go to the nearest emergency department.
            </p>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="section-py bg-healthcare-surface border-t border-border" aria-labelledby="footer-cta-heading">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="text-center lg:text-left">
              <h2 id="footer-cta-heading" className="text-2xl sm:text-3xl font-bold text-healthcare-text mb-3">
                Ready to Start Your Recovery?
              </h2>
              <p className="text-healthcare-muted">
                Schedule your appointment today and take the first step toward better orthopedic health.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button asChild size="lg" className="w-full sm:w-auto px-8 py-4 text-base gap-3">
                <Link href="#appointment" className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" aria-hidden="true" />
                  Book Appointment
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto px-8 py-4 text-base gap-3">
                <Link href="tel:+15551234567" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" aria-hidden="true" />
                  Call (555) 123-4567
                </Link>
              </Button>
            </div>
            <div className="flex flex-wrap items-center justify-center lg:justify-end gap-6 text-sm text-healthcare-muted">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" aria-hidden="true" />
                <span>Mon-Fri 7AM-6PM</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                <span>8 Locations</span>
              </div>
              <div className="flex items-center gap-2">
                <Stethoscope className="h-4 w-4" aria-hidden="true" />
                <span>6 Specialties</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}