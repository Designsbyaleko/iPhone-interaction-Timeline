import React, { useRef } from "react";

import Card2007 from "./components/Card2007";
import Card2013 from "./components/Card2013";
import Card2017 from "./components/Card2017";
import Card2022 from "./components/Card2022";
import Card2025 from "./components/Card2025";
import CardFuture from "./components/CardFuture";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";



/* Smooth scroll helper */
function scrollToId(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

/* HERO ??" black bg, mockup right, title left, parallax */
function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const deviceY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const deviceR = useTransform(scrollYProgress, [0, 1], [0, -2]);
  const titleY  = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const titleO  = useTransform(scrollYProgress, [0, 1], [1, 0.86]);

  

  return (
    <section ref={ref} className="hero" aria-label="Landing">
      <div className="hero-inner">
        <div className="hero-left">
          <motion.h1 className="hero-title" style={{ y: titleY, opacity: titleO }}>
            From Physical Affordances to<br/>Invisible Interface
          </motion.h1>
          <motion.p className="hero-lede" style={{ y: titleY, opacity: titleO }}>
            A research-driven timeline exploring how iPhone interaction moved
            from hardware affordances to invisible gestures.
          </motion.p>

          {/* small inline ??ohow to explore??? hint (integrated into hero) */}
          <motion.p className="hero-hint" style={{ y: titleY, opacity: titleO }}>
            Scroll to explore. 
          </motion.p>
        </div>

        <div className="hero-right" aria-hidden="true">
          <motion.img
            src="/assets/hero-mockup.png"
            alt=""
            className="hero-device"
            style={{ y: deviceY, rotate: deviceR }}
            draggable="false"
          />
        </div>

        <button className="hero-cta" aria-label="Start" onClick={() => scrollToId("p2007")}>
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M6 9l6 6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
