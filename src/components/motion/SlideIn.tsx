"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

type SlideInProps = Omit<HTMLMotionProps<"div">, "children"> & {
  children: ReactNode;
  direction?: "left" | "right";
  distance?: number;
  delay?: number;
  duration?: number;
};

export function SlideIn({
  children,
  direction = "left",
  distance = 24,
  delay = 0,
  duration = 0.3,
  ...props
}: SlideInProps) {
  const reduceMotion = useReducedMotion();
  const safeDuration = Math.min(0.35, Math.max(0.2, duration));
  const fromX = direction === "left" ? -Math.abs(distance) : Math.abs(distance);

  return (
    <motion.div
      initial={{ opacity: 0, x: reduceMotion ? 0 : fromX }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: reduceMotion ? 0.01 : safeDuration,
        delay: reduceMotion ? 0 : delay,
        ease: "easeOut",
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

