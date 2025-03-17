"use client"
import React from 'react'
import { useState } from 'react'
import { Calendar } from 'react-calendar'
import Image from 'next/image'


type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

// Define the Event type for better type safety and code clarity
interface Event {
    id: number;
    title: string;
    time: string;
    description: string;
}


{/* Add id, title, time and description */ }
const events = [
    {
        id: 1,
        title: "Board Meeting",
        time: "12:00 PM - 2:00 PM",
        description: "Meeting to discuss the Product roadmap.",
    },
    {
        id: 2,
        title: "Technical Roadmap Discusion",
        time: "2:30 PM - 4:00 PM",
        description: "Discussion with Architects Team to plan 6 months roadmap.",
    },
    {
        id: 3,
        title: "Stand-Up Meeting",
        time: "5:00 PM - 6:00 PM",
        description: "Daily meeting to discuss what went well, what went bad and plan for next day.",
    },
];


const EventCalendar = () => {
    const [value, onChange] = useState<Value>(new Date());

    return (
        <div className="bg-white p-4 rounded-md">
            <Calendar onChange={onChange} value={value} />
            <div className="flex items-center justify-between">
                <h1 className="text-xl font-semibold my-4">Events</h1>
                <Image src="/moreDark.png" alt="" width={20} height={20} />
            </div>
            <div className="flex flex-col gap-4">
                {events.map((event) => (
                    <div
                        className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-lamaSky even:border-t-lamaPurple"
                        key={event.id}
                    >
                        <div className="flex items-center justify-between">
                            <h1 className="font-semibold text-gray-600">{event.title}</h1>
                            <span className="text-gray-300 text-xs">{event.time}</span>
                        </div>
                        <p className="mt-2 text-gray-400 text-xs">{event.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default EventCalendar