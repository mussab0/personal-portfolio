import HeroSection from "@/components/portfolio/hero-section";
import MarqueeSection from "@/components/portfolio/marquee-section";
import AboutSection from "@/components/portfolio/about-section";
import ServicesSection from "@/components/portfolio/services-section";
import ExperienceSection from "@/components/portfolio/experience-section";
import ProjectsSection from "@/components/portfolio/projects-section";
import ContactSection from "@/components/portfolio/contact-section";

export default function Home() {
  return (
    <main className="bg-[#0C0C0C]" style={{ overflowX: "clip" }}>
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
