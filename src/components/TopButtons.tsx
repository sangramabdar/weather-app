import { Button } from "@chakra-ui/react";
import React, { memo, MouseEventHandler } from "react";
import "../style/top-button.css";

const topCities = [
  {
    id: 1,
    name: "London",
  },
  { id: 2, name: "Sydney" },
  {
    id: 3,
    name: "Tokyo",
  },
  {
    id: 4,
    name: "Paris",
  },
  {
    id: 5,
    name: "Toronto",
  },
];

interface TopButtonsProps {
  selectCity: (city: string) => void;
}

const TopButtons = memo(function ({ selectCity }: TopButtonsProps) {
  return (
    <div className="flex justify-between p-1 text-[20px] ">
      {topCities.map(city => {
        return (
          <Button
            colorScheme="blue"
            key={city.id}
            onClick={() => {
              selectCity(city.name);
            }}
          >
            {city.name}
          </Button>
        );
      })}
    </div>
  );
});

export default TopButtons;
