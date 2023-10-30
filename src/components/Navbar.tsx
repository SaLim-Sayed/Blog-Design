import React from "react";
import Logo from "./Logo";
import { navLinks } from "@/constants/nav-links";
import Link from "next/link";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <header className=" fixed top-0 left-0 w-full bg-slate-900/50  backdrop-blur-md z-30">
      <div className="container relative py-6 flex justify-between transition-all">
        <Logo />
        <nav className=" hidden md:flex gap-8 capitalize">
          {navLinks.map((item) => (
            <Link
              className="hover:text-sky-700 text-sm font-semibold tracking-wide text-slate-200"
              href={item.url}
              key={item.id}
            >
              {item.title}
            </Link>
          ))}
        </nav>
        <MobileNav />
      </div>
    </header>
  );
};

export default Navbar;
