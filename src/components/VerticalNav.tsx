"use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { FiHome, FiUser, FiGrid, FiBriefcase, FiMail } from "react-icons/fi";

const navItems = [
  { icon: <FiHome size={24} />, label: "Home", href: "#home" },
  { icon: <FiUser size={24} />, label: "About", href: "#about" },
  { icon: <FiGrid size={24} />, label: "Portfolio", href: "#portfolio" },
  { icon: <FiBriefcase size={24} />, label: "Services", href: "#services" },
  { icon: <FiMail size={24} />, label: "Contact", href: "#contact" },
];

export default function VerticalNav() {
  // const pathname = usePathname();
  return (
    <nav className="fixed left-0 top-0 h-full w-20 flex flex-col items-center py-10 bg-[#18181b] shadow-2xl z-40 border-r-2 border-[#FFD700]">
      <div className="mb-10">
        <motion.div
          className="w-12 h-12 rounded-full bg-[#18181b] flex items-center justify-center shadow-lg border-4 border-[#FFD700]"
          whileHover={{ rotate: 20, scale: 1.1 }}
        >
          <span className="text-2xl font-bold text-[#FFD700]">L</span>
        </motion.div>
      </div>
      <ul className="flex flex-col gap-8">
        {navItems.map((item) => (
          <li key={item.href} className="group relative flex flex-col items-center">
            <button
              type="button"
              onClick={() => {
                const target = document.querySelector(item.href);
                if (target) {
                  const y = target.getBoundingClientRect().top + window.scrollY - 20; // offset for nav
                  window.scrollTo({ top: y, behavior: "smooth" });
                }
              }}
              className="focus:outline-none"
            >
              <motion.div
                className={`flex items-center justify-center w-12 h-12 rounded-xl transition-colors text-[#FFD700] hover:bg-[#FFD700]/20`}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.92, backgroundColor: "#FFD70033" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {item.icon}
              </motion.div>
            </button>
            <span className="absolute left-16 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 bg-[#FFD700] text-[#18181b] px-4 py-2 rounded-lg shadow-lg font-semibold text-base whitespace-nowrap transition-opacity duration-200 pointer-events-none z-50">
              {item.label}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
}
