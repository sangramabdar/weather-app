import {
  Input,
  Button,
  Flex,
  Box,
  Spacer,
  ButtonGroup,
  IconButton,
} from "@chakra-ui/react";
import { ChangeEventHandler } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { unit } from "../config/constants";
import "../style/search.css";

interface SearchProps {
  setCityName: ChangeEventHandler<HTMLInputElement>;
  searchByCityName: (city: string, units?: unit) => void;
  cityName: string;
}

function Search({ setCityName, searchByCityName, cityName }: SearchProps) {
  return (
    <Flex className="h-10 mt-2" gap="2">
      <Box className="flex items-center grow gap-5">
        <Input
          type="text"
          placeholder="Search..."
          className="text-black w-30 h-5 rounded p-3"
          onChange={setCityName}
          value={cityName}
          variant="filled"
        />
        <IconButton
          colorScheme="blue"
          icon={
            <AiOutlineSearch
              onClick={() => {
                searchByCityName(cityName);
              }}
              size={"1.5rem"}
              fill="white"
            />
          }
          aria-label="Search by city name"
        />
      </Box>
      <Spacer />
      <ButtonGroup className="flex">
        <Button
          colorScheme="blue"
          className="text-[1.5rem]"
          onClick={() => {
            searchByCityName(cityName, "metric");
          }}
        >
          C
        </Button>
        <p className="w-[1px] h-10 bg-white"></p>
        <Button
          colorScheme="blue"
          className="text-[1.5rem]"
          onClick={() => {
            searchByCityName(cityName, "imperial");
          }}
        >
          F
        </Button>
      </ButtonGroup>
    </Flex>
  );
}

export default Search;
