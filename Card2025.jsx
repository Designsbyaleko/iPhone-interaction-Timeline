import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView, useReducedMotion } from "framer-motion";
import { scrollToNext } from "../lib/scroll.js";

export default function Card2025() {
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
  const spotO = useTransform(scrollYProgress, [0, 0.5, 1], prefersReducedMotion ? [0.18, 0.18, 0.18] : [0.16, 0.26, 0.18]);

  const inView = useInView(ref, { margin: "-22% 0px -22% 0px", once: true });
  const words = ["Contextual ", "Actions"];

  return (
    <section
      id="p2025"
      ref={ref}
      className="section era era--2025 era--light"
      aria-label="2025 - Contextual Actions"
    >
      <div className="era-inner era--roomy">
        <motion.div
          className="spotlight spotlight--onlight"
          style={{ "--x": spotX, "--y": spotY, scale: spotS, opacity: spotO }}
          aria-hidden="true"
        />

        <motion.div
          className="era-visual"
          style={prefersReducedMotion ? undefined : { y: phoneY, scale: phoneS, rotate: phoneR }}
        >
          <div className="phone-wrap">
            <img
              src="/assets/2025/device.png"
              alt="iPhone showing contextual actions"
              className="era-phone era-phone--big"
              loading="lazy"
              decoding="async"
              draggable="false"
            />
          </div>
        </motion.div>

        <motion.div
          className="era-copy era-copy--wide"
          style={prefersReducedMotion ? { opacity: copyO } : { x: copyX, opacity: copyO }}
        >
          <div className="era-chip">Situated System</div>

          <h2 className="era-title era-title--kinetic" aria-label="ContextualActions">
            {words.map((word, index) => (
              <motion.span
                key={`${word.trim()}-${index}`}
                className="era-word"
                initial={
                  prefersReducedMotion
                    ? undefined
                    : { y: 28, opacity: 0, rotate: 0.2 }
                }
                animate={
                  prefersReducedMotion ? undefined : inView ? { y: 0, opacity: 1, rotate: 0 } : {}
                }
                transition={
                  prefersReducedMotion
                    ? undefined
                    : { delay: 0.05 + index * 0.1, type: "spring", stiffness: 700, damping: 26 }
                }
              >
                {word}
              </motion.span>
            ))}
          </h2>

          <motion.p
            className="era-lede era-lede--lift"
            initial={prefersReducedMotion ? undefined : { y: 16, opacity: 0 }}
            animate={prefersReducedMotion ? undefined : inView ? { y: 0, opacity: 1 } : {}}
            transition={prefersReducedMotion ? undefined : { delay: 0.42, duration: 0.28, ease: "easeOut" }}
          >
            On-device intelligence offers the next step near what you are doing.
          </motion.p>

          <motion.p
            className="era-body era-body--lift"
            initial={prefersReducedMotion ? undefined : { y: 16, opacity: 0 }}
            animate={prefersReducedMotion ? undefined : inView ? { y: 0, opacity: 1 } : {}}
            transition={prefersReducedMotion ? undefined : { delay: 0.56, duration: 0.32, ease: "easeOut" }}
          >
            Suggestions appear beside the calendar, map, or keyboard when they are relevant. Every offer explains why it
            surfaced and can be muted or dismissed. State flows across devices so work feels continuous, and motion stays
            soft so the system feels helpful, not pushy.
          </motion.p>
        </motion.div>

        <motion.div
          className="era-year era-year--soft"
          aria-hidden="true"
          style={prefersReducedMotion ? undefined : { x: yearX, scale: yearS, opacity: yearO }}
        >
          2025
        </motion.div>

        <button
          type="button"
          className="section-cta"
          data-pos="bottom"
          aria-label="Next era"
          title="Next era"
          onClick={() => scrollToNext("#p2025")}
        >
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M6 9l6 6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </section>
  );
}
