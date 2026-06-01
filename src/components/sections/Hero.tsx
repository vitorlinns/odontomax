"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CalendarCheck, ChevronRight, Smile, Sparkles, Star } from "lucide-react";
import { colors } from "@/lib/colors";
import { fadeUp, staggerContainer, scaleIn } from "@/lib/animations";

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: colors.surface }}
    >
      {/* Decorative right panel */}
      <div
        className="absolute right-0 top-0 w-[52%] h-full rounded-bl-[100px] pointer-events-none"
        style={{ backgroundColor: colors.surface2 }}
        aria-hidden
      />

      {/* Subtle dot grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle, ${colors.brandMid} 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
        aria-hidden
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-24 w-full">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-12 xl:gap-20 items-center">

          {/* Left: Content */}
          <motion.div
            variants={staggerContainer}
            initial={prefersReducedMotion ? false : "hidden"}
            animate="visible"
            className="flex flex-col gap-7 max-w-xl"
          >
            <motion.h1
              variants={prefersReducedMotion ? {} : fadeUp}
              className="text-5xl lg:text-6xl xl:text-[68px] font-bold leading-[1.08] tracking-tight"
              style={{ fontFamily: "var(--font-figtree)", color: colors.ink }}
            >
              Seu sorriso{" "}
              <span
                className="relative inline-block"
                style={{ color: colors.brand }}
              >
                em boas
              </span>{" "}
              mãos
            </motion.h1>

            <motion.p
              variants={prefersReducedMotion ? {} : fadeUp}
              className="text-lg leading-relaxed"
              style={{ color: colors.muted }}
            >
              Unimos tecnologia de ponta e atendimento humanizado para cuidar
              do seu sorriso com excelência. Tratamentos completos para toda a
              família com conforto e segurança.
            </motion.p>

            <motion.div
              variants={prefersReducedMotion ? {} : fadeUp}
              className="flex flex-wrap gap-3 pt-1"
            >
              <button
                className="flex items-center gap-2.5 px-7 py-4 rounded-2xl font-semibold text-base transition-opacity duration-200 hover:opacity-90 active:opacity-80"
                style={{ backgroundColor: colors.brand, color: colors.white }}
              >
                <CalendarCheck size={19} />
                Agendar consulta
              </button>
              <button
                className="flex items-center gap-2 px-7 py-4 rounded-2xl font-semibold text-base transition-colors duration-200"
                style={{
                  backgroundColor: "transparent",
                  color: colors.brand,
                  border: `1.5px solid ${colors.brandSoft}`,
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor = colors.brandMid)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor = colors.brandSoft)
                }
              >
                Nossos tratamentos
                <ChevronRight size={17} />
              </button>
            </motion.div>

            {/* Trust stats */}
            <motion.div
              variants={prefersReducedMotion ? {} : fadeUp}
              className="flex items-center gap-6 flex-wrap pt-3"
              style={{ borderTop: `1px solid ${colors.border}` }}
            >
              {[
                { number: "+15", label: "anos de experiência" },
                { number: "+8 mil", label: "pacientes atendidos" },
                { number: "98%", label: "de satisfação" },
              ].map((stat, i) => (
                <div key={stat.label} className="flex items-center gap-6">
                  {i > 0 && (
                    <div
                      className="h-9 w-px"
                      style={{ backgroundColor: colors.border }}
                    />
                  )}
                  <div className="flex flex-col gap-0.5">
                    <span
                      className="text-[22px] font-bold leading-tight"
                      style={{
                        fontFamily: "var(--font-figtree)",
                        color: colors.ink,
                      }}
                    >
                      {stat.number}
                    </span>
                    <span
                      className="text-xs leading-tight"
                      style={{ color: colors.mutedLight }}
                    >
                      {stat.label}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Visual composition */}
          <motion.div
            variants={prefersReducedMotion ? {} : scaleIn}
            initial={prefersReducedMotion ? false : "hidden"}
            animate="visible"
            className="relative flex items-center justify-center h-[480px] lg:h-[520px]"
          >
            {/* Outer soft glow */}
            <div
              className="absolute w-[460px] h-[460px] rounded-full blur-3xl opacity-40 pointer-events-none"
              style={{ backgroundColor: colors.brandSoft }}
              aria-hidden
            />

            {/* Outer dashed ring */}
            <motion.div
              animate={prefersReducedMotion ? {} : { rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute w-[420px] h-[420px] rounded-full border border-dashed pointer-events-none"
              style={{ borderColor: colors.brandMid }}
              aria-hidden
            />

            {/* Main gradient circle */}
            <div
              className="relative w-[320px] h-[320px] rounded-full flex items-center justify-center shadow-2xl"
              style={{
                background: `linear-gradient(145deg, ${colors.brand} 0%, ${colors.brandDeep} 100%)`,
              }}
            >
              {/* Inner ring */}
              <div
                className="absolute inset-4 rounded-full border pointer-events-none"
                style={{ borderColor: colors.white20 }}
                aria-hidden
              />
              {/* Center icon */}
              <Smile
                size={96}
                strokeWidth={0.75}
                style={{ color: colors.white30 }}
                aria-hidden
              />
            </div>

            {/* Floating card: Rating */}
            <motion.div
              animate={prefersReducedMotion ? {} : { y: [-8, 6, -8] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-8 left-4 flex items-center gap-3 px-4 py-3 rounded-2xl"
              style={{
                backgroundColor: colors.white,
                boxShadow: `0 8px 32px rgba(37, 99, 235, 0.12)`,
              }}
            >
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: colors.surface2 }}
              >
                <Star
                  size={15}
                  style={{ color: colors.brand }}
                  fill={colors.brand}
                />
              </div>
              <div>
                <p
                  className="text-sm font-semibold leading-tight"
                  style={{ color: colors.ink }}
                >
                  Avaliação 5.0
                </p>
                <p
                  className="text-xs leading-tight mt-0.5"
                  style={{ color: colors.mutedLight }}
                >
                  Google Reviews
                </p>
              </div>
            </motion.div>

            {/* Floating card: Specialties */}
            <motion.div
              animate={prefersReducedMotion ? {} : { y: [6, -8, 6] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5,
              }}
              className="absolute bottom-12 right-2 flex items-center gap-3 px-4 py-3 rounded-2xl"
              style={{
                backgroundColor: colors.white,
                boxShadow: `0 8px 32px rgba(37, 99, 235, 0.12)`,
              }}
            >
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: colors.surface2 }}
              >
                <Sparkles size={15} style={{ color: colors.brand }} />
              </div>
              <div>
                <p
                  className="text-sm font-semibold leading-tight"
                  style={{ color: colors.ink }}
                >
                  +30 especialidades
                </p>
                <p
                  className="text-xs leading-tight mt-0.5"
                  style={{ color: colors.mutedLight }}
                >
                  Tratamentos disponíveis
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
