"use client";

import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const projects = [
  {
    name: "AI Forward Deployed Platform",
    desc: "Customers request features → AI implements in sandbox → auto-generates PRs",
    tech: ["Next.js", "Claude", "E2B", "PostgreSQL"],
  },
  {
    name: "Marketplace Intelligence System",
    desc: "Scans listings, analyzes with LLMs, predicts profitable opportunities",
    tech: ["Python", "OpenAI", "Temporal", "Redis"],
  },
  {
    name: "AI Video Generation Platform",
    desc: "End-to-end content pipeline: script → TTS → video compositing",
    tech: ["React", "Hono", "RunComfy", "PostgreSQL"],
  },
  {
    name: "RAG Learning Platform",
    desc: "Transforms video content into interactive AI-powered lectures",
    tech: ["Go", "Python", "ElasticSearch", "OpenAI"],
  },
];

const experience = [
  { company: "Clio", role: "Production Engineer", focus: "Data infrastructure at scale" },
  { company: "Kinaxis", role: "Platform Engineer", focus: "Multi-cloud infrastructure" },
  { company: "Ecobee", role: "Software + SRE", focus: "IoT systems, 70k+ devices" },
  { company: "Zapdos", role: "Founding Engineer", focus: "Product development" },
];

const services = [
  {
    title: "Custom AI Agents",
    desc: "Purpose-built agents that automate complex workflows. RAG, tool use, multi-step reasoning.",
    price: "From $10k",
  },
  {
    title: "AI Product Development",
    desc: "Full-stack AI products from concept to launch. We handle infra, models, and UI.",
    price: "From $15k",
  },
  {
    title: "AI Integration",
    desc: "Add AI capabilities to your existing product. Chat, search, automation, analysis.",
    price: "From $5k",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-6 overflow-hidden">
        {/* Background grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
        
        {/* Gradient orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[128px]" />
        
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div {...fadeIn}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-sm text-zinc-400 mb-8">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Now taking on new projects
            </div>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            We build{" "}
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
              AI software
            </span>
            <br />
            that actually works
          </motion.h1>

          <motion.p 
            className="text-xl text-zinc-400 max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Two engineers who've built AI products, scaled infrastructure, and shipped 
            at companies like Clio, Ecobee, and Kinaxis. Now we build for you.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <a
              href="#contact"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-colors"
            >
              Start a project
            </a>
            <a
              href="#work"
              className="px-8 py-4 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 font-medium rounded-lg transition-colors"
            >
              See our work
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-zinc-700 flex justify-center pt-2">
            <div className="w-1 h-2 bg-zinc-500 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Credibility bar */}
      <section className="py-12 px-6 border-y border-zinc-900">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-sm text-zinc-500 mb-6">Background from</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {["Clio", "Kinaxis", "Ecobee", "U of T"].map((company) => (
              <span key={company} className="text-xl md:text-2xl font-semibold text-zinc-600">
                {company}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What we build</h2>
            <p className="text-zinc-400 max-w-xl mx-auto">
              AI products and integrations, built by engineers who understand both the AI and the infrastructure.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-colors"
              >
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-zinc-400 text-sm mb-4">{service.desc}</p>
                <p className="text-blue-400 font-mono text-sm">{service.price}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="py-24 px-6 bg-zinc-900/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Recent projects</h2>
            <p className="text-zinc-400">AI products we've built and shipped.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-xl bg-zinc-900 border border-zinc-800"
              >
                <h3 className="text-lg font-semibold mb-2">{project.name}</h3>
                <p className="text-zinc-400 text-sm mb-4">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="px-2 py-1 text-xs font-mono bg-zinc-800 rounded text-zinc-400">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The team</h2>
            <p className="text-zinc-400">Two builders. One mission.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Anas */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-zinc-900/50 border border-zinc-800"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-2xl font-bold mb-4">
                A
              </div>
              <h3 className="text-xl font-semibold mb-1">Anas Khan</h3>
              <p className="text-zinc-500 text-sm mb-3">Infrastructure & AI</p>
              <p className="text-zinc-400 text-sm mb-4">
                Production Engineer at Clio. Previously Platform at Kinaxis, SRE at Ecobee. 
                Scaled systems to 70k+ devices. Built multiple AI products.
              </p>
              <div className="flex gap-4">
                <a href="https://linkedin.com/in/anas-k" className="text-zinc-500 hover:text-zinc-300 text-sm">
                  LinkedIn
                </a>
                <a href="https://github.com/AnasKhan0607" className="text-zinc-500 hover:text-zinc-300 text-sm">
                  GitHub
                </a>
              </div>
            </motion.div>

            {/* Sabih */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-6 rounded-xl bg-zinc-900/50 border border-zinc-800"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-2xl font-bold mb-4">
                S
              </div>
              <h3 className="text-xl font-semibold mb-1">Sabih Sarowar</h3>
              <p className="text-zinc-500 text-sm mb-3">Product & Engineering</p>
              <p className="text-zinc-400 text-sm mb-4">
                Founded startups in energy and city tech. Built products from zero to users. 
                Full-stack engineer with a bias for shipping.
              </p>
              <div className="flex gap-4">
                <a href="https://linkedin.com/in/sabihsarowar" className="text-zinc-500 hover:text-zinc-300 text-sm">
                  LinkedIn
                </a>
                <a href="https://github.com/kleenkanteen" className="text-zinc-500 hover:text-zinc-300 text-sm">
                  GitHub
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let's build something
            </h2>
            <p className="text-zinc-400 mb-8">
              Have an AI project in mind? We'd love to hear about it. 
              Book a call or send us an email.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="mailto:hello@sklabs.dev"
                className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-colors"
              >
                hello@sklabs.dev
              </a>
              <a
                href="https://cal.com"
                className="px-8 py-4 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 font-medium rounded-lg transition-colors"
              >
                Book a call
              </a>
            </div>

            <p className="text-zinc-600 text-sm">
              Usually respond within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-zinc-900">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold">SK</span>
            <span className="text-zinc-600">Labs</span>
          </div>
          <p className="text-zinc-600 text-sm">
            © 2026 SK Labs. Toronto, Canada.
          </p>
        </div>
      </footer>
    </main>
  );
}