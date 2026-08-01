import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, Send, Bot, User, X, Loader2, Dumbbell, Apple, Clock } from 'lucide-react';

interface AIAssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
}

interface Message {
  id: string;
  role: 'user' | 'assistant';
  text: string;
}

export const AIAssistantModal: React.FC<AIAssistantModalProps> = ({
  isOpen,
  onClose,
  onOpenBooking
}) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'm-1',
      role: 'assistant',
      text: "Namaste! I am S.K. AI Coach. Ask me about custom workout routines, fat loss or muscle gain diets, gym quiet hours, or class schedules at S.K.FITNESS Gym Nashik Road!"
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  if (!isOpen) return null;

  const handleSendMessage = async (userText: string) => {
    const textToSend = userText || input;
    if (!textToSend.trim() || loading) return;

    const userMsg: Message = {
      id: `u-${Date.now()}`,
      role: 'user',
      text: textToSend
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!userText) setInput('');
    setLoading(true);

    try {
      const historyPayload = messages.map((m) => ({
        role: m.role === 'user' ? 'user' : 'model',
        text: m.text
      }));

      const res = await fetch('/api/ai-coach', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: textToSend,
          history: historyPayload
        })
      });

      const data = await res.json();
      const replyText = data.reply || "I am here to guide your workouts at S.K.FITNESS Gym!";

      const botMsg: Message = {
        id: `b-${Date.now()}`,
        role: 'assistant',
        text: replyText
      };
      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          id: `b-err-${Date.now()}`,
          role: 'assistant',
          text: "I'm catching my breath! S.K.FITNESS Gym offers HIIT, Crossfit, Aerobics, and Weight Training daily. Call Head Coach S.K. Sir directly at 098232 19007!"
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const samplePrompts = [
    "What routine is best for a complete beginner at S.K.FITNESS?",
    "Give me a 3-day muscle gain diet plan with Indian foods.",
    "When is the quietest time to workout at S.K.FITNESS Gym today?",
    "Is HIIT or CrossFit better for burning belly fat?"
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="bg-zinc-950 border border-zinc-800 rounded-3xl max-w-lg w-full h-[600px] max-h-[90vh] flex flex-col shadow-2xl relative text-white overflow-hidden">
        {/* Header */}
        <div className="p-4 sm:p-5 bg-zinc-900 border-b border-zinc-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-lime-400 text-zinc-950 flex items-center justify-center font-black shadow-lg">
              <Sparkles className="w-5 h-5 fill-zinc-950" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-black text-sm uppercase italic text-white">S.K. AI FITNESS COACH</h3>
                <span className="px-2 py-0.5 rounded-full bg-lime-400/20 text-lime-400 border border-lime-400/30 text-[10px] font-black uppercase">
                  Gemini 2.5
                </span>
              </div>
              <p className="text-[11px] text-zinc-400 font-medium">Virtual Trainer & Diet Advisor • Nashik Road</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-zinc-950 text-zinc-400 hover:text-white border border-zinc-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Messages List */}
        <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-zinc-950">
          {messages.map((m) => (
            <div
              key={m.id}
              className={`flex items-start gap-2.5 ${
                m.role === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              {m.role === 'assistant' && (
                <div className="w-8 h-8 rounded-2xl bg-lime-400 text-zinc-950 font-black flex items-center justify-center text-xs shrink-0 mt-0.5 shadow">
                  <Bot className="w-4 h-4" />
                </div>
              )}

              <div
                className={`max-w-[80%] p-3.5 rounded-3xl text-xs leading-relaxed ${
                  m.role === 'user'
                    ? 'bg-lime-400 text-zinc-950 font-extrabold rounded-tr-none'
                    : 'bg-zinc-900 border border-zinc-800 text-zinc-200 font-medium rounded-tl-none whitespace-pre-line'
                }`}
              >
                {m.text}
              </div>

              {m.role === 'user' && (
                <div className="w-8 h-8 rounded-2xl bg-zinc-800 border border-zinc-700 text-lime-400 font-black flex items-center justify-center text-xs shrink-0 mt-0.5">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}

          {loading && (
            <div className="flex items-center gap-2 text-xs text-lime-400 p-3 rounded-2xl bg-zinc-900 border border-zinc-800 w-fit font-bold">
              <Loader2 className="w-4 h-4 animate-spin text-lime-400" />
              <span>S.K. AI Coach is crafting your response...</span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick Sample Prompts */}
        {messages.length < 3 && (
          <div className="px-4 py-2.5 bg-zinc-900/80 border-t border-zinc-800 overflow-x-auto whitespace-nowrap flex gap-2 text-[11px]">
            {samplePrompts.map((prompt, i) => (
              <button
                key={i}
                onClick={() => handleSendMessage(prompt)}
                className="px-3 py-1.5 rounded-full bg-zinc-950 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-lime-400 font-bold transition-all"
              >
                💡 {prompt}
              </button>
            ))}
          </div>
        )}

        {/* Input Bar */}
        <div className="p-3 bg-zinc-900 border-t border-zinc-800 flex items-center gap-2">
          <input
            type="text"
            placeholder="Ask about workouts, diet, timings, or HIIT classes..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage('')}
            className="flex-1 px-4 py-3 rounded-full bg-zinc-950 border border-zinc-800 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-lime-400"
          />
          <button
            onClick={() => handleSendMessage('')}
            disabled={!input.trim() || loading}
            className="p-3 rounded-full bg-lime-400 hover:bg-lime-300 text-zinc-950 font-black disabled:opacity-50 transition-colors shrink-0"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

