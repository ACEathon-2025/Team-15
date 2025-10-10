"use client";

import React, { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";

// Fix marker icon paths for Leaflet in React
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

export default function LeafletRouteMap() {
  const mapRef = useRef<L.Map | null>(null);
  const routeControlRef = useRef<any>(null);
  const [points, setPoints] = useState<L.LatLng[]>([]);

  useEffect(() => {
    if (!mapRef.current) return;
    const map = mapRef.current;

    const onMapClick = (e: L.LeafletMouseEvent) => {
      const latlng = e.latlng;
      setPoints((prev) => {
        const newPts = [...prev, latlng];
        if (newPts.length === 2) {
          // Remove existing route if present
          if (routeControlRef.current) {
            routeControlRef.current.remove();
            routeControlRef.current = null;
          }

          // Create and add route
          // @ts-ignore
          routeControlRef.current = L.Routing.control({
            waypoints: newPts,
            router: L.Routing.osrmv1({
              serviceUrl: "https://router.project-osrm.org/route/v1",
            }),
            lineOptions: {
              styles: [{ color: "#1f8ef1", weight: 6 }],
            },
            createMarker: function (i: number, wp: any) {
              return L.marker(wp.latLng, { draggable: false });
            },
            fitSelectedRoute: true,
          }).addTo(map);

          return [];
        }
        return newPts;
      });
    };

    map.on("click", onMapClick);
    return () => {
      map.off("click", onMapClick);
    };
  }, []);

  return (
    <div className="w-full h-[80vh] bg-gray-950 text-white">
      <h2 className="text-center text-2xl font-semibold mb-3 pt-3">
        Click source and destination to view the route
      </h2>

      <MapContainer
        whenCreated={(m) => (mapRef.current = m)}
        center={[12.9141, 74.8560]} // Mangalore default center
        zoom={13}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>

      <p className="text-center text-gray-400 mt-2 text-sm">
        (Click once for Source, again for Destination)
      </p>
    </div>
  );
}
