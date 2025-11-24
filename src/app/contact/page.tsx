"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, CheckCircle, AlertCircle } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/ui/page-hero";
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

  return (
    <div className="flex flex-col">
      <PageHero 
        title="Contact Us" 
        description="Ready to get started? We are here to help you move forward."
        backgroundImage="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2032&q=80"
      />

      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-everlend-green font-serif mb-6">Get in Touch</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Whether you have a question about rates, need a pre-approval, or want to discuss your mortgage options, our team is ready to assist you.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-everlend-light p-3 rounded-full text-everlend-green">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Visit Us</h3>
                    <p className="text-gray-600">{siteMeta.address}</p>
                    <p className="text-sm text-gray-500 mt-1">Hours: {siteMeta.hours}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-everlend-light p-3 rounded-full text-everlend-green">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Call Us</h3>
                    <p className="text-gray-600">
                      <a href={`tel:${siteMeta.phone.replace(/-/g, "")}`} className="hover:text-everlend-green transition-colors">
                        {siteMeta.phone}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-everlend-light p-3 rounded-full text-everlend-green">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Email Us</h3>
                    <p className="text-gray-600">
                      <a href={`mailto:${siteMeta.email}`} className="hover:text-everlend-green transition-colors">
                        {siteMeta.email}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
              
              {status === "success" ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 border border-green-200 rounded-lg p-6 text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 text-green-600 mb-4">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-green-800 mb-2">Message Sent!</h4>
                  <p className="text-green-700">
                    Thank you for contacting EverLend. One of our mortgage experts will be in touch shortly.
                  </p>
                  <Button 
                    variant="outline" 
                    className="mt-6" 
                    onClick={() => setStatus("idle")}
                  >
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-700">Name *</label>
                      <input
                        id="name"
                        name="name"
                        required
                        value={formState.name}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-everlend-green/50 focus:border-everlend-green"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-700">Email *</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-everlend-green/50 focus:border-everlend-green"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone (Optional)</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formState.phone}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-everlend-green/50 focus:border-everlend-green"
                        placeholder="(416) 555-0123"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="method" className="text-sm font-medium text-gray-700">Preferred Contact</label>
                      <select
                        id="method"
                        name="method"
                        value={formState.method}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-everlend-green/50 focus:border-everlend-green bg-white"
                      >
                        <option value="email">Email</option>
                        <option value="phone">Phone</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="type" className="text-sm font-medium text-gray-700">Type of Need</label>
                    <select
                      id="type"
                      name="type"
                      value={formState.type}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-everlend-green/50 focus:border-everlend-green bg-white"
                    >
                      <option value="pre-approval">Mortgage Pre-Approval</option>
                      <option value="purchase">Home Purchase</option>
                      <option value="refinance">Refinance / Equity Take-Out</option>
                      <option value="renewal">Mortgage Renewal</option>
                      <option value="investment">Investment Property</option>
                      <option value="self-employed">Self-Employed Mortgage</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formState.message}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-everlend-green/50 focus:border-everlend-green"
                      placeholder="Tell us a bit about your situation..."
                    />
                  </div>

                  {status === "error" && (
                    <div className="bg-red-50 text-red-600 p-3 rounded-md text-sm flex items-center gap-2">
                      <AlertCircle className="w-4 h-4" />
                      {errorMessage}
                    </div>
                  )}

                  <Button 
                    type="submit" 
                    className="w-full bg-everlend-gold hover:bg-everlend-gold/90 text-white"
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
