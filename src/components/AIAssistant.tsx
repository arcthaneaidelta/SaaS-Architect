"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Sparkles } from 'lucide-react';
import { cn } from '@/utils/cn';

export function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hello! I am your KAN-KON AI assistant. How can I help you coordinate your project today?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages(prev => [...prev, { role: 'user', content: input }]);
    setInput('');
    
    // Mock response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'Based on the latest IFC model, the structural risk you mentioned on Level 4 has been flagged in Issue #IS-104. Would you like me to open the BIM Viewer to that section?'
      }]);
    }, 1000);
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className={cn(
          "fixed bottom-6 right-6 w-14 h-14 rounded-full bg-[--color-brand-600] text-white flex items-center justify-center shadow-[--shadow-premium-hover] hover:bg-[--color-brand-700] transition-transform hover:scale-105 z-40",
          isOpen && "hidden"
        )}
      >
        <Sparkles className="w-6 h-6" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 w-[380px] h-[600px] bg-white rounded-2xl shadow-2xl border border-[--color-surface-200] flex flex-col overflow-hidden z-50"
          >
            {/* Header */}
            <div className="bg-[--color-brand-600] p-4 flex items-center justify-between text-white">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                <span className="font-semibold">KAN-KON AI</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white hover:bg-white/10 p-1 rounded transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[--color-surface-50]">
              {messages.map((msg, i) => (
                <div key={i} className={cn("flex", msg.role === 'user' ? "justify-end" : "justify-start")}>
                  <div className={cn(
                    "max-w-[85%] rounded-xl p-3 text-sm leading-relaxed",
                    msg.role === 'user' 
                      ? "bg-[--color-brand-600] text-white rounded-tr-sm" 
                      : "bg-white border border-[--color-surface-200] text-[--color-text-primary] rounded-tl-sm shadow-sm"
                  )}>
                    {msg.content}
                  </div>
                </div>
              ))}
            </div>

            {/* Suggested Prompts */}
            {messages.length === 1 && (
              <div className="px-4 pb-2 flex gap-2 overflow-x-auto no-scrollbar">
                <button onClick={() => setInput("Check structural risk")} className="whitespace-nowrap px-3 py-1.5 bg-white border border-[--color-brand-200] text-[--color-brand-700] rounded-full text-xs font-medium hover:bg-[--color-brand-50]">
                  Check structural risk
                </button>
                <button onClick={() => setInput("Generate inspection plan")} className="whitespace-nowrap px-3 py-1.5 bg-white border border-[--color-brand-200] text-[--color-brand-700] rounded-full text-xs font-medium hover:bg-[--color-brand-50]">
                  Generate inspection plan
                </button>
              </div>
            )}

            {/* Input */}
            <div className="p-4 bg-white border-t border-[--color-surface-200]">
              <div className="flex items-center gap-2">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask about your project..."
                  className="flex-1 bg-[--color-surface-50] border border-[--color-surface-200] rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[--color-brand-500] focus:bg-white"
                />
                <button 
                  onClick={handleSend}
                  disabled={!input.trim()}
                  className="w-10 h-10 rounded-full bg-[--color-brand-600] text-white flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[--color-brand-700] transition-colors flex-shrink-0"
                >
                  <Send className="w-4 h-4 ml-0.5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
