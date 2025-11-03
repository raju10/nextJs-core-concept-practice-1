"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  console.log(pathname.includes("dashboard"));
  if (!pathname.includes("dashboard")) {
    return (
      <div className="flex justify-center items center">
        <ul className="flex justify-between w-1/2">
          <Link href={"/"}>
            <l1>Home</l1>
          </Link>
          <Link href={"/posts"}>
            <l1>Posts</l1>
          </Link>
          <Link href={"/meals"}>
            <l1>Meals</l1>
          </Link>

          <Link href={"/products/add"}>
            <l1>Add Products </l1>
          </Link>
          <Link href={"/products"}>
            <l1>Products</l1>
          </Link>
          <l1>About</l1>
        </ul>
      </div>
    );
  } else {
    return <></>;
  }
};

export default Navbar;
