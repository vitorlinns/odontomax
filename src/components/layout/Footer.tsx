"use client";

import Image from "next/image";
import Link from "next/link";
import { RiMailLine, RiWhatsappLine } from "@remixicon/react";
import { colors } from "@/lib/colors";

const nav = [
  { label: "Início",      href: "/"            },
  { label: "Tratamentos", href: "#tratamentos" },
  { label: "Clientes",    href: "#depoimentos" },
  { label: "Sobre nós",   href: "#sobre"       },
  { label: "FAQ",         href: "#faq"         },
];

const legal = [
  { label: "Política de Privacidade", href: "/politica-de-privacidade" },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: colors.surface, borderTop: `1px solid ${colors.border}` }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Logo */}
          <div className="flex flex-col gap-4">
            <Link href="/" aria-label="Odontomax">
              <Image
                src="/assets/images/brand/logo.png"
                alt="Odontomax"
                width={160}
                height={32}
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-sm leading-relaxed" style={{ color: colors.mutedLight }}>
              Cuidando de sorrisos com tecnologia e atendimento humanizado há mais de 15 anos.
            </p>
          </div>

          {/* Contato */}
          <div className="flex flex-col gap-4">
            <p className="text-sm font-semibold" style={{ color: colors.ink }}>
              Contato
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:atendimento@odontomax.com.br"
                className="flex items-center gap-3 text-sm transition-colors duration-200 group"
                style={{ color: colors.muted }}
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: colors.brandLight }}
                >
                  <RiMailLine size={15} style={{ color: colors.brand }} />
                </div>
                contato@odontomax.com.br
              </a>
              <a
                href="https://wa.me/5531987654321"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm transition-colors duration-200"
                style={{ color: colors.muted }}
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: colors.brandLight }}
                >
                  <RiWhatsappLine size={15} style={{ color: colors.brand }} />
                </div>
                (31) 98765-4321
              </a>
            </div>
          </div>

          {/* Navegação */}
          <div className="flex flex-col gap-4">
            <p className="text-sm font-semibold" style={{ color: colors.ink }}>
              Navegação
            </p>
            <nav className="flex flex-col gap-2.5">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm transition-colors duration-200"
                  style={{ color: colors.muted }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = colors.brand)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = colors.muted)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-4">
            <p className="text-sm font-semibold" style={{ color: colors.ink }}>
              Legal
            </p>
            <nav className="flex flex-col gap-2.5">
              {legal.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm transition-colors duration-200"
                  style={{ color: colors.muted }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = colors.brand)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = colors.muted)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

        </div>

      </div>

      {/* Full-width divider */}
      <div style={{ borderTop: `1px solid ${colors.border}` }} />

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5">
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs"
          style={{ color: colors.mutedLighter }}
        >
          <span>© {new Date().getFullYear()} Odontomax. Todos os direitos reservados.</span>
          <span>CNPJ: 12.345.678/0001-90</span>
        </div>
      </div>
    </footer>
  );
}
