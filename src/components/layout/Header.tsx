"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { RiMenuLine, RiCloseLine } from "@remixicon/react";
import { CalendarCheck } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Button from "@/components/shared/Button";
import { colors } from "@/lib/colors";

const nav = [
  { label: "Início",      href: "/"             },
  { label: "Tratamentos", href: "#tratamentos"  },
  { label: "Clientes",    href: "#depoimentos"  },
  { label: "Sobre nós",   href: "#sobre"        },
];

export default function Header() {
  const [scrolled,   setScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: colors.white,
        borderBottom: `1px solid ${scrolled ? colors.border : "transparent"}`,
        boxShadow: scrolled ? "0 4px 24px rgba(37,99,235,0.06)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-22 flex items-center justify-between gap-8">

        {/* Logo */}
        <Link href="/" aria-label="Odontomax" className="flex-shrink-0">
          <Image
            src="/assets/images/brand/logo.png"
            alt="Odontomax"
            width={180}
            height={36}
            priority
            className="h-11 w-auto"
          />
        </Link>

        {/* Desktop nav + CTA */}
        <div className="hidden lg:flex items-center gap-7">
          <nav className="flex items-center gap-7" aria-label="Navegação principal">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium transition-colors duration-200"
                style={{ color: colors.ink3 }}
                onMouseEnter={(e) => (e.currentTarget.style.color = colors.brand)}
                onMouseLeave={(e) => (e.currentTarget.style.color = colors.ink3)}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Button size="sm" href="/agendar">
            <CalendarCheck size={16} />
            Agendar consulta
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 rounded-xl transition-colors"
          style={{ color: colors.ink }}
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <RiCloseLine size={22} /> : <RiMenuLine size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="lg:hidden px-6 pb-6 pt-3 flex flex-col gap-1"
            style={{
              borderTop: `1px solid ${colors.border}`,
              backgroundColor: colors.white,
            }}
          >
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="py-3 text-base font-medium"
                style={{ color: colors.ink3 }}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button size="sm" className="mt-3 w-full" href="/agendar">
              <CalendarCheck size={16} />
              Agendar consulta
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
