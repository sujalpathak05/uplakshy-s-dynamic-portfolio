import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Sparkles } from "lucide-react";

const experiences = [
  {
    role: "Senior Software Engineer",
    company: "Sharma Pharmacy",
    period: "Feb 2022 - Present",
    desc: "Leading technical operations, website systems, inventory software, and digital workflows with a strong focus on practical business outcomes.",
    tags: ["Operations Software", "Automation", "Leadership"],
  },
  {
    role: "Chat Executive",
    company: "Crown Castle",
    period: "Jul 2021 - Feb 2022",
    desc: "Worked across communication-heavy workflows and frontend-facing responsibilities where clarity and user interaction mattered daily.",
    tags: ["Support Flow", "Communication", "Frontend"],
  },
  {
    role: "Full Stack Developer",
    company: "Tech Vision Freelance",
    period: "Nov 2019 - Feb 2021",
    desc: "Built websites and full stack solutions for different clients with a mix of design execution, business logic, and delivery speed.",
    tags: ["Freelance", "MERN", "Delivery"],
  },
];

const education = [
  {
    degree: "BCA, Computer Science",
    institution: "RBMI Group of Institutions",
    period: "Aug 2019 - Aug 2022",
    tags: ["Computer Science", "Web Applications", "Frontend"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="relative px-6 py-32">
      <motion.div
        className="absolute left-10 top-24 h-14 w-14 rounded-full bg-primary/10 blur-md"
        animate={{ y: [0, -18, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-primary">02 - Experience</p>
          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Where technical depth meets <span className="gradient-text">real-world business delivery</span>
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-6 xl:grid-cols-3">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.65 }}
              className="group rounded-[28px] border border-white/10 bg-card/80 p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-primary/25"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                  <Briefcase className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-primary">{exp.period}</p>
                  <h3 className="mt-2 text-xl font-semibold transition-colors group-hover:text-primary">{exp.role}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{exp.company}</p>
                </div>
              </div>

              <p className="mt-6 text-sm leading-7 text-muted-foreground">{exp.desc}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-primary/15 bg-primary/10 px-3 py-1 text-[10px] font-mono uppercase tracking-[0.2em] text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          {education.map((edu) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="rounded-[28px] border border-white/10 bg-card/80 p-7 backdrop-blur-xl"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                  <GraduationCap className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-primary">Education</p>
                  <h3 className="mt-2 text-xl font-semibold">{edu.degree}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{edu.institution}</p>
                  <p className="mt-3 text-sm text-muted-foreground">{edu.period}</p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {edu.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-primary/15 bg-primary/10 px-3 py-1 text-[10px] font-mono uppercase tracking-[0.2em] text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="rounded-[28px] border border-primary/20 bg-primary/10 p-7"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-background/70">
                <Sparkles className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-primary">Experience angle</p>
                <h3 className="mt-1 text-xl font-bold">Strong on delivery, not just theory</h3>
              </div>
            </div>
            <p className="mt-5 text-sm leading-7 text-foreground/85">
              The career pattern here is useful: client delivery, operational systems, software ownership, and daily
              business pressure. That combination creates websites and AI systems that are more grounded, faster to ship,
              and easier for teams to actually run.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
