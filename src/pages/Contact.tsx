import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const token = import.meta.env.VITE_AIRTABLE_TOKEN;
const baseId = import.meta.env.VITE_AIRTABLE_BASE_ID;

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    service: "",
    requirements: ""
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch(
        `https://api.airtable.com/v0/${baseId}/Contact`,
        {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            fields: {
              "Full Name": formData.fullName,
              "Email": formData.email,
              "Service": formData.service,
              "Requirements": formData.requirements
            }
          })
        }
      );

      if (res.ok) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for your interest. We'll get back to you within 24 hours.",
        });
        setFormData({ fullName: "", email: "", service: "", requirements: "" });
      } else {
        throw new Error("Failed to send data to Airtable");
      }

    } catch (err) {
      console.error(err);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive"
      });
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-brand-green text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Let's connect & bring your <span className="text-brand-green-light">ideas to life</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            We'd love to hear from you! Fill out the form below, and let's discuss how we can help you achieve your goals.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-brand-green">Get in Touch</CardTitle>
              <p className="text-muted-foreground">
                Ready to transform your email marketing? Let's start the conversation.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-sm font-medium">
                    Enter your full name:
                  </Label>
                  <Input
                    id="fullName"
                    type="text"
                    placeholder="Jane Smith"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange("fullName", e.target.value)}
                    required
                    className="w-full"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">
                    Enter a valid email for response:
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="jane@company.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                    className="w-full"
                  />
                </div>

                {/* Service Selection */}
                <div className="space-y-2">
                  <Label htmlFor="service" className="text-sm font-medium">
                    What services are you interested in?
                  </Label>
                  <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Business Consultation" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="email-marketing">Email Marketing Automation</SelectItem>
                      <SelectItem value="sms-marketing">SMS Marketing</SelectItem>
                      <SelectItem value="lifecycle-marketing">Lifecycle Marketing</SelectItem>
                      <SelectItem value="list-strategy">List Marketing Strategy</SelectItem>
                      <SelectItem value="training">Cross Marketing Training & Certification</SelectItem>
                      <SelectItem value="consultation">Business Consultation</SelectItem>
                      <SelectItem value="audit">Free Marketing Audit</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Requirements */}
                <div className="space-y-2">
                  <Label htmlFor="requirements" className="text-sm font-medium">
                    Share any details or specific requirements:
                  </Label>
                  <Textarea
                    id="requirements"
                    placeholder="Your message..."
                    value={formData.requirements}
                    onChange={(e) => handleInputChange("requirements", e.target.value)}
                    rows={5}
                    className="w-full resize-none"
                  />
                </div>

                {/* Submit Button */}
                <Button 
                  type="submit" 
                  variant="hero" 
                  size="lg" 
                  className="w-full text-lg py-6"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Additional Contact Info */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <h3 className="font-semibold text-brand-green mb-2">Response Time</h3>
              <p className="text-muted-foreground">Within 24 hours</p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-green mb-2">Free Consultation</h3>
              <p className="text-muted-foreground">30-minute strategy call</p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-green mb-2">Custom Solutions</h3>
              <p className="text-muted-foreground">Tailored to your needs</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
