import React from "react";
import Logo from "./logo";
import Navbar from "./navbar";
import Search from "./search";
import Actions from "./actions";
import MobileMenu from "./mobile";

export default function Header() {
  return (
    <header className="flex px-5 items-center md:gap-8 gap-6 pb-0 md:h-[86px] h-[50px] bg-white">
      <Logo />
      <Navbar />
      <Search />
      <MobileMenu />
      <Actions />
    </header>
  );
}
