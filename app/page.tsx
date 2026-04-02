"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// Floating gradient orbs for visual interest
const FloatingOrb = ({ className, delay = 0 }: { className: string; delay?: number }) => (
  <motion.div
    className={`absolute rounded-full blur-3xl opacity-30 ${className}`}
    animate={{
      y: [0, -30, 0],
      x: [0, 15, 0],
      scale: [1, 1.1, 1],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      delay,
      ease: "easeInOut",
    }}
  />
);

const faqs = [
  {
    q: "How is SK Labs different from a typical dev shop?",
    a: "We're not offshore contractors churning out mediocre code. We're two senior engineers who've built and scaled systems at enterprise companies. We use AI to move faster, but the architecture and quality is what you'd expect from a top-tier in-house team."
  },
  {
    q: "What does an engagement look like?",
    a: "We start with a 30-minute call to understand your problem. If there's a fit, we scope a fixed-price project with clear deliverables. Most projects run 2-6 weeks. No hourly billing, no scope creep surprises."
  },
  {
    q: "What kind of companies do you work with?",
    a: "Companies doing $1M-$50M in revenue who need AI capabilities but can't justify a full ML hire. Startups who need to ship fast. Agencies who need technical overflow. If you have a real business problem and budget to solve it, we can help."
  },
  {
    q: "How does pricing work?",
    a: "Fixed price per project, scoped upfront. Most projects range from $5k-$30k depending on complexity. We don't do hourly — you pay for outcomes, not time."
  },
  {
    q: "What if we need ongoing support?",
    a: "We offer monthly retainers for companies who need continuous AI development. Starts at $5k/month for 20 hours of development time. Most clients graduate to this after their first project."
  },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-white text-zinc-900">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-xl border-b border-zinc-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">SK Labs</span>
          <a 
            href="#contact" 
            className="px-5 py-2.5 bg-gradient-to-r from-violet-600 to-purple-600 text-white text-sm font-medium rounded-full hover:shadow-lg hover:shadow-violet-500/25 transition-all"
          >
            Get started
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-center px-6 pt-20 relative overflow-hidden">
        {/* Floating gradient orbs */}
        <FloatingOrb className="w-[600px] h-[600px] bg-gradient-to-r from-violet-500 to-purple-500 -top-40 -right-40" delay={0} />
        <FloatingOrb className="w-[400px] h-[400px] bg-gradient-to-r from-blue-500 to-cyan-400 top-1/2 -left-40" delay={2} />
        <FloatingOrb className="w-[300px] h-[300px] bg-gradient-to-r from-amber-400 to-orange-500 bottom-20 right-1/4" delay={4} />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-violet-100 to-purple-100 rounded-full mb-6"
          >
            <span className="w-2 h-2 bg-violet-500 rounded-full animate-pulse" />
            <span className="text-violet-700 font-medium text-sm">AI Development Studio</span>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.9] mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Build AI that<br />
            <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">actually ships.</span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-zinc-600 max-w-2xl mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            We help companies add AI capabilities without the 6-month hiring process. 
            Custom agents, automation, RAG systems — built and deployed in weeks.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="#contact" className="group px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-violet-500/25 transition-all text-center">
              Start a project
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a href="#work" className="px-8 py-4 border border-zinc-200 text-zinc-700 font-medium rounded-xl hover:bg-zinc-50 hover:border-zinc-300 transition-all text-center">
              See our work
            </a>
          </motion.div>
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="py-32 px-6 border-t border-zinc-200">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
              You need AI yesterday.<br />
              <span className="text-zinc-400">Hiring takes 6 months.</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 mt-16">
              <div>
                <p className="text-zinc-500 text-sm font-medium uppercase tracking-wider mb-4">The problem</p>
                <p className="text-xl text-zinc-600 leading-relaxed">
                  Your competitors are shipping AI features. Your board is asking about AI strategy. 
                  But your team is at capacity, ML engineers are expensive, and hiring takes forever.
                </p>
              </div>
              <div>
                <p className="text-zinc-500 text-sm font-medium uppercase tracking-wider mb-4">Our solution</p>
                <p className="text-xl text-zinc-600 leading-relaxed">
                  We plug in as your AI engineering team. Fixed-scope projects, delivered in weeks. 
                  You get production-ready AI without the hiring risk or consultant bloat.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What we build */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <p className="text-violet-600 text-sm font-semibold uppercase tracking-wider mb-4">Capabilities</p>
            <h2 className="text-3xl md:text-5xl font-bold">What we build</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "AI Agents",
                desc: "Autonomous systems that handle complex workflows. Customer support, data processing, code generation — agents that actually work in production.",
                icon: "🤖",
                gradient: "from-violet-500 to-purple-500"
              },
              {
                title: "RAG Systems", 
                desc: "Search and chat over your documents, codebase, or knowledge base. Production retrieval pipelines that scale.",
                icon: "🔍",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                title: "Process Automation",
                desc: "Replace manual workflows with intelligent automation. Data extraction, document processing, decision support.",
                icon: "⚡",
                gradient: "from-amber-500 to-orange-500"
              },
              {
                title: "AI Product Features",
                desc: "Add AI capabilities to your existing product. Chat, search, recommendations, content generation — whatever moves the needle.",
                icon: "✨",
                gradient: "from-emerald-500 to-teal-500"
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 bg-white rounded-2xl border border-zinc-100 hover:border-zinc-200 hover:shadow-xl hover:shadow-zinc-100 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-zinc-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="py-32 px-6 bg-gradient-to-b from-zinc-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.05),transparent_50%)]" />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <p className="text-violet-600 text-sm font-semibold uppercase tracking-wider mb-4">What we build</p>
            <h2 className="text-3xl md:text-5xl font-bold">AI for your industry</h2>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                title: "SaaS — Customer Support Automation",
                outcome: "AI agent handles tier-1 tickets, escalates intelligently, drafts responses for human review. Integrated with Zendesk + Intercom.",
                impact: "70% auto-resolved",
                industry: "B2B SaaS"
              },
              {
                title: "E-commerce — Inventory Intelligence",
                outcome: "Scans competitor pricing, predicts demand, auto-adjusts listings. Real-time alerts for arbitrage opportunities.",
                impact: "40+ hrs/week saved",
                industry: "Retail & Marketplaces"
              },
              {
                title: "Legal — Contract Analysis",
                outcome: "Upload contracts, extract key terms, flag risks, compare against templates. Search across entire contract library.",
                impact: "10x faster review",
                industry: "Legal & Compliance"
              },
              {
                title: "Real Estate — Lead Qualification",
                outcome: "AI qualifies inbound leads via chat, books showings, syncs with CRM. Answers property questions 24/7.",
                impact: "3x more bookings",
                industry: "Real Estate"
              },
              {
                title: "Agency — Content Pipeline",
                outcome: "Brief intake → AI draft → human polish → client review. Automated revisions, brand voice training, multi-format export.",
                impact: "5x throughput",
                industry: "Marketing Agencies"
              },
              {
                title: "Healthcare — Patient Intake",
                outcome: "Conversational intake form, symptom pre-screening, appointment scheduling. HIPAA-compliant, EHR integration.",
                impact: "60% less admin time",
                industry: "Healthcare"
              },
            ].map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-6 md:p-8 bg-white rounded-2xl border border-zinc-100 hover:border-zinc-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-zinc-100 text-zinc-600">
                      {project.industry}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-violet-100 to-purple-100 text-violet-700">
                      {project.impact}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-violet-600 transition-colors">{project.title}</h3>
                    <p className="text-zinc-600">{project.outcome}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <p className="text-violet-600 text-sm font-semibold uppercase tracking-wider mb-4">Team</p>
            <h2 className="text-3xl md:text-5xl font-bold">Who you're working with</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group p-8 bg-gradient-to-br from-zinc-50 to-white rounded-2xl border border-zinc-100 hover:shadow-xl hover:shadow-violet-500/5 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-500 to-purple-500 rounded-full blur-lg opacity-20 group-hover:opacity-30 transition-opacity" />
                  <img 
                    src="https://avatars.githubusercontent.com/u/76663779?v=4" 
                    alt="Anas Khan"
                    className="w-24 h-24 rounded-full relative z-10 ring-4 ring-white"
                  />
                </div>
                <h3 className="text-xl font-semibold">Anas Khan</h3>
                <p className="text-violet-600 font-medium mb-3">Infrastructure & AI</p>
                <p className="text-zinc-600 text-sm">
                  Production and platform engineering at enterprise scale. 
                  Built systems handling 70k+ devices. Ships AI products on the side.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group p-8 bg-gradient-to-br from-zinc-50 to-white rounded-2xl border border-zinc-100 hover:shadow-xl hover:shadow-violet-500/5 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full blur-lg opacity-20 group-hover:opacity-30 transition-opacity" />
                  <img 
                    src="https://avatars.githubusercontent.com/u/67878058?v=4" 
                    alt="Sabih Sarowar"
                    className="w-24 h-24 rounded-full relative z-10 ring-4 ring-white"
                  />
                </div>
                <h3 className="text-xl font-semibold">Sabih Sarowar</h3>
                <p className="text-violet-600 font-medium mb-3">Product & Engineering</p>
                <p className="text-zinc-600 text-sm">
                  Serial builder. Founded startups in energy and municipal tech. 
                  Full-stack engineer who ships fast and talks to customers.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <p className="text-violet-600 text-sm font-semibold uppercase tracking-wider mb-4">FAQ</p>
            <h2 className="text-3xl md:text-5xl font-bold">Questions? Answers.</h2>
          </motion.div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="bg-zinc-50 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-zinc-100 transition-colors"
                >
                  <span className="font-semibold pr-4">{faq.q}</span>
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center bg-violet-100 text-violet-600 transition-transform ${openFaq === i ? 'rotate-45' : ''}`}>
                    +
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6">
                    <p className="text-zinc-600">{faq.a}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-32 px-6 bg-gradient-to-br from-zinc-900 via-zinc-900 to-violet-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(139,92,246,0.15),transparent_50%)]" />
        <div className="max-w-2xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Ready to build?
            </h2>
            <p className="text-xl text-zinc-400 mb-10">
              30-minute call. No pitch deck. Just tell us what you're trying to solve.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:hello@sklabs.dev"
                className="group px-8 py-4 bg-white text-zinc-900 font-medium rounded-xl hover:shadow-lg hover:shadow-white/10 transition-all"
              >
                hello@sklabs.dev
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a
                href="https://cal.com"
                className="px-8 py-4 border border-zinc-700 text-zinc-300 font-medium rounded-xl hover:bg-white/5 hover:border-zinc-600 transition-all"
              >
                Book a call
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-zinc-200 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-500">
          <span className="font-semibold text-zinc-700">SK Labs</span>
          <span>Toronto, Canada</span>
        </div>
      </footer>
    </main>
  );
}