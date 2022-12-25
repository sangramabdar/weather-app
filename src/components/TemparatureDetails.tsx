import { Card, CardBody, CardHeader } from "@chakra-ui/react";
import { memo } from "react";

const Temperature = ({ temp, tempUnit }: any) => {
  return (
    <div className="grow text-center text-2xl">
      {temp}
      <span className="relative">
        <span className="p-1 relative top-[-10px]">o</span>
      </span>
      {tempUnit}
    </div>
  );
};

const OtherDetails = ({
  temp_min,
  tempUnit,
  temp_max,
  feels_like,
  pressure,
  humidity,
  speed,
}: any) => {
  return (
    <div className="grow flex flex-col gap-5">
      <div className="flex justify-evenly">
        <div>
          <p>Min</p>
          <p>
            {temp_min}
            <span className="relative">
              <span className="relative top-[-10px]">o</span>
            </span>
            {tempUnit}
          </p>
        </div>
        <div>
          <p>Max</p>
          <p>
            {temp_max}
            <span className="relative">
              <span className="relative top-[-10px]">o</span>
            </span>
            {tempUnit}
          </p>
        </div>
        <div>
          <p>Feels like</p>
          <p>
            {feels_like}
            <span className="relative">
              <span className="relative top-[-10px]">o</span>
            </span>
            {tempUnit}
          </p>
        </div>
      </div>
      <div className="flex justify-evenly">
        <div>
          <p>Pressure</p>
          <p>{pressure} hpa</p>
        </div>
        <div>
          <p>Humidity</p>
          <p>{humidity} %</p>
        </div>
        <div>
          <p>Wind speed</p>
          <p>{speed} m/s</p>
        </div>
      </div>
    </div>
  );
};

const TemperatureDetails = memo(function ({ weatherInfo, unit }: any) {
  const { temp, feels_like, humidity, pressure, temp_max, temp_min } =
    weatherInfo.main;
  const { name } = weatherInfo;
  const { speed } = weatherInfo.wind;
  const { country } = weatherInfo.sys;

  const tempUnit = unit === "metric" ? "C" : "F";

  return (
    <Card bgColor="blue.500" className="h-[300px]">
      <CardHeader className="text-2xl mt-5">
        {name} , {country}
      </CardHeader>
      <CardBody className="flex items-center p-3 mt-10 grow-2">
        <Temperature temp={temp} tempUnit={tempUnit} />
        <div className="h-24 bg-black border-r-[1px] border-solid"></div>
        <OtherDetails {...weatherInfo.main} tempUnit={tempUnit} speed={speed} />
      </CardBody>
    </Card>
  );
});

export default TemperatureDetails;
