import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView, useReducedMotion } from "framer-motion";
import { scrollToNext } from "../lib/scroll.js";
import { asset } from "../lib/asset.js";


export default function Card2013() {
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

  const spotX = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? ["58%", "58%"] : ["60%", "56%"]);
  const spotY = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? ["50%", "50%"] : ["42%", "58%"]);
  const spotS = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [1, 1] : [0.95, 1.12]);
  const spotO = useTransform(scrollYProgress, [0, 0.5, 1], prefersReducedMotion ? [0.2, 0.2, 0.2] : [0.18, 0.28, 0.18]);

  const inView = useInView(ref, { margin: "-22% 0px -22% 0px", once: true });

  const ccReveal = useTransform(scrollYProgress, [0, 0.5, 1], prefersReducedMotion ? [0.75, 0.75, 0.75] : [0, 0.85, 0.7]); 
  const ccClip = useTransform(ccReveal, v => `inset(${(1 - v) * 100}% 0 0 0)`);
  const ccO    = useTransform(ccReveal, [0, 0.05, 1], prefersReducedMotion ? [1, 1, 1] : [0, 1, 1]);
  const ccParY = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [10, -10]); 
  

  const words = ["Digital ", "Minimalism"];

  return (
    <section
      id="p2013"
      ref={ref}
      className="section era era--alt section--extra-top"
      aria-label="2013 - Digital Minimalism (iOS 7)"
    >
      <div className="era-inner era--roomy">
        {}
        <motion.div
          className="spotlight spotlight--onlight"
          style={{ "--x": spotX, "--y": spotY, scale: spotS, opacity: spotO }}
          aria-hidden="true"
        />

        {}
        <motion.div className="era-copy era-copy--wide" style={prefersReducedMotion ? { opacity: copyO } : { x: copyX, opacity: copyO }}>
          <div className="era-chip">Visual Language</div>

          <h2 className="era-title" aria-label="Digital Minimalism">
            {words.map((w, i) => (
              <motion.span
                key={w}
                className="era-word"
                initial={prefersReducedMotion ? undefined : { y: 26, opacity: 0 }}
                animate={prefersReducedMotion ? undefined : inView ? { y: 0, opacity: 1 } : {}}
                transition={prefersReducedMotion ? undefined : { delay: 0.04 + i * 0.1, type: "spring", stiffness: 680, damping: 28 }}
              >
                {w}
              </motion.span>
            ))}
          </h2>

          <motion.p
            className="era-lede"
            initial={prefersReducedMotion ? undefined : { y: 14, opacity: 0 }}
            animate={prefersReducedMotion ? undefined : inView ? { y: 0, opacity: 1 } : {}}
            transition={prefersReducedMotion ? undefined : { delay: 0.36, duration: 0.26, ease: "easeOut" }}
          >
            iOS 7 replaces texture with clarity, depth, and motion.
          </motion.p>

          <motion.p
            className="era-body"
            initial={prefersReducedMotion ? undefined : { y: 14, opacity: 0 }}
            animate={prefersReducedMotion ? undefined : inView ? { y: 0, opacity: 1 } : {}}
            transition={prefersReducedMotion ? undefined : { delay: 0.48, duration: 0.3, ease: "easeOut" }}
          >
            Translucent layers establish hierarchy and focus.<wbr/> Lighter typography and simplified
            icons reduce cognitive load. Subtle motion and parallax keep spatial continuity
            during transitions.
          </motion.p>
        </motion.div>

        {}
        <motion.div className="era-visual" style={{ y: phoneY, scale: phoneS, rotate: phoneR }}>
          <div className="phone-wrap">
            {}
            <img
              src={asset('assets/c2-minimal-front.png')}
              alt="iPhone with iOS 7 Home screen"
              width="1200"
              height="2400"
              className="era-phone era-phone--big"
              loading="lazy"
              decoding="async"
              draggable="false"
            />

            {}
            <motion.img
              src={asset('assets/c2-control-center.png')}
              className="cc-overlay"
              style={{ y: ccParY, clipPath: ccClip, opacity: ccO }}
              draggable="false"
              aria-hidden="true"
              
            />
          </div>
        </motion.div>

        {}
        <motion.div
          className="era-year era-year--left era-year--low"
          style={{ x: yearX, scale: yearS, opacity: yearO }}
          aria-hidden="true"
        >
          2013
        </motion.div>

        {}
        <button
          className="section-cta section-cta--ink"
          aria-label="Next era"
          onClick={() => scrollToNext("#p2013")}
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

