import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

export default function Card2017() {
  const ref = useRef(null);

  // Card-local scroll progress (0..1 while this section scrolls)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 20%"],
  });

  // Base parallax for the whole stack (subtle)
  const stackBaseY = useTransform(scrollYProgress, [0, 1], [24, -24]);

  // "Explode cameo" window: separate between 35??"55%, recombine by 70%
  // (triangle: 0 -> 1 -> 0)
  const explodeT = useTransform(
    scrollYProgress,
    [0, 0.35, 0.55, 0.70, 1],
    [0, 0,    1,    0,    0]
  );

  // Layer offsets during explode (Y) + tiny scale hints
  const shellY     = useTransform(explodeT, [0, 1], [0, -80]);   // front glass up
  const iconsY     = useTransform(explodeT, [0, 1], [0,  100]);  // UI layer forward
  const wallpaperY = useTransform(explodeT, [0, 1], [0,   60]);  // background slower

  const shellS     = useTransform(scrollYProgress, [0, 1], [1, 1.012]);
  const iconsS     = useTransform(scrollYProgress, [0, 1], [1, 1.018]);
  const wallS      = useTransform(scrollYProgress, [0, 1], [1, 1.01]);

  // Copy column drift
  const copyY = useTransform(scrollYProgress, [0, 1], [12, -12]);

  // One-shot reveals
  const inView = useInView(ref, { margin: "-20% 0px -30% 0px", once: true });

  return (
    <section id="p2017" className="section era era--light era--alt" aria-label="2017 ??" Gesture-first iPhone">
      <div className="era-inner" ref={ref}>
        {/* LEFT: layered device with brief explode */}
        <motion.div className="era-art stack-2017" style={{ y: stackBaseY }}>
          {/* wallpaper (deepest) */}
          <motion.img
            src="/assets/2017/wallpaper.png"
            alt=""
            className="layer-2017 layer-2017--wall"
            style={{ y: wallpaperY, scale: wallS }}
            loading="lazy"
            decoding="async"
            draggable="false"
          />
          {/* icons/notch UI */}
          <motion.img
            src="/assets/2017/icons.png"
            alt=""
            className="layer-2017 layer-2017--icons"
            style={{ y: iconsY, scale: iconsS }}
            loading="lazy"
            decoding="async"
            draggable="false"
          />
          {/* shell/glass (front) */}
          <motion.img
            src="/assets/2017/shell.png"
            alt="iPhone X front glass and frame"
            className="layer-2017 layer-2017--shell"
            style={{ y: shellY, scale: shellS }}
            loading="lazy"
            decoding="async"
            draggable="false"
          />

          {/* Face ID bloom (one-shot) */}
          <motion.div
            className="faceid-bloom"
            aria-hidden="true"
            initial={{ opacity: 0, scale: 0.82 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M7 10V8a5 5 0 0 1 10 0v2" opacity=".7"/>
              <rect x="5.5" y="10" width="13" height="9" rx="2.2"/>
            </svg>
            <span>Face&nbsp;ID</span>
          </motion.div>

          {/* Screen mask for a tiny switcher sheet that slides up once */}
          <div className="screen-mask">
            <motion.div
              className="switcher-sheet"
              initial={{ y: "100%", opacity: 0 }}
              animate={inView ? { y: "40%", opacity: 1 } : {}}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.35 }}
            />
          </div>

          {/* Home indicator micro-gesture (one-shot rise) */}
          <motion.div
            className="gesture-home"
            aria-hidden="true"
            initial={{ opacity: 0, y: 6 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.45 }}
          />
        </motion.div>

        {/* RIGHT: copy */}
        <motion.div
          className="era-copy"
          style={{ y: copyY }}
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.35 }}
        >
          <div className="era-tag era-tag--ghost">Interaction Paradigm</div>
          <h2 className="era-title">Invisible Interaction</h2>
          <p className="era-lede">iPhone X removes the Home button and establishes a gesture-first OS.</p>
          <p className="era-body">
            Edge-to-edge hardware and sensor housing enable <em>swipe-to-go-home</em>, multitasking from the bottom edge,
            and <em>swipe-hold</em> for the app switcher. The physical anchor disappears; recovery becomes learned motion
            and on-screen affordances. A brief separation of <em>glass</em>, <em>UI</em>, and <em>wallpaper</em> makes
            the depth model legible.
          </p>

          <div className="era-year">2017</div>
        </motion.div>
      </div>

      {/* CTA to next card (update target when you add 2022) */}
      <button
        className="section-cta section-cta--ink"
        aria-label="Next"
        onClick={() => document.getElementById("p2022")?.scrollIntoView({ behavior: "smooth", block: "start" })}
      >
        <svg viewBox="0 0 24 24" fill="none"><path d="M6 9l6 6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>
    </section>
  );
}
