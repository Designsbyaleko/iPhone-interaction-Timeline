import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";


export default function Card2013() {
  const ref = useRef(null);

  // Section-driven progress (parallax)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "end 15%"],
  });

  // Device motion (right column)
  const phoneY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const phoneS = useTransform(scrollYProgress, [0, 1], [0.985, 1.045]);
  const phoneR = useTransform(scrollYProgress, [0, 1], [-0.4, 0.4]);

  // Copy motion (left column)
  const copyX = useTransform(scrollYProgress, [0, 0.35, 1], [-40, 0, 140]);
  const copyO = useTransform(scrollYProgress, [0, 0.2, 1], [0, 1, 0.1]);

  // Year motion (left/low), subtle
  const yearX = useTransform(scrollYProgress, [0, 0.35, 1], [-160, 0, 60]);
  const yearS = useTransform(scrollYProgress, [0, 1], [0.96, 1.08]);
  const yearO = useTransform(scrollYProgress, [0, 0.2, 1], [0, 0.10, 0.06]);

  // Spotlight behind the phone (for white paper)
  const spotX = useTransform(scrollYProgress, [0, 1], ["60%", "56%"]);
  const spotY = useTransform(scrollYProgress, [0, 1], ["42%", "58%"]);
  const spotS = useTransform(scrollYProgress, [0, 1], [0.95, 1.12]);
  const spotO = useTransform(scrollYProgress, [0, 0.5, 1], [0.18, 0.28, 0.18]);

  // One-time kinetic entrance
  const inView = useInView(ref, { margin: "-22% 0px -22% 0px", once: true });

  // ---- Control Center auto-reveal on scroll ----
  // Map the card's scroll to a reveal amount:
  //   enter (0 ??' 0.5): reveal 0% ??' ~85%
  //   exit  (0.5 ??' 1): ease back slightly to ~70% so it "settles"
  const delayed = useTransform(scrollYProgress, [0, 0.18, 0.60, 1], [0, 0, 0.85, 0.7]);
  const ccReveal = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.85, 0.7]); // 0..1
  const ccClip = useTransform(ccReveal, v => `inset(${(1 - v) * 100}% 0 0 0)`);
  const ccO    = useTransform(ccReveal, [0, 0.05, 1], [0, 1, 1]);
  const ccParY = useTransform(scrollYProgress, [0, 1], [10, -10]); // keep tiny parallax
  

  const words = ["Digital ", "Minimalism"];

  return (
    <section
      id="p2013"
      ref={ref}
      className="section era era--alt era--light section--extra-top"
      aria-label="2013 ??" Digital Minimalism (iOS 7)"
    >
      <div className="era-inner era--roomy">
        {/* Spotlight (tuned for white) */}
        <motion.div
          className="spotlight spotlight--onlight"
          style={{ "--x": spotX, "--y": spotY, scale: spotS, opacity: spotO }}
          aria-hidden="true"
        />

        {/* LEFT: copy */}
        <motion.div className="era-copy era-copy--wide" style={{ x: copyX, opacity: copyO }}>
          <div className="era-chip">Visual Language</div>

          <h2 className="era-title" aria-label="Digital Minimalism">
            {words.map((w, i) => (
              <motion.span
                key={w}
                className="era-word"
                initial={{ y: 26, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.04 + i * 0.1, type: "spring", stiffness: 680, damping: 28 }}
              >
                {w}
              </motion.span>
            ))}
          </h2>

          <motion.p
            className="era-lede"
            initial={{ y: 14, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.36, duration: 0.26, ease: "easeOut" }}
          >
            iOS 7 replaces texture with clarity, depth, and motion.
          </motion.p>

          <motion.p
            className="era-body"
            initial={{ y: 14, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.48, duration: 0.3, ease: "easeOut" }}
          >
            Translucent layers establish hierarchy and focus.<wbr/> Lighter typography and simplified
            icons reduce cognitive load. Subtle motion and parallax keep spatial continuity
            during transitions.
          </motion.p>
        </motion.div>

        {/* RIGHT: phone + Control Center overlay (auto-reveal) */}
        <motion.div className="era-visual" style={{ y: phoneY, scale: phoneS, rotate: phoneR }}>
          <div className="phone-wrap">
            {/* Phone */}
            <img
              src="/assets/c2-minimal-front.png"
             
              alt="iPhone with iOS 7 Home screen"
              className="era-phone era-phone--big"
              loading="lazy"
              decoding="async"
              draggable="false"
            />

            {/* Control Center overlay ??" image should align with the phone screen area */}
            <motion.img
              src="/assets/c2-control-center.png"
             
              alt=""
              className="cc-overlay"
              style={{ y: ccParY, clipPath: ccClip, opacity: ccO }}
              draggable="false"
              aria-hidden="true"
              
            />
          </div>
        </motion.div>

        {/* Big year on lower-left */}
        <motion.div
          className="era-year era-year--left era-year--low"
          style={{ x: yearX, scale: yearS, opacity: yearO }}
          aria-hidden="true"
        >
          2013
        </motion.div>

        {/* scroll cue forward */}
        <button
          className="section-cta section-cta--ink"
          aria-label="Next era"
          onClick={() => document.getElementById("p2017")?.scrollIntoView({ behavior: "smooth" })}
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
