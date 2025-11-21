import { Smartphone, ShoppingBag, Laptop, Wrench, Search, Store, Watch, Recycle } from "lucide-react";

const services = [
  {
    id: 1,
    name: "Sell Phone",
    icon: Smartphone,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400",
    href: "/sell-phone",
    color: "from-teal-100 to-teal-50",
  },
  {
    id: 2,
    name: "Buy Gadgets",
    icon: ShoppingBag,
    image: "https://images.unsplash.com/photo-1517059224940-d4af9eec41e2?w=400",
    href: "/buy-gadgets",
    color: "from-blue-100 to-blue-50",
  },
  {
    id: 3,
    name: "Buy Phone",
    icon: Smartphone,
    image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=400",
    href: "/buy-phone",
    color: "from-purple-100 to-purple-50",
  },
  {
    id: 4,
    name: "Buy Laptops",
    icon: Laptop,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400",
    href: "/buy-laptops",
    color: "from-indigo-100 to-indigo-50",
  },
  {
    id: 5,
    name: "Repair Phone",
    icon: Wrench,
    href: "/repair-phone",
    color: "from-pink-100 to-pink-50",
  },
  {
    id: 6,
    name: "Repair Laptop",
    icon: Wrench,
    href: "/repair-laptop",
    color: "from-orange-100 to-orange-50",
  },
  {
    id: 7,
    name: "Find New Phone",
    icon: Search,
    image: "https://images.unsplash.com/photo-1557180295-76eee20ae8aa?w=400",
    href: "/find-new-phone",
    color: "from-cyan-100 to-cyan-50",
  },
  {
    id: 8,
    name: "Nearby Stores",
    icon: Store,
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=400",
    href: "/stores",
    color: "from-emerald-100 to-emerald-50",
  },
  {
    id: 9,
    name: "Buy Smartwatches",
    icon: Watch,
    image: "https://images.unsplash.com/photo-1518443891861-9e3e05c4b0e7?w=400",
    href: "/buy-smartwatches",
    color: "from-violet-100 to-violet-50",
  },
  {
    id: 10,
    name: "Recycle",
    icon: Recycle,
    href: "/recycle",
    color: "from-green-100 to-green-50",
  },
];

const ServicesGrid = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-foreground">Our Services</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <a
                key={service.id}
                href={service.href}
                className="group flex flex-col items-center justify-center p-6 rounded-xl bg-gradient-to-br shadow-card hover:shadow-hover transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                style={{
                  backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))`,
                }}
              >
                <div className={`bg-gradient-to-br ${service.color} p-4 rounded-2xl mb-4 group-hover:scale-110 transition-transform`}>  
                  {service.image ? (
                    <div className="aspect-square bg-accent/20 rounded-lg flex items-center justify-center overflow-hidden">
                      <img src={service.image} alt={service.name} className="h-16 w-16 object-contain" />
                    </div>
                  ) : (
                    <Icon className="h-12 w-12 text-primary" />
                  )}
                </div>
                <h3 className="text-sm font-semibold text-center text-foreground">
                  {service.name}
                </h3>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
