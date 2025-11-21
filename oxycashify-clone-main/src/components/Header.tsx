import { useState } from "react";
import { Search, MapPin, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { NavLink } from "@/components/NavLink";

const Header = () => {
  const [location, setLocation] = useState("Gurgaon");

  return (
    <header className="sticky top-0 z-50 bg-background border-b shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src="https://tse4.mm.bing.net/th/id/OIP.RDZlnOOhkqCs058yFZDTxAAAAA?rs=1&pid=ImgDetMain&o=7&rm=3" alt="OxyPC" className="h-12 w-12" />
            <span className="text-2xl font-bold text-primary">OxyPC</span>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                type="text"
                placeholder="Search for mobiles, accessories & More"
                className="pl-10 pr-4 py-2 w-full bg-muted/50 border-none focus-visible:ring-primary"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <NavLink to="/location" className="flex items-center gap-2 text-sm hover:text-primary transition-colors">
              <MapPin className="h-5 w-5" />
              <span className="font-medium">{location}</span>
              <ChevronDown className="h-4 w-4" />
            </NavLink>
            <NavLink to="/login">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 font-semibold">
                Login
              </Button>
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
