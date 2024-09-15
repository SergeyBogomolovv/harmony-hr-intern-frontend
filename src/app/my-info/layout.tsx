import { MyInfoHeader, MyInfoSideBar } from "@/widgets/my-info";

export default function MyInfoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col flex-1">
      <MyInfoHeader />
      <div className="grid lg:grid-cols-[1fr_5fr] flex-1 lg:gap-10 md:w-[90%] w-full mx-auto">
        <MyInfoSideBar />
        {children}
      </div>
    </div>
  );
}
