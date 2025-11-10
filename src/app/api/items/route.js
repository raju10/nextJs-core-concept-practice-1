import dbConnect, { collectionNames } from "@/lib/dbConnect";
import { revalidatePath } from "next/cache";

export async function GET() {
  //const data = await dbConnect("postTest").find({}).toArray();
  const data = await dbConnect(collectionNames.POST_TEST).find({}).toArray();

  return Response.json(data);
}
export async function POST(req) {
  const postdata = await req.json();
  const result = await dbConnect(collectionNames.POST_TEST).insertOne(postdata);

  revalidatePath("/products");
  return Response.json(result);
}
