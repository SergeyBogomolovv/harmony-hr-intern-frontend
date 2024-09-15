import { PropsWithChildren } from "react";

export default function SidebarCard({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col p-6 bg-white rounded-xl gap-3 text-sm">
      {children}
    </div>
  );
}
