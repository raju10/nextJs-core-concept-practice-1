"use server";

import dbConnect from "@/lib/dbConnect";

export const postSingledata = async (postdata) => {
  try {
    // const postdata = await req.json();
    const result = await dbConnect("postTest").insertOne(postdata);

    revalidatePath("/products");
    return Response.json(result);
  } catch (error) {
    console.log("post single product page error ===>", error);
    return null;
  }
};
