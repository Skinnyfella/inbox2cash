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
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-4xl mx-auto">
            Helping businesses thrive with innovative digital strategies, creative solutions, and measurable outcomes.
          </p>
        </div>
      </section>

      {/* Two-Column Text Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-green">
                Inspiring trust through results and integrity
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Our marketing focus is rooted in creating smart strategies that 
                  build authentic connections between brands and their audiences.
                </p>
                <p>
                  By combining data-driven insights with creative execution, we deliver 
                  campaigns that not only capture attention but drive meaningful engagement and growth.
                </p>
                <ul className="space-y-2 mt-6">
                  <li>• Creative for review and global brands</li>
                  <li>• Built in with marketing strategy</li>
                  <li>• Results focused approach</li>
                </ul>
              </div>
            </div>

            {/* Right Column */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-green">
                Driving brands forward with strategy & results
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Our team brings together digital strategists, highly-experienced designers that deliver 
                  strategies and systems that drive businesses to new levels of success.
                </p>
                <p>
                  From comprehensive market analysis to targeted campaign execution, 
                  we ensure every initiative is aligned with your business objectives and delivers measurable ROI.
                </p>
                <ul className="space-y-2 mt-6">
                  <li>• Top strategic thinking</li>
                  <li>• Data analysis & insights</li>
                  <li>• Performance & optimization</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards and Recognitions */}
      <section className="py-16 px-4 bg-brand-green text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Awards and Recognitions</h2>
          <p className="text-center text-xl mb-12 opacity-90">
            Some awards that showcase the quality of everything we do.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Best Digital Marketing Agency", year: "2025", category: "Excellence Award" },
              { title: "Top SEO Innovation Leader", year: "2024", category: "Innovation Award" },
              { title: "Most Disruptive Ad Strategy", year: "2024", category: "Innovation Award" },
              { title: "Excellence in Brand Growth", year: "2023", category: "Growth Award" }
            ].map((award, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur border-white/20 text-white hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-brand-green-light rounded-full flex items-center justify-center">
                    <Award size={32} />
                  </div>
                  <CardTitle className="text-lg font-bold mb-2">{award.title}</CardTitle>
                  <p className="text-brand-green-light font-semibold">{award.year}</p>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm opacity-90">{award.category}</p>
                </CardContent>
              </Card>
            ))}
          </div>
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

export default Process;