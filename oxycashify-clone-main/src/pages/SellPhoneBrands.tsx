import PageLayout from "@/components/PageLayout";
import BrandCard from "@/components/BrandCard";

const brands = [
  { name: "Apple", href: "/sell-phone/apple", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400" },
  { name: "Xiaomi", href: "/sell-phone/xiaomi", image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400" },
  { name: "Samsung", href: "/sell-phone/samsung", image: "https://images.unsplash.com/photo-1610792516307-ea5acd9c3b00?w=400" },
  { name: "OnePlus", href: "/sell-phone/oneplus", image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=400" },
  { name: "Nokia", href: "/sell-phone/nokia", image: "https://images.unsplash.com/photo-1557180295-76eee20ae8aa?w=400" },
  { name: "Poco", href: "/sell-phone/poco", image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400" },
];

const SellPhoneBrands = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">Select Your Brand</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {brands.map((b, i) => (
            <div key={b.name} style={{ animationDelay: `${i * 0.05}s` }}>
              <BrandCard name={b.name} image={b.image} href={b.href} />
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default SellPhoneBrands;