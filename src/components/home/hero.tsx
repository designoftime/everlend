"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Home, CreditCard, Hammer, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import Link from "next/link";
import { useRef } from "react";

export function HomeHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-primary text-white">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/80 to-primary/95 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero-home.jpg')" }}
        />
      </motion.div>

      <Container className="relative z-20 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight">
              Unlock the <br />
              <span className="text-accent italic">hidden value</span> <br />
              in your home.
            </h1>
            <p className="text-xl text-gray-200 max-w-lg leading-relaxed">
              Your home is more than just a place to live—it's your most powerful financial asset. We help you access your equity to build the future you deserve.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" variant="secondary" className="text-lg px-8 h-14" asChild>
                <Link href="/contact">
                  Get Your Free Assessment <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 h-14 border-white/30 text-white hover:bg-white/10" asChild>
                <Link href="/services">Explore Solutions</Link>
              </Button>
            </div>
          </motion.div>

          {/* Equity Flow Animation */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[500px] w-full hidden lg:block"
          >
            {/* Central House Node */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              <motion.div 
                animate={{ 
                  boxShadow: ["0 0 0 0px rgba(197, 160, 89, 0.2)", "0 0 0 20px rgba(197, 160, 89, 0)"]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-2xl relative"
              >
                <Home className="w-12 h-12 text-primary" />
                <div className="absolute -bottom-8 text-sm font-bold text-white bg-accent px-3 py-1 rounded-full">
                  Your Equity
                </div>
              </motion.div>
            </div>

            {/* Orbiting Nodes */}
            <OrbitingNode angle={0} delay={0} icon={CreditCard} label="Consolidate Debt" />
            <OrbitingNode angle={120} delay={1} icon={Hammer} label="Renovate" />
            <OrbitingNode angle={240} delay={2} icon={GraduationCap} label="Invest/Tuition" />
            
            {/* Connecting Lines (SVG) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
              <motion.circle 
                cx="50%" 
                cy="50%" 
                r="150" 
                fill="none" 
                stroke="rgba(255,255,255,0.1)" 
                strokeWidth="1" 
                strokeDasharray="5 5"
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              />
            </svg>
          </motion.div>
        </div>
      </Container>
      
      {/* Scroll Indicator */}
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
      >
        <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-1 h-12 rounded-full bg-gradient-to-b from-white/0 via-white/50 to-white/0"
        />
      </motion.div>
    </section>
  );
}

function OrbitingNode({ angle, delay, icon: Icon, label }: { angle: number, delay: number, icon: any, label: string }) {
  return (
    <motion.div
      className="absolute top-1/2 left-1/2 w-16 h-16 -ml-8 -mt-8 z-20"
      animate={{ 
        rotate: [angle, angle + 360],
      }}
      transition={{ 
        duration: 20, 
        repeat: Infinity, 
        ease: "linear",
        delay: -delay * 5 // Offset start position
      }}
    >
      <motion.div
        className="absolute -top-[150px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ rotate: -angle }} // Counter-rotate to keep upright? No, we want it to rotate with the orbit but keep text upright.
      >
         <motion.div 
           animate={{ rotate: [-angle, -(angle + 360)] }}
           transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: -delay * 5 }}
           className="flex flex-col items-center gap-2"
         >
            <div className="w-16 h-16 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center text-white shadow-lg">
              <Icon className="w-6 h-6" />
            </div>
            <span className="text-sm font-medium text-white/80 whitespace-nowrap bg-black/20 px-2 py-1 rounded-md backdrop-blur-sm">{label}</span>
         </motion.div>
      </motion.div>
    </motion.div>
  )
}
