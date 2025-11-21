import PageLayout from "@/components/PageLayout";
import ProductCard from "@/components/ProductCard";
import { Filter, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const BuyRefurbishedPhones = () => {
  const products = [
    {
      name: "Xiaomi Redmi 9i - Refurbished",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400",
      price: "₹5,299",
      originalPrice: "₹9,199",
      discount: "-42%",
      rating: 4.7,
      badge: "Smart Upgrade Sale",
      href: "/product/redmi-9i",
      exchangePrice: "₹4,605",
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
      exchangePrice: "₹9,505",
    },
    {
      name: "Xiaomi Redmi 9 Power - Refurbished",
      image: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=400",
      price: "₹5,799",
      originalPrice: "₹10,699",
      discount: "-46%",
      rating: 4.7,
      badge: "Flash Sale",
      href: "/product/redmi-9-power",
      exchangePrice: "₹5,095",
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
      exchangePrice: "₹8,721",
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
      exchangePrice: "₹5,683",
    },
    {
      name: "Samsung Galaxy A52 - Refurbished",
      image: "https://images.unsplash.com/photo-1610792516307-ea5acd9c3b00?w=400",
      price: "₹12,999",
      originalPrice: "₹26,499",
      discount: "-51%",
      rating: 4.8,
      badge: "Best Seller",
      href: "/product/galaxy-a52",
      exchangePrice: "₹11,999",
    },
  ];

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8 animate-fade-in">
          <div>
            <h1 className="text-4xl font-bold mb-2">Buy Refurbished Devices</h1>
            <p className="text-muted-foreground">Premium quality at unbeatable prices</p>
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
          <Button variant="outline" className="whitespace-nowrap">Price Range</Button>
          <Button variant="outline" className="whitespace-nowrap">Condition</Button>
          <Button variant="outline" className="whitespace-nowrap">RAM</Button>
          <Button variant="outline" className="whitespace-nowrap">Storage</Button>
          <Button variant="outline" className="whitespace-nowrap">Warranty</Button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div key={product.name} style={{ animationDelay: `${index * 0.1}s` }}>
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        {/* Why Refurbished Section */}
        <div className="mt-16 bg-gradient-to-br from-primary/10 to-teal/5 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-center mb-8">Why Buy Refurbished?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center animate-scale-in">
              <div className="text-4xl mb-4">💎</div>
              <h3 className="font-bold mb-2">Quality Assured</h3>
              <p className="text-sm text-muted-foreground">
                Every device is thoroughly tested and certified
              </p>
            </div>
            <div className="text-center animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="font-bold mb-2">Warranty Included</h3>
              <p className="text-sm text-muted-foreground">
                Up to 6 months warranty on all devices
              </p>
            </div>
            <div className="text-center animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl mb-4">💰</div>
              <h3 className="font-bold mb-2">Save Big</h3>
              <p className="text-sm text-muted-foreground">
                Save up to 60% compared to new devices
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default BuyRefurbishedPhones;
