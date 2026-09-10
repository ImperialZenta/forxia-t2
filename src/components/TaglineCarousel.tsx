"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const ROTATE_MS = 6000;

type TaglineCarouselVariant = "hero" | "footer";

interface TaglineCarouselProps {
  variant: TaglineCarouselVariant;
}

export function TaglineCarousel({ variant }: TaglineCarouselProps) {
  const taglines = siteConfig.taglines;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const onVisibility = () => setHidden(document.hidden);
    onVisibility();
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  useEffect(() => {
    if (reduceMotion || paused || hidden || taglines.length < 2) {
      return;
    }

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % taglines.length);
    }, ROTATE_MS);

    return () => window.clearInterval(timer);
  }, [hidden, index, paused, reduceMotion, taglines.length]);

  if (taglines.length === 0) {
    return null;
  }

  const isHero = variant === "hero";

  return (
    <div
      role="group"
      aria-label="Rotating taglines"
      className={cn(isHero ? "max-w-2xl" : "max-w-sm")}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(event) => {
        const next = event.relatedTarget;
        if (!(next instanceof Node) || !event.currentTarget.contains(next)) {
          setPaused(false);
        }
      }}
    >
      <div
        className="grid"
        aria-live="polite"
        aria-atomic="true"
      >
        {taglines.map((tagline, taglineIndex) => {
          const isActive = taglineIndex === index;
          return (
            <p
              key={tagline}
              className={cn(
                "col-start-1 row-start-1 leading-relaxed",
                isHero
                  ? "text-lead text-navy-300"
                  : "text-sm text-gold-200/80",
                reduceMotion
                  ? isActive
                    ? "opacity-100"
                    : "pointer-events-none opacity-0"
                  : cn(
                      "transition-opacity duration-700 ease-in-out",
                      isActive
                        ? "opacity-100"
                        : "pointer-events-none opacity-0"
                    )
              )}
              aria-hidden={!isActive}
            >
              {tagline}
            </p>
          );
        })}
      </div>

      <div className={cn("flex items-center gap-2", isHero ? "mt-4" : "mt-3")}>
        {taglines.map((tagline, taglineIndex) => {
          const isActive = taglineIndex === index;
          return (
            <button
              key={tagline}
              type="button"
              aria-label={`Show tagline ${taglineIndex + 1} of ${taglines.length}`}
              aria-current={isActive ? "true" : undefined}
              className={cn(
                "rounded-full transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-400",
                isHero ? "h-2.5 w-2.5" : "h-2 w-2",
                isActive
                  ? "bg-gold-400"
                  : "bg-navy-600 hover:bg-navy-400"
              )}
              onClick={() => setIndex(taglineIndex)}
            />
          );
        })}
      </div>
    </div>
  );
}
