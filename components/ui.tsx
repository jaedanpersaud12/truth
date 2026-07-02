"use client";

import { motion, useInView, animate } from "framer-motion";
import { ReactNode, useEffect, useRef } from "react";

export function Slide({
  num,
  lightNum,
  rule,
  pad,
  className,
  children,
}: {
  num?: number;
  lightNum?: boolean;
  rule?: boolean;
  pad?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section className={`slide ${pad ? "pad" : ""} ${className ?? ""}`}>
      {rule && <div className="rule" />}
      {children}
      {num !== undefined && (
        <span className={`pagenum ${lightNum ? "light" : ""}`}>
          {String(num).padStart(2, "0")}
        </span>
      )}
    </section>
  );
}

export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
  once = true,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.4 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/** Scattered display words positioned by deck coordinates (percent of stage). */
export function Scatter({
  words,
  color = "#000",
  shadow,
}: {
  words: { text: string; x: number; y: number }[];
  color?: string;
  shadow?: boolean;
}) {
  return (
    <div className="scatter-stage">
      {words.map((w, i) => (
        <motion.span
          key={`${w.text}-${i}`}
          className="display-word"
          style={{
            left: `${w.x}%`,
            top: `${w.y}%`,
            color,
            textShadow: shadow ? "0 2px 14px rgba(0,0,0,0.45)" : undefined,
          }}
          initial={{ opacity: 0, y: 26, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 0.55,
            delay: 0.15 + i * 0.18,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {w.text}
        </motion.span>
      ))}
    </div>
  );
}

/** Animated count-up number that starts when scrolled into view. */
export function CountUp({ to, duration = 2 }: { to: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const controls = animate(0, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = String(Math.round(v));
      },
    });
    return () => controls.stop();
  }, [inView, to, duration]);

  return <span ref={ref}>0</span>;
}
