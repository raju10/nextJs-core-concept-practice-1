import dbConnect from "@/lib/dbConnect";
import { revalidatePath } from "next/cache";

export async function GET() {
  const data = await dbConnect("postTest").find({}).toArray();

  return Response.json(data);
}
export async function POST(req) {
  const postdata = await req.json();
  const result = await dbConnect("postTest").insertOne(postdata);

  revalidatePath("/products");
  return Response.json(result);
}
