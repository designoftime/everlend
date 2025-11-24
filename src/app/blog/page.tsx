"use client";

import Link from "next/link";
import { ArrowRight, Calendar, User } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { PageHero } from "@/components/ui/page-hero";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
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
              <Card key={post.slug} className="flex flex-col h-full hover:shadow-lg transition-shadow border-gray-200 overflow-hidden">
                <div className="h-48 bg-gray-200 relative">
                  {/* Placeholder for blog image */}
                  <div className="absolute inset-0 bg-everlend-green/10 flex items-center justify-center text-everlend-green font-serif text-4xl opacity-20">
                    EL
                  </div>
                  <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full text-xs font-bold text-everlend-green uppercase tracking-wider">
                    {post.category}
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-2">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                    <span className="flex items-center gap-1"><User className="w-3 h-3" /> {post.author}</span>
                  </div>
                  <CardTitle className="text-xl text-gray-900 line-clamp-2 hover:text-everlend-green transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground line-clamp-3 text-sm">{post.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <Link 
                    href={`/blog/${post.slug}`} 
                    className="text-everlend-gold font-medium flex items-center hover:underline text-sm"
                  >
                    Read Article 
                    <ArrowRight className="ml-2 h-3 w-3" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
}
