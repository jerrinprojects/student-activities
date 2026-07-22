// Oday icon library — simple line drawings, 2px stroke, black on white.
// Not baby cartoons. Use `<OdayIcon name="cat" size={60} />`.

import React from 'react';

type IconProps = { size?: number; strokeWidth?: number };

const S = ({ size = 60, children }: { size?: number; children: React.ReactNode }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {children}
  </svg>
);

// ── ALPHABET A–H (Week 1) ──────────────────────────────────────────
export const AppleIcon = ({ size }: IconProps) => (
  <S size={size}>
    <path d="M50 30 C 35 30, 25 45, 30 65 C 33 80, 45 85, 50 82 C 55 85, 67 80, 70 65 C 75 45, 65 30, 50 30 Z" />
    <path d="M52 30 C 55 22, 60 20, 65 22" />
    <path d="M55 25 C 55 20, 58 15, 62 15" />
  </S>
);

export const BallIcon = ({ size }: IconProps) => (
  <S size={size}>
    <circle cx="50" cy="55" r="28" />
    <path d="M22 55 L 78 55" />
    <path d="M32 35 C 42 55, 42 60, 32 78" />
    <path d="M68 35 C 58 55, 58 60, 68 78" />
  </S>
);

export const CatIcon = ({ size }: IconProps) => (
  <S size={size}>
    <path d="M25 45 L 32 25 L 42 40" />
    <path d="M75 45 L 68 25 L 58 40" />
    <ellipse cx="50" cy="58" rx="28" ry="24" />
    <circle cx="42" cy="55" r="2" fill="currentColor" />
    <circle cx="58" cy="55" r="2" fill="currentColor" />
    <path d="M50 62 L 48 66 L 52 66 Z" fill="currentColor" />
    <path d="M40 70 Q 35 72, 30 70" />
    <path d="M60 70 Q 65 72, 70 70" />
    <path d="M42 68 Q 45 72, 50 68" />
    <path d="M58 68 Q 55 72, 50 68" />
  </S>
);

export const DogIcon = ({ size }: IconProps) => (
  <S size={size}>
    <ellipse cx="50" cy="60" rx="28" ry="22" />
    <path d="M28 45 Q 22 40, 24 55" />
    <path d="M72 45 Q 78 40, 76 55" />
    <circle cx="42" cy="58" r="2.5" fill="currentColor" />
    <circle cx="58" cy="58" r="2.5" fill="currentColor" />
    <ellipse cx="50" cy="68" rx="4" ry="3" fill="currentColor" />
    <path d="M50 72 Q 46 78, 44 76" />
    <path d="M50 72 Q 54 78, 56 76" />
  </S>
);

export const EggIcon = ({ size }: IconProps) => (
  <S size={size}>
    <path d="M50 15 C 30 20, 22 50, 30 75 C 38 92, 62 92, 70 75 C 78 50, 70 20, 50 15 Z" />
  </S>
);

export const FishIcon = ({ size }: IconProps) => (
  <S size={size}>
    <path d="M22 50 C 30 30, 60 30, 72 50 C 60 70, 30 70, 22 50 Z" />
    <path d="M72 50 L 88 35 L 88 65 Z" />
    <circle cx="34" cy="47" r="2" fill="currentColor" />
    <path d="M55 42 Q 60 50, 55 58" />
  </S>
);

export const GoatIcon = ({ size }: IconProps) => (
  <S size={size}>
    <ellipse cx="50" cy="60" rx="24" ry="16" />
    <ellipse cx="70" cy="45" rx="10" ry="12" />
    <path d="M64 35 Q 60 26, 65 24" />
    <path d="M76 35 Q 80 26, 75 24" />
    <circle cx="74" cy="43" r="1.5" fill="currentColor" />
    <path d="M78 50 Q 80 52, 76 53" />
    <path d="M32 74 L 32 82" />
    <path d="M42 74 L 42 82" />
    <path d="M58 74 L 58 82" />
    <path d="M68 74 L 68 82" />
    <path d="M28 62 Q 22 62, 20 68" />
  </S>
);

export const HatIcon = ({ size }: IconProps) => (
  <S size={size}>
    <path d="M32 65 L 30 55 Q 30 30, 50 28 Q 70 30, 70 55 L 68 65" />
    <path d="M20 65 L 80 65 L 80 72 L 20 72 Z" />
    <path d="M35 55 L 65 55" />
  </S>
);

// ── PICTURE-WORD / CVC additions (Week 1) ────────────────────────
export const SunIcon = ({ size }: IconProps) => (
  <S size={size}>
    <circle cx="50" cy="50" r="16" />
    <path d="M50 20 L 50 28" />
    <path d="M50 72 L 50 80" />
    <path d="M20 50 L 28 50" />
    <path d="M72 50 L 80 50" />
    <path d="M28 28 L 34 34" />
    <path d="M72 72 L 66 66" />
    <path d="M28 72 L 34 66" />
    <path d="M72 28 L 66 34" />
  </S>
);

export const BedIcon = ({ size }: IconProps) => (
  <S size={size}>
    <path d="M15 55 L 15 78" />
    <path d="M85 45 L 85 78" />
    <path d="M15 65 L 85 65" />
    <path d="M15 78 L 85 78" />
    <path d="M15 55 L 45 55 L 45 65" />
    <path d="M30 55 Q 30 48, 38 48 L 42 48 Q 45 48, 45 55" />
  </S>
);

export const BagIcon = ({ size }: IconProps) => (
  <S size={size}>
    <path d="M25 40 L 75 40 L 78 82 L 22 82 Z" />
    <path d="M35 40 Q 35 22, 50 22 Q 65 22, 65 40" />
  </S>
);

export const PenIcon = ({ size }: IconProps) => (
  <S size={size}>
    <path d="M22 78 L 68 32" />
    <path d="M28 84 L 74 38" />
    <path d="M22 78 L 28 84" />
    <path d="M68 32 L 74 38" />
    <path d="M68 32 L 78 22 L 82 26 L 74 38" />
    <path d="M22 78 L 15 85" />
  </S>
);

export const CupIcon = ({ size }: IconProps) => (
  <S size={size}>
    <path d="M25 32 L 30 78 Q 32 82, 50 82 Q 68 82, 70 78 L 75 32 Z" />
    <path d="M75 42 Q 88 45, 88 58 Q 88 70, 75 68" />
  </S>
);

export const BatIcon = ({ size }: IconProps) => (
  <S size={size}>
    <path d="M50 20 L 45 55 L 55 55 Z" />
    <path d="M35 30 L 65 30" />
    <path d="M45 55 L 40 80" />
    <path d="M55 55 L 60 80" />
    <path d="M40 80 L 60 80" />
    <path d="M50 20 Q 30 25, 25 35" />
    <path d="M50 20 Q 70 25, 75 35" />
  </S>
);

export const MatIcon = ({ size }: IconProps) => (
  <S size={size}>
    <path d="M15 45 L 85 45 L 82 75 L 18 75 Z" />
    <path d="M22 52 L 78 52" />
    <path d="M22 60 L 78 60" />
    <path d="M22 68 L 78 68" />
  </S>
);

export const RatIcon = ({ size }: IconProps) => (
  <S size={size}>
    <ellipse cx="45" cy="60" rx="28" ry="16" />
    <circle cx="72" cy="55" r="10" />
    <circle cx="70" cy="45" r="4" />
    <circle cx="76" cy="53" r="1.5" fill="currentColor" />
    <path d="M80 58 L 84 60" />
    <path d="M17 62 Q 8 68, 5 78" />
  </S>
);

// Numbers 1–3 for tracing
export const OneIcon = ({ size }: IconProps) => (
  <S size={size}>
    <path d="M40 30 L 50 22 L 50 78" />
    <path d="M35 78 L 65 78" />
  </S>
);

export const TwoIcon = ({ size }: IconProps) => (
  <S size={size}>
    <path d="M30 34 Q 34 22, 50 22 Q 66 22, 66 36 Q 66 48, 46 60 Q 32 70, 30 78 L 70 78" />
  </S>
);

export const ThreeIcon = ({ size }: IconProps) => (
  <S size={size}>
    <path d="M30 30 Q 40 20, 55 22 Q 68 24, 68 36 Q 68 46, 55 50 Q 68 52, 68 66 Q 68 78, 55 80 Q 40 82, 30 72" />
  </S>
);

// Simple person / boy for "O for Oday" and self-portrait tracing
export const BoyIcon = ({ size }: IconProps) => (
  <S size={size}>
    <circle cx="50" cy="30" r="12" />
    <path d="M50 42 L 50 68" />
    <path d="M50 50 L 32 60" />
    <path d="M50 50 L 68 60" />
    <path d="M50 68 L 38 88" />
    <path d="M50 68 L 62 88" />
    <path d="M40 22 L 60 22" />
  </S>
);

// ── LOOKUP ────────────────────────────────────────────────────────

const ICONS: Record<string, React.FC<IconProps>> = {
  apple: AppleIcon,
  ball: BallIcon,
  cat: CatIcon,
  dog: DogIcon,
  egg: EggIcon,
  fish: FishIcon,
  goat: GoatIcon,
  hat: HatIcon,
  sun: SunIcon,
  bed: BedIcon,
  bag: BagIcon,
  pen: PenIcon,
  cup: CupIcon,
  bat: BatIcon,
  mat: MatIcon,
  rat: RatIcon,
  one: OneIcon,
  two: TwoIcon,
  three: ThreeIcon,
  boy: BoyIcon,
};

export function OdayIcon({ name, size = 60 }: { name: string; size?: number }) {
  const Comp = ICONS[name];
  if (!Comp) {
    return (
      <div
        style={{
          width: size,
          height: size,
          border: '1.5px dashed #9ca3af',
          borderRadius: 8,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#9ca3af',
          fontSize: 10,
        }}
      >
        {name}
      </div>
    );
  }
  return <Comp size={size} />;
}

export const ICON_NAMES = Object.keys(ICONS);
