import { GiHealthNormal } from "react-icons/gi";
import TimeOffCard from "./card";
import { PiMountains } from "react-icons/pi";
import { LuFileClock } from "react-icons/lu";

export default function TimeOffCards() {
  return (
    <div className="md:my-4 my-2 flex gap-10 lg:justify-center overflow-x-auto">
      <TimeOffCard label="Sick Full-Time">
        <h4 className="text-xl">Sick</h4>
        <div className="flex items-center text-2xl font-bold gap-2">
          <GiHealthNormal className="size-6" />3
        </div>
        <p className="text-sm">Days Available</p>
        <p className="text-sm text-blue">1 day scheduled</p>
      </TimeOffCard>
      <TimeOffCard label="Holiday Full-Time">
        <h4 className="text-xl">Annual Leave</h4>
        <div className="flex items-center text-2xl font-bold gap-2">
          <PiMountains className="size-6" />
          10.3
        </div>
        <p className="text-sm">Days Available</p>
      </TimeOffCard>
      <TimeOffCard label="Comp/in Lieu Time Flexible Policy">
        <h4 className="text-xl">Comp/in Lieu Time</h4>
        <div className="flex items-center text-2xl font-bold gap-2">
          <LuFileClock className="size-6" />0
        </div>
        <p className="text-sm">Human Used(YTD)</p>
      </TimeOffCard>
    </div>
  );
}
