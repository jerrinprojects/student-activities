import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { findSheet, type HandwritingDay, type HandwritingSheet } from '../data/handwriting';

// Dotted thirds. Three equal bands: ascender, x-height, descender.
// Solid top, dashed middle, solid baseline, faint bottom.
const BAND: Record<HandwritingSheet['lineHeight'], number> = {
  large: 16,
  medium: 14,
  small: 12,
};

const SCRIPT = "'Edu NSW ACT Foundation', 'Comic Sans MS', cursive";

export default function HandwritingPrintPage() {
  const { id = '' } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const sheet = findSheet(id);

  useEffect(() => {
    if (!sheet) return;
    const t = setTimeout(() => window.print(), 600);
    return () => clearTimeout(t);
  }, [sheet]);

  if (!sheet) {
    return (
      <div className="p-8 text-center text-stone-500">
        No handwriting sheet called {id}.{' '}
        <button onClick={() => navigate('/handwriting')} className="underline text-amber-700">
          Go back
        </button>
      </div>
    );
  }

  const front = sheet.days.slice(0, 3);
  const back = sheet.days.slice(3);

  return (
    <div>
      <div className="no-print fixed top-0 left-0 right-0 bg-white border-b border-gray-200 px-6 py-3 flex items-center gap-3 z-10 shadow-sm">
        <button onClick={() => navigate('/handwriting')} className="text-gray-500 hover:text-gray-800 text-sm font-medium">
          ← Back
        </button>
        <span className="text-gray-700 font-semibold">
          Level {sheet.level} · Week {sheet.week} · {sheet.title}
        </span>
        <span className="text-sm text-gray-400">2 pages — print as many copies as you need</span>
        <button
          onClick={() => window.print()}
          className="ml-auto bg-amber-600 hover:bg-amber-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
        >
          Print
        </button>
      </div>

      <div className="pt-16 print:pt-0">
        <Page sheet={sheet} days={front} side="Monday to Wednesday" />
        <Page sheet={sheet} days={back} side="Thursday and Friday" showSelfCheck />
      </div>

      <style>{`
        @media print {
          .hw-page {
            page-break-after: always;
            page-break-inside: avoid;
            padding: 12mm 14mm !important;
            margin: 0 !important;
            max-width: none !important;
          }
          .hw-page:last-child { page-break-after: auto; }
          .no-print { display: none !important; }
          @page { size: A4; margin: 0; }
        }
      `}</style>
    </div>
  );
}

function Page({
  sheet,
  days,
  side,
  showSelfCheck,
}: {
  sheet: HandwritingSheet;
  days: HandwritingDay[];
  side: string;
  showSelfCheck?: boolean;
}) {
  return (
    <div className="hw-page bg-white max-w-3xl mx-auto p-8 mb-4 print:mb-0">
      {/* Header with a blank name line — these sheets are not tied to any student */}
      <div className="flex items-end justify-between border-b-2 border-stone-800 pb-2 mb-4">
        <div>
          <h1 className="text-xl font-bold text-stone-800">Handwriting</h1>
          <p className="text-xs text-stone-500 mt-0.5">
            Level {sheet.level} · Week {sheet.week} · {sheet.title} · {sheet.focusSummary}
          </p>
        </div>
        <div className="flex items-end gap-4 text-xs text-stone-500">
          <span>
            Name <span className="inline-block border-b border-stone-500 w-36" />
          </span>
          <span>
            Date <span className="inline-block border-b border-stone-500 w-20" />
          </span>
        </div>
      </div>

      <p className="text-[10px] uppercase tracking-wider text-stone-400 mb-3">{side}</p>

      {days.map((d) => (
        <Day key={d.day} day={d} sheet={sheet} />
      ))}

      {showSelfCheck && <SelfCheck timed={sheet.timed} />}
    </div>
  );
}

function Day({ day, sheet }: { day: HandwritingDay; sheet: HandwritingSheet }) {
  const band = BAND[sheet.lineHeight];
  // Repeat the focus letters so the child has models to follow along the line.
  const letterModel = day.focus.length
    ? day.focus.map((l) => `${l} ${l} ${l}`).join('   ')
    : null;

  return (
    <div className="mb-4 last:mb-0">
      <div className="flex items-baseline gap-2 mb-1">
        <span className="text-xs font-bold text-stone-800 uppercase tracking-wider">{day.day}</span>
        {day.focus.length > 0 && (
          <span className="text-xs text-stone-500">{day.focus.join('  ')}</span>
        )}
        {day.note && <span className="text-[10px] text-stone-400 ml-auto italic">{day.note}</span>}
      </div>

      {/* 1. Warm-up pattern to trace over */}
      <Ruled band={band} model={day.warmUp} faint />

      {/* 2. Focus letters, or a second warm-up line when there are none */}
      {letterModel && <Ruled band={band} model={letterModel} faint />}

      {/* 3. Words */}
      <Ruled band={band} model={day.words.join('   ')} faint />

      {/* 4. Sentence: model to read, then empty lines to write it on. Level 3
          is speed work, so it gets more room to keep going. */}
      <Ruled band={band} model={day.sentence} faint />
      {Array.from({ length: sheet.level === 3 ? 3 : 1 }, (_, i) => (
        <Ruled key={i} band={band} />
      ))}
    </div>
  );
}

// One writing line: three bands with a dashed midline. Drawn as SVG so the
// model text sits exactly on the baseline rather than floating above it.
const LINE_W = 700; // viewBox width; the svg scales to the page

function Ruled({ band, model, faint }: { band: number; model?: string; faint?: boolean }) {
  const height = band * 3;
  // The script's capitals and ascenders reach a little above the top rule, so
  // give the box headroom rather than clipping them. The headroom doubles as
  // the gap between lines.
  const headroom = band * 0.5;
  return (
    <svg
      viewBox={`0 ${-headroom} ${LINE_W} ${height + headroom}`}
      width="100%"
      height={height + headroom}
      preserveAspectRatio="none"
      style={{ display: 'block' }}
    >
      {/* top line */}
      <line x1="0" y1="0.5" x2={LINE_W} y2="0.5" stroke="#d6d3d1" strokeWidth="1" />
      {/* dashed midline at the x-height */}
      <line
        x1="0"
        y1={band}
        x2={LINE_W}
        y2={band}
        stroke="#d6d3d1"
        strokeWidth="1"
        strokeDasharray="5 5"
      />
      {/* baseline */}
      <line x1="0" y1={band * 2} x2={LINE_W} y2={band * 2} stroke="#78716c" strokeWidth="1.5" />
      {/* descender line */}
      <line
        x1="0"
        y1={band * 3 - 0.5}
        x2={LINE_W}
        y2={band * 3 - 0.5}
        stroke="#e7e5e4"
        strokeWidth="1"
      />
      {model && (
        <text
          x="6"
          y={band * 2}
          // alphabetic baseline lands on the baseline rule
          dominantBaseline="alphabetic"
          style={{
            fontFamily: SCRIPT,
            fontSize: band * 2.8,
            fill: faint ? '#a8a29e' : '#292524',
          }}
        >
          {model}
        </text>
      )}
    </svg>
  );
}

function SelfCheck({ timed }: { timed?: boolean }) {
  const rows = [
    'Tall letters reach the top line',
    'Short letters stop at the dotted line',
    'Tails hang below the baseline',
    'One finger space between words',
  ];
  return (
    <div className="mt-4 border border-stone-300 rounded-lg p-3">
      <p className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-2">
        Check your own writing
      </p>
      <div className="grid grid-cols-2 gap-x-6 gap-y-1.5">
        {rows.map((r) => (
          <div key={r} className="flex items-center gap-2 text-xs text-stone-700">
            <span className="inline-block w-3.5 h-3.5 border border-stone-500 rounded-sm" />
            {r}
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-baseline gap-2 text-xs text-stone-700">
        <span>Circle your best letter on this page. Then write it once more here:</span>
        <span className="flex-1 border-b border-stone-500" />
      </div>
      {timed && (
        <div className="mt-2 flex items-baseline gap-2 text-xs text-stone-700">
          <span>Words written in one minute — Monday</span>
          <span className="inline-block border-b border-stone-500 w-14" />
          <span>Wednesday</span>
          <span className="inline-block border-b border-stone-500 w-14" />
        </div>
      )}
    </div>
  );
}
