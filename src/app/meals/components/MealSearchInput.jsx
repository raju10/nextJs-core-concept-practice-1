"use client";
import { usePathname, useRouter } from "next/navigation";

import React, { useEffect, useState } from "react";

export default function MealSearchInput() {
  //const [mealss, setMeals] = useState([]);
  const [search, setSearch] = useState("");
  const router = useRouter();
  const pathname = usePathname();
  console.log("path name of MealSearchInput===> ", pathname);
  useEffect(() => {
    //  fetchMeals();
    const searchQuery = { search };
    const urlQueryParams = new URLSearchParams(searchQuery);
    const url = `${pathname}?${urlQueryParams}`;
    router.push(url);
  }, [search]);
  return (
    <div>
      <input
        type="text"
        placeholder="Search meals..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 rounded mb-4"
      />
    </div>
  );
}
