"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function NavLink({
  href,
  ...props
}: React.ComponentProps<typeof Link>) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      {...props}
      className={`text-primary-foreground hover:bg-primary rounded-t-md xl:p-3 p-2 text-sm xl:text-base ${isActive && "bg-primary"} text-nowrap	`}
    >
      {props.children}
    </Link>
  );
}
