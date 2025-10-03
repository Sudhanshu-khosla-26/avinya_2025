import React from 'react'
import EventCard from './EventCard'
import BlurText from './BlurText';

const Event = () => {
    const sampleEvents = [
        {
            title: "INNOVISTA",
            description: "Build innovative AI solutions to solve real-world problems. Teams of 2-4 members will compete for amazing prizes.",
            summary: "between 100-120characters",
            timing: "10:00 PM",
            venue: "CD LAB",
            imageUrl: "/innovista.webp",
            RegistrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSfHFezc7xGShy-DQn8ATBxIqLFKYun0RQs-3-zNGRmoYRZ6gw/viewform?usp=header"
        },
        {
            title: "TECH TADKA",
            description: "Race against time to solve complex algorithms and data structures. Individual participants showcase their speed.",
            timing: "09:00 AM",
            venue: "Jan 10-11, 2025",
            imageUrl: "/tech_tadka.webp",
            RegistrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSfMTFiep8FiqemcLDFVWXhgj4cEMnzIQvr_lYKD3cYbFkJxjQ/viewform?usp=sharing&ouid=110509867479283756092"
        },
        {
            title: "CREATE-A-SCENE",
            description: "Create stunning UI/UX designs for mobile and web applications. Teams of 2-4 members present their prototypes.",
            timing: "02:00 PM",
            venue: "Jan 20-21, 2025",
            imageUrl: "/create_a_scene.webp",
            RegistrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSdorjO3mArEY68BcWEeRvNc64JLxB4OJyihN3g58r34A-rbbA/viewform?usp=header"
        },
        {
            title: "E-SCRAP CANVAS",
            description: "Identify vulnerabilities and secure systems from potential threats. Teams of 2-4 members defend the network.",
            timing: "11:00 AM",
            venue: "Feb 05-07, 2025",
            imageUrl: "/Ewaste.webp",
            RegistrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSepSnEhB-GjwWblLv792Rp5p_BvVuC8QfpRleCInEddLiByJQ/viewform?usp=header"
        },
        {
            title: "TALK TACT",
            description: "Develop decentralized applications using cutting-edge blockchain technology. Teams of 2-4 members build DApps.",
            timing: "03:30 PM",
            venue: "Feb 14-16, 2025",
            imageUrl: "/talktact.webp",
            RegistrationLink: "https://docs.google.com/forms/d/1hlcZAVlOp8rJ8WEDWz0kNajsDNZZNrarV0l1dG4171A/viewform?pli=1&ts=68dd4025&pli=1&edit_requested=true"
        },
        {
            title: "THINK TANK",
            description: "Engineer autonomous robots to compete in challenging obstacle courses. Teams of 2-4 members showcase robotics.",
            timing: "01:00 PM",
            venue: "Mar 08-10, 2025",
            imageUrl: "/think_tank.webp",
            RegistrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSdauGHbiQPvD7vaVzYmAjdC1hqlb6R-psr8cl0OPvxR8ksJxQ/viewform"
        },
        {
            title: "AI CREATIVE CLASH",
            description: "Analyze massive datasets and create predictive models using machine learning. Teams of 2-4 members collaborate.",
            timing: "08:00 AM",
            venue: "Mar 22-24, 2025",
            imageUrl: "/ai_creative_clash.webp",
            RegistrationLink: "https://forms.gle/N2RG3GH3YC63ov688"
        },
        {
            title: "CYPHER",
            description: "Develop immersive gaming experiences with stunning graphics and engaging gameplay. Teams of 2-4 members compete.",
            timing: "04:00 PM",
            venue: "Apr 12-14, 2025",
            imageUrl: "/cypher.webp",
            RegistrationLink: "https://forms.gle/WKge41J86YnPwDL46"
        },
        {
            title: "THINK BYTE",
            description: "Develop decentralized applications using cutting-edge blockchain technology. Teams of 2-4 members build DApps.",
            timing: "03:30 PM",
            venue: "Feb 14-16, 2025",
            imageUrl: "/think_byte.webp",
            RegistrationLink: "https://forms.gle/v9foQzCfHZKUR5EBA"
        },
        {
            title: "BUG SMASH",
            description: "Engineer autonomous robots to compete in challenging obstacle courses. Teams of 2-4 members showcase robotics.",
            timing: "01:00 PM",
            venue: "Mar 08-10, 2025",
            imageUrl: "/BUG-SMASH.webp",
            RegistrationLink: "https://docs.google.com/forms/d/e/1FAIpQLScjHJMKI_zdWGZzgJz3Qz8oiK6sRrDhATQIrSOM2cpSwKRPKw/viewform"
        },
    ];

    return (
        <>
            {/*  <div className="min-h-screen bg-gradient-to-br from-slate-950 text-white via-purple-950 to-slate-950 p-4 sm:p-6 md:p-8"> */}
            <div className="relative min-h-screen bg-[#09011A] text-white p-4 sm:p-6 md:p-8 md:pb-14">
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
                {/* <div className="absolute inset-0 opacity-20"> */}
                {/* <div className="absolute bottom-20 left-10 h-72 w-72 rounded-full bg-blue-500 blur-3xl animate-pulse"></div> */}
                {/* <div className="absolute -bottom-70 right-10 h-96 w-96 rounded-full bg-purple-500 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div> */}
                {/* </div> */}
            </div>

        </>

    );
}

export default Event
