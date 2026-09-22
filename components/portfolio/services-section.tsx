"use client";

import FadeIn from "./fade-in";

const SERVICES = [
  {
    number: "01",
    name: "SaaS Platforms & Web Apps",
    description:
      "Custom SaaS products and web applications built end-to-end with React, Next.js and Laravel — scalable, secure and tailored to your business model.",
  },
  {
    number: "02",
    name: "Admin & Management Dashboards",
    description:
      "Internal tools and admin panels that turn complex data into clear, actionable dashboards your team can actually run the business with.",
  },
  {
    number: "03",
    name: "Process Automation & Workflows",
    description:
      "Business process automation and workflow systems that remove repetitive manual work and keep your operations running on autopilot.",
  },
  {
    number: "04",
    name: "AI-Powered Pipelines",
    description:
      "AI-driven features and pipelines — content generation, smart assistants and integrations with OpenAI, Gemini and DeepSeek APIs.",
  },
  {
    number: "05",
    name: "Multi-Tenant Systems",
    description:
      "Multi-location and multi-tenant management platforms with role-based access, isolated data and centralized control.",
  },
  {
    number: "06",
    name: "API & Service Integrations",
    description:
      "Reliable integrations with third-party services — payments, ads platforms, CMS and any external API your product depends on.",
  },
  {
    number: "07",
    name: "Mobile Applications",
    description:
      "Cross-platform iOS and Android apps with React Native, sharing logic with your web stack for a fast, consistent experience.",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
      style={{ position: "relative", zIndex: 1 }}
    >
      <h2
        className="text-[#0C0C0C] font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
        style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
      >
        Services
      </h2>

      <div className="max-w-5xl mx-auto">
        {SERVICES.map((service, i) => (
          <FadeIn
            key={service.number}
            delay={i * 0.1}
            className="flex items-start gap-6 sm:gap-10 md:gap-14 py-8 sm:py-10 md:py-12"
            style={{
              borderTop:
                i === 0 ? "1px solid rgba(12, 12, 12, 0.15)" : "none",
              borderBottom: "1px solid rgba(12, 12, 12, 0.15)",
            }}
          >
            <span
              className="text-[#0C0C0C] font-black leading-none flex-shrink-0"
              style={{ fontSize: "clamp(3rem, 10vw, 140px)" }}
            >
              {service.number}
            </span>
            <div className="flex flex-col gap-3 sm:gap-4 pt-1 sm:pt-2">
              <h3
                className="text-[#0C0C0C] font-medium uppercase leading-tight"
                style={{ fontSize: "clamp(1rem, 2.2vw, 2.1rem)" }}
              >
                {service.name}
              </h3>
              <p
                className="text-[#0C0C0C] font-light leading-relaxed max-w-2xl"
                style={{
                  fontSize: "clamp(0.85rem, 1.6vw, 1.25rem)",
                  opacity: 0.6,
                }}
              >
                {service.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
