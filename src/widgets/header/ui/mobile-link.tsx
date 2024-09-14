"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function MobileLink({
  href,
  ...props
}: React.ComponentProps<typeof Link>) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      {...props}
      className={`rounded-lg ${isActive && "bg-secondary text-black"}`}
    >
      {props.children}
    </Link>
  );
}
