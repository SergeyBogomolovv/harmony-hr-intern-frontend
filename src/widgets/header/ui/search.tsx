import { IoIosSearch } from "react-icons/io";

export default function Search() {
  return (
    <div className="flex items-center gap-2 rounded-xl bg-white px-2 sm:w-full border border-foreground">
      <button className="p-2 cursor-pointer w-full sm:w-fit">
        <IoIosSearch className="size-5" />
      </button>
      <input
        type="search"
        placeholder="Search"
        className="w-full hidden sm:block focus-visible:outline-none"
      />
    </div>
  );
}
