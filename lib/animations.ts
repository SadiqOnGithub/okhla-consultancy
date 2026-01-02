import { useEffect, useRef, useState } from "react";

// Animation utility classes
export const fadeInUp = "animate-fadeInUp animation-duration-600";
export const fadeIn = "animate-fadeIn animation-duration-800";
export const slideInLeft = "animate-slideInLeft animation-duration-700";
export const pulse = "animate-pulse animation-duration-2000 animation-iteration-count-infinite";

// Intersection Observer hook for scroll-triggered animations
export function useIntersectionObserver(options?: IntersectionObserverInit) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, {
      threshold: 0.1,
      ...options,
    });

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [options]);

  return { ref, isIntersecting };
}

// Animation timing constants
export const ANIMATION_DURATIONS = {
  fast: 300,
  normal: 600,
  slow: 800,
} as const;

export const ANIMATION_DELAYS = {
  none: 0,
  short: 200,
  medium: 400,
  long: 600,
} as const;
