import PageLayout from "@/components/PageLayout";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { useState } from "react";

const popular = [
  "Bangalore",
  "Chennai",
  "Delhi",
  "Gurgaon",
  "Hyderabad",
  "Kolkata",
  "Mumbai",
  "Noida",
  "Pune",
];

const Location = () => {
  const [query, setQuery] = useState("");

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        <Card>
          <CardContent className="p-8 space-y-8">
            <div className="flex items-center gap-3">
              <Search className="h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search your city or pincode"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
              {popular
                .filter((c) => c.toLowerCase().includes(query.toLowerCase()))
                .map((city) => (
                  <Button key={city} variant="outline" className="justify-center">
                    {city}
                  </Button>
                ))}
            </div>
            <div className="text-center">
              <a href="/store/delhi" className="text-primary underline">View All Cities</a>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
};

export default Location;