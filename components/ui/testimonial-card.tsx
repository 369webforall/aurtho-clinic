import * as React from "react";
import { QuoteIcon, UserCheckIcon, StarIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role?: string;
  rating?: number;
  className?: string;
}

export function TestimonialCard({
  quote,
  author,
  role,
  rating = 5,
  className,
}: TestimonialCardProps) {
  const stars = Array.from({ length: 5 }, (_, i) => i < rating ? <StarIcon key={i} className="h-4 w-4 text-healthcare-primary" /> : <StarIcon key={i} className="h-4 w-4 stroke-healthcare-primary text-current" />);

  return (
    <div className={`rounded-xl border border-healthcare-border p-6 sm:p-8 ${className || ""}`}>
      <div className="flex items-start gap-4">
        <QuoteIcon className="h-6 w-6 text-healthcare-primary flex-shrink-0" />
        <div className="flex-1">
          <p className="text-healthcare-foreground leading-relaxed line-clamp-3">
            {quote}
          </p>
        </div>
      </div>
      <div className="mt-5 pt-5 border-t border-healthcare-border flex items-center gap-2">
        <UserCheckIcon className="h-4 w-4 text-healthcare-primary flex-shrink-0" />
        <span className="text-healthcare-secondary font-medium">
          {author}
        </span>
        {role && (
          <span className="text-healthcare-muted text-xs ml-1">
            {role}
          </span>
        )}
        {rating > 0 && (
          <div className="ml-2">
            {stars}
          </div>
        )}
      </div>
    </div>
  );
}