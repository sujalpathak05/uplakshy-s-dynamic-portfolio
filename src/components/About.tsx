import { motion } from "framer-motion";
import { Bot, Code2, Database, ShoppingBag, Sparkles, Workflow } from "lucide-react";

const skills = [
  { icon: Code2, label: "React / Next.js", desc: "Animated frontend systems" },
  { icon: Workflow, label: "Prompt Engineering", desc: "Hyper-fast AI workflows" },
  { icon: Database, label: "Node / Databases", desc: "Backend and data architecture" },
  { icon: ShoppingBag, label: "Shopify / E-commerce", desc: "Conversion-focused stores" },
];

const highlights = [
  "AI-assisted delivery that still feels custom",
  "Prompt-engineering mindset for faster execution",
  "Motion-rich frontend polish with business-first logic",
];

const About = () => {
  return (
    <section id="about" className="relative px-6 py-32">
      <motion.div
        className="absolute right-16 top-16 h-24 w-24 rounded-full border border-primary/15"
        animate={{ rotate: 360, scale: [1, 1.12, 1] }}
        transition={{ rotate: { duration: 18, repeat: Infinity, ease: "linear" }, scale: { duration: 5, repeat: Infinity } }}
      />

      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-primary">01 - About</p>
          <h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
            Building digital systems with <span className="gradient-text">AI speed, motion, and real business logic</span>
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-8 xl:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="rounded-[32px] border border-white/10 bg-card/80 p-8 backdrop-blur-xl md:p-10"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-mono uppercase tracking-[0.24em] text-primary">
              <Sparkles className="h-4 w-4" />
              Full stack + AI profile
            </div>

            <div className="space-y-5 text-base leading-8 text-muted-foreground">
              <p>
                Uplakshy Pathak is a full stack MERN developer, Shopify expert, and AI-focused builder who creates
                modern web experiences with performance, clarity, and visual energy. The goal is not just to ship pages,
                but to build digital systems that actually support growth.
              </p>
              <p>
                Current work goes beyond frontend screens. It includes backend logic, dashboards, inventory systems,
                automation flows, content structure, and prompt-engineering-driven delivery. That blend makes the output
                faster, sharper, and more practical for real operations.
              </p>
              <p>
                Whether the project is a branded website, business software, or AI workflow, the approach stays the
                same: understand the business bottleneck, design a clean interface, and connect it to reliable logic so
                the experience feels premium and useful at the same time.
              </p>
            </div>

            <div className="mt-8 grid gap-3">
              {highlights.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.08, duration: 0.55 }}
                  className="rounded-2xl border border-primary/15 bg-primary/10 px-5 py-4 text-sm text-foreground/90"
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.label}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.22 + index * 0.08, duration: 0.55 }}
                className="group rounded-[28px] border border-white/10 bg-card/80 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-primary/25"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                  <skill.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mt-5 text-lg font-semibold transition-colors group-hover:text-primary">{skill.label}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{skill.desc}</p>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.52, duration: 0.55 }}
              className="sm:col-span-2 rounded-[28px] border border-primary/20 bg-primary/10 p-6"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-background/70">
                  <Bot className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-primary">What stands out</p>
                  <h3 className="mt-1 text-xl font-bold">AI-first execution with practical engineering discipline</h3>
                </div>
              </div>
              <p className="mt-4 text-sm leading-7 text-foreground/85">
                Prompt engineering is used here as a real production advantage, not a buzzword. That means faster
                ideation, smarter content direction, cleaner system planning, and stronger delivery momentum across the
                full stack.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
