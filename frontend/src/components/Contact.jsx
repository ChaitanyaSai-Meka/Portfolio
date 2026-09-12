import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import { cn } from '../lib/utils';

export default function Contact() {
  const formRef = useRef(null);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setStatus(null);

    emailjs
      .sendForm(
        'service_7yymo38',
        'template_12345',
        formRef.current,
        'Nrt6aQrzDZimIGqI8'
      )
      .then(
        (result) => {
          setSending(false);
          setStatus({ type: 'success', message: 'Message sent successfully!' });
          formRef.current.reset();
        },
        (error) => {
          setSending(false);
          setStatus({ type: 'error', message: 'Something went wrong, please try again.' });
        }
      );
  };

  return (
    <section id="contact" className="relative bg-[#050505] min-h-[90vh] flex items-center justify-center py-24 px-4 overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-white/[0.03] blur-[120px] rounded-full pointer-events-none" />
      
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-2xl relative z-10"
      >
        <div className="text-center mb-12">
          <h2 className="text-5xl sm:text-7xl font-bold tracking-tighter text-white mb-4">
            Get in Touch.
          </h2>
          <p className="text-neutral-400 text-lg">
            Have an interesting project or an engineering role? Let's talk.
          </p>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2 text-left">
              <label htmlFor="name" className="text-sm text-neutral-400 ml-1">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-white/30 transition-colors"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2 text-left">
              <label htmlFor="email" className="text-sm text-neutral-400 ml-1">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-white/30 transition-colors"
                placeholder="john@example.com"
              />
            </div>
          </div>
          
          <div className="space-y-2 text-left">
            <label htmlFor="message" className="text-sm text-neutral-400 ml-1">Message</label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-white/30 transition-colors resize-none"
              placeholder="Tell me about your project..."
            />
          </div>

          <div className="flex flex-col items-center gap-4 pt-4">
            <button
              type="submit"
              disabled={sending}
              className="px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-neutral-200 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {sending ? 'Sending...' : 'Send Message'}
            </button>
            
            {status && (
              <p className={cn("text-sm", status.type === 'success' ? 'text-emerald-500' : 'text-red-500')}>
                {status.message}
              </p>
            )}
          </div>
        </form>
      </motion.div>
    </section>
  );
}