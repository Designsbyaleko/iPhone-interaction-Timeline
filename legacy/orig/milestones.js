// src/milestones.js
const MILESTONES = [
  {
    id: "p01",
    year: 2007,
    title: "Home Button Era",
    era: "Physical Affordance",
    claim: "A single hardware anchor lowers cognitive load and teaches recovery.",
    theme: {
      bg: "#ffffff", fg: "#0f1113",
      surface: "#ffffff", border: "#e6e8eb", muted: "#5f6670", accent: "#2e89ff"
    },
    visual: { src: "/assets/iphone-2007.svg" },
    gesture: "home",
    citations: [{ short: "Apple Keynote (2007)", full: "Jobs, S. (2007). iPhone Introduction Keynote. Apple." }]
  },
  {
    id: "p02",
    year: 2013,
    title: "Flat + Translucency Depth",
    era: "Digital Minimalism",
    claim: "Skeuomorphism yields to flat layers; motion and blur communicate hierarchy.",
    theme: {
      bg: "#f5f7fb", fg: "#0f1113",
      surface: "#ffffff", border: "#e6e8eb", muted: "#666f7a", accent: "#4aa3ff"
    },
    visual: { src: "/assets/Iphone.png" },
    citations: [{ short: "iOS 7 HIG", full: "Apple. (2013). iOS 7 Human Interface Guidelines." }]
  },
  {
    id: "p03",
    year: 2017,
    title: "Gesture Bar Replaces Home",
    era: "Invisible Interaction",
    claim: "Hardware affordance becomes learned gesture. Animation + haptics teach state.",
    theme: {
      bg: "#0b0c0f", fg: "#f7f7f7",
      surface: "#101114", border: "#23262b", muted: "#9aa2ad", accent: "#5bd0ff"
    },
    visual: { src: "/assets/gesture-home.png" },
    gesture: "swipe-up",
    citations: [{ short: "iPhone X Intro", full: "Apple. (2017). iPhone X Keynote. Apple." }]
  },
  {
    id: "p04",
    year: 2022,
    title: "Dynamic Island",
    era: "Constraint ��' Feature",
    claim: "Sensor cutout becomes a live status and interaction surface via shape-shift motion.",
    theme: {
      bg: "#ffffff", fg: "#0f1113",
      surface: "#ffffff", border: "#e5e7ea", muted: "#606872", accent: "#7fd6ff"
    },
    visual: { src: "/assets/dynamic-island.png" },
    citations: [{ short: "Dynamic Island", full: "Apple. (2022). iPhone 14 Pro - Dynamic Island" }]
  },
  {
    id: "p10",
    year: 2035,
    title: "Agentic UI & Spatial Anchors",
    era: "Speculative Futures",
    claim: "On-device models propose actions; small, auditable cards expose intent and control.",
    theme: {
      bg: "#f7f8fb", fg: "#0f1113",
      surface: "#ffffff", border: "#e6e8eb", muted: "#5c6671", accent: "#9bd1ff"
    },
    visual: { src: "/assets/agent-card.svg" },
    citations: [{ short: "Spec projection", full: "Author analysis grounded in HCI & Apple patterns." }]
  }
];

export default MILESTONES;
