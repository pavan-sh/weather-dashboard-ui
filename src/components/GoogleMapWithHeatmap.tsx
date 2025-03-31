"use client";
import { GoogleMap, LoadScript, HeatmapLayer } from "@react-google-maps/api";
import { useState, useEffect } from "react";

const containerStyle = {
  width: "100%",
  height: "600px",
};

// 📍 Alexandria, Los Angeles
const center = { lat: 34.0489, lng: -118.261 };

// 📌 Restrict movement to Alexandria
const bounds = {
  north: 34.0525,
  south: 34.0455,
  west: -118.265,
  east: -118.257,
};

const GoogleMapWithHeatmap = () => {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "";
  const [isGoogleLoaded, setIsGoogleLoaded] = useState(false);
  const [heatmapData, setHeatmapData] = useState<google.maps.LatLng[]>([]);

  // ✅ Check when Google Maps is available
  useEffect(() => {
    const checkGoogle = setInterval(() => {
      if (typeof google !== "undefined" && google.maps) {
        setIsGoogleLoaded(true);
        clearInterval(checkGoogle);
      }
    }, 500);
    return () => clearInterval(checkGoogle);
  }, []);

  // ✅ Load heatmap data once Google Maps is ready
  useEffect(() => {
    if (isGoogleLoaded) {
      setHeatmapData([
        new google.maps.LatLng(34.0485, -118.2605), // Heavy rain
        new google.maps.LatLng(34.049, -118.261), // Moderate rain
        new google.maps.LatLng(34.0495, -118.26), // Light rain
      ]);
    }
  }, [isGoogleLoaded]);

  return (
    <div className="px-5">
      <h2 className="text-2xl font-bold mb-5">Map</h2>
      <LoadScript googleMapsApiKey={apiKey} libraries={["visualization"]}>
        {isGoogleLoaded ? (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={16}
            options={{
              restriction: { latLngBounds: bounds, strictBounds: true },
              streetViewControl: false,
              mapTypeControl: false,
              zoomControl: true,
            }}
          >
            {/* ✅ Only load heatmap if Google Maps is ready */}
            {heatmapData.length > 0 && (
              <HeatmapLayer
                data={heatmapData}
                options={{ radius: 30, opacity: 0.7, dissipating: true }}
              />
            )}
          </GoogleMap>
        ) : (
          <p>Loading Google Maps...</p>
        )}
      </LoadScript>
    </div>
  );
};

export default GoogleMapWithHeatmap;
