"use client";

import { motion } from "framer-motion";
import { useState } from "react";

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
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-900">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-xl font-bold tracking-tight">SK Labs</span>
          <a 
            href="#contact" 
            className="px-4 py-2 bg-white text-zinc-900 text-sm font-medium rounded-lg hover:bg-zinc-200 transition-colors"
          >
            Get started
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-center px-6 pt-20">
        <div className="max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-blue-400 font-medium mb-4"
          >
            AI development studio
          </motion.p>
          
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.9] mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Build AI that<br />
            <span className="text-zinc-500">actually ships.</span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-zinc-400 max-w-2xl mb-12"
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
            <a href="#contact" className="px-8 py-4 bg-white text-zinc-900 font-medium rounded-lg hover:bg-zinc-200 transition-colors text-center">
              Start a project
            </a>
            <a href="#work" className="px-8 py-4 border border-zinc-800 text-zinc-300 font-medium rounded-lg hover:bg-zinc-900 transition-colors text-center">
              See our work
            </a>
          </motion.div>
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="py-32 px-6 border-t border-zinc-900">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
              You need AI yesterday.<br />
              <span className="text-zinc-500">Hiring takes 6 months.</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 mt-16">
              <div>
                <p className="text-zinc-500 text-sm font-medium uppercase tracking-wider mb-4">The problem</p>
                <p className="text-xl text-zinc-300 leading-relaxed">
                  Your competitors are shipping AI features. Your board is asking about AI strategy. 
                  But your team is at capacity, ML engineers are expensive, and hiring takes forever.
                </p>
              </div>
              <div>
                <p className="text-zinc-500 text-sm font-medium uppercase tracking-wider mb-4">Our solution</p>
                <p className="text-xl text-zinc-300 leading-relaxed">
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
            className="mb-16"
          >
            <p className="text-zinc-500 text-sm font-medium uppercase tracking-wider mb-4">Capabilities</p>
            <h2 className="text-3xl md:text-4xl font-bold">What we build</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-1">
            {[
              {
                title: "AI Agents",
                desc: "Autonomous systems that handle complex workflows. Customer support, data processing, code generation — agents that actually work in production."
              },
              {
                title: "RAG Systems", 
                desc: "Search and chat over your documents, codebase, or knowledge base. Production retrieval pipelines that scale."
              },
              {
                title: "Process Automation",
                desc: "Replace manual workflows with intelligent automation. Data extraction, document processing, decision support."
              },
              {
                title: "AI Product Features",
                desc: "Add AI capabilities to your existing product. Chat, search, recommendations, content generation — whatever moves the needle."
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 border border-zinc-900 hover:bg-zinc-900/50 transition-colors"
              >
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-zinc-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="py-32 px-6 bg-zinc-900/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-zinc-500 text-sm font-medium uppercase tracking-wider mb-4">Track record</p>
            <h2 className="text-3xl md:text-4xl font-bold">Systems we've built</h2>
          </motion.div>

          <div className="space-y-1">
            {[
              {
                title: "AI-Powered Feature Request Platform",
                outcome: "Customers request features via widget. AI implements in sandbox, generates PR, creates preview deploy.",
                impact: "Reduced feature turnaround from weeks to hours"
              },
              {
                title: "Marketplace Intelligence System",
                outcome: "Scans resale marketplaces, analyzes listings with LLMs, identifies arbitrage opportunities in real-time.",
                impact: "Automated 40+ hours/week of manual research"
              },
              {
                title: "Enterprise RAG Platform",
                outcome: "Video-to-knowledge system. Transforms content into searchable, interactive AI-powered Q&A.",
                impact: "500+ users, 10x faster information retrieval"
              },
              {
                title: "Municipal Operations Platform",
                outcome: "End-to-end workflow: resident complaints to staff triage to field resolution. Automated routing and status updates.",
                impact: "Cut response time by 60%"
              },
              {
                title: "AI Meeting Intelligence",
                outcome: "Slack bot that summarizes meetings, stores transcriptions, enables semantic search across history.",
                impact: "Saved 5+ hours/week per team member"
              },
            ].map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-8 border border-zinc-800 bg-zinc-950 hover:bg-zinc-900/50 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                    <p className="text-zinc-400">{project.outcome}</p>
                  </div>
                  <div className="md:text-right">
                    <p className="text-blue-400 font-medium">{project.impact}</p>
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
            className="mb-16"
          >
            <p className="text-zinc-500 text-sm font-medium uppercase tracking-wider mb-4">Team</p>
            <h2 className="text-3xl md:text-4xl font-bold">Who you're working with</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex gap-6"
            >
              <img 
                src="https://avatars.githubusercontent.com/u/76663779?v=4" 
                alt="Anas Khan"
                className="w-20 h-20 rounded-full grayscale hover:grayscale-0 transition-all"
              />
              <div>
                <h3 className="text-xl font-semibold">Anas Khan</h3>
                <p className="text-zinc-500 mb-3">Infrastructure & AI</p>
                <p className="text-zinc-400 text-sm">
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
              className="flex gap-6"
            >
              <img 
                src="https://avatars.githubusercontent.com/u/67878058?v=4" 
                alt="Sabih Sarowar"
                className="w-20 h-20 rounded-full grayscale hover:grayscale-0 transition-all"
              />
              <div>
                <h3 className="text-xl font-semibold">Sabih Sarowar</h3>
                <p className="text-zinc-500 mb-3">Product & Engineering</p>
                <p className="text-zinc-400 text-sm">
                  Serial builder. Founded startups in energy and municipal tech. 
                  Full-stack engineer who ships fast and talks to customers.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 px-6 border-t border-zinc-900">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-zinc-500 text-sm font-medium uppercase tracking-wider mb-4">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-bold">Questions? Answers.</h2>
          </motion.div>

          <div className="space-y-1">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="border border-zinc-900"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-zinc-900/50 transition-colors"
                >
                  <span className="font-medium pr-4">{faq.q}</span>
                  <span className="text-2xl text-zinc-500">
                    {openFaq === i ? "−" : "+"}
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6">
                    <p className="text-zinc-400">{faq.a}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to build?
            </h2>
            <p className="text-xl text-zinc-400 mb-10">
              30-minute call. No pitch deck. Just tell us what you're trying to solve.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:hello@sklabs.dev"
                className="px-8 py-4 bg-white text-zinc-900 font-medium rounded-lg hover:bg-zinc-200 transition-colors"
              >
                hello@sklabs.dev
              </a>
              <a
                href="https://cal.com"
                className="px-8 py-4 border border-zinc-800 text-zinc-300 font-medium rounded-lg hover:bg-zinc-900 transition-colors"
              >
                Book a call
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-zinc-900">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-600">
          <span className="font-semibold text-zinc-400">SK Labs</span>
          <span>Toronto, Canada</span>
        </div>
      </footer>
    </main>
  );
}