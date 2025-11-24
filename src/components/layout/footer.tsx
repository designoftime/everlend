import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-everlend-green text-white">
      <Container className="py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-everlend-gold">EverLend</h3>
            <p className="text-sm text-gray-300 max-w-xs">
              We don’t just lend, we help you move forward. Your trusted partner for mortgages in Canada.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-everlend-gold">Services</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/services/mortgage-pre-approval" className="hover:text-white">Pre-Approval</Link></li>
              <li><Link href="/services/home-purchase-mortgage" className="hover:text-white">Home Purchase</Link></li>
              <li><Link href="/services/refinance-equity-take-out" className="hover:text-white">Refinance</Link></li>
              <li><Link href="/services/investment-property-financing" className="hover:text-white">Investment</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-everlend-gold">Company</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
              <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-everlend-gold">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>150 Ferrand Drive, Suite 1500</li>
              <li>North York, ON</li>
              <li><a href="tel:4166180786" className="hover:text-white">416-618-0786</a></li>
              <li><a href="mailto:info@everlend.ca" className="hover:text-white">info@everlend.ca</a></li>
            </ul>
            <div className="flex gap-4 mt-4">
              <Link href="#" className="text-gray-300 hover:text-white"><Facebook className="h-5 w-5" /></Link>
              <Link href="#" className="text-gray-300 hover:text-white"><Instagram className="h-5 w-5" /></Link>
              <Link href="#" className="text-gray-300 hover:text-white"><Linkedin className="h-5 w-5" /></Link>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} EverLend. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
