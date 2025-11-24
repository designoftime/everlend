"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { PageHero } from "@/components/ui/page-hero";
import { ServiceGrid } from "@/components/services/service-grid";
import { services } from "@/data/services";

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      <PageHero 
        title="Our Services" 
        description="Tailored mortgage solutions for every stage of your financial journey."
        backgroundImage="/images/hero-services.jpg"
      />

      <Section>
        <Container>
          <ServiceGrid services={services} />
        </Container>
      </Section>
    </div>
  );
}
