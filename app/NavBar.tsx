import Link from "next/link";
import { AiFillBug } from "react-icons/ai";

import React from "react";

const NavBar = () => {
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];
  return (
    <div>
      <nav className="flex space-x-6 border-b mb-5 items-center h-14 px-2">
        <Link href="/">
          <AiFillBug />
        </Link>

        <ul className="flex space-x-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-zinc-500 hover:text-zinc-800"
            >
              {link.label}
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
