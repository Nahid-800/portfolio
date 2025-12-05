import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  FiMenu, FiX, FiHome, FiLayers, FiUser, FiMail, FiBriefcase, FiArrowUpRight 
} from "react-icons/fi";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import "../index.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const location = useLocation();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20);
  });

  const navLinks = [
    { title: "Home", path: "/", icon: <FiHome /> },
    { title: "Projects", path: "/#projects", icon: <FiLayers /> }, 
    { title: "About", path: "/about", icon: <FiUser /> },
    { title: "Contact", path: "/contact", icon: <FiMail /> },
  ];

  // ফিক্স ১: অন্য পেজ থেকে হোম পেজে আসার পর স্ক্রল লজিক
  useEffect(() => {
    if (location.hash) {
      const elementId = location.hash.replace("#", "");
      const element = document.getElementById(elementId);
      
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 500); // পেজ লোড হওয়ার জন্য সময় একটু বাড়ানো হয়েছে
      }
    }
  }, [location]);

  // ফিক্স ২: মোবাইল মেনু এবং পিসি স্ক্রল ফিক্স
  const handleNavClick = (e, path) => {
    setIsOpen(false); // মেনু বন্ধ করার কমান্ড আগে দেওয়া হলো

    // যদি হ্যাশ লিংক হয় (যেমন Projects)
    if (path.includes("#")) {
      // যদি বর্তমানে হোম পেজেই থাকেন
      if (location.pathname === "/") {
        e.preventDefault(); 
        const elementId = path.split("#")[1];
        const element = document.getElementById(elementId);
        
        if (element) {
          // মোবাইলের জন্য এখানে ৩00ms ডিলে দেওয়া হয়েছে যাতে মেনু বন্ধ হওয়ার পর স্ক্রল হয়
          setTimeout(() => {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }, 300);
        }
      }
      // অন্য পেজে থাকলে Link কম্পোনেন্ট অটোমেটিক কাজ করবে (useEffect হ্যান্ডেল করবে)
    } else {
      window.scrollTo(0, 0);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out transform-gpu ${
        scrolled
          ? "bg-[#020617]/90 md:bg-[#020617]/75 backdrop-blur-md md:backdrop-blur-[30px] border-b border-orange-500/10 shadow-[0_10px_30px_-10px_rgba(2,6,23,0.5)] py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* LOGO */}
          <Link 
            to="/" 
            className="flex items-center gap-3 group"
            onClick={() => window.scrollTo(0, 0)}
          >
            <div className="relative w-11 h-11 flex items-center justify-center">
                <div className="absolute inset-0 bg-orange-500/30 blur-xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full relative z-10 drop-shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17L12 22L22 17" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12L12 17L22 12" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
            
            <div className="flex flex-col">
                <span className="brand-logo text-xl text-white leading-none group-hover:text-orange-100 transition-colors">
                  NAHID <span className="text-orange-500">.</span>
                </span>
                <span className="text-[10px] text-slate-400 font-medium tracking-[0.3em] uppercase opacity-80 group-hover:opacity-100 transition-opacity">
                   Portfolio
                </span>
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-1 bg-white/5 px-1.5 py-1.5 rounded-full border border-white/5 backdrop-blur-md shadow-inner">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path || (link.path.includes("#") && location.hash === link.path.split("/")[1]);
              return (
                <Link
                  key={link.title}
                  to={link.path}
                  onClick={(e) => handleNavClick(e, link.path)} 
                  className="relative px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300"
                >
                  {isActive && (
                    <motion.div
                      layoutId="desktopNav"
                      className="absolute inset-0 bg-gradient-to-r from-orange-600 to-amber-600 rounded-full shadow-lg shadow-orange-500/20"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className={`relative z-10 ${isActive ? "text-white" : "text-slate-400 hover:text-white"}`}>
                    {link.title}
                  </span>
                </Link>
              );
            })}
          </div>

          {/* HIRE ME & TOGGLE */}
          <div className="flex items-center gap-4">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden sm:flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-500 hover:to-amber-400 text-white font-bold text-sm tracking-wide shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-300"
            >
              <FiBriefcase className="text-white/90" />
              HIRE ME
            </motion.a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2.5 rounded-xl bg-slate-800/50 text-slate-300 hover:text-orange-400 border border-slate-700 hover:border-orange-500/50 transition-all active:scale-95 backdrop-blur-sm"
            >
              {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="md:hidden overflow-hidden bg-[#020617]/95 backdrop-blur-md border-b border-orange-500/20 relative shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 rounded-full pointer-events-none"></div>

            <div className="px-4 pt-4 pb-8 flex flex-col gap-3 relative z-10">
              {navLinks.map((link, idx) => {
                 const isActive = location.pathname === link.path;
                 return (
                  <motion.div
                    key={link.title}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.08 }}
                  >
                    <Link
                      to={link.path}
                      onClick={(e) => handleNavClick(e, link.path)} 
                      className={`group flex items-center justify-between p-4 rounded-2xl border transition-all duration-300 ${
                        isActive
                          ? "bg-gradient-to-r from-orange-500/10 to-transparent border-orange-500/30 shadow-[inset_0_0_20px_rgba(249,115,22,0.05)]"
                          : "bg-white/[0.03] border-white/5 hover:border-orange-500/20 hover:bg-white/[0.05]"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                          <span className={`p-2 rounded-lg ${isActive ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30' : 'bg-slate-800 text-slate-400 group-hover:text-orange-400 group-hover:bg-slate-700'} transition-colors duration-300`}>
                              {link.icon}
                          </span>
                          <span className={`font-semibold text-lg ${isActive ? 'text-white' : 'text-slate-300 group-hover:text-white'} transition-colors`}>
                              {link.title}
                          </span>
                      </div>
                      <FiArrowUpRight className={`text-xl transition-transform duration-300 ${isActive ? 'text-orange-500 rotate-45' : 'text-slate-600 group-hover:text-orange-400 group-hover:rotate-45'}`} />
                    </Link>
                  </motion.div>
                );
              })}

              <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-4"
              >
                <button className="w-full py-4 rounded-xl bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-500 hover:to-amber-400 text-white font-bold text-lg shadow-lg shadow-orange-500/30 flex items-center justify-center gap-3 transition-all active:scale-95">
                    <FiBriefcase />
                    Hire Me Now
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;