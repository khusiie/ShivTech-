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
  ReferenceDot,
} from "recharts";

// Sample data (replace with your API data later)
const data = [
  { value: 20 },
  { value: 35 },
  { value: 25 },
  { value: 60 },
  { value: 100 }, // 100% Growth Point
  { value: 70 },
  { value: 70 },
];

export default function ChartAreaInteractive() {
  // find the index of the 100% point
  const targetIndex = data.findIndex((d) => d.value === 100);

  return (
    <div className="w-full h-60 rounded-2xl bg-gradient-to-b from-[#0b0b0b] to-[#101010] p-4 shadow-lg">
      <ResponsiveContainer>
        <AreaChart
          data={data}
          margin={{ top: 30, right: 20, left: 0, bottom: 0 }}
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
            type="natural"
            dataKey="value"
            stroke="#38bdf8"
            strokeWidth={2}
            fill="url(#colorValue)"
            dot={false} // remove all dots
            activeDot={false} // disable hover dots
          />

          {/* Only show the 100% Circle */}
          {targetIndex !== -1 && (
            <ReferenceDot
              x={targetIndex}
              y={100}
              r={8}
              fill="#38bdf8"
              stroke="#fff"
              strokeWidth={2}
              label={{
                value: "Growth : 100%",
                position: "top",
                fill: "#38bdf8",
                fontSize: 16,
                fontWeight: "medium",
              }}
            />
          )}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
