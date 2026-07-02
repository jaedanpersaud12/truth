"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { Reveal, Slide } from "@/components/ui";

/* Slide 14 — wall of recorded truths */
type Quote = { face: string; text: ReactNode; flip?: boolean };

const QUOTES: Quote[] = [
  {
    face: "face1",
    text: (
      <>
        &ldquo;The truth is that I <em>love</em> working with{" "}
        <em>children.</em>&rdquo;
      </>
    ),
  },
  {
    face: "face2",
    text: (
      <>
        &ldquo;If I tell you the truth, you don&rsquo;t have to remember{" "}
        <em>anything.</em>&rdquo;
      </>
    ),
  },
  {
    face: "face3",
    text: (
      <>
        &ldquo;My truth is just that I really hope I can make a{" "}
        <em>difference</em> in at least one persons life.&rdquo;
      </>
    ),
  },
  {
    face: "face4",
    flip: true,
    text: (
      <>
        &ldquo;The truth&hellip; is <em>relative.</em>&rdquo;
      </>
    ),
  },
  {
    face: "face5",
    flip: true,
    text: (
      <>
        &ldquo;The truth is <em>complicated.</em>&rdquo;
      </>
    ),
  },
  {
    face: "face6",
    flip: true,
    text: (
      <>
        &ldquo;The truth is <em>trauma</em> is not <em>linear.</em>&rdquo;
      </>
    ),
  },
  {
    face: "face7",
    text: (
      <>
        &ldquo;The truth is something that&rsquo;s <em>hidden.</em>&rdquo;
      </>
    ),
  },
  {
    face: "face8",
    text: (
      <>
        &ldquo;The truth is that&hellip;um, cars have 4 wheels and <em>God</em>{" "}
        <em>loves</em> us all.&rdquo;
      </>
    ),
  },
  {
    face: "face9",
    text: (
      <>
        &ldquo;The truth is, equity and education between black and white
        schools are <em>not</em> <em>the same.</em>&rdquo;
      </>
    ),
  },
];

export function Quotes() {
  return (
    <Slide num={14} rule pad className="vcenter">
      <div className="content">
        <div className="quotes-grid">
          {QUOTES.map((q, i) => (
            <motion.div
              className={`quote-card ${q.flip ? "flip" : ""}`}
              key={q.face}
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.55,
                delay: (i % 3) * 0.12 + Math.floor(i / 3) * 0.18,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="bubble">{q.text}</div>
              <div className="quote-face">
                <img
                  src={`/assets/${q.face}.webp`}
                  alt="Truth Booth participant"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Slide>
  );
}

/* Slide 15 — the collective */
const TEAM = [
  {
    img: "image19.webp",
    name: "Will Sylvester",
    bio: "Artist, Studio Director of Hank Willis Thomas studio; co-founder, Art Production Partners LLC.",
  },
  {
    img: "image17.webp",
    name: "Ryan Alexiev",
    bio: "Designer, artist and co-founder of ©AUSE COLLECTIVE.",
  },
  {
    img: "image32.webp",
    name: "Sam Giarratani",
    bio: "Founder of Negative Space; public art production built around community listening.",
  },
  {
    img: "image33.webp",
    name: "Helen Banach",
    bio: "Artist, curator, co-creative director, Hank Willis Thomas studio; co-founder, Art Production Partners LLC.",
  },
  {
    img: "image25.webp",
    name: "Hank Willis Thomas",
    bio: "Conceptual artist exploring themes of identity, history, and popular culture.",
  },
  {
    img: "image20.webp",
    name: "Jim Ricks",
    bio: "Artist and co-founder based in Ireland; public works exhibited across Europe and the U.S.",
  },
];

export function Team() {
  return (
    <Slide num={15} rule pad className="vcenter">
      <div className="content">
        <Reveal>
          <p className="statement" style={{ maxWidth: "42rem" }}>
            ©AUSE COLLECTIVE is a team of artists, designers and ethnographers
            creating innovative art in the public realm.
          </p>
        </Reveal>
        <div className="team-grid">
          {TEAM.map((m, i) => (
            <motion.div
              className="member"
              key={m.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: 0.1 + i * 0.08 }}
            >
              <img src={`/assets/${m.img}`} alt={m.name} />
              <p className="bio">
                <b>{m.name}</b>
                {m.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Slide>
  );
}

/* Slide 16 — contact */
export function Contact() {
  return (
    <Slide num={16} rule pad className="contact">
      <div className="content">
        <Reveal>
          <h2 className="statement">Contact</h2>
        </Reveal>
        <div className="contact-body">
          <Reveal delay={0.15}>
            <p>
              To work with us, email Sam Giarratani at:{" "}
              <a href="mailto:sam@songhacompany.com">sam@songhacompany.com</a>
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p>
              For more information and to watch the Truth Booth video
              recordings, please visit:{" "}
              <a
                href="https://insearchofthetruth.net"
                target="_blank"
                rel="noreferrer"
              >
                insearchofthetruth.net
              </a>
            </p>
          </Reveal>
          <Reveal delay={0.45}>
            <p>Thank you.</p>
          </Reveal>
        </div>
      </div>
    </Slide>
  );
}
