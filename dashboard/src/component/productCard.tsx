"use client";
import Image from "next/image";
import { useState } from "react";
import { ShoppingBag } from "lucide-react";

export interface Product {
  id: number;
  name: string;
  weight: string;
  price: number;
  image: string;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [inBag, setInBag] = useState(false);

  return (
    <div className="border rounded-2xl shadow-sm p-3 flex flex-col items-center bg-white hover:shadow-md transition">
      <Image
        src={product.image}
        alt={product.name}
        width={120}
        height={120}
        className="object-contain mb-2"
      />
      <h3 className="text-sm font-medium text-center">{product.name}</h3>
      <p className="text-gray-500 text-sm">{product.weight}</p>
      <p className="font-semibold mt-1">৳{product.price}</p>

      <button
        onClick={() => setInBag(!inBag)}
        className={`mt-3 w-full rounded-xl py-2 text-sm font-medium flex items-center justify-center gap-2 ${
          inBag
            ? "bg-pink-100 text-pink-600"
            : "bg-pink-500 text-white hover:bg-pink-600"
        }`}
      >
        <ShoppingBag size={16} />
        {inBag ? "1 in bag" : "Add to bag"}
      </button>
    </div>
  );
}
