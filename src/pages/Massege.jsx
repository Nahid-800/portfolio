import React, { useState, useRef, useEffect } from 'react';

function Massege() {
  const [messages, setMessages] = useState([
    { 
      id: 1, 
      text: "Hi there! 👋 I'm Nahid, a Frontend Developer. How can I help you today?", 
      sender: 'nahid',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

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
        text: "Thanks for reaching out! I am currently offline but I will get back to you as soon as possible.",
        sender: 'nahid',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, replyMessage]);
      setIsTyping(false);
    }, 2000);
  };

  return (
    /**
     * SOLUTION:
     * 1. top-[80px]: আমি এখানে 80px দিয়েছি যাতে Navbar এর নিচ থেকে শুরু হয়।
     *    (যদি এখনো লেগে থাকে, তাহলে 80 এর জায়গায় 90 বা 100 করে দেবেন)।
     * 
     * 2. h-[calc(100vh-80px)]: হাইট থেকেও একই পরিমাণ (80px) বাদ দিয়েছি যাতে নিচে স্ক্রল না হয়।
     */
    <div className="fixed top-[80px] left-0 w-full h-[calc(100vh-80px)] flex flex-col font-sans bg-transparent z-0">
      
      {/* HEADER: Transparent with Blur */}
      <div className="px-4 py-2 flex items-center gap-4 border-b border-white/10 bg-black/10 backdrop-blur-sm">
        <div className="relative">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-lg border border-white/20">
            N
          </div>
          <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-transparent rounded-full shadow-sm"></span>
        </div>
        
        <div className="flex-1">
          <h2 className="text-white font-bold text-base tracking-wide drop-shadow-md">Nahid</h2>
          <p className="text-gray-200 text-[10px] opacity-80">Frontend Developer • Online</p>
        </div>
      </div>

      {/* CHAT BODY */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-gray-600/50 scrollbar-track-transparent">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex w-full ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`relative max-w-[85%] md:max-w-[60%] px-5 py-2.5 rounded-2xl text-sm shadow-md backdrop-blur-sm border border-white/5 ${
                msg.sender === 'user'
                  ? 'bg-blue-600/90 text-white rounded-br-none'
                  : 'bg-gray-800/70 text-gray-100 rounded-bl-none'
              }`}
            >
              <p>{msg.text}</p>
              <span className="text-[9px] opacity-60 block text-right mt-1">
                {msg.time}
              </span>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start">
             <div className="bg-gray-800/70 border border-white/5 px-4 py-3 rounded-2xl rounded-bl-none backdrop-blur-sm flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-75"></span>
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-150"></span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* INPUT AREA */}
      <form onSubmit={handleSend} className="p-3 bg-black/20 backdrop-blur-md border-t border-white/10 flex items-center gap-3">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message here..."
          className="flex-1 bg-white/10 text-white placeholder-gray-400 border border-white/10 px-4 py-3 rounded-full focus:outline-none focus:bg-white/20 focus:border-blue-400/50 transition-all text-sm"
        />
        <button
          type="submit"
          className="p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-transform transform active:scale-95 flex items-center justify-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
        </button>
      </form>

    </div>
  )
}

export default Massege