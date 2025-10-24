import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView, useReducedMotion } from "framer-motion";
import { getImagePath } from "../lib/imageUtils.js";

const COPY = {
  tag: "Speculative Futures",
  titleWords: ["Situated ", "Agent"],
  lede: "The interface offers the next step and then gets out of the way.",
  bodyTop:
    "Offers are local, explainable, and small. They sit by the thing you are doing, not in a feed. The system learns patterns you approve and keeps decisions on the device when possible.",
  bodyBottom:
    "Presence is calm. When attention shifts to the watch or car, state follows automatically, with controls for why, mute, and undo always in view.",
};

export default function CardFuture() {
  const ref = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "end 15%"],
  });

  const phoneY = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [80, -80]);
  const phoneS = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [1, 1] : [0.985, 1.06]);
  const phoneR = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [-0.4, 0.4]);

  const copyX = useTransform(scrollYProgress, [0, 0.35, 1], prefersReducedMotion ? [0, 0, 0] : [-40, 0, 140]);
  const copyO = useTransform(scrollYProgress, [0, 0.2, 1], prefersReducedMotion ? [1, 1, 1] : [0, 1, 0.1]);

  const yearX = useTransform(scrollYProgress, [0, 0.35, 1], prefersReducedMotion ? [0, 0, 0] : [-140, 0, 120]);
  const yearS = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [1, 1] : [0.96, 1.1]);
  const yearO = useTransform(scrollYProgress, [0, 0.2, 1], prefersReducedMotion ? [0.1, 0.1, 0.1] : [0, 0.18, 0.1]);

  const spotX = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? ["56%", "56%"] : ["54%", "50%"]);
  const spotY = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? ["48%", "48%"] : ["42%", "58%"]);
  const spotS = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [1, 1] : [0.94, 1.14]);
  const spotO = useTransform(scrollYProgress, [0, 0.5, 1], prefersReducedMotion ? [0.16, 0.16, 0.16] : [0.14, 0.24, 0.16]);

  const inView = useInView(ref, { margin: "-22% 0px -22% 0px", once: true });

  return (
    <section
      id="pfuture"
      ref={ref}
      className="section era era--future"
      aria-label="2030-2050 - Situated Agent"
    >
      <div className="era-inner era--roomy">
        <motion.div
          className="spotlight spotlight--future"
          style={{ "--x": spotX, "--y": spotY, scale: spotS, opacity: spotO }}
          aria-hidden="true"
        />

        <motion.div
          className="era-copy era-copy--wide"
          style={prefersReducedMotion ? { opacity: copyO } : { x: copyX, opacity: copyO }}
        >
          <div className="era-chip">{COPY.tag}</div>

          <h2 className="era-title era-title--kinetic">
            {COPY.titleWords.map((word, index) => (
              <motion.span
                key={word.trim()}
                className="era-word"
                initial={prefersReducedMotion ? undefined : { y: 26, opacity: 0, rotate: 0.15 }}
                animate={prefersReducedMotion ? undefined : inView ? { y: 0, opacity: 1, rotate: 0 } : {}}
                transition={
                  prefersReducedMotion
                    ? undefined
                    : { delay: 0.06 + index * 0.12, type: "spring", stiffness: 680, damping: 28 }
                }
              >
                {word}
              </motion.span>
            ))}
          </h2>

          <motion.p
            className="era-lede"
            initial={prefersReducedMotion ? undefined : { y: 14, opacity: 0 }}
            animate={prefersReducedMotion ? undefined : inView ? { y: 0, opacity: 1 } : {}}
            transition={prefersReducedMotion ? undefined : { delay: 0.38, duration: 0.26, ease: "easeOut" }}
          >
            {COPY.lede}
          </motion.p>

          <motion.p
            className="era-body"
            initial={prefersReducedMotion ? undefined : { y: 14, opacity: 0 }}
            animate={prefersReducedMotion ? undefined : inView ? { y: 0, opacity: 1 } : {}}
            transition={prefersReducedMotion ? undefined : { delay: 0.5, duration: 0.3, ease: "easeOut" }}
          >
            {COPY.bodyTop}
          </motion.p>

          <motion.p
            className="era-body"
            initial={prefersReducedMotion ? undefined : { y: 14, opacity: 0 }}
            animate={prefersReducedMotion ? undefined : inView ? { y: 0, opacity: 1 } : {}}
            transition={prefersReducedMotion ? undefined : { delay: 0.64, duration: 0.3, ease: "easeOut" }}
          >
            {COPY.bodyBottom}
          </motion.p>
        </motion.div>

        <motion.div
          className="era-visual"
          style={{ y: phoneY, scale: phoneS, rotate: phoneR }}
          aria-hidden="true"
        >
          <div className="future-device">
            <img
              src="/iPhone-interaction-Timeline/assets/future/device.png"
              alt=""
              width="818"
              height="1730"
              loading="lazy"
              decoding="async"
              draggable="false"
            />
          </div>
        </motion.div>

        {}
        <motion.img
          className="era-year era-year--img"
          src="/iPhone-interaction-Timeline/assets/future/2030 - 2050 (1).png"
          alt=""
          aria-hidden="true"
          style={{ x: yearX, scale: yearS }}
          draggable="false"
        />
      </div>
    </section>
  );
}
