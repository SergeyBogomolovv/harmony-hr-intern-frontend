import { Button } from "@/shared/ui/button";
import { IoSettingsOutline } from "react-icons/io5";
import { TbBell } from "react-icons/tb";
import { FaRegQuestionCircle } from "react-icons/fa";
import UserButton from "./user-button";
import MobileMenu from "./mobile";

export default function Actions() {
  return (
    <div className="flex items-center gap-2">
      <MobileMenu />
      <Button className="hidden md:flex" size={"icon"} variant={"ghost"}>
        <IoSettingsOutline size={24} />
      </Button>
      <Button className="hidden md:flex" size={"icon"} variant={"ghost"}>
        <FaRegQuestionCircle size={24} />
      </Button>
      <Button className="hidden md:flex" size={"icon"} variant={"ghost"}>
        <TbBell size={24} />
      </Button>
      <UserButton />
    </div>
  );
}
