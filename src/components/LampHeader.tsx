"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";
import Button from "./Button";

export function LampDemo() {
  return (
    <div className="xl:block hidden">
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 w-full bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl xl:block hidden"
      >
        I build the web. <br />
        Let&apos;s create something amazing together.

      </motion.h1>

    </LampContainer>
    </div>
  );
}
