"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

type FadeInProps = Omit<HTMLMotionProps<"div">, "children"> & {
  children: ReactNode;
  delay?: number;
  duration?: number;
  once?: boolean;
};

export function FadeIn({
  children,
  delay = 0,
  duration = 0.25,
  once = true,
  ...props
}: FadeInProps) {
  const reduceMotion = useReducedMotion();
  const safeDuration = Math.min(0.35, Math.max(0.2, duration));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
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
