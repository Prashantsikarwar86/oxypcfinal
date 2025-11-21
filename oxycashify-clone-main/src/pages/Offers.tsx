import PageLayout from "@/components/PageLayout";
import { Card, CardContent } from "@/components/ui/card";

const Offers = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">New Offers</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["Smart Upgrade Sale", "Flash Sale", "Festival Offers"].map((o, i) => (
            <Card key={o} className="animate-scale-in" style={{ animationDelay: `${i * 0.05}s` }}>
              <CardContent className="p-6">
                <div className="text-2xl font-semibold mb-2">{o}</div>
                <div className="text-sm text-muted-foreground">Exciting deals on refurbished devices</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Offers;