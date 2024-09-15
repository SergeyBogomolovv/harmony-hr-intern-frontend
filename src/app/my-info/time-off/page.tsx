import { Separator } from "@/shared/ui/separator";

import {
  TimeOffCards,
  TimeOffDate,
  UpcomingTimeOff,
  TimeOffHistory,
} from "@/widgets/time-off";

export default function TimeOffPage() {
  return (
    <div className="flex-1 bg-white rounded-b-lg flex flex-col py-8 px-4 gap-4 w-full overflow-x-auto">
      <TimeOffDate />
      <Separator />
      <TimeOffCards />
      <UpcomingTimeOff />
      <TimeOffHistory />
    </div>
  );
}
