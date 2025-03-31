// components/WelcomeCard.tsx
import { CloudSun } from "lucide-react";

import React from "react";

const WelcomeCard = () => {
  return (
    <div className=" mx-auto p-6 bg-white rounded-xl shadow-md text-center ml-5">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-blue-700">
          Welcome Back California
        </h1>
      </div>

      {/* Content */}
      <div className="space-y-4  mb-6 text-sm" style={{ color: "#A5A8E6" }}>
        <p className="leading-7">
          The argument in favor of using filter test goes something like that if
          you use red content in the design process, anytime you reach a review
          point you&apos;ll end up reviewing and requesting the content itself
          and not the design.
        </p>
      </div>

      {/* Temperature Indicator */}
      <div className="w-[90%] bg-blue-600 text-white p-4 rounded-lg flex items-center justify-around font-sans">
        <div className="flex items-center">
          <CloudSun size={50} className="w-[100px] relative left-4 bottom-1" />
          <span className="text-3xl font-bold">25°C</span>
        </div>
        <div className="text-md border border-r-2 rounded-full p-4">
          Spring-like
        </div>
      </div>
    </div>
  );
};

export default WelcomeCard;
