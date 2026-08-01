import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, X, Sparkles, User, RefreshCw } from 'lucide-react';

const GEMINI_API_KEY = 'AIzaSyAm-EQ7-ZYjnP9JYvXosX7p-ptQIu05s_I';

const API_ENDPOINTS = [
  `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${GEMINI_API_KEY}`,
  `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`,
  `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`
];

const SYSTEM_PROMPT = `
You are "Ask Bhargavi AI", an elite AI advocate speaking on behalf of Bhargavi Bathini—an exceptionally talented AI & Machine Learning Enthusiast, SDE, and production AI engineer.

CRITICAL INSTRUCTIONS FOR WINNING OVER RECRUITERS & HIRING MANAGERS:
1. **Advocate Persona**: Speak with confidence, clarity, and technical mastery on behalf of Bhargavi. NEVER mention "Hiring Manager" or "Evaluation". Instead, present her achievements so persuasively that hiring managers feel 100% confident she is an absolute must-hire candidate!
2. **Strict Word Limit**: EVERY RESPONSE MUST BE STRICTLY UNDER 110 WORDS MAX. Concise, crisp, and high-impact.
3. **Refine & Synthesize**: Do NOT copy-paste raw resume text word-for-word. Express her engineering contributions, latency cuts, architectural depth, and leadership in refined, articulate phrasing.
4. **Topic Relevance**: Directly address the exact topic asked (Projects, Viswam.AI Internship, Leadership, Hackathons, Education, or Why Hire).

BHARGAVI BATHINI VERIFIED KNOWLEDGE BASE:
- **Academic Record**: B.Tech in IT @ VNRVJIET (2023-2027) — CGPA: 9.25 / 10.0. Intermediate: 98.9%, SSC: 10.0 CGPA.
- **Top Selective Honors**: Amazon ML Summer School Mentee (Top 2.23% selection rate nationwide out of 1.34 Lakh applicants); AWS AI & ML Global Scholar; VJ Hackathon Rank #20 / 5,118 Teams Nationwide & Best Girls Team Winner.
- **Industry Experience (Viswam.AI - AI Developer Intern)**: Optimized Telugu LLM, NLU & ASR data pipelines reducing preprocessing latency by 40%. Engineered Pinecone Vector DB semantic search boosting query response by 20% & doubling daily doc capacity. Improved sentiment transformer F1-score by +4%.
- **Key Architectures & Projects**: Catalyst AI (Enterprise LangGraph Multi-Agent Decision Intelligence Platform); Hyperbolic Deep Neural Networks (PyTorch DenseNet121 + Lorentz model hyperbolic embeddings for X-rays, boosting AUROC to 0.7627); Vibe Navigator (Next.js + Gemini LLM RAG engine, 80% personalization gain); Finance Agent (FinGPT + Plaid API + AES-256); Multilingual Dubbing (Whisper ASR & NLLB-200 across 200+ languages).
- **Leadership & Community**: Technical Team Lead & Doc Head @ ISTE VNRVJIET (mentored 200+ engineering students); Google Women Techmakers Member; Microsoft Code Without Barriers Mentee; Codess Cafe Mentee; SheFi Scholar.
- **Cloud & Problem Solving**: Google Cloud Skills Boost Leader (10+ badges, 9,000+ points); 2x GSSoC Open Source Contributor; 200+ LeetCode problems solved.
`;

// Clean markdown renderer
function renderFormattedMessage(text) {
  const lines = text.split('\n');
  return lines.map((line, idx) => {
    if (!line.trim()) return <div key={idx} className="h-1" />;

    const isBullet = line.trim().startsWith('-') || line.trim().startsWith('*') || line.trim().startsWith('•');
    const cleanContent = isBullet ? line.trim().replace(/^[-*•.]+\s*/, '') : line;

    // Parse **bold** tags
    const parts = cleanContent.split(/(\*\*.*?\*\*)/g);
    const formattedParts = parts.map((part, pIdx) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={pIdx} className="font-bold text-white">{part.slice(2, -2)}</strong>;
      }
      return part;
    });

    if (line.startsWith('#')) {
      return (
        <p key={idx} className="font-bold text-white text-xs sm:text-sm my-1 text-netflixRed">
          {formattedParts}
        </p>
      );
    }

    if (isBullet) {
      return (
        <div key={idx} className="flex items-start gap-2 my-1 pl-1">
          <span className="text-netflixRed font-bold shrink-0">•</span>
          <span className="leading-snug">{formattedParts}</span>
        </div>
      );
    }

    return <p key={idx} className="my-1 leading-snug">{formattedParts}</p>;
  });
}

// Smart Fallback Engine (Strictly under 110 words, polished pitch without hiring manager labels)
function getSmartFallbackAnswer(query) {
  const q = query.toLowerCase();
  
  // Leadership & Mentorship
  if (q.includes('leadership') || q.includes('mentor') || q.includes('lead') || q.includes('community') || q.includes('iste') || q.includes('wtm')) {
    return `### 👥 Technical Leadership & Mentorship:
Bhargavi combines technical depth with strong engineering leadership. As **Technical Team Lead at ISTE VNRVJIET**, she actively mentored **200+ engineering students** across national hackathons and technical documentation. 

Selected into prestigious communities like **Google Women Techmakers**, **Microsoft Code Without Barriers**, and **SheFi Scholar**, she consistently fosters collaborative problem-solving and drives technical excellence within engineering teams.`;
  }

  // Activities & Hackathons
  if (q.includes('activity') || q.includes('activities') || q.includes('hackathon') || q.includes('workshop') || q.includes('contest')) {
    return `### 🏆 Hackathons & High-Impact Contests:
Bhargavi excels under tight execution deadlines. She achieved **Rank #20 nationwide among 5,118 competing teams** (winning Best Girls Team) in the VJ Hackathon for building *Wealth Navigator*.

Her hackathon track record spans building ML-powered agricultural diagnosis for the Google Solution Challenge (*Crop Care*), real-time emergency platforms (*Blood Bank*), and IoT-AI ambulance traffic prioritization (*Build & Break*).`;
  }

  // Experience / Internship
  if (q.includes('viswam') || q.includes('intern') || q.includes('experience') || q.includes('work') || q.includes('job')) {
    return `### 💼 Viswam.AI Internship Impact:
At **Viswam.AI**, Bhargavi engineered scalable, high-throughput production AI solutions:
• **40% Latency Cut**: Optimized Telugu LLM, NLU, and ASR data preprocessing pipelines.
• **20% Retrieval Boost**: Engineered **Pinecone Vector DB** semantic search, doubling daily document processing capacity.
• **+4% F1-Score Gain**: Fine-tuned specialized multilingual transformer models for production sentiment accuracy.`;
  }

  // Projects
  if (q.includes('project') || q.includes('catalyst') || q.includes('hyperbolic') || q.includes('rag') || q.includes('vibe') || q.includes('agent')) {
    return `### 🚀 Production AI Architectures & Projects:
Bhargavi architects cutting-edge, production-ready AI systems:
• **Catalyst AI**: Enterprise multi-agent decision intelligence platform orchestrated using **LangGraph & Vector DBs**.
• **Hyperbolic DNNs**: PyTorch chest X-ray classifier using **Lorentz space embeddings**, boosting AUROC to **0.7627**.
• **Vibe Navigator**: Travel discovery engine using **Next.js & Gemini LLM RAG** (**80%** personalization gain).
• **Multilingual Dubbing**: Translates & synchronizes audio/video across 200+ languages using Whisper ASR and NLLB-200.`;
  }

  // Achievements
  if (q.includes('achievement') || q.includes('honor') || q.includes('rank') || q.includes('award') || q.includes('amazon') || q.includes('gcp')) {
    return `### 🥇 Selectivity & Technical Rigor:
• **Amazon ML Summer School**: Selected in **Top 2.23%** nationwide (selected among 3,000 top candidates from 1,34,421 applicants).
• **AWS AI & ML Scholar**: Global merit cohort recipient.
• **Google Cloud Skills Boost Leader**: Earned **10+ Skill Badges** & **9,000+ points** in cloud architecture labs.
• **2x GSSoC Open Source Contributor** & **200+ LeetCode problems** solved with optimal space/time complexity.`;
  }

  // Contact / Quick Answers
  if (q.includes('email') || q.includes('contact') || q.includes('phone') || q.includes('reach') || q.includes('linkedin')) {
    return `Bhargavi is actively available for SDE and AI/ML opportunities. Reach out directly via email at **bathinibhargavi2904@gmail.com**, phone at **+91 9014246475**, or connect via [LinkedIn](https://www.linkedin.com/in/bhargavibathini/) and [GitHub](https://github.com/BhargaviBathini).`;
  }

  if (q.includes('cgpa') || q.includes('gpa') || q.includes('grade') || q.includes('education') || q.includes('college')) {
    return `Bhargavi maintains exceptional academic consistency: **9.25 / 10.0 CGPA** in B.Tech IT at VNRVJIET, Hyderabad, **98.9%** in Intermediate (SR Junior College), and a perfect **10.0 CGPA** in Class X SSC.`;
  }

  // Hiring Pitch
  if (q.includes('hire') || q.includes('why') || q.includes('choose') || q.includes('candidate') || q.includes('about')) {
    return `### 🌟 Executive Pitch — Why Bhargavi is a Guaranteed Hire:
1. **Proven Selectivity**: Top 2.23% candidate in Amazon ML Summer School (out of 1.34L applicants).
2. **Production Impact**: Cut LLM data latency by **40%** & doubled doc capacity with Pinecone Vector DB at Viswam.AI.
3. **Advanced AI Stack**: Expertise in Agentic AI (**LangGraph**), RAG, PyTorch, Hyperbolic Neural Nets, and Full-Stack SDE.
4. **Academic & Leadership Excellence**: **9.25 CGPA** @ VNRVJIET while mentoring 200+ engineering learners as ISTE Tech Lead.`;
  }

  return `Bhargavi Bathini is an AI/ML Enthusiast & SDE with a **9.25 CGPA** @ VNRVJIET, an **Amazon ML Summer School Mentee (Top 2.23%)**, and verified production internship impact at **Viswam.AI** (40% LLM latency reduction). She excels in **Agentic AI (LangGraph), RAG, PyTorch, and Full-Stack SDE**.`;
}

export const AskBhargaviAI = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: "Hello! I am **Ask Bhargavi AI** 🤖✨. Ask me about Bhargavi's AI/ML projects, Viswam.AI internship impact, leadership, hackathons, or why she'd be an exceptional candidate for your engineering team!"
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const suggestedQuestions = [
    "Why should I hire Bhargavi?",
    "Tell me about her AI/ML & RAG projects",
    "What leadership roles has she held?",
    "What are her key achievements & hackathons?"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async (textToSend) => {
    const query = textToSend || input;
    if (!query.trim() || loading) return;

    const userMessage = { sender: 'user', text: query };
    setMessages(prev => [...prev, userMessage]);
    if (!textToSend) setInput('');
    setLoading(true);

    let botResponseText = null;

    // Call Gemini API
    for (const endpoint of API_ENDPOINTS) {
      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-goog-api-key': GEMINI_API_KEY
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  { text: `${SYSTEM_PROMPT}\n\nRecruiter Question: ${query}\n\nProvide an articulate, highly persuasive response STRICTLY UNDER 100 WORDS speaking on behalf of Bhargavi that directly answers the question:` }
                ]
              }
            ]
          })
        });

        if (response.ok) {
          const data = await response.json();
          const candidateText = data.candidates?.[0]?.content?.parts?.[0]?.text;
          if (candidateText && candidateText.trim().length > 0) {
            botResponseText = candidateText;
            break;
          }
        }
      } catch (err) {
        console.warn('Gemini API fetch error:', err);
      }
    }

    if (!botResponseText) {
      botResponseText = getSmartFallbackAnswer(query);
    }

    setMessages(prev => [...prev, { sender: 'bot', text: botResponseText }]);
    setLoading(false);
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <div className="fixed bottom-6 left-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group relative flex items-center gap-2.5 px-5 py-3 rounded-full bg-netflixRed hover:bg-netflixDarkRed text-white font-bold text-xs sm:text-sm shadow-netflix-red transition-all transform hover:scale-105 border border-white/20"
        >
          <div className="relative">
            <Bot className="w-5 h-5 animate-bounce text-white" />
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          </div>
          <span>Ask Bhargavi AI</span>
        </button>
      </div>

      {/* Chat Drawer Window */}
      {isOpen && (
        <div className="fixed inset-0 sm:inset-auto sm:bottom-20 sm:left-6 z-50 w-full sm:w-[430px] h-full sm:h-[600px] bg-netflixGray/95 border border-white/20 rounded-none sm:rounded-3xl shadow-2xl backdrop-blur-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          
          {/* Drawer Header */}
          <div className="p-4 bg-gradient-to-r from-netflixRed via-netflixDarkRed to-black border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-netflixRed text-white flex items-center justify-center font-bold shadow-md border border-white/30">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-base font-display font-bold text-white flex items-center gap-1.5">
                  Ask Bhargavi AI <Sparkles className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
                </h3>
                <p className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Bhargavi's AI Assistant
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-full hover:bg-white/20 text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 scrollbar-thin">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'bot' && (
                  <div className="w-7 h-7 rounded-full bg-netflixRed text-white flex items-center justify-center shrink-0 text-xs mt-1 border border-white/30">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                )}

                <div
                  className={`max-w-[86%] p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-netflixRed text-white rounded-br-none shadow-netflix-red font-medium'
                      : 'bg-black/80 text-slate-200 border border-white/15 rounded-bl-none shadow-md'
                  }`}
                >
                  {renderFormattedMessage(msg.text)}
                </div>

                {msg.sender === 'user' && (
                  <div className="w-7 h-7 rounded-full bg-white/20 text-white flex items-center justify-center shrink-0 text-xs mt-1">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}

            {loading && (
              <div className="flex items-center gap-2 text-xs font-mono text-slate-300 p-2">
                <RefreshCw className="w-4 h-4 text-netflixRed animate-spin" />
                <span>Bhargavi AI is analyzing and formulating response...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Question Chips */}
          <div className="px-4 py-2 bg-black/40 border-t border-white/10 flex gap-1.5 overflow-x-auto scrollbar-none">
            {suggestedQuestions.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(q)}
                className="px-2.5 py-1 rounded-full text-[11px] font-mono font-medium bg-white/10 hover:bg-netflixRed text-slate-200 hover:text-white whitespace-nowrap transition-all border border-white/10"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Chat Input Bar */}
          <form
            onSubmit={(e) => { e.preventDefault(); handleSend(); }}
            className="p-3 bg-netflixVoid border-t border-white/10 flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything about Bhargavi..."
              className="flex-1 px-4 py-2.5 rounded-xl bg-black/70 border border-white/15 text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-netflixRed"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="p-2.5 rounded-xl bg-netflixRed hover:bg-netflixDarkRed disabled:opacity-50 text-white transition-all shadow-netflix-red"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>
      )}
    </>
  );
};
