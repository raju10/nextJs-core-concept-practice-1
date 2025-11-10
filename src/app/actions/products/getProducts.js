"use server";

import dbConnect, { collectionNames } from "@/lib/dbConnect";

export const getProducts = async () => {
  try {
    const data = await dbConnect(collectionNames.POST_TEST).find({}).toArray();
    return data;
  } catch (error) {
    console.log("getProduct page error===>", error);
    return [];
  }
};
