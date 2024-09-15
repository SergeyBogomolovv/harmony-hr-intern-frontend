import { Button } from "@/shared/ui/button";
import { LuFileClock } from "react-icons/lu";

export default function TimeOffDate() {
  return (
    <div className="flex items-center md:justify-between justify-center w-full">
      <div className="md:flex items-center gap-2 text-blue hidden">
        <LuFileClock className="size-5" />
        <h3 className="text-xl">Time Off</h3>
      </div>
      <div className="flex gap-4 flex-col md:flex-row w-full md:w-auto">
        <p className="self-end">
          Accrual Level Start Date
          <span className="text-sky-700"> 03/09-2020</span>
        </p>
        <Button>Add Time Off Policy</Button>
      </div>
    </div>
  );
}
