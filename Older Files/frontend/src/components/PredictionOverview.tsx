import React from "react";

interface PredictionOverviewProps {
  show: boolean;
  data?: any;
}

const PredictionOverview: React.FC<PredictionOverviewProps> = ({ show, data }) => {
  if (!show) return null;

  return (
    <div className="max-w-3xl mx-auto my-10 bg-white shadow-lg p-6 rounded-lg">
      <h2 className="text-2xl font-semibold text-center mb-4">Traffic Prediction Result</h2>

      {data ? (
        <div className="text-center space-y-2">
          <p>
            <strong>Predicted Traffic Density:</strong> {data.predicted_traffic_density}
          </p>
          <p>
            <strong>Expected Delay:</strong> {data.predicted_delay_minutes?.toFixed(2)} minutes
          </p>
          <p>
            <strong>Recommended Departure Time:</strong>{" "}
            {new Date(data.recommended_departure_time).toLocaleString()}
          </p>
          <p>
            <strong>Historical Mean Delay:</strong> {data.historical_mean_delay?.toFixed(2)} minutes
          </p>
          <p>
            <strong>Historical Vehicle Density:</strong>{" "}
            {data.historical_mean_vehicle_density?.toFixed(2)}
          </p>
          <p className="text-gray-500 text-sm mt-2">{data.notes}</p>
        </div>
      ) : (
        <p className="text-gray-600 text-center">No prediction data available.</p>
      )}
    </div>
  );
};

export default PredictionOverview;
