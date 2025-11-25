"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Container } from "@/components/ui/container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Hammer, TrendingUp, CreditCard, Plane } from "lucide-react";

const items = [
  {
    id: 1,
    title: "Renovate & Revitalize",
    description: "Turn your current house into your dream home. Use your equity to fund major renovations, add a suite, or modernize your living space.",
    icon: Hammer,
    color: "bg-orange-100 text-orange-600",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Invest for the Future",
    description: "Leverage your home's value to build wealth. Purchase an investment property, fund a business, or top up your retirement savings.",
    icon: TrendingUp,
    color: "bg-green-100 text-green-600",
    image: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Consolidate Debt",
    description: "Lower your monthly payments by consolidating high-interest debt into your mortgage at a much lower rate.",
    icon: CreditCard,
    color: "bg-blue-100 text-blue-600",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Life Experiences",
    description: "Fund a dream vacation, pay for a wedding, or cover tuition costs. Your equity can help you enjoy life's big moments.",
    icon: Plane,
    color: "bg-purple-100 text-purple-600",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2000&auto=format&fit=crop"
  }
];

export function Scrollytelling() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section ref={containerRef} className="bg-page py-20 md:py-32">
      <Container>
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          {/* Sticky Left Content */}
          <div className="lg:w-1/3 lg:h-[calc(100vh-100px)] lg:sticky lg:top-24 flex flex-col justify-center mb-12 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary leading-tight">
                Where can your <br />
                <span className="text-accent">money go?</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Your home equity is a versatile financial tool. Here are just a few ways our clients use their mortgage to achieve their goals.
              </p>
              
              {/* Progress Indicator */}
              <div className="h-1 w-full bg-gray-100 rounded-full mt-8 overflow-hidden">
                <motion.div 
                  className="h-full bg-primary"
                  style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
                />
              </div>
            </motion.div>
          </div>

          {/* Scrolling Right Content */}
          <div className="lg:w-2/3 space-y-24 lg:space-y-32 pb-24">
            {items.map((item, index) => (
              <ScrollItem key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function ScrollItem({ item, index }: { item: typeof items[0], index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20%" }}
      transition={{ duration: 0.6 }}
    >
      <Card variant="glass" className="overflow-hidden border-none shadow-2xl">
        <div className="grid md:grid-cols-2 gap-0">
          <div className="h-64 md:h-auto relative overflow-hidden group">
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 md:aspect-3/4 aspect-square"
            />
          </div>
          <div className="p-8 flex flex-col justify-center">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${item.color}`}>
              <item.icon className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-3">{item.title}</h3>
            <p className="text-muted-foreground leading-relaxed">
              {item.description}
            </p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
