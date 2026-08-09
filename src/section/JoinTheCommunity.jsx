import { IoLogoInstagram, IoLogoGithub } from "react-icons/io";
import { motion } from "framer-motion";
import Reveal from "../components/Reveal";

export default function JoinTheCommunity() {
  return (
    <section
      data-section="join-the-community"
      className="w-full py-30 px-8 max-w-7xl mx-auto select-none"
    >
      <Reveal preset="scale">
        <div className="w-full rounded-xl md:rounded-2xl overflow-hidden relative max-md:justify-center flex flex-col md:flex-row items-center min-h-[300px] bg-[#e8e8e8]">
          <div className="absolute inset-0 z-0 flex justify-center items-center">
            <img
              src="/banner/banner-major-build-0cb2498e.webp"
              alt="TKJ Background"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 z-0 bg-gradient-to-b md:bg-gradient-to-r from-neutral-800 to-transparent max-md:to-white/20 w-full"></div>
          <div className="relative z-10 p-8 md:p-24 flex flex-col items-start justify-center w-full md:w-4/5 h-full text-white">
            <h2 className="w-full max-md:text-center text-5xl font-instrument-serif leading-[1.1]">
              Join Our Community.
            </h2>
            <p className="w-full max-md:text-center font-space-grotesk tracking-tight mb-4">
              Let's collaborate and grow together.
            </p>
            <div className="w-full flex max-md:justify-center gap-3 tracking-tight">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://instagram.com/tkj.skanesga.official"
                target="_blank"
                className="text-xl flex items-center gap-1"
              >
                <IoLogoInstagram />
                <span className="text-sm">@tkj.skanesga.official</span>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/tkjskanesga"
                target="_blank"
                className="text-xl flex items-center gap-1"
              >
                <IoLogoGithub />
                <span className="text-sm">@tkjskanesga</span>
              </motion.a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
