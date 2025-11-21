import React from 'react';

function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 relative overflow-hidden">
      
      {/* --- Background Glow (Consistency বজায় রাখার জন্য) --- */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-6xl mx-auto px-5 md:px-12 relative z-10">
        
        {/* --- Section Header --- */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-wide">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-3 rounded-full"></div>
          <p className="text-gray-400 mt-4 text-base md:text-lg max-w-2xl mx-auto">
            Let's bring your ideas to life. Whether you have a project in mind or just want to say hi, feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
          
          {/* --- Left Side: Contact Info --- */}
          <div className="flex flex-col justify-between space-y-8">
            
            <div>
                <h3 className="text-2xl font-bold text-white mb-2">Let's Talk</h3>
                <p className="text-gray-400 leading-relaxed mb-8">
                    I'm open for freelance projects or full-time opportunities. Connect with me via email or call directly.
                </p>
            </div>

            {/* Contact Details Cards */}
            <div className="space-y-6">
              
              {/* Email Card */}
              <div className="flex items-center gap-5 p-5 rounded-xl bg-neutral-800/50 border border-neutral-700 hover:border-cyan-500/50 transition-all duration-300 group">
                <div className="h-12 w-12 rounded-full bg-neutral-900 border border-neutral-700 flex items-center justify-center text-cyan-400 group-hover:text-white group-hover:bg-cyan-500 transition-all duration-300">
                   <i className="fa-solid fa-envelope text-xl"></i>
                </div>
                <div>
                  <p className="text-sm text-gray-400 font-medium">Email Me</p>
                  <h4 className="text-lg md:text-xl font-semibold text-white">nahid@example.com</h4>
                </div>
              </div>

              {/* Phone Card */}
              <div className="flex items-center gap-5 p-5 rounded-xl bg-neutral-800/50 border border-neutral-700 hover:border-blue-500/50 transition-all duration-300 group">
                <div className="h-12 w-12 rounded-full bg-neutral-900 border border-neutral-700 flex items-center justify-center text-blue-400 group-hover:text-white group-hover:bg-blue-500 transition-all duration-300">
                    <i className="fa-solid fa-phone text-xl"></i>
                </div>
                <div>
                  <p className="text-sm text-gray-400 font-medium">Call Me</p>
                  <h4 className="text-lg md:text-xl font-semibold text-white">+880 1234 567890</h4>
                </div>
              </div>

              {/* Location Card */}
              <div className="flex items-center gap-5 p-5 rounded-xl bg-neutral-800/50 border border-neutral-700 hover:border-teal-500/50 transition-all duration-300 group">
                <div className="h-12 w-12 rounded-full bg-neutral-900 border border-neutral-700 flex items-center justify-center text-teal-400 group-hover:text-white group-hover:bg-teal-500 transition-all duration-300">
                    <i className="fa-solid fa-location-dot text-xl"></i>
                </div>
                <div>
                  <p className="text-sm text-gray-400 font-medium">Location</p>
                  <h4 className="text-lg md:text-xl font-semibold text-white">Dhaka, Bangladesh</h4>
                </div>
              </div>

            </div>
          </div>

          {/* --- Right Side: Contact Form --- */}
          <div className="p-6 md:p-8 rounded-2xl bg-neutral-900/80 border border-neutral-800 shadow-2xl relative group">
             {/* Form Glow Effect */}
             <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur opacity-10 group-hover:opacity-20 transition duration-500"></div>
            
            <form onSubmit={(e) => e.preventDefault()} className="relative space-y-6 z-10">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-300">Your Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-3 rounded-lg bg-neutral-800 border border-neutral-700 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                      placeholder="Ex. Nahid Hasan"
                    />
                  </div>

                  {/* Phone Input */}
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-gray-300">Phone Number</label>
                    <input 
                      type="text" 
                      id="phone" 
                      className="w-full px-4 py-3 rounded-lg bg-neutral-800 border border-neutral-700 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                      placeholder="Ex. +880 1XXX..."
                    />
                  </div>
              </div>

              {/* Email Input */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-300">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 rounded-lg bg-neutral-800 border border-neutral-700 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                  placeholder="Ex. nahid@example.com"
                />
              </div>

              {/* Message Textarea */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
                <textarea 
                  id="message" 
                  rows="4" 
                  className="w-full px-4 py-3 rounded-lg bg-neutral-800 border border-neutral-700 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                  placeholder="Write your message here..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="w-full py-3.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold text-lg 
                           shadow-lg shadow-cyan-500/25 
                           hover:shadow-cyan-500/40 hover:-translate-y-1 hover:scale-[1.01]
                           transition-all duration-300 ease-in-out flex justify-center items-center gap-2"
              >
                Send Message <i className="fa-solid fa-paper-plane"></i>
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;
