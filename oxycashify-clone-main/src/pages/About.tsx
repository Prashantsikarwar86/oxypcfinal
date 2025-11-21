import PageLayout from "@/components/PageLayout";
import { Users, Target, Award, TrendingUp } from "lucide-react";

const About = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-teal-dark bg-clip-text text-transparent">
            About OxyPC
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            India's most trusted platform for buying and selling pre-owned electronics
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="animate-scale-in">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded with a vision to revolutionize the electronics resale market in India, OxyPC has become the go-to platform for millions of users looking to buy or sell their devices.
              </p>
              <p>
                We started our journey with a simple mission: to provide a seamless, transparent, and trustworthy platform where people can get the best value for their old devices while accessing quality refurbished electronics at affordable prices.
              </p>
              <p>
                Today, we've processed millions of transactions, helping customers across India make smart, sustainable choices while contributing to a circular economy.
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-primary/20 to-teal/10 rounded-2xl p-8 flex items-center justify-center animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <div className="text-center">
              <div className="text-6xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold mb-2">5+ Years</h3>
              <p className="text-muted-foreground">Of Excellence in Service</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-6 bg-accent/20 rounded-lg animate-scale-in">
            <div className="text-4xl font-bold text-primary mb-2">5M+</div>
            <p className="text-sm text-muted-foreground">Devices Traded</p>
          </div>
          <div className="text-center p-6 bg-accent/20 rounded-lg animate-scale-in" style={{ animationDelay: '0.1s' }}>
            <div className="text-4xl font-bold text-primary mb-2">2M+</div>
            <p className="text-sm text-muted-foreground">Happy Customers</p>
          </div>
          <div className="text-center p-6 bg-accent/20 rounded-lg animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <div className="text-4xl font-bold text-primary mb-2">50+</div>
            <p className="text-sm text-muted-foreground">Cities Covered</p>
          </div>
          <div className="text-center p-6 bg-accent/20 rounded-lg animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <div className="text-4xl font-bold text-primary mb-2">4.8★</div>
            <p className="text-sm text-muted-foreground">Customer Rating</p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-scale-in">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold mb-2">Customer First</h3>
              <p className="text-sm text-muted-foreground">
                Your satisfaction is our top priority
              </p>
            </div>
            <div className="text-center animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold mb-2">Transparency</h3>
              <p className="text-sm text-muted-foreground">
                Honest pricing and clear processes
              </p>
            </div>
            <div className="text-center animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold mb-2">Quality</h3>
              <p className="text-sm text-muted-foreground">
                Premium standards in everything we do
              </p>
            </div>
            <div className="text-center animate-scale-in" style={{ animationDelay: '0.3s' }}>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold mb-2">Innovation</h3>
              <p className="text-sm text-muted-foreground">
                Constantly improving our services
              </p>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-primary/10 to-teal/5 rounded-2xl p-8 animate-scale-in">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-muted-foreground">
              To make buying and selling electronics simple, transparent, and accessible to everyone while promoting sustainability and the circular economy.
            </p>
          </div>
          <div className="bg-gradient-to-br from-teal/10 to-primary/5 rounded-2xl p-8 animate-scale-in" style={{ animationDelay: '0.1s' }}>
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-muted-foreground">
              To become India's leading marketplace for pre-owned electronics, setting the standard for quality, trust, and customer satisfaction in the industry.
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default About;
