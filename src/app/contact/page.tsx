"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, CheckCircle, AlertCircle } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/ui/page-hero";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select-native";
import { siteMeta } from "@/data/siteMeta";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    method: "email",
    type: "pre-approval",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      setStatus("success");
      setFormState({
        name: "",
        email: "",
        phone: "",
        method: "email",
        type: "pre-approval",
        message: ""
      });
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Failed to send message");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };
//console.log('hi')
  return (
    <div className="flex flex-col">
      <PageHero 
        title="Contact Us" 
        description="Ready to get started? We are here to help you move forward."
        backgroundImage="/images/hero-contact.png"
      />

      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <h2 className="text-4xl font-bold text-primary font-serif mb-6">Get in Touch</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Whether you have a question about rates, need a pre-approval, or want to discuss your mortgage options, our team is ready to assist you.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-6 group">
                  <div className="bg-primary/5 p-4 rounded-2xl text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-primary mb-1">Visit Us</h3>
                    <p className="text-muted-foreground">{siteMeta.address}</p>
                    <p className="text-sm text-muted-foreground/80 mt-1">Hours: {siteMeta.hours}</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="bg-primary/5 p-4 rounded-2xl text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-primary mb-1">Call Us</h3>
                    <p className="text-muted-foreground">
                      <a href={`tel:${siteMeta.phone.replace(/-/g, "")}`} className="hover:text-primary transition-colors">
                        {siteMeta.phone}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="bg-primary/5 p-4 rounded-2xl text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-primary mb-1">Email Us</h3>
                    <p className="text-muted-foreground">
                      <a href={`mailto:${siteMeta.email}`} className="hover:text-primary transition-colors">
                        {siteMeta.email}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-border/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-bl-full -mr-10 -mt-10 pointer-events-none" />
              
              <h3 className="text-2xl font-bold text-primary mb-8 relative z-10">Send a Message</h3>
              
              {status === "success" ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 border border-green-200 rounded-xl p-8 text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-6">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-green-800 mb-2">Message Sent!</h4>
                  <p className="text-green-700 mb-8">
                    Thank you for contacting EverLend. One of our mortgage experts will be in touch shortly.
                  </p>
                  <Button 
                    variant="outline" 
                    onClick={() => setStatus("idle")}
                    className="bg-white"
                  >
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-primary">Name *</label>
                      <Input
                        id="name"
                        name="name"
                        required
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-primary">Email *</label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-primary">Phone (Optional)</label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formState.phone}
                        onChange={handleChange}
                        placeholder="(416) 555-0123"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="method" className="text-sm font-medium text-primary">Preferred Contact</label>
                      <Select
                        id="method"
                        name="method"
                        value={formState.method}
                        onChange={handleChange}
                      >
                        <option value="email">Email</option>
                        <option value="phone">Phone</option>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="type" className="text-sm font-medium text-primary">Type of Need</label>
                    <Select
                      id="type"
                      name="type"
                      value={formState.type}
                      onChange={handleChange}
                    >
                      <option value="pre-approval">Mortgage Pre-Approval</option>
                      <option value="purchase">Home Purchase</option>
                      <option value="refinance">Refinance / Equity Take-Out</option>
                      <option value="renewal">Mortgage Renewal</option>
                      <option value="investment">Investment Property</option>
                      <option value="self-employed">Self-Employed Mortgage</option>
                      <option value="other">Other</option>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-primary">Message</label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="Tell us a bit about your situation..."
                    />
                  </div>

                  {status === "error" && (
                    <div className="bg-red-50 text-red-600 p-4 rounded-lg text-sm flex items-center gap-2">
                      <AlertCircle className="w-5 h-5 shrink-0" />
                      {errorMessage}
                    </div>
                  )}

                  <Button 
                    type="submit" 
                    className="w-full h-12 text-lg"
                    disabled={status === "submitting"}
                  >
                    {status === "submitting" ? "Sending..." : "Send Message"} <Send className="ml-2 w-4 h-4" />
                  </Button>
                </form>
              )}
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
