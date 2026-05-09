import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Send, Check, AlertCircle } from 'lucide-react';
import { supabase, isSupabaseConfigured } from '../lib/supabase';

type Status = 'idle' | 'sending' | 'sent' | 'error';

export function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!isSupabaseConfigured || !supabase) {
      setStatus('error');
      setErrorMsg(
        'Form is not connected yet — Supabase keys missing. See README for setup.'
      );
      return;
    }

    setStatus('sending');
    const { error } = await supabase
      .from('messages')
      .insert([{ name, email, message }]);

    if (error) {
      setStatus('error');
      setErrorMsg(error.message);
      return;
    }

    setStatus('sent');
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="w-full max-w-2xl mx-auto rounded-2xl border border-primary/10 bg-[#0a0a0a] p-6 sm:p-8 md:p-10"
    >
      <p className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-primary/50 mb-6 text-center">
        Send a message
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <Field
          id="name"
          label="Your name"
          value={name}
          onChange={setName}
          required
          autoComplete="name"
        />
        <Field
          id="email"
          label="Email"
          type="email"
          value={email}
          onChange={setEmail}
          required
          autoComplete="email"
        />
      </div>

      <label htmlFor="message" className="sr-only">
        Message
      </label>
      <textarea
        id="message"
        required
        rows={5}
        placeholder="What would you like to talk about?"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full bg-[#050505] border border-primary/10 hover:border-primary/30 focus:border-primary/50 focus:outline-none rounded-xl px-4 py-3 text-sm text-primary placeholder:text-primary/30 resize-none transition-colors duration-300 mb-5"
      />

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="group inline-flex items-center justify-center gap-2 hover:gap-3 bg-primary text-black rounded-full px-6 py-2.5 font-medium text-sm transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed self-start"
        >
          <span>
            {status === 'sending'
              ? 'Sending…'
              : status === 'sent'
              ? 'Sent — thank you'
              : 'Send'}
          </span>
          {status === 'sent' ? (
            <Check size={16} />
          ) : (
            <Send size={14} className="transition-transform group-hover:translate-x-0.5" />
          )}
        </button>

        <Status status={status} errorMsg={errorMsg} />
      </div>
    </motion.form>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  type = 'text',
  required,
  autoComplete,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-[10px] uppercase tracking-[0.25em] text-primary/50 mb-2"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        autoComplete={autoComplete}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-[#050505] border border-primary/10 hover:border-primary/30 focus:border-primary/50 focus:outline-none rounded-xl px-4 py-3 text-sm text-primary placeholder:text-primary/30 transition-colors duration-300"
      />
    </div>
  );
}

function Status({ status, errorMsg }: { status: Status; errorMsg: string }) {
  if (status === 'idle' || status === 'sending') return null;
  if (status === 'sent') {
    return (
      <p className="text-xs sm:text-sm text-primary/60 inline-flex items-center gap-2">
        <Check size={14} className="text-primary" />
        I&apos;ll write back soon.
      </p>
    );
  }
  return (
    <p className="text-xs sm:text-sm text-red-400/80 inline-flex items-center gap-2">
      <AlertCircle size={14} />
      {errorMsg}
    </p>
  );
}
