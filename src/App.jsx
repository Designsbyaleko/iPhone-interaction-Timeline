import React, { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

const BASE_URL = import.meta.env.BASE_URL;

import Card2007 from "./components/Card2007";
import Card2013 from "./components/Card2013";
import Card2017 from "./sections/Card2017";
import Card2022 from "./components/Card2022";
import Card2025 from "./components/Card2025";
import CardFuture from "./components/CardFuture";




function scrollToId(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}


function Hero() {
  const ref = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const deviceY = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [0, -120]);
  const deviceR = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [0, -2]);
  const titleY = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [0, -60]);
  const titleOpacity = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [1, 1] : [1, 0.86]);

  const heroTextStyle = prefersReducedMotion ? undefined : { y: titleY, opacity: titleOpacity };
  const heroImageStyle = prefersReducedMotion ? undefined : { y: deviceY, rotate: deviceR };

  return (
    <section ref={ref} className="hero" aria-label="Landing">
      <div className="hero-inner">
        <div className="hero-left">
          <motion.h1 className="hero-title" style={heroTextStyle}>
            From Physical Affordances to<br />
            Invisible Interface
          </motion.h1>
          <motion.p className="hero-lede" style={heroTextStyle}>
            A research-driven timeline exploring how iPhone interaction moved from hardware affordances to invisible
            gestures.
          </motion.p>

          {}
          <motion.p className="hero-hint" style={heroTextStyle}>
            Scroll to explore.
          </motion.p>
        </div>

        <div className="hero-right" aria-hidden="true">
          <motion.img src={`${BASE_URL}assets/hero-mockup.png`} alt="" className="hero-device" style={heroImageStyle} draggable="false" />
        </div>

        <button className="hero-cta" aria-label="Start" onClick={() => scrollToId("p2007")}>
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M6 9l6 6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <Hero />
      <div className="spacer" />
      <Card2007 />
      <Card2013 />
      <Card2017 />
      <Card2022 />
      <Card2025 />
      <CardFuture />
    </>
  );
}

