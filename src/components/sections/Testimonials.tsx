"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { RiStarFill } from "@remixicon/react";
import { fadeUp, staggerContainer } from "@/lib/animations";

const testimonials = [
  {
    name: "Ana Clara S.",
    treatment: "Clareamento Dental",
    text: "Fui com muito medo, mas o atendimento foi incrível do começo ao fim. Saí com um sorriso muito mais bonito e confiante. Super recomendo a Odontomax!",
    initials: "AC",
    photo: "ana-clara.png",
  },
  {
    name: "Marcos R.",
    treatment: "Implante Dentário",
    text: "Procedimento rápido e sem dor. O resultado ficou perfeito, completamente natural. A equipe é muito atenciosa e profissional em todos os detalhes.",
    initials: "MR",
    photo: "marcos.png",
  },
  {
    name: "Juliana M.",
    treatment: "Ortodontia",
    text: "Após um ano de tratamento, meu sorriso mudou completamente. Me arrependo de ter esperado tanto tempo para começar. Vale cada centavo!",
    initials: "JM",
    photo: "juliana.png",
  },
  {
    name: "Roberto A.",
    treatment: "Tratamento de Canal",
    text: "Tinha muito medo, mas foi muito mais tranquilo do que imaginava. Ótima anestesia, a doutora explicou tudo com calma e cuidado.",
    initials: "RA",
    photo: "roberto.png",
  },
  {
    name: "Fernanda L.",
    treatment: "Prótese Dentária",
    text: "A prótese ficou exatamente como eu queria, muito natural. Ninguém percebe que é prótese. Qualidade e estética excelentes!",
    initials: "FL",
    photo: "fernanda.png",
  },
  {
    name: "Carlos E.",
    treatment: "Clareamento Dental",
    text: "Resultado acima do esperado em uma única sessão. Ambiente moderno, atendimento de primeira e equipe muito simpática. Nota 10!",
    initials: "CE",
    photo: "carlos.png",
  },
];

export default function Testimonials() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="depoimentos" className="py-24" style={{ backgroundColor: "var(--color-white)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Heading */}
        <motion.div
          variants={staggerContainer}
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col gap-3 mb-14"
        >
          <motion.h2
            variants={prefersReducedMotion ? {} : fadeUp}
            className="text-4xl lg:text-5xl font-medium leading-tight"
            style={{ color: "var(--color-ink)" }}
          >
            O que nossos{" "}
            <span style={{ color: "var(--color-brand)" }}>pacientes dizem</span>
          </motion.h2>
          <motion.p
            variants={prefersReducedMotion ? {} : fadeUp}
            className="text-base max-w-xl"
            style={{ color: "var(--color-muted)" }}
          >
            A satisfação de quem confia no nosso trabalho é o nosso maior resultado.
          </motion.p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={staggerContainer}
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {testimonials.map(({ name, treatment, text, initials, photo }) => (
            <motion.div
              key={name}
              variants={prefersReducedMotion ? {} : fadeUp}
              className="flex flex-col gap-5 p-7 rounded-2xl"
              style={{
                backgroundColor: "var(--color-surface)",
                border: `1px solid var(--color-border)`,
              }}
            >
             

              {/* Quote text */}
              <p
                className="text-sm leading-relaxed flex-1 -mt-1"
                style={{ color: "var(--color-ink-3)" }}
              >
                {text}
              </p>

              <div className="flex items-center justify-between gap-3">
                {/* Avatar + name */}
                <div className="flex items-center gap-3">
                  {photo ? (
                    <Image
                      src={`/assets/images/testimonials/${photo}`}
                      alt={name}
                      width={40}
                      height={40}
                      className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                    />
                  ) : (
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                      style={{ backgroundColor: "var(--color-brand)", color: "var(--color-ink)" }}
                    >
                      {initials}
                    </div>
                  )}
                  <div>
                    <p className="text-sm font-semibold leading-tight" style={{ color: "var(--color-ink)" }}>
                      {name}
                    </p>
                    <p className="text-xs leading-tight mt-0.5" style={{ color: "var(--color-muted-light)" }}>
                      {treatment}
                    </p>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex gap-0.5 flex-shrink-0">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <RiStarFill key={i} size={13} style={{ color: "var(--color-brand)" }} />
                  ))}
                </div>
              </div>
             
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
