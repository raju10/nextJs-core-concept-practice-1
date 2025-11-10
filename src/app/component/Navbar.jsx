"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  console.log(pathname.includes("dashboard"));
  if (!pathname.includes("dashboard")) {
    return (
      <div className="flex justify-center items-center">
        <ul className="flex justify-between w-1/2">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/posts"}>Posts</Link>
          </li>
          <li>
            <Link href={"/meals"}>Meals</Link>
          </li>

          <li>
            <Link href={"/products/add"}>Add Products</Link>
          </li>
          <li>
            <Link href={"/products"}>Products</Link>
          </li>
          <li>
            <Link href={"/register"}>Register</Link>
          </li>
          {/* <l1>About</l1> */}
        </ul>
      </div>
    );
  } else {
    return <></>;
  }
};

export default Navbar;
