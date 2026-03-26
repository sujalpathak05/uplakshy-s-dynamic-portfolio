import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Linkedin, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="font-mono text-xs text-primary tracking-widest uppercase mb-2">04 — Contact</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-muted-foreground mb-12">
            Have a project in mind or want to collaborate? Feel free to reach out.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="max-w-lg mx-auto space-y-4"
        >
          <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border card-hover">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Location</p>
              <p className="text-sm font-medium">Bareilly, Uttar Pradesh, India</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border card-hover">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Phone className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Phone</p>
              <a href="tel:+918218552718" className="text-sm font-medium hover:text-primary transition-colors">
                +91 8218552718
              </a>
            </div>
          </div>

          <a
            href="https://www.linkedin.com/in/uplakshy-pathak-4988682b6/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border card-hover block"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Linkedin className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">LinkedIn</p>
              <p className="text-sm font-medium hover:text-primary transition-colors">Uplakshy Pathak</p>
            </div>
          </a>

          <a
            href="https://www.instagram.com/sujal_pathak_05/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border card-hover block"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Instagram className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Instagram</p>
              <p className="text-sm font-medium hover:text-primary transition-colors">@sujal_pathak_05</p>
            </div>
          </a>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="container mx-auto px-6 mt-20 pt-8 border-t border-border">
        <p className="text-center text-xs text-muted-foreground font-mono">
          © 2026 Uplakshy Pathak. Built with passion.
        </p>
      </div>
    </section>
  );
};

export default Contact;
