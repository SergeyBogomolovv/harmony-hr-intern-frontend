import React from "react";
import NavLink from "./nav-link";

export default function Navbar() {
  return (
    <nav className="lg:flex self-end w-full hidden">
      <NavLink href={"/"}>Home</NavLink>
      <NavLink href={"/my-info"}>My Info</NavLink>
      <NavLink href={"/people"}>People</NavLink>
      <NavLink href={"/hiring"}>Hiring</NavLink>
      <NavLink href={"/reports"}>Reports</NavLink>
      <NavLink href={"/files"}>Files</NavLink>
    </nav>
  );
}
