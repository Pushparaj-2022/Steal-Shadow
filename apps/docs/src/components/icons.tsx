"use client";

import React from "react";

type Ic = { className?: string; size?: number };

function Svg({
  className,
  size = 24,
  fill = "none",
  stroke = true,
  children,
}: Ic & { fill?: string; stroke?: boolean; children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={fill}
      stroke={stroke ? "currentColor" : "none"}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {children}
    </svg>
  );
}

export function IcArrow({ className, size }: Ic) {
  return (
    <Svg className={className} size={size}>
      <path d="M3 12h15" />
      <path d="M13 6.5l5.5 5.5-5.5 5.5" />
    </Svg>
  );
}

export function IcChevR({ className, size }: Ic) {
  return (
    <Svg className={className} size={size}>
      <path d="M9 18l6-6-6-6" />
    </Svg>
  );
}

export function IcChevD({ className, size }: Ic) {
  return (
    <Svg className={className} size={size}>
      <path d="M6 9l6 6 6-6" />
    </Svg>
  );
}

export function IcChevL({ className, size }: Ic) {
  return (
    <Svg className={className} size={size}>
      <path d="M15 18l-6-6 6-6" />
    </Svg>
  );
}

export function IcCheck({ className, size }: Ic) {
  return (
    <Svg className={className} size={size}>
      <path d="M20 6L9 17l-5-5" />
    </Svg>
  );
}

export function IcCheckDbl({ className, size }: Ic) {
  return (
    <Svg className={className} size={size}>
      <path d="M17 6L7 17l-4-4" />
      <path d="M23 6l-9 10" />
    </Svg>
  );
}

export function IcCopy({ className, size }: Ic) {
  return (
    <Svg className={className} size={size}>
      <rect x="9" y="9" width="13" height="13" rx="2.5" />
      <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
    </Svg>
  );
}

export function IcPlus({ className, size }: Ic) {
  return (
    <Svg className={className} size={size}>
      <path d="M12 5v14M5 12h14" />
    </Svg>
  );
}

export function IcMinus({ className, size }: Ic) {
  return (
    <Svg className={className} size={size}>
      <path d="M5 12h14" />
    </Svg>
  );
}

export function IcX({ className, size }: Ic) {
  return (
    <Svg className={className} size={size}>
      <path d="M18 6L6 18M6 6l12 12" />
    </Svg>
  );
}

export function IcSun({ className, size }: Ic) {
  return (
    <Svg className={className} size={size}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </Svg>
  );
}

export function IcMoon({ className, size }: Ic) {
  return (
    <Svg className={className} size={size}>
      <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
    </Svg>
  );
}

export function IcGithub({ className, size = 24 }: Ic) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className={className}>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

export function IcBranch({ className, size }: Ic) {
  return (
    <Svg className={className} size={size}>
      <path d="M6 3v12" />
      <circle cx="18" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <path d="M18 9a9 9 0 01-9 9" />
    </Svg>
  );
}

export function IcShield({ className, size }: Ic) {
  return (
    <Svg className={className} size={size}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </Svg>
  );
}

export function IcZap({ className, size }: Ic) {
  return (
    <Svg className={className} size={size}>
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </Svg>
  );
}

export function IcSparkle({ className, size = 24 }: Ic) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      stroke="none"
      className={className}
    >
      <path d="M11 2l1.4 5.6L18 9l-5.6 1.4L11 16l-1.4-5.6L4 9l5.6-1.4z" />
      <path d="M19 14.5l.7 2.3 2.3.7-2.3.7-.7 2.3-.7-2.3-2.3-.7 2.3-.7z" opacity="0.75" />
      <path d="M5 17.5l.5 1.6 1.6.5-1.6.5-.5 1.6-.5-1.6-1.6-.5 1.6-.5z" opacity="0.5" />
    </svg>
  );
}

export function IcStar({ className, size, filled = false }: Ic & { filled?: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size ?? 24}
      height={size ?? 24}
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" />
    </svg>
  );
}

export function IcSearch({ className, size }: Ic) {
  return (
    <Svg className={className} size={size}>
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.35-4.35" />
    </Svg>
  );
}

export function IcEdit({ className, size }: Ic) {
  return (
    <Svg className={className} size={size}>
      <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
      <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
    </Svg>
  );
}

export function IcTrash({ className, size }: Ic) {
  return (
    <Svg className={className} size={size}>
      <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6" />
      <path d="M8 6V4a1 1 0 011-1h6a1 1 0 011 1v2" />
      <path d="M10 11v6M14 11v6" />
    </Svg>
  );
}

export function IcClip({ className, size }: Ic) {
  return (
    <Svg className={className} size={size}>
      <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
      <path d="M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
    </Svg>
  );
}

export function IcBookmark({ className, size }: Ic) {
  return (
    <Svg className={className} size={size}>
      <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" />
    </Svg>
  );
}

export function IcMenu({ className, size }: Ic) {
  return (
    <Svg className={className} size={size}>
      <path d="M4 6h16M4 12h16M4 18h16" />
    </Svg>
  );
}

export function IcCode({ className, size }: Ic) {
  return (
    <Svg className={className} size={size}>
      <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
    </Svg>
  );
}

export function IcLayers({ className, size }: Ic) {
  return (
    <Svg className={className} size={size}>
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </Svg>
  );
}

export function IcShare({ className, size }: Ic) {
  return (
    <Svg className={className} size={size}>
      <path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8M16 6l-4-4-4 4M12 2v13" />
    </Svg>
  );
}

export function IcPlay({ className, size }: Ic) {
  return (
    <Svg className={className} size={size}>
      <path d="M5 3l14 9-14 9V3z" />
    </Svg>
  );
}
