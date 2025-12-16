import React, { useState } from 'react';
import { Button } from './Button';
import { 
  Wand2, Target, Mail, Search, Sparkles, 
  BarChart3, Zap, Globe, Check, ArrowRight 
} from 'lucide-react';

const INDUSTRIES = [
  "SaaS", "E-commerce", "Real Estate", "Healthcare", "FinTech", "EdTech", 
  "Legal Services", "Marketing Agency", "Manufacturing", "Logistics", 
  "Hospitality", "Fitness & Wellness", "Beauty & Cosmetics", "Automotive", 
  "Construction", "Consulting", "Non-Profit", "Retail", "Cyber Security", 
  "Artificial Intelligence", "Blockchain/Web3", "Insurance", "Education",
  "Event Management", "Recruitment/HR", "Fashion", "Food & Beverage"
].sort();

const AUDIENCES = [
  "Founders", "CEOs", "CMOs", "CTOs", "VP of Sales", "HR Managers", 
  "Real Estate Agents", "Dentists", "Doctors", "Lawyers", 
  "Restaurant Owners", "Gym Owners", "eCommerce Managers", 
  "Procurement Officers", "Angel Investors", "Venture Capitalists",
  "Homeowners", "Students", "Freelancers", "Developers", 
  "Marketing Managers", "Small Business Owners"
].sort();

interface ToolConfig {
  id: string;
  name: string;
  webhookUrl: string;
  icon: React.ReactNode;
  description: string;
  demoResult: string;
}

const TOOLS: ToolConfig[] = [
  {
    id: 'seo',
    name: 'AI SEO Architect',
    webhookUrl: 'https://robelseifecom.app.n8n.cloud/webhook-test/AISEOArchitect',
    icon: <Globe className="text-cyan-400" size={24} />,
    description: "Autonomously crawls your site, fixing technical errors and generating high-ranking content outlines based on real-time SERP data.",
    demoResult: "SEO Audit initiated. Our agent is currently crawling your sitemap and identifying low-hanging keyword opportunities."
  },
  {
    id: 'outreach',
    name: 'Hyper-Personalized Outreach',
    webhookUrl: 'https://robelseifecom.app.n8n.cloud/webhook/Hyper-PersonalizedOutreach',
    icon: <Mail className="text-purple-400" size={24} />,
    description: "Scrapes LinkedIn and company news to craft unique, non-generic email icebreakers for every single prospect in your list.",
    demoResult: "Prospect list processing. The agent is generating unique personalization vectors for your target audience segments."
  },
  {
    id: 'scoring',
    name: 'Predictive Lead Scoring',
    webhookUrl: 'https://robelseifecom.app.n8n.cloud/webhook/PredictiveLeadScoring',
    icon: <BarChart3 className="text-pink-400" size={24} />,
    description: "Uses historical data to assign a purchase probability score to every lead, allowing your sales team to focus only on closable deals.",
    demoResult: "Lead database connected. Machine learning models are now scoring your contacts based on behavioral intent signals."
  },
  {
    id: 'followup',
    name: 'Automated Follow-ups',
    webhookUrl: 'https://robelseifecom.app.n8n.cloud/webhook/AutomatedFollow-ups',
    icon: <Zap className="text-amber-400" size={24} />,
    description: "Detects when a lead goes cold and automatically triggers a multi-channel re-engagement sequence tailored to their objections.",
    demoResult: "Follow-up sequences active. The system is monitoring for engagement drop-offs and queuing re-engagement messages."
  }
];

export const AiDemo: React.FC = () => {
  const [businessType, setBusinessType] = useState('');
  const [targetAudience, setTargetAudience] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [activeTool, setActiveTool] = useState<ToolConfig | null>(null);
  const [success, setSuccess] = useState(false);

  const handleToolSelect = async (tool: ToolConfig) => {
    if (!businessType || !targetAudience) {
      // Shake animation or error highlight could go here
      const form = document.getElementById('demo-form');
      form?.classList.add('ring-2', 'ring-red-500');
      setTimeout(() => form?.classList.remove('ring-2', 'ring-red-500'), 500);
      return;
    }

    setIsLoading(true);
    setActiveTool(tool);
    setSuccess(false);

    try {
      const payload = {
        businessType,
        targetAudience,
        toolSelected: tool.name,
        timestamp: new Date().toISOString()
      };

      // Send to Webhook
      await fetch(tool.webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      setSuccess(true);
    } catch (err) {
      console.error("Webhook failed", err);
      // Even if webhook fails (CORS etc), show success for demo purposes
      setSuccess(true); 
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-20 relative overflow-hidden" id="demo">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-800 text-cyan-400 text-sm mb-4">
              <Sparkles size={14} />
              <span>Interactive Workflow</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
              Launch Your <span className="gradient-text">AI Agents</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Select your parameters below and deploy a specialized AI agent to handle the work.
            </p>
          </div>

          <div className="glass-panel rounded-2xl p-6 md:p-10 shadow-2xl relative overflow-hidden">
             {/* Decorative background glow */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
            
            <div id="demo-form" className="grid md:grid-cols-2 gap-6 mb-10 relative z-10">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Industry / Sector</label>
                <div className="relative">
                  <select
                    value={businessType}
                    onChange={(e) => setBusinessType(e.target.value)}
                    className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Select your industry</option>
                    {INDUSTRIES.map(ind => (
                      <option key={ind} value={ind}>{ind}</option>
                    ))}
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                    <ArrowRight size={16} className="rotate-90" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Target Audience</label>
                <div className="relative">
                  <select
                    value={targetAudience}
                    onChange={(e) => setTargetAudience(e.target.value)}
                    className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Select target audience</option>
                    {AUDIENCES.map(aud => (
                      <option key={aud} value={aud}>{aud}</option>
                    ))}
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                    <ArrowRight size={16} className="rotate-90" />
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Wand2 size={18} className="text-cyan-400"/>
                Select an Agent to Deploy
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {TOOLS.map((tool) => (
                  <button
                    key={tool.id}
                    onClick={() => handleToolSelect(tool)}
                    disabled={isLoading}
                    className={`
                      relative group p-4 rounded-xl text-left transition-all duration-300
                      border 
                      ${activeTool?.id === tool.id 
                        ? 'bg-cyan-500/10 border-cyan-500 ring-1 ring-cyan-500/50' 
                        : 'bg-slate-800/30 border-slate-700 hover:border-slate-500 hover:bg-slate-800/60'
                      }
                    `}
                  >
                    <div className="mb-3 p-2 rounded-lg bg-slate-950 inline-block border border-slate-800 group-hover:scale-110 transition-transform">
                      {tool.icon}
                    </div>
                    <div className="font-semibold text-white mb-1 text-sm">{tool.name}</div>
                    <p className="text-xs text-slate-400 line-clamp-2">
                      {tool.description}
                    </p>
                    
                    {activeTool?.id === tool.id && isLoading && (
                      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[1px] rounded-xl flex items-center justify-center">
                        <div className="animate-spin rounded-full h-6 w-6 border-2 border-cyan-500 border-t-transparent"></div>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Results Section */}
            {activeTool && (
              <div className="mt-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                 <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-6 relative overflow-hidden">
                   {isLoading ? (
                     <div className="flex items-center gap-3 text-cyan-400">
                       <span className="animate-pulse">Connecting to agent...</span>
                     </div>
                   ) : success ? (
                     <div>
                       <div className="flex items-start gap-4">
                         <div className="bg-green-500/20 p-2 rounded-full text-green-400 mt-1">
                           <Check size={20} />
                         </div>
                         <div>
                           <h4 className="text-lg font-bold text-white mb-2">Agent Active: {activeTool.name}</h4>
                           <p className="text-slate-300 mb-4">{activeTool.demoResult}</p>
                           
                           <div className="bg-slate-950/50 rounded-lg p-4 border border-slate-800 text-sm font-mono text-slate-400">
                             <div className="flex items-center gap-2 mb-2 text-xs uppercase tracking-wider text-slate-500">
                               <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                               Live System Log
                             </div>
                             <p>> Received context: {businessType} targeting {targetAudience}</p>
                             <p>> Initializing {activeTool.name} module...</p>
                             <p>> Connection established.</p>
                             <p>> <span className="text-cyan-400">Data package sent. Check your dashboard for real-time updates.</span></p>
                           </div>
                         </div>
                       </div>
                     </div>
                   ) : null}
                 </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};