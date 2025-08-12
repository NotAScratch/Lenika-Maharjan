"use client";
import { motion } from "framer-motion";

const projects = [
  {
    title: "I Am The Gardener",
    description:
      "Motion graphic animation video for the brand I Am The Gardener, highlighting the importance of plants in daily life. Focused on emotional and environmental benefits of indoor gardening, inspiring viewers to reconnect with nature—even in urban settings.",
    tools: [
      "Adobe After Effects",
      "Illustrator",
      "Photoshop",
      "Premiere Pro",
      "Sound Design",
    ],
    color: "from-green-300 via-pink-200 to-blue-300",
  },
  {
    title: "Supermindz – Educational Motion Graphics for Kids",
    description:
      "Educational video channel aimed at children, making learning fun and engaging through motion graphics and animated storytelling. Covered topics from science and nature to general knowledge, helping kids grasp concepts through visually appealing animations.",
    tools: [
      "Adobe After Effects",
      "Premiere Pro",
      "Illustrator",
      "Storyboarding",
      "Audio-Visual Production",
    ],
    color: "from-blue-300 via-purple-200 to-pink-300",
  },
];

function getRandomDirection() {
  const directions = [
    { x: -200, y: 0 },
    { x: 200, y: 0 },
    { x: 0, y: -200 },
    { x: 0, y: 200 },
    { x: -150, y: 150 },
    { x: 150, y: -150 },
  ];
  return directions[Math.floor(Math.random() * directions.length)];
}

export default function PortfolioPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-12 bg-[#18181b]">
      <h1 className="text-5xl font-extrabold text-[#FFD700] mb-12">Portfolio</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-5xl">
        {projects.map((project, idx) => {
          const dir = getRandomDirection();
          return (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, x: dir.x, y: dir.y }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 1, delay: idx * 0.3, type: "spring" }}
              className="relative bg-[#23232a] rounded-3xl shadow-2xl p-8 flex flex-col gap-4 overflow-hidden group hover:scale-[1.03] transition-transform border border-[#FFD700]"
            >
              <h2 className="text-2xl font-bold mb-2 text-[#FFD700] drop-shadow">{project.title}</h2>
              <p className="text-[#FFD700]/80">{project.description}</p>
              <ul className="flex flex-wrap gap-2 text-xs mt-2">
                {project.tools.map((tool) => (
                  <li key={tool} className="bg-[#FFD700]/20 px-3 py-1 rounded-full text-[#FFD700] font-semibold shadow">
                    {tool}
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </main>
  );
}
