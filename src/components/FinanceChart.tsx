"use client"

import React from 'react'
import Image from 'next/image'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

const data = [
    {
        name: "Jan",
        income: 4000,
        expense: 2400,
    },
    {
        name: "Feb",
        income: 3000,
        expense: 1398,
    },
    {
        name: "Mar",
        income: 2000,
        expense: 9800,
    },
    {
        name: "Apr",
        income: 2780,
        expense: 3908,
    },
    {
        name: "May",
        income: 1890,
        expense: 4800,
    },
    {
        name: "Jun",
        income: 2390,
        expense: 3800,
    },
    {
        name: "Jul",
        income: 3490,
        expense: 4300,
    },
    {
        name: "Aug",
        income: 3490,
        expense: 4300,
    },
    {
        name: "Sep",
        income: 3490,
        expense: 4300,
    },
    {
        name: "Oct",
        income: 3490,
        expense: 4300,
    },
    {
        name: "Nov",
        income: 3490,
        expense: 4300,
    },
    {
        name: "Dec",
        income: 3490,
        expense: 4300,
    },
];

const FinanceChart = () => {
    return (
        <div className="bg-white rounded-xl w-full h-full p-4">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
                <div>
                    <h1 className="text-2xl font-extrabold text-gray-800 tracking-tight">
                        Financial Overview
                    </h1>
                    <p className="text-sm text-gray-500">Monthly income & expenses</p>
                </div>
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
                <LineChart
                    data={data}
                    margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
                >
                    {/* Gradient Effects */}
                    <defs>
                        <linearGradient id="incomeGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#4F46E5" stopOpacity={0.3} />
                            <stop offset="95%" stopColor="#4F46E5" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="expenseGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#DC2626" stopOpacity={0.3} />
                            <stop offset="95%" stopColor="#DC2626" stopOpacity={0} />
                        </linearGradient>
                    </defs>

                    {/* Grid */}
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />

                    {/* Axes */}
                    <XAxis
                        dataKey="name"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: "#6B7280", fontSize: 12, fontWeight: 600 }}
                        dy={10}
                    />
                    <YAxis
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: "#6B7280", fontSize: 12, fontWeight: 600 }}
                        dx={-10}
                        tickFormatter={(value) => `$${value}`}
                    />

                    {/* Tooltip */}
                    <Tooltip
                        contentStyle={{
                            background: "rgba(255, 255, 255, 0.9)",
                            borderRadius: "10px",
                            border: "none",
                            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                        }}
                        labelStyle={{ color: "#374151", fontWeight: "bold" }}
                        formatter={(value) => [`$${value}`, undefined]}
                    />

                    {/* Legend */}
                    <Legend
                        verticalAlign="top"
                        height={40}
                        iconType="circle"
                        formatter={(value) => (
                            <span className="text-sm font-semibold text-gray-700">{value}</span>
                        )}
                    />

                    {/* Income Line */}
                    <Line
                        type="monotone"
                        dataKey="income"
                        stroke="#4F46E5"
                        strokeWidth={3}
                        dot={false}
                        activeDot={{
                            r: 6,
                            stroke: "#4F46E5",
                            strokeWidth: 2,
                            fill: "#fff",
                            filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.15))",
                        }}
                        fill="url(#incomeGradient)"
                    />

                    {/* Expense Line */}
                    <Line
                        type="monotone"
                        dataKey="expense"
                        stroke="#DC2626"
                        strokeWidth={3}
                        dot={false}
                        activeDot={{
                            r: 6,
                            stroke: "#DC2626",
                            strokeWidth: 2,
                            fill: "#fff",
                            filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.15))",
                        }}
                        fill="url(#expenseGradient)"
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

export default FinanceChart