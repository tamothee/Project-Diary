import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <>
      <nav className="pt-3 text-xl gap-5 font-bold flex justify-center items-center">
        <Link className="" href="/">
          Home
        </Link>
        <Link className="" href="/Projects">
          Projects
        </Link>
      </nav>
    </>
  );
}
