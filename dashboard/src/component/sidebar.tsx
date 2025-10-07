"use client";
import { useState } from "react";

export default function Sidebar() {
  const [open, setOpen] = useState(true);

  const menus = [
    "Favourites",
    "Popular",
    "Flash Sales",
    "Fruits & Vegetables",
    "Meat & Fish",
    "Cooking",
    "Dairy & Eggs",
    "Snacks",
    "Beverages",
    "Frozen & Canned",
  ];

  return (
    <aside
      className={`${
        open ? "w-56" : "w-14"
      } bg-white border-r shadow-sm transition-all duration-200 p-3`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="mb-3 font-semibold text-pink-600"
      >
        {open ? "☰ Menu" : "☰"}
      </button>
      <ul className="space-y-2 text-gray-700 text-sm">
        {menus.map((menu, i) => (
          <li key={i} className="cursor-pointer hover:text-pink-600">
            {menu}
          </li>
        ))}
      </ul>
    </aside>
  );
}
