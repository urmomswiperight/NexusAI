import React, { useState } from 'react';
import { LeadFormData } from '../types';
import { Button } from './Button';
import { Send, CheckCircle } from 'lucide-react';

interface ContactFormProps {
  onSuccess?: () => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({ onSuccess }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<LeadFormData>({
    fullName: '',
    email: '',
    companyName: '',
    role: '',
    marketingBudget: '',
    primaryGoal: 'SEO',
    challenges: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log("Form Submitted:", formData);
    setIsSubmitting(false);
    setIsSuccess(true);
    if (onSuccess) setTimeout(onSuccess, 2000);
  };

  if (isSuccess) {
    return (
      <div className="text-center py-12">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/10 text-green-500 mb-4">
          <CheckCircle size={32} />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Analysis Requested!</h3>
        <p className="text-slate-400">Our AI agents are already processing your request.<br/>Expect a personalized roadmap in your inbox within 24 hours.</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-medium text-slate-400">Step {step} of 2</span>
          <div className="flex gap-1">
            <div className={`h-1 w-12 rounded-full transition-colors ${step >= 1 ? 'bg-cyan-500' : 'bg-slate-700'}`} />
            <div className={`h-1 w-12 rounded-full transition-colors ${step >= 2 ? 'bg-cyan-500' : 'bg-slate-700'}`} />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-white">Let's build your growth engine</h2>
        <p className="text-slate-400 mt-1">Tell us a bit about your organization.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {step === 1 ? (
          <div className="space-y-4 animate-in slide-in-from-right-4 duration-300">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Full Name</label>
                <input
                  required
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Job Role</label>
                <input
                  required
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none"
                  placeholder="CMO, Founder..."
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Work Email</label>
              <input
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none"
                placeholder="john@company.com"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Company Name</label>
              <input
                required
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none"
                placeholder="Acme Inc."
              />
            </div>

            <Button type="button" onClick={() => setStep(2)} className="w-full mt-4">
              Next Step
            </Button>
          </div>
        ) : (
          <div className="space-y-4 animate-in slide-in-from-right-4 duration-300">
             <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Primary Goal</label>
              <select
                name="primaryGoal"
                value={formData.primaryGoal}
                onChange={handleChange}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none appearance-none"
              >
                <option value="SEO">SEO Domination</option>
                <option value="LeadGen">Lead Generation & Outreach</option>
                <option value="Both">Full Stack Growth (Both)</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Biggest Marketing Challenge</label>
              <textarea
                name="challenges"
                value={formData.challenges}
                onChange={handleChange}
                rows={3}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none resize-none"
                placeholder="e.g. Low conversion rates on cold emails..."
              />
            </div>

            <div className="flex gap-3 mt-6">
              <Button type="button" variant="secondary" onClick={() => setStep(1)} className="flex-1">
                Back
              </Button>
              <Button type="submit" isLoading={isSubmitting} className="flex-1">
                Get My Audit <Send size={16} className="ml-2" />
              </Button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};