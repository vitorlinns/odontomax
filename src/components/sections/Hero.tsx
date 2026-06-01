"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { CalendarCheck, ChevronRight } from "lucide-react";
import { RiAwardLine, RiGroupLine, RiEmotionHappyLine } from "@remixicon/react";
import { colors } from "@/lib/colors";
import { fadeUp, staggerContainer, scaleIn } from "@/lib/animations";
import Button from "@/components/shared/Button";

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden"
      style={{
        backgroundColor: colors.white,
        backgroundImage: "url('/assets/images/site/hero-background.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-24 w-full">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-12 xl:gap-20 items-center">

          {/* Left: Content */}
          <motion.div
            variants={staggerContainer}
            initial={prefersReducedMotion ? false : "hidden"}
            animate="visible"
            className="flex flex-col gap-8 max-w-xl"
          >
            <motion.h1
              variants={prefersReducedMotion ? {} : fadeUp}
              className="text-5xl lg:text-6xl xl:text-[68px] font-medium leading-[1.08] tracking-tight"
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
              className="flex flex-col sm:flex-row gap-3 pt-3"
            >
              <Button size="lg" href="/agendar" className="w-full sm:w-auto">
                <CalendarCheck size={19} />
                Agendar consulta
              </Button>
              <Button size="lg" variant="outline-dark" className="w-full sm:w-auto">
                Nossos tratamentos
                <ChevronRight size={17} />
              </Button>
            </motion.div>

            {/* Trust stats */}
            <motion.div
              variants={prefersReducedMotion ? {} : fadeUp}
              className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5 pt-8"
            >
              {[
                { icon: RiAwardLine,        number: "+15",    label: "anos de experiência" },
                { icon: RiGroupLine,        number: "+8 mil", label: "pacientes atendidos" },
                { icon: RiEmotionHappyLine, number: "98%",    label: "de satisfação"       },
              ].map(({ icon: Icon, number, label }, i) => (
                <div key={label} className="flex items-center gap-5">
                  {i > 0 && (
                    <div className="hidden sm:block h-10 w-px flex-shrink-0" style={{ backgroundColor: colors.border }} />
                  )}
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        backgroundColor: colors.brand,
                        border: `1px solid ${colors.brandMid}`,
                      }}
                    >
                      <Icon size={18} style={{ color: colors.ink }} />
                    </div>
                    <div className="flex flex-col gap-0">
                      <span
                        className="text-lg font-bold leading-tight"
                        style={{ color: colors.ink }}
                      >
                        {number}
                      </span>
                      <span className="text-xs leading-tight" style={{ color: colors.mutedLight }}>
                        {label}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Hero image */}
          <motion.div
            variants={prefersReducedMotion ? {} : scaleIn}
            initial={prefersReducedMotion ? false : "hidden"}
            animate="visible"
            className="relative flex items-center justify-center"
          >
            <Image
              src="/assets/images/site/hero-image.webp"
              alt="Paciente sorrindo na Odontomax"
              width={760}
              height={760}
              priority
              className="w-full max-w-[700px] h-auto"
            />

          </motion.div>
        </div>
      </div>
    </section>
  );
}
