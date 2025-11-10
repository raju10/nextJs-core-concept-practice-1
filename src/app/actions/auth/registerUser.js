"use server";

import dbConnect, { collectionNames } from "@/lib/dbConnect";

export const registerUser = async (payload) => {
  //need to check if unique user name is given
  const result = await dbConnect(collectionNames.TEST_USER).insertOne(payload);
  console.log("result", result);
  return result;
};
