"use client";
import React from "react";

// Contact data
const contacts = [
    // {
    //     name: "Sudhanshu Khosla",
    //     number: "+91 8287036184",
    //     image: "/SK.png", // Place in /public folder
    // },
    {
        name: "Harsh Raj Singh",
        number: "+91 7488672705",
        image: "/harsh.jpg", // replace with your image path
    },
    {
        name: "Kritika Sharma",
        number: "+91 8595862608",
        image: "/capybara.jpg", // Place in /public folder
    },
];

// Single Contact Card
const ContactCard = ({ contact }) => (
    <div
        className="relative group w-full max-w-[280px] h-72 sm:h-[360px] rounded-2xl overflow-hidden shadow-lg cursor-pointer 
               transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(217,102,255,0.6)] bg-gray-800"
    >
        {/* Background Image */}
        <img
            src={contact.image}
            alt={contact.name}
            className="absolute inset-0 w-full h-full object-cover object-center opacity-80 group-hover:opacity-100 transition-all duration-500"
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 hidden md:block via-black/20 to-transparent"></div>

        {/* Content */}
        <div className="absolute bottom-0 p-5 text-white">
            <h3 className="text-xl text-yellow-300 md:text-white  font-bold mb-2 group-hover:text-yellow-300 transition-colors duration-300">
                {contact.name}
            </h3>
            <p className="text-gray-300 text-sm group-hover:text-white transition-colors duration-300">
                {contact.number}
            </p>
        </div>

        {/* Border glow */}
        <div className="absolute inset-0 rounded-2xl border border-transparent 
                group-hover:border-white/30 group-hover:shadow-[0_0_25px_rgba(217,102,255,0.6)] 
                transition-all duration-500 pointer-events-none"></div>
    </div>
);

const ContactPage = () => {
    return (
        <div className="min-h-screen bg-[#0f0f1a] py-28 pb-8 md:pb-0  md:pt-14 flex flex-col items-center justify-center px-4">
            {/* Heading */}
            <div className="mb-10 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-white">Contact Us</h1>
                <div className="mt-3 w-32 h-1 bg-gradient-to-r from-[#5936e5] via-[#d966ff] to-[#5936e5] mx-auto rounded-full"></div>
            </div>

            {/* Contact Cards Wrapper */}
            <div className="flex flex-col sm:flex-row gap-6 items-center justify-center w-full px-2">
                {contacts.map((c, idx) => (
                    <ContactCard key={idx} contact={c} />
                ))}
            </div>
        </div>
    );
};

export default ContactPage;
