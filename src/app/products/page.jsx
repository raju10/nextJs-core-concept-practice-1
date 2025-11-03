import { redirect } from "next/navigation";
import React from "react";

//export const dynamic = "force-dynamic";
export default async function ProductsPage() {
  const NEXT_PUBLIC_SERVER_ADDRESS = process.env.NEXT_PUBLIC_SERVER_ADDRESS;
  console.log("Fetching:", NEXT_PUBLIC_SERVER_ADDRESS);

  const res = await fetch(`${NEXT_PUBLIC_SERVER_ADDRESS}/api/items`);

  // if (!res.ok) {
  //   const text = await res.text();
  //   console.error("Failed to fetch products:", text);
  //   return <p>Failed to load products.</p>;
  // }
  const data = await res.json();
  // cache: "force-cache",
  console.log("Response status:", res.status);
  // const data = await res.json();

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
      {/* <p>{JSON.stringify(data)}</p> */}
    </div>
  );
}
//
//
//
//
//
//
//
//
//
//
//
// src/app/products/page.jsx
// // src/app/products/page.jsx
// import React from "react";

// export const dynamic = "force-dynamic";

// export default async function ProductsPage() {
//   try {
//     // Determine base URL
//     const baseUrl =
//       process.env.NEXT_PUBLIC_SERVER_ADDRESS || "http://localhost:3000";

//     console.log("Fetching products from:", `${baseUrl}/api/items`);

//     const res = await fetch(`${baseUrl}/api/items`, { cache: "no-store" });

//     // if (!res.ok) {
//     //   const text = await res.text();
//     //   console.error("Failed to fetch products:", text);
//     //   return <p>Failed to load products.</p>;
//     // }

//     const data = await res.json();

//     if (!data || data.length === 0) {
//       return <p>No products found.</p>;
//     }

//     return (
//       <div className="p-4">
//         <h1 className="text-xl font-bold mb-4">Products List</h1>
//         <ul className="space-y-2">
//           {data.map((product) => (
//             <li key={product._id} className="border p-2 rounded">
//               <p>
//                 <strong>Name:</strong> {product.productName}
//               </p>
//               <p>
//                 <strong>Cost:</strong> ${product.productCost}
//               </p>
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   } catch (err) {
//     console.error("Fetch error:", err);
//     return <p>Error loading products.</p>;
//   }
// }
