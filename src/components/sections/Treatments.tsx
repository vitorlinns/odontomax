"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, useAnimation, useReducedMotion } from "framer-motion";
import {
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiAnchorLine,
  RiSunLine,
  RiShieldCrossLine,
  RiToolsLine,
  RiScissorsLine,
} from "@remixicon/react";
import Image from "next/image";
import { CalendarCheck, Check } from "lucide-react";
import Button from "@/components/shared/Button";
import { colors } from "@/lib/colors";

const INTERVAL = 7000;

const treatments = [
  {
    icon: RiAnchorLine,
    title: "Implante Dentário",
    image: "/assets/images/treatments/implante.png",
    description:
      "Recupere função e estética com implantes de titânio de última geração. A solução definitiva para dentes perdidos com aparência completamente natural.",
    benefits: [
      "Implantes de titânio certificados",
      "Resultado com aparência natural",
      "Durabilidade de décadas",
    ],
  },
  {
    icon: RiSunLine,
    title: "Clareamento Dental",
    image: "/assets/images/treatments/clareamento.png",
    description:
      "Realce a brancura do seu sorriso com clareamento profissional seguro e eficaz. Produtos homologados para resultados de até 8 tons mais brancos.",
    benefits: [
      "Clareamento a laser de alta potência",
      "Clareamento caseiro supervisionado",
      "Resultado em uma única sessão",
    ],
  },
  {
    icon: RiShieldCrossLine,
    title: "Tratamento de Canal",
    image: "/assets/images/treatments/canal.png",
    description:
      "Elimine a dor com endodontia moderna e minimamente invasiva. Preservamos o dente natural com técnicas avançadas e total conforto para o paciente.",
    benefits: [
      "Técnica anestésica avançada",
      "Equipamentos digitais de precisão",
      "Preservação do dente natural",
    ],
  },
  {
    icon: RiToolsLine,
    title: "Prótese Dentária",
    image: "/assets/images/treatments/protese.png",
    description:
      "Recupere o sorriso e a qualidade de vida com próteses de alta estética. Coroas, pontes e próteses totais adaptadas ao seu perfil.",
    benefits: [
      "Coroas em cerâmica e zircônio",
      "Próteses fixas e removíveis",
      "Estética natural personalizada",
    ],
  },
  {
    icon: RiScissorsLine,
    title: "Cirurgia Oral",
    image: "/assets/images/treatments/cirurgia.png",
    description:
      "Procedimentos cirúrgicos com máxima segurança e precisão. Extrações simples a cirurgias complexas com protocolos internacionais.",
    benefits: [
      "Extração de sisos e dentes inclusos",
      "Biópsias e cirurgias orais",
      "Recuperação rápida e segura",
    ],
  },
];

export default function Treatments() {
  const [current, setCurrent] = useState(0);
  const isPaused = useRef(false);
  const progressControls = useAnimation();
  const prefersReducedMotion = useReducedMotion();

  const startProgress = useCallback(() => {
    if (prefersReducedMotion) return;
    progressControls.set({ width: "0%" });
    progressControls.start({
      width: "100%",
      transition: { duration: INTERVAL / 1000, ease: "linear" },
    });
  }, [progressControls, prefersReducedMotion]);

  const go = useCallback(
    (index: number) => {
      setCurrent(index);
      startProgress();
    },
    [startProgress]
  );

  const next = useCallback(
    () => go((current + 1) % treatments.length),
    [current, go]
  );

  const prev = useCallback(
    () => go((current - 1 + treatments.length) % treatments.length),
    [current, go]
  );

  useEffect(() => {
    startProgress();
  }, [startProgress]);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const timer = setInterval(() => {
      if (!isPaused.current) {
        setCurrent((c) => {
          const next = (c + 1) % treatments.length;
          startProgress();
          return next;
        });
      }
    }, INTERVAL);
    return () => clearInterval(timer);
  }, [startProgress, prefersReducedMotion]);

  const { icon: Icon, title, image, description, benefits } = treatments[current];

  return (
    <section
      id="tratamentos"
      className="py-24"
      style={{ backgroundColor: colors.surface }}
      onMouseEnter={() => {
        isPaused.current = true;
        progressControls.stop();
      }}
      onMouseLeave={() => {
        isPaused.current = false;
        progressControls.start({
          width: "100%",
          transition: { duration: INTERVAL / 1000, ease: "linear" },
        });
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Heading */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-3 mb-14"
        >
          <h2
            className="text-4xl lg:text-5xl leading-tight"
            style={{ fontWeight: 500, color: colors.ink }}
          >
            Tratamentos que{" "}
            <span style={{ color: colors.brand }}>transformam sorrisos</span>
          </h2>
          <p className="text-base max-w-xl" style={{ color: colors.muted }}>
            Cada paciente é único. Por isso oferecemos soluções odontológicas
            personalizadas com tecnologia de ponta e atendimento humanizado.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: Visual + controls */}
          <div className="flex flex-col gap-5">

            {/* Visual card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={prefersReducedMotion ? {} : { opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="relative aspect-[640/540] rounded-3xl overflow-hidden"
                style={{
                  background: `linear-gradient(145deg, ${colors.brandDeep} 0%, ${colors.brand} 100%)`,
                }}
              >
                {/* Real image */}
                <Image
                  src={image}
                  alt={title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority={current === 0}
                />

              </motion.div>
            </AnimatePresence>

            {/* Progress + arrows */}
            <div className="flex items-center gap-4">
              {/* Progress bar */}
              <div
                className="flex-1 h-[3px] rounded-full overflow-hidden"
                style={{ backgroundColor: colors.border }}
              >
                <motion.div
                  animate={progressControls}
                  className="h-full rounded-full"
                  style={{ backgroundColor: colors.brand, width: "0%" }}
                />
              </div>

              {/* Arrows */}
              <div className="flex items-center gap-2 flex-shrink-0">
                <button
                  onClick={prev}
                  aria-label="Tratamento anterior"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                  style={{
                    border: `1.5px solid ${colors.border}`,
                    color: colors.ink3,
                    backgroundColor: colors.white,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = colors.brandMid;
                    e.currentTarget.style.color = colors.brand;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = colors.border;
                    e.currentTarget.style.color = colors.ink3;
                  }}
                >
                  <RiArrowLeftSLine size={18} />
                </button>
                <button
                  onClick={next}
                  aria-label="Próximo tratamento"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                  style={{
                    border: `1.5px solid ${colors.border}`,
                    color: colors.ink3,
                    backgroundColor: colors.white,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = colors.brandMid;
                    e.currentTarget.style.color = colors.brand;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = colors.border;
                    e.currentTarget.style.color = colors.ink3;
                  }}
                >
                  <RiArrowRightSLine size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={prefersReducedMotion ? {} : { opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-7"
            >
              <h2
                className="text-4xl lg:text-5xl font-regular leading-tight"
                style={{ color: colors.ink }}
              >
                {title}
              </h2>

              <p
                className="text-lg leading-relaxed"
                style={{ color: colors.muted }}
              >
                {description}
              </p>

              <ul className="flex flex-col gap-3">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: colors.brandLight }}
                    >
                      <Check size={11} style={{ color: colors.brand }} />
                    </div>
                    <span
                      className="text-sm font-medium"
                      style={{ color: colors.ink3 }}
                    >
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>

              <div>
                <Button size="md">
                  <CalendarCheck size={17} />
                  Agendar consulta
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
}
