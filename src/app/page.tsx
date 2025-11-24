"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Clock, Shield, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { services } from "@/data/services";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

import { HomeHero } from "@/components/home/hero";
import { Scrollytelling } from "@/components/home/scrollytelling";
import { DebtViz } from "@/components/home/debt-viz";
import { ProcessTimeline } from "@/components/home/process-timeline";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HomeHero />
      <Scrollytelling />
      <DebtViz />
      <ProcessTimeline />

      {/* Services Highlight */}
      <Section className="bg-everlend-light">
        <Container>
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-everlend-green mb-4 font-serif">Our Services</h2>
              <p className="text-lg text-muted-foreground max-w-xl">
                Tailored mortgage solutions for every stage of your financial journey.
              </p>
            </div>
            <Button variant="outline" className="hidden md:inline-flex" asChild>
              <Link href="/services">View All Services</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 6).map((service, index) => (
              <Card key={service.slug} className="hover:shadow-md transition-shadow border-none shadow-sm">
                <CardHeader>
                  <CardTitle className="text-xl text-everlend-green">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.shortDescription}</p>
                </CardContent>
                <CardFooter>
                  <Link href={`/services/${service.slug}`} className="text-everlend-gold font-medium flex items-center hover:underline">
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Button variant="outline" asChild>
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </Container>
      </Section>



      {/* CTA Section */}
      <Section className="bg-everlend-green text-white">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold font-serif">Ready to move forward?</h2>
              <p className="text-xl text-gray-200">
                Let’s find the perfect mortgage solution for you today.
              </p>
            </div>
            <div className="flex gap-4">
              <Button size="lg" className="bg-everlend-gold hover:bg-everlend-gold/90 text-white border-none" asChild>
                <Link href="/contact">Get Started Now</Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
