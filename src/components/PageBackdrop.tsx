import { motion } from "framer-motion";

const backdropOrbs = [
  {
    className:
      "top-16 left-[8%] h-72 w-72 bg-[radial-gradient(circle,hsl(174_72%_50%_/_0.25),transparent_68%)]",
    animate: { y: [0, -30, 0], x: [0, 18, 0], scale: [1, 1.1, 1] },
    duration: 12,
  },
  {
    className:
      "top-[32%] right-[10%] h-[26rem] w-[26rem] bg-[radial-gradient(circle,hsl(200_80%_60%_/_0.18),transparent_68%)]",
    animate: { y: [0, 24, 0], x: [0, -22, 0], scale: [1.05, 0.92, 1.05] },
    duration: 16,
  },
  {
    className:
      "bottom-[-5rem] left-1/3 h-80 w-80 bg-[radial-gradient(circle,hsl(174_72%_50%_/_0.12),transparent_68%)]",
    animate: { y: [0, -18, 0], x: [0, 10, 0], scale: [0.95, 1.08, 0.95] },
    duration: 14,
  },
];

const PageBackdrop = () => {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,hsl(174_72%_50%_/_0.08),transparent_35%),linear-gradient(180deg,hsl(220_20%_4%),hsl(220_20%_5%))]" />
      <div className="absolute inset-0 bg-grid opacity-40" />

      {backdropOrbs.map((orb) => (
        <motion.div
          key={orb.className}
          className={`absolute rounded-full blur-3xl ${orb.className}`}
          animate={orb.animate}
          transition={{ duration: orb.duration, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      <motion.div
        className="absolute left-0 right-0 top-1/4 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
        animate={{ opacity: [0.25, 0.7, 0.25], x: ["-8%", "8%", "-8%"] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 left-12 h-40 w-40 rounded-full border border-primary/10"
        animate={{ rotate: 360, scale: [1, 1.08, 1] }}
        transition={{ rotate: { duration: 24, repeat: Infinity, ease: "linear" }, scale: { duration: 6, repeat: Infinity } }}
      />
      <motion.div
        className="absolute right-10 top-40 h-28 w-28 rounded-[2rem] border border-white/10"
        animate={{ rotate: [0, 12, -6, 0], y: [0, -14, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
};

export default PageBackdrop;
