import { motion } from "framer-motion";
import { Instagram, Linkedin, MapPin, MessageCircle, Phone, Sparkles } from "lucide-react";

import { siteProfile } from "@/data/site";

const contactCards = [
  {
    icon: MapPin,
    label: "Location",
    value: siteProfile.location,
  },
  {
    icon: Phone,
    label: "Phone",
    value: siteProfile.phone,
    href: siteProfile.phoneHref,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat directly now",
    href: siteProfile.whatsappHref,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Uplakshy Pathak",
    href: siteProfile.linkedinHref,
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@sujal_pathak_05",
    href: siteProfile.instagramHref,
  },
];

const Contact = () => {
  return (
    <section id="contact" className="relative px-6 py-24">
      <motion.div
        className="absolute left-10 top-16 h-20 w-20 rounded-full border border-primary/15"
        animate={{ rotate: 360, y: [0, -14, 0] }}
        transition={{ rotate: { duration: 18, repeat: Infinity, ease: "linear" }, y: { duration: 5, repeat: Infinity } }}
      />

      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-mono uppercase tracking-[0.24em] text-primary">
            <Sparkles className="h-4 w-4" />
            05 - Contact
          </div>
          <h2 className="mt-6 text-4xl font-bold md:text-5xl">
            Let's build something <span className="gradient-text">animated, strategic, and high-output</span>
          </h2>
          <p className="mt-6 text-base leading-8 text-muted-foreground">
            For portfolio websites, AI systems, prompt-engineering workflows, business software, dashboards, or motion-rich frontend experiences, reach out directly below.
          </p>
        </motion.div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-5 md:grid-cols-2 xl:grid-cols-3">
          {contactCards.map((card, index) => {
            const content = (
              <div className="group rounded-[28px] border border-white/10 bg-card/80 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-primary/25">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                  <card.icon className="h-5 w-5 text-primary" />
                </div>
                <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.24em] text-primary">{card.label}</p>
                <p className="mt-3 text-lg font-semibold transition-colors group-hover:text-primary">{card.value}</p>
              </div>
            );

            return (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.6 }}
              >
                {card.href ? (
                  <a
                    href={card.href}
                    target={card.href.startsWith("http") ? "_blank" : undefined}
                    rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="block"
                  >
                    {content}
                  </a>
                ) : (
                  content
                )}
              </motion.div>
            );
          })}
        </div>

        <div className="mt-20 border-t border-white/10 pt-8">
          <p className="text-center text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
            Copyright 2026 {siteProfile.name}. Built with motion, AI speed, and intent.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
