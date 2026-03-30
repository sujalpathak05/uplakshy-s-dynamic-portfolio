import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Sparkles } from "lucide-react";

const projects = [
  {
    title: "Sharma Pharmacy",
    url: "https://sharmapharmacy.com",
    desc: "A pharmacy-focused digital system with operational depth, inventory thinking, and a business-first software approach.",
    tags: ["Operations", "Inventory", "Software"],
  },
  {
    title: "KikaKiki.in",
    url: "https://kikakiki.in",
    desc: "A dynamic web presence designed to feel modern, polished, and performance-aware from the first screen.",
    tags: ["Branding", "Web Design", "Frontend"],
  },
];

const projectHighlights = [
  "Motion-rich interfaces that still feel clean",
  "AI-assisted planning with custom production code",
  "Business software thinking behind every build",
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
          className="max-w-4xl"
        >
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-primary">03 - Projects</p>
          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Featured work with <span className="gradient-text">motion, systems thinking, and AI-ready execution</span>
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-8 xl:grid-cols-[1.25fr_0.75fr]">
          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12, duration: 0.65 }}
                className="group rounded-[30px] border border-white/10 bg-card/80 p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-primary/25"
              >
                <div className="mb-6 flex items-start justify-between">
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-primary">Live project</p>
                    <h3 className="mt-3 text-2xl font-bold transition-colors group-hover:text-primary">{project.title}</h3>
                  </div>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-background/70 text-muted-foreground transition-all hover:border-primary/25 hover:text-primary"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>

                <p className="text-sm leading-7 text-muted-foreground">{project.desc}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-primary/15 bg-primary/10 px-3 py-1 text-[10px] font-mono uppercase tracking-[0.2em] text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary"
                >
                  View project
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </motion.article>
            ))}
          </div>

          <motion.aside
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="rounded-[30px] border border-primary/20 bg-primary/10 p-7"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-background/70">
                <Sparkles className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-primary">Project language</p>
                <h3 className="mt-1 text-2xl font-bold">Designed to look premium and work hard</h3>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              {projectHighlights.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.18 + index * 0.08, duration: 0.55 }}
                  className="rounded-2xl border border-white/10 bg-background/55 px-5 py-4 text-sm leading-7 text-foreground/90"
                >
                  {item}
                </motion.div>
              ))}
            </div>

            <p className="mt-6 text-sm leading-7 text-foreground/85">
              Portfolio projects are positioned not as random demos, but as proof that the same person can handle
              frontend presentation, backend logic, AI-driven speed, and operational usefulness together.
            </p>
          </motion.aside>
        </div>
      </div>
    </section>
  );
};

export default Projects;
