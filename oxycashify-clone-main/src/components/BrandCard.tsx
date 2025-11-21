import { NavLink } from "@/components/NavLink";
import { Card } from "@/components/ui/card";

interface BrandCardProps {
  name: string;
  icon?: string;
  image?: string;
  href: string;
}

const BrandCard = ({ name, icon, image, href }: BrandCardProps) => {
  return (
    <NavLink to={href}>
      <Card className="group p-6 text-center hover:shadow-hover transition-all duration-300 hover:-translate-y-1 animate-fade-in border-border">
        {image ? (
          <div className="mb-3 aspect-square bg-accent/20 rounded-lg flex items-center justify-center overflow-hidden group-hover:bg-accent/30">
            <img src={image} alt={name} className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300" />
          </div>
        ) : (
          <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
        )}
        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
          {name}
        </h3>
      </Card>
    </NavLink>
  );
};

export default BrandCard;
