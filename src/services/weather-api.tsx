import { unit } from "../config/constants";

const BASE_URL = "https://api.openweathermap.org/data/2.5";

const API_KEY = "219734a2371113af12bc4edec57fedb6";

function BuildURL(params: {}): URL {
  const url = new URL(BASE_URL + "/" + "weather");
  const searchParams = new URLSearchParams({
    ...params,
    appid: API_KEY,
  });

  url.search = searchParams.toString();

  return url;
}

async function getWeatherDataByCity(requestInfo: {
  cityName: string;
  units?: unit;
}) {
  const url = BuildURL({ q: requestInfo.cityName, units: requestInfo.units });
  const result = await getRequest(url.toString());
  return result;
}

async function getRequest(url: string) {
  const response = await fetch(url);
  const responseBody = await response.json();

  if (!response.ok) {
    return {
      error: responseBody.message,
      value: null,
    };
  }

  return {
    error: null,
    value: responseBody,
  };
}

export { getWeatherDataByCity };
