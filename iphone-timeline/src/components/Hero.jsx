import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const DRAMA = 1.0;

export default function Hero() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"], 
  });

  const titleYRaw = useTransform(scrollYProgress, [0, 1], [0, -100 * DRAMA]);
  const ledeYRaw  = useTransform(scrollYProgress, [0, 1], [0, -60 * DRAMA]);
  const titleY    = useSpring(titleYRaw, { stiffness: 120, damping: 24, mass: 0.9 });
  const ledeY     = useSpring(ledeYRaw,  { stiffness: 140, damping: 26, mass: 0.9 });
  const titleO    = useTransform(scrollYProgress, [0, 1], [1, 0.86]);

  const phoneYRaw = useTransform(scrollYProgress, [0, 1], [0, -200 * DRAMA]);
  const phoneY    = useSpring(phoneYRaw, { stiffness: 110, damping: 22, mass: 0.95 });
  const phoneS    = useTransform(scrollYProgress, [0, 1], [1, 1.06]);
  const phoneR    = useTransform(scrollYProgress, [0, 1], [0, -2]); 

  const gradX = useTransform(scrollYProgress, [0, 1], ["70%", "64%"]);
  const gradY = useTransform(scrollYProgress, [0, 1], ["28%", "36%"]);

  return (
    <section ref={ref} className="hero">
      <div className="hero-sticky">
        <motion.div
          className="hero-bg"
          style={{ "--gx": gradX, "--gy": gradY }}
          aria-hidden="true"
        />
        <div className="hero-inner">
          <div className="hero-left">
            <motion.h1 className="hero-title" style={{ y: titleY, opacity: titleO }}>
              From Physical Affordances to
              <br />
              Invisible Interface
            </motion.h1>
            <motion.p className="hero-lede" style={{ y: ledeY }}>
              A cinematic, research-driven timeline exploring how iPhone interaction moved
              from hardware affordances to invisible gestures.
            </motion.p>
          </div>

          <div className="hero-right" aria-hidden="true">
            <motion.img
              src="/assets/hero-mockup.png"
              alt=""
              className="hero-device"
              style={{ y: phoneY, scale: phoneS, rotate: phoneR }}
              draggable="false"
            />
          </div>

          <button
            className="hero-cta"
            aria-label="Start"
            onClick={() => document.getElementById("p2007")?.scrollIntoView({ behavior: "smooth" })}
            title="Start"
          >
            <svg viewBox="0 0 24 24" fill="none" width="28" height="28">
              <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

