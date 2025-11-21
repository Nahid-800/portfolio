import React from 'react';

function Skills() {
    // আপনার স্কিলগুলোর লিস্ট এবং তাদের কালার থিম (আইকন এবং বর্ডার কালার)
    const skills = [
        { 
            id: 1, 
            name: 'HTML', 
            icon: 'fa-brands fa-html5', 
            color: 'hover:text-orange-500 hover:border-orange-500 hover:shadow-orange-500/30' 
        },
        { 
            id: 2, 
            name: 'CSS', 
            icon: 'fa-brands fa-css3-alt', 
            color: 'hover:text-blue-500 hover:border-blue-500 hover:shadow-blue-500/30' 
        },
        { 
            id: 3, 
            name: 'JavaScript', 
            icon: 'fa-brands fa-js', 
            color: 'hover:text-yellow-400 hover:border-yellow-400 hover:shadow-yellow-400/30' 
        },
        { 
            id: 4, 
            name: 'React', 
            icon: 'fa-brands fa-react', 
            color: 'hover:text-cyan-400 hover:border-cyan-400 hover:shadow-cyan-400/30' 
        },
        { 
            id: 5, 
            name: 'Tailwind CSS', 
            icon: 'fa-solid fa-wind', // Tailwind এর জন্য উইন্ড আইকন ব্যবহার করা হয়েছে
            color: 'hover:text-teal-400 hover:border-teal-400 hover:shadow-teal-400/30' 
        },
        { 
            id: 6, 
            name: 'Next.js', 
            icon: 'fa-solid fa-n', 
            color: 'hover:text-white hover:border-white hover:shadow-white/30' 
        },
        { 
            id: 7, 
            name: 'Git/GitHub', 
            icon: 'fa-brands fa-github', 
            color: 'hover:text-gray-400 hover:border-gray-400 hover:shadow-gray-400/30' 
        },
        { 
            id: 8, 
            name: 'Bootstrap', 
            icon: 'fa-brands fa-bootstrap', 
            color: 'hover:text-purple-500 hover:border-purple-500 hover:shadow-purple-500/30' 
        },
    ];

    return (
        <section className="py-12 md:py-20 w-full">
            <div className="md:px-24 px-5">
                
                {/* সেকশন টাইটেল */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                        My <span className="text-blue-400">Skills</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
                        Here are the technologies I work with to bring ideas to life. I am constantly learning and updating my tech stack.
                    </p>
                </div>

                {/* স্কিল কার্ড গ্রিড */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
                    {skills.map((skill) => (
                        <div 
                            key={skill.id}
                            className={`bg-neutral-800 rounded-xl p-6 border-2 border-neutral-700 
                                        flex flex-col items-center justify-center gap-4 
                                        transform transition-all duration-300 ease-in-out
                                        hover:scale-105 hover:-translate-y-2 hover:bg-neutral-900 
                                        group cursor-pointer ${skill.color}`}
                        >
                            {/* আইকন */}
                            <div className="text-5xl md:text-6xl transition-colors duration-300 text-gray-500 group-hover:text-current">
                                <i className={skill.icon}></i>
                            </div>
                            
                            {/* নাম */}
                            <h3 className="text-lg md:text-xl font-semibold text-gray-300 group-hover:text-white transition-colors duration-300">
                                {skill.name}
                            </h3>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Skills;
