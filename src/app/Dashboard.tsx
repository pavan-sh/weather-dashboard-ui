/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import style from "../styles/dashboard.module.css";
import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";
import {
  CircleGauge,
  CloudSun,
  Droplet,
  Droplets,
  Locate,
  ThermometerSun,
  Wind,
} from "lucide-react";
import {
  estimateUVIndexFromTime,
  kelvinToCelsius,
  metersToKilometers,
  roundToOneDecimal,
} from "@/lib/utils";

const WeatherReport = ({ weatherData }: any) => {
  countries.registerLocale(enLocale);

  const countryName = countries.getName(weatherData?.sys.country, "en");

  return (
    <div className="font-sans p-5">
      <h1 className="text-2xl font-bold mb-5">Weather Report</h1>
      <div className="flex gap-5 items-center">
        <div className="bg-blue-700 text-white p-5 rounded-lg flex-1 flex flex-col justify-between">
          <div className="flex w-full">
            <div className="w-1/2">
              <p className="text-sm mb-2">Your Location</p>
              <h3 className={`text-xl font-bold mb-2`}>
                <span className={`${style.underline}`}>
                  {weatherData?.name}, {countryName ?? ""}
                </span>
              </h3>
              <p className="text-xs pt-[35px]">
                Use filler text that has been added for length as format to
                match the characteristics of real content as closely as
                possible.
              </p>
              <div className="flex items-center pt-[70px]">
                <div className="pr-1">
                  <Locate height={14} width={14} />
                </div>
                <div>
                  {weatherData?.coord.lat}, {weatherData?.coord.lon}
                </div>
              </div>
            </div>
            <div
              className={`w-1/2 self-center flex flex-col justify-center items-center`}
            >
              <div
                className={`flex items-center font-extrabold pl-2 ${style.temperature}`}
              >
                {kelvinToCelsius(weatherData?.main?.temp)}&deg;
              </div>

              <div
                className={`flex flex-row items-center justify-around w-full pt-5`}
              >
                <div className="flex  items-center border rounded-full p-1 px-5">
                  <div className="p-1">
                    <Droplet height={15} width={15} />
                  </div>
                  <div className="text-xs mr-2">
                    <span className="text-lg font-bold pr-1">
                      {weatherData?.main?.pressure}
                    </span>{" "}
                    hPa
                  </div>
                </div>
                <div className="flex items-center border rounded-full p-1 px-5">
                  <div className="p-1">
                    <Wind height={15} width={15} />
                  </div>
                  <div className="text-xs mr-2">
                    <span className="text-lg font-bold pr-1">
                      {roundToOneDecimal(weatherData?.wind?.speed)}
                    </span>
                    m/s
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-5 text-blue-700">
          <div className="flex gap-5">
            <div className="bg-indigo-100 p-2.5 rounded-lg flex-1 flex flex-col justify-center items-center">
              <div className="flex justify-between w-full">
                <div className=" m-0 w-1/2">
                  <div className="text-6xl font-semibold">
                    {roundToOneDecimal(weatherData?.main?.humidity)}
                  </div>
                  <div
                    style={{ color: "#A5A8E6" }}
                    className="text-md font-bold pl-2"
                  >
                    %
                  </div>
                </div>
                <div className="flex flex-col items-center self-center">
                  <div className="mb-3">
                    <Droplets size={50} color="#A5A8E6" />
                  </div>
                  <div className="font-bold">Humidity</div>
                </div>
              </div>
            </div>
            <div className="bg-indigo-100 p-2.5 rounded-lg flex-1 flex flex-col justify-center items-center">
              <div className="flex justify-between w-full">
                <div className="text-sm m-0 w-1/2">
                  <div className="">
                    <svg
                      width="150"
                      height="50"
                      viewBox="0 0 150 50"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <linearGradient
                          id="waveGradient"
                          x1="0%"
                          y1="50%"
                          x2="100%"
                          y2="50%"
                        >
                          <stop offset="0%" stopColor="blue" />
                          <stop offset="100%" stopColor="red" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M10 25 
       Q 30 40, 50 30  
       Q 70 10, 90 20  
       Q 110 35, 130 18  
       Q 145 10, 150 12"
                        stroke="url(#waveGradient)"
                        strokeWidth="3"
                        fill="none"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <div className="text-4xl font-normal m-0">
                    {roundToOneDecimal(weatherData?.main?.pressure)}
                  </div>
                  <div
                    style={{ color: "#A5A8E6" }}
                    className="text-sm pl-2 font-bold"
                  >
                    hPa
                  </div>
                </div>
                <div className="flex flex-col items-center self-center">
                  <div className="mb-3">
                    <CircleGauge size={50} style={{ color: "#A5A8E6" }} />
                  </div>
                  <div className="font-bold">Pressure</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-5 ">
            <div className="bg-indigo-100 p-2.5 rounded-lg flex-1 flex flex-col justify-center items-center">
              <div className="flex justify-between w-full">
                <div className="text-sm m-0 w-1/2">
                  <div>
                    <svg
                      width="150"
                      height="50"
                      viewBox="0 0 150 50"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <linearGradient
                          id="waveGradient"
                          x1="0%"
                          y1="50%"
                          x2="100%"
                          y2="50%"
                        >
                          <stop offset="0%" stopColor="blue" />
                          <stop offset="100%" stopColor="red" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M10 40  
           Q 25 5, 40 10  
           Q 55 0, 70 20  
           Q 85 35, 100 30  
           Q 115 25, 130 28  
           Q 140 30, 145 25"
                        stroke="url(#waveGradient)"
                        strokeWidth="3"
                        fill="none"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <span className="text-4xl font-normal m-0">
                    {estimateUVIndexFromTime(weatherData?.dt)}
                  </span>
                  <div
                    style={{ color: "#A5A8E6" }}
                    className="text-sm font-bold pl-1"
                  >
                    (0-11)
                  </div>
                </div>
                <div className="flex flex-col items-center self-center">
                  <div className="mb-3">
                    <ThermometerSun size={50} style={{ color: "#A5A8E6" }} />
                  </div>
                  <div className="font-bold">UV Index</div>
                </div>
              </div>
            </div>
            <div className="bg-indigo-100 p-2.5 rounded-lg flex-1 flex flex-col justify-center items-center">
              <div className="flex w-full justify-between">
                <div className="text-sm m-0 w-1/2">
                  <div className="text-6xl font-semibold m-0">
                    {metersToKilometers(weatherData?.visibility)}
                  </div>
                  <div
                    style={{ color: "#A5A8E6" }}
                    className="text-md pl-2 font-bold"
                  >
                    Km
                  </div>
                </div>
                <div className="flex flex-col items-center self-center">
                  <div className="mb-3">
                    <CloudSun size={50} style={{ color: "#A5A8E6" }} />
                  </div>
                  <div className="font-bold">Visibility</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherReport;
