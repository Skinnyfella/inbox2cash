import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, CheckCircle, Star, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const TOOL_LIST = [
  {
    name: "Airtable",
  logo: "/logos/Airtable Logo _ SVG _ Real Company _ Alphabet, Letter A Logo.jpg",
  },
  {
    name: "Mailchimp",
  logo: "/logos/Mailchimp Logo.jpg",
  },
  {
    name: "Klaviyo",
  logo: "/logos/E-Commerce Marketing Platform Klaviyo Unveils New Logo Design - Logo-Designer_co.jpg",
  },
  {
    name: "Shopify",
  logo: "/logos/Shopify logo - Canada.jpg",
  },
  // Add more tools as needed
];

const Index = () => {
  // Optional: Pause animation on hover
  const marqueeRef = useRef(null);
  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;
    const handleMouseEnter = () => marquee.style.animationPlayState = "paused";
    const handleMouseLeave = () => marquee.style.animationPlayState = "running";
    marquee.addEventListener("mouseenter", handleMouseEnter);
    marquee.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      marquee.removeEventListener("mouseenter", handleMouseEnter);
      marquee.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-brand-green text-white py-20 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Email & SMS Marketing Solutions for Modern Brands
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-4xl mx-auto md:mx-0">
              Building high-converting automation systems that generate predictable revenue without bloated retainers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 border-2 border-white text-white bg-transparent hover:bg-white hover:text-brand-green transition"
              >
                <a
                  href="https://calendly.com/chebetgloria-inbox2cash/30min?month=2025-08"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a call
                  <ArrowRight className="ml-2" size={20} />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 border-2 border-white text-white bg-transparent hover:bg-white hover:text-brand-green transition"
              >
                <a
                  href="https://airtable.com/appsieAMyYGI11NDv/pagvvrgsiszJAf1b5/form"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Your Free Audit
                </a>
              </Button>
            </div>
          </div>
          {/* Hero Image */}
          <div className="flex-1 flex justify-center md:justify-end">
            <img
              src="/background.jpg"
              alt="Inbox2Cash Hero"
              className="w-full max-w-md rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </section>

  {/* Brief Overview */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-muted-foreground leading-relaxed">
            At Inbox2Cash we build direct-line email marketing and SMS marketing systems that put you back in control of your ecommerce revenue. Our proven AMPLIFY™ framework means you see results in months, and every system is built to scale as your ecommerce business grows.
          </p>
        </div>
      </section>

  {/* Services We Offer */}
      <section className="py-16 px-4 bg-muted">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Services we offer:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Email & SMS Marketing Plus Automation */}
            <Card className="border-2 border-brand-green bg-white/50">
              <CardHeader>
                <CardTitle className="text-lg font-semibold flex items-center gap-2">
                  <span role="img" aria-label="email">📧</span>
                  Email & SMS Marketing Plus Automation.
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  convert prospects into customers and transform one-time buyers into repeat purchasers through strategic timing and compelling messaging
                </p>
              </CardContent>
            </Card>
            {/* Campaign Strategy */}
            <Card className="bg-muted">
              <CardHeader>
                <CardTitle className="text-lg font-semibold flex items-center gap-2">
                  <span role="img" aria-label="strategy">📊</span>
                  Campaign Strategy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Continuous performance analysis, strategic improvements, and data-driven refinements that consistently increase your email and SMS ROI.
                </p>
              </CardContent>
            </Card>
            {/* Lifecycle Marketing */}
            <Card className="bg-muted">
              <CardHeader>
                <CardTitle className="text-lg font-semibold flex items-center gap-2">
                  <span role="img" aria-label="lifecycle">🔄</span>
                  Lifecycle Marketing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Boost customer lifetime value by 40-60% through integrated email, SMS, and push notification sequences that nurture relationships, prevent churn, and drive repeat purchases at every stage of the customer journey.
                </p>
              </CardContent>
            </Card>
            {/* Email Marketing Training & Certification */}
            <Card className="bg-muted">
              <CardHeader>
                <CardTitle className="text-lg font-semibold flex items-center gap-2">
                  <span role="img" aria-label="training">🎓</span>
                  Email Marketing Training & Certification
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Master email marketing from zero to professional level plus job placement assistance
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

      </section>

      {/* Tools We Use Carousel */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Tools We Use
          </h2>
          <div className="overflow-hidden relative">
            <div
              ref={marqueeRef}
              className="flex gap-16 animate-marquee"
              style={{
                animation: "marquee 20s linear infinite",
                width: "max-content",
              }}
            >
              {[...TOOL_LIST, ...TOOL_LIST].map((tool, idx) => (
                <div key={idx} className="flex flex-col items-center min-w-[120px] mx-4">
                  <img
                    src={tool.logo}
                    alt={tool.name}
                    className="h-16 w-16 object-contain mb-2"
                  />
                  <span className="text-base font-medium text-brand-green">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Marquee animation style */}
        <style>
          {`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee {
              will-change: transform;
            }
          `}
        </style>
      </section>

      {/* Amplify Process & Why Inbox2Cash Stands Out */}
      <section className="py-16 px-4 bg-brand-green text-white">
        <div className="max-w-7xl mx-auto">
          {/* Amplify Process */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">AMPLIFY PROCESS</h2>
            <p className="text-center text-xl mb-8 opacity-90">
              Our proven strategy delivered to maximize your campaign, lead nurture  and conversion.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { stat: "98%", label: "Client Success Rate" },
                { stat: "200+", label: "Campaigns Launched" },
                { stat: "$250K+", label: "Revenue Generated" }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white/10 backdrop-blur p-8 rounded-lg">
                    <div className="text-4xl font-bold mb-2">{item.stat}</div>
                    <div className="text-lg opacity-90">{item.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Why Inbox2Cash Stands Out */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Inbox2Cash Stands Out</h2>
            <p className="text-center text-xl mb-8 opacity-90">
              We're more than email marketing agencies, we're strategy, and growth accelerator specialists.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold mb-4">Our Approach</h3>
                <div className="space-y-3">
                  {[
                    "Data-driven marketing strategy development",
                    "Comprehensive competitive analysis",
                    "Minimal your business support for guidance",
                    "Performance marketing expertise"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="text-brand-green-light mt-1" size={20} />
                      <span className="opacity-90">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold mb-4">Approach</h3>
                <div className="space-y-3">
                  {[
                    "Conversion rates growth within 30-90 days",
                    "Weekly performance reviews and optimizations",
                    "Ready performance reports and realizations",
                    "High converting email designs"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Star className="text-brand-green-light mt-1" size={20} />
                      <span className="opacity-90">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success You Can See */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Success You Can See</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            A glimpse into the most impactful projects and success stories.
          </p>
          <div className="flex overflow-x-auto gap-6 pb-4">
            {[
              { title: "+70% Revenue Growth", description: "Lead Revenue Marketing", client: "Podstore Storwise" },
              { title: "+200 Campaigns Launched", description: "Boosted brand reach with revenue marketing and engagement", client: "Urban Sports" },
              { title: "$250K+ Revenue Generated", description: "Generated in new revenue through comprehensive revenue-focused acquisition", client: "Fashion" }
            ].map((item, index) => (
              <Card key={index} className="min-w-[300px] hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-brand-green">{item.title}</CardTitle>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold">{item.client}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Your questions, answered.</h2>
          <p className="text-center text-muted-foreground mb-12">
            Find quick answers to questions about our activities, process, and how we can help your business without your goals.
          </p>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white p-6 rounded-lg">
              <AccordionTrigger className="text-left">
                How does your marketing approach stand out from competitors?
              </AccordionTrigger>
              <AccordionContent>
                Our approach combines data-driven strategies with creative innovation, ensuring measurable results that directly impact your bottom line.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="bg-white p-6 rounded-lg">
              <AccordionTrigger className="text-left">
                What makes your lead generation strategies effective?
              </AccordionTrigger>
              <AccordionContent>
                We use proven frameworks and automation systems that are specifically designed for ecommerce brands, ensuring consistent lead quality and conversion rates.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="bg-white p-6 rounded-lg">
              <AccordionTrigger className="text-left">
                How do you accurately measure the success of a campaign?
              </AccordionTrigger>
              <AccordionContent>
                We track key performance indicators including conversion rates, customer lifetime value, and revenue attribution, providing detailed weekly reports and insights.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

  {/* Meet Our Amazing Team */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Meet our amazing team.</h2>
          <p className="text-center text-muted-foreground mb-12">
            We are a team of strategists, designers, and developers passionate about helping businesses grow online.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { name: "Chris Curtis", role: "Founder & CEO", image: "/team/chris.jpg" },
              { name: "Chebet Gloria", role: "Co-founder", image: "/chebet.jpg" }
            ].map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-24 h-24 bg-brand-green/10 rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
                    {member.image && member.image !== "/placeholder.svg" ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover rounded-full"
                      />
                    ) : (
                      <span className="text-2xl font-bold text-brand-green">{member.name.split(' ').map(n => n[0]).join('')}</span>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

  {/* Ready to Elevate Your Brand CTA */}
      <section className="py-16 px-4 bg-brand-green text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to elevate your brand and unlock new growth?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            We'd love to hear from you! Fill out the form below, and let's discuss how we can help you achieve your goals.
          </p>
          <Link to="/contact">
            <Button variant="cta" size="lg" className="text-lg px-8 py-6">
              Get Started
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>
  {/* Newsletter Footer Anchor */}
  <div id="newsletter-footer"></div>
      </Layout>

  );
};

export default Index;
