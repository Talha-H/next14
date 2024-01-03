import React from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <div className="flex justify-between items-center px-5 py-3">
      <Link href={"/"}>
        <h1 className="text-2xl items-center">Talha</h1>
      </Link>
      <nav className="flex gap-x-5 items-center mx-auto">
        <Link className="text-xl" href={"/about"}>
          About
        </Link>
        <Link className="text-xl" href={"/food"}>
          Food
        </Link>
        <Link className="text-xl" href={"/prismaEx"}>
          PrismaX
        </Link>
        <Link className="text-xl" href={"/state"}>
          State
        </Link>
        <Link className="text-xl" href={"/clientF"}>
          Client
        </Link>
      </nav>
    </div>
  );
};

export default Nav;
