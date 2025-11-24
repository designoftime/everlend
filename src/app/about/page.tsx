"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { PageHero } from "@/components/ui/page-hero";
import { StatsCounter } from "@/components/about/stats-counter";
import { ValuesGrid } from "@/components/about/values-grid";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <PageHero 
        title="About EverLend" 
        description="Guiding homebuyers, investors, and families through a seamless financing journey."
        backgroundImage="/images/hero-about.png"
      />

      {/* Mission Section */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl font-bold text-primary font-serif leading-tight">
                We believe getting a mortgage should be <span className="text-accent italic">simple</span>.
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  At EverLend, we believe getting a mortgage should feel simple, transparent, and stress-free. With years of experience in the Canadian lending and real estate market, our mission is to guide homebuyers, investors, and families through a seamless financing journey — from pre-approval to closing.
                </p>
                <p>
                  We combine industry expertise with personalized service, ensuring every client gets the right loan, the right rate, and the right advice at the right time. Whether you are buying your first home, refinancing, or building an investment portfolio, EverLend is committed to providing clarity, trust, and long-term financial confidence.
                </p>
                <p className="font-semibold text-primary border-l-4 border-accent pl-4">
                  At EverLend — your goals come first. We don’t just lend, we help you move forward.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-accent/10 rounded-2xl transform rotate-3" />
              <div className="relative bg-white p-8 rounded-2xl shadow-xl border border-border/50">
                <h3 className="text-2xl font-bold text-primary mb-8 font-serif">Why Trust Us?</h3>
                <ul className="space-y-6">
                  {[
                    "25+ years combined mortgage and lending experience",
                    "Thousands of Canadian homeowners helped",
                    "Specialization in 'hard-to-place' mortgages",
                    "Access to 50+ lenders including major banks"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center shrink-0 text-green-600 mt-0.5">
                        <CheckCircle className="w-5 h-5" />
                      </div>
                      <span className="text-gray-700 font-medium pt-1">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Stats Section */}
      <Section className="bg-section">
        <Container>
          <StatsCounter />
        </Container>
      </Section>

      {/* Values Section */}
      <Section className="bg-primary text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
        
        <Container className="relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6">Our Core Values</h2>
            <p className="text-gray-200 max-w-2xl mx-auto text-lg">
              The principles that guide every interaction and decision we make.
            </p>
          </div>

          <ValuesGrid />
        </Container>
      </Section>
    </div>
  );
}
