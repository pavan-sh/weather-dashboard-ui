import GoogleMapWithHeatmap from "@/components/GoogleMapWithHeatmap";
import Dashboard from "./Dashboard";
import TemperatureChart from "@/components/TemperatureChart";

export default function Home() {
  return (
    <>
      <Dashboard />
      <TemperatureChart />
      <GoogleMapWithHeatmap />
    </>
  );
}
