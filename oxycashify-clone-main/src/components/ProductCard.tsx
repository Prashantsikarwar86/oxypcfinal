import { NavLink } from "@/components/NavLink";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

interface ProductCardProps {
  name: string;
  image: string;
  price: string;
  originalPrice?: string;
  discount?: string;
  rating?: number;
  badge?: string;
  href: string;
  exchangePrice?: string;
}

const ProductCard = ({
  name,
  image,
  price,
  originalPrice,
  discount,
  rating,
  badge,
  href,
  exchangePrice,
}: ProductCardProps) => {
  return (
    <NavLink to={href}>
      <Card className="group relative overflow-hidden border-border hover:shadow-hover transition-all duration-300 animate-scale-in hover:-translate-y-2">
        <div className="relative">
          {discount && (
            <div className="absolute top-2 left-2 z-10">
              <span className="bg-destructive text-destructive-foreground px-3 py-1 rounded-full text-sm font-bold">
                {discount}
              </span>
            </div>
          )}
          {badge && (
            <div className="absolute top-2 right-2 z-10">
              <Badge variant="secondary" className="font-semibold">
                {badge}
              </Badge>
            </div>
          )}
          <div className="aspect-square bg-accent/20 flex items-center justify-center p-8 group-hover:bg-accent/30 transition-colors">
            <img
              src={image}
              alt={name}
              className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>
        <div className="p-4 space-y-2">
          <h3 className="font-semibold text-foreground line-clamp-2 min-h-[48px]">
            {name}
          </h3>
          {rating && (
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
              <span className="text-sm font-medium">{rating}</span>
            </div>
          )}
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-primary">{price}</span>
              {originalPrice && (
                <span className="text-sm text-muted-foreground line-through">
                  {originalPrice}
                </span>
              )}
            </div>
            {exchangePrice && (
              <p className="text-sm text-yellow-600 font-medium">
                {exchangePrice} with GOLD
              </p>
            )}
          </div>
        </div>
      </Card>
    </NavLink>
  );
};

export default ProductCard;
