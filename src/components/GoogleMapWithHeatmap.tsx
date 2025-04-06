"use client";
import {
  GoogleMap,
  HeatmapLayerF,
  useJsApiLoader,
} from "@react-google-maps/api";
import { useEffect, useState } from "react";

const containerStyle = {
  width: "100%",
  height: "600px",
};

const center = { lat: 34.0489, lng: -118.261 };

const bounds = {
  north: 34.0525,
  south: 34.0455,
  west: -118.265,
  east: -118.257,
};

const GoogleMapWithHeatmap = () => {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "";

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: apiKey,
    libraries: ["visualization"],
  });

  const [heatmapData, setHeatmapData] = useState<google.maps.LatLng[]>([]);
  useEffect(() => {
    if (isLoaded && window.google) {
      setHeatmapData([
        new google.maps.LatLng(34.0485, -118.2605),
        new google.maps.LatLng(34.049, -118.261),
        new google.maps.LatLng(34.0495, -118.26),
      ]);
    }
  }, [isLoaded]);

  if (loadError) return <div>Failed to load Google Maps</div>;

  return (
    <div className="px-5">
      <h2 className="text-2xl font-bold mb-5">Map</h2>
      {isLoaded ? (
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
          <HeatmapLayerF
            data={heatmapData}
            options={{ radius: 30, opacity: 0.7, dissipating: true }}
          />
        </GoogleMap>
      ) : (
        <p>Loading Google Maps...</p>
      )}
    </div>
  );
};

export default GoogleMapWithHeatmap;
