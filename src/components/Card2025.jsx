import React, { useMemo, useRef } from "react";
import { motion, useScroll, useTransform, useInView, useReducedMotion } from "framer-motion";
import { scrollToNext } from "../lib/scroll.js";

expoconst BASE_URL = import.meta.env.BASE_URL;

export default function Card2025() {
  const sectionRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 85%", "end 15%"],
  });

  const phoneY = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [90, -90]);
  const phoneS = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [1, 1] : [0.97, 1.05]);
  const phoneR = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [0.6, -0.6]);

  const copyX = useTransform(scrollYProgress, [0, 0.35, 1], prefersReducedMotion ? [0, 0, 0] : [46, 0, -160]);
  const copyO = useTransform(scrollYProgress, [0, 0.2, 1], prefersReducedMotion ? [1, 1, 1] : [0, 1, 0.08]);

  const yearX = useTransform(scrollYProgress, [0, 0.35, 1], prefersReducedMotion ? [0, 0, 0] : [24, 0, -220]);
  const yearS = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [1, 1] : [0.94, 1.08]);

  const inView = useInView(sectionRef, { margin: "-20% 0px -20% 0px", once: true });

  const titleWords = useMemo(() => ["Contextual", "Actions"], []);
  const getWordMotion = (index) => {
    if (prefersReducedMotion) {
      return {};
    }
    const initialState = { y: 28, opacity: 0, rotate: 0.2, scale: index === 0 ? 0.98 : 1 };
    const finalState = { y: 0, opacity: 1, rotate: 0, scale: index === 0 ? 1.02 : 1 };
    return {
      initial: initialState,
      animate: inView ? finalState : initialState,
      transition: { delay: 0.05 + index * 0.1, type: "spring", stiffness: 700, damping: 26 },
    };
  };

  return (
    <section
      id="p2025"
      ref={sectionRef}
      className="section section--light era era--2025"
      aria-label="2025 Contextual Actions"
    >
      <div className="section-wrap">
        <div className="era-grid">
          <motion.div
            className="era-visual"
            aria-hidden="true"
            style={prefersReducedMotion ? undefined : { y: phoneY, scale: phoneS, rotate: phoneR }}
          >
            <img
              src={`${BASE_URL}assets/2025/device.png`}
       height="3253"
              loading="lazy"
              decoding="async"
            />
          </motion.div>
          <motion.div
            className="era-copy"
            style={prefersReducedMotion ? undefined : { x: copyX, opacity: copyO }}
          >
            <div className="era-tag">Situated System</div>
            <h2 className="era-title" aria-label="Contextual Actions">
              {titleWords.map((word, index) => (
                <motion.span
                  key={word}
                  className={`era-title-word${index === 0 ? " era-title-word--lead" : ""}`}
                  {...getWordMotion(index)}
                >
                  {word}
                  {index < titleWords.length - 1 ? "\u00A0" : ""}
                </motion.span>
              ))}
            </h2>
            <p className="era-lede">On-device models offer the next step near what you are doing.</p>
            <p className="era-body">
              Suggestions appear by the calendar, map, or keyboard when they are relevant, like adding an event or sharing
              an ETA. Every offer explains why it appeared and can be dismissed or muted. State flows across devices so work
              feels continuous. Motion remains soft and confirmable so the system feels helpful, not pushy.
            </p>
            <motion.div
              className="era-year"
              aria-hidden="true"
              style={prefersReducedMotion ? undefined : { x: yearX, scale: yearS }}
            >
              2025
            </motion.div>
          </motion.div>
        </div>
        <button
          type="button"
          className="section-cta section-cta--on-dark"
          aria-label="Next section, Situated Agent"
          onClick={() => scrollToNext("#p2025")}
          style={{ bottom: '-30px', zIndex: 3 }}
        >
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M6 9l6 6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </section>
  );
}

