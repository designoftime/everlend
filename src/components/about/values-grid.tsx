"use client";

import { motion } from "framer-motion";
import { Lightbulb, Clock, ShieldCheck, Layers } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const values = [
  {
    title: "Clarity",
    description: "We explain everything in plain English, so you always know where you stand. No jargon, just clear advice.",
    icon: Lightbulb,
  },
  {
    title: "Speed",
    description: "We move fast because we know in real estate, timing is everything. We work to meet your deadlines.",
    icon: Clock,
  },
  {
    title: "Integrity",
    description: "We offer honest advice, even if it means telling you to wait. Your long-term financial health is our priority.",
    icon: ShieldCheck,
  },
  {
    title: "Options",
    description: "We don't just offer one product; we find the best solution for you from over 50 different lenders.",
    icon: Layers,
  },
];

export function ValuesGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {values.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
        >
          <Card className="h-full border-none shadow-lg bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 transition-colors">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-4 text-accent">
                <item.icon className="w-6 h-6" />
              </div>
              <CardTitle className="text-xl text-accent">{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 leading-relaxed">
                {item.description}
              </p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
