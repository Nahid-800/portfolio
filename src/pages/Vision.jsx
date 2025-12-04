import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

function Vision() {
  return (
    <section className='relative py-10 md:py-24 px-4 overflow-hidden'>
        
      
        <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-orange-500/10 blur-[120px] rounded-full -z-10"></div>

        <div className="max-w-5xl mx-auto relative z-10">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                
               
                className='relative rounded-3xl p-6 md:p-20 text-center bg-transparent md:bg-white/[0.02] md:backdrop-blur-sm'
            >
              
                <FaQuoteLeft className="absolute top-0 left-0 md:top-10 md:left-10 text-xl md:text-6xl text-white/5 md:text-white/[0.03]" />
                <FaQuoteRight className="absolute bottom-0 right-0 md:bottom-10 md:right-10 text-xl md:text-6xl text-white/5 md:text-white/[0.03]" />

              
                <div className="inline-flex items-center gap-2 mb-6 md:mb-10 opacity-80">
                    <span className="h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-orange-500/80"></span>
                    <span className="text-orange-400/90 text-[10px] md:text-sm font-medium tracking-[0.2em] uppercase">
                        Philosophy
                    </span>
                </div>

            
                <h2 className='text-slate-300/90 text-lg sm:text-xl md:text-4xl lg:text-5xl font-normal md:font-light leading-relaxed md:leading-tight max-w-4xl mx-auto tracking-wide relative z-10'>
                    Crafting <span className="text-orange-400/90 font-medium md:font-normal">intuitive</span> and <span className="text-orange-400/90 font-medium md:font-normal">engaging</span> digital experiences with clean code.
                </h2>
                
              
                <div className="mt-8 md:mt-16 flex flex-col items-center justify-center gap-3 md:gap-5">
                    <div className="w-8 md:w-16 h-[1px] bg-white/10 md:bg-white/20"></div>
                    <p className="text-slate-500 text-xs md:text-lg italic font-light tracking-wider">
                        " Simplicity is the soul of efficiency "
                    </p>
                </div>

            </motion.div>
        </div>
    </section>
  )
}

export default Vision;