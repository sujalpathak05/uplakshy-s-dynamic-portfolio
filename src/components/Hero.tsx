import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Github,
  Instagram,
  Linkedin,
  MessageCircle,
  Play,
  Sparkles,
  Zap,
} from "lucide-react";

import uplakshy from "@/assets/uplakshy.jpeg";
import { blogs } from "@/data/blogs";
import { siteProfile } from "@/data/site";

const rotatingRoles = [
  "Noida Best Developer",
  "Best AI Developer",
  "Prompt Engineer With Production Taste",
  "Motion-First MERN Builder",
];

const signalPills = [
  "Noida Best Developer",
  "Best AI Developer",
  "Case-Study Driven Work",
  "Motion + Personality",
];

const proofStats = [
  {
    value: `${blogs.length}+`,
    label: "Long-form articles",
    detail: "A real content moat, not placeholder copy",
  },
  {
    value: "2",
    label: "Live project demos",
    detail: "Public builds you can open right now",
  },
  {
    value: "4",
    label: "Build lanes",
    detail: "Web, AI, automation, and systems",
  },
];

const personalityNotes = [
  "Sharp visuals that do not feel templated",
  "AI speed without generic output",
  "Copy, motion, and engineering working together",
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const current = rotatingRoles[roleIndex];
    const speed = isDeleting ? 34 : 68;

    if (!isDeleting && charIndex === current.length) {
      const pause = window.setTimeout(() => setIsDeleting(true), 1100);
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
        className="absolute left-[7%] top-28 h-32 w-32 rounded-full border border-primary/20"
        animate={{ rotate: 360, y: [0, -18, 0] }}
        transition={{ rotate: { duration: 18, repeat: Infinity, ease: "linear" }, y: { duration: 6, repeat: Infinity } }}
      />
      <motion.div
        className="absolute bottom-20 right-[8%] h-48 w-48 rounded-[3rem] border border-white/10"
        animate={{ rotate: [0, 7, -7, 0], y: [0, 15, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute inset-x-0 top-[34%] h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
        animate={{ opacity: [0.2, 0.8, 0.2], scaleX: [0.95, 1, 0.95] }}
        transition={{ duration: 7, repeat: Infinity }}
      />

      <div className="container relative z-10 mx-auto">
        <div className="grid items-center gap-16 lg:grid-cols-[minmax(0,1.08fr)_minmax(340px,0.92fr)]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="flex flex-wrap gap-3"
            >
              {signalPills.map((pill) => (
                <span
                  key={pill}
                  className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-mono uppercase tracking-[0.24em] text-primary"
                >
                  <Sparkles className="h-3.5 w-3.5" />
                  {pill}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 34 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12, duration: 0.8 }}
              className="mt-8"
            >
              <p className="font-mono text-sm uppercase tracking-[0.34em] text-primary">Hero rewrite with personality</p>
              <h1 className="mt-5 max-w-5xl text-5xl font-bold leading-[0.95] md:text-7xl lg:text-[5.6rem]">
                Websites with <span className="gradient-text">pulse</span>.
                <br />
                AI systems with <span className="text-foreground">actual bite.</span>
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-8 text-muted-foreground md:text-lg">
                I build motion-rich websites, case-study driven portfolios, and AI-assisted product systems that feel
                sharp, confident, and ready to sell before the first call even happens. If someone is searching for the
                Noida Best Developer or Best AI Developer, this is the level of energy and clarity I bring to the build.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.24, duration: 0.75 }}
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
                Strategy, copy, motion, proof, and frontend all in one flow
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.36, duration: 0.8 }}
              className="mt-10 grid gap-4 sm:grid-cols-3"
            >
              {proofStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.42 + index * 0.08, duration: 0.55 }}
                  className="rounded-[1.6rem] border border-white/10 bg-card/75 p-5 backdrop-blur-xl"
                >
                  <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.22em] text-primary">{stat.label}</p>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{stat.detail}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-transform hover:-translate-y-0.5"
              >
                View Case Studies
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={siteProfile.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-6 py-3 text-sm font-semibold text-primary transition-transform hover:-translate-y-0.5"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp Me
              </a>
              <a
                href={siteProfile.portfolioHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-card/75 px-6 py-3 text-sm font-semibold text-foreground transition-transform hover:-translate-y-0.5"
              >
                <Play className="h-4 w-4 text-primary" />
                Open Live Demo
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.62, duration: 0.8 }}
              className="mt-10 grid gap-3"
            >
              {personalityNotes.map((note, index) => (
                <div
                  key={note}
                  className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-background/55 px-4 py-3 text-sm text-foreground/90 backdrop-blur-xl"
                  style={{ maxWidth: `${32 + index * 2}rem` }}
                >
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  {note}
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.72, duration: 0.8 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              {[
                { icon: Linkedin, href: siteProfile.linkedinHref, label: "LinkedIn" },
                { icon: Instagram, href: siteProfile.instagramHref, label: "Instagram" },
                { icon: Github, href: siteProfile.githubHref, label: "GitHub" },
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
            initial={{ opacity: 0, x: 34 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.18, duration: 0.8 }}
            className="relative mx-auto w-full max-w-[31rem]"
          >
            <motion.div
              className="absolute -inset-6 rounded-[2.8rem] border border-primary/15"
              animate={{ rotate: 360 }}
              transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute -left-10 top-12 rounded-3xl border border-white/10 bg-background/75 px-4 py-3 shadow-[0_20px_50px_hsl(220_20%_4%_/_0.45)] backdrop-blur-xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary">Current mode</p>
              <p className="mt-2 text-sm font-semibold">Shipping motion before shipping noise.</p>
            </motion.div>
            <motion.div
              className="absolute -right-6 bottom-14 rounded-3xl border border-primary/20 bg-primary/10 px-4 py-3 shadow-[0_20px_50px_hsl(174_72%_50%_/_0.12)]"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5.6, repeat: Infinity }}
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary">Proof</p>
              <p className="mt-2 text-sm font-semibold">2 live demos + 50 blog pages</p>
            </motion.div>

            <div className="relative overflow-hidden rounded-[2.7rem] border border-white/10 bg-card/80 p-6 shadow-[0_24px_90px_hsl(220_20%_4%_/_0.5)] backdrop-blur-2xl">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/80 to-transparent" />

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-primary">Creative control panel</p>
                  <h2 className="mt-2 text-2xl font-bold">{siteProfile.name}</h2>
                </div>
                <span className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-[11px] font-mono uppercase tracking-[0.22em] text-primary">
                  AI + MERN + Motion
                </span>
              </div>

              <div className="mt-6 overflow-hidden rounded-[2rem] border border-primary/15 bg-background/70 p-3">
                <img
                  src={uplakshy}
                  alt="Uplakshy Pathak"
                  className="h-[23rem] w-full rounded-[1.6rem] object-cover object-center"
                />
              </div>

              <div className="mt-6 grid gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.38, duration: 0.55 }}
                  className="rounded-[1.8rem] border border-white/10 bg-background/65 p-5"
                >
                  <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-primary">Signature energy</p>
                  <p className="mt-3 text-lg font-semibold leading-snug">
                    "I like interfaces with swagger, proof with structure, and automations that remove boring work."
                  </p>
                </motion.div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    "Case-study writing",
                    "Demo-first presentation",
                    "Prompt-powered systems",
                    "Frontend with personality",
                  ].map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.46 + index * 0.07, duration: 0.5 }}
                      className="rounded-[1.4rem] border border-white/10 bg-background/65 p-4 text-sm font-medium"
                    >
                      {item}
                    </motion.div>
                  ))}
                </div>
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
