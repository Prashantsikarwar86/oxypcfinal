import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { NavLink } from "@/components/NavLink";

interface MenuProps {
  label: string;
  items?: {
    title?: string;
    links: { name: string; href: string }[];
  }[];
  href?: string;
}

const Navigation = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const menus: MenuProps[] = [
    { label: "All", href: "/" },
    {
      label: "Sell Phone",
      items: [
        {
          title: "Top Brands",
          links: [
            { name: "Apple", href: "/sell-phone/apple" },
            { name: "Xiaomi", href: "/sell-phone/xiaomi" },
            { name: "Samsung", href: "/sell-phone/samsung" },
            { name: "Oneplus", href: "/sell-phone/oneplus" },
            { name: "Nokia", href: "/sell-phone/nokia" },
            { name: "Poco", href: "/sell-phone/poco" },
            { name: "More Phone Brands", href: "/sell-phone/brands" },
          ],
        },
        {
          title: "Top Selling Phones",
          links: [
            { name: "Apple iPhone 12", href: "/sell-phone/iphone-12" },
            { name: "Samsung Galaxy Note 20", href: "/sell-phone/galaxy-note-20" },
            { name: "Apple iPhone 11", href: "/sell-phone/iphone-11" },
          ],
        },
      ],
    },
    {
      label: "Sell Gadgets",
      items: [
        {
          links: [
            { name: "Phone", href: "/sell-gadgets/phone" },
            { name: "Laptop", href: "/sell-gadgets/laptop" },
            { name: "Smart Speaker", href: "/sell-gadgets/smart-speaker" },
            { name: "Tablet", href: "/sell-gadgets/tablet" },
            { name: "Gaming Consoles", href: "/sell-gadgets/gaming-consoles" },
            { name: "iMac", href: "/sell-gadgets/imac" },
            { name: "Smartwatch", href: "/sell-gadgets/smartwatch" },
            { name: "TV", href: "/sell-gadgets/tv" },
          ],
        },
      ],
    },
    {
      label: "Buy Refurbished Devices",
      items: [
        {
          links: [
            { name: "Refurbished Phones", href: "/buy-refurbished/phones" },
            { name: "Refurbished Laptops", href: "/buy-refurbished/laptops" },
            { name: "Refurbished Smart Watches", href: "/buy-refurbished/smartwatches" },
            { name: "Refurbished Tablets", href: "/buy-refurbished/tablets" },
            { name: "Refurbished Gaming Consoles", href: "/buy-refurbished/gaming" },
          ],
        },
      ],
    },
    {
      label: "Find New Gadget",
      items: [
        {
          links: [
            { name: "Find New Phone", href: "/find-new/phone" },
            { name: "Find New Laptop", href: "/find-new/laptop" },
            { name: "Find New Smartwatch", href: "/find-new/smartwatch" },
            { name: "Find New Tablet", href: "/find-new/tablet" },
            { name: "Phone Finder", href: "/find-new/phone-finder" },
          ],
        },
      ],
    },
    {
      label: "Buy Laptop",
      items: [
        {
          title: "Top Brands",
          links: [
            { name: "Apple", href: "/buy-laptop/apple" },
            { name: "Dell", href: "/buy-laptop/dell" },
            { name: "Lenovo", href: "/buy-laptop/lenovo" },
            { name: "HP", href: "/buy-laptop/hp" },
            { name: "ASUS", href: "/buy-laptop/asus" },
            { name: "Acer", href: "/buy-laptop/acer" },
          ],
        },
      ],
    },
    {
      label: "OxyPC Store",
      items: [
        {
          title: "More in OxyPC Stores",
          links: [
            { name: "Delhi", href: "/store/delhi" },
            { name: "Gurgaon", href: "/store/gurgaon" },
            { name: "Noida", href: "/store/noida" },
            { name: "Bengaluru", href: "/store/bengaluru" },
          ],
        },
      ],
    },
    {
      label: "More",
      items: [
        {
          links: [
            { name: "New Offers", href: "/offers" },
            { name: "Partner with Us", href: "/partner" },
            { name: "Contact Us", href: "/contact" },
            { name: "About Us", href: "/about" },
            { name: "Careers", href: "/careers" },
          ],
        },
      ],
    },
  ];

  return (
    <nav className="bg-background border-b sticky top-20 z-40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {menus.map((menu) => (
            <div
              key={menu.label}
              className="relative"
              onMouseEnter={() => setActiveMenu(menu.label)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              {menu.href ? (
                <NavLink
                  to={menu.href}
                  className="flex items-center gap-1 px-4 py-4 text-sm font-medium hover:text-primary transition-colors"
                  activeClassName="text-primary"
                >
                  {menu.label}
                </NavLink>
              ) : (
                <button className="flex items-center gap-1 px-4 py-4 text-sm font-medium hover:text-primary transition-colors">
                  {menu.label}
                  <ChevronDown className="h-4 w-4" />
                </button>
              )}

              {/* Mega Menu */}
              {menu.items && activeMenu === menu.label && (
                <div className="absolute top-full left-0 bg-background border shadow-elevated rounded-lg mt-1 min-w-[300px] animate-scale-in z-50">
                  <div className="p-6 grid gap-4">
                    {menu.items.map((section, idx) => (
                      <div key={idx}>
                        {section.title && (
                          <h3 className="font-semibold mb-3 text-foreground">
                            {section.title}
                          </h3>
                        )}
                        <ul className="space-y-2">
                          {section.links.map((link) => (
                            <li key={link.name}>
                              <NavLink
                                to={link.href}
                                className="block py-1.5 px-2 text-sm text-muted-foreground hover:text-primary hover:bg-accent/50 rounded transition-all"
                              >
                                {link.name}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
