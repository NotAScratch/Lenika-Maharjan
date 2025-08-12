"use client";

const services = [
  {
    icon: "🎬",
    title: "Motion Graphics & Animation",
    desc: "Dynamic motion graphics, 2D/3D animation, and explainer videos for brands, education, and entertainment."
  },
  {
    icon: "🖌️",
    title: "Graphic Design & Branding",
    desc: "Brand identity, logo design, posters, and digital art with a unique, creative touch."
  },
  {
    icon: "🎥",
    title: "Video Editing & Post-Production",
    desc: "Professional video editing, color grading, sound design, and compositing for commercial and artistic projects."
  },
  {
    icon: "📚",
    title: "Visual Storytelling",
    desc: "Crafting compelling stories through visuals, animation, and multimedia for all audiences."
  },
  {
    icon: "👩‍🎨",
    title: "Creative Consulting",
    desc: "Consultation for creative projects, branding, and educational content development."
  },
];

export default function ServicesPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-12 bg-[#18181b]">
      <h1 className="text-5xl font-extrabold text-[#FFD700] mb-12">Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-full max-w-5xl">
        {services.map((service) => (
          <div key={service.title} className="bg-[#23232a] rounded-2xl shadow-lg p-8 flex flex-col items-center hover:scale-105 transition-transform border border-[#FFD700]">
            <span className="text-4xl mb-2 text-[#FFD700]">{service.icon}</span>
            <h2 className="font-bold text-xl mb-2 text-[#FFD700]">{service.title}</h2>
            <p className="text-[#FFD700]/80 text-center">{service.desc}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
