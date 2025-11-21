import PageLayout from "@/components/PageLayout";
import ProductCard from "@/components/ProductCard";
import { Filter, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const BuyRefurbishedLaptops = () => {
  const products = [
    {
      name: "Apple MacBook Pro 2023 A2992 (Apple M3 Pro Chip 14-inch)",
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400",
      price: "₹1,39,999",
      originalPrice: "₹2,07,999",
      discount: "-33%",
      rating: 5.0,
      badge: "Lowest Price",
      href: "/product/macbook-pro-m3",
      exchangePrice: "₹1,37,199",
    },
    {
      name: "Apple MacBook Pro 2023 A2779 (Apple M2 Pro Chip 14-inch)",
      image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400",
      price: "₹1,09,999",
      originalPrice: "₹1,79,999",
      discount: "-39%",
      rating: 4.6,
      badge: "Lowest Price",
      href: "/product/macbook-pro-m2",
      exchangePrice: "₹1,02,211",
    },
    {
      name: "Samsung Galaxy Book3 Pro Series NP940XFG (Intel Core i7)",
      image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400",
      price: "₹74,999",
      originalPrice: "₹1,03,999",
      discount: "-28%",
      rating: 4.1,
      badge: "Lowest Price",
      href: "/product/galaxy-book3-pro",
      exchangePrice: "₹73,499",
    },
    {
      name: "Apple MacBook Air 2023 A2941 (Apple M2 chip 15-inch)",
      image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=400",
      price: "₹69,999",
      originalPrice: "₹1,17,649",
      discount: "-41%",
      rating: 5.0,
      badge: "Lowest Price",
      href: "/product/macbook-air-m2-15",
      exchangePrice: "₹68,011",
    },
    {
      name: "Apple MacBook Air 2023 A3113 (Apple M3 Chip 13-inch)",
      image: "https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?w=400",
      price: "₹66,999",
      originalPrice: "₹97,299",
      discount: "-31%",
      rating: 4.8,
      badge: "Lowest Price",
      href: "/product/macbook-air-m3",
      exchangePrice: "₹65,071",
    },
    {
      name: "Dell Inspiron 15 (Intel Core i5 11th Gen)",
      image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400",
      price: "₹32,999",
      originalPrice: "₹54,990",
      discount: "-40%",
      rating: 4.5,
      badge: "Best Value",
      href: "/product/dell-inspiron-15",
      exchangePrice: "₹31,999",
    },
  ];

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8 animate-fade-in">
          <div>
            <h1 className="text-4xl font-bold mb-2">Refurbished Laptops</h1>
            <p className="text-muted-foreground">Premium certified laptops at incredible prices</p>
          </div>
          <Button variant="outline" className="gap-2">
            View All
            <ChevronDown className="w-4 h-4" />
          </Button>
        </div>

        {/* Filters */}
        <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
          <Button variant="outline" className="gap-2 whitespace-nowrap">
            <Filter className="w-4 h-4" />
            All Filters
          </Button>
          <Button variant="outline" className="whitespace-nowrap">Brand</Button>
          <Button variant="outline" className="whitespace-nowrap">Processor</Button>
          <Button variant="outline" className="whitespace-nowrap">RAM</Button>
          <Button variant="outline" className="whitespace-nowrap">Storage</Button>
          <Button variant="outline" className="whitespace-nowrap">Screen Size</Button>
          <Button variant="outline" className="whitespace-nowrap">Price Range</Button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div key={product.name} style={{ animationDelay: `${index * 0.1}s` }}>
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="mt-16 bg-gradient-to-br from-primary/10 to-teal/5 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-center mb-8">Why Choose Refurbished Laptops?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center animate-scale-in">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="font-bold mb-2">Certified Quality</h3>
              <p className="text-sm text-muted-foreground">
                Professionally tested
              </p>
            </div>
            <div className="text-center animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="font-bold mb-2">Expert Refurbished</h3>
              <p className="text-sm text-muted-foreground">
                Restored to perfection
              </p>
            </div>
            <div className="text-center animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="font-bold mb-2">Warranty Included</h3>
              <p className="text-sm text-muted-foreground">
                Up to 1 year coverage
              </p>
            </div>
            <div className="text-center animate-scale-in" style={{ animationDelay: '0.3s' }}>
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="font-bold mb-2">Eco-Friendly</h3>
              <p className="text-sm text-muted-foreground">
                Sustainable choice
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default BuyRefurbishedLaptops;
