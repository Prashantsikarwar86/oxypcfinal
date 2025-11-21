import PageLayout from "@/components/PageLayout";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";

const labels: Record<string, string> = {
  phone: "Find New Phone",
  laptop: "Find New Laptop",
  smartwatch: "Find New Smartwatch",
  tablet: "Find New Tablet",
};

const FindNewCategory = () => {
  const { category = "phone" } = useParams();
  const title = labels[category] || "Find New Gadget";

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold">{title}</h1>
          <p className="text-muted-foreground">Compare, filter and pick the best</p>
        </div>
        <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
          <Button variant="outline" className="gap-2 whitespace-nowrap">
            <Filter className="w-4 h-4" />
            All Filters
          </Button>
          <Button variant="outline" className="whitespace-nowrap">Brand</Button>
          <Button variant="outline" className="whitespace-nowrap">Price Range</Button>
          <Button variant="outline" className="whitespace-nowrap">Specs</Button>
          <Button variant="outline" className="whitespace-nowrap">Warranty</Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-8 bg-accent/20 rounded-xl">Curated recommendations will appear here</div>
          <div className="p-8 bg-accent/20 rounded-xl">Use filters to refine results</div>
          <div className="p-8 bg-accent/20 rounded-xl">Compare devices side-by-side</div>
        </div>
      </div>
    </PageLayout>
  );
};

export default FindNewCategory;