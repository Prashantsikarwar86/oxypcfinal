import PageLayout from "@/components/PageLayout";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import BrandCard from "@/components/BrandCard";

const SellPhoneApple = () => {
  const iPhoneModels = [
    { name: "iPhone 15 Pro Max", href: "/sell-phone/iphone-15-pro-max", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400" },
    { name: "iPhone 15 Pro", href: "/sell-phone/iphone-15-pro", image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400" },
    { name: "iPhone 15 Plus", href: "/sell-phone/iphone-15-plus", image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=400" },
    { name: "iPhone 15", href: "/sell-phone/iphone-15", image: "https://images.unsplash.com/photo-1610792516307-ea5acd9c3b00?w=400" },
    { name: "iPhone 14 Pro Max", href: "/sell-phone/iphone-14-pro-max", image: "https://images.unsplash.com/photo-1526045478516-99145907023c?w=400" },
    { name: "iPhone 14 Pro", href: "/sell-phone/iphone-14-pro", image: "https://images.unsplash.com/photo-1557180295-76eee20ae8aa?w=400" },
    { name: "iPhone 14 Plus", href: "/sell-phone/iphone-14-plus", image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400" },
    { name: "iPhone 14", href: "/sell-phone/iphone-14", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400" },
    { name: "iPhone 13 Pro Max", href: "/sell-phone/iphone-13-pro-max", image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400" },
    { name: "iPhone 13 Pro", href: "/sell-phone/iphone-13-pro", image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=400" },
    { name: "iPhone 13", href: "/sell-phone/iphone-13", image: "https://images.unsplash.com/photo-1610792516307-ea5acd9c3b00?w=400" },
    { name: "iPhone 12 Pro Max", href: "/sell-phone/iphone-12-pro-max", image: "https://images.unsplash.com/photo-1526045478516-99145907023c?w=400" },
    { name: "iPhone 12 Pro", href: "/sell-phone/iphone-12-pro", image: "https://images.unsplash.com/photo-1557180295-76eee20ae8aa?w=400" },
    { name: "iPhone 12", href: "/sell-phone/iphone-12", image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400" },
    { name: "iPhone 11 Pro Max", href: "/sell-phone/iphone-11-pro-max", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400" },
    { name: "iPhone 11 Pro", href: "/sell-phone/iphone-11-pro", image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400" },
    { name: "iPhone 11", href: "/sell-phone/iphone-11", image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=400" },
    { name: "iPhone XS Max", href: "/sell-phone/iphone-xs-max", image: "https://images.unsplash.com/photo-1610792516307-ea5acd9c3b00?w=400" },
    { name: "iPhone XS", href: "/sell-phone/iphone-xs", image: "https://images.unsplash.com/photo-1526045478516-99145907023c?w=400" },
    { name: "iPhone XR", href: "/sell-phone/iphone-xr", image: "https://images.unsplash.com/photo-1557180295-76eee20ae8aa?w=400" },
  ];

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-teal-dark bg-clip-text text-transparent">
            Sell Old Apple iPhone
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Get the best value for your iPhone with instant payment
          </p>
          
          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <div className="p-6 bg-gradient-to-br from-primary/10 to-teal/10 rounded-lg animate-scale-in">
              <div className="text-3xl mb-2">💰</div>
              <h3 className="font-bold mb-1">Maximum Value</h3>
              <p className="text-sm text-muted-foreground">Best prices guaranteed</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-primary/10 to-teal/10 rounded-lg animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-3xl mb-2">⚡</div>
              <h3 className="font-bold mb-1">Same Day Payment</h3>
              <p className="text-sm text-muted-foreground">Get paid instantly</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-primary/10 to-teal/10 rounded-lg animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-3xl mb-2">🚚</div>
              <h3 className="font-bold mb-1">Free Doorstep Pickup</h3>
              <p className="text-sm text-muted-foreground">We come to you</p>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              placeholder="Search for your iPhone model..."
              className="pl-12 h-14 text-lg"
            />
          </div>
        </div>

        {/* Select Model */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Select Your iPhone Model</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {iPhoneModels.map((model, index) => (
              <div key={model.name} style={{ animationDelay: `${index * 0.05}s` }}>
                <BrandCard
                  name={model.name}
                  image={model.image}
                  href={model.href}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Steps Section */}
        <div className="mt-16 bg-gradient-to-br from-accent/20 to-primary/5 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center animate-fade-in">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="font-bold mb-2">Select Device</h3>
              <p className="text-sm text-muted-foreground">Choose your iPhone model</p>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="font-bold mb-2">Get Price</h3>
              <p className="text-sm text-muted-foreground">Instant price quote</p>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="font-bold mb-2">Schedule Pickup</h3>
              <p className="text-sm text-muted-foreground">Free doorstep service</p>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="font-bold mb-2">Get Paid</h3>
              <p className="text-sm text-muted-foreground">Instant payment</p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default SellPhoneApple;
