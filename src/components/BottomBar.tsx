import { FaLinkedin, FaInstagram, FaBehance, FaEnvelope } from "react-icons/fa";

const socials = [
  {
    href: "https://www.linkedin.com/in/lenika-maharjan-b703b527a/",
    icon: <FaLinkedin />, label: "LinkedIn"
  },
  {
    href: "https://www.instagram.com/lenikamaharjan/",
    icon: <FaInstagram />, label: "Instagram"
  },
  {
    href: "https://www.behance.net/lenikamaharjan",
    icon: <FaBehance />, label: "Behance"
  },
  {
    href: "mailto:lenika.maharjan@gmail.com",
    icon: <FaEnvelope />, label: "Email"
  }
];

export default function BottomBar() {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-[#18181b] border-t border-[#FFD700]/20 z-50 flex items-center justify-center py-2">
      <ul className="flex gap-8">
        {socials.map(({ href, icon, label }) => (
          <li key={label}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FFD700] text-2xl hover:text-white transition-colors duration-200 flex flex-col items-center"
              aria-label={label}
            >
              {icon}
              <span className="text-xs mt-1 text-[#FFD700]/80 hidden md:block">{label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
