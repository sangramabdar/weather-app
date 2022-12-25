import { Suspense, useEffect, useState } from "react";
import Search from "./components/Search";
import TemparatureDetails from "./components/TemparatureDetails";
import TopButtons from "./components/TopButtons";
import { unit, DEFAULT_CITY_NAME } from "./config/constants";
import { getWeatherDataByCity } from "./services/weather-api";
import "./style/app.css";
import { Center, Spinner } from "@chakra-ui/react";
import Loading from "./components/Loading";
import Error from "./components/Error";

function App() {
  const [city, setCity] = useState(DEFAULT_CITY_NAME);
  const [error, setError] = useState(null);
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [currentUnitType, setCurrentUnitType] = useState<unit>("metric");

  useEffect(() => {
    setTimeout(() => {
      searchByCityName(DEFAULT_CITY_NAME);
    }, 1000);
  }, []);

  const selectCity = (city: string) => {
    setCity(city);
    searchByCityName(city);
  };

  const setCityName = (e: any) => {
    setCity(e.target.value);
  };

  const searchByCityName = async (cityName: string, units: unit = "metric") => {
    const { error, value } = await getWeatherDataByCity({
      cityName,
      units,
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

      {!weatherInfo && !error ? <Loading /> : null}

      {weatherInfo && (
        <TemparatureDetails unit={currentUnitType} weatherInfo={weatherInfo} />
      )}

      {error && <Error error={error} />}
    </div>
  );
}

export default App;
