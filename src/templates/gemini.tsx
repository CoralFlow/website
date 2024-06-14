"use client";
import { useScroll, useTransform } from "framer-motion";
import React from "react";
import { GoogleGeminiEffect } from "@/components/ui/google-gemini-effect";
 
export function GoogleGeminiEffectDemo() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.5]);
const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.5]);
const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.5]);
const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.5]);
const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.5]);
  return (
    <div
      className="h-[200vh] bg-black w-full dark:border dark:border-white/[0.1] rounded-md relative pt-50 overflow-clip"
      ref={ref}
    >
      <GoogleGeminiEffect
        pathLengths={[
          pathLengthFirst,
          pathLengthSecond,
          pathLengthThird,
          pathLengthFourth,
          pathLengthFifth,
        ]}
      />
    </div>
  );
}