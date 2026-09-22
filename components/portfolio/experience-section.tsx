"use client";

import FadeIn from "./fade-in";

const EXPERIENCES = [
  {
    number: "01",
    role: "Full-Stack Developer",
    company: "KarimApps",
    date: "2021 — Present",
    description:
      "Over 4 years building and shipping projects — started on-site, now fully remote. Delivered web and mobile apps with React, React Native, Next.js, InertiaJS and Laravel.",
  },
  {
    number: "02",
    role: "Full-Stack Developer · Part-Time",
    company: "MyPromax",
    date: "2023 — 2024",
    description:
      "Worked remotely for 1.5 years building several client applications with React, Vue.js, InertiaJS and Laravel.",
  },
  {
    number: "03",
    role: "UI/UX Designer · Part-Time",
    company: "NextWys",
    date: "2024 — Present",
    description:
      "Designing modern, user-friendly interfaces in Figma and Adobe XD, turning product ideas into clean, usable experiences.",
  },
];

const RADIUS = "rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px]";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className={`relative z-10 bg-[#0C0C0C] ${RADIUS} -mt-10 sm:-mt-12 md:-mt-14 px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-10`}
    >
      <FadeIn
        as="h2"
        className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-28"
        style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
      >
        Experience
      </FadeIn>

      <div className="max-w-5xl mx-auto">
        {EXPERIENCES.map((item, i) => (
          <FadeIn
            key={item.number}
            delay={i * 0.1}
            className="flex flex-col sm:flex-row items-start gap-4 sm:gap-10 md:gap-14 py-8 sm:py-10 md:py-12"
            style={{
              borderTop:
                i === 0 ? "1px solid rgba(215, 226, 234, 0.15)" : "none",
              borderBottom: "1px solid rgba(215, 226, 234, 0.15)",
            }}
          >
            <span
              className="text-[#D7E2EA] font-black leading-none flex-shrink-0"
              style={{ fontSize: "clamp(3rem, 10vw, 140px)" }}
            >
              {item.number}
            </span>
            <div className="flex flex-col gap-2 sm:gap-3 pt-1 sm:pt-2 w-full">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3
                  className="text-[#D7E2EA] font-medium uppercase leading-tight"
                  style={{ fontSize: "clamp(1rem, 2.2vw, 2.1rem)" }}
                >
                  {item.company}
                </h3>
                <span className="text-[#D7E2EA]/50 uppercase tracking-widest text-xs sm:text-sm font-light">
                  {item.date}
                </span>
              </div>
              <p
                className="text-[#D7E2EA]/70 uppercase tracking-wider font-light"
                style={{ fontSize: "clamp(0.8rem, 1.4vw, 1.05rem)" }}
              >
                {item.role}
              </p>
              <p
                className="text-[#D7E2EA] font-light leading-relaxed max-w-2xl"
                style={{
                  fontSize: "clamp(0.85rem, 1.6vw, 1.25rem)",
                  opacity: 0.6,
                }}
              >
                {item.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
