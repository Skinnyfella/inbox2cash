import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Instagram, Linkedin } from "lucide-react"; // icons from lucide

const token = import.meta.env.VITE_AIRTABLE_TOKEN;
const baseId = import.meta.env.VITE_AIRTABLE_BASE_ID;

const Footer = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      toast({
        title: "Error",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    try {
      const res = await fetch(
        `https://api.airtable.com/v0/${baseId}/newsletter`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fields: {
              Email: email,
            },
          }),
        }
      );

      const responseData = await res.json();
      console.log("Airtable Response:", responseData);

      if (res.ok) {
        toast({
          title: "Subscribed successfully!",
          description: "Thank you for joining our newsletter. You'll receive updates soon!",
        });
        setEmail(""); 
      } else {
        throw new Error(`Failed to subscribe: ${responseData.error?.message || "Unknown error"}`);
      }
    } catch (err) {
      console.error("Error:", err);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    }
  };

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
            <form onSubmit={handleSubmit} className="flex gap-2">
              <Input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
                required
              />
              <Button
                type="submit"
                variant="cta"
                className="bg-white text-brand-green hover:bg-white/90"
              >
                Get Notified
              </Button>
            </form>
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

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mt-8">
  <a
    href="https://www.instagram.com/inbox2cash?igsh=MW42NTBiYTdpaHZ2Mw=="
    target="_blank"
    rel="noopener noreferrer"
    className="hover:opacity-80 transition-opacity"
  >
    <img src="/instagram.svg" alt="Instagram" className="w-7 h-7 md:w-8 md:h-8" />
  </a>

  <a
    href="https://x.com/Inbox2Cash"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:opacity-80 transition-opacity"
  >
    <img src="/x-logo.svg" alt="X (Twitter)" className="w-7 h-7 md:w-8 md:h-8" />
  </a>

  <a
    href="https://www.linkedin.com/company/inbox2cash/"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:opacity-80 transition-opacity"
  >
    <img src="/linkedin.svg" alt="LinkedIn" className="w-7 h-7 md:w-8 md:h-8" />
  </a>
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
