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
          <l1>
            <Link href={"/"}>Home</Link>
          </l1>
          <l1>
            <Link href={"/posts"}>Posts</Link>
          </l1>
          <l1>
            <Link href={"/meals"}>Meals</Link>
          </l1>

          <l1>
            <Link href={"/products/add"}>Add Products</Link>
          </l1>
          <l1>
            <Link href={"/products"}>Products</Link>
          </l1>
          {/* <l1>About</l1> */}
        </ul>
      </div>
    );
  } else {
    return <></>;
  }
};

export default Navbar;
