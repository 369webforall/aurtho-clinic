import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ChevronRight,
  Calendar,
  Clock,
  User,
  Tag,
  Share2,
  ArrowLeft,
  ChevronDown,
  ArrowUpRight,
  Check,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ShareActions } from "./ShareActions";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  blogPosts,
  getBlogPostBySlug,
  type BlogPost,
} from "@/lib/data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const post = getBlogPostBySlug(resolvedParams.slug);

  if (!post) {
    return {
      title: "Article Not Found - AurTho Clinic Blog",
    };
  }

  const baseUrl = "https://aurtho-clinic.com";
  const articleUrl = `${baseUrl}/blog/${post.slug}`;

  return {
    title: `${post.title} - AurTho Clinic Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: articleUrl,
      siteName: "AurTho Clinic",
      publishedTime: post.publishDate,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
    other: {
      "article:published_time": post.publishDate,
      "article:author": post.author,
      "article:section": post.category,
      "article:tag": post.tags.join(", "),
    },
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogArticlePage({ params }: Props) {
  const resolvedParams = await params;
  const post = getBlogPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  const baseUrl = "https://aurtho-clinic.com";
  const articleUrl = `${baseUrl}/blog/${post.slug}`;
  const shareText = encodeURIComponent(post.title);
  const shareUrl = encodeURIComponent(articleUrl);

  return (
    <article className="bg-healthcare-bg min-h-screen">
      {/* Breadcrumb */}
      <nav
        className="bg-healthcare-surface border-b border-border"
        aria-label="Breadcrumb"
      >
        <div className="container-custom py-4">
          <ol className="flex items-center gap-2 text-sm" role="list">
            <li>
              <Link
                href="/"
                className="text-healthcare-muted hover:text-healthcare-trust transition-colors flex items-center gap-1"
              >
                <span>Home</span>
                <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="text-healthcare-muted hover:text-healthcare-trust transition-colors flex items-center gap-1"
              >
                <span>Blog</span>
                <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </li>
            <li>
              <span className="text-healthcare-text truncate max-w-[300px] block" aria-current="page">
                {post.title}
              </span>
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero / Article Header */}
      <header className="py-16 sm:py-24 bg-healthcare-surface border-b border-border">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Category & Meta Badges */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <Link
                href={`/blog?category=${encodeURIComponent(post.category)}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-healthcare-trust-light text-healthcare-trust text-sm font-medium hover:bg-healthcare-trust/20 transition-colors"
              >
                <Tag className="h-3.5 w-3.5" aria-hidden="true" />
                {post.category}
              </Link>
              {post.featured && (
                <Badge className="bg-healthcare-warmth-light text-healthcare-warmth border-0" variant="default">
                  Featured Article
                </Badge>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-healthcare-text mb-6 leading-tight text-balance">
              {post.title}
            </h1>

            {/* Author & Meta */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-healthcare-muted mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-healthcare-trust-light flex items-center justify-center text-healthcare-trust font-medium text-lg">
                  {post.author.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <p className="font-medium text-healthcare-text">{post.author}</p>
                  <p className="text-xs text-healthcare-muted">
                    {post.category} Specialist
                  </p>
                </div>
              </div>
              <Separator orientation="vertical" className="h-8" />
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" aria-hidden="true" />
                <time dateTime={post.publishDate}>
                  {new Date(post.publishDate).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" aria-hidden="true" />
                {post.readTime}
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2" role="list" aria-label="Article tags">
              {post.tags.map((tag) => (
                <li key={tag}>
                  <Badge variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                </li>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <div className="container-custom py-16 lg:py-24">
        <div className="grid lg:grid-cols-[1fr_300px] gap-12 lg:gap-16">
          {/* Main Content */}
          <div className="max-w-3xl">
            {/* Featured Image Placeholder */}
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-healthcare-trust-light mb-10">
              <div className="absolute inset-0 flex items-center justify-center text-healthcare-trust-light">
                <span className="text-8xl" role="img" aria-label={post.category}>{post.category === "Joint Replacement" ? "🦴" : post.category === "Sports Medicine" ? "🏃" : post.category === "Spine Care" ? "🦴" : post.category === "Hand & Wrist" ? "🤲" : post.category === "Foot & Ankle" ? "🦶" : "👶"}</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" aria-hidden="true" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <Badge className="bg-black/70 backdrop-blur-sm text-white border-white/20" variant="default">
                  {post.category}
                </Badge>
              </div>
            </div>

            {/* Article Body */}
            <div className="prose prose-healthcare max-w-none" role="article">
              {/* Introduction */}
              <div className="text-xl text-healthcare-muted leading-relaxed mb-10 pb-8 border-b border-border">
                {post.excerpt}
              </div>

              {/* Content Sections - using structured content from the data */}
              <div className="space-y-12">
                {Array.isArray(post.content) && post.content.map((section: { type: string; content: string | string[]; alt?: string }, index) => (
                  <section key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                    {section.type === "heading" && (
                      <h2 className="text-2xl sm:text-3xl font-bold text-healthcare-text mb-4">{section.content}</h2>
                    )}
                    {section.type === "subheading" && (
                      <h3 className="text-xl font-semibold text-healthcare-text mb-3 mt-8">{section.content}</h3>
                    )}
                    {section.type === "paragraph" && (
                      <p className="text-healthcare-muted leading-relaxed mb-6 text-base">{section.content}</p>
                    )}
                    {section.type === "bulletList" && Array.isArray(section.content) && (
                      <ul className="space-y-3 ml-6 list-disc text-healthcare-muted leading-relaxed">
                        {section.content.map((item: string, i: number) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    )}
                    {section.type === "numberedList" && Array.isArray(section.content) && (
                      <ol className="space-y-3 ml-6 list-decimal text-healthcare-muted leading-relaxed">
                        {section.content.map((item: string, i: number) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ol>
                    )}
                    {section.type === "callout" && Array.isArray(section.content) && (
                      <div className="p-6 rounded-xl bg-healthcare-trust-light border border-healthcare-trust/20 border-l-4 border-healthcare-trust">
                        <div className="flex gap-4">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-healthcare-trust flex items-center justify-center text-white">
                            <Check className="h-4 w-4" aria-hidden="true" />
                          </div>
                          <p className="text-healthcare-text text-base leading-relaxed pt-0.5">{section.content}</p>
                        </div>
                      </div>
                    )}
                    {section.type === "image" && (
                      <div className="relative aspect-video rounded-xl overflow-hidden bg-healthcare-bg">
                        <div className="absolute inset-0 flex items-center justify-center text-healthcare-muted">
                          <span className="text-6xl" role="img" aria-label={section.alt || "Medical illustration"}>📷</span>
                        </div>
                        <figcaption className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white text-sm">
                          {section.alt || "Medical illustration"}
                        </figcaption>
                      </div>
                    )}
                  </section>
                ))}

                {/* Key Takeaways */}
                {post.keyTakeaways && (
                  <section className="bg-healthcare-surface rounded-2xl p-8 border border-border mt-12">
                    <h2 className="text-2xl font-bold text-healthcare-text mb-6 flex items-center gap-3">
                      <span className="w-8 h-8 rounded-xl bg-healthcare-trust-light flex items-center justify-center text-healthcare-trust">
                        <Check className="h-5 w-5" aria-hidden="true" />
                      </span>
                      Key Takeaways
                    </h2>
                    <ul className="space-y-4" role="list">
                      {post.keyTakeaways.map((takeaway, index) => (
                        <li key={index} className="flex gap-4 text-healthcare-muted leading-relaxed">
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-healthcare-trust-light flex items-center justify-center text-healthcare-trust mt-0.5">
                            <Check className="h-3.5 w-3.5" aria-hidden="true" />
                          </span>
                          <span>{takeaway}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                )}
              </div>

              {/* Share Section */}
              <div className="mt-16 pt-8 border-t border-border">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-healthcare-text mb-2">Share this article</h3>
                    <p className="text-sm text-healthcare-muted">Help others learn about orthopedic health</p>
                  </div>
                  <ShareActions articleUrl={articleUrl} shareText={shareText} shareUrl={shareUrl} />
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="hidden lg:block">
            {/* Author Card */}
            <Card className="card-base sticky top-24 mb-8">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-healthcare-trust-light flex items-center justify-center text-healthcare-trust font-bold text-xl flex-shrink-0">
                    {post.author.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-healthcare-text">{post.author}</h3>
                    <p className="text-sm text-healthcare-muted">{post.category} Specialist</p>
                    <p className="text-sm text-healthcare-muted mt-1">
                      Fellowship-trained in {post.category.toLowerCase()}
                    </p>
                  </div>
                </div>
                <Button asChild variant="outline" className="mt-4 w-full gap-2">
                  <Link href={`/physicians/${post.author.toLowerCase().replace("dr. ", "").replace(" ", "-")}`} className="flex items-center gap-2 w-full">
                    View Profile
                    <ChevronRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Related Posts */}
            <Card className="card-base sticky top-24 mb-8">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg">Related Articles</CardTitle>
                <CardDescription className="text-xs">More from {post.category}</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-4">
                  {relatedPosts.map((relatedPost) => (
                    <Link
                      key={relatedPost.slug}
                      href={`/blog/${relatedPost.slug}`}
                      className="flex gap-3 group block p-2 rounded-lg hover:bg-healthcare-bg transition-colors"
                    >
                      <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-healthcare-trust-light flex-shrink-0">
                        <div className="absolute inset-0 flex items-center justify-center text-healthcare-trust-light">
                          <span className="text-2xl" role="img" aria-label={relatedPost.category}>{relatedPost.category === "Joint Replacement" ? "🦴" : relatedPost.category === "Sports Medicine" ? "🏃" : relatedPost.category === "Spine Care" ? "🦴" : relatedPost.category === "Hand & Wrist" ? "🤲" : relatedPost.category === "Foot & Ankle" ? "🦶" : "👶"}</span>
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-healthcare-text group-hover:text-healthcare-trust transition-colors line-clamp-2 text-sm mb-1">
                          {relatedPost.title}
                        </h4>
                        <div className="flex items-center gap-2 text-xs text-healthcare-muted">
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" aria-hidden="true" />
                            {relatedPost.readTime}
                          </span>
                        </div>
                      </div>
                      <ArrowRight className="h-4 w-4 text-healthcare-muted group-hover:text-healthcare-trust transition-colors flex-shrink-0 mt-1" aria-hidden="true" />
                    </Link>
                  ))}
                </div>
                {relatedPosts.length === 0 && (
                  <p className="text-sm text-healthcare-muted text-center py-4">
                    No related articles found.
                  </p>
                )}
              </CardContent>
            </Card>

            {/* CTA Card */}
            <Card className="card-base sticky top-24 bg-healthcare-trust text-white border-0">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-4">
                  <Stethoscope className="h-7 w-7" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold mb-2">Need Expert Care?</h3>
                <p className="text-healthcare-trust-light mb-6 text-sm">
                  Schedule a consultation with our {post.category.toLowerCase()} specialists.
                </p>
                <Button asChild size="lg" className="w-full gap-2 bg-white text-healthcare-trust hover:bg-healthcare-trust-light px-6 py-3">
                  <Link href="/contact" className="flex items-center gap-2 w-full">
                    Book Appointment
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
                <p className="mt-4 text-xs text-healthcare-trust-light">
                  Same-week appointments often available
                </p>
              </CardContent>
            </Card>
          </aside>
        </div>
      </div>

      {/* Related Articles Section (Mobile) */}
      {relatedPosts.length > 0 && (
        <section className="bg-healthcare-surface border-y border-border py-16 lg:hidden" aria-labelledby="related-heading">
          <div className="container-custom">
            <h2 id="related-heading" className="section-title text-center mb-10">Related Articles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {relatedPosts.map((relatedPost) => (
                <article key={relatedPost.slug} className="card-base card-hover bg-healthcare-bg border-healthcare overflow-hidden h-full flex flex-col">
                  <Link href={`/blog/${relatedPost.slug}`} className="block h-full flex flex-col">
                    <div className="relative aspect-video overflow-hidden bg-healthcare-trust-light flex-shrink-0">
                      <div className="absolute inset-0 flex items-center justify-center text-healthcare-trust-light">
                        <span className="text-4xl" role="img" aria-label={relatedPost.category}>{relatedPost.category === "Joint Replacement" ? "🦴" : relatedPost.category === "Sports Medicine" ? "🏃" : relatedPost.category === "Spine Care" ? "🦴" : relatedPost.category === "Hand & Wrist" ? "🤲" : relatedPost.category === "Foot & Ankle" ? "🦶" : "👶"}</span>
                      </div>
                    </div>
                    <CardHeader className="p-5 flex-1 flex flex-col">
                      <div className="flex items-center gap-2 text-xs text-healthcare-muted mb-3">
                        <Badge variant="outline" className="text-white border-white/30 bg-white/10 backdrop-blur-sm">
                          {relatedPost.category}
                        </Badge>
                      </div>
                      <h3 className="text-lg font-bold text-healthcare-text group-hover:text-healthcare-trust transition-colors mb-3 line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm text-healthcare-muted line-clamp-3 flex-1">{relatedPost.excerpt}</p>
                      <div className="flex items-center gap-3 text-xs text-healthcare-muted border-t border-border pt-3">
                        <span className="flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                          {relatedPost.readTime}
                        </span>
                      </div>
                    </CardHeader>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back to Blog CTA */}
      <section className="section-py bg-healthcare-bg" aria-labelledby="back-heading">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 id="back-heading" className="text-2xl sm:text-3xl font-bold text-healthcare-text mb-4">
              Explore More Insights
            </h2>
            <p className="text-healthcare-muted mb-8 max-w-lg mx-auto">
              Browse our full collection of expert articles, recovery guides, and treatment insights.
            </p>
            <Button asChild variant="outline" size="lg" className="px-8 py-3 gap-2">
              <Link href="/blog" className="flex items-center gap-2">
                <ArrowLeft className="h-5 w-5" aria-hidden="true" />
                Back to All Articles
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </article>
  );
}

// Need to import Stethoscope for the sidebar CTA
import { Stethoscope } from "lucide-react";