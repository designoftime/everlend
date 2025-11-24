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

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-everlend-green text-white">
        <div className="absolute inset-0 z-0">
          {/* Placeholder for video/image - using a gradient for now */}
          <div className="absolute inset-0 bg-gradient-to-br from-everlend-green via-[#0a2a20] to-black opacity-90" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80')] bg-cover bg-center opacity-20 mix-blend-overlay" />
        </div>
        
        <Container className="relative z-10 text-center">
          <motion.div
            initial="initial"
            animate="animate"
            variants={stagger}
            className="max-w-4xl mx-auto space-y-8"
          >
            <motion.h1 
              variants={fadeIn}
              className="text-5xl md:text-7xl font-bold font-serif tracking-tight"
            >
              We don’t just lend, <br />
              <span className="text-everlend-gold">we help you move forward.</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeIn}
              className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto"
            >
              Your trusted partner for mortgages in Canada. Expert guidance, competitive rates, and personalized solutions.
            </motion.p>
            
            <motion.div 
              variants={fadeIn}
              className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
            >
              <Button size="lg" className="text-lg px-8 bg-everlend-gold hover:bg-everlend-gold/90 text-white border-none" asChild>
                <Link href="/contact">Get Your Options</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-white text-black hover:text-white hover:bg-everlend-green" asChild>
                <Link href="/contact">Talk to an Expert</Link>
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* Why EverLend Section */}
      <Section className="bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-everlend-green mb-4 font-serif">Why Choose EverLend?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine industry expertise with personalized service to make your mortgage journey simple and stress-free.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: "Trusted Expertise", desc: "Over 25 years of combined experience in the Canadian lending market." },
              { icon: Clock, title: "Speed & Efficiency", desc: "Fast pre-approvals and a streamlined process to get you funded sooner." },
              { icon: Users, title: "Client-First Approach", desc: "We work for you, not the banks. Your goals are our top priority." }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center p-6 rounded-xl bg-everlend-light hover:shadow-lg transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-everlend-green/10 text-everlend-green mb-6">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

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

      {/* How It Works */}
      <Section className="bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-everlend-green mb-4 font-serif">How It Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From our first conversation to your closing day, we are with you every step of the way.
            </p>
          </div>

          <div className="relative">
            {/* Line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2 z-0" />
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              {[
                { step: "01", title: "Contact Us", desc: "Book a free consultation to discuss your needs." },
                { step: "02", title: "Get Pre-Approved", desc: "We analyze your finances and secure a rate." },
                { step: "03", title: "Find Your Home", desc: "Shop with confidence knowing your budget." },
                { step: "04", title: "Close & Celebrate", desc: "We handle the paperwork so you can move in." }
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 text-center md:text-left">
                  <div className="text-5xl font-bold text-everlend-gold/20 mb-4 md:mb-8">{item.step}</div>
                  <h3 className="text-xl font-bold text-everlend-green mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
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
