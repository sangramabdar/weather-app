import React, { ChangeEventHandler } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { unit } from "../App";
import "../style/search.css";

interface SearchProps {
  setCityName: ChangeEventHandler<HTMLInputElement>;
  searchByCityName: (city: string, units?: unit) => void;
  cityName: string;
}

function Search({ setCityName, searchByCityName, cityName }: SearchProps) {
  return (
    <div className="h-10 flex justify-between mt-2 items-center">
      <div className="flex items-center grow gap-2">
        <input
          type="text"
          placeholder="Search..."
          className="text-black w-30 h-5 rounded p-3"
          onChange={setCityName}
          value={cityName}
        />
        <AiOutlineSearch
          onClick={() => {
            searchByCityName(cityName);
          }}
          size={"1.5rem"}
        />
        {/* <GoLocation /> */}
      </div>
      <div className="flex grow gap-2">
        <button
          className="text-[1.5rem]"
          onClick={() => {
            searchByCityName(cityName, "metric");
          }}
        >
          C
        </button>
        <p className="w-[1px] h-10 bg-white"></p>
        <button
          className="text-[1.5rem]"
          onClick={() => {
            searchByCityName(cityName, "imperial");
          }}
        >
          F
        </button>
      </div>
    </div>
  );
}

export default Search;
