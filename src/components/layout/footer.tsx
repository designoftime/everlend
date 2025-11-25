import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Facebook, Instagram, Linkedin, Section, Twitter } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";

export function Footer() {
  return (
    <>
      {/* CTA Section */}
      {/* <Section className="bg-everlend-green text-black">
        <Container>
         
        </Container>
      </Section> */}
      <footer className="bg-everlend-green text-black">
        <Container className="py-12  md:py-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:mb-32 mb-16">
            <div className="space-y-4 max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold font-serif">
                Ready to move forward?
              </h2>
              <p className="text-xl text-gray-700">
                Let’s find the perfect mortgage solution for you today.
              </p>
            </div>
            <div className="flex gap-4">
              <Button
                size="lg"
                className="bg-gray-100 text-everlend-gold hover:bg-everlend-gold/90 text-black border-none"
                asChild
              >
                <Link href="/contact">Get Started Now</Link>
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex gap-5 items-center justify-start">
                <Image
                  src={"/icon.svg"}
                  alt="EverLend"
                  width={60}
                  height={100}
                />
                <h3 className="text-2xl font-bold text-everlend-gold">
                  EverLend
                </h3>
              </div>
              <p className="text-sm text-gray-700 max-w-xs">
                We don’t just lend, we help you move forward. Your trusted
                partner for mortgages in Canada.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-everlend-gold">
                Services
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>
                  <Link
                    href="/services/mortgage-pre-approval"
                    className="hover:text-gray-500"
                  >
                    Pre-Approval
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/home-purchase-mortgage"
                    className="hover:text-gray-500"
                  >
                    Home Purchase
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/refinance-equity-take-out"
                    className="hover:text-gray-500"
                  >
                    Refinance
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/investment-property-financing"
                    className="hover:text-gray-500"
                  >
                    Investment
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-everlend-gold">Company</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>
                  <Link href="/about" className="hover:text-gray-500">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-gray-500">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-gray-500">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-gray-500">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-everlend-gold">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>150 Ferrand Drive, Suite 1500</li>
                <li>North York, ON</li>
                <li>
                  <a href="tel:4166180786" className="hover:text-gray-500">
                    416-618-0786
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@everlend.ca"
                    className="hover:text-gray-500"
                  >
                    info@everlend.ca
                  </a>
                </li>
              </ul>
              <div className="flex gap-4 mt-4">
                <Link href="#" className="text-gray-700 hover:text-gray-500">
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-700 hover:text-gray-500">
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-700 hover:text-gray-500">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-gray-400">
            © {new Date().getFullYear()} EverLend. All rights reserved.
          </div>
        </Container>
      </footer>
    </>
  );
}
