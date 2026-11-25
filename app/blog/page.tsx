import { Metadata } from "next";
import Link from "next/link";
import {
  ChevronRight,
  Search,
  Filter,
  Calendar,
  Clock,
  User,
  Tag,
  ArrowRight,
  ChevronLeft,
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
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from "@/components/ui/pagination";
import { Separator } from "@/components/ui/separator";
import {
  blogPosts,
  type BlogPost,
} from "@/lib/data";

export const metadata: Metadata = {
  title: "Blog & Insights",
  description: "Expert insights on orthopedic health, recovery guides, injury prevention, and treatment advances from our fellowship-trained specialists at AurTho Clinic.",
  openGraph: {
    title: "Blog & Insights - AurTho Clinic",
    description: "Expert orthopedic insights, recovery guides, and treatment advances from our specialists.",
    type: "website",
  },
};

const POSTS_PER_PAGE = 6;

const categories = [
  "All",
  ...Array.from(new Set(blogPosts.map((post) => post.category))),
];

export default function BlogPage() {
  const featuredPosts = blogPosts.filter((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

  return (
    <>
      {/* Hero Section */}
      <section className="relative hero-gradient overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28" aria-labelledby="blog-hero-heading">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--healthcare-trust-light)_0%,_transparent_70%)] opacity-50" aria-hidden="true" />
        <div className="container-custom relative">
          <div className="max-w-4xl mx-auto text-center">
            <span className="section-badge animate-fade-in-up">Blog & Insights</span>
            <h1 id="blog-hero-heading" className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-healthcare-text mt-4 mb-6 animate-fade-in-up delay-100 text-balance">
              Expert Orthopedic
              <br />
              <span className="gradient-text">Insights & Guides</span>
            </h1>
            <p className="text-lg sm:text-xl text-healthcare-muted max-w-3xl mx-auto animate-fade-in-up delay-200 leading-relaxed">
              Evidence-based articles, recovery guides, and treatment insights from our fellowship-trained specialists.
              Stay informed about the latest advances in orthopedic care.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      {featuredPosts.length > 0 && (
        <section className="section-py bg-healthcare-surface border-b border-border" aria-labelledby="featured-heading">
          <div className="container-custom">
            <div className="section-header mb-12">
              <h2 id="featured-heading" className="section-title">Featured Articles</h2>
              <p className="section-subtitle">Hand-picked insights from our specialists on the topics that matter most</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <article
                  key={post.id}
                  className="card-base card-hover bg-healthcare-surface border-healthcare overflow-hidden flex flex-col h-full animate-fade-in-up"
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  <Link href={`/blog/${post.slug}`} className="block h-full flex flex-col">
                    <div className="relative aspect-video overflow-hidden bg-healthcare-trust-light flex-shrink-0">
                      <div className="absolute inset-0 flex items-center justify-center text-healthcare-trust-light">
                        <span className="text-6xl" aria-hidden="true" role="img" aria-label={post.category}>{post.category === "Joint Replacement" ? "🦴" : post.category === "Sports Medicine" ? "🏃" : post.category === "Spine Care" ? "🦴" : post.category === "Hand & Wrist" ? "🤲" : post.category === "Foot & Ankle" ? "🦶" : "👶"}</span>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" aria-hidden="true" />
                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        <div className="flex flex-wrap items-center gap-2">
                          <Badge className="bg-healthcare-trust/90 backdrop-blur-sm text-white border-0" variant="default">
                            Featured
                          </Badge>
                          <Badge variant="outline" className="text-white border-white/30 bg-white/10 backdrop-blur-sm">
                            {post.category}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <CardHeader className="p-6 flex-1 flex flex-col">
                      <div className="flex flex-wrap items-center gap-3 text-sm text-healthcare-muted mb-4">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                          {new Date(post.publishDate).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                          {post.readTime}
                        </span>
                        <span className="flex items-center gap-1">
                          <User className="h-3.5 w-3.5" aria-hidden="true" />
                          {post.author}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-healthcare-text group-hover:text-healthcare-trust transition-colors mb-3 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-healthcare-muted text-base line-clamp-3 flex-1">{post.excerpt}</p>
                      <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-border">
                        {post.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                        {post.tags.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{post.tags.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent className="px-6 pb-6">
                      <Button asChild variant="outline" className="w-full justify-between gap-2 text-sm">
                        <Link href={`/blog/${post.slug}`} className="flex items-center gap-2 w-full">
                          Read Article
                          <ChevronRight className="h-4 w-4" aria-hidden="true" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts Section */}
      <section className="section-py bg-healthcare-bg" aria-labelledby="posts-heading">
        <div className="container-custom">
          {/* Search & Filter */}
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between mb-12">
            <div className="flex-1 max-w-md">
              <label htmlFor="blog-search" className="sr-only">Search articles</label>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-healthcare-muted" aria-hidden="true" />
                <Input
                  id="blog-search"
                  type="search"
                  placeholder="Search articles, topics, authors..."
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

          <div className="section-header mb-12">
            <h2 id="posts-heading" className="section-title">All Articles</h2>
            <p className="section-subtitle">
              {regularPosts.length} articles covering the full spectrum of orthopedic care
            </p>
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
            {regularPosts.map((post, index) => (
              <article
                key={post.id}
                className="card-base card-hover bg-healthcare-surface border-healthcare overflow-hidden h-full flex flex-col animate-fade-in-up"
                style={{ animationDelay: `${(index + 1) * 50}ms` }}
                role="listitem"
              >
                <Link href={`/blog/${post.slug}`} className="block h-full flex flex-col">
                  <div className="relative aspect-video overflow-hidden bg-healthcare-trust-light flex-shrink-0">
                    <div className="absolute inset-0 flex items-center justify-center text-healthcare-trust-light">
                      <span className="text-5xl" aria-hidden="true" role="img" aria-label={post.category}>{post.category === "Joint Replacement" ? "🦴" : post.category === "Sports Medicine" ? "🏃" : post.category === "Spine Care" ? "🦴" : post.category === "Hand & Wrist" ? "🤲" : post.category === "Foot & Ankle" ? "🦶" : "👶"}</span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" aria-hidden="true" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <Badge variant="outline" className="text-white border-white/30 bg-white/10 backdrop-blur-sm">
                        {post.category}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader className="p-5 flex-1 flex flex-col">
                    <div className="flex flex-wrap items-center gap-3 text-sm text-healthcare-muted mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                        {new Date(post.publishDate).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-healthcare-text group-hover:text-healthcare-trust transition-colors mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-healthcare-muted line-clamp-3 flex-1">{post.excerpt}</p>
                    <div className="flex items-center gap-3 text-xs text-healthcare-muted border-t border-border pt-3">
                      <span className="flex items-center gap-1">
                        <User className="h-3.5 w-3.5" aria-hidden="true" />
                        {post.author}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="px-5 pb-5">
                    <Button asChild variant="outline" className="w-full justify-between gap-2 text-sm">
                      <Link href={`/blog/${post.slug}`} className="flex items-center gap-2 w-full">
                        Read More
                        <ChevronRight className="h-4 w-4" aria-hidden="true" />
                      </Link>
                    </Button>
                  </CardContent>
                </Link>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex justify-center">
            <Pagination className="w-full justify-center">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" aria-label="Previous page" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">5</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" aria-label="Next page" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="section-py bg-healthcare-surface border-y border-border" aria-labelledby="categories-heading">
        <div className="container-custom">
          <div className="section-header mb-12">
            <h2 id="categories-heading" className="section-title">Browse by Specialty</h2>
            <p className="section-subtitle">Explore articles organized by our subspecialty centers</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.slice(1).map((category) => {
              const count = blogPosts.filter((p) => p.category === category).length;
              return (
                <Link
                  key={category}
                  href={`/blog?category=${encodeURIComponent(category)}`}
                  className="card-base card-hover bg-healthcare-bg border-healthcare p-5 text-center group"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-healthcare-trust-light text-healthcare-trust mb-3 group-hover:scale-110 transition-transform">
                    <span className="text-2xl" role="img" aria-label={category}>{category === "Joint Replacement" ? "🦴" : category === "Sports Medicine" ? "🏃" : category === "Spine Care" ? "🦴" : category === "Hand & Wrist" ? "🤲" : category === "Foot & Ankle" ? "🦶" : "👶"}</span>
                  </div>
                  <h3 className="font-semibold text-healthcare-text group-hover:text-healthcare-trust transition-colors mb-1">{category}</h3>
                  <p className="text-sm text-healthcare-muted">{count} article{count !== 1 ? "s" : ""}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-py bg-healthcare-cta" aria-labelledby="newsletter-heading">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 id="newsletter-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-healthcare-cta-foreground mb-6">
              Stay Updated on Orthopedic Health
            </h2>
            <p className="text-lg text-healthcare-cta-light mb-10 max-w-2xl mx-auto">
              Get the latest articles, research updates, and health tips delivered to your inbox. No spam, unsubscribe anytime.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" action="#" method="POST">
              <label htmlFor="email" className="sr-only">Email address</label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-healthcare-cta-light focus:border-white focus:ring-white/20"
                required
              />
              <Button type="submit" className="whitespace-nowrap px-6 py-3 bg-white text-healthcare-cta hover:bg-healthcare-cta-light">
                Subscribe
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </form>
            <p className="mt-4 text-sm text-healthcare-cta-light">
              By subscribing, you agree to our <a href="#" className="underline hover:text-healthcare-cta-foreground">Privacy Policy</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}