"use client";

import { useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

const GLITCH_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?~`";

function useGlitchText(originalText: string, active: boolean) {
  const [displayText, setDisplayText] = useState(originalText);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const frameRef = useRef(0);

  useEffect(() => {
    if (!active) return;

    const totalFrames = 18;
    frameRef.current = 0;

    intervalRef.current = setInterval(() => {
      frameRef.current += 1;
      const progress = frameRef.current / totalFrames;

      setDisplayText(
        originalText
          .split("")
          .map((char, i) => {
            if (char === " ") return " ";
            const charProgress = i / originalText.length;
            if (charProgress < progress) return char;
            return GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
          })
          .join("")
      );

      if (frameRef.current >= totalFrames) {
        setDisplayText(originalText);
        if (intervalRef.current) clearInterval(intervalRef.current);
      }
    }, 40);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [active, originalText]);

  return active ? displayText : originalText;
}

interface GlitchCardProps {
  title: string;
  description: string;
  badge?: string;
  href?: string;
  className?: string;
  'aria-label'?: string;
}

export function GlitchCard({
  title,
  description,
  badge,
  href,
  className = "",
  "aria-label": ariaLabel,
}: GlitchCardProps) {
  const [hovered, setHovered] = useState(false);
  const reducedMotion = usePrefersReducedMotion();
  const glitchActive = hovered && !reducedMotion;
  const glitchTitle = useGlitchText(title, glitchActive);
  const glitchDesc = useGlitchText(description, glitchActive);
  const interactive = Boolean(href);
  const cardLabel = ariaLabel || title;

  const content = (
    <div
      className={`holo-card relative rounded-md w-full border border-[var(--border-light)] bg-[var(--bg-card)] transition-all duration-300 ${interactive ? "hover:border-transparent hover:-translate-y-0.5 motion-reduce:hover:translate-y-0" : ""} ${className}`}
      style={{ padding: "var(--space-sm)" }}
    >
      {badge && (
        <span className="absolute top-3 right-3 rounded-full border border-[var(--border-medium)] px-2 py-0.5 text-[11px] font-bold tracking-widest text-[var(--text-primary)] uppercase font-mono">
          {badge}
        </span>
      )}
      <p
        className="font-bold text-sm tracking-wider text-[var(--accent)] uppercase font-mono"
        style={{ fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace" }}
        aria-hidden={interactive}
      >
        {glitchTitle}
      </p>
      <p
        className="text-xs text-[var(--text-muted)] leading-relaxed font-mono"
        style={{ fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace" }}
        aria-hidden={interactive}
      >
        {glitchDesc}
      </p>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block cursor-pointer"
        aria-label={cardLabel}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocus={() => setHovered(true)}
        onBlur={() => setHovered(false)}
      >
        {content}
      </a>
    );
  }

  return (
    <article aria-label={cardLabel}>
      {content}
    </article>
  );
}
