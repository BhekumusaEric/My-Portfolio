import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

const ChatbotButton = styled(motion.button)`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  background-color: var(--primary-color);
  color: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 100;
  box-shadow: 0 4px 20px rgba(9, 105, 218, 0.3);
`;

const ChatWindow = styled(motion.div)`
  position: fixed;
  bottom: 6.5rem;
  right: 2rem;
  width: 320px;
  height: 450px;
  background: rgba(31, 34, 46, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  z-index: 100;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
`;

const ChatHeader = styled.div`
  background-color: var(--primary-color);
  padding: 1rem;
  color: white;
`;

const ChatTitle = styled.h3`
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
`;

const ChatSubtitle = styled.p`
  margin: 0.25rem 0 0;
  font-size: 0.8rem;
  opacity: 0.8;
`;

const ChatMessages = styled.div`
  flex: 1;
  padding: 1rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const MessageBubble = styled.div`
  max-width: 80%;
  padding: 0.75rem 1rem;
  border-radius: 12px;
  font-size: 0.9rem;
  line-height: 1.4;
  
  ${props => props.sender === 'bot' ? `
    align-self: flex-start;
    background-color: #2a2d3a;
    border-bottom-left-radius: 4px;
    color: white;
  ` : `
    align-self: flex-end;
    background-color: var(--primary-color);
    border-bottom-right-radius: 4px;
    color: white;
  `}
`;

const ChatForm = styled.form`
  display: flex;
  padding: 0.75rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const ChatInput = styled.input`
  flex: 1;
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 20px 0 0 20px;
  background-color: #2a2d3a;
  color: white;
  font-size: 0.9rem;
  
  &:focus {
    outline: none;
  }
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;

const SendButton = styled.button`
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 0 20px 20px 0;
  padding: 0 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AIChatbot = () => {
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
      <ChatbotButton
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </ChatbotButton>
      
      <AnimatePresence>
        {isOpen && (
          <ChatWindow
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            <ChatHeader>
              <ChatTitle>Eric's AI Assistant</ChatTitle>
              <ChatSubtitle>Ask me anything about Eric!</ChatSubtitle>
            </ChatHeader>
            
            <ChatMessages>
              {messages.map((message) => (
                <MessageBubble
                  key={message.id}
                  sender={message.sender}
                >
                  {message.text}
                </MessageBubble>
              ))}
              <div ref={messagesEndRef} />
            </ChatMessages>
            
            <ChatForm onSubmit={handleSubmit}>
              <ChatInput
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
              />
              <SendButton type="submit">
                <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </SendButton>
            </ChatForm>
          </ChatWindow>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChatbot;
