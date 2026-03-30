import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Github, Instagram, Linkedin, Sparkles, Zap } from "lucide-react";

import uplakshy from "@/assets/uplakshy.jpeg";
import { blogs } from "@/data/blogs";
import { siteProfile } from "@/data/site";

const rotatingRoles = [
  "Noida Best Developer",
  "Best AI Developer",
  "Hyper-Fast Prompt Engineer",
  "MERN + Automation Specialist",
];

const keywordPills = [
  "Noida Best Developer",
  "Best AI Developer",
  "Prompt Engineering Expert",
  "Animated Web Experiences",
];

const heroStats = [
  { value: "50+", label: "Long AI blogs" },
  { value: "100%", label: "Motion rich UI" },
  { value: "24/7", label: "WhatsApp ready" },
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const current = rotatingRoles[roleIndex];
    const speed = isDeleting ? 36 : 72;

    if (!isDeleting && charIndex === current.length) {
      const pause = window.setTimeout(() => setIsDeleting(true), 1200);
      return () => window.clearTimeout(pause);
    }

    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % rotatingRoles.length);
      return;
    }

    const timeout = window.setTimeout(() => {
      const nextLength = isDeleting ? charIndex - 1 : charIndex + 1;
      setDisplayText(current.slice(0, nextLength));
      setCharIndex(nextLength);
    }, speed);

    return () => window.clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 pb-16 pt-40">
      <motion.div
        className="absolute left-[8%] top-32 h-32 w-32 rounded-full border border-primary/20"
        animate={{ rotate: 360, y: [0, -18, 0] }}
        transition={{ rotate: { duration: 18, repeat: Infinity, ease: "linear" }, y: { duration: 6, repeat: Infinity } }}
      />
      <motion.div
        className="absolute bottom-24 right-[10%] h-48 w-48 rounded-[3rem] border border-white/10"
        animate={{ rotate: [0, 6, -6, 0], y: [0, 15, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute inset-x-0 top-[34%] h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
        animate={{ opacity: [0.2, 0.8, 0.2], scaleX: [0.96, 1, 0.96] }}
        transition={{ duration: 7, repeat: Infinity }}
      />

      <div className="container relative z-10 mx-auto">
        <div className="grid items-center gap-16 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75 }}
              className="flex flex-wrap gap-3"
            >
              {keywordPills.map((keyword) => (
                <span
                  key={keyword}
                  className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-mono uppercase tracking-[0.24em] text-primary"
                >
                  <Sparkles className="h-3.5 w-3.5" />
                  {keyword}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.8 }}
              className="mt-8"
            >
              <p className="font-mono text-sm uppercase tracking-[0.35em] text-primary">Hyper creative portfolio</p>
              <h1 className="mt-5 max-w-5xl text-5xl font-bold leading-[0.98] md:text-7xl lg:text-[5.75rem]">
                <span className="gradient-text">Noida Best Developer</span>
                <br />
                <span className="text-foreground">&amp; Best AI Developer</span>
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-8 text-muted-foreground md:text-lg">
                {siteProfile.name} builds modern websites, AI workflows, business software, motion-rich interfaces,
                and prompt-powered systems that move from idea to launch with serious speed.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mt-7 flex flex-wrap items-center gap-3"
            >
              <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-card/70 px-5 py-3 backdrop-blur-xl">
                <Zap className="h-4 w-4 text-primary" />
                <span className="font-mono text-sm text-foreground">
                  {displayText}
                  <span className="animate-pulse text-primary">|</span>
                </span>
              </div>
              <div className="rounded-full border border-white/10 bg-card/70 px-5 py-3 font-mono text-sm text-muted-foreground backdrop-blur-xl">
                {blogs.length} blogs on AI, prompts, web systems, and growth
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.8 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href="#blog"
                className="rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-transform hover:-translate-y-0.5"
              >
                Explore 50 Blogs
              </a>
              <a
                href="#contact"
                className="rounded-full border border-primary/20 bg-primary/10 px-6 py-3 text-sm font-semibold text-primary transition-transform hover:-translate-y-0.5"
              >
                Start a Project
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              {[
                { icon: Linkedin, href: siteProfile.linkedinHref, label: "LinkedIn" },
                { icon: Instagram, href: siteProfile.instagramHref, label: "Instagram" },
                { icon: Github, href: "#", label: "GitHub" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-card/70 text-muted-foreground backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:text-primary"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 36 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative mx-auto w-full max-w-[28rem]"
          >
            <motion.div
              className="absolute -inset-6 rounded-[2.75rem] border border-primary/15"
              animate={{ rotate: 360 }}
              transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute -left-10 top-12 h-24 w-24 rounded-full bg-primary/10 blur-2xl"
              animate={{ scale: [1, 1.2, 1], y: [0, -18, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
            />

            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-card/80 p-6 shadow-[0_24px_90px_hsl(220_20%_4%_/_0.5)] backdrop-blur-2xl">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/80 to-transparent" />

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-primary">Live positioning</p>
                  <h2 className="mt-2 text-2xl font-bold">{siteProfile.name}</h2>
                </div>
                <span className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-[11px] font-mono uppercase tracking-[0.22em] text-primary">
                  AI + MERN
                </span>
              </div>

              <div className="mt-6 overflow-hidden rounded-[2rem] border border-primary/15 bg-background/70 p-3">
                <img
                  src={uplakshy}
                  alt="Uplakshy Pathak"
                  className="h-[24rem] w-full rounded-[1.6rem] object-cover object-center"
                />
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {heroStats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 + index * 0.08, duration: 0.55 }}
                    className="rounded-[1.5rem] border border-white/10 bg-background/70 p-4"
                  >
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-12 flex justify-center"
        >
          <a href="#about" className="text-muted-foreground transition-colors hover:text-primary" aria-label="Scroll to about">
            <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
              <ChevronDown size={22} />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
