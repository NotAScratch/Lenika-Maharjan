
"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
	{
		title: "I Am The Gardener",
		description: "Motion graphic animation video for the brand I Am The Gardener, highlighting the importance of plants in daily life. Focused on emotional and environmental benefits of indoor gardening, inspiring viewers to reconnect with nature—even in urban settings.",
		tags: ["Adobe After Effects", "Illustrator", "Photoshop", "Premiere Pro", "Sound Design"],
		color: "#FFD700",
		image: "/project1.jpg",
		details: "A full animated campaign for I Am The Gardener, including storyboarding, animation, and sound design.",
	},
	{
		title: "Supermindz – Educational Motion Graphics for Kids",
		description: "Educational video channel aimed at children, making learning fun and engaging through motion graphics and animated storytelling. Covered topics from science and nature to general knowledge, helping kids grasp concepts through visually appealing animations.",
		tags: ["Adobe After Effects", "Premiere Pro", "Illustrator", "Storyboarding", "Audio-Visual Production"],
		color: "#FFD700",
		image: "/project3.jpg",
		details: "Produced and animated over 30 educational videos for children, focusing on fun and learning.",
	},
	{
		title: "Brand Animation Reel",
		description: "A collection of animated brand intros, logo reveals, and kinetic typography for various clients.",
		tags: ["Branding", "Kinetic Typography", "After Effects"],
		color: "#FFD700",
		image: "/project4.jpg",
		details: "Showcase of branding and logo animation for startups and established brands.",
	},
	{
		title: "3D Product Visualization",
		description: "Photorealistic 3D animations and renders for product launches and advertisements.",
		tags: ["3D", "Blender", "Cinema4D", "Product Animation"],
		color: "#FFD700",
		image: "/project2.jpg",
		details: "Created 3D models and animations for product marketing and commercials.",
	},
	{
		title: "Music Video Visuals",
		description: "Dynamic motion graphics and VFX for music videos, enhancing storytelling and mood.",
		tags: ["VFX", "Music Videos", "After Effects"],
		color: "#FFD700",
		image: "/project1.png",
		details: "Designed and animated visuals for music videos, collaborating with artists and directors.",
	},
];

function AnimatedPortfolioCarousel() {
	const [offset, setOffset] = useState(0);
	const [modalIdx, setModalIdx] = useState(-1);
	const visibleCount = 3;
	const total = projects.length;

	useEffect(() => {
		const interval = setInterval(() => {
			setOffset((prev) => (prev + 1) % total);
		}, 3500);
		return () => clearInterval(interval);
	}, [total]);

	const getVisible = () => {
	const arr = [];
		for (let i = 0; i < visibleCount; i++) {
			arr.push(projects[(offset + i) % total]);
		}
		return arr;
	};
	const visible = getVisible();

	return (
		<div className="relative w-full max-w-5xl overflow-x-hidden py-8">
			<div className="flex justify-center items-center gap-8">
				{visible.map((project, idx) => {
					const isCenter = idx === Math.floor(visibleCount / 2);
					return (
						<motion.div
							key={project.title}
							className={`bg-[#23232a] border border-[#FFD700]/20 rounded-3xl shadow-xl p-8 min-w-[320px] max-w-[340px] flex flex-col gap-4 cursor-pointer relative group ${isCenter ? 'z-10' : 'z-0'}`}
							whileHover={{ scale: 1.08, rotate: isCenter ? 0 : (idx % 2 === 0 ? 2 : -2) }}
							animate={{
								scale: isCenter ? 1.15 : 0.95,
								y: isCenter ? -16 : 0,
								boxShadow: isCenter ? `0 8px 40px 0 ${project.color}55` : `0 4px 16px 0 ${project.color}22`,
							}}
							transition={{ type: "spring", stiffness: 60, damping: 18 }}
							onClick={() => setModalIdx((offset + idx) % total)}
						>
							<div className="w-full h-40 rounded-xl overflow-hidden mb-3 bg-[#18181b] flex items-center justify-center">
								<Image src={project.image || "/placeholder.jpg"} alt={project.title} width={320} height={160} className="object-cover w-full h-full group-hover:scale-105 transition-transform" />
							</div>
							<h3 className="text-xl font-bold mb-2 text-[#FFD700]">{project.title}</h3>
							<p className="text-[#FFD700]/80 text-sm line-clamp-3">{project.description}</p>
							<ul className="flex flex-wrap gap-2 text-xs mt-2">
								{project.tags.map((tag) => (
									<li key={tag} className="bg-[#FFD700]/10 px-3 py-1 rounded-full text-[#FFD700] animate-pulse group-hover:animate-none">{tag}</li>
								))}
							</ul>
							{/* Hover Reveal */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileHover={{ opacity: 1, y: 0 }}
								className="absolute inset-0 bg-[#18181bcc] flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl p-4 z-20"
							>
								<span className="text-[#FFD700] text-base font-semibold mb-2">Click for details</span>
							</motion.div>
						</motion.div>
					);
				})}
			</div>
			{/* Modal for project details */}
			<AnimatePresence>
				{modalIdx !== -1 && (
					<motion.div
						className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={() => setModalIdx(-1)}
					>
						<motion.div
							className="bg-[#23232a] border border-[#FFD700]/30 rounded-3xl shadow-2xl p-8 max-w-lg w-full relative flex flex-col items-center"
							initial={{ scale: 0.8, y: 80, opacity: 0 }}
							animate={{ scale: 1, y: 0, opacity: 1 }}
							exit={{ scale: 0.8, y: 80, opacity: 0 }}
							onClick={e => e.stopPropagation()}
						>
							<Image src={projects[modalIdx].image || "/placeholder.jpg"} alt={projects[modalIdx].title} width={400} height={200} className="object-cover w-full h-48 rounded-xl mb-4" />
							<h3 className="text-2xl font-bold text-[#FFD700] mb-2">{projects[modalIdx].title}</h3>
							<p className="text-[#FFD700]/80 mb-4 text-center">{projects[modalIdx].details}</p>
							<ul className="flex flex-wrap gap-2 text-xs mb-4">
								{projects[modalIdx].tags.map((tag) => (
									<li key={tag} className="bg-[#FFD700]/10 px-3 py-1 rounded-full text-[#FFD700]">{tag}</li>
								))}
							</ul>
							<button onClick={() => setModalIdx(-1)} className="mt-2 px-6 py-2 rounded-full bg-[#FFD700] text-[#18181b] font-semibold shadow hover:scale-105 transition-transform">Close</button>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}

export default function Home() {
	return (
		<main className="font-sans min-h-screen bg-[#18181b] flex flex-col items-center w-full">
			{/* Hero Section */}
			<section id="home" className="w-full flex flex-col md:flex-row items-center justify-center gap-12 py-24 px-6 max-w-6xl mx-auto">
						<div className="flex-1 flex flex-col items-start justify-center">
							<h1 className="text-5xl md:text-6xl font-extrabold text-[#FFD700] mb-6 leading-tight">Lenika Maharjan</h1>
							<h2 className="text-2xl md:text-3xl font-semibold text-[#FFD700]/80 mb-4">Motion Graphic Artist & Visual Storyteller</h2>
							<p className="text-lg text-[#FFD700]/70 mb-8 max-w-xl">
								Creative and detail-oriented Motion Graphic Animator, Video Editor, and Multimedia Designer with hands-on experience in animation, compositing, and video editing for both commercial and artistic projects. Passionate about storytelling through visuals and making learning fun and engaging for all ages.
							</p>
							<div className="flex gap-4">
								<a href="#contact" className="px-8 py-3 rounded-full bg-[#FFD700] text-[#18181b] font-bold shadow hover:scale-105 transition-transform">Contact Me</a>
								<a href="/cv.pdf" download className="px-8 py-3 rounded-full bg-transparent border-2 border-[#FFD700] text-[#FFD700] font-bold shadow hover:bg-[#FFD700] hover:text-[#18181b] transition-transform">Download CV</a>
							</div>
						</div>
						<div className="flex-1 flex items-center justify-center">
							<div className="rounded-full border-8 border-[#FFD700] shadow-2xl overflow-hidden w-64 h-64 md:w-80 md:h-80 bg-[#23232a] flex items-center justify-center">
								<Image
									src="/image.png"
									alt="Lenika Maharjan"
									width={320}
									height={320}
									className="object-cover w-full h-full"
								/>
							</div>
						</div>
			</section>

			{/* About Section */}
			<section id="about" className="w-full py-20 px-6 max-w-4xl mx-auto flex flex-col items-center">
				<h2 className="text-4xl font-bold text-[#FFD700] mb-6">About</h2>
				<p className="text-lg text-[#FFD700]/80 text-center max-w-2xl">
					Creative and detail-oriented Motion Graphic Animator, Video Editor, and Multimedia Designer with hands-on experience in animation, compositing, and video editing for both commercial and artistic projects. Passionate about storytelling through visuals and making learning fun and engaging for all ages.
				</p>
			</section>

			{/* Timeline Section */}
			<section id="timeline" className="w-full py-20 px-6 max-w-4xl mx-auto flex flex-col items-center">
				<h2 className="text-4xl font-bold text-[#FFD700] mb-6">Creative Journey</h2>
				<ol className="relative border-l-4 border-[#FFD700]/40 max-w-2xl mx-auto">
					<li className="mb-10 ml-6">
						<span className="absolute flex items-center justify-center w-8 h-8 bg-[#FFD700] rounded-full -left-4 ring-4 ring-[#18181b] text-[#18181b] font-bold">1</span>
						<h3 className="font-bold text-xl mb-1 text-[#FFD700]">2023–Present: Playtime Records Pvt. Ltd.</h3>
						<p className="text-[#FFD700]/80">Video Editor, Motion Graphic Artist. Created animated stories for children, edited videos, handled compositing, VFX, and audio syncing. Collaborated with creative teams to meet deadlines.</p>
					</li>
					<li className="mb-10 ml-6">
						<span className="absolute flex items-center justify-center w-8 h-8 bg-[#FFD700]/80 rounded-full -left-4 ring-4 ring-[#18181b] text-[#18181b] font-bold">2</span>
						<h3 className="font-bold text-xl mb-1 text-[#FFD700]">2022–2025: London Metropolitan University</h3>
						<p className="text-[#FFD700]/80">BA (HONS) Multimedia Technology. Focus: Motion Graphics, 2D Animation, 3D, and major project &quot;I Am the Gardener&quot; (motion graphics story).</p>
					</li>
					<li className="ml-6">
						<span className="absolute flex items-center justify-center w-8 h-8 bg-[#FFD700]/60 rounded-full -left-4 ring-4 ring-[#18181b] text-[#18181b] font-bold">3</span>
						<h3 className="font-bold text-xl mb-1 text-[#FFD700]">2025: Islington College</h3>
						<p className="text-[#FFD700]/80">Bachelor of Arts, affiliated with London Metropolitan University. Major project: &quot;I Am the Gardener&quot; (motion graphics story).</p>
					</li>
				</ol>
			</section>

			{/* Portfolio Section - Animated Infinite Carousel */}
			<section id="portfolio" className="w-full py-20 px-6 max-w-6xl mx-auto flex flex-col items-center">
				<h2 className="text-4xl font-bold text-[#FFD700] mb-6">Portfolio & Projects</h2>
				<AnimatedPortfolioCarousel />
				{/* Skills Cloud */}
				<div className="mt-16 flex flex-wrap justify-center gap-3 max-w-4xl">
					{[
						"Motion Graphics", "2D Animation", "3D", "Video Editing", "Compositing", "Sound Design", "Critical Thinking", "Project Management", "Artistic Vision", "Leadership", "Storyboarding", "Visual Storytelling", "Graphic Design", "Audio-Visual Production", "Story Editing", "Media Technology", "Managing Creative Teams", "Motion Design", "Teamwork", "Color Theory", "Adobe Premiere Pro", "After Effects", "Adobe Photoshop", "Adobe Illustrator"
					].map(skill => (
						<span key={skill} className="px-4 py-2 rounded-full bg-[#FFD700]/10 text-[#FFD700] text-sm font-medium shadow hover:scale-105 transition-transform">{skill}</span>
					))}
				</div>
			</section>

			{/* Services Section */}
			<section id="services" className="w-full py-20 px-6 max-w-6xl mx-auto flex flex-col items-center">
				<h2 className="text-4xl font-bold text-[#FFD700] mb-6">Services</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-5xl">
					<div className="bg-[#23232a] rounded-2xl shadow-lg p-8 flex flex-col items-center hover:scale-105 transition-transform border border-[#FFD700]/20">
						<span className="text-3xl mb-2">🎬</span>
						<h3 className="font-bold text-xl mb-2 text-[#FFD700]">Motion Graphics & Animation</h3>
						<p className="text-[#FFD700]/80 text-center">Dynamic motion graphics, 2D/3D animation, and explainer videos for brands, education, and entertainment.</p>
					</div>
					<div className="bg-[#23232a] rounded-2xl shadow-lg p-8 flex flex-col items-center hover:scale-105 transition-transform border border-[#FFD700]/20">
						<span className="text-3xl mb-2">🖌️</span>
						<h3 className="font-bold text-xl mb-2 text-[#FFD700]">Graphic Design & Branding</h3>
						<p className="text-[#FFD700]/80 text-center">Brand identity, logo design, posters, and digital art with a unique, creative touch.</p>
					</div>
					<div className="bg-[#23232a] rounded-2xl shadow-lg p-8 flex flex-col items-center hover:scale-105 transition-transform border border-[#FFD700]/20">
						<span className="text-3xl mb-2">🎥</span>
						<h3 className="font-bold text-xl mb-2 text-[#FFD700]">Video Editing & Post-Production</h3>
						<p className="text-[#FFD700]/80 text-center">Professional video editing, color grading, sound design, and compositing for commercial and artistic projects.</p>
					</div>
					<div className="bg-[#23232a] rounded-2xl shadow-lg p-8 flex flex-col items-center hover:scale-105 transition-transform border border-[#FFD700]/20">
						<span className="text-3xl mb-2">📚</span>
						<h3 className="font-bold text-xl mb-2 text-[#FFD700]">Visual Storytelling</h3>
						<p className="text-[#FFD700]/80 text-center">Crafting compelling stories through visuals, animation, and multimedia for all audiences.</p>
					</div>
					<div className="bg-[#23232a] rounded-2xl shadow-lg p-8 flex flex-col items-center hover:scale-105 transition-transform border border-[#FFD700]/20">
						<span className="text-3xl mb-2">👩‍🎨</span>
						<h3 className="font-bold text-xl mb-2 text-[#FFD700]">Creative Consulting</h3>
						<p className="text-[#FFD700]/80 text-center">Consultation for creative projects, branding, and educational content development.</p>
					</div>
				</div>
			</section>

			{/* Testimonials Section */}
			<section id="testimonials" className="w-full py-20 px-6 max-w-4xl mx-auto flex flex-col items-center">
				<h2 className="text-4xl font-bold text-[#FFD700] mb-6">Testimonials</h2>
				<div className="w-full max-w-3xl mx-auto flex flex-col gap-8 items-center">
					<blockquote className="bg-[#23232a] rounded-2xl shadow-lg p-8 text-lg italic text-[#FFD700]/80 relative border border-[#FFD700]/20">
						<span className="absolute left-4 top-4 text-4xl text-[#FFD700]/60">“</span>
						Lenika’s creativity and attention to detail brought our project to life beyond expectations!
						<span className="block mt-4 font-semibold text-right text-[#FFD700]">— Happy Client</span>
					</blockquote>
					<blockquote className="bg-[#23232a] rounded-2xl shadow-lg p-8 text-lg italic text-[#FFD700]/80 relative border border-[#FFD700]/20">
						<span className="absolute left-4 top-4 text-4xl text-[#FFD700]/60">“</span>
						Working with Lenika was a joy—her artistic vision and technical skills are unmatched.
						<span className="block mt-4 font-semibold text-right text-[#FFD700]">— Creative Director</span>
					</blockquote>
				</div>
			</section>

			{/* Contact Section */}
			<section id="contact" className="w-full py-20 px-6 max-w-2xl mx-auto flex flex-col items-center mb-32">
				<h2 className="text-4xl font-bold text-[#FFD700] mb-6">Contact</h2>
				<form className="flex flex-col gap-4 w-full bg-[#23232a] rounded-2xl shadow-lg p-8 border border-[#FFD700]/20">
					<input type="text" placeholder="Your Name" className="p-3 rounded border border-[#FFD700]/20 bg-[#18181b] text-[#FFD700] placeholder-[#FFD700]/40" />
					<input type="email" placeholder="Your Email" className="p-3 rounded border border-[#FFD700]/20 bg-[#18181b] text-[#FFD700] placeholder-[#FFD700]/40" />
					<textarea placeholder="Your Message" rows={4} className="p-3 rounded border border-[#FFD700]/20 bg-[#18181b] text-[#FFD700] placeholder-[#FFD700]/40" />
					<button type="submit" className="px-6 py-3 rounded-full bg-[#FFD700] text-[#18181b] font-semibold shadow-lg hover:scale-105 transition-transform">
						Send Message
					</button>
				</form>
			</section>
		</main>
	);
}













