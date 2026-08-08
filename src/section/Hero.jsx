import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section data-section="hero" className="w-full min-h-[600px] h-dvh md:px-8 max-w-5xl mx-auto select-none">
      <div className="w-full min-h-[600px] h-dvh flex items-center md:gap-2">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative w-full h-full md:h-[520px] md:w-[480px] md:rounded-xl overflow-hidden bg-neutral-800"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-black/60 md:bg-transparent" />
          <video src="/swipecard/profile-tkj-e5e48d99.mp4" autoPlay loop muted className="w-full h-full object-cover" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-md:absolute w-full md:w-[calc(100%-280px)] px-9 md:px-3 max-md:text-white"
        >
          <h1 className="text-4xl md:text-6xl mb-3 font-instrument-serif">Connecting the World, Engineering the Future.</h1>
          <p className="text-neutral-600 max-md:text-neutral-300 font-space-grotesk tracking-tight">A glimpse into the world of Telecommunication and Computer Networks, where students master the skills to build, secure, and optimize the digital infrastructure that powers our modern lives.</p>
        </motion.div>
      </div>
    </section>
  );
}
