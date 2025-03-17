"use client";
import React from "react";
import Image from "next/image";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Mon", present: 100, absent: 90 },
  { name: "Tue", present: 80, absent: 72 },
  { name: "Wed", present: 69, absent: 63 },
  { name: "Thurs", present: 84, absent: 80 },
  { name: "Fri", present: 90, absent: 75 },
];

const AttendanceChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-extrabold text-gray-800 tracking-tight">
          Attendance Overview
        </h1>
        <Image
          src="/moreDark.png"
          alt="menu"
          width={24}
          height={24}
          className="cursor-pointer opacity-70 hover:opacity-100 transition"
        />
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={350}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
          barSize={40}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />
          <XAxis
            dataKey="name"
            tick={{ fill: "#6B7280", fontSize: 12, fontWeight: 600 }}
            tickLine={false}
            interval={0} // Ensure all labels are visible
            dy={10}
          />
          <YAxis
            tick={{ fill: "#6B7280", fontSize: 12, fontWeight: 600 }}
            tickLine={false}
            tickFormatter={(value) => `${value}%`}
          />
          <Tooltip
            contentStyle={{
              background: "rgba(255, 255, 255, 0.9)",
              borderRadius: "10px",
              border: "none",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
          />
          <Legend
            verticalAlign="top"
            height={40}
            iconType="circle"
            formatter={(value) => (
              <span className="text-sm font-semibold text-gray-700">{value}</span>
            )}
          />
          <Bar
            dataKey="present"
            fill="lightblue"
            radius={[8, 8, 0, 0]}
            barSize={30}
          />
          <Bar
            dataKey="absent"
            fill="coral"
            radius={[8, 8, 0, 0]}
            barSize={30}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AttendanceChart;