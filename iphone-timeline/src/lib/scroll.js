// src/lib/scroll.js
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let lenis;

export function initSmoothScroll(options = {}) {
  if (lenis) return lenis;

  // Softer, more responsive feel
  lenis = new Lenis({
    duration: 0.8,                 // was 1.1
    smoothWheel: true,
    wheelMultiplier: 1.25,         // quicker response to wheel
    smoothTouch: false,
    easing: (t) => 1 - Math.pow(1 - t, 1.6), // gentle ease
    ...options,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  lenis.on("scroll", ScrollTrigger.update);

  // Let ScrollTrigger measure against Lenis' virtual scroll
  ScrollTrigger.scrollerProxy(document.documentElement, {
    scrollTop(value) {
      return arguments.length
        ? lenis.scrollTo(value, { immediate: true })
        : window.scrollY;
    },
    getBoundingClientRect() {
      return { top: 0, left: 0, width: innerWidth, height: innerHeight };
    },
  });

  setTimeout(() => ScrollTrigger.refresh(), 0);
  return lenis;
}

// Smoothly scroll to an element (used by arrows/rail)
function resolveElement(target) {
  if (!target) return null;
  if (target instanceof Element) return target;
  if (typeof target === "string") {
    return document.querySelector(target) ?? document.getElementById(target.replace(/^#/, ""));
  }
  return null;
}

export function scrollToEl(target, opts = {}) {
  const element = resolveElement(target);
  if (!element) return;

  const defaults = { offset: 0, duration: 0.65, easing: (t) => 1 - Math.pow(1 - t, 1.6) };

  if (lenis) {
    lenis.scrollTo(element, { ...defaults, ...opts });
  } else {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export function scrollToNext(current, opts = {}) {
  const currentEl = resolveElement(current);
  if (!currentEl) return;

  const sections = Array.from(document.querySelectorAll("section[id]"));
  const index = sections.indexOf(currentEl);
  const nextSection = index >= 0 ? sections[index + 1] : null;

  if (nextSection) {
    scrollToEl(nextSection, opts);
  }
}
