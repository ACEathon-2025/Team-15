import React, { useEffect, useState } from 'react';
import { Bar } from 'recharts';
import { BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface ChartDataType {
  name: string;
  delay: number;
}

const TrafficCharts: React.FC = () => {
  const [weekdaysData, setWeekdaysData] = useState<ChartDataType[]>([]);
  const [weekendsData, setWeekendsData] = useState<ChartDataType[]>([]);
  const [weatherData, setWeatherData] = useState<ChartDataType[]>([]);

  useEffect(() => {
    // Sample data simulating CSV content
    setWeekdaysData([
      { name: 'Monday', delay: 12.5 },
      { name: 'Tuesday', delay: 14.2 },
      { name: 'Wednesday', delay: 15.8 },
      { name: 'Thursday', delay: 13.9 },
      { name: 'Friday', delay: 18.3 }
    ]);

    setWeekendsData([
      { name: 'Saturday', delay: 8.4 },
      { name: 'Sunday', delay: 6.7 }
    ]);

    setWeatherData([
      { name: 'Clear', delay: 9.2 },
      { name: 'Cloudy', delay: 11.5 },
      { name: 'Rain', delay: 16.8 },
      { name: 'Heavy Rain', delay: 22.3 },
      { name: 'Snow', delay: 25.6 }
    ]);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Traffic Delay Analysis</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Weekdays Chart */}
        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
          <h2 className="text-lg font-semibold mb-4 text-center">Weekdays vs Traffic Delay</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={weekdaysData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis dataKey="name" tick={{ fill: '#ddd' }} />
              <YAxis tick={{ fill: '#ddd' }} label={{ value: 'Delay (min)', angle: -90, position: 'insideLeft', fill: '#ddd' }} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #374151' }}
                labelStyle={{ color: '#fff' }}
              />
              <Bar dataKey="delay" fill="#00adff" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Weekends Chart */}
        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
          <h2 className="text-lg font-semibold mb-4 text-center">Weekends vs Traffic Delay</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={weekendsData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis dataKey="name" tick={{ fill: '#ddd' }} />
              <YAxis tick={{ fill: '#ddd' }} label={{ value: 'Delay (min)', angle: -90, position: 'insideLeft', fill: '#ddd' }} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #374151' }}
                labelStyle={{ color: '#fff' }}
              />
              <Bar dataKey="delay" fill="#00adff" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Weather Chart */}
        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
          <h2 className="text-lg font-semibold mb-4 text-center">Weather vs Traffic Delay</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={weatherData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis dataKey="name" tick={{ fill: '#ddd' }} />
              <YAxis tick={{ fill: '#ddd' }} label={{ value: 'Delay (min)', angle: -90, position: 'insideLeft', fill: '#ddd' }} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #374151' }}
                labelStyle={{ color: '#fff' }}
              />
              <Bar dataKey="delay" fill="#00adff" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default TrafficCharts;