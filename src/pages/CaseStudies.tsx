import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Star, TrendingUp, Users } from "lucide-react";
import { Link } from "react-router-dom";

const CaseStudies = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-brand-green text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Case Studies & Testimonials
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-4xl mx-auto">
            Real results from real clients. See how we've helped brands achieve remarkable growth through strategic email and SMS marketing.
          </p>
        </div>
      </section>

      {/* Case Studies / Success Metrics */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Success You Can See</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                metric: "+70%",
                title: "Revenue Growth",
                description: "Increased monthly recurring revenue through targeted email campaigns",
                client: "Podstore Storwise",
                timeframe: "6 months",
                icon: <TrendingUp size={32} />
              },
              {
                metric: "200+",
                title: "Campaigns Launched", 
                description: "Successfully executed campaigns across multiple channels",
                client: "Urban Sports",
                timeframe: "12 months",
                icon: <Star size={32} />
              },
              {
                metric: "$250K+",
                title: "Revenue Generated",
                description: "Direct revenue attribution from email marketing automation",
                client: "Fashion Forward",
                timeframe: "8 months",
                icon: <TrendingUp size={32} />
              },
              {
                metric: "85%",
                title: "Open Rate Increase",
                description: "Improved email engagement through strategic segmentation",
                client: "TechGadgets Pro",
                timeframe: "4 months",
                icon: <Users size={32} />
              },
              {
                metric: "300%",
                title: "SMS Conversion Boost",
                description: "Enhanced SMS marketing performance with personalized messaging",
                client: "Beauty Essentials",
                timeframe: "5 months",
                icon: <Star size={32} />
              },
              {
                metric: "45%",
                title: "Customer Retention",
                description: "Improved customer lifetime value through automated flows",
                client: "Home & Garden Co",
                timeframe: "10 months",
                icon: <Users size={32} />
              }
            ].map((study, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader>
                  <div className="w-16 h-16 bg-brand-green/10 rounded-lg flex items-center justify-center mb-4 text-brand-green">
                    {study.icon}
                  </div>
                  <CardTitle className="text-3xl font-bold text-brand-green mb-2">{study.metric}</CardTitle>
                  <h3 className="text-xl font-semibold">{study.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{study.description}</p>
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-semibold text-brand-green">{study.client}</span>
                    <span className="text-muted-foreground">{study.timeframe}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-16 px-4 bg-muted">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">What Our Clients Say</h2>
          <p className="text-center text-muted-foreground mb-12">
            Our clients words reflect our commitment to excellence.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "They transformed our email marketing from an afterthought to our most reliable revenue channel. The results speak for themselves.",
                author: "Sarah Williams",
                role: "CEO",
                company: "TechFlow Solutions",
                image: "/placeholder.svg"
              },
              {
                quote: "The strategic approach brought us exactly what we needed. They delivered results that exceeded our expectations.",
                author: "Mike Thompson",
                role: "Marketing Director", 
                company: "GrowthLab",
                image: "/placeholder.svg"
              },
              {
                quote: "Their automation systems have completely changed how we engage with customers. Our retention rates have never been higher.",
                author: "Jennifer Chen",
                role: "Founder",
                company: "Wellness Studio",
                image: "/placeholder.svg"
              },
              {
                quote: "Working with Inbox2Cash was a game-changer for our business. They understand ecommerce like no other agency.",
                author: "David Rodriguez",
                role: "VP of Marketing",
                company: "SportGear Pro",
                image: "/placeholder.svg"
              },
              {
                quote: "The level of detail and strategic thinking they bring is remarkable. Every campaign is thoughtfully planned and executed.",
                author: "Amanda Foster",
                role: "Brand Manager",
                company: "Luxury Lifestyle",
                image: "/placeholder.svg"
              },
              {
                quote: "Finally, an agency that delivers on their promises. Our ROI has improved dramatically since we started working together.",
                author: "James Mitchell",
                role: "eCommerce Director",
                company: "HomeStyle",
                image: "/placeholder.svg"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-muted-foreground mb-6 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-brand-green/10 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-brand-green">
                        {testimonial.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}, {testimonial.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to elevate your brand? Book a call.
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join the growing list of successful brands that have transformed their marketing with our proven strategies.
          </p>
          <Link to="/contact">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6">
              Book Your Strategy Call
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

export default CaseStudies;