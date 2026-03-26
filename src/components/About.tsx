import { motion } from "framer-motion";
import { Code2, Database, ShoppingBag, Server } from "lucide-react";

const skills = [
  { icon: Code2, label: "React / Next.js", desc: "Frontend Development" },
  { icon: Server, label: "Node.js / Express", desc: "Backend APIs" },
  { icon: Database, label: "MongoDB / MySQL", desc: "Database Design" },
  { icon: ShoppingBag, label: "Shopify", desc: "E-Commerce Solutions" },
];

const About = () => {
  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-xs text-primary tracking-widest uppercase mb-2">01 — About</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-12">
            Building <span className="gradient-text">Digital</span> Experiences
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-5"
          >
            <p className="text-muted-foreground leading-relaxed">
              I'm a passionate Full Stack MERN Developer and Shopify Expert based in Bareilly, Uttar Pradesh. 
              With expertise in building scalable web applications, I specialize in automating business operations 
              and creating dynamic e-commerce solutions.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Currently serving as a Senior Software Engineer at Sharma Pharmacy, I manage and oversee all 
              technical operations, from designing and maintaining the company's website to building robust 
              inventory and software systems.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My journey includes a BCA in Computer Science from RBMI Group of Institutions and a 
              Master Program certification in Full Stack Development (MERN Stack) from Livewire.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {skills.map((skill, i) => (
              <motion.div
                key={skill.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="p-5 rounded-xl bg-card border border-border card-hover group cursor-default"
              >
                <skill.icon className="w-6 h-6 text-primary mb-3 group-hover:text-glow transition-all" />
                <h3 className="font-semibold text-sm mb-1">{skill.label}</h3>
                <p className="text-xs text-muted-foreground">{skill.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
