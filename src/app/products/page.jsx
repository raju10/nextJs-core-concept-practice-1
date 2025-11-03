import { redirect } from "next/navigation";
import React from "react";

export const dynamic = "force-dynamic";
export default async function ProductsPage() {
  const res = await fetch(`http://localhost:3000/api/items`, {
    // cache: "force-cache",
  });
  const data = await res.json();

  //HERE WE REDERACT THIS
  // if (data.length > 5) {
  //   redirect("/");
  // }

  return (
    <div>
      {data.map((singleProduct) => {
        return (
          <div key={singleProduct._id} className="">
            <li>{singleProduct.productName}</li>
          </div>
        );
      })}
      <p>{JSON.stringify(data)}</p>
    </div>
  );
}
