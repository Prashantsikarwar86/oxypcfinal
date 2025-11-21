import PageLayout from "@/components/PageLayout";
import HeroCarousel from "@/components/HeroCarousel";
import ServicesGrid from "@/components/ServicesGrid";
import DeviceCarousel from "@/components/DeviceCarousel";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Index = () => {
  return (
    <PageLayout>
      <HeroCarousel />
      <ServicesGrid />
      <DeviceCarousel />
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Featured</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a href="/sell-phone/brands" className="block rounded-xl overflow-hidden shadow-card hover:shadow-hover transition-all hover:-translate-y-1">
              <img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800" alt="Sell Phone" className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold">Sell Phone</h3>
                <p className="text-sm text-muted-foreground">Get instant price and free pickup</p>
              </div>
            </a>
            <a href="/buy-refurbished/phones" className="block rounded-xl overflow-hidden shadow-card hover:shadow-hover transition-all hover:-translate-y-1">
              <img src="https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800" alt="Buy Gadgets" className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold">Buy Gadgets</h3>
                <p className="text-sm text-muted-foreground">Certified refurbished at unbeatable prices</p>
              </div>
            </a>
            <a href="/find-new/phone" className="block rounded-xl overflow-hidden shadow-card hover:shadow-hover transition-all hover:-translate-y-1">
              <img src="https://images.unsplash.com/photo-1557180295-76eee20ae8aa?w=800" alt="Find New Phone" className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold">Find New Phone</h3>
                <p className="text-sm text-muted-foreground">Compare, filter and pick the best</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold">Buy Refurbished Devices</h2>
              <p className="text-muted-foreground">Premium quality at unbeatable prices</p>
            </div>
            <Button variant="outline" className="gap-2">
              View All
              <ChevronDown className="w-4 h-4" />
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Xiaomi Redmi 9i - Refurbished",
                image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400",
                price: "₹5,299",
                originalPrice: "₹9,199",
                discount: "-42%",
                rating: 4.7,
                badge: "Smart Upgrade Sale",
                href: "/product/redmi-9i",
              },
              {
                name: "Xiaomi Redmi Note 11 Pro Plus 5G - Refurbished",
                image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400",
                price: "₹10,299",
                originalPrice: "₹24,299",
                discount: "-58%",
                rating: 4.9,
                badge: "Flash Sale",
                href: "/product/redmi-note-11-pro",
              },
              {
                name: "OnePlus Nord CE 2 Lite 5G - Refurbished",
                image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=400",
                price: "₹9,499",
                originalPrice: "₹22,600",
                discount: "-58%",
                rating: 4.8,
                badge: "Smart Upgrade Sale",
                href: "/product/oneplus-nord-ce2",
              },
              {
                name: "Xiaomi Redmi Note 9 - Refurbished",
                image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400",
                price: "₹6,399",
                originalPrice: "₹12,299",
                discount: "-48%",
                rating: 4.6,
                badge: "Smart Upgrade Sale",
                href: "/product/redmi-note-9",
              },
            ].map((p, i) => (
              <div key={p.name} style={{ animationDelay: `${i * 0.1}s` }}>
                <ProductCard {...p} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold">Refurbished Laptops</h2>
              <p className="text-muted-foreground">Certified quality at great prices</p>
            </div>
            <Button variant="outline" className="gap-2">
              View All
              <ChevronDown className="w-4 h-4" />
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Apple MacBook Pro 14 \" - Refurbished",
                image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400",
                price: "₹1,39,999",
                originalPrice: "₹2,07,999",
                discount: "-33%",
                rating: 5.0,
                badge: "Lowest Price",
                href: "/product/macbook-pro-14",
              },
              {
                name: "Samsung Galaxy Book - Refurbished",
                image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400",
                price: "₹74,999",
                originalPrice: "₹1,03,999",
                discount: "-28%",
                rating: 4.6,
                badge: "Lowest Price",
                href: "/product/galaxy-book",
              },
              {
                name: "Apple MacBook Air 13 \" - Refurbished",
                image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400",
                price: "₹66,999",
                originalPrice: "₹97,649",
                discount: "-31%",
                rating: 4.8,
                badge: "Lowest Price",
                href: "/product/macbook-air-13",
              },
            ].map((p, i) => (
              <div key={p.name} style={{ animationDelay: `${i * 0.1}s` }}>
                <ProductCard {...p} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Recent News</h2>
            <a href="#" className="text-primary">See all</a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Vivo X300 Series Price Leak: India Pricing Revealed",
                image: "https://images.unsplash.com/photo-1603575449514-169df162b21d?w=800",
                date: "20th Nov 2025",
              },
              {
                title: "Nothing OS 4.0 Release Date Set For Tomorrow",
                image: "https://images.unsplash.com/photo-1517059224940-d4af9eec41e2?w=800",
                date: "20th Nov 2025",
              },
              {
                title: "POCO F8 Pro And F8 Ultra Leaks: Flagship Power",
                image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800",
                date: "20th Nov 2025",
              },
              {
                title: "Realme 16 Pro Leaks Reveal Storage Options",
                image: "https://images.unsplash.com/photo-1557180295-76eee20ae8aa?w=800",
                date: "19th Nov 2025",
              },
            ].map((n) => (
              <a key={n.title} href="#" className="block rounded-xl overflow-hidden shadow-card hover:shadow-hover transition-all">
                <img src={n.image} alt={n.title} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold mb-1 line-clamp-2">{n.title}</h3>
                  <p className="text-xs text-muted-foreground">{n.date}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Recent Reviews</h2>
            <a href="#" className="text-primary">See all</a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "iPhone 15 Pro Max - Long Term Review",
                image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800",
              },
              {
                title: "Samsung Galaxy A52 - Value King",
                image: "https://images.unsplash.com/photo-1610792516307-ea5acd9c3b00?w=800",
              },
              {
                title: "OnePlus Nord CE 2 Lite - Still Worth It",
                image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800",
              },
              {
                title: "Redmi Note 11 Pro Plus - Battery Beast",
                image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800",
              },
            ].map((r) => (
              <a key={r.title} href="#" className="block rounded-xl overflow-hidden shadow-card hover:shadow-hover transition-all">
                <img src={r.image} alt={r.title} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold mb-1 line-clamp-2">{r.title}</h3>
                  <p className="text-xs text-muted-foreground">Expert Review</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Popular Cities</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {[
              { name: "Bangalore" },
              { name: "Chennai" },
              { name: "Delhi" },
              { name: "Gurgaon" },
              { name: "Hyderabad" },
              { name: "Kolkata" },
              { name: "Mumbai" },
              { name: "Pune" },
            ].map((c) => (
              <a key={c.name} href="/stores" className="group p-4 rounded-xl bg-background shadow-card hover:shadow-hover flex flex-col items-center gap-2">
                <div className="w-16 h-16 rounded-lg bg-accent/20 flex items-center justify-center overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=200" alt={c.name} className="object-cover w-full h-full" />
                </div>
                <span className="text-sm font-medium group-hover:text-primary">{c.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;
