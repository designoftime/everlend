"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { PageHero } from "@/components/ui/page-hero";
import { CheckCircle } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <PageHero 
        title="About EverLend" 
        description="Guiding homebuyers, investors, and families through a seamless financing journey."
        backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      />

      <Section>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6 text-lg text-muted-foreground"
            >
              <h2 className="text-3xl font-bold text-everlend-green font-serif">Our Mission</h2>
              <p>
                At EverLend, we believe getting a mortgage should feel simple, transparent, and stress-free. With years of experience in the Canadian lending and real estate market, our mission is to guide homebuyers, investors, and families through a seamless financing journey — from pre-approval to closing.
              </p>
              <p>
                We combine industry expertise with personalized service, ensuring every client gets the right loan, the right rate, and the right advice at the right time. Whether you are buying your first home, refinancing, or building an investment portfolio, EverLend is committed to providing clarity, trust, and long-term financial confidence.
              </p>
              <p className="font-semibold text-everlend-green">
                At EverLend — your goals come first. We don’t just lend, we help you move forward.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-everlend-light p-8 rounded-xl"
            >
              <h3 className="text-2xl font-bold text-everlend-green mb-6 font-serif">Experience & Trust</h3>
              <ul className="space-y-4">
                {[
                  "25+ years combined mortgage and lending experience",
                  "Thousands of Canadian homeowners helped",
                  "Specialization in 'hard-to-place' mortgages and complex cases",
                  "Access to 50+ lenders including major banks and private lenders"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-everlend-gold shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </Container>
      </Section>

      <Section className="bg-everlend-green text-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">Our Core Values</h2>
            <p className="text-gray-200 max-w-2xl mx-auto">
              The principles that guide every interaction and decision we make.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { title: "Clarity", desc: "We explain everything in plain English, so you always know where you stand." },
              { title: "Speed", desc: "We move fast because we know in real estate, timing is everything." },
              { title: "Integrity", desc: "We offer honest advice, even if it means telling you to wait." },
              { title: "Options", desc: "We don't just offer one product; we find the best solution for you." }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 p-6 rounded-lg backdrop-blur-sm"
              >
                <h3 className="text-xl font-bold text-everlend-gold mb-3">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
}
