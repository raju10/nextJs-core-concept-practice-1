"use client";

import { useRouter } from "next/navigation";

export default function ProductAddForm() {
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const productName = form.productName.value;
    const productCost = form.cost.value;
    console.log(productName, productCost);
    const payload = {
      productName,
      productCost,
    };
    const res = await fetch(`http://localhost:3000/api/items`, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await res.json();
    console.log(result);
    form.reset();
    // alert("product add succesfully");
    router.push("/products");
    // router.refresh();
  };
  return (
    <div className="h-screen w-full flex justify-center items-center ">
      <form action="" onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          name="productName"
          id=""
          className="border  p-2 text-sm w-full"
          placeholder=" product name "
        />
        <input
          type="number"
          name="cost"
          id=""
          className="border  p-2 text-sm w-full"
          placeholder=" product Cost "
        />
        <button
          className="btn bg-amber-300 py-1 px-3 text-sm rounded cursor-pointer"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
