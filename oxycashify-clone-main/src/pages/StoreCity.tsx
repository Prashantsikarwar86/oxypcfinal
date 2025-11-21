import PageLayout from "@/components/PageLayout";
import { useParams } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

const StoreCity = () => {
  const { city = "City" } = useParams();
  const c = city.charAt(0).toUpperCase() + city.slice(1);

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">OxyPC Store - {c}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-6 space-y-2">
              <div className="text-4xl">📍</div>
              <div className="font-semibold">Main Outlet</div>
              <div className="text-sm text-muted-foreground">Address available soon</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 space-y-2">
              <div className="text-4xl">🕘</div>
              <div className="font-semibold">Timing</div>
              <div className="text-sm text-muted-foreground">10:00 AM - 8:00 PM</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageLayout>
  );
};

export default StoreCity;