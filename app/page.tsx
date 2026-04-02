"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAFAFA]">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FAFAFA]/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
          <span className="text-xl font-bold tracking-tight text-zinc-900">SK Labs</span>
          <a 
            href="#contact" 
            className="px-5 py-2.5 bg-zinc-900 text-white text-sm font-medium rounded-full hover:bg-zinc-800 transition-all"
          >
            Get in touch
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-zinc-200 rounded-full mb-8 shadow-sm">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-zinc-600">Now serving property management & staffing</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-900 leading-[1.1] mb-6">
              AI that runs your<br />
              <span className="text-zinc-400">back office.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-zinc-600 max-w-2xl mb-10 leading-relaxed">
              We build AI systems for operations-heavy businesses. Automate the work 
              that's eating your team's time.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="px-8 py-4 bg-zinc-900 text-white font-medium rounded-full hover:bg-zinc-800 transition-all text-center">
                Book a call
              </a>
              <a href="#work" className="px-8 py-4 bg-white border border-zinc-200 text-zinc-700 font-medium rounded-full hover:border-zinc-300 hover:bg-zinc-50 transition-all text-center shadow-sm">
                See examples
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Shift - Narrative */}
      <section className="py-24 px-6 bg-zinc-900 text-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-16"
          >
            <div>
              <p className="text-emerald-400 font-mono text-sm mb-4">2020</p>
              <p className="text-xl text-zinc-300 leading-relaxed">
                Most businesses run on spreadsheets, phone calls, and manual data entry. 
                A property manager spends 4 hours a day on tenant emails. A staffing agency 
                loses candidates to faster competitors.
              </p>
            </div>
            <div>
              <p className="text-emerald-400 font-mono text-sm mb-4">2025</p>
              <p className="text-xl text-zinc-300 leading-relaxed">
                AI becomes practical infrastructure. The companies that implement it first 
                will operate at a fundamentally different speed. The gap is widening.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What we build */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-semibold text-emerald-600 uppercase tracking-wider mb-3">Capabilities</p>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-12">What we build</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "AI Assistants",
                  desc: "Handle tenant inquiries, qualify leads, answer candidate questions. 24/7, in your voice, integrated with your systems.",
                  icon: "💬"
                },
                {
                  title: "Document Intelligence",
                  desc: "Extract data from leases, contracts, resumes, invoices. Search across thousands of documents instantly.",
                  icon: "📄"
                },
                {
                  title: "Workflow Automation",
                  desc: "Connect your systems. When X happens, do Y. No more copying data between tools or chasing updates.",
                  icon: "⚡"
                },
                {
                  title: "Custom Integrations",
                  desc: "Your CRM, property management software, ATS — we make them talk to each other and to AI.",
                  icon: "🔗"
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 bg-white border border-zinc-200 rounded-2xl hover:shadow-lg hover:border-zinc-300 transition-all"
                >
                  <span className="text-3xl mb-4 block">{item.icon}</span>
                  <h3 className="text-xl font-semibold text-zinc-900 mb-2">{item.title}</h3>
                  <p className="text-zinc-600">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industries */}
      <section id="work" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-semibold text-emerald-600 uppercase tracking-wider mb-3">Industries</p>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">Built for operations-heavy businesses</h2>
            <p className="text-xl text-zinc-600 mb-12 max-w-2xl">
              If your team spends hours on repetitive communication, data entry, or coordination — we can help.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  name: "Property Management",
                  examples: ["Tenant communications", "Maintenance tickets", "Lease processing", "Vacancy marketing"],
                  stat: "70%",
                  statLabel: "inquiries automated"
                },
                {
                  name: "Staffing & Recruiting",
                  examples: ["Candidate screening", "Interview scheduling", "Onboarding flows", "Compliance tracking"],
                  stat: "3x",
                  statLabel: "faster placement"
                },
                {
                  name: "Manufacturing",
                  examples: ["Inventory visibility", "Supplier comms", "Quality docs", "Order processing"],
                  stat: "40hrs",
                  statLabel: "saved per week"
                },
                {
                  name: "Professional Services",
                  examples: ["Client intake", "Document review", "Billing automation", "Knowledge search"],
                  stat: "10x",
                  statLabel: "faster lookup"
                },
              ].map((industry, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 bg-zinc-50 rounded-2xl border border-zinc-100"
                >
                  <h3 className="font-semibold text-zinc-900 mb-4">{industry.name}</h3>
                  <ul className="space-y-2 mb-6">
                    {industry.examples.map((ex, j) => (
                      <li key={j} className="text-sm text-zinc-600 flex items-center gap-2">
                        <span className="w-1 h-1 bg-emerald-500 rounded-full" />
                        {ex}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t border-zinc-200">
                    <p className="text-2xl font-bold text-zinc-900">{industry.stat}</p>
                    <p className="text-sm text-zinc-500">{industry.statLabel}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-zinc-900 text-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-3">Testimonials</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-12">What our partners say</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  quote: "We were drowning in tenant emails. Now 70% are handled automatically. Our team finally has time to focus on growth.",
                  name: "Property Management Director",
                  company: "Regional PM Firm"
                },
                {
                  quote: "Onboarding used to take 2 weeks per placement. Now it's 3 days. The ROI was obvious within the first month.",
                  name: "Operations Manager",
                  company: "Healthcare Staffing"
                },
                {
                  quote: "They understood our business first, then built the tech. That's rare. They feel like an extension of our team.",
                  name: "CEO",
                  company: "Manufacturing Co."
                },
              ].map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 bg-zinc-800 rounded-2xl"
                >
                  <p className="text-zinc-300 mb-6 leading-relaxed">"{t.quote}"</p>
                  <div>
                    <p className="font-semibold text-white">{t.name}</p>
                    <p className="text-sm text-zinc-500">{t.company}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* How we work */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-semibold text-emerald-600 uppercase tracking-wider mb-3">Process</p>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-12">How we work</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Discovery Call",
                  desc: "30 minutes. You tell us what's broken, we tell you if AI can fix it. No pitch deck required."
                },
                {
                  step: "02",
                  title: "Scoped Proposal",
                  desc: "Fixed price, clear deliverables, realistic timeline. Most projects are $5k–$25k over 2–6 weeks."
                },
                {
                  step: "03",
                  title: "Build & Deploy",
                  desc: "We build with you, not for you. Your team learns the system. You own everything."
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <p className="text-5xl font-bold text-zinc-200 mb-4">{item.step}</p>
                  <h3 className="text-xl font-semibold text-zinc-900 mb-2">{item.title}</h3>
                  <p className="text-zinc-600">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-semibold text-emerald-600 uppercase tracking-wider mb-3">Team</p>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-12">Who you're working with</h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-3xl">
              <div className="flex gap-5">
                <img 
                  src="https://avatars.githubusercontent.com/u/76663779?v=4" 
                  alt="Anas Khan"
                  className="w-20 h-20 rounded-2xl object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold text-zinc-900">Anas Khan</h3>
                  <p className="text-emerald-600 text-sm font-medium mb-2">Infrastructure & AI</p>
                  <p className="text-sm text-zinc-600">
                    Builds high-scale production systems with secure data handling. Ships AI agents and automation products.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <img 
                  src="https://avatars.githubusercontent.com/u/67878058?v=4" 
                  alt="Sabih Sarowar"
                  className="w-20 h-20 rounded-2xl object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold text-zinc-900">Sabih Sarowar</h3>
                  <p className="text-emerald-600 text-sm font-medium mb-2">Product & Engineering</p>
                  <p className="text-sm text-zinc-600">
                    2x founder in energy and legal tech. Product-minded engineer who knows how to integrate with client systems.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-24 px-6 bg-zinc-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's talk about your operations.
            </h2>
            <p className="text-xl text-zinc-400 mb-10">
              30-minute call. No pitch deck. Just tell us what's slowing you down.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:hello@sklabs.dev"
                className="px-8 py-4 bg-white text-zinc-900 font-medium rounded-full hover:bg-zinc-100 transition-all"
              >
                hello@sklabs.dev
              </a>
              <a
                href="https://cal.com"
                className="px-8 py-4 border border-zinc-700 text-white font-medium rounded-full hover:bg-zinc-800 transition-all"
              >
                Book a call
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-zinc-900 border-t border-zinc-800">
        <div className="max-w-6xl mx-auto flex justify-between items-center text-sm text-zinc-500">
          <span className="font-medium text-zinc-400">SK Labs</span>
          <span>Toronto, Canada</span>
        </div>
      </footer>
    </main>
  );
}
