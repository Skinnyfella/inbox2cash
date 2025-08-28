import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Award, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const Process = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-brand-green text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Innovation meets strategy, <span className="text-brand-green-light">fueling growth.</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-4xl mx-auto font-light">
            At Inbox2Cash we build direct-line email marketing and SMS marketing systems that put you back in control of your ecommerce revenue. Our proven AMPLIFY™ framework means you see results in months, and every system is built to scale as your ecommerce business grows.
          </p>
        </div>
      </section>
{/* Process Intro & 3-Stage Section */}
      <section className="py-16 px-4 bg-muted">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-center text-brand-green mb-8">
            The AMPLIFY™ Framework
          </h2>
          {/* Intro Text */}
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Inbox2Cash, we deliver measurable results through our systematic AMPLIFY™ methodology. This proven{' '}
              <span className="font-extrabold text-brand-green">
                ASSESS &rarr; BUILD &rarr; OPTIMIZE
              </span>{' '}
              process ensures immediate returns while building long-term digital marketing success for your business.
            </p>
          </div>
          {/* 3-Stage Process */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* PHASE 1: ASSESS */}
            <Card className="shadow-lg border-2 border-brand-green">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-brand-green mb-2">PHASE 1: ASSESS <span className="block text-base font-medium text-muted-foreground">Days 1-7</span></CardTitle>
                <p className="font-semibold mb-2">Strategic Foundation & Performance Analysis</p>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-4 space-y-2 text-muted-foreground text-base">
                  <li>Email Marketing Audit: Complete platform analysis and deliverability optimization</li>
                  <li>SMS Marketing Review: Compliance assessment and subscriber engagement analysis</li>
                  <li>Customer Journey Mapping: Full touchpoint analysis and optimization opportunities</li>
                  <li>Competitive Research: Performance benchmarking against your market</li>
                  <li>Strategic Roadmap: 60-day success plan with clear KPIs and milestones</li>
                </ul>
              </CardContent>
            </Card>
            {/* PHASE 2: BUILD */}
            <Card className="shadow-lg border-2 border-brand-green">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-brand-green mb-2">PHASE 2: BUILD <span className="block text-base font-medium text-muted-foreground">Days 7-45</span></CardTitle>
                <p className="font-semibold mb-2">Campaign Development & Implementation</p>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-4 space-y-2 text-muted-foreground text-base">
                  <li>Lead Generation Setup: Optimized sign-up forms and conversion-focused opt-ins</li>
                  <li>Automation Development: Creation of 8+ high-converting email and SMS workflows</li>
                  <li>Content Creation: Strategic campaign execution with compelling copy and creative</li>
                  <li>Cross-Channel Integration: Seamless email and SMS coordination</li>
                  <li>Performance Tracking: Weekly progress reports and optimization recommendations</li>
                </ul>
              </CardContent>
            </Card>
            {/* PHASE 3: OPTIMIZE */}
            <Card className="shadow-lg border-2 border-brand-green">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-brand-green mb-2">PHASE 3: OPTIMIZE <span className="block text-base font-medium text-muted-foreground">Days 45+</span></CardTitle>
                <p className="font-semibold mb-2">Scaling & Continuous Improvement</p>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-4 space-y-2 text-muted-foreground text-base">
                  <li>Campaign Scaling: Strategic expansion of top-performing initiatives</li>
                  <li>Advanced Testing: Weekly A/B testing across all channels and touchpoints</li>
                  <li>Strategy Innovation: Implementation of new angles and growth opportunities</li>
                  <li>Performance Optimization: Data-driven refinements and conversion improvements</li>
                  <li>Ongoing Reporting: Weekly detailed analytics and strategic recommendations</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Ready to Elevate Your Brand CTA */}
            <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to elevate your brand? Book a call.
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join the growing list of successful brands that have transformed their marketing with our proven strategies.
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

export default Process;