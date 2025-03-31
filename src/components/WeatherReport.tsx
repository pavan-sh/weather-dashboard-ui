import React from 'react';

const WeatherReport = () => {
  // Dummy data
  const location = {
    city: "Alexandria",
    region: "Los Angeles",
    precipitation: "12 mm",
    windSpeed: "04 m/s",
  };

  const stats = [
    { value: "28.69", time: "01:00 AM AGO", label: "USY Index" },
    { value: "23.79", time: "03:30 AM AGO", secondary: true },
    { value: "03.58", time: "01:00 AM AGO", label: "Visibility" },
    { value: "15.54", time: "01:00 AM AGO", secondary: true },
    { value: "1012", time: "01:00 AM AGO", label: "Pressure" },
  ];

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6 font-sans">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Weather Report</h1>
        <div className="mt-4">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Your Location</h2>
          <h3 className="text-xl font-bold text-gray-800 mt-1">{location.city}, {location.region}</h3>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-600 mb-6 italic">
        Use line text that has been edited for length on format to match the characteristics of real content as closely as possible.
      </p>

      {/* Location Details */}
      <div className="mb-8">
        <div className="flex items-center space-x-4">
          <div className="flex-1">
            <p className="font-bold text-gray-800">{location.city}, {location.region}</p>
            <div className="flex space-x-4 mt-2">
              <span className="text-gray-600">{location.precipitation}</span>
              <span className="text-gray-600">{location.windSpeed}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4">
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className={`p-4 rounded-lg ${stat.secondary ? 'bg-gray-50' : 'bg-blue-50'}`}
          >
            <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
            <p className="text-sm text-gray-500 mt-1">{stat.time}</p>
            {stat.label && (
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mt-2">
                {stat.label}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherReport;