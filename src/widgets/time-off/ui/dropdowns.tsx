import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select";

export function CategoryDropdown() {
  return (
    <Select defaultValue={"sick"}>
      <SelectTrigger className="md:w-[250px] w-full">
        <SelectValue placeholder="Select Category" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="sick">Sick</SelectItem>
        <SelectItem value="annual">Annual Leave</SelectItem>
        <SelectItem value="comp">Comp/in Lieu Time</SelectItem>
      </SelectContent>
    </Select>
  );
}

export function CountDropdown() {
  return (
    <Select defaultValue="all">
      <SelectTrigger className="md:max-w-[100px] max-w-full w-full md:w-fit">
        <SelectValue placeholder="Select count" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">All</SelectItem>
        <SelectItem value="latest">Latest</SelectItem>
      </SelectContent>
    </Select>
  );
}

export function HistroryDropdown() {
  return (
    <Select defaultValue={"balance"}>
      <SelectTrigger className="md:w-[180px] w-full">
        <SelectValue placeholder="Select histrory" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="balance">Balance History</SelectItem>
        <SelectItem value="days">Days History</SelectItem>
      </SelectContent>
    </Select>
  );
}
