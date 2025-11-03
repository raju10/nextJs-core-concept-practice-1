"use server";

import dbConnect from "@/lib/dbConnect";

export const getProducts = async () => {
  try {
    const data = await dbConnect("postTest").find({}).toArray();
    return data;
  } catch (error) {
    console.log("getProduct page error===>", error);
    return [];
  }
};
