"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen({ onFinish }: { onFinish: () => void }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      onFinish();
    }, 5000);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#18181b]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="text-5xl md:text-6xl font-extrabold text-pink-400 mb-4 tracking-tight drop-shadow-lg"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: [1, 1.1, 1], opacity: 1 }}
            transition={{ duration: 1.2, type: 'spring' }}
          >
            Happy Birthday, Lenika! 🎂
          </motion.div>
          <motion.div
            className="text-2xl md:text-3xl font-semibold text-white mb-2 text-center px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1 }}
          >
            From your boyfriend: Wishing you a magical year ahead, filled with love, creativity, and endless joy. You inspire me every day, and I hope this portfolio brings a smile to your face. 💖
          </motion.div>
          <motion.div
            className="flex justify-center items-center mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: [1, 1.15, 1] }}
            transition={{ delay: 1.2, duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
          >
            <motion.div
              className="w-20 h-20 rounded-full bg-gradient-to-tr from-pink-400 via-yellow-300 to-purple-400 flex items-center justify-center shadow-xl border-4 border-white"
              initial={{ rotate: 0 }}
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            >
              <span className="text-4xl">🎉</span>
            </motion.div>
          </motion.div>
          <motion.div
            className="text-lg text-yellow-300 font-semibold tracking-wide mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            Loading your birthday experience...
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
