import { Button } from "@/shared/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-primary p-10 rounded-lg flex items-center flex-col gap-5">
      <h1 className="text-4xl font-bold text-center">Home</h1>
      <Link href={"/login"}>
        <Button size={"lg"}>Login</Button>
      </Link>
    </div>
  );
}
