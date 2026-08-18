"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
  RiAwardLine,
  RiHeartLine,
  RiTeamLine,
  RiStarLine,
  RiShieldLine,
  RiCheckLine,
  RiCalendarLine,
  RiThumbUpLine,
} from "@remixicon/react";

const items = [
  { icon: RiAwardLine,    text: "Clínica Certificada"       },
  { icon: RiStarLine,     text: "+15 Anos de Experiência"   },
  { icon: RiHeartLine,    text: "Atendimento Humanizado"    },
  { icon: RiTeamLine,     text: "+8.000 Pacientes Atendidos"},
  { icon: RiShieldLine,   text: "Segurança Garantida"       },
  { icon: RiCheckLine,    text: "Resultados Comprovados"    },
  { icon: RiCalendarLine, text: "Agendamento Online"        },
  { icon: RiThumbUpLine,  text: "98% de Satisfação"         },
];

const row1 = [...items, ...items, ...items];

function Item({ icon: Icon, text }: { icon: typeof RiAwardLine; text: string }) {
  return (
    <div className="flex items-center gap-3 flex-shrink-0">
      <div
        className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{ backgroundColor: "var(--color-white)" }}
      >
        <Icon size={16} style={{ color: "var(--color-ink)" }} />
      </div>
      <span className="text-sm font-semibold whitespace-nowrap" style={{ color: "var(--color-ink)" }}>
        {text}
      </span>
      <span className="mx-2 opacity-30 text-lg select-none" style={{ color: "var(--color-ink)" }}></span>
    </div>
  );
}

export default function Benefits() {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const rawX1 = useTransform(scrollYProgress, [0, 1], [0, -320]);
  const x1 = useSpring(rawX1, { stiffness: 60, damping: 20 });

  return (
    <section
      ref={ref}
      id="beneficios"
      className="py-10 overflow-hidden relative"
      style={{ backgroundColor: "var(--color-brand)" }}
    >
      {/* Left fade */}
      <div
        className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
        style={{ background: `linear-gradient(to right, var(--color-brand), transparent)` }}
      />
      {/* Right fade */}
      <div
        className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
        style={{ background: `linear-gradient(to left, var(--color-brand), transparent)` }}
      />

      <motion.div style={{ x: x1 }} className="flex items-center gap-0">
        {row1.map((item, i) => (
          <Item key={i} icon={item.icon} text={item.text} />
        ))}
      </motion.div>
    </section>
  );
}
