import PageLayout from "@/components/PageLayout";
import { Card, CardContent } from "@/components/ui/card";

const roles = [
  { title: "Frontend Engineer", location: "Gurgaon" },
  { title: "Backend Engineer", location: "Bengaluru" },
  { title: "Product Designer", location: "Remote" },
];

const Careers = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">Careers</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {roles.map((r, i) => (
            <Card key={r.title} className="animate-scale-in" style={{ animationDelay: `${i * 0.05}s` }}>
              <CardContent className="p-6">
                <div className="text-xl font-semibold">{r.title}</div>
                <div className="text-sm text-muted-foreground">{r.location}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Careers;