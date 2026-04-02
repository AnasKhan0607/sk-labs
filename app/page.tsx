"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#141414] text-white">
      {/* Grid background */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
      
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#141414]/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
          <span className="text-xl font-semibold tracking-tight">SK Labs</span>
          <div className="flex items-center gap-8">
            <div className="hidden md:flex items-center gap-8 text-sm tracking-wider">
              <a href="#solutions" className="text-zinc-400 hover:text-white transition-colors">SOLUTIONS</a>
              <a href="#process" className="text-zinc-400 hover:text-white transition-colors">PROCESS</a>
              <a href="#team" className="text-zinc-400 hover:text-white transition-colors">ABOUT</a>
            </div>
            <a 
              href="#contact" 
              className="relative px-5 py-2.5 border border-[#C9A66B] text-[#C9A66B] text-sm tracking-wider hover:bg-[#C9A66B] hover:text-[#141414] transition-all group"
            >
              <span className="absolute inset-0 bg-[#C9A66B]/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative">BOOK A CALL</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20 relative overflow-hidden">
        {/* Hero glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#C9A66B]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#C9A66B]/5 rounded-full blur-3xl" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl relative z-10"
        >
          <p className="text-[#C9A66B] text-sm tracking-[0.2em] mb-8 flex items-center justify-center gap-3">
            <span className="w-8 h-px bg-[#C9A66B]" />
            AI SYSTEMS FOR OPERATIONS
            <span className="w-8 h-px bg-[#C9A66B]" />
          </p>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif leading-[1.1] mb-8">
            The work your team<br />
            does manually today.<br />
            <span className="italic text-[#C9A66B]">Automated.</span>
          </h1>
          
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            We help property managers, staffing agencies, and service businesses 
            reduce admin work with custom AI tools.
          </p>

          <a 
            href="#contact" 
            className="relative inline-flex items-center gap-3 px-8 py-4 bg-[#C9A66B] text-[#141414] font-medium tracking-wider hover:bg-[#D4B87A] transition-all group"
          >
            <span className="absolute inset-0 bg-[#C9A66B] blur-2xl opacity-40 group-hover:opacity-60 transition-opacity" />
            <span className="relative">TALK TO OUR TEAM</span>
            <span className="relative">→</span>
          </a>
        </motion.div>
      </section>

      {/* Solutions */}
      <section id="solutions" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-[#C9A66B] text-sm tracking-[0.2em] mb-12 flex items-center gap-3">
              <span className="w-8 h-px bg-[#C9A66B]" />
              OUR SOLUTIONS
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  label: "To Handle Inquiries",
                  title: "AI Assistants",
                  desc: "Answer tenant questions, qualify leads, screen candidates. 24/7, in your voice, integrated with your existing systems."
                },
                {
                  label: "To Find Information",
                  title: "Document Search",
                  desc: "Search across leases, contracts, resumes, and records. Ask questions in plain English, get instant answers."
                },
                {
                  label: "To Eliminate Manual Work",
                  title: "Workflow Automation",
                  desc: "When X happens, do Y. No more copying between tools, chasing status updates, or manual data entry."
                },
                {
                  label: "To Connect Systems",
                  title: "Custom Integrations",
                  desc: "Your CRM, property software, ATS, accounting — we make them talk to each other and to AI."
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative group p-6 bg-[#1C1C1C] border border-zinc-800 hover:border-[#C9A66B]/50 transition-all"
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[#C9A66B]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute -inset-px bg-gradient-to-b from-[#C9A66B]/20 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-opacity -z-10" />
                  <div className="w-8 h-8 border border-zinc-700 flex items-center justify-center mb-6">
                    <div className="w-2 h-2 bg-[#C9A66B]" />
                  </div>
                  <p className="text-[#C9A66B] text-xs tracking-wider mb-2 italic">{item.label}</p>
                  <h3 className="text-xl font-serif mb-3">{item.title}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Problems */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative bg-[#1C1C1C] border border-zinc-800 p-12 md:p-16 shadow-2xl shadow-[#C9A66B]/5"
          >
            {/* Corner glow */}
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-[#C9A66B]/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-[#C9A66B]/5 rounded-full blur-3xl" />
          >
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="text-[#C9A66B] text-sm tracking-[0.2em] mb-6 flex items-center gap-3">
                  <span className="w-8 h-px bg-[#C9A66B]" />
                  CORE PROBLEMS
                </p>
                <h2 className="text-3xl md:text-4xl font-serif leading-tight mb-8">
                  Operations teams are stuck in manual mode.
                </h2>
                
                <div className="space-y-4">
                  {[
                    "Tenant & client communications",
                    "Candidate screening & scheduling",
                    "Document processing & search",
                    "Data entry across systems"
                  ].map((problem, i) => (
                    <div key={i} className="flex items-center gap-4 text-zinc-400 py-3 border-l-2 border-zinc-800 pl-4 hover:border-[#C9A66B] hover:text-white transition-all cursor-default">
                      <span className="text-[#C9A66B] text-sm">{String(i + 1).padStart(2, '0')}</span>
                      <span>{problem}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col justify-center">
                <p className="text-6xl font-serif text-zinc-700 mb-4">40+</p>
                <p className="text-sm tracking-[0.2em] text-zinc-500 mb-6">HOURS PER WEEK ON REPETITIVE TASKS</p>
                <p className="text-zinc-400 leading-relaxed">
                  Your team is spending half their time on work that AI can handle. 
                  Every hour on admin is an hour not spent on growth, relationships, 
                  or the work that actually matters.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-32 px-6 bg-[#0F0F0F]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-[#C9A66B] text-sm tracking-[0.2em] mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-[#C9A66B]" />
              WHO WE SERVE
            </p>
            <h2 className="text-3xl md:text-4xl font-serif mb-16">Built for operations-heavy businesses.</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Property Management",
                  items: ["Tenant communications", "Maintenance coordination", "Lease processing", "Vacancy marketing"],
                  stat: "70%",
                  statLabel: "inquiries automated"
                },
                {
                  name: "Staffing & Recruiting",
                  items: ["Candidate screening", "Interview scheduling", "Onboarding automation", "Compliance tracking"],
                  stat: "3x",
                  statLabel: "faster placement"
                },
                {
                  name: "Professional Services",
                  items: ["Client intake", "Document review", "Billing automation", "Knowledge search"],
                  stat: "10x",
                  statLabel: "faster lookup"
                },
              ].map((ind, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative group p-8 border border-zinc-800 hover:border-[#C9A66B]/30 transition-all duration-300 overflow-hidden"
                >
                  {/* Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#C9A66B]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#C9A66B]/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                >
                  <h3 className="text-xl font-serif mb-6">{ind.name}</h3>
                  <ul className="space-y-3 mb-8">
                    {ind.items.map((item, j) => (
                      <li key={j} className="text-sm text-zinc-500 flex items-center gap-3">
                        <span className="w-1 h-1 bg-[#C9A66B]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-6 border-t border-zinc-800">
                    <p className="text-3xl font-serif text-[#C9A66B]">{ind.stat}</p>
                    <p className="text-xs tracking-wider text-zinc-600 mt-1">{ind.statLabel.toUpperCase()}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-[#C9A66B] text-sm tracking-[0.2em] mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-[#C9A66B]" />
              OUR PROCESS
            </p>
            <h2 className="text-3xl md:text-4xl font-serif mb-16">How we work with you.</h2>
            
            <div className="grid md:grid-cols-3 gap-12">
              {[
                {
                  step: "01",
                  title: "Discovery",
                  desc: "30-minute call. You tell us what's broken, we tell you if AI can fix it. No pitch deck, no pressure."
                },
                {
                  step: "02",
                  title: "Proposal",
                  desc: "Fixed scope, fixed price, clear timeline. Most projects are $5k–$25k and take 2–6 weeks to deploy."
                },
                {
                  step: "03",
                  title: "Build & Deploy",
                  desc: "We build with you, not for you. Your team learns the system. You own everything we create."
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <p className="text-5xl font-serif text-zinc-800 mb-6">{item.step}</p>
                  <h3 className="text-xl font-serif mb-3">{item.title}</h3>
                  <p className="text-zinc-500 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-32 px-6 bg-[#0F0F0F] relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#C9A66B]/5 rounded-full blur-3xl" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-4xl md:text-5xl font-serif italic leading-relaxed mb-8 drop-shadow-lg">
              "They understood our business first, then built the tech. 
              Our team saves 20+ hours a week on what used to be manual work."
            </p>
            <p className="text-zinc-500">
              <span className="text-white">Operations Director</span> · Regional Property Management
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-[#C9A66B] text-sm tracking-[0.2em] mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-[#C9A66B]" />
              THE TEAM
            </p>
            <h2 className="text-3xl md:text-4xl font-serif mb-16">Who you're working with.</h2>
            
            <div className="grid md:grid-cols-2 gap-12 max-w-3xl">
              <div className="flex gap-6">
                <img 
                  src="https://avatars.githubusercontent.com/u/76663779?v=4" 
                  alt="Anas Khan"
                  className="w-20 h-20 object-cover grayscale"
                />
                <div>
                  <h3 className="text-lg font-serif mb-1">Anas Khan</h3>
                  <p className="text-[#C9A66B] text-sm mb-3">Infrastructure & AI</p>
                  <p className="text-sm text-zinc-500 leading-relaxed">
                    Builds high-scale production systems with secure data handling. Ships AI agents and automation products.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <img 
                  src="https://avatars.githubusercontent.com/u/67878058?v=4" 
                  alt="Sabih Sarowar"
                  className="w-20 h-20 object-cover grayscale"
                />
                <div>
                  <h3 className="text-lg font-serif mb-1">Sabih Sarowar</h3>
                  <p className="text-[#C9A66B] text-sm mb-3">Product & Engineering</p>
                  <p className="text-sm text-zinc-500 leading-relaxed">
                    2x founder in energy and legal tech. Product-minded engineer who knows how to integrate with client systems.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-32 px-6 border-t border-zinc-800 relative overflow-hidden">
        {/* Background glows */}
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-[#C9A66B]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-60 h-60 bg-[#C9A66B]/5 rounded-full blur-3xl" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[#C9A66B] text-sm tracking-[0.2em] mb-8 flex items-center justify-center gap-3">
              <span className="w-8 h-px bg-[#C9A66B]" />
              READY TO SEE WHAT'S POSSIBLE?
              <span className="w-8 h-px bg-[#C9A66B]" />
            </p>
            
            <h2 className="text-4xl md:text-5xl font-serif mb-6">
              Let's talk about your operations.
            </h2>
            <p className="text-xl text-zinc-500 mb-12">
              30-minute call. No pitch deck. Just tell us what's slowing you down.
            </p>
            
            <a
              href="mailto:hello@sklabs.dev"
              className="relative inline-flex items-center gap-3 px-8 py-4 bg-[#C9A66B] text-[#141414] font-medium tracking-wider hover:bg-[#D4B87A] transition-all group"
            >
              <span className="absolute inset-0 bg-[#C9A66B] blur-2xl opacity-40 group-hover:opacity-60 transition-opacity" />
              <span className="relative">BOOK A CALL</span>
              <span className="relative">→</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-zinc-800">
        <div className="max-w-6xl mx-auto flex justify-between items-center text-sm text-zinc-600">
          <span>SK Labs</span>
          <span>Toronto, Canada</span>
        </div>
      </footer>
    </main>
  );
}
