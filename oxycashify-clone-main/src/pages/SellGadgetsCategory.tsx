import PageLayout from "@/components/PageLayout";
import { useParams } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const titles: Record<string, string> = {
  phone: "Sell Phone",
  laptop: "Sell Laptop",
  "smart-speaker": "Sell Smart Speaker",
  tablet: "Sell Tablet",
  "gaming-consoles": "Sell Gaming Console",
  imac: "Sell iMac",
  smartwatch: "Sell Smartwatch",
  tv: "Sell TV",
};

const SellGadgetsCategory = () => {
  const { category = "" } = useParams();
  const title = titles[category] || "Sell Gadget";

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold">{title}</h1>
          <p className="text-muted-foreground">Free doorstep pickup and instant payment</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6 space-y-2">
              <div className="text-4xl">✅</div>
              <div className="font-semibold">Instant Price</div>
              <div className="text-sm text-muted-foreground">Get the best quote in minutes</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 space-y-2">
              <div className="text-4xl">🚚</div>
              <div className="font-semibold">Free Pickup</div>
              <div className="text-sm text-muted-foreground">Hassle-free doorstep service</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 space-y-2">
              <div className="text-4xl">💸</div>
              <div className="font-semibold">Instant Payment</div>
              <div className="text-sm text-muted-foreground">Paid immediately after check</div>
            </CardContent>
          </Card>
        </div>
        <div className="mt-10">
          <Button className="px-8">Get Price</Button>
        </div>
      </div>
    </PageLayout>
  );
};

export default SellGadgetsCategory;