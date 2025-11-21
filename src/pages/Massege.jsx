import React, { useState, useRef, useEffect } from 'react';

function Message() {
  const headerUserImage = "/person.webp";

  const [messages, setMessages] = useState([
    { 
      id: 1, 
      text: "Hi there! 👋 I'm Nahid. How can I help you create something amazing today?", 
      sender: 'nahid',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const textareaRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = Math.min(textareaRef.current.scrollHeight, 120) + 'px';
    }
  }, [input]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessage = {
      id: Date.now(),
      text: input,
      sender: 'user',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, newMessage]);
    setInput('');
    setIsTyping(true);
    
    setTimeout(() => {
      const replyMessage = {
        id: Date.now() + 1,
        text: "Thanks for reaching out! I'll get back to you shortly.",
        sender: 'nahid',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, replyMessage]);
      setIsTyping(false);
    }, 2000);
  };

  return (
    // ============ MAIN CONTAINER ============
    // পরিবর্তন: bg-black/30 এবং backdrop-blur-xl ব্যবহার করা হয়েছে।
    // এটি ব্যাকগ্রাউন্ডকে আবছা (Frosted) করে দিবে, যা খুব প্রিমিয়াম দেখায়।
    <div className="fixed top-[80px] left-0 right-0 bottom-0 flex flex-col font-sans bg-black/20 backdrop-blur-xl z-0 overflow-hidden border-t border-white/5">
      
      {/* --- Subtle Glow Effects (Optional) --- */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-600/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-600/20 rounded-full blur-[100px] pointer-events-none"></div>

      {/* ============ HEADER ============ */}
      <div className="flex-none h-[70px] px-6 flex items-center gap-4 border-b border-white/5 bg-white/5 backdrop-blur-md shadow-sm z-20 w-full">
        <div className="relative">
          <div className="p-[2px] rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            <img 
              src={headerUserImage} 
              alt="Nahid" 
              className="w-10 h-10 rounded-full object-cover border-2 border-[#0F172A]"
            />
          </div>
          <span className="absolute bottom-0.5 right-0.5 w-2.5 h-2.5 bg-emerald-500 border-2 border-[#0F172A] rounded-full shadow-lg animate-pulse"></span>
        </div>
        <div className="flex-1">
          <h2 className="text-white font-bold text-lg tracking-wide drop-shadow-md">Nahid</h2>
          <p className="text-indigo-200 text-xs font-medium opacity-80">Online • Frontend Dev</p>
        </div>
      </div>

      {/* ============ CHAT BODY ============ */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden p-4 sm:p-6 space-y-6 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent z-10 overscroll-contain">
        
        <div className="flex justify-center mb-4">
            <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest bg-black/20 px-3 py-1 rounded-full">
              Today
            </span>
        </div>

        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex w-full ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in-up`}
          >
            <div
              className={`relative max-w-[80%] min-w-[120px] px-5 py-3 text-[15px] shadow-2xl flex flex-col backdrop-blur-md
              ${
                msg.sender === 'user'
                  // USER BUBBLE: Modern Indigo-Purple Gradient
                  ? 'bg-gradient-to-br from-indigo-600 to-violet-600 text-white rounded-[24px] rounded-tr-[4px]'
                  // SENDER BUBBLE: Glassy Dark Grey (Translucent)
                  : 'bg-[#1e293b]/80 border border-white/5 text-gray-100 rounded-[24px] rounded-tl-[4px]'
              }`}
            >
              <p className="leading-relaxed font-normal tracking-wide">{msg.text}</p>
              
              <div className={`text-[9px] flex items-center justify-end gap-1.5 mt-2 font-medium ${msg.sender === 'user' ? 'text-indigo-100' : 'text-gray-400'}`}>
                {msg.time}
                {msg.sender === 'user' && (
                  <i className="fa-solid fa-check text-[9px]"></i>
                )}
              </div>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start animate-fade-in">
             <div className="bg-[#1e293b]/80 border border-white/5 px-4 py-3 rounded-[24px] rounded-tl-[4px] flex items-center gap-1.5 h-auto shadow-md">
              <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce"></span>
              <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce delay-100"></span>
              <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce delay-200"></span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} className="pb-2" />
      </div>

      {/* ============ INPUT AREA ============ */}
      <form 
        onSubmit={handleSend} 
        className="flex-none p-4 bg-black/20 backdrop-blur-xl flex items-end gap-3 w-full z-20"
      >
        <div className="flex-1 bg-[#1e293b]/70 rounded-[26px] border border-white/10 transition-all duration-300 focus-within:border-indigo-500/50 focus-within:bg-[#1e293b] focus-within:shadow-[0_0_20px_rgba(99,102,241,0.15)]">
            <textarea
                ref={textareaRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Message..."
                rows={1}
                className="w-full bg-transparent text-white placeholder-gray-400 px-6 py-3.5 rounded-[26px] focus:outline-none text-[15px] resize-none max-h-[120px] overflow-y-auto scrollbar-hide"
                style={{ minHeight: '52px' }}
            />
        </div>
        
        <button
          type="submit"
          disabled={!input.trim()}
          className={`group p-3 rounded-full shadow-xl transition-all duration-300 flex items-center justify-center h-[52px] w-[52px] flex-shrink-0 border border-white/5
            ${input.trim() 
                ? 'bg-indigo-600 text-white hover:bg-indigo-500 hover:scale-105 active:scale-95 shadow-indigo-500/30' 
                : 'bg-[#1e293b] text-gray-500 cursor-not-allowed'
            }`}
        >
            {/* Send Icon with simple animation */}
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`w-5 h-5 ml-0.5 transition-transform duration-300 ${input.trim() ? 'group-hover:translate-x-0.5 group-hover:-translate-y-0.5' : ''}`}>
                <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
            </svg>
        </button>
      </form>

    </div>
  )
}

export default Message;
