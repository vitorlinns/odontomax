"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CalendarCheck, Phone } from "lucide-react";
import Button from "@/components/shared/Button";
import { fadeUp, staggerContainer } from "@/lib/animations";

export default function CTA() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      className="relative py-28 overflow-hidden"
      style={{ backgroundColor: "var(--color-ink)" }}
    >
      {/* Decorative blobs */}
      <div
        className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ backgroundColor: "var(--color-brand)" }}
        aria-hidden
      />
      <div
        className="absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ backgroundColor: "var(--color-brand)" }}
        aria-hidden
      />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-12 text-left lg:text-center">
        <motion.div
          variants={staggerContainer}
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-start lg:items-center gap-6"
        >
          <motion.h2
            variants={prefersReducedMotion ? {} : fadeUp}
            className="text-4xl lg:text-5xl leading-tight"
            style={{ fontWeight: 500, color: "var(--color-white)" }}
          >
            Seu sorriso perfeito{" "}
            <span style={{ color: "var(--color-brand)" }}>começa aqui</span>
          </motion.h2>

          <motion.p
            variants={prefersReducedMotion ? {} : fadeUp}
            className="text-lg max-w-lg"
            style={{ color: "var(--color-muted-lighter)" }}
          >
            Agende sua consulta hoje e dê o primeiro passo para transformar sua saúde bucal com quem entende do assunto.
          </motion.p>

          <motion.div
            variants={prefersReducedMotion ? {} : fadeUp}
            className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-center gap-3 pt-2"
          >
            <Button size="lg" href="/agendar" className="w-full sm:w-auto">
              <CalendarCheck size={19} />
              Agendar consulta
            </Button>
            <Button size="lg" variant="outline-light" className="w-full sm:w-auto">
              <Phone size={17} />
              Falar pelo WhatsApp
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
