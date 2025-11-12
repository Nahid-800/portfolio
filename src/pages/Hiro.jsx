import React from 'react';
import { TypeAnimation } from 'react-type-animation';

function Hiro() {
    return (
        <>
            <section className='flex justify-center items-center flex-col-reverse md:flex-row py-28 md:py-32'>
                <div className='flex justify-center items-center md:items-start gap-12 md:justify-between flex-col-reverse md:flex-row w-full md:px-24'>

                    <div className='flex-1'>
                        <div className='text-center md:text-start px-5 flex flex-col gap-3 md:gap-4' >
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Hi, I'm <span className="text-blue-400">Nahid</span></h2>

                            {/* উন্নত টাইপিং অ্যানিমেশন */}
                            <div className="text-lg md:text-2xl lg:text-3xl font-[500] mt-2 max-w-xl h-16 md:h-auto">
                                <TypeAnimation
                                    sequence={[
                                        'A Frontend Web Developer',
                                        1000,
                                        'Specializing in React & JavaScript',
                                        1000,
                                        'Building Modern Web Applications',
                                        1000,
                                    ]}
                                    wrapper="span"
                                    speed={50}
                                    style={{ display: 'inline-block' }}
                                    repeat={Infinity}
                                />
                            </div>

                            <p className="text-gray-400 max-w-md mb-6 ">
                                I create modern, responsive and user-friendly web applications using React.js, Next.js, Tailwind CSS, Bootstrap, Material Ui, Hiro Ui, More... Passionate about clean code and great user experiences.
                            </p>

                            <div className='flex gap-5 justify-center md:justify-start pb-4 '>
                                <a href="https://www.facebook.com/m.aul.ulla.2024" target="_blank" rel="noopener noreferrer">
                                    <button className='icons text-cyan-500 text-2xl transform hover:scale-125 hover:text-blue-600 transition-all duration-300'><i className="fa-brands fa-facebook-f"></i></button>
                                </a>
                                <a href="https://www.instagram.com/auly_ullah?igsh=MTFocm13ZHBlOWQ4ag==" target="_blank" rel="noopener noreferrer">
                                    <button className='icons text-cyan-500 text-2xl transform hover:scale-125 hover:text-pink-500 transition-all duration-300'><i className="fa-brands fa-instagram"></i></button>
                                </a>
                                <a href="https://www.youtube.com/@CodedByAuly" target="_blank" rel="noopener noreferrer">
                                    <button className='icons text-cyan-500 text-2xl transform hover:scale-125 hover:text-red-600 transition-all duration-300'><i className="fa-brands fa-youtube"></i></button>
                                </a>
                                <a href="https://www.linkedin.com/in/auly-ullah-244604352?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                                    <button className='icons text-cyan-500 text-2xl transform hover:scale-125 hover:text-blue-700 transition-all duration-300'><i className="fa-brands fa-linkedin-in"></i></button>
                                </a>
                               <a href="https://www.tiktok.com/@codedbyauly?_t=ZS-8vLC83UDfLs&_r=1" target="_blank" rel="noopener noreferrer">
                                   <button className='icons text-cyan-500 text-2xl transform hover:scale-125 hover:text-black transition-all duration-300'><i className="fa-brands fa-tiktok"></i></button>
                               </a>
                            </div>
                            <div className='flex justify-center md:justify-start'>
                                <button className='flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl hover:bg-gradient-to-l transform hover:-translate-y-1 transition-all duration-300 ease-in-out'>
                                    <span>Read More</span>
                                    <i className="fa-solid fa-arrow-right"></i>
                                </button>
                            </div>

                        </div>
                    </div>

                    <div className='px-5 flex-shrink-0'>
                        <div className='flex items-center justify-center'>
                            {/* ইমেজে হোভার এফেক্ট যোগ করা হয়েছে */}
                            <div className={`bg-[url("/myimg.jpg")] h-72 w-72 md:h-96 md:w-96 rounded-full bg-no-repeat bg-center bg-cover border-4 border-blue-400 shadow-2xl transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-blue-500/50`}>
                            </div>
                         </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Hiro;