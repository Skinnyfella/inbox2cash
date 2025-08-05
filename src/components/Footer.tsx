import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-brand-green text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Newsletter Signup */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Stay Connected & Informed</h3>
            <p className="text-sm mb-4 opacity-90">
              Subscribe to our newsletter for the latest marketing insights, 
              trends, and growth strategies for scale your business.
            </p>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Email Address"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
              />
              <Button variant="cta" className="bg-white text-brand-green hover:bg-white/90">
                Get Notified
              </Button>
            </div>
          </div>

          {/* Sections Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Sections</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  About
                </Link>
              </li>
              <li>
                <Link to="/process" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Process
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Case Studies & Testimonials
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-90">
            Copyright © 2024 - All Rights Reserved by Inbox2Cash
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;