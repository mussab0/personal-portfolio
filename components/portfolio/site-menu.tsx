"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const MENU = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const SOCIALS = [
  { label: "Instagram", href: "https://www.instagram.com/mussabhanif" },
  { label: "GitHub", href: "https://github.com/mussabhanif" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mussabhanif" },
];

function Dots() {
  return (
    <span className="grid grid-cols-2 gap-[5px] p-1">
      {[0, 1, 2, 3].map((i) => (
        <span
          key={i}
          className="block w-[7px] h-[7px] rounded-full bg-[#D7E2EA]"
        />
      ))}
    </span>
  );
}

function TopRow({
  onToggle,
  isClose,
  onContact,
}: {
  onToggle: () => void;
  isClose?: boolean;
  onContact?: () => void;
}) {
  return (
    <div className="flex items-center justify-between px-6 md:px-10 pt-6 md:pt-8">
      <span className="text-[#D7E2EA] font-medium uppercase tracking-wider text-xs sm:text-sm md:text-base">
        Local/ 31&deg;31&apos;12&quot; N
      </span>

      <button
        onClick={onToggle}
        aria-label={isClose ? "Close menu" : "Open menu"}
        className="text-[#D7E2EA] hover:opacity-70 transition-opacity"
      >
        {isClose ? <X className="w-6 h-6 md:w-7 md:h-7" /> : <Dots />}
      </button>

      <a
        href="#contact"
        onClick={onContact}
        className="rounded-full border border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-5 py-2.5 md:px-7 md:py-3 text-xs sm:text-sm hover:bg-[#D7E2EA]/10 transition-colors"
      >
        Contact Now
      </a>
    </div>
  );
}

export default function SiteMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      {/* Hero top bar (closed state) — just the 4-dots, centered */}
      <div className="relative z-40 flex justify-center px-6 md:px-10 pt-6 md:pt-8">
        <button
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="text-[#D7E2EA] hover:opacity-70 transition-opacity"
        >
          <Dots />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 bg-[#0C0C0C] flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <TopRow
              onToggle={() => setOpen(false)}
              isClose
              onContact={() => setOpen(false)}
            />

            <nav className="flex-1 min-h-0 flex flex-col items-center justify-center">
              {MENU.map((item, i) => (
                <div key={item.label} className="overflow-hidden">
                  <motion.a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    initial={{ y: "110%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: "110%", opacity: 0 }}
                    transition={{
                      delay: 0.15 + i * 0.07,
                      duration: 0.6,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                    className="block text-center text-[#8A9099] hover:text-white font-black uppercase leading-[1.02] tracking-tight transition-colors duration-200"
                    style={{ fontSize: "clamp(1.5rem, min(11vw, 9vh), 6rem)" }}
                  >
                    {item.label}
                  </motion.a>
                </div>
              ))}
            </nav>

            <div className="flex items-center justify-between px-6 md:px-10 pb-6 md:pb-8 text-[#D7E2EA]">
              <span className="font-medium uppercase tracking-wider text-xs sm:text-sm">
                &copy;2026 All Rights Reserved
              </span>
              <div className="flex items-center gap-4 sm:gap-6">
                {SOCIALS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold uppercase tracking-wider text-xs sm:text-sm hover:opacity-70 transition-opacity inline-flex items-center gap-1"
                  >
                    {s.label} <span className="text-[0.8em]">&#8599;</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
