import FilterBadge from "./FilterBadge";
import { BsSearch, BsFilter } from "react-icons/bs";

export default function FilterNav() {
  return (
    <>
      <div className="overflow-hidden py-2 flex items-center">
        <div className="pr-3 border-r border-neutral">
          <BsFilter className="text-3xl" />
        </div>
        <div className="grid grid-flow-col gap-3 pl-5 overflow-scroll scrollbar-hide ">
          <FilterBadge text="Option" />
          <FilterBadge text="Option" />
          <FilterBadge text="Option" />
          <FilterBadge text="Option" />
          <FilterBadge text="Option" />
          <FilterBadge text="Option" />
        </div>
      </div>
    </>
  );
}
