
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import Index from "./pages/Index";
import Process from "./pages/Process";
import CaseStudies from "./pages/CaseStudies";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";


const queryClient = new QueryClient();

const App = () => {
  const [open, setOpen] = useState(false);
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubscribeClick = () => {
    setOpen(false);
    // Scroll to the footer newsletter section
    const footer = document.getElementById("newsletter-footer");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Subscribe to our Newsletter?</DialogTitle>
            </DialogHeader>
            <p className="mb-4">Would you like to receive the latest marketing insights and updates?</p>
            <DialogFooter>
              <button
                className="bg-brand-green text-white px-4 py-2 rounded hover:bg-brand-green-light transition"
                onClick={handleSubscribeClick}
              >
                Yes, subscribe me
              </button>
              <button
                className="bg-muted text-brand-green px-4 py-2 rounded border border-brand-green hover:bg-brand-green hover:text-white transition"
                onClick={() => setOpen(false)}
              >
                No, thanks
              </button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/process" element={<Process />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/contact" element={<Contact />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
