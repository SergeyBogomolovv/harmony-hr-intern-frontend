"use client";
import { useUser } from "@/entities/user";
import MyInfoNavbar from "./navbar";
import { Avatar, AvatarImage, AvatarFallback } from "@/shared/ui/avatar";
import { FaUserCircle } from "react-icons/fa";
import { Button } from "@/shared/ui/button";
import { MdExpandMore } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdMore } from "react-icons/io";

export default function MyInfoHeader() {
  const user = useUser((state) => state.user);

  return (
    <header className="bg-primary md:pt-4 pt-2">
      <div className="lg:grid-cols-[1fr_5fr] lg:gap-10 lg:grid md:w-[90%] w-full mx-auto flex flex-col">
        <div className="lg:flex hidden min-w-[226px]">
          <Avatar className="size-36 mx-auto">
            <AvatarImage src={user?.avatar} />
            <AvatarFallback>
              <FaUserCircle className="size-full" />
            </AvatarFallback>
          </Avatar>
        </div>

        <div className="flex flex-col justify-between">
          <div className="flex justify-between items-center lg:mt-8 my-2 lg:my-0 px-4 md:px-0">
            <div className="flex items-center gap-2">
              <Avatar className="size-12 md:size-16 mx-auto lg:hidden">
                <AvatarImage src={user?.avatar} />
                <AvatarFallback>
                  <FaUserCircle className="size-full" />
                </AvatarFallback>
              </Avatar>
              <h2 className="font-semibold md:text-3xl text-2xl">
                {user?.name}
              </h2>
            </div>

            <div className="sm:flex gap-2 hidden">
              <Button>
                Request a Change <MdExpandMore className="size-5 ml-2" />
              </Button>
              <Button>
                <IoSettingsOutline className="size-5" />
                <MdExpandMore className="size-5 ml-2" />
              </Button>
            </div>
            <Button className="sm:hidden" size={"icon"} variant={"ghost"}>
              <IoMdMore className="size-5" />
            </Button>
          </div>
          <MyInfoNavbar />
        </div>
      </div>
    </header>
  );
}
