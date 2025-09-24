'use client';
import { useRouter } from "next/navigation";
import { ChangeEvent, FC } from "react";

type Props = {
  roomTypeFilter: string;
  searchQuery: string;
  setRoomTypeFilter: (value: string) => void;
  setSearchQuery: (value: string) => void;
};

const Search: FC<Props> = ({
  roomTypeFilter,
  searchQuery,
  setRoomTypeFilter,
  setSearchQuery,
}) => {
  const router = useRouter();

  const handleRoomTypeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setRoomTypeFilter(event.target.value);
  };

  const handleSearchQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleFilterClick = () => {
    router.push(`/rooms?roomType=${roomTypeFilter}&searchQuery=${searchQuery}`);
  };

  return (
    <section className="bg-amber-600 px-4 py-6 rounded-lg">
      <div className="container mx-auto flex gap-4 flex-wrap justify-between items-center">
        
        {/* Room Type Select */}
        <div className="w-full md:w-1/3 lg:w-auto mb-4 md:mb-0">
          <label className="block text-sm font-medium mb-2 text-gray-300 dark:text-white">
            Room Type
          </label>
          <div className="relative">
            <select
              value={roomTypeFilter}
              onChange={handleRoomTypeChange}
              className="w-full px-4 py-2 capitalize rounded leading-tight dark:bg-black dark:text-white focus:outline-none"
            >
              <option value="All">All</option>
              <option value="Basic">Basic</option>
              <option value="Luxury">Luxury</option>
              <option value="Suite">Suite</option>
            </select>
          </div>
        </div>

        {/* Search Input */}
        <div className="w-full md:w-1/3 lg:w-auto mb-4 md:mb-0">
          <label className="block text-sm font-medium mb-2 text-gray-800 dark:text-white">
            Search
          </label>
          <input
            type="search"
            id="search"
            className="w-full px-4 py-3 rounded leading-tight dark:bg-black dark:text-white focus:outline-none placeholder:text-gray-400"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchQueryChange}
          />
        </div>

        {/* Button */}
        <button
          className="px-6 md:px-[50px] lg:px-[72px] py-2 md:py-5 bg-primary rounded-lg md:rounded-2xl shadow-sm shadow-primary text-white font-bold text-base md:text-xl hover:scale-110 duration-300 transition-all"
          type="button"
          onClick={handleFilterClick}
        >
          Search
        </button>
      </div>
    </section>
  );
};

export default Search;
