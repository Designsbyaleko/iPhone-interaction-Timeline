// src/lib/text.js
import gsap from "gsap";

export function animateGradient(selector) {
  const el = document.querySelector(selector);
  if (!el) return;

  const tl = gsap.timeline({ defaults: { ease: "power2", duration: 0.6 } });
  tl.fromTo(
    el,
    { backgroundPosition: "0% 50%" },
    { backgroundPosition: "100% 50%", repeat: -1, yoyo: true }
  );
  return tl;
}
