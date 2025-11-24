"use client";

import Link from "next/link";
import { ArrowRight, Calendar, User, Clock } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { BlogPost } from "@/data/blog";
import { cn } from "@/lib/utils";

interface BlogCardProps {
  post: BlogPost;
  className?: string;
}

export function BlogCard({ post, className }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="group h-full block">
      <Card className={cn("flex flex-col h-full overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1", className)}>
        <div className="h-56 bg-gray-200 relative overflow-hidden">
          {/* Image Placeholder or Actual Image */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-primary/40 mix-blend-multiply z-10" />
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
            style={{ backgroundImage: `url(${post.image || 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'})` }}
          />
          
          <div className="absolute top-4 left-4 z-20">
            <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary uppercase tracking-wider shadow-sm">
              {post.category}
            </span>
          </div>
        </div>
        
        <CardHeader className="pb-2">
          <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
            <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
            <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> 5 min read</span>
          </div>
          <CardTitle className="text-xl font-serif font-bold group-hover:text-primary transition-colors leading-tight">
            {post.title}
          </CardTitle>
        </CardHeader>
        
        <CardContent className="flex-grow">
          <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed">
            {post.excerpt}
          </p>
        </CardContent>
        
        <CardFooter className="pt-0 pb-6">
          <span className="text-accent font-medium flex items-center text-sm group-hover:underline underline-offset-4">
            Read Article 
            <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover:translate-x-1" />
          </span>
        </CardFooter>
      </Card>
    </Link>
  );
}
