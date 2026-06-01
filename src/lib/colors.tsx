export const colors = {
  brand: "#2563EB",
  brandHover: "#1D4ED8",
  brandLight: "#EFF6FF",
  brandMid: "#93C5FD",
  brandSoft: "#DBEAFE",
  brandDeep: "#1E40AF",
  brandAccent: "#BFDBFE",

  ink: "#0F172A",
  ink2: "#1E293B",
  ink3: "#334155",
  ink4: "#64748B",

  muted: "#475569",
  mutedLight: "#94A3B8",
  mutedLighter: "#CBD5E1",

  white: "#FFFFFF",
  surface: "#F8FBFF",
  surface2: "#EFF6FF",
  dark: "#0F172A",

  border: "#E2ECF5",
  borderHover: "#BFDBFE",

  white10: "rgba(255,255,255,0.10)",
  white20: "rgba(255,255,255,0.20)",
  white30: "rgba(255,255,255,0.30)",
  white40: "rgba(255,255,255,0.40)",
  white50: "rgba(255,255,255,0.50)",
  white60: "rgba(255,255,255,0.60)",
  white70: "rgba(255,255,255,0.70)",
  white80: "rgba(255,255,255,0.80)",

  danger: "#EF4444",
  dangerLight: "#FEF2F2",
  success: "#16A34A",
  successLight: "#F0FDF4",
} as const;

export type ColorKey = keyof typeof colors;
