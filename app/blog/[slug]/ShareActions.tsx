"use client";

import { Copy, Share, ExternalLink, MessageSquareShare } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ShareActionsProps {
  articleUrl: string;
  shareText: string;
  shareUrl: string;
}

export function ShareActions({ articleUrl, shareText, shareUrl }: ShareActionsProps) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-healthcare-bg border border-border text-healthcare-text hover:bg-healthcare-trust-light hover:border-healthcare-trust hover:text-healthcare-trust transition-all group"
        aria-label="Share on Facebook"
      >
        <span className="flex h-5 w-5" aria-hidden="true"><Share className="h-5 w-5" /></span>
        <span className="text-sm font-medium">Facebook</span>
      </a>
      <a
        href={`https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-healthcare-bg border border-border text-healthcare-text hover:bg-healthcare-trust-light hover:border-healthcare-trust hover:text-healthcare-trust transition-all group"
        aria-label="Share on Twitter"
      >
        <span className="flex h-5 w-5" aria-hidden="true"><Share className="h-5 w-5" /></span>
        <span className="text-sm font-medium">Twitter</span>
      </a>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-healthcare-bg border border-border text-healthcare-text hover:bg-healthcare-trust-light hover:border-healthcare-trust hover:text-healthcare-trust transition-all group"
        aria-label="Share on LinkedIn"
      >
        <span className="flex h-5 w-5" aria-hidden="true"><ExternalLink className="h-5 w-5" /></span>
        <span className="text-sm font-medium">LinkedIn</span>
      </a>
      <a
        href={`mailto:?subject=${shareText}&body=Check out this article: ${shareUrl}`}
        className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-healthcare-bg border border-border text-healthcare-text hover:bg-healthcare-trust-light hover:border-healthcare-trust hover:text-healthcare-trust transition-all group"
        aria-label="Share via Email"
      >
        <span className="flex h-5 w-5" aria-hidden="true"><MessageSquareShare className="h-5 w-5" /></span>
        <span className="text-sm font-medium">Email</span>
      </a>
      <Button
        variant="outline"
        size="sm"
        className="gap-2"
        onClick={async () => {
          try {
            await navigator.clipboard.writeText(articleUrl);
          } catch {
            // Fallback handled by browser
          }
        }}
      >
        <Copy className="h-4 w-4" aria-hidden="true" />
        Copy Link
      </Button>
    </div>
  );
}