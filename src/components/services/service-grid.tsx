"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calculator, Home, RefreshCw, TrendingUp, Briefcase, Globe, ShieldCheck, Building2, UserCheck } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Service } from "@/data/services";

const iconMap: Record<string, any> = {
  "mortgage-pre-approval": Calculator,
  "home-purchase-mortgage": Home,
  "refinance-equity-take-out": RefreshCw,
  "mortgage-renewal": UserCheck,
  "investment-property-financing": TrendingUp,
  "self-employed-mortgages": Briefcase,
  "new-immigrant-mortgages": Globe,
  "private-alternative-lending": ShieldCheck,
  "commercial-mortgage": Building2,
};

export function ServiceGrid({ services }: { services: Service[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, index) => {
        const Icon = iconMap[service.slug] || Home;
        
        return (
          <motion.div
            key={service.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Card variant="elevated" className="relative h-full flex flex-col hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-500" />
              
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow relative z-10">
                <p className="text-muted-foreground mb-6">{service.shortDescription}</p>
                <ul className="space-y-2">
                  {service.benefits.slice(0, 3).map((benefit, i) => (
                    <li key={i} className="text-sm text-gray-600 flex items-start">
                      <span className="mr-2 text-accent mt-1">•</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="relative z-10">
                <Link 
                  href={`/services/${service.slug}`} 
                  className="text-primary font-medium flex items-center hover:text-accent transition-colors w-full justify-between group/link"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 transform group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </CardFooter>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
}
