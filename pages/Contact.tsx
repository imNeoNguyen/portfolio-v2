
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormState({ name: '', email: '', message: '' });
  };

  const socials = [
    { name: 'GitHub', icon: 'M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.165 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12c0-5.523-4.477-10-10-10z' },
    { name: 'LinkedIn', icon: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' },
    { name: 'Behance', icon: 'M22 11.023h-5.46v1.171h5.46v-1.171zm-13.841-.303c1.232 0 2.232-.39 2.232-1.45 0-1.174-.954-1.472-2.129-1.472h-3.411v2.922h3.308zm.134 4.502c1.474 0 2.662-.494 2.662-1.714 0-1.144-.897-1.637-2.247-1.637h-3.858v3.351h3.443zm4.613-2.072c-.156-3.664-2.822-5.006-5.594-5.006h-7.312v10h7.334c3.42 0 5.864-1.755 5.572-4.994zm9.325.26c-.053-2.895-2.046-5.11-5.18-5.11-3.21 0-5.26 2.37-5.26 5.213 0 2.802 1.956 5.174 5.485 5.174 2.24 0 4.144-1.024 4.904-3.003h-2.193c-.456.885-1.446 1.34-2.52 1.34-1.558 0-2.436-.913-2.593-2.274h7.362c.03-.43.036-.92.036-1.34zm-7.306-1.066c.15-1.258.986-2.223 2.257-2.223 1.18 0 2.016.89 2.11 2.223h-4.367z' }
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 pt-12">
      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">Let's build something <span className="text-amber-500">exceptional.</span></h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg mb-12 leading-relaxed">
            I'm currently open to freelance projects and full-time opportunities as a Mobile Developer or UI/UX Designer.
          </p>

          <div className="space-y-6 mb-12">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-slate-100 dark:bg-white/5 rounded-full flex items-center justify-center text-amber-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email</p>
                <p className="text-lg font-medium">imneoneonguyen@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-slate-100 dark:bg-white/5 rounded-full flex items-center justify-center text-amber-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Location</p>
                <p className="text-lg font-medium">Remote / HCMC, VN</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            {socials.map((social) => (
              <a 
                key={social.name} 
                href="#" 
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:text-amber-500 hover:border-amber-500 transition-all"
                title={social.name}
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d={social.icon} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div className="bg-slate-50 dark:bg-white/5 rounded-[2.5rem] p-8 md:p-12 border border-slate-200 dark:border-white/10">
          {submitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-500">
              <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-6">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">Message Sent!</h3>
              <p className="text-slate-500">Thanks for reaching out. I'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold uppercase tracking-widest text-slate-400 mb-2">Your Name</label>
                <input 
                  required
                  type="text" 
                  value={formState.name}
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                  className="w-full bg-white dark:bg-black border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-bold uppercase tracking-widest text-slate-400 mb-2">Email Address</label>
                <input 
                  required
                  type="email" 
                  value={formState.email}
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                  className="w-full bg-white dark:bg-black border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-bold uppercase tracking-widest text-slate-400 mb-2">Message</label>
                <textarea 
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  className="w-full bg-white dark:bg-black border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all resize-none"
                  placeholder="What's on your mind?"
                />
              </div>
              <button 
                type="submit" 
                className="w-full py-4 bg-amber-500 text-black font-bold rounded-xl hover:bg-amber-600 transition-colors shadow-lg shadow-amber-500/20"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
