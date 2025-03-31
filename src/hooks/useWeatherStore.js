import { create } from "zustand";
import axios from "axios";

const API_KEY = "9f33858ceb5a6fe4c3bb57d6b491cc5b"; // Get from OpenWeatherMap

const useWeatherStore = create((set) => ({
  weather: null,
  fetchWeather: async (location) => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`
      );
      set({ weather: res.data });
    } catch (error) {
      console.error("Error fetching weather", error);
    }
  },
}));

export default useWeatherStore;
