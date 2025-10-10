import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar";

interface PredictFormProps {
  onPredict: (data?: any) => void;
}

const PredictForm: React.FC<PredictFormProps> = ({ onPredict }) => {
  const [source, setSource] = useState("Udupi");
  const [destination, setDestination] = useState("Mangalore");
  const [desiredArrival, setDesiredArrival] = useState("");
  const [weather, setWeather] = useState("Clear");
  const [isFestival, setIsFestival] = useState(false);
  const [calamities, setCalamities] = useState(false);
  const [roadConstruction, setRoadConstruction] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!desiredArrival) {
      setError("Please select a date and time");
      return;
    }

    const payload = {
      source,
      destination,
      desired_arrival: desiredArrival,
      weather_main: weather,
      is_festival: isFestival ? 1 : 0,
      calamities: calamities ? 1 : 0,
      road_construction: roadConstruction ? 1 : 0,
    };

    try {
      setLoading(true);
      const response = await fetch("http://127.0.0.1:8000/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Failed to fetch prediction");

      const data = await response.json();
      onPredict(data); // Pass prediction data to parent
    } catch (err: any) {
      console.error(err);
      setError("Something went wrong while predicting.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-10 bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto bg-white shadow-md rounded-lg p-6 space-y-4"
      >
        <h2 className="text-2xl font-semibold text-center">Plan Your Commute</h2>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">Source</label>
            <input
              className="w-full border px-2 py-1 rounded"
              value={source}
              onChange={(e) => setSource(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Destination</label>
            <input
              className="w-full border px-2 py-1 rounded"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Select Date & Time</label>
          <Calendar withTime onDateTimeChange={setDesiredArrival} />
        </div>

        <div>
          <label className="block text-sm font-medium">Weather</label>
          <select
            className="w-full border px-2 py-1 rounded"
            value={weather}
            onChange={(e) => setWeather(e.target.value)}
          >
            <option>Clear</option>
            <option>Clouds</option>
            <option>Rain</option>
            <option>Drizzle</option>
            <option>Thunderstorm</option>
            <option>Mist</option>
            <option>Haze</option>
          </select>
        </div>

        <div className="flex space-x-4">
          <label>
            <input
              type="checkbox"
              checked={isFestival}
              onChange={(e) => setIsFestival(e.target.checked)}
            />{" "}
            Festival
          </label>

          <label>
            <input
              type="checkbox"
              checked={calamities}
              onChange={(e) => setCalamities(e.target.checked)}
            />{" "}
            Calamities
          </label>

          <label>
            <input
              type="checkbox"
              checked={roadConstruction}
              onChange={(e) => setRoadConstruction(e.target.checked)}
            />{" "}
            Road Construction
          </label>
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <div className="text-center">
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            {loading ? "Predicting..." : "Predict Traffic"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default PredictForm;
