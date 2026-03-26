import { motion } from "framer-motion";
import { ArrowUpRight, Bot, Briefcase, Globe, Layers3, Pill } from "lucide-react";

const services = [
  "Website Development (Business & E-commerce)",
  "MERN Stack Development",
  "AI Chatbot & Automation Systems",
  "Pharmacy Management Software",
  "Inventory & Billing Systems",
];

const reasons = [
  {
    icon: Briefcase,
    title: "Real-world tech leadership",
    desc: "Hands-on delivery experience as Tech Head at Sharma Pharmacy, building systems that support daily operations.",
  },
  {
    icon: Bot,
    title: "AI + automation expertise",
    desc: "Focused on practical AI workflows, chatbot systems, and business automation that save time and reduce manual work.",
  },
  {
    icon: Layers3,
    title: "Strong backend engineering",
    desc: "Comfortable with scalable APIs, inventory logic, billing flows, and secure data-driven application architecture.",
  },
];

const capabilityChips = [
  "Node.js",
  "React.js",
  "MongoDB",
  "Express.js",
  "Automation",
  "Inventory Systems",
];

const Blog = () => {
  return (
    <section id="blog" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(174_72%_50%_/_0.12),transparent_35%),radial-gradient(circle_at_bottom_left,hsl(200_80%_60%_/_0.1),transparent_30%)]" />
      <motion.div
        className="absolute right-8 top-24 h-24 w-24 rounded-3xl border border-primary/20"
        animate={{ rotate: 360, y: [0, -12, 0] }}
        transition={{ rotate: { duration: 18, repeat: Infinity, ease: "linear" }, y: { duration: 5, repeat: Infinity, ease: "easeInOut" } }}
      />
      <motion.div
        className="absolute left-10 bottom-20 h-16 w-16 rounded-full bg-primary/10 blur-sm"
        animate={{ scale: [1, 1.2, 1], y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <p className="font-mono text-xs text-primary tracking-widest uppercase mb-2">04 - Blog</p>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Uplakshy Pathak <span className="gradient-text">Best Web Developer in Noida</span>
          </h2>
          <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-3xl leading-relaxed">
            Uplakshy Pathak is a professional MERN Stack Developer and AI Web Developer known for building scalable
            web applications, automation systems, and business-first digital products.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 xl:grid-cols-[1.25fr_0.75fr]">
          <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative overflow-hidden rounded-[28px] border border-border bg-card/90 p-8 md:p-10 border-glow"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent" />

            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="rounded-full border border-primary/25 bg-primary/10 px-4 py-1 text-[11px] font-mono uppercase tracking-[0.25em] text-primary">
                Featured Insight
              </span>
              <span className="rounded-full border border-border px-4 py-1 text-[11px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
                MERN + AI + Automation
              </span>
            </div>

            <h3 className="text-2xl md:text-4xl font-bold leading-tight mb-6">
              Building modern websites, pharmacy systems, and AI-powered workflows that help businesses grow.
            </h3>

            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                As the Tech Head at Sharma Pharmacy, he specializes in smart pharmacy management systems, inventory
                tools, billing workflows, and AI-powered solutions designed around real business needs.
              </p>
              <p>
                If you are looking for the best website developer in Noida, he offers fast, secure, and modern web
                development backed by strong technical depth in Node.js, React.js, MongoDB, Express.js, and advanced
                backend systems.
              </p>
              <p>
                His work stands out because it focuses on scalable, performance-driven applications that solve
                operational problems, not just visual website delivery. That practical blend of engineering and
                business problem-solving makes his profile different from many other developers in India.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {capabilityChips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[11px] font-mono text-primary"
                >
                  {chip}
                </span>
              ))}
            </div>
          </motion.article>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="rounded-[24px] border border-border bg-secondary/50 p-7"
            >
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10">
                  <Globe className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-primary">Services</p>
                  <h3 className="text-xl font-bold">What he builds</h3>
                </div>
              </div>

              <div className="space-y-3">
                {services.map((service, index) => (
                  <motion.div
                    key={service}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.25 + index * 0.08 }}
                    className="rounded-2xl border border-border bg-background/40 px-4 py-3 text-sm text-muted-foreground"
                  >
                    {service}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.a
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              href="https://uplakshypathak-portfolio.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-[24px] border border-primary/20 bg-primary/10 p-7 transition-all duration-300 hover:border-primary/50 hover:bg-primary/15"
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-background/60">
                  <Pill className="h-5 w-5 text-primary" />
                </div>
                <ArrowUpRight className="h-5 w-5 text-primary transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
              </div>
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-primary">Contact</p>
              <h3 className="mt-2 text-2xl font-bold">For projects, collaborations, or business inquiries</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Visit the portfolio to explore the work and connect for modern web development, AI solutions, and
                business automation systems.
              </p>
            </motion.a>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 + index * 0.1 }}
              className="rounded-[24px] border border-border bg-card/70 p-6 card-hover"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                <reason.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{reason.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
