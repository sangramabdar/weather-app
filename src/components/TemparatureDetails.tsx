import { memo } from "react";

const Temperature = ({ temp, tempUnit, name }: any) => {
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
    <div className="grow flex flex-col gap-3">
      <div className="flex justify-evenly">
        <div>
          <p>min</p>
          <p>
            {temp_min}
            <span className="relative">
              <span className="relative top-[-10px]">o</span>
            </span>
            {tempUnit}
          </p>
        </div>
        <div>
          <p>max</p>
          <p>
            {temp_max}
            <span className="relative">
              <span className="relative top-[-10px]">o</span>
            </span>
            {tempUnit}
          </p>
        </div>
        <div>
          <p>feels like</p>
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
          <p>pressure</p>
          <p>{pressure} hpa</p>
        </div>
        <div>
          <p>humidity</p>
          <p>{humidity} %</p>
        </div>
        <div>
          <p>wind speed</p>
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
    <div className="h-[300px]">
      <div className="text-2xl mt-5">
        {name} , {country}
      </div>
      <div className="flex items-center p-3 mt-10">
        <Temperature temp={temp} tempUnit={tempUnit} />
        <div className="h-24 bg-black border-r-[1px] border-solid"></div>
        <OtherDetails {...weatherInfo.main} tempUnit={tempUnit} speed={speed} />
      </div>
    </div>
  );
});

export default TemperatureDetails;
