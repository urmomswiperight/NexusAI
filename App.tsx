import React, { useState } from 'react';
import { 
  Bot, 
  BarChart3, 
  Mail, 
  Globe, 
  Zap, 
  Check, 
  ArrowRight,
  Menu,
  X,
  Linkedin,
  Twitter,
  Github,
  Cpu
} from 'lucide-react';
import { Button } from './components/Button';
import { AiDemo } from './components/AiDemo';
import { Modal } from './components/Modal';
import { ContactForm } from './components/ContactForm';

const features = [
  {
    icon: <Globe className="text-cyan-400" size={32} />,
    title: "AI SEO Architect",
    description: "Our proprietary AI analyzes 200+ ranking factors on WordPress sites to auto-optimize meta tags, content structure, and internal linking in real-time."
  },
  {
    icon: <Mail className="text-purple-400" size={32} />,
    title: "Hyper-Personalized Outreach",
    description: "Move beyond templates. Our system scrapes prospect data to generate unique, context-aware email sequences that get 3x higher reply rates."
  },
  {
    icon: <BarChart3 className="text-pink-400" size={32} />,
    title: "Predictive Lead Scoring",
    description: "Stop wasting time on bad leads. Our ML models score every interaction to bubble up the prospects most likely to convert today."
  },
  {
    icon: <Zap className="text-amber-400" size={32} />,
    title: "Automated Follow-ups",
    description: "Intelligent nurture sequences that adapt based on recipient behavior, ensuring you never miss a follow-up opportunity."
  }
];

const testimonials = [
  {
    quote: "NexusAI completely revolutionized our outbound strategy. We went from booking 5 meetings a month to 40+ on autopilot.",
    author: "Sarah Chen",
    role: "VP of Sales, TechFlow",
    image: "https://picsum.photos/100/100?random=1"
  },
  {
    quote: "The SEO automation for our WordPress blog is magic. Traffic increased by 210% in just 3 months without writing extra content.",
    author: "Marcus Rodriguez",
    role: "Founder, GrowthLab",
    image: "https://picsum.photos/100/100?random=2"
  }
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 glass-panel border-b border-slate-800/50">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-tr from-cyan-500 to-blue-600 p-2 rounded-lg">
              <Cpu size={24} className="text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight">Nexus<span className="text-cyan-400">AI</span></span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Solutions</a>
            <a href="#demo" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">AI Demo</a>
            <a href="#testimonials" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Results</a>
            <Button size="sm" onClick={() => setIsModalOpen(true)}>Get Started</Button>
          </div>

          <button className="md:hidden text-slate-300" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-30 bg-slate-950 pt-24 px-6 md:hidden">
          <div className="flex flex-col gap-6 text-center">
            <a href="#features" className="text-lg text-slate-300" onClick={() => setIsMenuOpen(false)}>Solutions</a>
            <a href="#demo" className="text-lg text-slate-300" onClick={() => setIsMenuOpen(false)}>AI Demo</a>
            <a href="#testimonials" className="text-lg text-slate-300" onClick={() => setIsMenuOpen(false)}>Results</a>
            <Button onClick={() => { setIsMenuOpen(false); setIsModalOpen(true); }}>Get Started</Button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <header className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-cyan-900/20 via-slate-950/0 to-slate-950 pointer-events-none" />
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-sm font-medium mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Bot size={16} className="text-cyan-400" />
            <span>Next-Gen Agency Platform 2.0 is here</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
            Scale your revenue with <br/>
            <span className="gradient-text">Autonomous AI Marketing</span>
          </h1>
          
          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200">
            NexusAI replaces manual grunt work with intelligent agents. 
            Automate your WordPress SEO and deploy hyper-personalized email campaigns that actually convert.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300">
            <Button size="lg" onClick={() => setIsModalOpen(true)}>
              Start Your Growth Engine
            </Button>
            <Button size="lg" variant="outline" onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth'})}>
              Try Live Demo
            </Button>
          </div>

          {/* Social Proof Logos */}
          <div className="mt-16 pt-8 border-t border-slate-800/50 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <p className="text-sm text-slate-500 mb-6 uppercase tracking-wider">Trusted by innovative teams at</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center">
              {['Acme Corp', 'GlobalTech', 'Nebula', 'Velocity', 'Trio'].map((brand) => (
                <span key={brand} className="text-lg font-bold text-slate-400">{brand}</span>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-24 bg-slate-950 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Complete Marketing Autonomy</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Our integrated SaaS platform handles the technical heavy lifting so you can focus on strategy and closing deals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="group p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300">
                <div className="mb-6 inline-block p-3 rounded-lg bg-slate-950 border border-slate-800 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-slate-100 group-hover:text-cyan-400 transition-colors">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive AI Demo */}
      <AiDemo />

      {/* Testimonials */}
      <section id="testimonials" className="py-24 bg-slate-900/30 border-y border-slate-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">Don't just take our word for it</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="p-8 rounded-2xl bg-slate-950 border border-slate-800 relative">
                <div className="absolute top-8 left-8 text-6xl text-slate-800 font-serif leading-none">"</div>
                <p className="text-lg text-slate-300 mb-8 relative z-10 pt-4 leading-relaxed">{t.quote}</p>
                <div className="flex items-center gap-4">
                  <img src={t.image} alt={t.author} className="w-12 h-12 rounded-full ring-2 ring-slate-800" />
                  <div>
                    <div className="font-bold text-white">{t.author}</div>
                    <div className="text-sm text-slate-500">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-cyan-600/5" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">Ready to automate your success?</h2>
          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
            Join 500+ forward-thinking agencies and businesses using NexusAI to dominate their market.
          </p>
          <div className="flex justify-center">
             <Button size="lg" className="px-12 py-4 text-xl" onClick={() => setIsModalOpen(true)}>
               Start Free Analysis <ArrowRight className="ml-2" />
             </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 pt-16 pb-8">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-cyan-600 p-1.5 rounded">
                  <Cpu size={20} className="text-white" />
                </div>
                <span className="text-xl font-bold text-white">NexusAI</span>
              </div>
              <p className="text-slate-400 max-w-sm">
                Empowering businesses with autonomous marketing agents. The future of growth is automated.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Platform</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">SEO Automation</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Email Intelligence</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Lead Scoring</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Integrations</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Case Studies</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">© 2024 NexusAI Marketing. All rights reserved.</p>
            <div className="flex gap-4 text-slate-400">
              <Linkedin size={20} className="hover:text-white cursor-pointer" />
              <Twitter size={20} className="hover:text-white cursor-pointer" />
              <Github size={20} className="hover:text-white cursor-pointer" />
            </div>
          </div>
        </div>
      </footer>

      {/* Modal Form */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ContactForm onSuccess={() => setIsModalOpen(false)} />
      </Modal>
    </div>
  );
}

export default App;