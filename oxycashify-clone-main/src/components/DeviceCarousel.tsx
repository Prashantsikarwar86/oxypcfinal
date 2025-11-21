import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

interface Device {
  id: number;
  name: string;
  image: string;
  href: string;
}

const devices: Device[] = [
  { id: 1, name: "Smartphone", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400", href: "/sell-phone/brands" },
  { id: 2, name: "Laptop", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400", href: "/sell-gadgets/laptop" },
  { id: 3, name: "Smart TV", image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=400", href: "/sell-gadgets/tv" },
  { id: 4, name: "Tablet", image: "https://images.unsplash.com/photo-1526045478516-99145907023c?w=400", href: "/sell-gadgets/tablet" },
  { id: 5, name: "Gaming Console", image: "https://images.unsplash.com/photo-1606813907291-5dd3a1071797?w=400", href: "/sell-gadgets/gaming-consoles" },
  { id: 6, name: "Smartwatch", image: "https://images.unsplash.com/photo-1518443891861-9e3e05c4b0e7?w=400", href: "/sell-gadgets/smartwatch" },
  { id: 7, name: "Speaker", image: "https://images.unsplash.com/photo-1518443891861-9e3e05c4b0e7?w=400", href: "/sell-gadgets/smart-speaker" },
];

const DeviceCarousel = () => {
  const [startIndex, setStartIndex] = useState(0);
  const itemsToShow = 6;

  const handlePrevious = () => {
    setStartIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => 
      Math.min(devices.length - itemsToShow, prev + 1)
    );
  };

  const visibleDevices = devices.slice(startIndex, startIndex + itemsToShow);

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-foreground">
          Sell Your Old Device Now
        </h2>

        <div className="relative">
          {/* Left Arrow */}
          {startIndex > 0 && (
            <button
              onClick={handlePrevious}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-primary text-primary-foreground rounded-full p-2 shadow-elevated hover:scale-110 transition-transform"
              aria-label="Previous devices"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
          )}

          {/* Device Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {visibleDevices.map((device) => (
              <a
                key={device.id}
                href={device.href}
                className="bg-background rounded-xl p-6 shadow-card hover:shadow-hover transition-all duration-300 hover:scale-105 cursor-pointer group block"
              >
                <div className="mb-3 aspect-square bg-accent/20 rounded-lg flex items-center justify-center overflow-hidden group-hover:bg-accent/30">
                  <img src={device.image} alt={device.name} className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="text-sm font-medium text-center text-foreground">
                  {device.name}
                </h3>
              </a>
            ))}
          </div>

          {/* Right Arrow */}
          {startIndex < devices.length - itemsToShow && (
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-primary text-primary-foreground rounded-full p-2 shadow-elevated hover:scale-110 transition-transform"
              aria-label="Next devices"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default DeviceCarousel;
