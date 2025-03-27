import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const Map = () => {
  useEffect(() => {
    if (!document.getElementById("map")) return;

    let map = L.map("map").setView([18.6667, 73.9000], 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    L.marker([18.6667, 73.9000])
      .addTo(map)
      .bindPopup("Welcome to Alandi")
      .openPopup();

    return () => {
      if (map) {
        map.remove();
      }
    };
  }, []);

  return <div id="map" className="h-96 w-full rounded-lg shadow-md mt-6"></div>;
};

export default Map;
