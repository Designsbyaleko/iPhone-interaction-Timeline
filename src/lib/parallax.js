// src/lib/parallax.js
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/**
 * Attach to an element and get a parallax y transform.
 * @param {number} amount - total px offset from bottom -> top of viewport
 * @returns {{ref: React.RefObject, y: MotionValue<number>}}
 */
export function useParallax(amount = 60) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // when element enters/leaves viewport
  });
  const y = useTransform(scrollYProgress, [0, 1], [amount, -amount]);
  return { ref, y };
}
