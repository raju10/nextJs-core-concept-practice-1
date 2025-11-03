import dbConnect from "@/lib/dbConnect";
import { revalidatePath } from "next/cache";

export async function GET() {
  //  const data = await dbConnect("postTest").find({}).toArray();
  const db = await dbConnect();
  const data = await db.collection("postTest").find({}).toArray();
  return Response.json(data);
}
export async function POST(req) {
  // const postdata = await req.json();
  // const result = await dbConnect("postTest").insertOne(postdata);
  const db = await dbConnect();
  const postdata = await req.json();
  const result = await db.collection("postTest").insertOne(postdata);
  revalidatePath("/products");
  return Response.json(result);
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
//
//
//
//
//
//

// import dbConnect from "@/lib/dbConnect";
// import { revalidatePath } from "next/cache";

// export async function GET() {
//   try {
//     const db = await dbConnect();
//     const data = await db.collection("postTest").find({}).toArray();
//     return new Response(JSON.stringify(data), {
//       status: 200,
//       headers: { "Content-Type": "application/json" },
//     });
//   } catch (err) {
//     console.error("GET /api/items error:", err);
//     return new Response(JSON.stringify({ error: "Failed to fetch products" }), {
//       status: 500,
//       headers: { "Content-Type": "application/json" },
//     });
//   }
// }

// export async function POST(req) {
//   try {
//     const db = await dbConnect();
//     const postdata = await req.json();
//     const result = await db.collection("postTest").insertOne(postdata);
//     revalidatePath("/products");
//     return new Response(JSON.stringify(result), {
//       status: 201,
//       headers: { "Content-Type": "application/json" },
//     });
//   } catch (err) {
//     console.error("POST /api/items error:", err);
//     return new Response(JSON.stringify({ error: "Failed to add product" }), {
//       status: 500,
//       headers: { "Content-Type": "application/json" },
//     });
//   }
// }
