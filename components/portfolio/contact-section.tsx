"use client";

import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { Github, Linkedin, MessageCircle, Download } from "lucide-react";
import toast from "react-hot-toast";
import { sendEmail } from "@/actions/sendEmail";
import FadeIn from "./fade-in";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex items-center justify-center rounded-full text-white font-medium uppercase tracking-widest px-10 py-4 text-sm sm:text-base transition-transform duration-200 hover:scale-[1.03] disabled:opacity-60 disabled:hover:scale-100"
      style={{
        background:
          "linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)",
        boxShadow:
          "0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset",
        outline: "2px solid #ffffff",
        outlineOffset: "-3px",
      }}
    >
      {pending ? "Sending..." : "Send Message"}
    </button>
  );
}

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/mussabhanif", Icon: Github },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mussabhanif",
    Icon: Linkedin,
  },
  { label: "WhatsApp", href: "https://wa.me/923008675191", Icon: MessageCircle },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative z-20 bg-[#0C0C0C] px-5 sm:px-8 md:px-10 pt-10 sm:pt-12 md:pt-16 pb-24 sm:pb-28 md:pb-32"
    >
      <FadeIn
        as="h2"
        className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-6"
        style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
      >
        Contact
      </FadeIn>

      <FadeIn
        as="p"
        delay={0.1}
        className="text-[#D7E2EA] font-light uppercase tracking-wide text-center max-w-xl mx-auto mb-12 sm:mb-16"
        style={{ fontSize: "clamp(0.85rem, 1.6vw, 1.2rem)" }}
      >
        Have a project in mind? Send me a message or reach out directly at{" "}
        <a
          href="mailto:m.mussabhanif@gmail.com"
          className="underline hover:opacity-70 transition-opacity"
        >
          m.mussabhanif@gmail.com
        </a>
      </FadeIn>

      <FadeIn delay={0.15} className="max-w-xl mx-auto">
       <form
        className="flex flex-col gap-4"
        action={async (formData: FormData) => {
          const { error } = await sendEmail(formData);
          if (error) {
            toast.error(error);
            return;
          }
          toast.success("Message sent successfully!");
        }}
      >
        <input
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
          className="h-14 px-5 rounded-2xl bg-white/5 border border-[#D7E2EA]/20 text-[#D7E2EA] placeholder:text-[#D7E2EA]/40 outline-none focus:border-[#D7E2EA]/50 transition-colors"
        />
        <textarea
          name="message"
          required
          maxLength={5000}
          placeholder="Your message"
          className="h-44 p-5 rounded-2xl bg-white/5 border border-[#D7E2EA]/20 text-[#D7E2EA] placeholder:text-[#D7E2EA]/40 outline-none focus:border-[#D7E2EA]/50 transition-colors resize-none"
        />
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
          <SubmitButton />
          <a
            href="/CV.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3.5 text-sm sm:text-base transition-colors duration-200 hover:bg-[#D7E2EA]/10"
          >
            <Download size={18} /> Download CV
          </a>
        </div>
       </form>
      </FadeIn>

      <FadeIn
        delay={0.2}
        className="flex items-center justify-center gap-5 mt-12"
      >
        {SOCIALS.map(({ label, href, Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="w-12 h-12 rounded-full border border-[#D7E2EA]/30 flex items-center justify-center text-[#D7E2EA] hover:bg-[#D7E2EA]/10 hover:border-[#D7E2EA]/60 transition-colors"
          >
            <Icon size={20} />
          </a>
        ))}
      </FadeIn>
    </section>
  );
}
