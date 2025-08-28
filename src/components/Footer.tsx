import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Footer() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();
  const token = import.meta.env.VITE_AIRTABLE_TOKEN; // Using environment variable
  const baseId = import.meta.env.VITE_AIRTABLE_BASE_ID; // Using environment variable

  const handleSubscribe = async (e) => {
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
      const response = await fetch(`https://api.airtable.com/v0/${baseId}/newsletter`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`, // Using environment variable for API key
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          records: [
            {
              fields: {
                Email: email,
              },
            },
          ],
        }),
      });

      const responseData = await response.json(); // Log the response for debugging
      console.log("Airtable Response:", responseData);

      if (response.ok) {
        toast({
          title: "Subscribed!",
          description: "You have successfully subscribed to our newsletter.",
        });
        setEmail("");
      } else {
        throw new Error(
          `Failed to subscribe: ${responseData.error?.message || "Unknown error"}`
        );
      }
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <footer className="bg-brand-green text-white py-10 px-6 md:px-20">
      {/* 3 Equal Columns */}
      <div className="max-w-7xl mx-auto ml-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
        {/* Left Section - Logo */}
        <div className="flex flex-col items-center">
          <div className="w-full max-w-xs text-left">
            <h2 className="text-2xl font-bold text-left">Inbox2cash</h2>
            <p className="mt-4 text-white/80 text-left">
              Building email that empower businesses to grow and scale.
            </p>
            <div className="flex space-x-4 mt-6 justify-start">
              <a href="https://www.instagram.com/inbox2cash?igsh=MW42NTBiYTdpaHZ2Mw==" className="text-white hover:text-white/70 transition">
                <img src="/instagram.svg" alt="Instagram" className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/company/inbox2cash/" className="text-white hover:text-white/70 transition">
                <img src="/linkedin.svg" alt="LinkedIn" className="w-6 h-6" />
              </a>
              <a href="https://x.com/Inbox2Cash" className="text-white hover:text-white/70 transition">
                <img src="/twitter.svg" alt="Twitter" className="w-6 h-6" /> {/* Using twitter.svg */}
              </a>
            </div>
          </div>
        </div>

        {/* Middle Section - Sections */}
        <div className="flex flex-col items-center -ml-12">
          <h3 className="text-lg font-semibold mb-4">Sections</h3>
          <ul className="space-y-2 text-white/80">
            <li>
              <Link to="/" className="hover:text-white transition">
                About
              </Link>
            </li>
            <li>
              <Link to="/process" className="hover:text-white transition">
                Process
              </Link>
            </li>
            <li>
              <Link to="/case-studies" className="hover:text-white transition">
                Case Studies
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Right Section - Newsletter */}
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-semibold mb-4">Subscribe to Newsletter</h3>
          <form
            onSubmit={handleSubscribe}
            className="flex flex-col sm:flex-row gap-2 w-full max-w-sm"
          >
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-white/10 border-white/20 text-white placeholder:text-white/70 flex-1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button type="submit" className="bg-white text-brand-green hover:bg-white/90">
              Subscribe
            </Button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-white/20 pt-6 text-center text-white/80 text-sm">
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
}