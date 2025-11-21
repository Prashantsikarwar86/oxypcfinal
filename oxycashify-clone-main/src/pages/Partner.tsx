import PageLayout from "@/components/PageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Partner = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">Partner with OxyPC</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="p-6 space-y-2">
              <div className="text-4xl">🏬</div>
              <div className="font-semibold">Retail Partners</div>
              <div className="text-sm text-muted-foreground">Grow with refurbished devices</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 space-y-2">
              <div className="text-4xl">🚚</div>
              <div className="font-semibold">Pickup Partners</div>
              <div className="text-sm text-muted-foreground">Provide secure logistics</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 space-y-2">
              <div className="text-4xl">🤝</div>
              <div className="font-semibold">OEM Collaboration</div>
              <div className="text-sm text-muted-foreground">Join circular economy initiatives</div>
            </CardContent>
          </Card>
        </div>
        <Button>Apply Now</Button>
      </div>
    </PageLayout>
  );
};

export default Partner;