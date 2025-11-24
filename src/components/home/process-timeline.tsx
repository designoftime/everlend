"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Phone, FileText, Home, PartyPopper } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Discovery Call",
    description: "We start with a friendly conversation to understand your goals, financial situation, and what you're looking to achieve.",
    icon: Phone
  },
  {
    id: 2,
    title: "Strategy & Pre-Approval",
    description: "We analyze the numbers and present you with a tailored mortgage strategy. You'll get a pre-approval so you know exactly what you can afford.",
    icon: FileText
  },
  {
    id: 3,
    title: "House Hunting / Application",
    description: "You find your dream home (or we submit your refinance application). We handle all the lender negotiations and paperwork.",
    icon: Home
  },
  {
    id: 4,
    title: "Closing & Celebration",
    description: "We ensure all conditions are met, funds are transferred, and you get the keys. Time to celebrate your new beginning!",
    icon: PartyPopper
  }
];

export function ProcessTimeline() {
  return (
    <section className="bg-page py-20 md:py-32 overflow-hidden">
      <Container>
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
            Your journey, <span className="text-accent">simplified.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We've refined our process to be as smooth and stress-free as possible. Here's what you can expect when you work with EverLend.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Central Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block" />

          <div className="space-y-12 md:space-y-24 relative z-10">
            {steps.map((step, index) => (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-8 md:gap-0 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Content Side */}
                <div className="flex-1 text-center md:text-left">
                  <div className={`md:px-12 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <h3 className="text-2xl font-bold text-primary mb-3">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Center Icon */}
                <div className="relative flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-white border-4 border-accent flex items-center justify-center shadow-lg z-10 relative">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  {/* Connector for mobile */}
                  {index !== steps.length - 1 && (
                    <div className="absolute top-16 left-1/2 w-0.5 h-12 bg-border -translate-x-1/2 md:hidden" />
                  )}
                </div>

                {/* Empty Side */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
