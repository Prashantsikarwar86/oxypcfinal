import PageLayout from "@/components/PageLayout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const PhoneFinder = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">Search by Model Name</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <Input placeholder="Search" className="h-12" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 rounded-xl border bg-background">
                <h2 className="text-lg font-semibold mb-4">Search by Price</h2>
                <div className="flex items-center gap-4">
                  <input type="range" min={0} max={150000} defaultValue={0} className="w-full" />
                  <input type="range" min={0} max={150000} defaultValue={150000} className="w-full" />
                </div>
                <Button className="mt-4 w-full">Search</Button>
              </div>

              <div className="p-6 rounded-xl border bg-background">
                <h2 className="text-lg font-semibold mb-4">Search by Brand</h2>
                <div className="grid grid-cols-3 gap-3 text-sm">
                  {["Apple","Samsung","Xiaomi","Motorola","Google","OnePlus","Oppo","Vivo","Realme","Nothing","iQOO","Infinix"].map((b) => (
                    <button key={b} className="p-3 rounded-lg bg-muted hover:bg-accent transition-colors">{b}</button>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl border bg-background">
              <h2 className="text-lg font-semibold mb-4">Search by Price List</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {["Below 5,000","Below 10,000","Below 15,000","Below 20,000","Below 25,000","Below 30,000","Below 40,000","Below 50,000"].map((p) => (
                  <button key={p} className="px-3 py-2 rounded-lg border hover:bg-accent transition-colors text-sm">{p}</button>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="rounded-xl border bg-background p-6">
              <h2 className="text-lg font-semibold mb-4">Find New Filter</h2>
              <div className="space-y-4">
                {[
                  { name: "Motorola Moto E15", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=200" },
                  { name: "iQOO Z9 Turbo Endurance Edition", image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=200" },
                  { name: "Vivo Y500", image: "https://images.unsplash.com/photo-1557180295-76eee20ae8aa?w=200" },
                ].map((item) => (
                  <div key={item.name} className="flex items-center gap-3">
                    <img src={item.image} alt={item.name} className="w-14 h-14 rounded object-cover" />
                    <div>
                      <div className="text-xs inline-block bg-black text-white rounded px-2 py-0.5 mr-2">NEW</div>
                      <div className="text-sm font-medium">{item.name}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default PhoneFinder;