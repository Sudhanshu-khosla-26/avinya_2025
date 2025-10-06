import React from 'react'
import EventCard from './EventCard'
import BlurText from './BlurText';

const Event = () => {
    // const sampleEvents = [
    //     {
    //         title: "INNOVISTA",
    //         description: "Build innovative AI solutions to solve real-world problems. Teams of 2-4 members will compete for amazing prizes.",
    //         summary: "between 100-120characters",
    //         timing: "10:00 PM",
    //         venue: "CD LAB",
    //         imageUrl: "/innovista.webp",
    //         RegistrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSfHFezc7xGShy-DQn8ATBxIqLFKYun0RQs-3-zNGRmoYRZ6gw/viewform?usp=header"
    //     },
    //     {
    //         title: "TECH TADKA",
    //         description: "Race against time to solve complex algorithms and data structures. Individual participants showcase their speed.",
    //         timing: "09:00 AM",
    //         venue: "Jan 10-11, 2025",
    //         imageUrl: "/tech_tadka.webp",
    //         RegistrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSfMTFiep8FiqemcLDFVWXhgj4cEMnzIQvr_lYKD3cYbFkJxjQ/viewform?usp=sharing&ouid=110509867479283756092"
    //     },
    //     {
    //         title: "CREATE-A-SCENE",
    //         description: "Create stunning UI/UX designs for mobile and web applications. Teams of 2-4 members present their prototypes.",
    //         timing: "02:00 PM",
    //         venue: "Jan 20-21, 2025",
    //         imageUrl: "/create_a_scene.webp",
    //         RegistrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSdorjO3mArEY68BcWEeRvNc64JLxB4OJyihN3g58r34A-rbbA/viewform?usp=header"
    //     },
    //     {
    //         title: "E-SCRAP CANVAS",
    //         description: "Identify vulnerabilities and secure systems from potential threats. Teams of 2-4 members defend the network.",
    //         timing: "11:00 AM",
    //         venue: "Feb 05-07, 2025",
    //         imageUrl: "/Ewaste.webp",
    //         RegistrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSepSnEhB-GjwWblLv792Rp5p_BvVuC8QfpRleCInEddLiByJQ/viewform?usp=header"
    //     },
    //     {
    //         title: "TALK TACT",
    //         description: "Develop decentralized applications using cutting-edge blockchain technology. Teams of 2-4 members build DApps.",
    //         timing: "03:30 PM",
    //         venue: "Feb 14-16, 2025",
    //         imageUrl: "/talktact.webp",
    //         RegistrationLink: "https://docs.google.com/forms/d/1hlcZAVlOp8rJ8WEDWz0kNajsDNZZNrarV0l1dG4171A/viewform?pli=1&ts=68dd4025&pli=1&edit_requested=true"
    //     },
    //     {
    //         title: "THINK TANK",
    //         description: "Engineer autonomous robots to compete in challenging obstacle courses. Teams of 2-4 members showcase robotics.",
    //         timing: "01:00 PM",
    //         venue: "Mar 08-10, 2025",
    //         imageUrl: "/think_tank.webp",
    //         RegistrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSdauGHbiQPvD7vaVzYmAjdC1hqlb6R-psr8cl0OPvxR8ksJxQ/viewform"
    //     },
    //     {
    //         title: "AI CREATIVE CLASH",
    //         description: "Analyze massive datasets and create predictive models using machine learning. Teams of 2-4 members collaborate.",
    //         timing: "08:00 AM",
    //         venue: "Mar 22-24, 2025",
    //         imageUrl: "/ai_creative_clash.webp",
    //         RegistrationLink: "https://forms.gle/N2RG3GH3YC63ov688"
    //     },
    //     {
    //         title: "CYPHER",
    //         description: "Develop immersive gaming experiences with stunning graphics and engaging gameplay. Teams of 2-4 members compete.",
    //         timing: "04:00 PM",
    //         venue: "Apr 12-14, 2025",
    //         imageUrl: "/cypher.webp",
    //         RegistrationLink: "https://forms.gle/WKge41J86YnPwDL46"
    //     },
    //     {
    //         title: "THINK BYTE",
    //         description: "Develop decentralized applications using cutting-edge blockchain technology. Teams of 2-4 members build DApps.",
    //         timing: "03:30 PM",
    //         venue: "Feb 14-16, 2025",
    //         imageUrl: "/think_byte.webp",
    //         RegistrationLink: "https://forms.gle/v9foQzCfHZKUR5EBA"
    //     },
    //     {
    //         title: "BUG SMASH",
    //         description: "Engineer autonomous robots to compete in challenging obstacle courses. Teams of 2-4 members showcase robotics.",
    //         timing: "01:00 PM",
    //         venue: "Mar 08-10, 2025",
    //         imageUrl: "/BUG-SMASH.webp",
    //         RegistrationLink: "https://docs.google.com/forms/d/e/1FAIpQLScjHJMKI_zdWGZzgJz3Qz8oiK6sRrDhATQIrSOM2cpSwKRPKw/viewform"
    //     },
    // ];
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
            imageUrl: "/TECH_TAKDA.webp",
            RegistrationLink:
                "https://docs.google.com/forms/d/1cJFtQML6AqvG3a15HlBjkeWjU9dipJudkb8zNNOCiGw/edit?usp=sharing_eip_se_dm&ts=68dd659c"
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
                "Hey, hackers! 👋🏻 A friendly, educational ethical-hacking competition open to all skill levels. Learn, test skills, and enjoy the thrill of solving security challenges.",
            Guidelines:
                "Open to UG/PG students from recognized colleges/universities.\nTeams: Solo or teams of up to 4.\nNo sabotage — attacking the platform, scoreboard, or other teams is prohibited.\nNo sharing flags or solutions between teams.\nCarry valid college ID.\nReport 30 mins before the event.\nJudges' decision final.",
            Topic: "Capture-The-Flag style ethical hacking — web, crypto, forensics, and misc security challenges",
            Rounds: "Single CTF-style round with multiple challenge categories and a live scoreboard.",
            Criteria: "Scoring based on flags captured, challenge difficulty, time of submission, and adherence to rules.",
            instructions:
                "Individual or team participation (max 4).\nBring laptops and necessary tools.\nAutomated scanners are discouraged unless explicitly allowed in a challenge.\nInternet access provided.\nAsk proctors for hints if stuck — no direct answers.",
            summary:
                "Ethical Hack Challenge @ Avinya 2025 — a supportive CTF for learners and enthusiasts to sharpen security skills ethically.",

            timing: "12:30 PM",
            venue: "CM Lab, MMS Block, GTB4CEC",
            imageUrl: "/cypher.webp",
            RegistrationLink: "https://forms.gle/WKge41J86YnPwDL46"
        },
        // {
        //     title: "CYPHER",
        //     description:
        //         "Welcome to CYPHER, a prompt injection competition! Test your skills by crafting clever inputs to make an AI system ignore its rules or perform unintended actions. See if you can bypass safety filters, reveal hidden information, and outsmart the machine in this exciting challenge.",
        //     Guidelines:
        //         "Objective 1: Extract the Secret Flag - Manipulate AI to reveal hidden system prompt or secret key.\nObjective 2: Evade the Filters - Bypass input sanitizers and blocklists.\nObjective 3: Confuse Context - Trick AI into executing embedded commands.\nObjective 4: Trigger Unintended Actions - Make model perform unauthorized actions.\nObjective 5: Override Core Policies - Bypass fundamental safety rules.\nObjective 6: Scope Escalation - Make AI perform actions outside defined scope.\nObjective 7: Exploit Permissions - Trick AI into revealing permission limits.\n\nRules: Prompt injection only, stay ethical, demonstrate vulnerability without causing damage.",
        //     Topic: "Prompt Injection Competition",
        //     Rounds: "Multiple rounds with increasing difficulty, each with unique AI model and new challenges.",
        //     Criteria:
        //         "Submissions judged on creativity, effectiveness, and subtlety of injection. Points for bypassing instructions within ethical boundaries.",
        //     DefensiveChecklist:
        //         "Never share system prompts.\nEscape user content before re-injection.\nDon't execute embedded instructions.\nConfirm destructive actions.\nTreat user input as adversarial.",
        //     summary:
        //         "A prompt injection contest where you craft clever inputs to make an AI ignore its rules and do the unintended.",
        //     timing: "12:30 PM",
        //     venue: "CM LAB, MMS BLOCK",
        //     imageUrl: "/cypher.webp",
        //     RegistrationLink: "https://forms.gle/WKge41J86YnPwDL46",
        // },
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
                "Participants must complete artwork at home.\nOnly 45 minutes will be given for setup & finishing touches.\nMain element must be from e-waste (NO LIVE ELECTRONICS).\nPresent creation before judges explaining idea, process, and uniqueness.",
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
    return (
        <>
            {/*  <div className="min-h-screen bg-gradient-to-br from-slate-950 text-white via-purple-950 to-slate-950 p-4 sm:p-6 md:p-8"> */}
            <div className="relative min-h-screen bg-[#09011A] text-white p-4 sm:p-6 md:p-8 md:pb-14">
                <div className="relative w-full max-w-7xl mx-auto mb-6 sm:mb-8 lg:mb-12   ">
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
                        {Events.map((event, index) => (
                            <EventCard key={index} {...event} index={index} />
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
