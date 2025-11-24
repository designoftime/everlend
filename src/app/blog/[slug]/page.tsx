import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, User, Clock, Share2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { BlogCard } from "@/components/blog/blog-card";
import { blogPosts } from "@/data/blog";

// Generate static params for all blog posts
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: `${post.title} | EverLend Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="flex flex-col">
      {/* Article Header */}
      <div className="bg-section pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5" />
        <Container className="max-w-4xl relative z-10 text-center">
          <Link href="/blog" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Insights
          </Link>
          
          <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground mb-8">
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-bold text-xs uppercase tracking-wider">
              {post.category}
            </span>
            <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {post.date}</span>
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 5 min read</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-primary font-serif leading-tight mb-8">
            {post.title}
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            {post.excerpt}
          </p>

          <div className="flex items-center justify-center gap-3 mt-8">
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
              <User className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="font-bold text-primary text-sm">{post.author}</div>
              <div className="text-xs text-muted-foreground">Mortgage Expert</div>
            </div>
          </div>
        </Container>
      </div>

      {/* Article Content */}
      <Section>
        <Container className="max-w-3xl">
          <article 
            className="prose prose-lg prose-green max-w-none prose-headings:font-serif prose-headings:text-primary prose-p:text-gray-600 prose-li:text-gray-600"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          <div className="mt-16 pt-8 border-t border-border flex justify-between items-center">
            <div className="text-sm font-medium text-muted-foreground">
              Share this article
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" className="rounded-full">
                <Share2 className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Container>
      </Section>
      
      {/* Related Posts */}
      <Section className="bg-section">
        <Container>
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-primary font-serif mb-2">More Insights</h2>
              <p className="text-muted-foreground">Continue reading about mortgage strategies.</p>
            </div>
            <Button variant="link" asChild className="text-accent hidden md:inline-flex">
              <Link href="/blog">View All Articles</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts
              .filter(p => p.slug !== post.slug)
              .slice(0, 3)
              .map((relatedPost) => (
                <BlogCard key={relatedPost.slug} post={relatedPost} />
              ))}
          </div>
        </Container>
      </Section>
    </div>
  );
}
