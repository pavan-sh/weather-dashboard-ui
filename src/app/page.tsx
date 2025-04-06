"use client";

import GoogleMapWithHeatmap from "@/components/GoogleMapWithHeatmap";
import Dashboard from "./Dashboard";
import TemperatureChart from "@/components/TemperatureChart";
import useWeatherStore from "@/hooks/useWeatherStore";
import { useEffect, useState } from "react";

export default function Home() {
  const { weather, fetchWeather } = useWeatherStore();
  const [loading, setLoading] = useState(true);
  const getUserLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      fetchWeather(position.coords).then(() => {
        setLoading(false);
      });
    });
  };
  useEffect(() => {
    getUserLocation();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
      </div>
    );
  }

  return (
    <>
      <Dashboard weatherData={weather} />
      <TemperatureChart />
      <GoogleMapWithHeatmap />
    </>
  );
}
