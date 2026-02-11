"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { HTMLMotionProps, Variants } from "framer-motion";
import type { ReactNode } from "react";

type StaggerProps = Omit<HTMLMotionProps<"div">, "children"> & {
  children: ReactNode;
  once?: boolean;
  delayChildren?: number;
  staggerChildren?: number;
};

type StaggerItemProps = Omit<HTMLMotionProps<"div">, "variants" | "children"> & {
  children: ReactNode;
};

export function Stagger({
  children,
  once = true,
  delayChildren = 0.05,
  staggerChildren = 0.08,
  ...props
}: StaggerProps) {
  const reduceMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: reduceMotion ? 0 : delayChildren,
        staggerChildren: reduceMotion ? 0 : staggerChildren,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.2 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, ...props }: StaggerItemProps) {
  const reduceMotion = useReducedMotion();

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 14 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0.01 : 0.28,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div variants={itemVariants} {...props}>
      {children}
    </motion.div>
  );
}
