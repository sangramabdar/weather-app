import { useCallback, useEffect, useState } from "react";
import Search from "./components/Search";
import TemparatureDetails from "./components/TemparatureDetails";
import TopButtons from "./components/TopButtons";
import { getWeatherDataByCity } from "./services/weather-api";
import "./style/app.css";

const DEFAULT_CITY_NAME = "Sydney";
export type unit = "metric" | "imperial";

function App() {
  const [city, setCity] = useState("");
  const [error, setError] = useState(null);
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [currentUnitType, setCurrentUnitType] = useState<unit>("metric");

  useEffect(() => {
    searchByCityName(DEFAULT_CITY_NAME);
  }, []);

  const selectCity = (city: string) => {
    setCity(city);
    searchByCityName(city);
  };

  const setCityName = (e: any) => {
    setCity(e.target.value);
  };

  const searchByCityName = async (city: string, units: unit = "metric") => {
    const { error, value } = await getWeatherDataByCity({
      cityName: city,
      units: units,
    });

    if (error) {
      setWeatherInfo(null);
      setError(error);
    } else {
      setWeatherInfo(value);
      setError(null);
    }
    setCurrentUnitType(units);
  };

  return (
    <div className="mx-auto my-8 max-w-[700px] flex flex-col gap-5">
      <TopButtons selectCity={selectCity} />
      <Search
        cityName={city}
        setCityName={setCityName}
        searchByCityName={searchByCityName}
      />
      {weatherInfo && (
        <TemparatureDetails unit={currentUnitType} weatherInfo={weatherInfo} />
      )}
      {error && error}
    </div>
  );
}

export default App;
