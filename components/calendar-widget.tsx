'use client'

import { useEffect, useState } from 'react'

export default function CalendarWidget() {
  const [daysLeft, setDaysLeft] = useState(0)
  const [daysPassed, setDaysPassed] = useState(0)
  const [year, setYear] = useState(new Date().getFullYear())
  
  useEffect(() => {
    const calculateDays = () => {
      const now = new Date(new Date().toLocaleString("en-US", {timeZone: "Asia/Dhaka"}));
      const start = new Date(2025, 0, 1);
      const end = new Date(2025, 11, 31);
      const diff = now.getTime() - start.getTime();
      const totalDays = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
      const passed = Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24))) + 1; // Include current day
      
      setDaysPassed(passed);
      setDaysLeft(totalDays - passed);
      setYear(2025);
    };

    calculateDays();
    const interval = setInterval(calculateDays, 1000 * 60 * 60); // Update every hour
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md mx-auto p-6 bg-black rounded-3xl text-white">
        <div className="grid grid-cols-20 gap-1.5 mb-8 aspect-square">
          {Array.from({ length: 365 }).map((_, index) => (
            <div
              key={index}
              className={`aspect-square w-1.5 rounded-full ${
                index < daysPassed ? 'bg-white' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
        <div className="flex justify-between items-center px-2">
          <span className="text-lg">{year}</span>
          <span className="text-lg">
            <span className="text-gray-600">{daysLeft}</span>
            <span className="text-gray-600 ml-2">days left (BST)</span>
          </span>
        </div>
      </div>
    </div>
  )
}
