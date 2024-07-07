import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ThreeScene from "./ThreeScene";
import "../index.css";

function Hero() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  return (
    <>
      <motion.div
        id="home"
        ref={heroRef}
        className="relative w-full h-screen overflow-hidden"
        style={{ opacity }}
      >
        <div className="absolute inset-0 z-0">
          <ThreeScene scrollProgress={scrollYProgress} />
        </div>
        <motion.div
          style={{ scale }}
          className="relative z-10 h-full flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 bg-opacity-70 text-white text-center"
        >
          <div className="mx-auto px-4">
            <h1 className="text-3xl animate-pulse md:text-5xl font-bold mb-4">
              Hello <span className=" animate-bounce">👋</span>
            </h1>
            <h2 className="text-5xl md:text-8xl font-bold mb-4">
              I'm <span className=" text-gray-400">O</span>mkar
            </h2>
            <p className="text-lg md:text-2xl mb-8">
              IT Engineer | MERN Developer
            </p>
            <motion.div
              className=" opacity-30"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              scroll down
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Additional sections */}
    </>
  );
}

export default Hero;
