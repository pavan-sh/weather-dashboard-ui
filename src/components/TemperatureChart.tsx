"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import WelcomeCard from "./WelcomeCard";

interface TemperatureData {
  time: string;
  temp: number;
}

const data: TemperatureData[] = [
  { time: "-30:00", temp: 5 },
  { time: "-18:00", temp: 15 },
  { time: "-18:00", temp: 25 },
  { time: "-18:00", temp: 32 },
  { time: "-14:00", temp: 20 },
  { time: "-18:00", temp: 10 },
  { time: "-16:00", temp: 5 },
  { time: "-17:00", temp: 0 },
  { time: "-18:00", temp: 8 },
];

const TemperatureChart: React.FC = () => {
  return (
    <div className="flex justify-between items-center  my-4 px-5">
      <div className="p-4 bg-white rounded-lg shadow w-1/2">
        <h2 className="text-2xl font-bold mb-5">
          Temperature trends over time
        </h2>
        <div className="flex gap-4 mb-4">
          <span className="text-sm">Highest Temp. 32°C</span>
          <span className="text-sm">Lowest Temp. 0°C</span>
          <span className="text-sm font-semibold">Today</span>
        </div>

        <div style={{ width: "100%", height: 200 }}>
          <ResponsiveContainer>
            <LineChart
              data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" tick={{ fontSize: 12 }} />
              <YAxis
                domain={[-10, 40]}
                tick={{ fontSize: 12 }}
                tickFormatter={(value: any) => `${value}°C`}
              />
              <Tooltip
                formatter={(value: number) => [`${value}°C`, "Temperature"]}
                labelFormatter={(label: any) => `Time: ${label}`}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="temp"
                stroke="#8884d8"
                strokeWidth={2}
                activeDot={{ r: 8 }}
                name="Temperature"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="w-1/2">
        <WelcomeCard />
      </div>
    </div>
  );
};

export default TemperatureChart;
