import MyInfoNavLink from "./navlink";
import { MdExpandMore } from "react-icons/md";

export default function MyInfoNavbar() {
  return (
    <nav className="flex overflow-x-auto w-full">
      <MyInfoNavLink href={"/my-info"}>Personal</MyInfoNavLink>
      <MyInfoNavLink href={"/my-info/job"}>Job</MyInfoNavLink>
      <MyInfoNavLink href={"/my-info/time-off"}>Time Off</MyInfoNavLink>
      <MyInfoNavLink href={"/my-info/emergency"}>Emergency</MyInfoNavLink>
      <MyInfoNavLink href={"/my-info/documents"}>Documents</MyInfoNavLink>
      <MyInfoNavLink href={"/my-info/notes"}>Notes</MyInfoNavLink>
      <MyInfoNavLink href={"/my-info/benefits"}>Benefits</MyInfoNavLink>
      <MyInfoNavLink href={"/my-info/training"}>Training</MyInfoNavLink>
      <MyInfoNavLink href={"/my-info/assets"}>Assets</MyInfoNavLink>
      <button className="text-primary-foreground bg-primary p-2 rounded-t-md text-sm xl:text-base flex items-center hover:bg-white">
        More
        <MdExpandMore className="size-6" />
      </button>
    </nav>
  );
}
