"use client";
import { navLinks } from "@/constants/nav-links";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div
        className="md:hidden flex cursor-pointer md:cursor-none"
        onClick={toggleMenu}
      >
        {!isOpen ? <Menu /> : <X />}
        <figure
          className={` bg-slate-800 absolute rounded-md right-2 origin-top ${
            isOpen
              ? "scale-y-100 opacity-100 visible"
              : "scale-y-50 opacity-0 hidden"
          }  top-20 w-auto p-2 z-50 transition-all`}
        >
          <nav className="flex flex-col w-full h-full space-y-2 capitalize font-normal tracking-wide">
            {navLinks.map((item) => (
              <Link
                className="hover:text-[#2F92F6] hover:bg-slate-700 text-sm  transition-all rounded-md p-2  tracking-wide text-slate-200"
                href={item.url}
                key={item.id}
                onClick={toggleMenu}
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </figure>
      </div>
    </>
  );
};

export default MobileNav;
