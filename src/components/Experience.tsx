import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    role: "Senior Software Engineer",
    company: "Sharma Pharmacy",
    period: "Feb 2022 — Present",
    desc: "Managing and overseeing all technical operations. Designing, developing, and maintaining the company's website and software systems.",
    tags: ["Software Development"],
  },
  {
    role: "Chat Executive",
    company: "Crown Castle",
    period: "Jul 2021 — Feb 2022",
    desc: "Front-End Development and Communication support for the organization.",
    tags: ["Front-End", "Communication"],
  },
  {
    role: "Full-Stack Developer",
    company: "Tech Vision — Freelance",
    period: "Nov 2019 — Feb 2021",
    desc: "Creating dynamic websites and full-stack web applications for various clients.",
    tags: ["Web Design", "MERN Stack"],
  },
];

const education = [
  {
    degree: "BCA, Computer Science",
    institution: "RBMI Group of Institutions",
    period: "Aug 2019 — Aug 2022",
    tags: ["Web Applications", "Front-End Development"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-xs text-primary tracking-widest uppercase mb-2">02 — Experience</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-16">
            Where I've <span className="gradient-text">Worked</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 mb-20">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="p-6 rounded-xl bg-card border border-border card-hover group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">{exp.role}</h3>
                  <p className="text-xs text-primary">{exp.company}</p>
                </div>
              </div>
              <p className="text-xs text-muted-foreground font-mono mb-3">{exp.period}</p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{exp.desc}</p>
              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span key={tag} className="text-[10px] font-mono px-2 py-1 rounded-full bg-primary/10 text-primary">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-xs text-primary tracking-widest uppercase mb-2">Education</p>
          <h3 className="text-2xl font-bold mb-8">Academic <span className="gradient-text">Background</span></h3>
        </motion.div>

        {education.map((edu, i) => (
          <motion.div
            key={edu.institution}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-6 rounded-xl bg-card border border-border card-hover max-w-xl"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-sm">{edu.degree}</h3>
                <p className="text-xs text-primary">{edu.institution}</p>
              </div>
            </div>
            <p className="text-xs text-muted-foreground font-mono mb-3">{edu.period}</p>
            <div className="flex flex-wrap gap-2">
              {edu.tags.map((tag) => (
                <span key={tag} className="text-[10px] font-mono px-2 py-1 rounded-full bg-primary/10 text-primary">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
