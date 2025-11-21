import PageLayout from "@/components/PageLayout";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";

const Contact = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-muted-foreground">
            We're here to help. Get in touch with us!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8 animate-scale-in">
            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <Input placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input type="email" placeholder="your.email@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Phone</label>
                <Input type="tel" placeholder="+91 9876543210" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <Textarea placeholder="How can we help you?" rows={5} />
              </div>
              <Button className="w-full" size="lg">
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="p-6 animate-scale-in hover:shadow-hover transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold mb-2">Phone</h3>
                  <p className="text-muted-foreground">+91 9876543210</p>
                  <p className="text-muted-foreground">Mon-Sat, 9AM-7PM</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 animate-scale-in hover:shadow-hover transition-all" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold mb-2">Email</h3>
                  <p className="text-muted-foreground">support@oxypc.com</p>
                  <p className="text-muted-foreground">We'll respond within 24 hours</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 animate-scale-in hover:shadow-hover transition-all" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold mb-2">Head Office</h3>
                  <p className="text-muted-foreground">
                    Sector 62, Noida<br />
                    Uttar Pradesh 201301<br />
                    India
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 animate-scale-in hover:shadow-hover transition-all bg-gradient-to-br from-primary to-teal text-primary-foreground" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold mb-2">Live Chat</h3>
                  <p className="mb-4 opacity-90">
                    Get instant support from our team
                  </p>
                  <Button variant="secondary" size="sm">
                    Start Chat
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Store Locations */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">Visit Our Stores</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { city: "Delhi", address: "Connaught Place" },
              { city: "Gurgaon", address: "Cyber City" },
              { city: "Noida", address: "Sector 18" },
              { city: "Bengaluru", address: "Koramangala" },
            ].map((store, index) => (
              <Card key={store.city} className="p-6 text-center hover:shadow-hover transition-all animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-3xl mb-3">🏪</div>
                <h3 className="font-bold mb-1">{store.city}</h3>
                <p className="text-sm text-muted-foreground">{store.address}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Contact;
