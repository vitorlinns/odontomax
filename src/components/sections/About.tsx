"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { RiAwardLine, RiHeartLine, RiShieldCheckLine } from "@remixicon/react";
import { CalendarCheck } from "lucide-react";
import Button from "@/components/shared/Button";
import { colors } from "@/lib/colors";
import { fadeUp, staggerContainer } from "@/lib/animations";

const IMAGES = [
  "/assets/images/site/img-1.png",
  "/assets/images/site/img-2.png",
  "/assets/images/site/img-3.png",
];
const SLIDE_INTERVAL = 4000;

const values = [
  {
    icon: RiAwardLine,
    title: "Excelência técnica",
    description: "Equipamentos de última geração e protocolos internacionais em cada procedimento.",
  },
  {
    icon: RiHeartLine,
    title: "Atendimento humanizado",
    description: "Cada paciente é único. Ouvimos, acolhemos e personalizamos cada tratamento.",
  },
  {
    icon: RiShieldCheckLine,
    title: "Resultados garantidos",
    description: "Mais de 15 anos entregando sorrisos saudáveis e transformando vidas.",
  },
];

export default function About() {
  const prefersReducedMotion = useReducedMotion();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const timer = setInterval(
      () => setCurrent((c) => (c + 1) % IMAGES.length),
      SLIDE_INTERVAL
    );
    return () => clearInterval(timer);
  }, [prefersReducedMotion]);

  return (
    <section id="sobre" className="py-24" style={{ backgroundColor: colors.surface }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: content */}
          <motion.div
            variants={staggerContainer}
            initial={prefersReducedMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            <div className="flex flex-col gap-4">
              <motion.h2
                variants={prefersReducedMotion ? {} : fadeUp}
                className="text-4xl lg:text-5xl font-medium leading-tight"
                style={{ color: colors.ink }}
              >
                Cuidando de sorrisos{" "}
                <span style={{ color: colors.brand }}>há mais de 15 anos</span>
              </motion.h2>
              <motion.p
                variants={prefersReducedMotion ? {} : fadeUp}
                className="text-base leading-relaxed"
                style={{ color: colors.muted }}
              >
                Reunimos tecnologia de ponta e atendimento humanizado em um ambiente
                pensado para o seu conforto. Cada paciente é único e merece o melhor
                cuidado odontológico.
              </motion.p>
            </div>

            {/* Values */}
            <motion.div
              variants={prefersReducedMotion ? {} : fadeUp}
              className="flex flex-col gap-5"
            >
              {values.map(({ icon: Icon, title, description }) => (
                <div key={title} className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: colors.brand }}
                  >
                    <Icon size={18} style={{ color: colors.ink }} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold mb-0.5" style={{ color: colors.ink }}>
                      {title}
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: colors.muted }}>
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div variants={prefersReducedMotion ? {} : fadeUp}>
              <Button size="md" href="/agendar" className="w-full sm:w-auto">
                <CalendarCheck size={17} />
                Agendar consulta
              </Button>
            </motion.div>
          </motion.div>

          {/* Right: auto slideshow */}
          <div className="relative aspect-[972/1028] rounded-3xl overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={prefersReducedMotion ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={prefersReducedMotion ? {} : { opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={IMAGES[current]}
                  alt={`Odontomax ${current + 1}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority={current === 0}
                />
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
