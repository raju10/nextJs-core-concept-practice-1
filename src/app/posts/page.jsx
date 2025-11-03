import Link from "next/link";
import style from "./post.module.css";
export const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
};
export const metadata = {
  title: "All Post",
  description: "Loading json placeholder post using server component",
};
export default async function Posts() {
  const posts = await getPosts();
  return (
    <div className="m-10 grid grid-cols-3 gap-5 ">
      {/* <p>{JSON.stringify(posts)}</p> */}
      {posts.map((post) => {
        return (
          <div key={post.id} className="border rounded p-3 space-y-3">
            <h2 className={`text-2xl font-bold ${style["post-title"]}`}>
              {post.title}
            </h2>
            <p className="testing-purpose-css-class ">{post.body}</p>
            <Link href={`/posts/${post.id}`} className="underline ">
              Details
            </Link>
          </div>
        );
      })}
    </div>
  );
}
