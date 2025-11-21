import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SellPhoneApple from "./pages/SellPhoneApple";
import BuyRefurbishedPhones from "./pages/BuyRefurbishedPhones";
import BuyRefurbishedLaptops from "./pages/BuyRefurbishedLaptops";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Location from "./pages/Location";
import SellPhoneBrand from "./pages/SellPhoneBrand";
import SellGadgetsCategory from "./pages/SellGadgetsCategory";
import BuyRefurbishedCategory from "./pages/BuyRefurbishedCategory";
import FindNewCategory from "./pages/FindNewCategory";
import BuyLaptopBrand from "./pages/BuyLaptopBrand";
import StoreCity from "./pages/StoreCity";
import Offers from "./pages/Offers";
import Partner from "./pages/Partner";
import Careers from "./pages/Careers";
import SellPhoneBrands from "./pages/SellPhoneBrands";
import PhoneFinder from "./pages/PhoneFinder";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/location" element={<Location />} />
          
          {/* Sell Phone Routes */}
          <Route path="/sell-phone/apple" element={<SellPhoneApple />} />
          <Route path="/sell-phone/brands" element={<SellPhoneBrands />} />
          <Route path="/sell-phone/:brand" element={<SellPhoneBrand />} />
          
          {/* Buy Refurbished Routes */}
          <Route path="/buy-refurbished/phones" element={<BuyRefurbishedPhones />} />
          <Route path="/buy-refurbished/laptops" element={<BuyRefurbishedLaptops />} />
          <Route path="/buy-refurbished/:category" element={<BuyRefurbishedCategory />} />
          
          {/* Sell Gadgets */}
          <Route path="/sell-gadgets/:category" element={<SellGadgetsCategory />} />

          {/* Find New Gadget */}
          <Route path="/find-new/:category" element={<FindNewCategory />} />
          <Route path="/find-new/phone-finder" element={<PhoneFinder />} />

          {/* Buy Laptop Brands */}
          <Route path="/buy-laptop/:brand" element={<BuyLaptopBrand />} />

          {/* Stores */}
          <Route path="/store/:city" element={<StoreCity />} />

          {/* Company Routes */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/partner" element={<Partner />} />
          <Route path="/careers" element={<Careers />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
