import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import BlurText from "./BlurText";

const timeline = [
    {
        title: "REGISTRATION",
        timing: "9:30 AM",
        venue: "MMS BLOCK",
        description: "Participants register for Avinya 2025 and collect their event kits.",
    },
    {
        title: "INAUGURATION",
        timing: "10:00 AM",
        venue: "COMPUTER CENTRE",
        description: "Official inauguration of Avinya 2025 by the dignitaries and college authorities.",
    },
    {
        title: "THINK TANK",
        timing: "10:30 AM",
        venue: "COMPUTER CENTRE",
        description: "A platform for visionary ideas where creativity meets technology through structured presentations.",
    },
    {
        title: "CREATE-A-SCENE",
        timing: "10:30 AM",
        venue: "EG-1",
        description: "Scientific Poster Making Competition under Avinya Tech Fest, organized by The Empirical Society.",
    },
    {
        title: "AI CREATIVE CLASH",
        timing: "10:30 AM",
        venue: "CM LAB",
        description: "Unleash your creativity with AI! Compete to design innovative, fun, and out-of-the-box AI-driven projects.",
    },
    {
        title: "INNO-VISTA",
        timing: "11:00 AM",
        venue: "DLCD-2 LAB",
        description: "An innovation challenge for UG and PG students to develop real-world impactful projects across multiple domains.",
    },
    {
        title: "THINK BYTE",
        timing: "11:00 AM",
        venue: "IT LAB",
        description: "Test your tech knowledge in this thrilling quiz showdown with 3 fast-paced rounds.",
    },
    {
        title: "TALK TACT",
        timing: "11:30 AM",
        venue: "EG-2",
        description: "A debate competition that challenges participants to think critically and argue persuasively.",
    },
    {
        title: "TECH TADKA",
        timing: "12:00 PM",
        venue: "R-1 ROOM",
        description: "A fun blend of food & innovation where participants bring homemade dishes with a tech twist!",
    },
    {
        title: "E-SCRAP CANVAS",
        timing: "12:30 PM",
        venue: "DLCD-1 LAB",
        description: "Create artwork using old/obsolete electronics. Transform e-waste into artistic masterpieces.",
    },
    {
        title: "CYPHER",
        timing: "12:30 PM",
        venue: "CM LAB",
        description:
            "Hey, hackers! 👋🏻 A friendly and educational ethical-hacking competition open to all skill levels. Learn, test your skills, and experience the thrill of solving cybersecurity challenges ethically.",
    },
    // {
    //     title: "CYPHER",
    //     timing: "12:30 PM",
    //     venue: "CM LAB",
    //     description: "A prompt injection competition! Test your skills by crafting clever inputs to outsmart AI systems.",
    // },
    {
        title: "BUG SMASH",
        timing: "12:30 PM",
        venue: "IT LAB",
        description: "Find the Bug. Fix the Code. Claim the Glory. The ultimate debugging battlefield.",
    },
    {
        title: "RESULT, PRIZES & CERTIFICATE DISTRIBUTION",
        timing: "2:30 PM",
        venue: "COMPUTER CENTRE",
        description: "Winners announced and certificates distributed for all competitions.",
    },
    {
        title: "CLOSING OF AVINYA 2025",
        timing: "5:00 PM",
        venue: "----",
        description: "Official closing ceremony marking the end of Avinya 2025.",
    },
];


const TimelineCard = ({ event }) => (
    <VerticalTimelineElement
        contentStyle={{
            background: "transparent",
            padding: "0",
            border: "none",
            boxShadow: "none",
        }}
        contentArrowStyle={{ borderRight: "7px solid transparent" }}
        date={event.timing}
        dateClassName="!text-white font-semibold"
        iconStyle={{ background: "#1d1836", boxShadow: "0 0 15px rgba(89,54,229,0.6)" }}
        icon={
            <div className="flex justify-center items-center w-full h-full">
                <img
                    src="/clock.png"
                    alt="clock"
                    className="w-[60%] h-[60%] invert object-contain transition-transform duration-500 group-hover:rotate-180"
                />
            </div>
        }
    >
        {/* Card with hover effects */}
        <div className="group relative bg-[#1d1836] p-6 rounded-2xl transition-all duration-500 
                      
                        hover:shadow-[0_0_20px_rgba(217,102,255,0.7)] hover:-translate-y-2">
            <h3 className="text-white text-[22px] font-bold transition-colors duration-300 group-hover:text-yellow-300">
                {event.title}
            </h3>
            <p className="text-gray-400 text-[15px] font-semibold m-0 group-hover:text-gray-200">
                {event.venue}
            </p>
            <p className="mt-3 text-gray-300 text-[14px] tracking-wide group-hover:text-white">
                {event.description}
            </p>

            {/* Glow border effect */}
            <div className="absolute inset-0 rounded-2xl border border-transparent 
                            group-hover:border-white/30 group-hover:shadow-[0_0_25px_rgba(217,102,255,0.6)] 
                            transition-all duration-500 pointer-events-none"></div>
        </div>
    </VerticalTimelineElement>
);

const Timeline = () => {
    return (
        <div className="mt-20 flex flex-col mx-auto">
            <div className="relative px-10 w-full mx-auto max-w-7xl mb-6 sm:mb-8 lg:mb-12 text-white">
                <BlurText
                    text="Timeline"
                    delay={150}
                    animateBy="words"
                    direction="top"
                    className="text-2xl w-fit mx-auto lg:mx-0 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center lg:text-left"
                />
                {/* Underline decoration */}
                <div className="mt-2 sm:mt-4 mx-auto lg:mx-0 w-32 sm:w-48 h-1 bg-gradient-to-r from-[#5936e5] via-[#d966ff] to-[#5936e5] rounded-full"></div>
            </div>

            <VerticalTimeline>
                {timeline.map((event, index) => (
                    <TimelineCard key={index} event={event} />
                ))}
            </VerticalTimeline>
        </div>
    );
};

export default Timeline;
