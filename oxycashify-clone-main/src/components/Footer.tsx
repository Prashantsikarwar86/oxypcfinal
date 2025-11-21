import { NavLink } from "@/components/NavLink";
import { Facebook, Twitter, Instagram, Youtube, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Services */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Services</h3>
            <ul className="space-y-2">
              <li><NavLink to="/sell-phone" className="text-muted-foreground hover:text-primary transition-colors">Sell Phone</NavLink></li>
              <li><NavLink to="/sell-gadgets/laptop" className="text-muted-foreground hover:text-primary transition-colors">Sell Laptop</NavLink></li>
              <li><NavLink to="/buy-refurbished/phones" className="text-muted-foreground hover:text-primary transition-colors">Buy Refurbished</NavLink></li>
              <li><NavLink to="/repair-phone" className="text-muted-foreground hover:text-primary transition-colors">Repair Phone</NavLink></li>
              <li><NavLink to="/find-new/phone" className="text-muted-foreground hover:text-primary transition-colors">Find New Phone</NavLink></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Company</h3>
            <ul className="space-y-2">
              <li><NavLink to="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</NavLink></li>
              <li><NavLink to="/careers" className="text-muted-foreground hover:text-primary transition-colors">Careers</NavLink></li>
              <li><NavLink to="/articles" className="text-muted-foreground hover:text-primary transition-colors">Articles</NavLink></li>
              <li><NavLink to="/press" className="text-muted-foreground hover:text-primary transition-colors">Press Releases</NavLink></li>
              <li><NavLink to="/partner" className="text-muted-foreground hover:text-primary transition-colors">Become Partner</NavLink></li>
            </ul>
          </div>

          {/* Sell Device */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Sell Device</h3>
            <ul className="space-y-2">
              <li><NavLink to="/sell-phone" className="text-muted-foreground hover:text-primary transition-colors">Mobile Phone</NavLink></li>
              <li><NavLink to="/sell-gadgets/laptop" className="text-muted-foreground hover:text-primary transition-colors">Laptop</NavLink></li>
              <li><NavLink to="/sell-gadgets/tablet" className="text-muted-foreground hover:text-primary transition-colors">Tablet</NavLink></li>
              <li><NavLink to="/sell-gadgets/imac" className="text-muted-foreground hover:text-primary transition-colors">iMac</NavLink></li>
              <li><NavLink to="/sell-gadgets/gaming-consoles" className="text-muted-foreground hover:text-primary transition-colors">Gaming Consoles</NavLink></li>
            </ul>
          </div>

          {/* Help & Support */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Help & Support</h3>
            <ul className="space-y-2">
              <li><NavLink to="/faq" className="text-muted-foreground hover:text-primary transition-colors">FAQ</NavLink></li>
              <li><NavLink to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</NavLink></li>
              <li><NavLink to="/warranty" className="text-muted-foreground hover:text-primary transition-colors">Warranty Policy</NavLink></li>
              <li><NavLink to="/refund" className="text-muted-foreground hover:text-primary transition-colors">Refund Policy</NavLink></li>
            </ul>
          </div>

          {/* More Info */}
          <div>
            <h3 className="font-bold text-foreground mb-4">More Info</h3>
            <ul className="space-y-2">
              <li><NavLink to="/terms" className="text-muted-foreground hover:text-primary transition-colors">Terms & Conditions</NavLink></li>
              <li><NavLink to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</NavLink></li>
              <li><NavLink to="/terms-of-use" className="text-muted-foreground hover:text-primary transition-colors">Terms of Use</NavLink></li>
              <li><NavLink to="/e-waste" className="text-muted-foreground hover:text-primary transition-colors">E-Waste Policy</NavLink></li>
              <li><NavLink to="/device-safety" className="text-muted-foreground hover:text-primary transition-colors">Device Safety</NavLink></li>
            </ul>
          </div>
        </div>

        {/* Social & Chat */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <span className="text-muted-foreground">Follow us on</span>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
            <button className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl">
              <MessageCircle className="w-5 h-5" />
              Chat with Us
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 pt-8 border-t border-border text-muted-foreground text-sm">
          © 2025 OxyPC. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
