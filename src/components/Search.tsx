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
    <div className="search-row">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search..."
          className=""
          onChange={setCityName}
        />
        <AiOutlineSearch
          onClick={() => {
            console.log(cityName);
            searchByCityName(cityName);
          }}
        />
        <GoLocation />
      </div>
      <div className="search-c-f">
        <button
          onClick={() => {
            searchByCityName(cityName, "metric");
          }}
        >
          c
        </button>
        <p>|</p>
        <button
          onClick={() => {
            searchByCityName(cityName, "imperial");
          }}
        >
          f
        </button>
      </div>
    </div>
  );
}

export default Search;
