import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

export default function Card2007() {
  const ref = useRef(null);

  // Section-driven parallax
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "end 15%"],
  });

  // Device motion
  const phoneY = useTransform(scrollYProgress, [0, 1], [90, -90]);
  const phoneS = useTransform(scrollYProgress, [0, 1], [0.97, 1.05]);
  const phoneR = useTransform(scrollYProgress, [0, 1], [-0.6, 0.6]);

  // Copy motion
  const copyX = useTransform(scrollYProgress, [0, 0.35, 1], [-46, 0, 160]);
  const copyO = useTransform(scrollYProgress, [0, 0.2, 1], [0, 1, 0.08]);

  // Year motion
  const yearX = useTransform(scrollYProgress, [0, 0.35, 1], [-36, 0, 260]);
  const yearS = useTransform(scrollYProgress, [0, 1], [0.94, 1.12]);
  const yearO = useTransform(scrollYProgress, [0, 0.2, 1], [0, 0.14, 0.08]);

  // Spotlight: subtle movement + intensity with scroll
  const spotX = useTransform(scrollYProgress, [0, 1], ["52%", "48%"]);  // slight lateral drift
  const spotY = useTransform(scrollYProgress, [0, 1], ["44%", "56%"]);  // slight vertical drift
  const spotS = useTransform(scrollYProgress, [0, 1], [0.95, 1.12]);    // intensity/size
  const spotO = useTransform(scrollYProgress, [0, 0.5, 1], [0.16, 0.26, 0.18]);

  // One-time reveal for kinetic headline
  const inView = useInView(ref, { margin: "-22% 0px -22% 0px", once: true });
  const words = ["Home ", "Button ", "Era "];

  return (
    <section id="p2007" ref={ref} className="section era era--2007" aria-label="2007 ??" Home Button Era">
      <div className="era-inner era--roomy">
        {/* === Scroll-reactive spotlight (behind phone) === */}
        <motion.div
          className="spotlight"
          style={{ "--x": spotX, "--y": spotY, scale: spotS, opacity: spotO }}
          aria-hidden="true"
        />

        {/* LEFT: phone */}
        <motion.div className="era-visual" style={{ y: phoneY, scale: phoneS, rotate: phoneR }}>
          <div className="phone-wrap">
            <img
              src="/assets/c1-home-front.png"
             
              alt="iPhone (original) with Home button"
              className="era-phone era-phone--big"
              draggable="false"
            />
          </div>
        </motion.div>

        {/* RIGHT: kinetic copy */}
        <motion.div className="era-copy era-copy--wide" style={{ x: copyX, opacity: copyO }}>
          <div className="era-chip">Physical Affordance</div>

          <h2 className="era-title era-title--kinetic" aria-label="HomeButtonEra">
            {words.map((w, i) => (
              <motion.span
                key={w}
                className="era-word"
                initial={{ y: 28, opacity: 0, rotate: 0.2 }}
                animate={inView ? { y: 0, opacity: 1, rotate: 0 } : {}}
                transition={{ delay: 0.05 + i * 0.1, type: "spring", stiffness: 700, damping: 26 }}
              >
                {w}
              </motion.span>
            ))}
          </h2>

          <motion.p
            className="era-lede era-lede--lift"
            initial={{ y: 16, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.42, duration: 0.28, ease: "easeOut" }}
          >
            A single hardware anchor lowers cognitive load and teaches recovery.
          </motion.p>

          <motion.p
            className="era-body era-body--lift"
            initial={{ y: 16, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.56, duration: 0.32, ease: "easeOut" }}
          >
            The physical Home button standardized a dependable ??oescape hatch??? to Springboard,
            making navigation predictable and error recovery instant across apps. It established a
            universal mental model: <em>press to go home</em>.
          </motion.p>
        </motion.div>

        {/* BIG YEAR */}
        <motion.div className="era-year era-year--bright" style={{ x: yearX, scale: yearS, opacity: yearO }} aria-hidden="true">
          2007
        </motion.div>

        {/* scroll cue */}
        <button
          className="section-cta"
          aria-label="Next era"
          onClick={() => document.getElementById("p2013")?.scrollIntoView({ behavior: "smooth" })}
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
