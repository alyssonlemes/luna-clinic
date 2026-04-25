"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "Fundadoras", href: "#fundadoras" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#315888] to-[#0A2B53] flex items-center justify-center shadow-sm">
            <span className="text-white text-base leading-none" aria-hidden="true">🌙</span>
          </div>
          <div>
            <span className="font-display font-semibold text-luna-charcoal text-lg leading-none block">
              LUNA
            </span>
            <span className="text-luna-gray text-[10px] tracking-widest uppercase leading-none">
              Desenvolvimento Infantil
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-luna-dark-soft text-sm font-body font-medium hover:text-[#315888] transition-colors duration-200 relative group"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-[#315888] rounded-full transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="https://wa.me/5516994403306"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#315888] text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-[#0A2B53] transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
          >
            Agendar Avaliação
          </a>
        </nav>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden p-2 text-luna-charcoal"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-luna-lilac-soft px-6 py-4 flex flex-col gap-4 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-luna-dark-soft font-medium py-1 hover:text-[#315888] transition-colors"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/5516994403306"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#315888] text-white px-5 py-3 rounded-full text-sm font-medium text-center"
            onClick={() => setOpen(false)}
          >
            Agendar Avaliação
          </a>
        </div>
      )}
    </header>
  );
}
