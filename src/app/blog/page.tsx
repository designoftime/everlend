"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { PageHero } from "@/components/ui/page-hero";
import { BlogCard } from "@/components/blog/blog-card";
import { blogPosts } from "@/data/blog";

export default function BlogPage() {
  return (
    <div className="flex flex-col">
      <PageHero 
        title="Mortgage Insights" 
        description="Expert advice, market updates, and tips for Canadian homeowners."
        backgroundImage="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      />

      <Section>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
}
