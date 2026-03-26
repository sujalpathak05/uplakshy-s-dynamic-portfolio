import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Sharma Pharmacy",
    url: "https://sharmapharmacy.com",
    desc: "Complete pharmacy management system with inventory tracking, online ordering, and automated operations. Built with modern web technologies.",
    tags: ["Full Stack", "E-Commerce", "Inventory"],
  },
  {
    title: "KikaKiki.in",
    url: "https://kikakiki.in",
    desc: "Dynamic web platform designed and developed from scratch with a focus on user experience and performance.",
    tags: ["Web Design", "Development", "UI/UX"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-xs text-primary tracking-widest uppercase mb-2">03 — Projects</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-16">
            Featured <span className="gradient-text">Work</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.7 }}
              className="group relative rounded-2xl overflow-hidden bg-card border border-border card-hover"
            >
              {/* Gradient top accent */}
              <div className="h-1 w-full bg-gradient-to-r from-primary/80 via-primary to-primary/80" />
              
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-mono px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                      {tag}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
