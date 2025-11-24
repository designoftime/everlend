"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { PageHero } from "@/components/ui/page-hero";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { services } from "@/data/services";

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      <PageHero 
        title="Our Services" 
        description="Tailored mortgage solutions for every stage of your financial journey."
        backgroundImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      />

      <Section>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.slug} className="flex flex-col h-full hover:shadow-lg transition-shadow border-gray-200">
                <CardHeader>
                  <CardTitle className="text-xl text-everlend-green">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground mb-4">{service.shortDescription}</p>
                  <ul className="space-y-2">
                    {service.benefits.slice(0, 2).map((benefit, i) => (
                      <li key={i} className="text-sm text-gray-600 flex items-start">
                        <span className="mr-2 text-everlend-gold">•</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link 
                    href={`/services/${service.slug}`} 
                    className="text-everlend-green font-medium flex items-center hover:text-everlend-gold transition-colors w-full justify-between group"
                  >
                    View Details 
                    <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
}
