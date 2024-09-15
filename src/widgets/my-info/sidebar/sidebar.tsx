import SidebarCard from "./card";
import { FiPhone, FiTwitter } from "react-icons/fi";
import { IoMailOutline, IoLocationOutline } from "react-icons/io5";
import { SlSocialLinkedin } from "react-icons/sl";
import { LuFacebook } from "react-icons/lu";
import { FaHashtag, FaRegUserCircle } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
import { PiUsersThreeBold } from "react-icons/pi";
import CardLabel from "./card-label";

export default function Sidebar() {
  return (
    <div className="lg:flex flex-col gap-4 hidden mt-2">
      <SidebarCard>
        <CardLabel>
          <FiPhone className="size-5" />
          <span>07911 654321</span>
        </CardLabel>
        <CardLabel>
          <IoMailOutline className="size-5" />
          <span>avd.yana@videorollnet</span>
        </CardLabel>
        <CardLabel>
          <SlSocialLinkedin className="size-5" />
          <LuFacebook className="size-5" />
          <FiTwitter className="size-5" />
        </CardLabel>
      </SidebarCard>

      <SidebarCard>
        <p>Hire Date</p>
        <div className="flex flex-col">
          <p>Sep. 3,2020</p>
          <p>3y - 9m - 20d</p>
        </div>
      </SidebarCard>

      <SidebarCard>
        <CardLabel>
          <FaHashtag className="size-5" />
          <span>5</span>
        </CardLabel>
        <CardLabel>
          <FaRegClock className="size-5" />
          <span>Full-Time</span>
        </CardLabel>
        <CardLabel>
          <TbWorld className="size-5" />
          <span>Europe</span>
        </CardLabel>
        <CardLabel>
          <IoLocationOutline className="size-5" />
          <span>London, UK</span>
        </CardLabel>
      </SidebarCard>

      <SidebarCard>
        <p className="mb-1">Direct Reports</p>
        <CardLabel>
          <FaRegUserCircle className="size-5" />
          <span>Shane</span>
        </CardLabel>
        <CardLabel>
          <FaRegUserCircle className="size-5" />
          <span>Nathan</span>
        </CardLabel>
        <CardLabel>
          <FaRegUserCircle className="size-5" />
          <span>Mitchell</span>
        </CardLabel>
        <CardLabel>
          <FaRegUserCircle className="size-5" />
          <span>Philip</span>
        </CardLabel>
        <CardLabel>
          <PiUsersThreeBold className="size-5" />
          <span>4 More...</span>
        </CardLabel>
      </SidebarCard>
    </div>
  );
}
