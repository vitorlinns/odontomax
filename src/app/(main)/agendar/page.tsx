"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiArrowLeftSLine, RiArrowRightSLine, RiCheckLine } from "@remixicon/react";
import { CalendarCheck, ChevronDown, Check } from "lucide-react";
import Button from "@/components/shared/Button";

const TREATMENTS = [
  { id: "avaliacao",   label: "Avaliação geral / Primeiro atendimento" },
  { id: "implante",    label: "Implante Dentário"                      },
  { id: "clareamento", label: "Clareamento Dental"                     },
  { id: "canal",       label: "Tratamento de Canal"                    },
  { id: "protese",     label: "Prótese Dentária"                       },
  { id: "cirurgia",    label: "Cirurgia Oral"                          },
];

const TIME_SLOTS = [
  "08:00", "09:00", "10:00", "11:00",
  "14:00", "15:00", "16:00", "17:00",
];
const TAKEN = new Set(["09:00", "14:00", "16:00"]);

const MONTHS = [
  "Janeiro","Fevereiro","Março","Abril","Maio","Junho",
  "Julho","Agosto","Setembro","Outubro","Novembro","Dezembro",
];
const WEEKDAYS = ["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"];

const today = new Date();
today.setHours(0, 0, 0, 0);

export default function AgendarPage() {
  const [viewYear,       setViewYear]       = useState(today.getFullYear());
  const [viewMonth,      setViewMonth]      = useState(today.getMonth());
  const [selectedDate,   setSelectedDate]   = useState<Date | null>(null);
  const [selectedTime,   setSelectedTime]   = useState<string | null>(null);
  const [treatment,      setTreatment]      = useState("avaliacao");
  const [treatmentOpen,  setTreatmentOpen]  = useState(false);
  const [form,           setForm]           = useState({ name: "", phone: "", email: "", notes: "" });
  const [submitted,      setSubmitted]      = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setTreatmentOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  const calendarCells = useMemo(() => {
    const firstDay    = new Date(viewYear, viewMonth, 1).getDay();
    const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
    const cells: (number | null)[] = [];
    for (let i = 0; i < firstDay; i++) cells.push(null);
    for (let d = 1; d <= daysInMonth; d++) cells.push(d);
    return cells;
  }, [viewYear, viewMonth]);

  function prevMonth() {
    if (viewMonth === 0) { setViewMonth(11); setViewYear(y => y - 1); }
    else setViewMonth(m => m - 1);
  }
  function nextMonth() {
    if (viewMonth === 11) { setViewMonth(0); setViewYear(y => y + 1); }
    else setViewMonth(m => m + 1);
  }

  function isDisabled(day: number) {
    const d = new Date(viewYear, viewMonth, day);
    return d < today || d.getDay() === 0;
  }

  function isSelected(day: number) {
    if (!selectedDate) return false;
    return selectedDate.getDate() === day &&
      selectedDate.getMonth() === viewMonth &&
      selectedDate.getFullYear() === viewYear;
  }

  function selectDay(day: number) {
    if (isDisabled(day)) return;
    setSelectedDate(new Date(viewYear, viewMonth, day));
    setSelectedTime(null);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <section style={{ backgroundColor: "var(--color-surface)" }} className="flex-1 flex items-center justify-center px-6 py-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col items-center gap-5 text-center max-w-md"
        >
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center"
            style={{ backgroundColor: "var(--color-brand-light)" }}
          >
            <RiCheckLine size={32} style={{ color: "var(--color-brand)" }} />
          </div>
          <h1 className="text-2xl font-semibold" style={{ color: "var(--color-ink)" }}>
            Solicitação enviada!
          </h1>
          <p className="text-base" style={{ color: "var(--color-muted)" }}>
            Recebemos seu pedido de agendamento. Nossa equipe entrará em
            contato em até 24 horas para confirmar o horário.
          </p>
          <Button size="md" onClick={() => setSubmitted(false)}>
            Fazer novo agendamento
          </Button>
        </motion.div>
      </section>
    );
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px 14px",
    borderRadius: "12px",
    border: `1px solid var(--color-border)`,
    fontSize: "14px",
    color: "var(--color-ink)",
    backgroundColor: "var(--color-white)",
    outline: "none",
    fontFamily: "var(--font-figtree)",
  };

  const selectedTreatmentLabel = TREATMENTS.find(t => t.id === treatment)?.label;

  return (
    <section style={{ backgroundColor: "var(--color-surface)" }} className="flex-1">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">

        {/* Heading */}
        <div className="mb-12">
          <h1
            className="text-4xl lg:text-5xl leading-tight mb-3"
            style={{ fontWeight: 500, color: "var(--color-ink)" }}
          >
            Agende sua{" "}
            <span style={{ color: "var(--color-brand)" }}>consulta</span>
          </h1>
          <p className="text-base" style={{ color: "var(--color-muted)" }}>
            Escolha o tratamento, selecione um horário e preencha seus dados. É rápido e sem compromisso.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_420px] gap-10">

          {/* Left: calendar + time */}
          <div className="flex flex-col gap-8">

            {/* Calendar */}
            <div
              className="rounded-2xl p-6"
              style={{ backgroundColor: "var(--color-white)", border: `1px solid var(--color-border)` }}
            >
              {/* Month navigation */}
              <div className="flex items-center justify-between mb-6">
                <button
                  onClick={prevMonth}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-150 cursor-pointer"
                  style={{ border: `1px solid var(--color-border)`, color: "var(--color-ink-3)" }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = "var(--color-brand-mid)"}
                  onMouseLeave={e => e.currentTarget.style.borderColor = "var(--color-border)"}
                >
                  <RiArrowLeftSLine size={18} />
                </button>
                <span className="text-sm font-semibold" style={{ color: "var(--color-ink)" }}>
                  {MONTHS[viewMonth]} {viewYear}
                </span>
                <button
                  onClick={nextMonth}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-150 cursor-pointer"
                  style={{ border: `1px solid var(--color-border)`, color: "var(--color-ink-3)" }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = "var(--color-brand-mid)"}
                  onMouseLeave={e => e.currentTarget.style.borderColor = "var(--color-border)"}
                >
                  <RiArrowRightSLine size={18} />
                </button>
              </div>

              {/* Weekday headers */}
              <div className="grid grid-cols-7 mb-2">
                {WEEKDAYS.map(d => (
                  <div
                    key={d}
                    className="text-center text-xs font-medium py-1"
                    style={{ color: d === "Dom" ? "var(--color-muted-lighter)" : "var(--color-muted-light)" }}
                  >
                    {d}
                  </div>
                ))}
              </div>

              {/* Days grid */}
              <div className="grid grid-cols-7 gap-1">
                {calendarCells.map((day, i) => {
                  if (!day) return <div key={`e-${i}`} />;
                  const disabled = isDisabled(day);
                  const selected = isSelected(day);
                  const isToday  = new Date(viewYear, viewMonth, day).getTime() === today.getTime();
                  return (
                    <button
                      key={day}
                      onClick={() => selectDay(day)}
                      disabled={disabled}
                      className="h-10 w-full rounded-xl text-sm font-medium transition-all duration-150"
                      style={{
                        cursor: disabled ? "not-allowed" : "pointer",
                        backgroundColor: selected ? "var(--color-brand)" : "transparent",
                        color: selected
                          ? "var(--color-ink)"
                          : disabled
                            ? "var(--color-muted-lighter)"
                            : isToday
                              ? "var(--color-brand)"
                              : "var(--color-ink)",
                        fontWeight: isToday ? 700 : 500,
                        outline: isToday && !selected ? `2px solid var(--color-brand-soft)` : "none",
                      }}
                      onMouseEnter={e => {
                        if (!disabled && !selected)
                          e.currentTarget.style.backgroundColor = "var(--color-surface-2)";
                      }}
                      onMouseLeave={e => {
                        if (!disabled && !selected)
                          e.currentTarget.style.backgroundColor = "transparent";
                      }}
                    >
                      {day}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Time slots */}
            {selectedDate && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl p-6"
                style={{ backgroundColor: "var(--color-white)", border: `1px solid var(--color-border)` }}
              >
                <p className="text-sm font-semibold mb-4" style={{ color: "var(--color-ink)" }}>
                  Horários disponíveis:{" "}
                  <span style={{ color: "var(--color-muted)" }}>
                    {selectedDate.toLocaleDateString("pt-BR", { weekday: "long", day: "numeric", month: "long" })}
                  </span>
                </p>
                <div className="grid grid-cols-4 gap-2">
                  {TIME_SLOTS.map(slot => {
                    const taken    = TAKEN.has(slot);
                    const selected = selectedTime === slot;
                    return (
                      <button
                        key={slot}
                        disabled={taken}
                        onClick={() => setSelectedTime(slot)}
                        className="py-2.5 rounded-xl text-sm font-medium transition-all duration-150"
                        style={{
                          cursor: taken ? "not-allowed" : "pointer",
                          backgroundColor: selected
                            ? "var(--color-brand)"
                            : taken
                              ? "var(--color-surface)"
                              : "var(--color-surface-2)",
                          color: selected
                            ? "var(--color-ink)"
                            : taken
                              ? "var(--color-muted-lighter)"
                              : "var(--color-ink-3)",
                          border: selected ? "none" : `1px solid var(--color-border)`,
                          textDecoration: taken ? "line-through" : "none",
                        }}
                      >
                        {slot}
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </div>

          {/* Right: treatment + form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">

            {/* Treatment select */}
            <div
              className="rounded-2xl p-6 flex flex-col gap-4"
              style={{ backgroundColor: "var(--color-white)", border: `1px solid var(--color-border)` }}
            >
              <p className="text-sm font-semibold" style={{ color: "var(--color-ink)" }}>
                Tratamento desejado
              </p>

              {/* Custom dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setTreatmentOpen(v => !v)}
                  className="w-full flex items-center justify-between gap-3 text-sm transition-all duration-150"
                  style={{
                    padding: "12px 14px",
                    borderRadius: "12px",
                    border: `1px solid ${treatmentOpen ? "var(--color-brand-mid)" : "var(--color-border)"}`,
                    backgroundColor: "var(--color-white)",
                    color: "var(--color-ink)",
                    cursor: "pointer",
                    fontFamily: "var(--font-figtree)",
                    fontWeight: 400,
                    textAlign: "left",
                  }}
                >
                  <span>{selectedTreatmentLabel}</span>
                  <ChevronDown
                    size={16}
                    style={{
                      color: "var(--color-muted-light)",
                      flexShrink: 0,
                      transform: treatmentOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.2s",
                    }}
                  />
                </button>

                <AnimatePresence>
                  {treatmentOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -6, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -6, scale: 0.98 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-0 right-0 z-20 overflow-hidden"
                      style={{
                        top: "calc(100% + 6px)",
                        borderRadius: "12px",
                        border: `1px solid var(--color-border)`,
                        backgroundColor: "var(--color-white)",
                        boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                      }}
                    >
                      {TREATMENTS.map(t => (
                        <button
                          key={t.id}
                          type="button"
                          onClick={() => { setTreatment(t.id); setTreatmentOpen(false); }}
                          className="w-full flex items-center justify-between gap-3 px-4 py-3 text-sm text-left transition-colors duration-100"
                          style={{
                            backgroundColor: t.id === treatment ? "var(--color-brand-light)" : "transparent",
                            color: t.id === treatment ? "var(--color-brand)" : "var(--color-ink)",
                            fontWeight: t.id === treatment ? 600 : 400,
                            fontFamily: "var(--font-figtree)",
                            cursor: "pointer",
                          }}
                          onMouseEnter={e => {
                            if (t.id !== treatment) e.currentTarget.style.backgroundColor = "var(--color-surface-2)";
                          }}
                          onMouseLeave={e => {
                            if (t.id !== treatment) e.currentTarget.style.backgroundColor = "transparent";
                          }}
                        >
                          <span>{t.label}</span>
                          {t.id === treatment && (
                            <Check size={14} style={{ color: "var(--color-brand)", flexShrink: 0 }} />
                          )}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Free consultation notice */}
              <div
                className="flex items-start gap-3 p-4 rounded-xl"
                style={{ backgroundColor: "var(--color-brand-light)" }}
              >
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ backgroundColor: "var(--color-brand)" }}
                >
                  <RiCheckLine size={13} style={{ color: "var(--color-ink)" }} />
                </div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: "var(--color-ink)" }}>
                    Consulta de avaliação gratuita
                  </p>
                  <p className="text-xs mt-0.5 leading-relaxed" style={{ color: "var(--color-ink-3)" }}>
                    O orçamento do tratamento é apresentado durante a consulta, sem compromisso.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div
              className="rounded-2xl p-6 flex flex-col gap-4"
              style={{ backgroundColor: "var(--color-white)", border: `1px solid var(--color-border)` }}
            >
              <p className="text-sm font-semibold" style={{ color: "var(--color-ink)" }}>
                Seus dados
              </p>

              <input
                required
                type="text"
                placeholder="Nome completo"
                value={form.name}
                onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                style={inputStyle}
                onFocus={e => (e.target.style.borderColor = "var(--color-brand-mid)")}
                onBlur={e  => (e.target.style.borderColor = "var(--color-border)")}
              />
              <input
                required
                type="tel"
                placeholder="WhatsApp / Telefone"
                value={form.phone}
                onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                style={inputStyle}
                onFocus={e => (e.target.style.borderColor = "var(--color-brand-mid)")}
                onBlur={e  => (e.target.style.borderColor = "var(--color-border)")}
              />
              <input
                required
                type="email"
                placeholder="E-mail"
                value={form.email}
                onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                style={inputStyle}
                onFocus={e => (e.target.style.borderColor = "var(--color-brand-mid)")}
                onBlur={e  => (e.target.style.borderColor = "var(--color-border)")}
              />
              <textarea
                rows={3}
                placeholder="Observações (opcional)"
                value={form.notes}
                onChange={e => setForm(f => ({ ...f, notes: e.target.value }))}
                style={{ ...inputStyle, resize: "none" }}
                onFocus={e => (e.target.style.borderColor = "var(--color-brand-mid)")}
                onBlur={e  => (e.target.style.borderColor = "var(--color-border)")}
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full"
              disabled={!selectedDate || !selectedTime}
            >
              <CalendarCheck size={18} />
              Confirmar agendamento
            </Button>

            {(!selectedDate || !selectedTime) && (
              <p className="text-xs text-center" style={{ color: "var(--color-muted-light)" }}>
                Selecione uma data e horário para continuar
              </p>
            )}
          </form>

        </div>
      </div>
    </section>
  );
}
