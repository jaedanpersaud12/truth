"use client";

import { motion } from "framer-motion";
import { CountUp, Reveal, Scatter, Slide } from "@/components/ui";

/* Slide 1 — hero: booth at sunset, "IN SEARCH OF THE (TRUTH) 2026" */
export function Hero() {
  return (
    <Slide className="hero">
      <motion.img
        className="bg-media"
        src="/assets/image30.webp"
        alt="The Truth Booth — a giant inflatable speech bubble — on a mountain ridge at sunset"
        initial={{ scale: 1.06 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.4, ease: "easeOut" }}
      />
      <Scatter
        words={[
          { text: "IN", x: 28.5, y: 13.3 },
          { text: "SEARCH", x: 31.3, y: 21.5 },
          { text: "OF", x: 59.6, y: 29.7 },
          { text: "THE", x: 29.8, y: 38 },
        ]}
      />
      <motion.div
        className="hero-footer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        <span>A project by ©AUSE COLLECTIVE</span>
        <span>2026</span>
      </motion.div>
    </Slide>
  );
}

/* Slide 2 — inflating booth video + what it is */
export function WhatIsIt() {
  return (
    <Slide num={2}>
      <video
        className="bg-media"
        src="/assets/booth-inflate.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="photo-caption">
        <div className="scrim" />
        <Reveal>
          <p className="kicker">
            The Truth Booth is a giant, inflatable speech bubble and a video
            recording booth continuing its journey, traveling the world in
            search of the truth.
          </p>
        </Reveal>
      </div>
    </Slide>
  );
}

/* Slide 3 — inside the booth */
export function Inside() {
  return (
    <Slide num={3} rule pad>
      <div className="content">
        <Reveal>
          <p className="kicker" style={{ maxWidth: "26rem" }}>
            Inside, participants complete the statement &ldquo;The truth
            is...&rdquo; &mdash;recording two-minute videos, assembling a
            living archive of human perspective.
          </p>
        </Reveal>
        <div className="inside-media">
          <motion.img
            className="still"
            src="/assets/image8.webp"
            alt="Inside the Truth Booth: a stool facing the recording screen"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.video
            className="clip"
            src="/assets/booth-inside.mp4"
            autoPlay
            muted
            loop
            playsInline
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
      </div>
    </Slide>
  );
}

/* Slide 4 — dark booth entrance, scattered manifesto */
export function Everyone() {
  return (
    <Slide num={4} lightNum>
      <img
        className="bg-media"
        src="/assets/image27.webp"
        alt="A person slipping through the curtain entrance of the Truth Booth"
      />
      <Scatter
        color="#fff"
        shadow
        words={[
          { text: "EVERYONE", x: 20.4, y: 14 },
          { text: "HAS", x: 53.2, y: 25.1 },
          { text: "THEIR OWN", x: 21.5, y: 35.9 },
          { text: "VERSION", x: 22.9, y: 46.9 },
          { text: "OF THE", x: 37.2, y: 57.7 },
          { text: "TRUTH.", x: 61.1, y: 68.7 },
        ]}
      />
    </Slide>
  );
}

/* Slide 5 — participant speaking, "WHAT IS YOURS?" */
export function WhatIsYours() {
  return (
    <Slide num={5}>
      <video
        className="bg-media"
        src="/assets/booth-speaker.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <Scatter
        words={[
          { text: "WHAT", x: 26.8, y: 11.4 },
          { text: "IS", x: 33.8, y: 44 },
          { text: "YOURS?", x: 13.5, y: 56.8 },
        ]}
      />
    </Slide>
  );
}

/* Slide 6 — full-bleed grid of participant stills */
export function FacesInterlude() {
  return (
    <Slide num={6}>
      <motion.img
        className="bg-media"
        src="/assets/image6.webp"
        alt="Stills of participants from ©ause Collective's Truth Booth, Galway, Ireland 2011"
        style={{ objectFit: "cover" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
      />
    </Slide>
  );
}

/* Slide 7 — Afghanistan photo fading right into the mission statement */
export function Mosaic() {
  return (
    <Slide num={7}>
      <img
        className="bg-media"
        src="/assets/image29.webp"
        alt="The Truth Booth in front of the Blue Mosque, Mazar-i-Sharif, Afghanistan"
      />
      <div className="fade-right" />
      <div className="right-col">
        <Reveal>
          <p className="statement">
            The Truth Booth serves as both a public confessional and a mosaic
            of human truth. The project has traveled across the globe&mdash;from
            Ireland, Afghanistan, Australia, South Africa, and Mexico to
            communities throughout the U.S.&mdash;gathering thousands of
            responses that range from deeply political reflections to intimate
            confessions about love, grief, fear, race, spirituality, and hope.
          </p>
        </Reveal>
      </div>
    </Slide>
  );
}

/* Slide 8 — world map with count-up stats */
export function Stats() {
  const stats = [
    { n: 5, label: "CONTINENTS" },
    { n: 7, label: "COUNTRIES" },
    { n: 37, label: "U.S. STATES" },
  ];
  return (
    <Slide num={8} rule pad>
      <div className="stats-map" aria-hidden />
      <div className="content">
        <Reveal>
          <p className="kicker">
            Over the last 15 years,
            <br />
            the Truth Booth has been to...
          </p>
        </Reveal>
      </div>
      <div className="stats-row">
        {stats.map((s, i) => (
          <motion.div
            className="stat"
            key={s.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            <div className="num">
              <CountUp to={s.n} duration={1.6 + i * 0.4} />
            </div>
            <div className="small-label label">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </Slide>
  );
}
