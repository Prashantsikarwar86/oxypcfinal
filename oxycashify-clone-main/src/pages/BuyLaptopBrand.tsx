import PageLayout from "@/components/PageLayout";
import ProductCard from "@/components/ProductCard";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Filter, ChevronDown } from "lucide-react";

interface Product {
  name: string;
  image: string;
  price: string;
  originalPrice?: string;
  discount?: string;
  rating?: number;
  badge?: string;
  href: string;
}

const catalogByBrand: Record<string, Product[]> = {
  apple: [
    {
      name: "Apple MacBook Pro 2020 13\" (Intel i5) - Refurbished",
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400",
      price: "₹37,599",
      originalPrice: "₹59,999",
      discount: "-37%",
      rating: 4.2,
      badge: "Lowest Price",
      href: "/product/apple-mbp-2020-13",
    },
    {
      name: "Apple MacBook Air 2020 (M1 13.3\") - Refurbished",
      image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=400",
      price: "₹35,999",
      originalPrice: "₹78,999",
      discount: "-54%",
      rating: 4.8,
      badge: "Lowest Price",
      href: "/product/apple-mba-2020-m1",
    },
  ],
  dell: [
    {
      name: "Dell Latitude 3420 (Intel i3 11th Gen) - Refurbished",
      image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400",
      price: "₹18,599",
      originalPrice: "₹27,999",
      discount: "-34%",
      rating: 5.0,
      badge: "Lowest Price",
      href: "/product/dell-latitude-3420",
    },
    {
      name: "Dell Vostro 3520 (Intel i3 12th Gen) - Refurbished",
      image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400",
      price: "₹24,999",
      originalPrice: "₹32,999",
      discount: "-24%",
      rating: 3.6,
      badge: "Best Value",
      href: "/product/dell-vostro-3520",
    },
  ],
  lenovo: [
    {
      name: "Lenovo ThinkPad L14 Gen 1 - Refurbished",
      image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400",
      price: "₹24,999",
      originalPrice: "₹34,299",
      discount: "-27%",
      rating: 4.2,
      badge: "Flash Sale",
      href: "/product/lenovo-thinkpad-l14",
    },
    {
      name: "Lenovo IdeaPad 3 14\" - Refurbished",
      image: "https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?w=400",
      price: "₹29,999",
      originalPrice: "₹42,999",
      discount: "-30%",
      rating: 4.7,
      badge: "Lowest Price",
      href: "/product/lenovo-ideapad-3",
    },
  ],
  hp: [
    {
      name: "HP EliteBook 840 G8 (Intel i7 11th Gen) - Refurbished",
      image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400",
      price: "₹35,099",
      originalPrice: "₹47,199",
      discount: "-26%",
      rating: 4.1,
      badge: "Flash Sale",
      href: "/product/hp-elitebook-840-g8",
    },
    {
      name: "HP EliteBook 845 G8 (Ryzen Pro 5000U) - Refurbished",
      image: "https://images.unsplash.com/photo-1555617117-08fda9b36f5b?w=400",
      price: "₹33,809",
      originalPrice: "₹43,909",
      discount: "-23%",
      rating: 4.8,
      badge: "Lowest Price",
      href: "/product/hp-elitebook-845-g8",
    },
  ],
  acer: [
    {
      name: "Acer TravelMate P2 Series - Refurbished",
      image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400",
      price: "₹24,999",
      originalPrice: "₹32,999",
      discount: "-24%",
      rating: 4.0,
      badge: "Limited Stock",
      href: "/product/acer-travelmate-p2",
    },
    {
      name: "Acer Swift 3 Series SF314 - Refurbished",
      image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400",
      price: "₹27,999",
      originalPrice: "₹35,099",
      discount: "-20%",
      rating: 4.6,
      badge: "Lowest Price",
      href: "/product/acer-swift-3",
    },
  ],
  asus: [
    {
      name: "ASUS VivoBook 14 - Refurbished",
      image: "https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?w=400",
      price: "₹26,999",
      originalPrice: "₹39,999",
      discount: "-32%",
      rating: 4.5,
      badge: "Best Seller",
      href: "/product/asus-vivobook-14",
    },
    {
      name: "ASUS ZenBook 13 - Refurbished",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400",
      price: "₹39,999",
      originalPrice: "₹58,999",
      discount: "-32%",
      rating: 4.7,
      badge: "Premium Pick",
      href: "/product/asus-zenbook-13",
    },
  ],
};

const BuyLaptopBrand = () => {
  const { brand = "laptop" } = useParams();
  const key = brand.toLowerCase();
  const products = catalogByBrand[key] || catalogByBrand["acer"];

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2 capitalize">Buy {brand} Laptops</h1>
            <p className="text-muted-foreground">Premium quality at great prices</p>
          </div>
          <Button variant="outline" className="gap-2">
            View All
            <ChevronDown className="w-4 h-4" />
          </Button>
        </div>
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

export default BuyLaptopBrand;