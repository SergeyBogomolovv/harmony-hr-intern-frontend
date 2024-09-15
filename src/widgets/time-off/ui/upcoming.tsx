import { Separator } from "@/shared/ui/separator";
import { FaRegClock } from "react-icons/fa";
import { GiHealthNormal } from "react-icons/gi";
import { TbPigMoney } from "react-icons/tb";

export default function UpcomingTimeOff() {
  return (
    <>
      <div className="flex items-center gap-2">
        <FaRegClock className="size-4" />
        <p className="text-blue text-sm">Upcoming Time Off</p>
      </div>
      <Separator />
      <div className="flex items-center gap-4 text-sm">
        <GiHealthNormal className="size-8" />
        <div className="flex flex-col">
          <p>Jan 27</p>
          <div className="flex gap-1 items-center">
            <div className="size-2 rounded-full bg-black" />
            <p>1 day of Sick</p>
          </div>
        </div>
      </div>
      <Separator />
      <div className="flex items-center gap-4 text-sm">
        <TbPigMoney className="size-8" />
        <div className="flex flex-col">
          <p>Jul 4</p>
          <p>Independence Day</p>
        </div>
      </div>
      <Separator />
    </>
  );
}
