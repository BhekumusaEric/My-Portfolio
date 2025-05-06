import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      id: 1, 
      text: "Hi there! I'm Eric's AI assistant. How can I help you learn more about Eric's skills and projects?", 
      sender: 'bot' 
    }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);
  
  // Auto-scroll to bottom of messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);
  
  // Predefined responses based on keywords
  const getResponse = (message) => {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('project') || lowerMessage.includes('work')) {
      return "Eric has worked on several impressive projects including SafeWayAI (an AI-powered emergency detection platform), Smart Loan Approval Predictor, Eduwize (an AI learning platform), and more. You can check them out in the Projects section!";
    } else if (lowerMessage.includes('skill') || lowerMessage.includes('technology')) {
      return "Eric is skilled in Python, JavaScript, React, TensorFlow, Django, Flask, Azure, and more. He specializes in AI/ML development and has experience with mobile app development using Kivy.";
    } else if (lowerMessage.includes('contact') || lowerMessage.includes('hire') || lowerMessage.includes('email')) {
      return "You can contact Eric through the Contact form on this website, or connect with him on LinkedIn at linkedin.com/in/bhekumusaerickelvinntshwenya/";
    } else if (lowerMessage.includes('education') || lowerMessage.includes('background')) {
      return "Eric is a software developer with expertise in AI, mobile applications, and web development. He's currently studying at WeThinkCode and continuously learning about AI, machine learning, and cloud technologies.";
    } else if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      return "Hello! I'm Eric's AI assistant. What would you like to know about Eric's skills, projects, or experience?";
    } else {
      return "I'm not sure I understand. Would you like to know about Eric's projects, skills, education, or how to contact him?";
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    // Add user message
    const userMessage = { id: messages.length + 1, text: input, sender: 'user' };
    setMessages([...messages, userMessage]);
    setInput('');
    
    // Simulate AI response with a slight delay
    setTimeout(() => {
      const botResponse = { id: messages.length + 2, text: getResponse(input), sender: 'bot' };
      setMessages(prevMessages => [...prevMessages, botResponse]);
    }, 500);
  };
  
  return (
    <>
      {/* Chat toggle button */}
      <motion.button
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center shadow-lg z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </motion.button>
      
      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 w-80 h-96 glass-effect rounded-lg shadow-xl overflow-hidden z-50 flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
          >
            {/* Chat header */}
            <div className="bg-primary p-3 text-white">
              <h3 className="font-medium">Eric's AI Assistant</h3>
              <p className="text-xs opacity-80">Ask me anything about Eric!</p>
            </div>
            
            {/* Chat messages */}
            <div className="flex-grow p-3 overflow-y-auto">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`mb-3 ${
                    message.sender === 'user' ? 'text-right' : 'text-left'
                  }`}
                >
                  <div
                    className={`inline-block p-2 rounded-lg ${
                      message.sender === 'user'
                        ? 'bg-primary text-white rounded-tr-none'
                        : 'bg-gray-700 text-white rounded-tl-none'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
            
            {/* Chat input */}
            <form onSubmit={handleSubmit} className="p-3 border-t border-gray-700">
              <div className="flex">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-grow p-2 rounded-l-lg bg-gray-700 text-white focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-primary text-white p-2 rounded-r-lg"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
