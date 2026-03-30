import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Sparkles, X } from "lucide-react";
import { useLocation } from "react-router-dom";

import { siteProfile } from "@/data/site";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

const topKeywords = [
  "Noida Best Developer",
  "Best AI Developer",
  "Hyper-Fast Prompt Engineering",
  "MERN + AI + Motion Design",
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const resolvedItems = useMemo(
    () =>
      navItems.map((item) => ({
        ...item,
        target: location.pathname === "/" ? item.href : `/${item.href}`,
      })),
    [location.pathname],
  );

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-50">
        <motion.div
          initial={{ y: -24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.55 }}
          className="border-b border-white/10 bg-black/35 backdrop-blur-xl"
        >
          <div className="overflow-hidden py-2">
            <div className="keyword-marquee whitespace-nowrap">
              {[...topKeywords, ...topKeywords].map((keyword, index) => (
                <span
                  key={`${keyword}-${index}`}
                  className="mx-3 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-[11px] font-mono uppercase tracking-[0.26em] text-primary"
                >
                  <Sparkles className="h-3.5 w-3.5" />
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.nav
          initial={{ y: -80 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.65 }}
          className={`transition-all duration-300 ${scrolled ? "border-b border-white/10 bg-background/80 shadow-[0_20px_60px_hsl(220_20%_4%_/_0.45)] backdrop-blur-xl" : "bg-transparent"}`}
        >
          <div className="container mx-auto mt-[1px] flex items-center justify-between px-6 py-4">
            <a href="/" className="flex items-center gap-3">
              <span className="rounded-full border border-primary/25 bg-primary/10 px-3 py-2 font-mono text-sm text-primary">
                {siteProfile.shortName}
              </span>
              <span className="hidden text-sm font-medium text-muted-foreground md:inline">
                {siteProfile.title}
              </span>
            </a>

            <div className="hidden items-center gap-8 md:flex">
              {resolvedItems.map((item) => (
                <a
                  key={item.label}
                  href={item.target}
                  className="text-sm font-mono text-muted-foreground transition-colors hover:text-primary"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="hidden items-center gap-3 md:flex">
              <a
                href={siteProfile.phoneHref}
                className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-mono uppercase tracking-[0.24em] text-primary transition-all hover:border-primary/40 hover:bg-primary/15"
              >
                Call
              </a>
              <a
                href={siteProfile.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-foreground px-4 py-2 text-xs font-mono uppercase tracking-[0.24em] text-background transition-transform hover:-translate-y-0.5"
              >
                WhatsApp
              </a>
            </div>

            <button onClick={() => setMobileOpen(!mobileOpen)} className="text-foreground md:hidden" aria-label="Toggle menu">
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </motion.nav>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background/95 pt-28 backdrop-blur-xl"
          >
            <div className="container mx-auto flex flex-col items-center gap-8 px-6 pt-10">
              {resolvedItems.map((item) => (
                <a
                  key={item.label}
                  href={item.target}
                  onClick={() => setMobileOpen(false)}
                  className="text-2xl font-semibold text-foreground transition-colors hover:text-primary"
                >
                  {item.label}
                </a>
              ))}

              <div className="mt-4 flex flex-col gap-4 text-center">
                <a href={siteProfile.phoneHref} className="text-lg font-medium text-primary">
                  {siteProfile.phone}
                </a>
                <a
                  href={siteProfile.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-background"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
