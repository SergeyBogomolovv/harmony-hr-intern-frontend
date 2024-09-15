"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MyInfoNavLink({
  href,
  ...props
}: React.ComponentProps<typeof Link>) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      {...props}
      className={`w-full text-center text-primary-foreground bg-primary rounded-t-md p-2 text-sm xl:text-base ${isActive && "bg-white"} text-nowrap`}
    >
      {props.children}
    </Link>
  );
}
