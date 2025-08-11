import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, CheckCircle, Star, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-brand-green text-white py-20 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Email & SMS Marketing Services for Ecommerce Brands
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Email & SMS Marketing Pro. Automation",
              "Lifecycle Marketing",
              "List Marketing Strategy",
              "Cross Marketing Training & Certification"
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{service}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Comprehensive approach with automations and revolutionize how brands connect with their customers creating consistent, reliable results.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
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
              { name: "Chris Curtis", role: "Founder & CEO", image: "/placeholder.svg" },
              { name: "David Rother", role: "Creative Director", image: "/placeholder.svg" }
            ].map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-24 h-24 bg-brand-green/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-brand-green">{member.name.split(' ').map(n => n[0]).join('')}</span>
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
    </Layout>
  );
};

export default Index;
