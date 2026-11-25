import * as React from "react";

interface ServiceDetailProps {
  title: string;
  description: string;
  symptoms: string[];
  treatments: string[];
  relatedPhysicians: string[];
}

export function ServiceDetail({
  title,
  description,
  symptoms,
  treatments,
  relatedPhysicians,
}: ServiceDetailProps) {
  return (
    <section className="mb-12">
      <h3 className="text-2xl font-bold text-healthcare-primary mb-4">{title}</h3>
      <p className="text-healthcare-foreground mb-6">{description}</p>

      <div className="mb-4">
        <h4 className="font-medium text-healthcare-foreground mb-2">Common Symptoms</h4>
        <ul className="text-healthcare-foreground text-sm space-y-1">
          {symptoms.map((symptom, index) => (
            <li key={index} className="flex items-start">
              <svg className="h-4 w-4 text-healthcare-primary flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 12l2 2 4-4m5.618-4.016P11.984 4.5l1.414 1.414-2.12 2.12a5.998 5.998 0 0 1-1.06 3.03A6.5 6.5 0 0 1 12 15c-3.396 0-6.078-1.64-7.804-4.308a5.996 5.996 0 0 1-.378-2.97 5.55 5.55 0 0 1 .178-2.054l1.526-1.526a5.987 5.987 0 0 1-1.06-3.03A6.5 6.5 0 0 0 3 9c0-1.555.303-3.03.835-4.308a5.998 5.998 0 0 1 1.06-3.03l2.12-2.12 1.414-1.414L9 12Z" />
              </svg>
              <span>{symptom}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <h4 className="font-medium text-healthcare-foreground mb-2">Treatment Options</h4>
        <ul className="text-healthcare-foreground text-sm space-y-1">
          {treatments.map((treatment, index) => (
            <li key={index} className="flex items-start">
              <svg className="h-4 w-4 text-healthcare-primary flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 12l2 2 4-4m5.618-4.016P11.984 4.5l1.414 1.414-2.12 2.12a5.998 5.998 0 0 1-1.06 3.03A6.5 6.5 0 0 1 12 15c-3.396 0-6.078-1.64-7.804-4.308a5.996 5.996 0 0 1-.378-2.97 5.55 5.55 0 0 1 .178-2.054l1.526-1.526a5.987 5.987 0 0 1-1.06-3.03A6.5 6.5 0 0 0 3 9c0-1.555.303-3.03.835-4.308a5.998 5.998 0 0 1 1.06-3.03l2.12-2.12 1.414-1.414L9 12Z" />
              </svg>
              <span>{treatment}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <h4 className="font-medium text-healthcare-foreground mb-2">Related Physicians</h4>
        <p className="text-healthcare-foreground text-sm">
          {relatedPhysicians.map((physician, index) => (
            <span key={index} className="mr-2 text-healthcare-primary hover:text-healthcare-primary/90 transition-colors cursor-pointer">
              {physician}
              {index < relatedPhysicians.length - 1 && "•"}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}