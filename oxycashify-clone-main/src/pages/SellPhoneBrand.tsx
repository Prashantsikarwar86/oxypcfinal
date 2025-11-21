import PageLayout from "@/components/PageLayout";
import { useParams } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import BrandCard from "@/components/BrandCard";

const data: Record<string, { models: { name: string; href: string; image?: string; icon?: string }[] }> = {
  xiaomi: {
    models: [
      { name: "Redmi Note 11 Pro", href: "/sell-phone/redmi-note-11-pro", image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400" },
      { name: "Redmi Note 10", href: "/sell-phone/redmi-note-10", image: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=400" },
      { name: "Mi 11X", href: "/sell-phone/mi-11x", image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=400" },
      { name: "Redmi 9 Power", href: "/sell-phone/redmi-9-power", image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400" },
    ],
  },
  samsung: {
    models: [
      { name: "Galaxy S21", href: "/sell-phone/galaxy-s21", image: "https://images.unsplash.com/photo-1610792516307-ea5acd9c3b00?w=400" },
      { name: "Galaxy Note 20", href: "/sell-phone/galaxy-note-20", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400" },
      { name: "Galaxy A52", href: "/sell-phone/galaxy-a52", image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=400" },
      { name: "Galaxy M31", href: "/sell-phone/galaxy-m31", image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400" },
    ],
  },
  oneplus: {
    models: [
      { name: "OnePlus 11", href: "/sell-phone/oneplus-11", image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400" },
      { name: "OnePlus 10 Pro", href: "/sell-phone/oneplus-10-pro", image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=400" },
      { name: "OnePlus Nord CE 2", href: "/sell-phone/oneplus-nord-ce2", image: "https://images.unsplash.com/photo-1557180295-76eee20ae8aa?w=400" },
      { name: "OnePlus 9", href: "/sell-phone/oneplus-9", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400" },
    ],
  },
  nokia: {
    models: [
      { name: "Nokia X20", href: "/sell-phone/nokia-x20", image: "https://images.unsplash.com/photo-1610792516307-ea5acd9c3b00?w=400" },
      { name: "Nokia G20", href: "/sell-phone/nokia-g20", image: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=400" },
      { name: "Nokia 5.4", href: "/sell-phone/nokia-5-4", image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400" },
      { name: "Nokia 7.2", href: "/sell-phone/nokia-7-2", image: "https://images.unsplash.com/photo-1557180295-76eee20ae8aa?w=400" },
    ],
  },
  poco: {
    models: [
      { name: "Poco X5 Pro", href: "/sell-phone/poco-x5-pro", image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400" },
      { name: "Poco F4", href: "/sell-phone/poco-f4", image: "https://images.unsplash.com/photo-1557180295-76eee20ae8aa?w=400" },
      { name: "Poco M4 Pro", href: "/sell-phone/poco-m4-pro", image: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=400" },
      { name: "Poco X3", href: "/sell-phone/poco-x3", image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400" },
    ],
  },
};

const SellPhoneBrand = () => {
  const params = useParams();
  const brandKey = (params.brand || "").toLowerCase();
  const brand = data[brandKey] || { models: [] };

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold capitalize">Sell {brandKey} Phones</h1>
          <p className="text-muted-foreground">Get instant price and free pickup</p>
        </div>

        <div className="mb-8 max-w-xl">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input placeholder={`Search ${brandKey} models`} className="pl-10 h-12" />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {brand.models.map((m, i) => (
            <div key={m.name} style={{ animationDelay: `${i * 0.05}s` }}>
              <BrandCard name={m.name} image={m.image} href={m.href} />
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default SellPhoneBrand;