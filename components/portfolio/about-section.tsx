"use client";

import FadeIn from "./fade-in";
import AnimatedText from "./animated-text";
import ContactButton from "./contact-button";

const ABOUT_TEXT =
  "I'm a full-stack developer with more than five years of experience building modern web and mobile products. I focus on SaaS platforms, management dashboards, process automation and AI-powered systems with React, Next.js, Laravel and React Native. Let's build something incredible together!";

const FIG =
  "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 overflow-hidden"
    >
      {/* Top-left: Moon */}
      <FadeIn
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[120px] sm:w-[160px] md:w-[210px]"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`${FIG}/moon_icon.11395d36.png`} alt="" className="w-full h-auto" />
      </FadeIn>

      {/* Top-right: Lego */}
      <FadeIn
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[120px] sm:w-[160px] md:w-[210px]"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`${FIG}/lego_icon-1.703bb594.png`} alt="" className="w-full h-auto" />
      </FadeIn>

      {/* Bottom-left: 3D object */}
      <FadeIn
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-[100px] sm:w-[140px] md:w-[180px]"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`${FIG}/p59_1.4659672e.png`} alt="" className="w-full h-auto" />
      </FadeIn>

      {/* Bottom-right: 3D group */}
      <FadeIn
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] w-[130px] sm:w-[170px] md:w-[220px]"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`${FIG}/Group_134-1.2e04f3ce.png`} alt="" className="w-full h-auto" />
      </FadeIn>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-16 sm:gap-20 md:gap-24">
        <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
          <FadeIn
            as="h2"
            delay={0}
            y={40}
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
          >
            About me
          </FadeIn>

          <AnimatedText
            text={ABOUT_TEXT}
            className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[560px]"
            style={{ fontSize: "clamp(1rem, 2vw, 1.35rem)" }}
          />
        </div>

        <ContactButton />
      </div>
    </section>
  );
}
