import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, CheckCircle2, ExternalLink, MessageCircle, Play, Sparkles } from "lucide-react";

import { siteProfile } from "@/data/site";

const proofCards = [
  {
    value: "2",
    label: "Live demos",
    detail: "Both projects are public and clickable right now.",
  },
  {
    value: "50+",
    label: "Authority assets",
    detail: "Blog system added to support search, trust, and positioning.",
  },
  {
    value: "4",
    label: "Execution layers",
    detail: "Copy, motion, UI, and systems thinking shipped together.",
  },
];

const projects = [
  {
    title: "Sharma Pharmacy",
    type: "Operations + commerce case study",
    url: "https://sharmapharmacy.com",
    lead:
      "A pharmacy brand needs more than a brochure site. It needs trust, clarity, and a system-aware digital presence that supports real operations.",
    challenge:
      "The challenge was to present a business with operational depth in a way that still felt approachable to customers and credible to decision-makers.",
    build:
      "The solution leaned into business-first architecture, clearer information flow, and a web presence that supports inventory, ordering, and day-to-day credibility.",
    proof:
      "The proof is simple: the project is live, the system story is clear, and the experience shows that operational software thinking can also look polished on the front end.",
    deliverables: [
      "Inventory-aware digital presentation",
      "Business-first structure and messaging",
      "Live public demo that shows real execution",
    ],
    metrics: [
      { value: "3", label: "Core workflows", detail: "Inventory, ordering, operations" },
      { value: "1", label: "Live public build", detail: "You can open it right now" },
      { value: "24/7", label: "Digital presence", detail: "Always-on brand access" },
    ],
  },
  {
    title: "KikaKiki.in",
    type: "Brand-forward website case study",
    url: "https://kikakiki.in",
    lead:
      "This build was about visual confidence. The site needed to feel premium, modern, and alive before a visitor even started reading deeply.",
    challenge:
      "The challenge was turning design taste and performance awareness into one clean digital experience without falling into generic template energy.",
    build:
      "The answer was a sharper visual hierarchy, cleaner section rhythm, and a frontend direction that balances branding, motion, and usability.",
    proof:
      "Again, the proof is not a claim hidden in a slide deck. The demo is live, the experience is public, and the project shows that polished presentation can still feel intentional and fast.",
    deliverables: [
      "Brand-led visual storytelling",
      "Frontend polish with performance awareness",
      "Live demo that makes the design language visible",
    ],
    metrics: [
      { value: "3", label: "Experience pillars", detail: "Brand, UX, performance" },
      { value: "1", label: "Live launch", detail: "Public demo available" },
      { value: "2", label: "Primary goals", detail: "Clarity and speed" },
    ],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative px-6 py-32">
      <motion.div
        className="absolute right-8 top-20 h-20 w-20 rounded-[1.75rem] border border-white/10"
        animate={{ rotate: [0, 8, -8, 0], y: [0, 16, 0] }}
        transition={{ duration: 9, repeat: Infinity }}
      />

      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl"
        >
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-primary">03 - Case Studies</p>
          <h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
            Projects rewritten as <span className="gradient-text">proof-led case studies</span>, not just thumbnails and links
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-8 text-muted-foreground md:text-lg">
            Every project below now shows what the build was solving, how the work was framed, what the proof looks
            like, and where the live demo is. This makes the portfolio feel more credible, more strategic, and much
            easier to sell from.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {proofCards.map((card, index) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.55 }}
              className="rounded-[28px] border border-white/10 bg-card/80 p-6 backdrop-blur-xl"
            >
              <p className="text-3xl font-bold text-foreground">{card.value}</p>
              <p className="mt-2 font-mono text-xs uppercase tracking-[0.22em] text-primary">{card.label}</p>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{card.detail}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 space-y-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.7 }}
              className="overflow-hidden rounded-[34px] border border-white/10 bg-card/80 backdrop-blur-xl"
            >
              <div className="grid gap-0 xl:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)]">
                <div className="p-7 md:p-10">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-[11px] font-mono uppercase tracking-[0.24em] text-primary">
                      Case Study 0{index + 1}
                    </span>
                    <span className="rounded-full border border-white/10 px-4 py-2 text-[11px] font-mono uppercase tracking-[0.24em] text-muted-foreground">
                      {project.type}
                    </span>
                  </div>

                  <div className="mt-6 flex items-start justify-between gap-5">
                    <div>
                      <h3 className="text-3xl font-bold md:text-4xl">{project.title}</h3>
                      <p className="mt-4 max-w-2xl text-base leading-8 text-muted-foreground">{project.lead}</p>
                    </div>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hidden h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-background/70 text-muted-foreground transition-all hover:border-primary/25 hover:text-primary md:flex"
                      aria-label={`Open ${project.title}`}
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>

                  <div className="mt-8 grid gap-5 lg:grid-cols-3">
                    <div className="rounded-[26px] border border-white/10 bg-background/55 p-5">
                      <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-primary">Challenge</p>
                      <p className="mt-4 text-sm leading-7 text-muted-foreground">{project.challenge}</p>
                    </div>
                    <div className="rounded-[26px] border border-white/10 bg-background/55 p-5">
                      <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-primary">Build</p>
                      <p className="mt-4 text-sm leading-7 text-muted-foreground">{project.build}</p>
                    </div>
                    <div className="rounded-[26px] border border-primary/20 bg-primary/10 p-5">
                      <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-primary">Proof</p>
                      <p className="mt-4 text-sm leading-7 text-foreground/85">{project.proof}</p>
                    </div>
                  </div>

                  <div className="mt-8 grid gap-4 md:grid-cols-3">
                    {project.metrics.map((metric) => (
                      <div
                        key={metric.label}
                        className="rounded-[24px] border border-white/10 bg-background/60 p-5"
                      >
                        <p className="text-3xl font-bold text-foreground">{metric.value}</p>
                        <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.22em] text-primary">
                          {metric.label}
                        </p>
                        <p className="mt-3 text-sm leading-6 text-muted-foreground">{metric.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-white/10 bg-[linear-gradient(180deg,hsl(174_72%_50%_/_0.08),transparent_85%)] p-7 md:p-10 xl:border-l xl:border-t-0">
                  <div className="rounded-[28px] border border-white/10 bg-background/60 p-6">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                        <Sparkles className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-primary">What this proves</p>
                        <h4 className="mt-1 text-2xl font-bold">The work can carry both taste and structure</h4>
                      </div>
                    </div>

                    <div className="mt-6 space-y-3">
                      {project.deliverables.map((item) => (
                        <div
                          key={item}
                          className="flex items-start gap-3 rounded-2xl border border-white/10 bg-card/80 px-4 py-4 text-sm leading-7 text-foreground/90"
                        >
                          <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-primary" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 rounded-[24px] border border-primary/20 bg-primary/10 p-5">
                      <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-primary">Demo callout</p>
                      <p className="mt-3 text-sm leading-7 text-foreground/85">
                        No hidden PDF, no private slide deck, no vague promise. The live demo is the proof layer here.
                      </p>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-background transition-transform hover:-translate-y-0.5"
                      >
                        <Play className="h-4 w-4" />
                        Open Demo
                      </a>
                      <a
                        href={siteProfile.whatsappHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-5 py-3 text-sm font-semibold text-primary transition-transform hover:-translate-y-0.5"
                      >
                        <MessageCircle className="h-4 w-4" />
                        Build Something Similar
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-12 rounded-[34px] border border-primary/20 bg-primary/10 p-8 md:p-10"
        >
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-primary">Strong CTA</p>
              <h3 className="mt-4 text-3xl font-bold md:text-4xl">
                Want your homepage to feel like a pitch deck, proof section, and live demo all at once?
              </h3>
              <p className="mt-4 max-w-3xl text-base leading-8 text-foreground/85">
                I can build the copy, motion, layout, case-study framing, and CTA stack so visitors stop browsing and
                start contacting.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-transform hover:-translate-y-0.5"
              >
                Start a Project
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={siteProfile.portfolioHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-card/80 px-6 py-3 text-sm font-semibold text-foreground transition-transform hover:-translate-y-0.5"
              >
                See Full Demo
                <ArrowUpRight className="h-4 w-4 text-primary" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
