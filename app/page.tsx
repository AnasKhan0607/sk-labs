"use client";

import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

// Who we help
const industries = [
  {
    title: "SaaS Companies",
    desc: "Add AI features to your product — smart search, chatbots, automated workflows, content generation.",
    examples: ["AI-powered support chat", "Intelligent document processing", "Automated data extraction"],
  },
  {
    title: "Startups",
    desc: "Build your AI MVP fast. We've shipped products from zero to users multiple times.",
    examples: ["AI-first product development", "RAG systems", "Custom AI agents"],
  },
  {
    title: "Agencies & Studios",
    desc: "White-label AI development for your clients. We build, you deliver.",
    examples: ["Client AI projects", "Technical partnerships", "Overflow capacity"],
  },
  {
    title: "Enterprise Teams",
    desc: "Internal tools and automation that actually get adopted. Secure, scalable, maintainable.",
    examples: ["Knowledge base systems", "Process automation", "Data pipelines"],
  },
];

// What we build
const capabilities = [
  {
    title: "AI Agents & Automation",
    desc: "Autonomous agents that handle complex workflows — from customer support to code generation.",
    icon: "🤖",
  },
  {
    title: "RAG & Knowledge Systems",
    desc: "Search and chat over your documents, codebase, or data. Production-ready retrieval pipelines.",
    icon: "🔍",
  },
  {
    title: "AI Product Development",
    desc: "Full-stack AI products from concept to launch. We handle models, infrastructure, and UI.",
    icon: "🚀",
  },
  {
    title: "LLM Integration",
    desc: "Connect OpenAI, Claude, or open-source models to your existing systems. APIs, embeddings, fine-tuning.",
    icon: "🔌",
  },
];

// Combined portfolio
const portfolio = [
  {
    name: "AI Forward Deployed Platform",
    type: "Product",
    desc: "Customers request features via widget → AI implements in sandbox → auto-generates PRs with preview deploys.",
    tech: ["Next.js", "Claude", "E2B Sandbox", "PostgreSQL"],
    builder: "Anas",
  },
  {
    name: "Marketplace Intelligence System",
    type: "Automation",
    desc: "Scans resale marketplaces, analyzes listings with LLMs to determine fair value, sends profit alerts.",
    tech: ["Python", "OpenAI", "Temporal", "Redis"],
    builder: "Anas",
  },
  {
    name: "AI Video Generation Platform",
    type: "Product",
    desc: "End-to-end content pipeline for organizations: script generation → TTS → video compositing.",
    tech: ["React", "Hono", "Diffusion Models", "PostgreSQL"],
    builder: "Anas",
  },
  {
    name: "RAG Learning Platform",
    type: "Product",
    desc: "Transforms video content into interactive AI-powered lectures with context-aware Q&A. 500+ users.",
    tech: ["Go", "Python", "ElasticSearch", "OpenAI"],
    builder: "Anas",
  },
  {
    name: "City Asset Management Platform",
    type: "Product",
    desc: "End-to-end workflow for cities: resident complaints → staff triage → field team resolution.",
    tech: ["React", "Node.js", "PostgreSQL"],
    builder: "Sabih",
  },
  {
    name: "AI Meeting Assistant",
    type: "Automation",
    desc: "Slack bot that summarizes your day's meetings, stores transcriptions, enables search across history.",
    tech: ["Python", "Slack API", "Supabase", "OpenAI"],
    builder: "Sabih",
  },
  {
    name: "Satellite Imagery Farm Analytics",
    type: "Product",
    desc: "Visualize soil moisture using Sentinel-2 satellite data. Won Convex hackathon for best startup idea.",
    tech: ["Next.js", "Convex", "ESA Satellite API"],
    builder: "Sabih",
  },
  {
    name: "Renewable Energy Cost Estimator",
    type: "Startup",
    desc: "Cost estimation platform for solar/wind farms. Built and operated as a funded startup.",
    tech: ["Python", "React", "Data Analysis"],
    builder: "Sabih",
  },
];

// Combined experience
const experience = [
  {
    company: "Production Engineering",
    role: "Enterprise Scale",
    desc: "Database provisioning, GitOps workflows, observability. MySQL, Kafka, ElastiCache at scale.",
  },
  {
    company: "Platform Engineering", 
    role: "Multi-Cloud",
    desc: "Terraform, Kubernetes, ArgoCD across AWS, GCP, Azure. CI/CD pipelines and infrastructure automation.",
  },
  {
    company: "IoT Systems",
    role: "70k+ Devices",
    desc: "Migrated device fleets with 99% uptime. Event-driven architectures, real-time data pipelines.",
  },
  {
    company: "Startup Founding",
    role: "0 to Users",
    desc: "Built and shipped products from scratch. Customer development, MVP iteration, growth.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[128px]" />
        
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div {...fadeIn}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-sm text-zinc-400 mb-8">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Taking on new projects
            </div>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            AI development
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
              that ships
            </span>
          </motion.h1>

          <motion.p 
            className="text-xl text-zinc-400 max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We build AI-powered software for companies that need it done right.
            Custom agents, RAG systems, automation, and full products.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <a href="#contact" className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-colors">
              Start a project
            </a>
            <a href="#work" className="px-8 py-4 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 font-medium rounded-lg transition-colors">
              See our work
            </a>
          </motion.div>
        </div>
      </section>

      {/* Who we help */}
      <section className="py-24 px-6 border-t border-zinc-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Who we work with</h2>
            <p className="text-zinc-400 max-w-xl mx-auto">
              From early-stage startups to enterprise teams — if you need AI built properly, we can help.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {industries.map((industry, i) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-xl bg-zinc-900/50 border border-zinc-800"
              >
                <h3 className="text-xl font-semibold mb-2">{industry.title}</h3>
                <p className="text-zinc-400 text-sm mb-4">{industry.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {industry.examples.map((ex) => (
                    <span key={ex} className="px-3 py-1 text-xs bg-zinc-800 rounded-full text-zinc-400">
                      {ex}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What we build */}
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
              End-to-end AI development — from proof of concept to production.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-xl bg-zinc-900/30 border border-zinc-800 hover:border-zinc-700 transition-colors"
              >
                <div className="text-3xl mb-4">{cap.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{cap.title}</h3>
                <p className="text-zinc-400 text-sm">{cap.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="work" className="py-24 px-6 bg-zinc-900/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects we've shipped</h2>
            <p className="text-zinc-400 max-w-xl mx-auto">
              Real products and systems we've built — not concepts.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {portfolio.map((project, i) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-6 rounded-xl bg-zinc-900 border border-zinc-800"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-0.5 text-xs font-medium bg-blue-500/20 text-blue-400 rounded">
                    {project.type}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{project.name}</h3>
                <p className="text-zinc-400 text-sm mb-4">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="px-2 py-1 text-xs font-mono bg-zinc-800 rounded text-zinc-500">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our background</h2>
            <p className="text-zinc-400 max-w-xl mx-auto">
              Combined experience across infrastructure, product, and startups.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {experience.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6"
              >
                <p className="text-2xl font-bold text-blue-400 mb-1">{exp.role}</p>
                <p className="text-zinc-300 font-medium mb-2">{exp.company}</p>
                <p className="text-zinc-500 text-sm">{exp.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Team */}
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 p-4 rounded-xl bg-zinc-900/50 border border-zinc-800"
            >
              <img 
                src="https://avatars.githubusercontent.com/u/76663779?v=4" 
                alt="Anas Khan"
                className="w-16 h-16 rounded-full border-2 border-zinc-700"
              />
              <div>
                <h3 className="font-semibold">Anas Khan</h3>
                <p className="text-zinc-500 text-sm">Infrastructure & AI</p>
                <div className="flex gap-3 mt-1">
                  <a href="https://linkedin.com/in/anas-k" className="text-zinc-500 hover:text-zinc-300 text-xs">LinkedIn</a>
                  <a href="https://github.com/AnasKhan0607" className="text-zinc-500 hover:text-zinc-300 text-xs">GitHub</a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex items-center gap-4 p-4 rounded-xl bg-zinc-900/50 border border-zinc-800"
            >
              <img 
                src="https://avatars.githubusercontent.com/u/67878058?v=4" 
                alt="Sabih Sarowar"
                className="w-16 h-16 rounded-full border-2 border-zinc-700"
              />
              <div>
                <h3 className="font-semibold">Sabih Sarowar</h3>
                <p className="text-zinc-500 text-sm">Product & Engineering</p>
                <div className="flex gap-3 mt-1">
                  <a href="https://linkedin.com/in/sabihsarowar" className="text-zinc-500 hover:text-zinc-300 text-xs">LinkedIn</a>
                  <a href="https://github.com/kleenkanteen" className="text-zinc-500 hover:text-zinc-300 text-xs">GitHub</a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-24 px-6 border-t border-zinc-900">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to build?
            </h2>
            <p className="text-zinc-400 mb-8">
              Tell us about your project. We'll get back to you within 24 hours 
              with honest feedback on scope, timeline, and fit.
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