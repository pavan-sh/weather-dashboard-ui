import { create } from "zustand";
import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY; // Get from OpenWeatherMap

const useWeatherStore = create((set) => ({
  weather: null,
  fetchWeather: async (location) => {
    const { latitude, longitude } = location;
    const WEATHER_API = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;

    try {
      const res = await axios.get(WEATHER_API);
      set({ weather: res.data });
    } catch (error) {
      console.error("Error fetching weather", error);
    }
  },
}));

export default useWeatherStore;
