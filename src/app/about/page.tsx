import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 py-16 bg-background text-foreground">
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-6 text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        About Lenika Maharjan
      </motion.h1>
      <motion.p
        className="max-w-2xl text-lg md:text-xl text-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        I am a passionate Motion Graphic Artist, 2D & 3D Artist, Video Editor, Graphic Designer, and Visual Storytelling Enthusiast. My work blends creativity, technology, and storytelling to craft engaging visual experiences. With a keen eye for detail and a love for animation, I bring ideas to life through motion and design.
      </motion.p>
      <motion.div
        className="w-full flex flex-col md:flex-row gap-6 justify-center items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.7 }}
      >
        <div className="bg-white/5 rounded-xl p-6 shadow-lg w-full md:w-80">
          <h2 className="text-xl font-semibold mb-2">Skills</h2>
          <ul className="list-disc list-inside text-base opacity-90">
            <li>Motion Graphics & Animation</li>
            <li>2D & 3D Art</li>
            <li>Video Editing</li>
            <li>Graphic Design</li>
            <li>Visual Storytelling</li>
          </ul>
        </div>
        <div className="bg-white/5 rounded-xl p-6 shadow-lg w-full md:w-80">
          <h2 className="text-xl font-semibold mb-2">Tools</h2>
          <ul className="list-disc list-inside text-base opacity-90">
            <li>Adobe After Effects</li>
            <li>Blender</li>
            <li>Premiere Pro</li>
            <li>Photoshop & Illustrator</li>
            <li>Cinema 4D</li>
          </ul>
        </div>
      </motion.div>
    </main>
  );
}
