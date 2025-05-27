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
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        I'm a self-taught{" "}
        <span className="font-medium">full-stack developer</span> who’s passionate
        about building modern web and mobile apps. I’ve worked with technologies like{" "}
        <span className="font-medium">React (Next.js), Vue.js, InertiaJS, Laravel,</span> and{" "}
        <span className="font-medium">React Native</span>, and I constantly push myself
        to learn and improve by building real-world projects.
      </p>

      <p className="mb-3">
        I love solving problems and turning ideas into digital products. Whether it's a
        website, app, or system, I enjoy every part of the development process. I'm currently
        open to <span className="font-medium">freelance or full-time</span> opportunities.
      </p>
    </motion.section>
  );
}
