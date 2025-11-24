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
      />

      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-2xl font-bold text-everlend-green mb-4 font-serif">Overview</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {service.longDescription}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-everlend-green mb-6 font-serif">Key Benefits</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3 bg-everlend-light p-4 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-everlend-gold shrink-0 mt-0.5" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-everlend-green mb-6 font-serif">How It Works with EverLend</h2>
                <div className="space-y-6">
                  {service.steps.map((step, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-everlend-green text-white flex items-center justify-center font-bold text-sm">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">{step}</h3>
                        <p className="text-gray-600 text-sm">
                          We guide you through this step to ensure a smooth process.
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-everlend-light p-6 rounded-xl sticky top-24">
                <h3 className="text-xl font-bold text-everlend-green mb-4">Ready to get started?</h3>
                <p className="text-gray-600 mb-6 text-sm">
                  Book a free consultation with our experts to discuss your {service.title.toLowerCase()} needs.
                </p>
                <div className="space-y-4">
                  <Button className="w-full bg-everlend-gold hover:bg-everlend-gold/90" asChild>
                    <Link href="/contact">Book Consultation</Link>
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="tel:4166180786">Call 416-618-0786</Link>
                  </Button>
                </div>
                
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="font-semibold mb-4 text-sm text-gray-900">Other Services</h4>
                  <ul className="space-y-2 text-sm">
                    {services
                      .filter(s => s.slug !== service.slug)
                      .slice(0, 5)
                      .map(s => (
                        <li key={s.slug}>
                          <Link href={`/services/${s.slug}`} className="text-gray-600 hover:text-everlend-green flex items-center justify-between group">
                            {s.title}
                            <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
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
