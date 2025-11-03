// 'use client'
// import { useParams } from "next/navigation";
import React from "react";

export const getSinglePost = async (post_id) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${post_id}`
  );
  const data = await res.json();
  return data;
};
// generate meta data here

export async function generateMetadata({ params }) {
  // read route params
  const { id } = await params;
  console.log(id);
  // fetch data
  const singlePost = await getSinglePost(id);

  return {
    title: singlePost.title,
    description: singlePost.body,
  };
}

//////////////////////////////
export default async function SinglePost({ params }) {
  //   const { id } = useParams();
  //   console.log(id);
  const p = await params;
  console.log("paramd-data===>", p.id);
  const singlePost = await getSinglePost(p.id);
  return (
    <div>
      <p>Id: {p.id}</p>
      SinglePost : {JSON.stringify(singlePost)}
    </div>
  );
}
