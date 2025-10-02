import React from 'react'
import EventCard from './EventCard'
import BlurText from './BlurText';

const Event = () => {
    const sampleEvents = [
        {
            title: "Komic Sense",
            description: "Build innovative AI solutions to solve real-world problems. Teams of 2-4 members will compete for amazing prizes.",
            summary: "between 100-120characters",
            timing: "10:00 PM",
            venue: "CD LAB",
            imageUrl: "",
            RegistrationLink: ""
        },
        {
            title: "Code Sprint Challenge",
            description: "Race against time to solve complex algorithms and data structures. Individual participants showcase their speed.",
            timing: "09:00 AM",
            venue: "Jan 10-11, 2025",
            imageUrl: ""
        },
        {
            title: "Design Fusion Workshop",
            description: "Create stunning UI/UX designs for mobile and web applications. Teams of 2-4 members present their prototypes.",
            timing: "02:00 PM",
            venue: "Jan 20-21, 2025",
            imageUrl: ""
        },
        {
            title: "Cyber Security Summit",
            description: "Identify vulnerabilities and secure systems from potential threats. Teams of 2-4 members defend the network.",
            timing: "11:00 AM",
            venue: "Feb 05-07, 2025",
            imageUrl: ""
        },
        {
            title: "Blockchain Revolution",
            description: "Develop decentralized applications using cutting-edge blockchain technology. Teams of 2-4 members build DApps.",
            timing: "03:30 PM",
            venue: "Feb 14-16, 2025",
            imageUrl: ""
        },
        {
            title: "Robotics Arena Battle",
            description: "Engineer autonomous robots to compete in challenging obstacle courses. Teams of 2-4 members showcase robotics.",
            timing: "01:00 PM",
            venue: "Mar 08-10, 2025",
            imageUrl: ""
        },
        {
            title: "Data Science Olympiad",
            description: "Analyze massive datasets and create predictive models using machine learning. Teams of 2-4 members collaborate.",
            timing: "08:00 AM",
            venue: "Mar 22-24, 2025",
            imageUrl: ""
        },
        {
            title: "Gaming Universe Expo",
            description: "Develop immersive gaming experiences with stunning graphics and engaging gameplay. Teams of 2-4 members compete.",
            timing: "04:00 PM",
            venue: "Apr 12-14, 2025",
            imageUrl: ""
        },
        {
            title: "Blockchain Revolution",
            description: "Develop decentralized applications using cutting-edge blockchain technology. Teams of 2-4 members build DApps.",
            timing: "03:30 PM",
            venue: "Feb 14-16, 2025",
            imageUrl: ""
        },
        {
            title: "Robotics Arena Battle",
            description: "Engineer autonomous robots to compete in challenging obstacle courses. Teams of 2-4 members showcase robotics.",
            timing: "01:00 PM",
            venue: "Mar 08-10, 2025",
            imageUrl: ""
        },
    ];

    return (
        // <div className="min-h-screen bg-gradient-to-br from-slate-950 text-white via-purple-950 to-slate-950 p-4 sm:p-6 md:p-8">
        <div className="min-h-screen bg-[#09011A] text-white p-4 sm:p-6 md:p-8">
            <div className="relative w-full mb-6 sm:mb-8 lg:mb-12">
                <BlurText
                    text="अVINYA Events"
                    delay={150}
                    animateBy="words"
                    direction="top"
                    className="text-2xl w-fit mx-auto lg:mx-0 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center lg:text-left"
                />
                {/* Underline decoration */}
                <div className="mt-2 sm:mt-4 mx-auto lg:mx-0 w-32 sm:w-48 h-1 bg-gradient-to-r from-[#5936e5] via-[#d966ff] to-[#5936e5] rounded-full"></div>
            </div>
            <div className="max-w-6xl mx-auto">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 md:gap-8">
                    {sampleEvents.map((event, index) => (
                        <EventCard key={index} {...event} />
                    ))}
                </div>
            </div>
        </div>

    );
}

export default Event
