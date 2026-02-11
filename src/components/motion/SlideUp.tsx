"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

type SlideUpProps = Omit<HTMLMotionProps<"div">, "children"> & {
  children: ReactNode;
  delay?: number;
  duration?: number;
  distance?: number;
  once?: boolean;
};

export function SlideUp({
  children,
  delay = 0,
  duration = 0.3,
  distance = 16,
  once = true,
  ...props
}: SlideUpProps) {
  const reduceMotion = useReducedMotion();
  const safeDuration = Math.min(0.35, Math.max(0.2, duration));
  const safeDistance = Math.min(20, Math.max(10, distance));

  return (
    <motion.div
      initial={{ opacity: 0, y: reduceMotion ? 0 : safeDistance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.2 }}
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
