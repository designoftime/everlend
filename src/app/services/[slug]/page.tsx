import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/ui/page-hero";
import { services } from "@/data/services";

// Generate static params for all services
export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return { title: "Service Not Found" };
  }

  return {
    title: `${service.title} | EverLend`,
    description: service.shortDescription,
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="flex flex-col">
      <PageHero 
        title={service.title} 
        description={service.shortDescription}
        backgroundImage="/images/hero-services.jpg"
      />

      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-24">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-16">
              {/* Overview */}
              <div className="prose prose-lg text-muted-foreground">
                <h2 className="text-3xl font-bold text-primary mb-6 font-serif">Overview</h2>
                <p className="leading-relaxed text-lg">
                  {service.longDescription}
                </p>
              </div>

              {/* Key Benefits */}
              <div>
                <h2 className="text-3xl font-bold text-primary mb-8 font-serif">Why choose this?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {service.benefits.map((benefit, index) => (
                    <div 
                      key={index} 
                      className="flex items-start gap-4 p-6 rounded-xl bg-white border border-border/50 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                        <CheckCircle className="w-5 h-5" />
                      </div>
                      <span className="text-gray-700 font-medium pt-2">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* How It Works Stepper */}
              <div>
                <h2 className="text-3xl font-bold text-primary mb-10 font-serif">How It Works</h2>
                <div className="relative space-y-12 pl-8 border-l-2 border-primary/10 ml-4">
                  {service.steps.map((step, index) => (
                    <div key={index} className="relative">
                      <div className="absolute -left-[41px] top-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm shadow-lg ring-4 ring-white">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-primary mb-2">{step}</h3>
                        <p className="text-muted-foreground">
                          We guide you through every step of the {step.toLowerCase()} process to ensure a smooth experience.
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-8">
                {/* CTA Card */}
                <div className="bg-primary text-white p-8 rounded-2xl shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full -mr-8 -mt-8" />
                  <h3 className="text-2xl font-serif font-bold mb-4 relative z-10">Ready to get started?</h3>
                  <p className="text-white/80 mb-8 relative z-10">
                    Book a free consultation with our experts to discuss your {service.title.toLowerCase()} needs.
                  </p>
                  <div className="space-y-4 relative z-10">
                    <Button className="w-full bg-white text-primary hover:bg-gray-100 h-12 text-lg" asChild>
                      <Link href="/contact">Book Consultation</Link>
                    </Button>
                    <Button variant="outline" className="w-full border-white/30 text-white hover:bg-white/10 h-12" asChild>
                      <Link href="tel:4166180786">Call 416-618-0786</Link>
                    </Button>
                  </div>
                </div>
                
                {/* Other Services */}
                <div className="bg-white p-6 rounded-xl border border-border/50 shadow-sm">
                  <h4 className="font-bold mb-6 text-primary">Explore Other Services</h4>
                  <ul className="space-y-4">
                    {services
                      .filter(s => s.slug !== service.slug)
                      .slice(0, 5)
                      .map(s => (
                        <li key={s.slug}>
                          <Link href={`/services/${s.slug}`} className="text-muted-foreground hover:text-primary flex items-center justify-between group transition-colors">
                            <span className="text-sm font-medium">{s.title}</span>
                            <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-accent" />
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
