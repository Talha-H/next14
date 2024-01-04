import React from "react";
import Link from "next/link";

const links = [
  { href: "/about", name: "About" },
  { href: "/food", name: "Food" },
  { href: "/prismaEx", name: "Prisma" },
  { href: "/state", name: "State" },
  { href: "/clientF", name: "Client" },
];

const Nav = () => {
  return (
    <div className=" bg-base-300">
      <div className="px-8 mx-auto max-w-6xl flex-col sm:flex-row py-4 navbar">
        <Link href={"/"}>
          <h1 className="text-2xl items-center">Talha</h1>
        </Link>
        <nav className="flex gap-x-5 items-center mx-auto">
          {links.map((link) => {
            return (
              <div key={link.href}>
                <Link className="text-xl" href={link.href}>
                  {link.name}
                </Link>
              </div>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default Nav;
