// Oday icon library — recognisable line drawings.
// Not childish cartoons. Use `<OdayIcon name="cat" size={60} />`.

import React from 'react';

type IconProps = { size?: number };

const S = ({ size = 60, children }: { size?: number; children: React.ReactNode }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.4}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {children}
  </svg>
);

// ── APPLE ─────────────────────────────────────────────────────────
export const AppleIcon = ({ size }: IconProps) => (
  <S size={size}>
    {/* apple body with slight top indent */}
    <path d="M50 30 C 42 27, 32 30, 27 42 C 22 55, 26 78, 42 84 C 47 85, 50 82, 50 82 C 50 82, 53 85, 58 84 C 74 78, 78 55, 73 42 C 68 30, 58 27, 50 30 Z" />
    {/* small indent between the two halves at top */}
    <path d="M50 32 L 50 40" />
    {/* stem */}
    <path d="M50 30 L 53 20" />
    {/* leaf */}
    <path d="M53 22 C 62 17, 68 22, 66 30 C 60 32, 55 28, 53 22 Z" />
  </S>
);

// ── BALL (soccer ball style) ─────────────────────────────────────
export const BallIcon = ({ size }: IconProps) => (
  <S size={size}>
    <circle cx="50" cy="52" r="30" />
    {/* pentagon in centre */}
    <path d="M50 38 L 62 46 L 58 60 L 42 60 L 38 46 Z" />
    {/* spokes to edge */}
    <path d="M50 38 L 50 24" />
    <path d="M62 46 L 76 42" />
    <path d="M58 60 L 68 74" />
    <path d="M42 60 L 32 74" />
    <path d="M38 46 L 24 42" />
  </S>
);

// ── CAT ───────────────────────────────────────────────────────────
export const CatIcon = ({ size }: IconProps) => (
  <S size={size}>
    {/* left ear */}
    <path d="M28 45 L 32 22 L 46 40" />
    {/* right ear */}
    <path d="M72 45 L 68 22 L 54 40" />
    {/* inner ears */}
    <path d="M33 30 L 35 38" />
    <path d="M67 30 L 65 38" />
    {/* head */}
    <ellipse cx="50" cy="58" rx="24" ry="22" />
    {/* eyes */}
    <circle cx="41" cy="55" r="3" fill="currentColor" />
    <circle cx="59" cy="55" r="3" fill="currentColor" />
    {/* nose */}
    <path d="M47 64 L 53 64 L 50 68 Z" fill="currentColor" />
    {/* mouth */}
    <path d="M50 68 L 50 71" />
    <path d="M50 71 Q 45 74, 43 71" />
    <path d="M50 71 Q 55 74, 57 71" />
    {/* whiskers */}
    <path d="M28 62 L 40 63" />
    <path d="M28 66 L 40 66" />
    <path d="M72 62 L 60 63" />
    <path d="M72 66 L 60 66" />
  </S>
);

// ── DOG ───────────────────────────────────────────────────────────
export const DogIcon = ({ size }: IconProps) => (
  <S size={size}>
    {/* floppy ears (hanging down) */}
    <path d="M28 42 Q 20 45, 22 62 Q 25 70, 32 65" />
    <path d="M72 42 Q 80 45, 78 62 Q 75 70, 68 65" />
    {/* head */}
    <ellipse cx="50" cy="55" rx="22" ry="20" />
    {/* eyes */}
    <circle cx="42" cy="52" r="3" fill="currentColor" />
    <circle cx="58" cy="52" r="3" fill="currentColor" />
    {/* muzzle */}
    <ellipse cx="50" cy="65" rx="10" ry="8" />
    {/* nose */}
    <ellipse cx="50" cy="62" rx="4" ry="3" fill="currentColor" />
    {/* mouth line */}
    <path d="M50 66 L 50 70" />
    {/* tongue */}
    <path d="M47 71 Q 50 76, 53 71 Q 53 75, 47 75 Z" fill="currentColor" />
  </S>
);

// ── EGG ───────────────────────────────────────────────────────────
export const EggIcon = ({ size }: IconProps) => (
  <S size={size}>
    <path d="M50 14 C 32 18, 26 42, 28 62 C 30 82, 40 88, 50 88 C 60 88, 70 82, 72 62 C 74 42, 68 18, 50 14 Z" />
  </S>
);

// ── FISH ──────────────────────────────────────────────────────────
export const FishIcon = ({ size }: IconProps) => (
  <S size={size}>
    {/* body */}
    <path d="M20 50 C 28 30, 55 30, 72 50 C 55 70, 28 70, 20 50 Z" />
    {/* tail */}
    <path d="M72 50 L 90 34 L 90 66 Z" />
    {/* eye */}
    <circle cx="34" cy="46" r="3.5" />
    <circle cx="34" cy="46" r="1.5" fill="currentColor" />
    {/* gill */}
    <path d="M46 42 Q 49 50, 46 58" />
    {/* top fin */}
    <path d="M50 32 Q 55 22, 62 32" />
    {/* bottom fin */}
    <path d="M50 68 Q 55 78, 62 68" />
  </S>
);

// ── GOAT ──────────────────────────────────────────────────────────
export const GoatIcon = ({ size }: IconProps) => (
  <S size={size}>
    {/* body */}
    <path d="M20 55 L 20 68 Q 20 74, 26 74 L 60 74 Q 66 74, 66 68 L 66 55 Q 66 46, 55 44 L 30 44 Q 20 46, 20 55 Z" />
    {/* head */}
    <path d="M66 60 L 82 58 L 88 50 L 84 42 L 74 42 L 66 48 Z" />
    {/* horn */}
    <path d="M78 42 Q 80 34, 76 30" />
    {/* eye */}
    <circle cx="80" cy="50" r="1.6" fill="currentColor" />
    {/* beard */}
    <path d="M84 56 L 82 62" />
    {/* ear */}
    <path d="M74 42 L 71 36" />
    {/* legs */}
    <path d="M28 74 L 28 84" />
    <path d="M38 74 L 38 84" />
    <path d="M52 74 L 52 84" />
    <path d="M60 74 L 60 84" />
    {/* tail */}
    <path d="M20 55 L 15 52" />
  </S>
);

// ── HAT (fedora / brimmed hat) ───────────────────────────────────
export const HatIcon = ({ size }: IconProps) => (
  <S size={size}>
    {/* dome */}
    <path d="M30 60 Q 30 30, 50 28 Q 70 30, 70 60" />
    {/* brim */}
    <ellipse cx="50" cy="64" rx="34" ry="6" />
    {/* band */}
    <path d="M32 55 L 68 55" />
  </S>
);

// ── SUN ───────────────────────────────────────────────────────────
export const SunIcon = ({ size }: IconProps) => (
  <S size={size}>
    <circle cx="50" cy="50" r="16" />
    <path d="M50 18 L 50 28" />
    <path d="M50 72 L 50 82" />
    <path d="M18 50 L 28 50" />
    <path d="M72 50 L 82 50" />
    <path d="M26 26 L 33 33" />
    <path d="M74 74 L 67 67" />
    <path d="M26 74 L 33 67" />
    <path d="M74 26 L 67 33" />
  </S>
);

// ── BED ───────────────────────────────────────────────────────────
export const BedIcon = ({ size }: IconProps) => (
  <S size={size}>
    {/* headboard */}
    <path d="M12 42 L 12 78" />
    <path d="M12 42 L 42 42 L 42 62" />
    {/* frame */}
    <path d="M12 62 L 88 62 L 88 42" />
    {/* mattress bottom */}
    <path d="M12 72 L 88 72" />
    {/* legs */}
    <path d="M14 78 L 14 86" />
    <path d="M86 72 L 86 86" />
    {/* pillow */}
    <path d="M18 60 Q 18 52, 26 52 L 36 52 Q 42 52, 42 60" />
  </S>
);

// ── BAG (backpack) ───────────────────────────────────────────────
export const BagIcon = ({ size }: IconProps) => (
  <S size={size}>
    {/* body */}
    <path d="M25 40 L 25 82 Q 25 86, 30 86 L 70 86 Q 75 86, 75 82 L 75 40" />
    {/* flap top */}
    <path d="M25 40 Q 25 22, 50 22 Q 75 22, 75 40" />
    {/* straps on top */}
    <path d="M40 24 Q 40 15, 46 15" />
    <path d="M60 24 Q 60 15, 54 15" />
    {/* front pocket */}
    <path d="M35 60 L 65 60 L 65 78 L 35 78 Z" />
    {/* buckle */}
    <circle cx="50" cy="52" r="3" />
  </S>
);

// ── PEN ───────────────────────────────────────────────────────────
export const PenIcon = ({ size }: IconProps) => (
  <S size={size}>
    {/* body */}
    <path d="M22 78 L 62 38 L 70 46 L 30 86 Z" />
    {/* nib (triangle at bottom-left tip) */}
    <path d="M22 78 L 18 88 L 30 86" fill="currentColor" opacity="0.15" />
    <path d="M22 78 L 18 88 L 30 86 Z" />
    {/* cap end */}
    <path d="M62 38 L 70 30 L 78 38 L 70 46" />
    {/* pocket clip */}
    <path d="M70 30 L 75 32 L 75 40" />
  </S>
);

// ── CUP (mug with steam) ─────────────────────────────────────────
export const CupIcon = ({ size }: IconProps) => (
  <S size={size}>
    {/* body */}
    <path d="M25 40 L 30 78 Q 32 82, 50 82 Q 68 82, 70 78 L 75 40 Z" />
    {/* rim */}
    <path d="M25 40 L 75 40" />
    {/* handle */}
    <path d="M75 48 Q 88 50, 88 60 Q 88 70, 75 68" />
    {/* steam */}
    <path d="M42 30 Q 45 25, 42 20 Q 39 15, 42 10" />
    <path d="M52 30 Q 55 25, 52 20 Q 49 15, 52 10" />
    <path d="M62 30 Q 65 25, 62 20 Q 59 15, 62 10" />
  </S>
);

// ── BAT (baseball bat — CVC "bat") ───────────────────────────────
export const BatIcon = ({ size }: IconProps) => (
  <S size={size}>
    {/* baseball bat, diagonal, thick end top-right, grip bottom-left */}
    <path d="M78 18 L 84 24 L 30 78 Q 22 82, 18 78 Q 22 74, 26 74 Z" />
    {/* grip lines */}
    <path d="M22 74 L 24 76" />
    <path d="M28 78 L 30 80" />
    {/* knob at end */}
    <circle cx="20" cy="80" r="3" />
  </S>
);

// ── MAT (rug with fringe) ────────────────────────────────────────
export const MatIcon = ({ size }: IconProps) => (
  <S size={size}>
    {/* main rectangle */}
    <path d="M18 42 L 82 42 L 82 76 L 18 76 Z" />
    {/* pattern lines */}
    <path d="M18 52 L 82 52" />
    <path d="M18 66 L 82 66" />
    {/* fringe top */}
    <path d="M22 42 L 22 38" />
    <path d="M30 42 L 30 38" />
    <path d="M38 42 L 38 38" />
    <path d="M46 42 L 46 38" />
    <path d="M54 42 L 54 38" />
    <path d="M62 42 L 62 38" />
    <path d="M70 42 L 70 38" />
    <path d="M78 42 L 78 38" />
    {/* fringe bottom */}
    <path d="M22 76 L 22 80" />
    <path d="M30 76 L 30 80" />
    <path d="M38 76 L 38 80" />
    <path d="M46 76 L 46 80" />
    <path d="M54 76 L 54 80" />
    <path d="M62 76 L 62 80" />
    <path d="M70 76 L 70 80" />
    <path d="M78 76 L 78 80" />
  </S>
);

// ── RAT ───────────────────────────────────────────────────────────
export const RatIcon = ({ size }: IconProps) => (
  <S size={size}>
    {/* body */}
    <ellipse cx="42" cy="60" rx="24" ry="14" />
    {/* head (circle overlapping right side of body) */}
    <circle cx="66" cy="55" r="12" />
    {/* ear */}
    <circle cx="62" cy="45" r="4.5" />
    {/* inner ear */}
    <circle cx="62" cy="45" r="1.8" fill="currentColor" />
    {/* eye */}
    <circle cx="72" cy="52" r="1.8" fill="currentColor" />
    {/* nose */}
    <circle cx="78" cy="58" r="1.5" fill="currentColor" />
    {/* whiskers */}
    <path d="M76 58 L 84 55" />
    <path d="M76 60 L 84 60" />
    <path d="M76 62 L 84 65" />
    {/* tail */}
    <path d="M18 62 Q 8 66, 6 76 Q 12 82, 18 76" />
    {/* feet */}
    <path d="M32 74 L 32 80" />
    <path d="M50 74 L 50 80" />
  </S>
);

// ── NUMBERS 1–3 (thick shapes for tracing) ───────────────────────
export const OneIcon = ({ size }: IconProps) => (
  <S size={size}>
    <path d="M38 32 L 52 22 L 52 80" />
    <path d="M32 80 L 68 80" />
  </S>
);

export const TwoIcon = ({ size }: IconProps) => (
  <S size={size}>
    <path d="M28 34 Q 32 20, 50 20 Q 68 20, 68 36 Q 68 48, 46 62 Q 30 72, 28 80 L 72 80" />
  </S>
);

export const ThreeIcon = ({ size }: IconProps) => (
  <S size={size}>
    <path d="M28 30 Q 38 20, 54 22 Q 68 24, 68 36 Q 68 48, 52 50 Q 68 52, 68 66 Q 68 80, 52 80 Q 38 80, 28 70" />
  </S>
);

// ── BOY (simple person for name page / self drawing) ─────────────
export const BoyIcon = ({ size }: IconProps) => (
  <S size={size}>
    {/* hair line */}
    <path d="M40 22 L 60 22" />
    {/* head */}
    <circle cx="50" cy="28" r="10" />
    {/* eyes */}
    <circle cx="46" cy="27" r="1.2" fill="currentColor" />
    <circle cx="54" cy="27" r="1.2" fill="currentColor" />
    {/* smile */}
    <path d="M46 32 Q 50 34, 54 32" />
    {/* body */}
    <path d="M38 42 L 62 42 L 62 68 L 38 68 Z" />
    {/* neck */}
    <path d="M50 38 L 50 42" />
    {/* arms */}
    <path d="M38 46 L 26 60" />
    <path d="M62 46 L 74 60" />
    {/* legs */}
    <path d="M44 68 L 42 88" />
    <path d="M56 68 L 58 88" />
  </S>
);

// ── WEEK 2 ICONS ──────────────────────────────────────────────────

// I → ink (ink bottle with quill)
export const InkIcon = ({ size }: IconProps) => (
  <S size={size}>
    {/* bottle */}
    <path d="M35 45 L 35 80 Q 35 85, 40 85 L 60 85 Q 65 85, 65 80 L 65 45 Z" />
    {/* neck */}
    <path d="M42 45 L 42 35 L 58 35 L 58 45" />
    {/* cork/cap */}
    <path d="M40 35 L 60 35 L 60 30 L 40 30 Z" />
    {/* ink level line */}
    <path d="M35 60 L 65 60" />
    {/* label "INK" */}
    <text x="50" y="72" textAnchor="middle" fontSize="9" fontFamily="Georgia, serif" fill="currentColor" stroke="none">
      INK
    </text>
  </S>
);

// J → jam (jar with label)
export const JamIcon = ({ size }: IconProps) => (
  <S size={size}>
    {/* lid */}
    <path d="M28 32 L 72 32 L 72 40 L 28 40 Z" />
    {/* jar body */}
    <path d="M30 40 L 30 82 Q 30 86, 34 86 L 66 86 Q 70 86, 70 82 L 70 40" />
    {/* label */}
    <path d="M36 52 L 64 52 L 64 72 L 36 72 Z" />
    {/* "JAM" */}
    <text x="50" y="66" textAnchor="middle" fontSize="10" fontFamily="Georgia, serif" fontWeight="bold" fill="currentColor" stroke="none">
      JAM
    </text>
  </S>
);

// K → kite (diamond with tail)
export const KiteIcon = ({ size }: IconProps) => (
  <S size={size}>
    {/* diamond body */}
    <path d="M50 15 L 78 42 L 50 78 L 22 42 Z" />
    {/* cross lines */}
    <path d="M50 15 L 50 78" />
    <path d="M22 42 L 78 42" />
    {/* tail */}
    <path d="M50 78 Q 46 84, 52 88 Q 46 92, 50 96" />
    {/* tail bows */}
    <path d="M46 82 L 54 82" />
    <path d="M45 88 L 55 88" />
    <path d="M46 94 L 54 94" />
  </S>
);

// L → leaf
export const LeafIcon = ({ size }: IconProps) => (
  <S size={size}>
    {/* leaf shape (pointed at top and bottom) */}
    <path d="M50 15 Q 78 30, 78 55 Q 78 78, 50 90 Q 22 78, 22 55 Q 22 30, 50 15 Z" />
    {/* main vein */}
    <path d="M50 15 L 50 90" />
    {/* side veins */}
    <path d="M50 30 L 65 38" />
    <path d="M50 30 L 35 38" />
    <path d="M50 45 L 70 52" />
    <path d="M50 45 L 30 52" />
    <path d="M50 60 L 68 66" />
    <path d="M50 60 L 32 66" />
    <path d="M50 75 L 60 80" />
    <path d="M50 75 L 40 80" />
  </S>
);

// log (wooden log with rings)
export const LogIcon = ({ size }: IconProps) => (
  <S size={size}>
    {/* main log cylinder side view */}
    <path d="M20 40 L 80 40 L 80 70 L 20 70 Z" />
    {/* left end circle (ring cross-section) */}
    <ellipse cx="20" cy="55" rx="6" ry="15" />
    {/* rings */}
    <ellipse cx="20" cy="55" rx="3.5" ry="9" />
    <ellipse cx="20" cy="55" rx="1.5" ry="4" />
    {/* wood grain lines on log side */}
    <path d="M28 48 Q 45 45, 78 48" />
    <path d="M28 60 Q 45 63, 78 60" />
  </S>
);

// fog (cloud with wavy lines below)
export const FogIcon = ({ size }: IconProps) => (
  <S size={size}>
    {/* cloud body */}
    <path d="M30 45 Q 22 45, 22 55 Q 15 55, 15 62 Q 15 70, 25 70 L 75 70 Q 85 70, 85 62 Q 85 55, 78 55 Q 78 42, 65 42 Q 60 35, 50 35 Q 38 35, 33 42 Z" />
    {/* fog wisps below */}
    <path d="M18 78 Q 30 76, 40 78 Q 50 80, 60 78 Q 70 76, 82 78" />
    <path d="M22 85 Q 32 83, 42 85 Q 52 87, 62 85 Q 72 83, 78 85" />
  </S>
);

// jog (running stick figure)
export const JogIcon = ({ size }: IconProps) => (
  <S size={size}>
    {/* head */}
    <circle cx="60" cy="20" r="8" />
    {/* body leaning forward */}
    <path d="M60 28 L 52 55" />
    {/* front arm bent up */}
    <path d="M56 40 L 68 32 L 72 42" />
    {/* back arm swung back */}
    <path d="M56 40 L 42 45 L 38 38" />
    {/* front leg (right, forward) */}
    <path d="M52 55 L 70 68 L 78 82" />
    {/* back leg (left, pushing off) */}
    <path d="M52 55 L 38 68 L 30 80" />
    {/* motion lines behind */}
    <path d="M20 45 L 30 45" />
    <path d="M18 55 L 28 55" />
  </S>
);

// hog (chubby pig)
export const HogIcon = ({ size }: IconProps) => (
  <S size={size}>
    {/* body */}
    <ellipse cx="45" cy="60" rx="28" ry="18" />
    {/* head bumped up on right */}
    <ellipse cx="72" cy="55" rx="12" ry="12" />
    {/* ear */}
    <path d="M68 45 L 66 38 L 74 42" />
    {/* snout (flat) */}
    <ellipse cx="82" cy="58" rx="5" ry="4" />
    {/* nostrils */}
    <circle cx="80" cy="58" r="1" fill="currentColor" />
    <circle cx="84" cy="58" r="1" fill="currentColor" />
    {/* eye */}
    <circle cx="72" cy="52" r="1.5" fill="currentColor" />
    {/* curly tail */}
    <path d="M18 58 Q 12 55, 14 50 Q 18 48, 18 52" />
    {/* legs */}
    <path d="M30 76 L 30 84" />
    <path d="M42 78 L 42 86" />
    <path d="M56 78 L 56 86" />
    <path d="M65 76 L 65 84" />
  </S>
);

// mouse — NOT REGISTERED. At worksheet size (54px) this silhouette reads as a
// fish or a bird, not a mouse, so M uses the existing `mat` picture instead.
// Do not wire this into ICONS until it is redrawn and checked at 54px.
export const MouseIcon = ({ size }: IconProps) => (
  <S size={size}>
    {/* one outline: rounded rear on the left tapering to a snout on the right */}
    <path d="M90 64 C 80 50, 64 44, 48 46 C 30 48, 20 56, 20 64 C 20 73, 34 78, 52 77 C 70 76, 84 72, 90 64 Z" />
    {/* big round ear, clearly clear of the back line */}
    <circle cx="56" cy="40" r="11" />
    {/* eye */}
    <circle cx="78" cy="60" r="1.8" fill="currentColor" />
    {/* nose */}
    <circle cx="88" cy="64" r="2" fill="currentColor" />
    {/* long thin tail sweeping away to the left */}
    <path d="M20 66 C 12 74, 2 70, 5 60" />
    {/* legs */}
    <path d="M38 77 L 38 85" />
    <path d="M60 76 L 60 84" />
  </S>
);

// nut (acorn — cap with hatching, rounded shell)
export const NutIcon = ({ size }: IconProps) => (
  <S size={size}>
    {/* stalk */}
    <path d="M50 28 L 50 20" />
    {/* cap */}
    <path d="M28 44 Q 50 24, 72 44 Z" />
    {/* cap hatching */}
    <path d="M38 40 L 42 45" />
    <path d="M50 36 L 50 44" />
    <path d="M62 40 L 58 45" />
    {/* shell */}
    <path d="M28 44 C 28 68, 38 84, 50 84 C 62 84, 72 68, 72 44" />
  </S>
);

// octopus (dome head, two eyes, eight curling arms)
export const OctopusIcon = ({ size }: IconProps) => (
  <S size={size}>
    {/* head */}
    <path d="M26 50 C 26 28, 74 28, 74 50 C 74 58, 63 63, 50 63 C 37 63, 26 58, 26 50 Z" />
    {/* eyes */}
    <circle cx="41" cy="46" r="2.4" fill="currentColor" />
    <circle cx="59" cy="46" r="2.4" fill="currentColor" />
    {/* arms */}
    <path d="M28 58 C 22 68, 16 72, 12 82" />
    <path d="M36 62 C 32 72, 28 78, 24 88" />
    <path d="M45 63 C 44 73, 42 80, 40 90" />
    <path d="M55 63 C 56 73, 58 80, 60 90" />
    <path d="M64 62 C 68 72, 72 78, 76 88" />
    <path d="M72 58 C 78 68, 84 72, 88 82" />
  </S>
);

// queen (crown — the standard picture for the letter Q)
export const QueenIcon = ({ size }: IconProps) => (
  <S size={size}>
    {/* crown body with three points */}
    <path d="M22 68 L 18 34 L 34 48 L 50 26 L 66 48 L 82 34 L 78 68 Z" />
    {/* base band */}
    <path d="M22 68 L 78 68" />
    <path d="M22 76 L 78 76" />
    <path d="M22 68 L 22 76" />
    <path d="M78 68 L 78 76" />
    {/* jewels on the points */}
    <circle cx="18" cy="34" r="3.5" fill="currentColor" />
    <circle cx="50" cy="26" r="4" fill="currentColor" />
    <circle cx="82" cy="34" r="3.5" fill="currentColor" />
  </S>
);

// tree (round canopy on a straight trunk)
export const TreeIcon = ({ size }: IconProps) => (
  <S size={size}>
    {/* canopy */}
    <path d="M50 16 C 30 16, 18 30, 22 44 C 12 52, 18 66, 32 66 L 68 66 C 82 66, 88 52, 78 44 C 82 30, 70 16, 50 16 Z" />
    {/* trunk */}
    <path d="M44 66 L 44 86" />
    <path d="M56 66 L 56 86" />
    {/* ground line */}
    <path d="M30 86 L 70 86" />
  </S>
);

// bun (round bread roll with a slash on top)
export const BunIcon = ({ size }: IconProps) => (
  <S size={size}>
    {/* roll */}
    <path d="M18 66 C 18 40, 34 28, 50 28 C 66 28, 82 40, 82 66 Z" />
    {/* base */}
    <path d="M16 66 L 84 66" />
    {/* slash marks on top */}
    <path d="M38 44 L 46 38" />
    <path d="M52 44 L 60 38" />
  </S>
);

// umbrella (scalloped canopy, straight shaft, hooked handle)
export const UmbrellaIcon = ({ size }: IconProps) => (
  <S size={size}>
    {/* canopy */}
    <path d="M12 52 C 12 28, 88 28, 88 52" />
    {/* scalloped edge */}
    <path d="M12 52 Q 24 44, 37 52 Q 50 44, 63 52 Q 76 44, 88 52" />
    {/* shaft */}
    <path d="M50 28 L 50 76" />
    {/* hooked handle */}
    <path d="M50 76 C 50 85, 37 85, 37 76" />
    {/* top knob */}
    <circle cx="50" cy="27" r="2.5" fill="currentColor" />
  </S>
);

// van (box body, short bonnet, two wheels)
export const VanIcon = ({ size }: IconProps) => (
  <S size={size}>
    {/* body */}
    <path d="M10 60 L 10 30 L 60 30 L 60 60 Z" />
    {/* bonnet */}
    <path d="M60 60 L 60 40 L 76 40 L 88 52 L 88 60 Z" />
    {/* windscreen */}
    <path d="M64 44 L 75 44 L 82 52 L 64 52 Z" />
    {/* side window */}
    <path d="M18 38 L 36 38 L 36 48 L 18 48 Z" />
    {/* wheels */}
    <circle cx="28" cy="64" r="7" />
    <circle cx="72" cy="64" r="7" />
  </S>
);

// spider web (radial spokes and arcs — used for W)
export const WebIcon = ({ size }: IconProps) => (
  <S size={size}>
    {/* spokes */}
    <path d="M50 12 L 50 88" />
    <path d="M12 50 L 88 50" />
    <path d="M23 23 L 77 77" />
    <path d="M77 23 L 23 77" />
    {/* one big ring, sagging between the spokes */}
    <path d="M50 22 Q 36 28, 30 30 Q 28 36, 22 50 Q 28 64, 30 70 Q 36 72, 50 78 Q 64 72, 70 70 Q 72 64, 78 50 Q 72 36, 70 30 Q 64 28, 50 22" />
  </S>
);

// whale — NOT REGISTERED. Drawn twice and still reads as a fish at
// worksheet size (54px), so W uses the web picture instead.
// Do not wire this into ICONS until it is redrawn and checked at 54px.
export const WhaleIcon = ({ size }: IconProps) => (
  <S size={size}>
    {/* big rounded body filling most of the frame */}
    <path d="M8 60 C 8 42, 28 32, 50 32 C 68 32, 80 42, 82 56 C 83 62, 80 70, 70 74 C 56 79, 30 78, 18 72 C 11 68, 8 64, 8 60 Z" />
    {/* horizontal tail fluke — the cue that says whale, not fish */}
    <path d="M80 60 C 86 54, 94 52, 96 50 C 94 58, 94 64, 96 70 C 92 68, 84 66, 80 63" />
    {/* blowhole spout, two strong jets */}
    <path d="M34 32 C 31 24, 26 20, 23 16" />
    <path d="M37 32 C 37 23, 40 19, 42 15" />
    {/* eye */}
    <circle cx="24" cy="52" r="2" fill="currentColor" />
    {/* mouth line */}
    <path d="M9 63 C 18 69, 30 70, 40 68" />
    {/* flipper */}
    <path d="M40 70 C 44 76, 52 78, 58 76" />
  </S>
);

// Colour swatches (for colour intro)
export const RedSwatchIcon = ({ size }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 100 100">
    <rect x="20" y="20" width="60" height="60" rx="6" fill="#dc2626" stroke="#000" strokeWidth="2" />
  </svg>
);

export const BlueSwatchIcon = ({ size }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 100 100">
    <rect x="20" y="20" width="60" height="60" rx="6" fill="#2563eb" stroke="#000" strokeWidth="2" />
  </svg>
);

export const GreenSwatchIcon = ({ size }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 100 100">
    <rect x="20" y="20" width="60" height="60" rx="6" fill="#16a34a" stroke="#000" strokeWidth="2" />
  </svg>
);

// ── LOOKUP ────────────────────────────────────────────────────────

const ICONS: Record<string, React.FC<IconProps>> = {
  // Week 1
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
  // Week 2
  ink: InkIcon,
  jam: JamIcon,
  kite: KiteIcon,
  leaf: LeafIcon,
  log: LogIcon,
  fog: FogIcon,
  jog: JogIcon,
  hog: HogIcon,
  nut: NutIcon,
  octopus: OctopusIcon,
  // Week 3
  queen: QueenIcon,
  tree: TreeIcon,
  bun: BunIcon,
  umbrella: UmbrellaIcon,
  van: VanIcon,
  web: WebIcon,
  red: RedSwatchIcon,
  blue: BlueSwatchIcon,
  green: GreenSwatchIcon,
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
