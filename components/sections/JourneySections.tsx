"use client";

import { motion } from "framer-motion";
import { Reveal, Slide } from "@/components/ui";

/* Slide 9 — 2x2 grid of global stops */
export function GlobalGrid() {
  const cells = [
    { src: "/assets/image9.webp", cap: "Capetown, South Africa" },
    { src: "/assets/image3.webp", cap: "Sydney, Australia" },
    { src: "/assets/image31.webp", cap: "Buddha of Bamiyan, Afghanistan" },
    { src: "/assets/image4.webp", cap: "Galway, Ireland" },
  ];
  return (
    <Slide num={9} lightNum>
      <div className="grid-2x2">
        {cells.map((c, i) => (
          <motion.div
            className="grid-cell"
            key={c.cap}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, delay: i * 0.12 }}
          >
            <img src={c.src} alt={`The Truth Booth in ${c.cap}`} />
            <span className="cap">{c.cap}</span>
          </motion.div>
        ))}
      </div>
    </Slide>
  );
}

/* map dot data extracted from the deck (percent coordinates on the US map) */
const MAP_DOTS: { l: number; t: number; v: boolean }[] = [
  { l: 45.5, t: 78.9, v: true }, { l: 57.7, t: 63.5, v: true },
  { l: 57.1, t: 49.5, v: true }, { l: 47.4, t: 50.0, v: true },
  { l: 63.2, t: 43.6, v: true }, { l: 69.0, t: 43.6, v: true },
  { l: 54.7, t: 36.0, v: true }, { l: 53.1, t: 21.3, v: true },
  { l: 29.8, t: 16.4, v: true }, { l: 30.6, t: 31.8, v: true },
  { l: 19.2, t: 25.8, v: true }, { l: 8.5, t: 21.3, v: true },
  { l: 11.5, t: 11.1, v: true }, { l: 22.7, t: 43.6, v: true },
  { l: 31.6, t: 63.5, v: true }, { l: 20.4, t: 62.1, v: true },
  { l: 44.7, t: 39.1, v: true }, { l: 43.8, t: 27.3, v: true },
  { l: 61.8, t: 25.8, v: true }, { l: 70.8, t: 30.6, v: true },
  { l: 68.4, t: 67.1, v: true }, { l: 76.5, t: 69.4, v: true },
  { l: 69.0, t: 58.8, v: true }, { l: 84.4, t: 57.1, v: true },
  { l: 84.4, t: 49.5, v: true }, { l: 84.4, t: 36.0, v: true },
  { l: 75.4, t: 41.2, v: true }, { l: 81.2, t: 63.7, v: true },
  { l: 63.8, t: 73.0, v: true }, { l: 87.5, t: 26.3, v: true },
  { l: 83.0, t: 88.9, v: false }, { l: 73.0, t: 51.9, v: true },
  { l: 78.8, t: 46.9, v: true }, { l: 91.4, t: 36.0, v: true },
  { l: 93.1, t: 26.3, v: true }, { l: 6.7, t: 46.9, v: true },
  { l: 87.3, t: 41.2, v: true }, { l: 57.7, t: 75.1, v: false },
  { l: 49.3, t: 61.4, v: false }, { l: 43.7, t: 16.4, v: false },
  { l: 13.4, t: 39.3, v: false }, { l: 33.1, t: 46.9, v: false },
  { l: 96.1, t: 13.0, v: false }, { l: 91.4, t: 18.7, v: false },
  { l: 92.7, t: 30.1, v: false }, { l: 93.9, t: 22.7, v: false },
  { l: 95.4, t: 28.0, v: false }, { l: 90.2, t: 41.7, v: false },
];

const INSET_DOTS: { l: number; t: number; v: boolean }[] = [
  { l: 33.7, t: 39.8, v: false },
  { l: 96.1, t: 70.7, v: false },
];

function Dot({ d, i }: { d: { l: number; t: number; v: boolean }; i: number }) {
  return (
    <motion.span
      className={`map-dot ${d.v ? "visited" : "remaining"}`}
      style={{ left: `${d.l}%`, top: `${d.t}%` }}
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        type: "spring",
        stiffness: 380,
        damping: 18,
        delay: 0.3 + i * 0.035,
      }}
    />
  );
}

/* Slide 10 — US map, state-by-state mission */
export function AmericanPortrait() {
  return (
    <Slide num={10} rule pad>
      <div className="content usmap-layout">
        <div>
          <Reveal>
            <p className="statement">
              ©AUSE COLLECTIVE is committed to collecting truths from all
              Americans.{" "}
              <span style={{ color: "#8a7ab5" }}>
                An ongoing global, participatory art installation, completing
                an American portrait, &mdash; state by state, truth by truth.
              </span>
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="footnote" style={{ marginTop: "2rem" }}>
              *Delaware, Maine, New Hampshire, Vermont, Rhode Island,
              Connecticut, North Dakota, Colorado, Nevada, Louisiana, Oklahoma,
              Hawaii, and Alaska.
            </p>
          </Reveal>
        </div>
        <div className="usmap-wrap">
          <img src="/assets/image28.webp" alt="Map of the United States" />
          {MAP_DOTS.map((d, i) => (
            <Dot d={d} i={i} key={`m${i}`} />
          ))}
          <div className="usmap-inset">
            <img src="/assets/image23.webp" alt="Alaska and Hawaii" />
            {INSET_DOTS.map((d, i) => (
              <Dot d={d} i={MAP_DOTS.length + i} key={`i${i}`} />
            ))}
          </div>
          <div className="map-legend">
            <span>
              <span className="dot" style={{ background: "var(--visited)" }} />
              = Visited
            </span>
            <span>
              <span className="dot" style={{ background: "var(--remaining)" }} />
              = Remaining
            </span>
          </div>
        </div>
      </div>
    </Slide>
  );
}

/* Slide 11 — 2026–2027 tour locations */
export function Locations() {
  const stops = [
    { name: "Battery Park", place: "New York, NY", date: "July 4 – 6, 2026" },
    { name: "NXTHVN", place: "New Haven, CT", date: "*August 15 – 16, 2027" },
    {
      name: "Ogunquit Museum of American Art",
      place: "Ogunquit, ME",
      date: "July 18 – 19, 2026",
    },
    {
      name: "Rothko Chapel",
      place: "Houston, TX",
      date: "Sept 30 – Oct 2, 2026",
    },
    {
      name: "Aspen Museum of Art",
      place: "Aspen, CO",
      date: "July 28 – 31, 2026",
    },
  ];
  return (
    <Slide num={11} rule pad className="vcenter">
      <div className="content">
        <Reveal>
          <h2 className="statement">2026-2027 Locations</h2>
        </Reveal>
        <div className="loc-grid">
          {stops.map((s, i) => (
            <motion.div
              className="loc"
              key={s.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
            >
              <b>{s.name}</b>
              {s.place}
              <br />
              {s.date}
            </motion.div>
          ))}
          <motion.div
            className="loc"
            style={{ borderTop: "none", fontWeight: 400 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            *to be confirmed
          </motion.div>
        </div>
      </div>
    </Slide>
  );
}

/* Slide 12 — 3x3 grid of US stops */
export function USGrid() {
  const imgs = [
    "image13.webp", "image21.webp", "image15.webp",
    "image2.webp", "image22.webp", "image16.webp",
    "image24.webp", "image18.webp", "image14.webp",
  ];
  return (
    <Slide num={12} lightNum>
      <div className="grid-3x3">
        {imgs.map((f, i) => (
          <motion.div
            className="grid-cell"
            key={f}
            initial={{ opacity: 0, scale: 1.04 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: (i % 3) * 0.1 + Math.floor(i / 3) * 0.15 }}
          >
            <img src={`/assets/${f}`} alt="The Truth Booth touring the United States" />
          </motion.div>
        ))}
      </div>
      <span className="grid-caption">The U.S.</span>
    </Slide>
  );
}

/* Slide 13 — bring the booth to you */
export function BringTheBooth() {
  return (
    <Slide num={13}>
      <img
        className="bg-media"
        src="/assets/image26.webp"
        alt="The Truth Booth beneath Table Mountain, Cape Town"
      />
      <div className="fade-right" />
      <div className="overlay-title">
        <Reveal>
          <h2 className="statement">Bring the Booth to You</h2>
        </Reveal>
      </div>
      <div className="right-col">
        <Reveal>
          <p className="statement">
            Traveling the United States with a inflatable video booth is a
            huge undertaking. We are looking for your support!
          </p>
        </Reveal>
        <Reveal delay={0.25}>
          <div className="spec-list">
            <p>
              <b>Space:</b> 370 sq ft footprint, 18 ft clearance.
            </p>
            <p>
              <b>Power:</b> Standard 120V/20A (NEMA 5-20) outlet or equivalent
              generator.
            </p>
            <p>
              <b>Duration:</b> Flexible (half-day to multi-week).
            </p>
            <p>
              <b>Logistics:</b> Requires a ©AUSE COLLECTIVE member for the
              first 48 hours to supervise and train local docents.
            </p>
            <p>
              <b>Cost:</b> $25K for every 2-days that the activation is up
              (including install and deinstall day).
            </p>
          </div>
        </Reveal>
      </div>
    </Slide>
  );
}
