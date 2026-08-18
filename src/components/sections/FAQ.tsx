"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { RiAddLine, RiSubtractLine } from "@remixicon/react";
import { fadeUp, staggerContainer } from "@/lib/animations";

const faqs = [
  {
    question: "Os tratamentos doem?",
    answer:
      "A grande maioria dos procedimentos é realizada com anestesia local, garantindo total conforto durante o atendimento. Nossa equipe utiliza técnicas minimamente invasivas e está treinada para tornar cada visita a experiência mais tranquila possível.",
  },
  {
    question: "Vocês aceitam planos odontológicos?",
    answer:
      "Sim, trabalhamos com os principais planos odontológicos do mercado. Entre em contato com nossa equipe para confirmar a cobertura do seu plano antes de agendar.",
  },
  {
    question: "Como faço para agendar uma consulta?",
    answer:
      "Você pode agendar pelo botão de agendamento no site, por telefone ou diretamente pelo WhatsApp. Nossa equipe retorna em até 24 horas para confirmar o horário.",
  },
  {
    question: "A partir de que idade posso levar meu filho?",
    answer:
      "Recomendamos a primeira consulta quando os primeiros dentinhos aparecerem, por volta dos 6 meses. Nosso time de odontopediatria é especializado em atender crianças de todas as idades com carinho e cuidado.",
  },
  {
    question: "Qual a diferença entre clareamento caseiro e a laser?",
    answer:
      "O clareamento a laser é feito em consultório em uma única sessão, com resultado imediato de até 8 tons. O caseiro é aplicado em casa com moldeiras personalizadas ao longo de 2 a 3 semanas. Ambos são seguros e eficazes; o dentista indica o mais adequado para o seu caso.",
  },
  {
    question: "Os implantes são permanentes?",
    answer:
      "Sim. Implantes de titânio bem colocados e com higiene adequada têm durabilidade que pode ultrapassar décadas. Com acompanhamento regular e cuidado diário, o implante funciona como um dente natural.",
  },
  {
    question: "Vocês oferecem parcelamento?",
    answer:
      "Sim, oferecemos parcelamento em até 12x no cartão de crédito sem juros em tratamentos selecionados. Consulte as condições na recepção ou pelo nosso atendimento online.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="faq" className="py-24" style={{ backgroundColor: "var(--color-surface)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-16 lg:gap-24">

          {/* Left: heading */}
          <motion.div
            variants={staggerContainer}
            initial={prefersReducedMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-3 lg:sticky lg:top-28 self-start"
          >
            <motion.h2
              variants={prefersReducedMotion ? {} : fadeUp}
              className="text-4xl lg:text-5xl leading-tight"
              style={{ fontWeight: 500, color: "var(--color-ink)" }}
            >
              Perguntas{" "}
              <span style={{ color: "var(--color-brand)" }}>frequentes</span>
            </motion.h2>
            <motion.p
              variants={prefersReducedMotion ? {} : fadeUp}
              className="text-base"
              style={{ color: "var(--color-muted)" }}
            >
              Tire suas dúvidas antes de agendar. Se não encontrar o que procura, fale com a nossa equipe.
            </motion.p>
          </motion.div>

          {/* Right: accordion */}
          <motion.div
            variants={staggerContainer}
            initial={prefersReducedMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col"
          >
            {faqs.map(({ question, answer }, i) => (
              <motion.div
                key={question}
                variants={prefersReducedMotion ? {} : fadeUp}
                style={{ borderBottom: `1px solid var(--color-border)` }}
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 py-5 text-left cursor-pointer"
                  aria-expanded={open === i}
                >
                  <span
                    className="text-base font-medium"
                    style={{ color: open === i ? "var(--color-brand)" : "var(--color-ink)" }}
                  >
                    {question}
                  </span>
                  <span
                    className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200"
                    style={{
                      backgroundColor: open === i ? "var(--color-brand)" : "var(--color-surface-2)",
                      color: open === i ? "var(--color-ink)" : "var(--color-ink-3)",
                    }}
                  >
                    {open === i
                      ? <RiSubtractLine size={16} />
                      : <RiAddLine size={16} />
                    }
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      style={{ overflow: "hidden" }}
                    >
                      <p
                        className="text-sm leading-relaxed pb-5"
                        style={{ color: "var(--color-muted)" }}
                      >
                        {answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
