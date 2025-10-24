import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView, useReducedMotion } from "framer-motion";
import { scrollToNext } from "../lib/scroll.js";
import { getImagePath } from "../lib/imageUtils.js";

export default function Card2022() {
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
  const words = ["Live", " Surface"];

  return (
    <section
      id="p2022"
      ref={ref}
      className="section era era--2022"
      aria-label="2022 Live Surface"
    >
      <div className="era-inner era--roomy">
        {}
        <motion.div
          className="spotlight spotlight--violet"
          style={{ "--x": spotX, "--y": spotY, scale: spotS, opacity: spotO }}
          aria-hidden="true"
        />

        {}
        <motion.div
          className="era-copy era-copy--wide"
          style={prefersReducedMotion ? { opacity: copyO } : { x: copyX, opacity: copyO }}
        >
          <div className="era-chip">Ambient UI</div>

          <h2 className="era-title era-title--kinetic" aria-label="LiveSurface">
            {words.map((word, index) => (
              <motion.span
                key={word}
                className="era-word"
                initial={prefersReducedMotion ? undefined : { y: 28, opacity: 0, rotate: 0.2 }}
                animate={prefersReducedMotion ? undefined : inView ? { y: 0, opacity: 1, rotate: 0 } : {}}
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
            System surfaces emerge from hardware and stay present in context.
          </motion.p>

          <motion.p
            className="era-body era-body--lift"
            initial={prefersReducedMotion ? undefined : { y: 16, opacity: 0 }}
            animate={prefersReducedMotion ? undefined : inView ? { y: 0, opacity: 1 } : {}}
            transition={prefersReducedMotion ? undefined : { delay: 0.56, duration: 0.32, ease: "easeOut" }}
          >
            The sensor housing becomes an active surface for calls, timers, and Now Playing, while Live Activities keep
            glanceable state on the Lock and Home screens. Motion is quiet and reversible to teach where things come from
            and where they go. The result is presence without shouting and faster recovery when attention shifts.
          </motion.p>
        </motion.div>

        {}
        <motion.div className="era-visual" style={{ y: phoneY, scale: phoneS, rotate: phoneR }} aria-hidden="true">
          <div className="phone-wrap phone-wrap--2022">
            <img
              src="/iPhone-interaction-Timeline/assets/2022/device.png"

              height="2567"
              loading="lazy"
              decoding="async"
              draggable="false"
            />
          </div>
        </motion.div>

        {}
        <motion.div className="era-year era-year--soft" style={{ x: yearX, scale: yearS, opacity: yearO }} aria-hidden="true">
          2022
        </motion.div>

        {}
        <button
          className="section-cta section-cta--on-light"
          aria-label="Next era"
          onClick={() => scrollToNext("#p2022")}
          title="Next era"
          style={{ bottom: '150px', zIndex: 3 }}
        >
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M6 9l6 6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </section>
  );
}

