import { Product } from "@/component/productCard";
import ProductGrid from "@/component/productGrid";
import Sidebar from "@/component/sidebar";


export default function ChickenSnacksPage() {
  const products: Product[] = [
    {
      id: 1,
      name: "Jhatpot Chicken Nuggets 20 pcs",
      weight: "300 gm",
      price: 240,
      image: "/products/nuggets.png",
    },
    {
      id: 2,
      name: "Jhatpot Chicken White Meat Ball",
      weight: "250 gm",
      price: 195,
      image: "/products/meatball.png",
    },
    {
      id: 3,
      name: "Kazi Farms Kitchen Chicken Spring Roll",
      weight: "250 gm",
      price: 215,
      image: "/products/springroll.png",
    },
    {
      id: 4,
      name: "Jhatpot Chicken Strips",
      weight: "250 gm",
      price: 280,
      image: "/products/strips.png",
    },
    {
      id: 5,
      name: "Golden Harvest Chicken Nuggets",
      weight: "300 gm",
      price: 240,
      image: "/products/gh-nuggets.png",
    },
  ];

  return (
    <main className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-gray-800">
            Chicken Snacks
          </h1>
          <p className="text-gray-500 text-sm">
            Frozen & Canned › Chicken Snacks
          </p>
        </div>
        <ProductGrid products={products} />
      </div>
    </main>
  );
}
