import { PropsWithChildren } from "react";
interface Props extends PropsWithChildren {
  label?: string;
}
export default function TimeOffCard({ children, label }: Props) {
  return (
    <div className="flex flex-col gap-2 items-center min-w-[250px]">
      <div className="bg-background flex-1 rounded-lg py-4 flex items-center justify-center flex-col w-full">
        {children}
      </div>
      {label && <p className="text-blue text-sm">{label}</p>}
    </div>
  );
}
