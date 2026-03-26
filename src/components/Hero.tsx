import { motion } from "framer-motion";
import uplakshy from "@/assets/uplakshy.jpeg";
import { Github, Linkedin, Instagram, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

const roles = [
  "Full Stack MERN Developer",
  "Shopify Expert",
  "Web Systems Architect",
  "Inventory Systems Builder",
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const current = roles[roleIndex];
    const speed = isDeleting ? 40 : 80;

    if (!isDeleting && charIndex === current.length) {
      setTimeout(() => setIsDeleting(true), 1500);
      return;
    }
    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayText(current.substring(0, isDeleting ? charIndex - 1 : charIndex + 1));
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] animate-pulse-glow" />
      
      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-20 right-20 w-20 h-20 border border-primary/20 rounded-lg"
        animate={{ rotate: 360, y: [0, -15, 0] }}
        transition={{ rotate: { duration: 20, repeat: Infinity, ease: "linear" }, y: { duration: 5, repeat: Infinity, ease: "easeInOut" } }}
      />
      <motion.div
        className="absolute bottom-32 left-16 w-12 h-12 border border-primary/10 rounded-full"
        animate={{ y: [0, -25, 0], x: [0, 10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-40 left-1/4 w-3 h-3 bg-primary/30 rounded-full"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center gap-8">
          {/* Profile image */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="relative"
          >
            <div className="w-40 h-40 rounded-full overflow-hidden border-2 border-primary/50 border-glow">
              <img src={uplakshy} alt="Uplakshy Pathak" className="w-full h-full object-cover" />
            </div>
            <motion.div
              className="absolute -inset-3 rounded-full border border-primary/20"
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>

          {/* Name */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <p className="font-mono text-sm text-primary tracking-widest uppercase mb-3">Hello, I'm</p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
              <span className="gradient-text">Uplakshy</span>
              <br />
              <span className="text-foreground">Pathak</span>
            </h1>
          </motion.div>

          {/* Role */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="flex items-center gap-3 font-mono text-sm text-muted-foreground">
              <span className="w-8 h-px bg-primary/50" />
              <span>{displayText}<span className="animate-pulse text-primary">|</span></span>
              <span className="w-8 h-px bg-primary/50" />
            </div>
            <p className="text-muted-foreground max-w-md text-sm leading-relaxed">
              Automating Pharmacy Operations | Inventory & Web Systems Expert | Building scalable web applications
            </p>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex items-center gap-4"
          >
            {[
              { icon: Linkedin, href: "https://www.linkedin.com/in/uplakshy-pathak-4988682b6/" },
              { icon: Instagram, href: "https://www.instagram.com/sujal_pathak_05/" },
              { icon: Github, href: "#" },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 hover:border-glow"
              >
                <social.icon size={18} />
              </a>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-10"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-muted-foreground"
            >
              <ChevronDown size={20} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
