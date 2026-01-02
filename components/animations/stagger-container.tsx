"use client";

import { Children, cloneElement, isValidElement } from "react";
import { useIntersectionObserver } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface StaggerContainerProps {
  children: React.ReactNode;
  staggerDelay?: number;
  className?: string;
}

export function StaggerContainer({
  children,
  staggerDelay = 100,
  className,
}: StaggerContainerProps) {
  const { ref, isIntersecting } = useIntersectionObserver();

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className={cn(className)}>
      {Children.map(children, (child, index) => {
        if (isValidElement(child)) {
          const element = child as React.ReactElement<{
            className?: string;
            style?: React.CSSProperties;
          }>;
          return cloneElement(element, {
            className: cn(
              element.props.className,
              "transition-all duration-600",
              !isIntersecting && "opacity-0 translate-y-8",
              isIntersecting && "opacity-100 translate-y-0"
            ),
            style: {
              ...element.props.style,
              transitionDelay: isIntersecting ? `${index * staggerDelay}ms` : "0ms",
            },
          });
        }
        return child;
      })}
    </div>
  );
}
