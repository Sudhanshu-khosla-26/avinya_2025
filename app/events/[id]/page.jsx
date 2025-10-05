"use client"

import Footer from "@/components/Footer"

const EventDetailsPage = ({ params }) => {
    const { id } = params

    const Events = [
        {
            title: "TECH TADKA",
            description: "A fun blend of food & innovation where participants bring home dishes with a tech twist!",
            Guidelines:
                "Only vegetarian, pre-cooked dishes allowed; no on-site cooking.\nFormal attire is mandatory.\nCarry your college ID card.",
            Topic: "Cook Something Related To Tech",
            Criteria: "Dishes should be homemade and showcase a creative tech-inspired concept or story.",
            summary: "A culinary competition where technology meets taste - create dishes inspired by tech innovations.",
            timing: "12:00 PM",
            venue: "R1, MMS Block",
            imageUrl: "/tech_tadka.webp",
            RegistrationLink:
                "https://docs.google.com/forms/d/e/1FAIpQLSfMTFiep8FiqemcLDFVWXhgj4cEMnzIQvr_lYKD3cYbFkJxjQ/viewform?usp=sharing&ouid=110509867479283756092",
        },
        {
            title: "TALK TACT",
            description:
                "Talk Tact is a debate competition that challenges participants to think critically, argue persuasively, and communicate with impact. Teams of 2 will compete for amazing prizes.",
            Guidelines:
                "Stay Focused: Keep your arguments concise and centered around 2–3 strong points.\nSupport Your Claims: Use logic, relevant examples, or reference to back up your arguments.\nRebuttals: Directly counter the opposing side's points during the rebuttal stage.\nMaintain Respect: Focus on the topic at hand; avoid personal comments or attacks.\nImpactful Closing: End with a strong closing line that resonates with the audience.\nBring your college ID.",
            Topic: "Will be provided on the spot; it will be related to technology",
            summary: "A debate showdown where teams argue persuasively on tech topics with logic, respect, and impact.",
            timing: "11:30 AM",
            venue: "EG-2 LAB",
            imageUrl: "/talktact.webp",
            RegistrationLink: "https://docs.google.com/forms/d/1hlcZAVlOp8rJ8WEDWz0kNajsDNZZNrarV0l1dG4171A/edit?ts=68dd4025",
        },
        {
            title: "AI CREATIVE CLASH",
            description:
                "Unleash your creativity with AI! Compete to design innovative, fun, and out-of-the-box AI-driven projects.",
            Guidelines:
                "Open to UG/PG students from recognized colleges/universities.\nInter-college teams allowed.\nCarry valid college ID.\nReport 30 mins before event.\nNo plagiarism/unfair practices.\nJudges' decision final.",
            Topic: "AI-powered creativity and innovation",
            Rounds: "Single presentation round to showcase your AI-driven creation.",
            Criteria: "Judging based on creativity, originality, practicality, and presentation.",
            instructions:
                "Individual participation.\nUse any AI tool/tech.\nBring laptops/software.\nInternet access provided.",
            summary:
                "AI Creative Clash @ अvinya 2025 – where imagination meets AI! Compete with creativity, innovation & fun.",
            timing: "10:30 AM",
            venue: "CM LAB , MMS BLOCK",
            imageUrl: "/ai_creative_clash.webp",
            RegistrationLink: "https://forms.gle/N2RG3GH3YC63ov688",
        },
        {
            title: "CYPHER",
            description:
                "Welcome to CYPHER, a prompt injection competition! Test your skills by crafting clever inputs to make an AI system ignore its rules or perform unintended actions. See if you can bypass safety filters, reveal hidden information, and outsmart the machine in this exciting challenge.",
            Guidelines:
                "Objective 1: Extract the Secret Flag - Manipulate AI to reveal hidden system prompt or secret key.\nObjective 2: Evade the Filters - Bypass input sanitizers and blocklists.\nObjective 3: Confuse Context - Trick AI into executing embedded commands.\nObjective 4: Trigger Unintended Actions - Make model perform unauthorized actions.\nObjective 5: Override Core Policies - Bypass fundamental safety rules.\nObjective 6: Scope Escalation - Make AI perform actions outside defined scope.\nObjective 7: Exploit Permissions - Trick AI into revealing permission limits.\n\nRules: Prompt injection only, stay ethical, demonstrate vulnerability without causing damage.",
            Topic: "Prompt Injection Competition",
            Rounds: "Multiple rounds with increasing difficulty, each with unique AI model and new challenges.",
            Criteria:
                "Submissions judged on creativity, effectiveness, and subtlety of injection. Points for bypassing instructions within ethical boundaries.",
            DefensiveChecklist:
                "Never share system prompts.\nEscape user content before re-injection.\nDon't execute embedded instructions.\nConfirm destructive actions.\nTreat user input as adversarial.",
            summary:
                "A prompt injection contest where you craft clever inputs to make an AI ignore its rules and do the unintended.",
            timing: "12:30 PM",
            venue: "CM LAB, MMS BLOCK",
            imageUrl: "/cypher.webp",
            RegistrationLink: "https://forms.gle/WKge41J86YnPwDL46",
        },
        {
            title: "THINK BYTE",
            description:
                "Test your tech knowledge in this thrilling quiz showdown. Individual participants compete in 3 fast-paced rounds.",
            Guidelines:
                "Individual participation only; 3 rounds; MCQ-based; 10 questions per round; 30 seconds per question. Clear each round to move to the next!",
            Topic: "Technology & Innovations",
            Rounds: "3 rounds with increasing difficulty; progression depends on clearing previous round",
            Criteria: "Speed and accuracy; top scorers win prizes",
            instructions:
                "Prepare your brainpower and stay sharp! Each question must be answered within 30 seconds. Clear each round to move to the next!",
            summary: "A fast-paced tech quiz where participants must clear each round to advance and win prizes.",
            timing: "11:00 AM",
            venue: "IT LAB, MMS BLOCK",
            imageUrl: "/think_byte.webp",
            RegistrationLink:
                "https://docs.google.com/forms/d/e/1FAIpQLSehvHABEScJOKuw8oSbGwxmLLFIbWJzN223Ie7eeLKe5Xmpug/viewform",
        },
        {
            title: "CREATE-A-SCENE",
            description:
                "Scientific Poster Making Competition under Avinya Tech Fest, organized by The Empirical Society, GTB4CEC.",
            Guidelines:
                "Choose one topic from the given list.\nDesign digitally (Canva/Figma/Photoshop).\nPoster size 3x2 ft (Flex print).\nSubmit to organizer (optional with charges) or bring your own print.\nPresentation: 3–5 mins before judges.\nSubmission deadline: Design submission 11th Oct 2025.",
            Topic:
                "AI Apocalypse, Bioprinting Life, Cloud Kitchens, Cyberbullying, Deepfake Dangers, E-Waste, Evolution of Technology, Fashion & AI, Hydroponics, Impact of 5G, Metaverse, Robotics & Automation, Space Exploration, Tech Addiction",
            Rounds: "Single round – Poster presentation before judges",
            Criteria: "Creativity & Design, Clarity of Concept, Originality, Presentation",
            summary:
                "Create-a-Scene lets students design & present scientific posters on trending tech topics. Top 3 win goodies, all get e-certificates.",
            timing: "10:30 AM",
            venue: "EG LAB, MMS Block",
            imageUrl: "/create_a_scene.webp",
            RegistrationLink:
                "https://docs.google.com/forms/d/e/1FAIpQLSdorjO3mArEY68BcWEeRvNc64JLxB4OJyihN3g58r34A-rbbA/viewform?usp=header",
        },
        {
            title: "E-SCRAP CANVAS",
            description:
                "Create artwork using old/obsolete electronics. Solo or Teams of 2-3 members will compete for amazing prizes.",
            Guidelines:
                "Participants must complete artwork at home.\nOnly 15 minutes will be given for setup & finishing touches.\nMain element must be from e-waste (NO LIVE ELECTRONICS).\nPresent creation before judges explaining idea, process, and uniqueness.",
            Criteria: "Creativity, use of e-waste materials, originality, and presentation quality",
            summary:
                "Transform electronic waste into artistic masterpieces - a creative competition celebrating sustainability.",
            timing: "12:30 PM",
            venue: "DLCD LAB",
            imageUrl: "/Ewaste.webp",
            RegistrationLink:
                "https://docs.google.com/forms/d/e/1FAIpQLSepSnEhB-GjwWblLv792Rp5p_BvVuC8QfpRleCInEddLiByJQ/viewform?usp=header",
        },
        {
            title: "INNOVISTA",
            description: "An innovation challenge for UG and PG students to develop real-world impactful projects across multiple domains.",
            Guidelines: "Projects must be original and innovative. Use of open-source tools is allowed with proper citation. Unsafe or unethical prototypes are not permitted.",
            Topic: "Digital Inclusion & Accessibility, Next-Gen Mobility & Smart Transportation, Space & Frontier Tech, Cybersecurity & Digital Trust, Healthcare & Biotechnology, Women in Tech: Innovation for Empowerment, Open Innovation (Tech for Impact)",
            Rounds: "Single round of project demonstration: 7-minute presentation + 2-minute Q&A.",
            Criteria: "Innovation (20), Practical Impact (20), Technical Feasibility (20), Presentation (20), Sustainability (20)",
            instructions: "Teams of 1–4 members; individuals allowed. Submit title, abstract (≤200 words), slides (≤10), and Declaration of Originality. Bring valid college ID at check-in.",
            summary: "Innovative project challenge promoting impactful solutions across technology, healthcare, space, and sustainability domains.",
            timing: "11:00 AM",
            venue: "DLCD LAB",
            imageUrl: "/innovista.webp",
            RegistrationLink: "https://docs.google.com/forms/d/1d2oULg-mrXfg-yH-XUMi1w_nAxIoVZjprvXV8N6VQPw/edit",
        },
        {
            title: "BUG SMASH",
            description:
                "Find the Bug. Fix the Code. Claim the Glory. The ultimate debugging battlefield where every bug you squash brings you closer to glory!",
            Guidelines:
                "Individual participation only.\nNo gadgets – mobiles, laptops, or internet.\nTime-bound – late answers will not be considered.\nOnly fully correct fixes earn points.\nNeat writing only – unclear code = zero marks.\nQuestions displayed on projector one at a time.\nAnswer on A4 sheet – neat, clear, and precise.",
            Topic: "Debugging challenges across programming languages",
            Rounds: "3 rounds of debugging – each tougher than the last. Tie-breaker: Rapid-Fire Debugging Round.",
            Criteria:
                "Normal Bug Fix → +5 points\nTricky Bug Fix → +10 points\nWrong Fix → –5 points\nSpeed and accuracy determine winners.",
            instructions:
                "This isn't just about coding – it's about thinking faster, spotting smarter, and fixing sharper. Every question hides a bug. Every fix proves your brilliance.",
            summary:
                "A thrilling debugging competition where sharp-eyed coders battle to find and fix bugs under time pressure.",
            timing: "12:30 PM",
            venue: "IT LAB, MMS BLOCK",
            imageUrl: "/BUG-SMASH.webp",
            RegistrationLink: "https://docs.google.com/forms/d/e/1FAIpQLScjHJMKI_zdWGZzgJz3Qz8oiK6sRrDhATQIrSOM2cpSwKRPKw/viewform",
        },
        {
            title: "THINK TANK",
            description:
                "A Platform for Visionary Ideas. Join us where creativity meets technology and present your transformative ideas through a structured PowerPoint showcase.",
            Guidelines:
                "Submit abstracts by 11th October 2025.\nFile format: Word document (.doc or .docx).\nMaximum length: 150 words (including title, team/individual name, and college affiliation).\nAbstracts uploaded through Google Form.\nOnly 15 participants or teams (1–3 members per team) will be selected.\nUse official 8-slide presentation template (no modifications allowed).\n6 minutes for presentation and 2 minutes for Q&A.",
            Topic: "Topics relevant to today's scientific and technological landscape",
            Rounds: "Single round presentation after abstract selection",
            Criteria: "Selection based on quality and clarity of submitted abstract. Presentation judged on content, delivery, and innovation.",
            instructions:
                "Participants must convey their insights and solutions on relevant scientific and technological topics. Selected participants will present using the official template.",
            summary:
                "A platform where visionaries present transformative ideas on science and technology through structured presentations.",
            timing: "10:30 AM",
            venue: "CC LAB, MMS BLOCK",
            imageUrl: "/think_tank.webp",
            RegistrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSdauGHbiQPvD7vaVzYmAjdC1hqlb6R-psr8cl0OPvxR8ksJxQ/viewform",
        },
    ];

    const event = Events[id]

    if (!event) {
        return (
            <div className="min-h-screen bg-slate-950 flex items-center justify-center">
                <div className="text-white text-2xl">Event not found</div>
            </div>
        )
    }

    return (
        <>
            <div className="min-h-screen py-20 bg-slate-950">
                <div className="pt-12 md:pt-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
                    {/* Hero Section */}
                    <div className="mb-12">
                        <div className="flex flex-col md:flex-row relative items-center gap-8 mb-8">
                            {/* Compact Image */}
                            <div className=" relative w-full max-w-sm block mx-auto md:mx-0 md:sticky self-start md:top-36">
                                <div className="relative z-10  rounded-2xl overflow-hidden border border-slate-800 shadow-xl">
                                    <img
                                        src={event.imageUrl}
                                        alt={event.title}
                                        className="w-full h-full max-h-[460px] object-fill"
                                    />

                                </div>
                                <div className="absolute -inset-2   bg-gradient-to-r from-purple-600/30 to-pink-500/30  blur-2xl opacity-100 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-500"></div>

                            </div>


                            {/* Content */}
                            <div className="text-center space-y-6 max-w-3xl">
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance">
                                    {event.title}
                                </h1>

                                <p className="text-lg md:text-xl text-slate-300 leading-relaxed text-pretty">{event.summary}</p>

                                {/* Meta Info */}
                                <div className="flex flex-wrap justify-center gap-4">
                                    <div className="  px-6 py-3">
                                        <p className="text-slate-400 text-sm font-medium mb-1">Time</p>
                                        <p className="text-white font-semibold">{event.timing}</p>
                                    </div>
                                    <div className="  px-6 py-3">
                                        <p className="text-slate-400 text-sm font-medium mb-1">Venue</p>
                                        <p className="text-white font-semibold">{event.venue}</p>
                                    </div>
                                </div>

                                {/* CTA */}
                                <a href={event.RegistrationLink} target="_blank" rel="noopener noreferrer" className="inline-block">
                                    <button className="px-8 py-4 border animate-bounce-slow border-white/10 bg-white/5 rounded-xl cursor-pointer text-white font-semibold text-lg shadow-lg shadow-blue-500/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 active:scale-95">
                                        Register Now
                                    </button>
                                </a>
                                <div className="max-w-4xl mx-auto space-y-6 ">
                                    {/* About */}
                                    <div className="border border-slate-800 rounded-2xl p-6 md:p-8 hover:border-slate-700 hover:shadow-lg hover:shadow-slate-800/50 transition-all   hover:-translate-y-1  duration-300">
                                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">About</h2>
                                        <p className="text-slate-300 leading-relaxed">{event.description}</p>
                                    </div>

                                    {/* Topic */}
                                    {event.Topic && (
                                        <div className="border border-slate-800 rounded-2xl p-6 md:p-8 hover:border-slate-700 hover:shadow-lg hover:shadow-slate-800/50 transition-all hover:-translate-y-1 duration-300">
                                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Topic</h2>
                                            <p className="text-slate-300 leading-relaxed">{event.Topic}</p>
                                        </div>
                                    )}

                                    {/* Guidelines */}
                                    {event.Guidelines && (
                                        <div className="border border-slate-800 rounded-2xl p-6 md:p-8 hover:border-slate-700 hover:shadow-lg hover:shadow-slate-800/50 transition-all hover:-translate-y-1 duration-300">
                                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Guidelines</h2>
                                            <ul className="space-y-3">
                                                {event.Guidelines.split("\n")
                                                    .filter((line) => line.trim())
                                                    .map((line, idx) => (
                                                        <li key={idx} className="text-slate-300 leading-relaxed flex items-start gap-3 hover:text-white transition-colors duration-200">
                                                            <span className="text-blue-500 flex-shrink-0 text-xl leading-none">•</span>
                                                            <span className="text-start">{line}</span>
                                                        </li>
                                                    ))}
                                            </ul>
                                        </div>
                                    )}

                                    {/* Rounds */}
                                    {event.Rounds && (
                                        <div className="border border-slate-800 rounded-2xl p-6 md:p-8 hover:border-slate-700 hover:shadow-lg hover:shadow-slate-800/50 hover:-translate-y-1 transition-all duration-300">
                                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Rounds</h2>
                                            <p className="text-slate-300 leading-relaxed">{event.Rounds}</p>
                                        </div>
                                    )}

                                    {/* Criteria */}
                                    {event.Criteria && (
                                        <div className="border border-slate-800 rounded-2xl p-6 md:p-8 hover:border-slate-700 hover:shadow-lg hover:shadow-slate-800/50 hover:-translate-y-1 transition-all duration-300">
                                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Judging Criteria</h2>
                                            <p className="text-slate-300 leading-relaxed">{event.Criteria}</p>
                                        </div>
                                    )}

                                    {/* Instructions */}
                                    {event.instructions && (
                                        <div className="border border-slate-800 rounded-2xl p-6 md:p-8 hover:border-slate-700 hover:shadow-lg hover:shadow-slate-800/50 hover:-translate-y-1 transition-all duration-300">
                                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Instructions</h2>
                                            <ul className="space-y-3">
                                                {event.instructions
                                                    .split("\n")
                                                    .filter((line) => line.trim())
                                                    .map((line, idx) => (
                                                        <li key={idx} className="text-slate-300 leading-relaxed flex items-start gap-3 hover:text-white transition-colors duration-200">
                                                            <span className="text-blue-500 flex-shrink-0 text-xl leading-none">•</span>
                                                            <span>{line}</span>
                                                        </li>
                                                    ))}
                                            </ul>
                                        </div>
                                    )}

                                    {/* Defensive Checklist */}
                                    {event.DefensiveChecklist && (
                                        <div className="border border-slate-800 rounded-2xl p-6 md:p-8 hover:border-slate-700 hover:shadow-lg hover:-translate-y-1 hover:shadow-slate-800/50 transition-all duration-300">
                                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Security Guidelines</h2>
                                            <ul className="space-y-3">
                                                {event.DefensiveChecklist.split("\n")
                                                    .filter((line) => line.trim())
                                                    .map((line, idx) => (
                                                        <li key={idx} className="text-slate-300 leading-relaxed flex items-start gap-3 hover:text-white transition-colors duration-200">
                                                            <span className="text-blue-500 flex-shrink-0 text-xl leading-none">•</span>
                                                            <span>{line}</span>
                                                        </li>
                                                    ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
            <Footer />
            <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.02); opacity: 0.8; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease forwards;
        }
        .animate-bounce-slow {
          animation: bounce 3s ease-in-out infinite;
        }
      `}</style>
        </>

    )
}

export default EventDetailsPage