"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-zinc-100">
        <div className="max-w-4xl mx-auto px-6 py-5 flex justify-between items-center">
          <span className="text-lg font-semibold tracking-tight">SK Labs</span>
          <a 
            href="mailto:hello@sklabs.dev" 
            className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
          >
            hello@sklabs.dev
          </a>
        </div>
      </nav>

      {/* Hero - Narrative */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-12"
          >
            {/* Year markers - storytelling */}
            <div className="space-y-8 text-lg leading-relaxed text-zinc-600">
              <div>
                <p className="text-sm font-semibold text-zinc-400 mb-2">2020</p>
                <p>
                  Most businesses run on spreadsheets, phone calls, and manual data entry. 
                  A property manager spends 4 hours a day on tenant emails. A staffing agency 
                  loses candidates to faster competitors. A manufacturer can't see their 
                  inventory in real time.
                </p>
              </div>
              
              <div>
                <p className="text-sm font-semibold text-zinc-400 mb-2">2024</p>
                <p>
                  AI becomes practical. Not the sci-fi kind — the kind that reads documents, 
                  answers questions, and automates workflows. The companies that figure it out 
                  first will operate at a different speed than everyone else.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="pt-8 border-t border-zinc-100">
              <p className="text-2xl md:text-3xl font-medium leading-snug text-zinc-900">
                We help operations-heavy businesses implement AI — not as a science project, 
                but as infrastructure that makes your team faster.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What we do */}
      <section className="py-20 px-6 bg-zinc-50">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-8">What we build</h2>
            
            <div className="space-y-6">
              {[
                {
                  title: "AI Assistants",
                  desc: "Chatbots that actually work. Handle tenant inquiries, qualify leads, answer candidate questions — 24/7, in your voice."
                },
                {
                  title: "Document Intelligence",
                  desc: "Extract data from leases, contracts, resumes, invoices. Search across thousands of documents in seconds."
                },
                {
                  title: "Workflow Automation",
                  desc: "Connect your systems. When X happens, do Y. No more copying data between tools or chasing status updates."
                },
                {
                  title: "Custom Integrations",
                  desc: "Your CRM, your property management software, your ATS — we make them talk to each other and to AI."
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-300 mt-3 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-zinc-900">{item.title}</h3>
                    <p className="text-zinc-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-8">Industries we serve</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  name: "Property Management",
                  problems: "Tenant communications, maintenance coordination, lease processing, vacancy marketing"
                },
                {
                  name: "Staffing & Recruiting",
                  problems: "Candidate screening, interview scheduling, onboarding automation, compliance tracking"
                },
                {
                  name: "Manufacturing",
                  problems: "Inventory visibility, supplier communications, quality documentation, order processing"
                },
                {
                  name: "Professional Services",
                  problems: "Client intake, document review, billing automation, knowledge management"
                },
              ].map((industry, i) => (
                <div key={i} className="p-6 border border-zinc-200 rounded-lg">
                  <h3 className="font-semibold text-zinc-900 mb-2">{industry.name}</h3>
                  <p className="text-sm text-zinc-500">{industry.problems}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-zinc-50">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-12">What our partners say</h2>
            
            <div className="space-y-12">
              {[
                {
                  quote: "We were drowning in tenant emails. SK Labs built us an AI assistant that handles 70% of inquiries automatically. Our team finally has time to focus on growth.",
                  name: "Property Management Director",
                  company: "Regional PM Firm"
                },
                {
                  quote: "Onboarding used to take us 2 weeks per placement. Now it's 3 days. The ROI was obvious within the first month.",
                  name: "Operations Manager",
                  company: "Healthcare Staffing Agency"
                },
                {
                  quote: "They didn't just build us a tool — they understood our business first. That's rare with technical teams.",
                  name: "CEO",
                  company: "Manufacturing Company"
                },
              ].map((testimonial, i) => (
                <div key={i}>
                  <p className="text-xl text-zinc-700 leading-relaxed mb-4">
                    "{testimonial.quote}"
                  </p>
                  <p className="text-sm">
                    <span className="font-semibold text-zinc-900">{testimonial.name}</span>
                    <span className="text-zinc-400"> · {testimonial.company}</span>
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* How we work */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-8">How we work</h2>
            
            <div className="space-y-4 text-zinc-600">
              <p>
                <strong className="text-zinc-900">We start with your problem, not our technology.</strong> First call is 30 minutes — 
                you tell us what's broken, we tell you if AI can fix it.
              </p>
              <p>
                <strong className="text-zinc-900">Fixed scope, fixed price.</strong> No hourly billing, no scope creep surprises. 
                Most projects are $5k–$25k and take 2–6 weeks.
              </p>
              <p>
                <strong className="text-zinc-900">We build with you, not for you.</strong> Your team learns the system. 
                You own everything. We're here for support, not dependency.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-6 bg-zinc-50">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-8">Team</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <img 
                  src="https://avatars.githubusercontent.com/u/76663779?v=4" 
                  alt="Anas Khan"
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h3 className="font-semibold text-zinc-900">Anas Khan</h3>
                  <p className="text-sm text-zinc-500 mb-2">Infrastructure & AI</p>
                  <p className="text-sm text-zinc-600">
                    Production engineer. Built systems at scale for enterprise companies. 
                    Ships AI products.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <img 
                  src="https://avatars.githubusercontent.com/u/67878058?v=4" 
                  alt="Sabih Sarowar"
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h3 className="font-semibold text-zinc-900">Sabih Sarowar</h3>
                  <p className="text-sm text-zinc-500 mb-2">Product & Engineering</p>
                  <p className="text-sm text-zinc-600">
                    Founded startups in energy and municipal tech. 
                    Full-stack engineer who talks to customers.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 border-t border-zinc-200">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-medium mb-4">
              Let's talk about your operations.
            </h2>
            <p className="text-zinc-600 mb-8">
              30-minute call. No pitch deck. Just tell us what's slowing you down.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:hello@sklabs.dev"
                className="px-6 py-3 bg-zinc-900 text-white font-medium rounded-lg hover:bg-zinc-800 transition-colors"
              >
                hello@sklabs.dev
              </a>
              <a
                href="https://cal.com"
                className="px-6 py-3 border border-zinc-300 text-zinc-700 font-medium rounded-lg hover:bg-zinc-50 transition-colors"
              >
                Book a call
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-zinc-100">
        <div className="max-w-3xl mx-auto flex justify-between items-center text-sm text-zinc-400">
          <span>SK Labs</span>
          <span>Toronto, Canada</span>
        </div>
      </footer>
    </main>
  );
}
