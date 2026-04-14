"use client";

import { useEffect, useRef, useState } from "react";

const GLITCH_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?~`";

function useGlitchText(originalText: string, active: boolean) {
  const [displayText, setDisplayText] = useState(originalText);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const frameRef = useRef(0);

  useEffect(() => {
    if (!active) {
      setDisplayText(originalText);
      return;
    }

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

  return displayText;
}

interface GlitchCardProps {
  title: string;
  description: string;
  badge?: string;
  href?: string;
  className?: string;
}

export function GlitchCard({
  title,
  description,
  badge,
  href,
  className = "",
}: GlitchCardProps) {
  const [hovered, setHovered] = useState(false);
  const glitchTitle = useGlitchText(title, hovered);
  const glitchDesc = useGlitchText(description, hovered);

  const content = (
    <div
      className={`holo-card relative rounded-md w-full border border-[var(--border-light)] hover:border-transparent bg-[var(--bg-card)] cursor-pointer transition-all duration-300 hover:-translate-y-0.5 ${className}`}
      style={{ padding: "8px" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {badge && (
        <span className="absolute top-3 right-3 rounded-full border border-[var(--border-medium)] px-2 py-0.5 text-[10px] font-bold tracking-widest text-[var(--text-primary)] uppercase font-mono">
          {badge}
        </span>
      )}
      <p
        className="font-bold text-sm tracking-wider text-[var(--accent)] uppercase font-mono"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        {glitchTitle}
      </p>
      <p
        className="text-xs text-[var(--text-muted)] leading-relaxed font-mono"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        {glitchDesc}
      </p>
    </div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block">
        {content}
      </a>
    );
  }

  return content;
}
