import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView, useReducedMotion } from "framer-motion";
import { scrollToNext } from "../lib/scroll.js";

export default function Card2017() {
  const ref = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  // Section-driven parallax
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "end 15%"],
  });

  // Device motion
  const phoneY = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [90, -90]);
  const phoneS = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [1, 1] : [0.97, 1.05]);
  const phoneR = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [-0.6, 0.6]);

  // Copy motion
  const copyX = useTransform(scrollYProgress, [0, 0.35, 1], prefersReducedMotion ? [0, 0, 0] : [-46, 0, 160]);
  const copyO = useTransform(scrollYProgress, [0, 0.2, 1], prefersReducedMotion ? [1, 1, 1] : [0, 1, 0.08]);

  // Year motion
  const yearS = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [1, 1] : [0.94, 1.12]);
  const yearO = useTransform(scrollYProgress, [0, 0.2, 1], prefersReducedMotion ? [0.08, 0.08, 0.08] : [0, 0.14, 0.08]);

  // Spotlight
  const spotX = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? ["50%", "50%"] : ["52%", "48%"]);
  const spotY = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? ["50%", "50%"] : ["44%", "56%"]);
  const spotS = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [1, 1] : [0.95, 1.12]);
  const spotO = useTransform(scrollYProgress, [0, 0.5, 1], prefersReducedMotion ? [0.2, 0.2, 0.2] : [0.16, 0.26, 0.18]);

  // One-time headline reveal
  const headlineInView = useInView(ref, { margin: "-22% 0px -22% 0px", once: true });
  const words = ["Invisible ", "Interaction"];

  return (
    <section
      id="p2017"
      ref={ref}
      className="section section--light era era--light era--2017"
      aria-label="2017 - Invisible Interaction"
    >
      <div className="era-grid">
        <motion.div
          className="spotlight spotlight--onlight"
          style={{ "--x": spotX, "--y": spotY, scale: spotS, opacity: spotO }}
          aria-hidden="true"
        />

        <motion.div className="era-visual" style={{ y: phoneY, scale: phoneS, rotate: phoneR }} aria-hidden="true">
          <div className="phone-wrap phone-wrap--x">
            <img
              src="/assets/2017/phones-angled.png"
              alt=""
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
          <div className="era-chip">Interaction Paradigm</div>

          <h2 className="era-title era-title--kinetic" aria-label="InvisibleInteraction">
            {words.map((word, index) => (
              <motion.span
                key={word}
                className="era-word"
                initial={prefersReducedMotion ? undefined : { y: 28, opacity: 0, rotate: 0.2 }}
                animate={prefersReducedMotion ? undefined : headlineInView ? { y: 0, opacity: 1, rotate: 0 } : {}}
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
            className="era-lede"
            initial={prefersReducedMotion ? undefined : { y: 16, opacity: 0 }}
            animate={prefersReducedMotion ? undefined : headlineInView ? { y: 0, opacity: 1 } : {}}
            transition={prefersReducedMotion ? undefined : { delay: 0.42, duration: 0.28, ease: "easeOut" }}
          >
            iPhone X removes the Home button and makes gestures the system language.
          </motion.p>

          <motion.p
            className="era-body"
            initial={prefersReducedMotion ? undefined : { y: 16, opacity: 0 }}
            animate={prefersReducedMotion ? undefined : headlineInView ? { y: 0, opacity: 1 } : {}}
            transition={prefersReducedMotion ? undefined : { delay: 0.56, duration: 0.32, ease: "easeOut" }}
          >
            With the physical anchor gone, navigation becomes muscle memory. Swipe to go home, swipe and hold for the
            switcher, and pull from the bottom edge for multitasking. Face ID lets the phone respond to attention: it
            unlocks, expands notifications, and keeps the screen awake so the interface feels present without shouting.
            Motion explains where things come from and where they go.
          </motion.p>

          <motion.div className="era-year era-year--soft" style={{ scale: yearS, opacity: yearO }} aria-hidden="true">
            2017
          </motion.div>
        </motion.div>
      </div>

      <button
        type="button"
        className="section-cta"
        data-pos="bottom"
        aria-label="Next"
        title="Next"
        onClick={() => scrollToNext("#p2017")}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M6 9l6 6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </section>
  );
}
