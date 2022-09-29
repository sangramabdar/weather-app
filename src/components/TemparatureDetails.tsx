import { memo } from "react";

const Temperature = ({ temp, tempUnit, name }: any) => {
  return (
    <div className="flex justify-center space-x-20">
      <div>{name}</div>
      <div>
        {temp} {tempUnit}
      </div>
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
    <div className="flex w-[500px] justify-evenly">
      <div className="flex flex-col justify-between h-[200px]">
        <div>
          <p>min</p>
          <p>
            {temp_min} {tempUnit}
          </p>
        </div>
        <div>
          <p>max</p>
          <p>
            {temp_max} {tempUnit}
          </p>
        </div>
        <div>
          <p>feels like</p>
          <p>
            {feels_like} {tempUnit}
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-between h-[200px]">
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
  console.log(unit);
  const { temp, feels_like, humidity, pressure, temp_max, temp_min } =
    weatherInfo.main;
  const { name } = weatherInfo;
  const { speed } = weatherInfo.wind;

  const tempUnit = unit === "metric" ? "C" : "F";
  return (
    <>
      <Temperature name={name} temp={temp} tempUnit={tempUnit} />
      <OtherDetails {...weatherInfo.main} tempUnit={tempUnit} />
    </>
  );
});

export default TemperatureDetails;
