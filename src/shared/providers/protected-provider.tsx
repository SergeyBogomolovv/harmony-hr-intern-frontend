"use client";

import { useUser } from "@/entities/user";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { PROTECTED_ROUTES } from "../routes";

export default function ProtectedProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const authenticated = useUser((state) => state.authenticated);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/login" && authenticated) {
      router.replace("/my-info/time-off");
    }

    if (PROTECTED_ROUTES.includes(pathname) && !authenticated) {
      router.replace("/login");
    }
  }, [pathname, authenticated, router]);

  return <>{children}</>;
}
