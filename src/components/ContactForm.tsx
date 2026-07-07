import { useState } from 'react';
import { CheckCircle, AlertCircle } from 'lucide-react';
import { submitContactForm } from '../data/formservice';
import type { ContactFormData } from '../types';

const initialForm: ContactFormData = {
  name: '',
  company: '',
  email: '',
  phone: '',
  industry: '',
  requirement: '',
  message: '',
};

export default function ContactForm() {
  const [form, setForm] = useState<ContactFormData>(initialForm);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});

  function validate(): boolean {
    const e: typeof errors = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email';
    if (!form.phone.trim()) e.phone = 'Phone is required';
    if (!form.message.trim()) e.message = 'Message is required';
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    if (!validate()) return;

    setStatus('loading');
    const result = await submitContactForm(form);

    if (result.success) {
      setStatus('success');
      setForm(initialForm);
    } else {
      setStatus('error');
    }
  }

  function handleChange(
    ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = ev.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <CheckCircle className="mx-auto text-green-600 mb-4" size={48} />
        <h3 className="text-xl font-bold text-secondary mb-2">Message Sent!</h3>
        <p className="text-muted">
          Thank you for reaching out. Our team will get back to you shortly.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-4 text-primary font-semibold text-sm hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {status === 'error' && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center gap-3">
          <AlertCircle className="text-red-600 shrink-0" size={20} />
          <p className="text-sm text-red-700">Something went wrong. Please try again.</p>
        </div>
      )}

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-secondary mb-1.5">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className={`w-full px-4 py-2.5 border rounded-lg text-sm outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors ${
              errors.name ? 'border-red-400' : 'border-border'
            }`}
            placeholder="Your full name"
          />
          {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-secondary mb-1.5">Company Name</label>
          <input
            type="text"
            name="company"
            value={form.company}
            onChange={handleChange}
            className="w-full px-4 py-2.5 border border-border rounded-lg text-sm outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
            placeholder="Your company"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-secondary mb-1.5">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className={`w-full px-4 py-2.5 border rounded-lg text-sm outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors ${
              errors.email ? 'border-red-400' : 'border-border'
            }`}
            placeholder="email@company.com"
          />
          {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-secondary mb-1.5">
            Phone <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className={`w-full px-4 py-2.5 border rounded-lg text-sm outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors ${
              errors.phone ? 'border-red-400' : 'border-border'
            }`}
            placeholder="+91 XXXXX XXXXX"
          />
          {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-secondary mb-1.5">Industry</label>
          <select
            name="industry"
            value={form.industry}
            onChange={handleChange}
            className="w-full px-4 py-2.5 border border-border rounded-lg text-sm outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
          >
            <option value="">Select industry</option>
            <option value="Ceramic">Ceramic</option>
            <option value="Glass">Glass</option>
            <option value="Railway">Railway</option>
            <option value="Chemical">Chemical</option>
            <option value="Cement">Cement</option>
            <option value="Infrastructure">Infrastructure</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-secondary mb-1.5">Requirement</label>
          <select
            name="requirement"
            value={form.requirement}
            onChange={handleChange}
            className="w-full px-4 py-2.5 border border-border rounded-lg text-sm outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
          >
            <option value="">Select requirement</option>
            <option value="Design Engineering">Design Engineering</option>
            <option value="Fabrication">Fabrication</option>
            <option value="Machining">Machining</option>
            <option value="Machine Manufacturing">Machine Manufacturing</option>
            <option value="Project Execution">Project Execution</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-secondary mb-1.5">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={5}
          className={`w-full px-4 py-2.5 border rounded-lg text-sm outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none ${
            errors.message ? 'border-red-400' : 'border-border'
          }`}
          placeholder="Describe your project requirements..."
        />
        {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors disabled:opacity-60"
      >
        {status === 'loading' ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
