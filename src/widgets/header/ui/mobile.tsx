import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/shared/ui/sheet";
import { Button } from "@/shared/ui/button";

import { RxHamburgerMenu } from "react-icons/rx";
import MobileLink from "./mobile-link";

export default function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild className="lg:hidden">
        <Button size="icon" variant={"ghost"}>
          <RxHamburgerMenu className="size-6" />
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-white">
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription className="flex flex-col gap-2 text-lg">
            <MobileLink href={"/"}>Home</MobileLink>
            <MobileLink href={"/my-info"}>My Info</MobileLink>
            <MobileLink href={"/people"}>People</MobileLink>
            <MobileLink href={"/hiring"}>Hiring</MobileLink>
            <MobileLink href={"/reports"}>Reports</MobileLink>
            <MobileLink href={"/files"}>Files</MobileLink>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
