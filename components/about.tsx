"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
  After graduating from <span className="font-medium">BITS Pilani (Hyderabad campus)</span> with an <span className="font-medium">M.Sc. in Mathematics</span> and a <span className="font-medium">Minor in Computing & Intelligence</span>, I interned at <span className="font-medium">LV Prasad Eye Institute</span> and <span className="font-medium">Swecha</span>, improving front-end patient tools, building real-time monitoring systems, and creating educational platforms for low-spec hardware. I’ve also built personal projects like a scalable <span className="font-medium">URL shortener</span>, <span className="font-medium">fake news detection</span> ML models, and a <span className="font-medium">ride-sharing backend</span>, sharpening my backend, debugging, and API development skills. <span className="italic">I’m passionate about learning new technologies</span>, writing clean code, and understanding how systems work under the hood. I’m currently <span className="underline">seeking my first full-time role</span> as a software developer where I can contribute, grow, and make a real-world impact. Outside of tech, I’m an <span className="underline">avid fiction reader</span>, a dedicated volunteer with NSS and Nirmaan, and I’m learning history, philosophy, and guitar in my spare time.
</p>


      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and philosophy</span>. I'm also
        learning how to play the guitar.
      </p>
    </motion.section>
  );
}
