import React from 'react';

function Skills() {
    // শুধুমাত্র প্রফেশনাল এবং মডার্ন স্কিলগুলো রাখা হয়েছে
    const skills = [
        { 
            title: "React.js", 
            level: "Expert",
            desc: "Building complex web apps with modern hooks & functional components.",
            icon: "fa-brands fa-react",
            color: "text-cyan-400",
            shadow: "group-hover:shadow-cyan-500/50",
            border: "group-hover:border-cyan-500"
        },
        { 
            title: "JavaScript (ES6+)", 
            level: "Advanced",
            desc: "Deep understanding of Asynchronous programming, DOM & Logic.",
            icon: "fa-brands fa-js",
            color: "text-yellow-400",
            shadow: "group-hover:shadow-yellow-500/50",
            border: "group-hover:border-yellow-500"
        },
        { 
            title: "Tailwind CSS", 
            level: "Expert",
            desc: "Rapidly building custom designs with utility-first CSS framework.",
            icon: "fa-solid fa-wind",
            color: "text-teal-400",
            shadow: "group-hover:shadow-teal-500/50",
            border: "group-hover:border-teal-500"
        },
        { 
            title: "Next.js", 
            level: "Intermediate",
            desc: "Server Side Rendering (SSR) and Static Site Generation (SSG).",
            icon: "fa-solid fa-n", // FontAwesome এ NextJs এর আইকন না থাকলে 'N' ব্যবহার করা হয়
            color: "text-white",
            shadow: "group-hover:shadow-white/50",
            border: "group-hover:border-white"
        }
    ];

    return (
        <section className="py-16 md:py-24 relative">
             {/* ব্যাকগ্রাউন্ডে হালকা আভা (Glow Effect) */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute -top-10 -left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
            </div>

            <div className="md:px-24 px-5 max-w-7xl mx-auto">
                
                {/* হেডিং সেকশন */}
                <div className="flex flex-col items-center justify-center mb-16 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Proficiency</span>
                    </h2>
                    <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
                </div>

                {/* স্কিল কার্ডস */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {skills.map((skill, index) => (
                        <div 
                            key={index}
                            className={`group relative bg-neutral-900/80 backdrop-blur-sm border border-neutral-800 
                                        p-8 rounded-2xl transition-all duration-300 ease-out
                                        hover:-translate-y-2 hover:bg-neutral-900 ${skill.border} hover:border-opacity-50`}
                        >
                            {/* হোভার করলে কার্ডের চারপাশে হালকা শ্যাডো গ্লো করবে */}
                            <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${skill.shadow.replace('group-hover:shadow', 'bg')}`}></div>

                            <div className="flex items-start gap-6 relative z-10">
                                {/* আইকন বক্স */}
                                <div className={`h-16 w-16 rounded-xl bg-neutral-800 flex items-center justify-center 
                                                text-3xl shadow-lg border border-neutral-700
                                                transition-all duration-300 group-hover:scale-110 ${skill.color}`}>
                                    <i className={skill.icon}></i>
                                </div>

                                {/* টেক্সট কন্টেন্ট */}
                                <div className="flex-1">
                                    <div className="flex justify-between items-center mb-2">
                                        <h3 className="text-xl md:text-2xl font-bold text-gray-200 group-hover:text-white transition-colors">
                                            {skill.title}
                                        </h3>
                                        <span className={`text-xs font-semibold px-3 py-1 rounded-full border bg-opacity-10 ${skill.color} border-opacity-20 border-current`}>
                                            {skill.level}
                                        </span>
                                    </div>
                                    <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                                        {skill.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;
