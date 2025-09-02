"use client";

import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Sample data (replace with your API data later)
const data = [
  { name: "Jan", value: 20 },
  { name: "Feb", value: 35 },
  { name: "Mar", value: 25 },
  { name: "Apr", value: 60 },
  { name: "May", value: 100 },
  { name: "Jun", value: 70 },
  { name: "Jul", value: 60 },
];

export default function ChartAreaInteractive() {
  return (
    <div className="w-full h-60 rounded-2xl bg-gradient-to-b from-[#0b0b0b] to-[#101010] p-4 shadow-lg">
      <ResponsiveContainer>
        <AreaChart
          data={data}
          margin={{ top: 20, right: 20, left: 0, bottom: 0 }}
        >
          {/* Gradient Fill */}
          <defs>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.4} />
              <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0} />
            </linearGradient>
          </defs>

          {/* Grid Lines */}
          <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.1} />

          {/* Hide axes for clean look */}
          <XAxis dataKey="name" hide />
          <YAxis hide />

          {/* Tooltip */}
          <Tooltip
            contentStyle={{
              backgroundColor: "rgba(0,0,0,0.7)",
              border: "none",
              borderRadius: "8px",
              padding: "6px 12px",
            }}
            labelStyle={{ color: "#fff" }}
            formatter={(value: number) => [`${value}%`, "Growth"]}
          />

          {/* Area Line */}
          <Area
            type="natural" // Smooth wavy curve
            dataKey="value"
            stroke="#38bdf8"
            strokeWidth={2}
            fill="url(#colorValue)"
            dot={{ r: 4, fill: "#38bdf8" }}
            activeDot={{ r: 6, fill: "#fff", stroke: "#38bdf8" }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
