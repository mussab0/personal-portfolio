"use client";

import FadeIn from "./fade-in";
import Magnet from "./magnet";
import ContactButton from "./contact-button";
import SiteMenu from "./site-menu";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative h-[100svh] min-h-[600px] flex flex-col"
      style={{ overflowX: "clip" }}
    >
      {/* Top bar — 4-dots opener + full-screen menu */}
      <SiteMenu />

      {/* Hero Heading — two lines, big typography */}
      <div className="relative z-10 mt-6 sm:mt-4 md:mt-2 flex flex-col items-center">
        <div className="overflow-hidden">
          <FadeIn
            as="p"
            delay={0.1}
            y={20}
            className="hero-heading font-black uppercase tracking-tight leading-none text-center text-[17vw] sm:text-[16vw] md:text-[15vw] lg:text-[14vw]"
          >
            Hi, i&apos;m
          </FadeIn>
        </div>
        <div className="overflow-visible">
          <FadeIn
            as="h1"
            delay={0.2}
            y={40}
            className="font-black uppercase tracking-tighter leading-none whitespace-nowrap text-center text-[20vw] sm:text-[19vw] md:text-[19vw] lg:text-[20vw] -mt-2 md:-mt-4"
            style={{
              WebkitTextStroke: "2px #BBCCD7",
              WebkitTextFillColor: "transparent",
              color: "transparent",
            }}
          >
            Mussab
          </FadeIn>
        </div>
      </div>

      {/* Hero Portrait — absolute, centered, bottom-anchored, ON TOP (z-30).
          It covers the name; the magnetic float reveals it as the cursor moves. */}
      <div className="absolute left-1/2 -translate-x-1/2 z-30 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 w-[240px] sm:w-[320px] md:w-[380px] lg:w-[440px]">
        <Magnet
          padding={150}
          strength={2.5}
          maxX={600}
          maxUp={200}
          maxDown={200}
          activeTransition="transform 0.3s ease-out"
          inactiveTransition="transform 0.6s ease-in-out"
          className="w-full"
        >
          <FadeIn delay={0.6} y={30}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/mussab-3d.png"
              alt="Mussab — full-stack developer 3D avatar"
              className="w-full h-auto select-none pointer-events-none"
              draggable={false}
            />
          </FadeIn>
        </Magnet>
      </div>

      {/* Bottom bar */}
      <div className="relative z-20 mt-auto flex items-end justify-between px-6 md:px-10 pb-7 sm:pb-8 md:pb-10">
        <FadeIn
          as="p"
          delay={0.35}
          y={20}
          className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[180px] sm:max-w-[240px] md:max-w-[300px]"
          style={{ fontSize: "clamp(0.75rem, 1.4vw, 1.5rem)" }}
        >
          a full-stack developer building saas platforms, dashboards &
          ai-powered web and mobile apps
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}
