import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, User, Share2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
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
      <div className="bg-everlend-light py-12 md:py-20">
        <Container className="max-w-4xl">
          <Link href="/blog" className="inline-flex items-center text-sm text-gray-500 hover:text-everlend-green mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
          </Link>
          
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
            <span className="bg-everlend-green/10 text-everlend-green px-3 py-1 rounded-full font-medium text-xs uppercase tracking-wider">
              {post.category}
            </span>
            <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {post.date}</span>
            <span className="flex items-center gap-1"><User className="w-4 h-4" /> {post.author}</span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 font-serif leading-tight mb-6">
            {post.title}
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            {post.excerpt}
          </p>
        </Container>
      </div>

      <Section>
        <Container className="max-w-3xl">
          <article 
            className="prose prose-lg prose-green max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          <div className="mt-12 pt-8 border-t border-gray-200 flex justify-between items-center">
            <div className="text-sm text-gray-500">
              Share this article:
            </div>
            <div className="flex gap-2">
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0 rounded-full">
                <Share2 className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Container>
      </Section>
      
      <Section className="bg-everlend-light">
        <Container>
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-everlend-green font-serif">More Insights</h2>
            <Link href="/blog" className="text-everlend-gold font-medium hover:underline">View All</Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts
              .filter(p => p.slug !== post.slug)
              .slice(0, 3)
              .map((relatedPost) => (
                <Link key={relatedPost.slug} href={`/blog/${relatedPost.slug}`} className="group block">
                  <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow h-full">
                    <div className="text-xs text-gray-500 mb-2">{relatedPost.date}</div>
                    <h3 className="font-bold text-gray-900 group-hover:text-everlend-green transition-colors mb-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </Container>
      </Section>
    </div>
  );
}
