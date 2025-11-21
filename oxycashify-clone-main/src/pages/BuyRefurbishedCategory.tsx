import PageLayout from "@/components/PageLayout";
import ProductCard from "@/components/ProductCard";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const names: Record<string, string> = {
  smartwatches: "Refurbished Smart Watches",
  tablets: "Refurbished Tablets",
  gaming: "Refurbished Gaming Consoles",
};

const sample = (category: string, title: string) => {
  if (category === "smartwatches") {
    return [
      {
        name: `${title} A`,
        image: "https://images.unsplash.com/photo-1518443891861-9e3e05c4b0e7?w=400",
        price: "₹4,999",
        originalPrice: "₹9,999",
        discount: "-47%",
        rating: 4.7,
        badge: "Smart Upgrade",
        href: "/product/smartwatch-a",
      },
      {
        name: `${title} B`,
        image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400",
        price: "₹7,999",
        originalPrice: "₹15,999",
        discount: "-48%",
        rating: 4.6,
        badge: "Flash Sale",
        href: "/product/smartwatch-b",
      },
      {
        name: `${title} C`,
        image: "https://images.unsplash.com/photo-1518618720131-cd38b40946d5?w=400",
        price: "₹5,499",
        originalPrice: "₹10,499",
        discount: "-45%",
        rating: 4.5,
        badge: "Best Seller",
        href: "/product/smartwatch-c",
      },
    ];
  }

  return [
    {
      name: `${title} A`,
      image: "https://images.unsplash.com/photo-1557180295-76eee20ae8aa?w=400",
      price: "₹4,999",
      originalPrice: "₹9,999",
      discount: "-50%",
      rating: 4.7,
      badge: "Best Seller",
      href: "/product/sample-a",
    },
    {
      name: `${title} B`,
      image: "https://images.unsplash.com/photo-1517059224940-d4af9eec41e2?w=400",
      price: "₹7,999",
      originalPrice: "₹15,999",
      discount: "-47%",
      rating: 4.6,
      badge: "Smart Upgrade",
      href: "/product/sample-b",
    },
    {
      name: `${title} C`,
      image: "https://images.unsplash.com/photo-1526045478516-99145907023c?w=400",
      price: "₹5,499",
      originalPrice: "₹10,499",
      discount: "-48%",
      rating: 4.5,
      badge: "Flash Sale",
      href: "/product/sample-c",
    },
  ];
};

const BuyRefurbishedCategory = () => {
  const { category = "smartwatches" } = useParams();
  const title = names[category] || "Refurbished Devices";
  const products = sample(category, title);

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">{title}</h1>
            <p className="text-muted-foreground">Premium quality at great prices</p>
          </div>
          <Button variant="outline" className="gap-2">
            View All
            <ChevronDown className="w-4 h-4" />
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((p, i) => (
            <div key={p.name} style={{ animationDelay: `${i * 0.1}s` }}>
              <ProductCard {...p} />
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default BuyRefurbishedCategory;