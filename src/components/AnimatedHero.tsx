import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function AnimatedHero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <section ref={ref} className="relative flex flex-col items-center justify-center min-h-[90vh] overflow-hidden bg-gradient-to-br from-[#f8fafc] to-[#e0e7ef] dark:from-[#18181b] dark:to-[#23272f]">
      {/* Animated background shapes */}
      <motion.div
        className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-pink-400 opacity-30 blur-3xl z-0"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full bg-blue-400 opacity-30 blur-3xl z-0"
        animate={{ scale: [1, 1.1, 1], rotate: [0, -30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Foreground content */}
      <motion.h1
        className="relative z-10 text-6xl sm:text-7xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent mb-6 drop-shadow-lg"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{ y, scale }}
      >
        Lenika Maharjan
      </motion.h1>
      <motion.p
        className="relative z-10 text-2xl sm:text-3xl max-w-2xl mx-auto mb-8 text-gray-700 dark:text-gray-200 drop-shadow"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.2 }}
      >
        Motion Graphic Artist | 2D & 3D Artist | Video Editor | Graphic Designer | Visual Storytelling Enthusiast
      </motion.p>
      <motion.a
        href="#portfolio"
        className="relative z-10 inline-block px-10 py-4 rounded-full bg-gradient-to-r from-pink-500 to-blue-500 text-white font-bold shadow-xl hover:scale-110 hover:shadow-2xl transition-transform text-lg tracking-wide"
        whileHover={{ scale: 1.08 }}
      >
        Explore My Art
      </motion.a>
      {/* Artistic SVG overlay */}
      <svg className="absolute bottom-0 left-0 w-full h-32 z-10" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill="url(#paint0_linear)" fillOpacity="1" d="M0,224L60,197.3C120,171,240,117,360,117.3C480,117,600,171,720,197.3C840,224,960,224,1080,197.3C1200,171,1320,117,1380,90.7L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" />
        <defs>
          <linearGradient id="paint0_linear" x1="0" y1="0" x2="1440" y2="320" gradientUnits="userSpaceOnUse">
            <stop stopColor="#f472b6" />
            <stop offset="0.5" stopColor="#a78bfa" />
            <stop offset="1" stopColor="#60a5fa" />
          </linearGradient>
        </defs>
      </svg>
    </section>
  );
}
