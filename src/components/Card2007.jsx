import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView, useReducedMotion } from "framer-motion";
import { scrollToNext } from "../lib/scroll.js";
import { getImagePath } from "../lib/imageUtils.js";

export default function Card2007() {
  const ref = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "end 15%"],
  });

  const phoneY = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [90, -90]);
  const phoneS = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [1, 1] : [0.97, 1.05]);
  const phoneR = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [-0.6, 0.6]);

  const copyX = useTransform(scrollYProgress, [0, 0.35, 1], prefersReducedMotion ? [0, 0, 0] : [-46, 0, 160]);
  const copyO = useTransform(scrollYProgress, [0, 0.2, 1], prefersReducedMotion ? [1, 1, 1] : [0, 1, 0.08]);

  const yearX = useTransform(scrollYProgress, [0, 0.35, 1], prefersReducedMotion ? [0, 0, 0] : [-36, 0, 260]);
  const yearS = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [1, 1] : [0.94, 1.12]);
  const yearO = useTransform(scrollYProgress, [0, 0.2, 1], prefersReducedMotion ? [0.08, 0.08, 0.08] : [0, 0.14, 0.08]);

  const spotX = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? ["50%", "50%"] : ["52%", "48%"]);  
  const spotY = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? ["50%", "50%"] : ["44%", "56%"]);  
  const spotS = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [1, 1] : [0.95, 1.12]);    
  const spotO = useTransform(scrollYProgress, [0, 0.5, 1], prefersReducedMotion ? [0.2, 0.2, 0.2] : [0.16, 0.26, 0.18]);

  const inView = useInView(ref, { margin: "-22% 0px -22% 0px", once: true });
  const words = ["Home ", "Button ", "Era "];

  return (
    <section id="p2007" ref={ref} className="section era era--2007" aria-label="2007 - Home Button Era">
      <div className="era-inner era--roomy">
        {}
        <motion.div
          className="spotlight"
          style={{ "--x": spotX, "--y": spotY, scale: spotS, opacity: spotO }}
          aria-hidden="true"
        />

        {}
        <motion.div className="era-visual" style={{ y: phoneY, scale: phoneS, rotate: phoneR }}>
          <div className="phone-wrap">
            <img
              src="assets\c1-home-front.png"
              alt="iPhone (original) with Home button"
              className="era-phone era-phone--big"
              draggable="false"
            />
          </div>
        </motion.div>

        {}
        <motion.div className="era-copy era-copy--wide" style={prefersReducedMotion ? { opacity: copyO } : { x: copyX, opacity: copyO }}>
          <div className="era-chip">Physical Affordance</div>

          <h2 className="era-title era-title--kinetic" aria-label="HomeButtonEra">
            {words.map((w, i) => (
              <motion.span
                key={w}
                className="era-word"
                initial={prefersReducedMotion ? undefined : { y: 28, opacity: 0, rotate: 0.2 }}
                animate={prefersReducedMotion ? undefined : inView ? { y: 0, opacity: 1, rotate: 0 } : {}}
                transition={prefersReducedMotion ? undefined : { delay: 0.05 + i * 0.1, type: "spring", stiffness: 700, damping: 26 }}
              >
                {w}
              </motion.span>
            ))}
          </h2>

          <motion.p
            className="era-lede era-lede--lift"
            initial={prefersReducedMotion ? undefined : { y: 16, opacity: 0 }}
            animate={prefersReducedMotion ? undefined : inView ? { y: 0, opacity: 1 } : {}}
            transition={prefersReducedMotion ? undefined : { delay: 0.42, duration: 0.28, ease: "easeOut" }}
          >
            A single hardware anchor lowers cognitive load and teaches recovery.
          </motion.p>

          <motion.p
            className="era-body era-body--lift"
            initial={prefersReducedMotion ? undefined : { y: 16, opacity: 0 }}
            animate={prefersReducedMotion ? undefined : inView ? { y: 0, opacity: 1 } : {}}
            transition={prefersReducedMotion ? undefined : { delay: 0.56, duration: 0.32, ease: "easeOut" }}
          >
            The physical Home button standardized a dependable "escape hatch" to Springboard,
            making navigation predictable and error recovery instant across apps. It established a
            universal mental model: <em>press to go home</em>.
          </motion.p>
        </motion.div>

        {}
        <motion.div className="era-year era-year--bright" style={{ x: yearX, scale: yearS, opacity: yearO }} aria-hidden="true">
          2007
        </motion.div>

        {}
        <button
          className="section-cta"
          aria-label="Next era"
          onClick={() => scrollToNext("#p2007")}
          title="Next era"
        >
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M6 9l6 6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </section>
  );
}

