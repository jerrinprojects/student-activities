import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  findOdayDay,
  type OdayActivity,
  type WarmupTraceActivity,
  type AlphabetFocusActivity,
  type SightWordActivity,
  type PictureWordMatchActivity,
  type CVCBuildActivity,
  type ColourLabelActivity,
  type SentenceCopyActivity,
} from '../data/oday';
import { OdayIcon } from '../icons/oday';

export default function OdayPrintPage() {
  const { date = '' } = useParams<{ date: string }>();
  const navigate = useNavigate();
  const day = findOdayDay(date);

  useEffect(() => {
    if (!day) return;
    const t = setTimeout(() => window.print(), 500);
    return () => clearTimeout(t);
  }, [day]);

  if (!day) {
    return (
      <div className="p-8 text-center text-stone-500">
        No Oday session found for {date}.{' '}
        <button onClick={() => navigate('/oday')} className="underline text-stone-800">
          Go back
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="no-print fixed top-0 left-0 right-0 bg-white border-b border-stone-200 px-6 py-3 flex items-center gap-3 z-10 shadow-sm">
        <button
          onClick={() => navigate('/oday')}
          className="text-stone-500 hover:text-stone-800 text-sm font-medium"
        >
          ← Back
        </button>
        <span className="text-stone-800 font-semibold">
          Oday · Week {day.week} Day {day.day}
        </span>
        <span className="text-sm text-stone-400">({formatDate(day.date)})</span>
        <button
          onClick={() => window.print()}
          className="ml-auto bg-stone-800 hover:bg-stone-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
        >
          Print
        </button>
      </div>

      <div className="pt-16 print:pt-0 bg-stone-50 min-h-screen print:bg-white">
        {day.activities.map((act, i) => (
          <ActivityPage key={i} activity={act} number={i + 1} totalPages={day.activities.length} day={day} />
        ))}

        {day.teacherNote && (
          <div className="oday-page bg-white max-w-3xl mx-auto p-8 print:max-w-none print:p-0 print:mt-0 mt-4">
            <PageHeader day={day} number={day.activities.length + 1} totalPages={day.activities.length + 1} />
            <div className="mt-4 p-4 border border-stone-300 rounded-lg bg-stone-50 print:bg-transparent">
              <p className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-2">Teacher Note</p>
              <p className="text-sm text-stone-700 leading-relaxed">{day.teacherNote}</p>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @media print {
          .oday-page {
            page-break-after: always;
            box-shadow: none !important;
            padding: 15mm 18mm !important;
            margin: 0 !important;
            max-width: none !important;
          }
          .oday-page:last-child { page-break-after: auto; }
          .no-print { display: none !important; }
          @page { size: A4; margin: 0; }
        }
      `}</style>
    </div>
  );
}

// ── PAGE WRAPPER ─────────────────────────────────────────────────

function PageHeader({ day, number, totalPages }: { day: ReturnType<typeof findOdayDay>; number: number; totalPages: number }) {
  if (!day) return null;
  return (
    <div className="flex items-center justify-between border-b-2 border-stone-800 pb-2 mb-6">
      <div>
        <h1 className="text-xl font-bold text-stone-800">Oday</h1>
        <p className="text-xs text-stone-500">
          Week {day.week} · Day {day.day} · {formatDate(day.date)}
        </p>
      </div>
      <div className="text-xs text-stone-400">
        {number} / {totalPages}
      </div>
    </div>
  );
}

function ActivityPage({
  activity,
  number,
  totalPages,
  day,
}: {
  activity: OdayActivity;
  number: number;
  totalPages: number;
  day: NonNullable<ReturnType<typeof findOdayDay>>;
}) {
  return (
    <div className="oday-page bg-white max-w-3xl mx-auto p-8 my-4 rounded-lg shadow-sm print:my-0 print:shadow-none">
      <PageHeader day={day} number={number} totalPages={totalPages + (day.teacherNote ? 1 : 0)} />
      <SectionTitle n={number} title={activity.title} instr={activity.instr} />
      <ActivityBody activity={activity} />
    </div>
  );
}

function SectionTitle({ n, title, instr }: { n: number; title: string; instr: string }) {
  return (
    <div className="mb-5">
      <div className="flex items-center gap-2 mb-2">
        <span className="w-7 h-7 rounded-full bg-stone-800 text-white text-sm font-bold flex items-center justify-center">
          {n}
        </span>
        <h2 className="text-lg font-bold text-stone-800">{title}</h2>
      </div>
      <p className="text-sm text-stone-600 pl-9">{instr}</p>
    </div>
  );
}

// ── PER-TYPE RENDERERS ───────────────────────────────────────────

function ActivityBody({ activity }: { activity: OdayActivity }) {
  switch (activity.type) {
    case 'warmup-trace':
      return <WarmupTrace act={activity} />;
    case 'alphabet-focus':
      return <AlphabetFocus act={activity} />;
    case 'sight-word':
      return <SightWord act={activity} />;
    case 'picture-word-match':
      return <PictureWordMatch act={activity} />;
    case 'cvc-build':
      return <CVCBuild act={activity} />;
    case 'colour-label':
      return <ColourLabel act={activity} />;
    case 'sentence-copy':
      return <SentenceCopy act={activity} />;
  }
}

// Dashed serif letter for tracing
function TraceWord({ text, size = 48 }: { text: string; size?: number }) {
  return (
    <span
      style={{
        fontFamily: 'Georgia, serif',
        fontSize: size,
        letterSpacing: '0.12em',
        color: '#94a3b8', // stone-400
      }}
    >
      {text}
    </span>
  );
}

// ── 1. WARM-UP TRACE ─────────────────────────────────────────────

function WarmupTrace({ act }: { act: WarmupTraceActivity }) {
  return (
    <div className="space-y-3 pl-9">
      {act.words.map((w, i) => (
        <div key={i} className="flex items-center gap-4">
          <TraceWord text={w} />
          <TraceWord text={w} />
          <TraceWord text={w} />
          <div className="flex-1 border-b-2 border-stone-500 h-12" />
        </div>
      ))}
    </div>
  );
}

// ── 2. ALPHABET FOCUS ────────────────────────────────────────────

function AlphabetFocus({ act }: { act: AlphabetFocusActivity }) {
  // Review days list all eight letters of the week. At the normal row height
  // the last one falls onto a page of its own, so tighten up once there are
  // more than four.
  const dense = act.letters.length > 4;
  return (
    <div className={`pl-9 ${dense ? 'space-y-1' : 'space-y-6'}`}>
      {act.letters.map((l) => (
        <div
          key={l.letter}
          className={`grid grid-cols-[80px_1fr_100px_1fr] items-center gap-4 border-b border-stone-200 last:border-b-0 ${
            dense ? 'py-0.5' : 'py-2'
          }`}
        >
          {/* Picture */}
          <div className="flex flex-col items-center">
            <OdayIcon name={l.iconKey} size={dense ? 46 : 72} />
            <span className="text-xs text-stone-500 mt-1">{l.word}</span>
          </div>
          {/* Trace uppercase & lowercase */}
          <div className="flex items-center gap-2">
            <TraceWord text={l.letter} size={dense ? 32 : 44} />
            <TraceWord text={l.letter.toLowerCase()} size={dense ? 32 : 44} />
            <TraceWord text={l.letter} size={dense ? 32 : 44} />
            <TraceWord text={l.letter.toLowerCase()} size={dense ? 32 : 44} />
          </div>
          {/* Match label */}
          <div className="text-xs text-stone-500 text-right pr-2">
            Copy on line →
          </div>
          {/* Blank line for practice */}
          <div className={`border-b-2 border-stone-500 ${dense ? 'h-7' : 'h-10'}`} />
        </div>
      ))}
    </div>
  );
}

// ── 3. SIGHT WORD ─────────────────────────────────────────────────

function SightWord({ act }: { act: SightWordActivity }) {
  return (
    <div className="pl-9 space-y-5">
      {act.words.map((w) => (
        <div key={w} className="border border-stone-200 rounded-lg p-4">
          <p className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-3">Word: {w}</p>
          <div className="flex items-center gap-3 mb-3 flex-wrap">
            {[1, 2, 3, 4, 5].map((n) => (
              <TraceWord key={`t${n}`} text={w} />
            ))}
          </div>
          <div className="flex items-center gap-3 mb-2 flex-wrap">
            {[1, 2, 3, 4, 5].map((n) => (
              <div key={`c${n}`} className="border-b-2 border-stone-500 h-10 flex-1 min-w-[80px]" />
            ))}
          </div>
        </div>
      ))}
      {act.circleSentences && act.circleSentences.length > 0 && (
        <div className="border border-stone-200 rounded-lg p-4">
          <p className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-3">
            Circle the word in each sentence
          </p>
          <ol className="space-y-3">
            {act.circleSentences.map((s, i) => (
              <li key={i} className="text-lg text-stone-800" style={{ fontFamily: 'Georgia, serif' }}>
                <span className="text-sm text-stone-400 mr-2">{i + 1}.</span>
                {s}
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}

// ── 4. PICTURE-WORD MATCH ────────────────────────────────────────

function PictureWordMatch({ act }: { act: PictureWordMatchActivity }) {
  // Shuffle the words column so match isn't in row order
  const wordsShuffled = shuffleDeterministic(act.pairs.map((p) => p.word));
  return (
    <div className="pl-9">
      <div className="grid grid-cols-[1fr_1fr] gap-4 mb-6">
        {/* Pictures column */}
        <div className="space-y-2">
          {act.pairs.map((p, i) => (
            <div key={i} className="flex items-center gap-3 py-2 border-b border-stone-200">
              <OdayIcon name={p.iconKey} size={54} />
            </div>
          ))}
        </div>
        {/* Words column (shuffled) */}
        <div className="space-y-2">
          {wordsShuffled.map((w, i) => (
            <div
              key={i}
              className="flex items-center py-2 border-b border-stone-200 text-xl text-stone-800"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              {w}
            </div>
          ))}
        </div>
      </div>
      <p className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-3">
        Now copy each word
      </p>
      <div className="grid grid-cols-2 gap-x-6 gap-y-3">
        {act.pairs.map((p, i) => (
          <div key={i} className="flex items-baseline gap-2">
            <span
              className="text-lg text-stone-800 min-w-[60px]"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              {p.word}
            </span>
            <span className="text-stone-400">→</span>
            <div className="flex-1 border-b-2 border-stone-500 h-8" />
          </div>
        ))}
      </div>
    </div>
  );
}

// ── 5. CVC BUILD ─────────────────────────────────────────────────

function CVCBuild({ act }: { act: CVCBuildActivity }) {
  return (
    <div className="pl-9 grid grid-cols-1 sm:grid-cols-3 gap-6">
      {act.items.map((it, i) => (
        <div key={i} className="flex flex-col items-center border border-stone-200 rounded-lg p-4">
          <OdayIcon name={it.iconKey} size={80} />
          <div
            className="mt-3 flex items-center gap-2"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            {it.missing === -1 ? (
              // Write the whole word
              <div className="border-b-2 border-stone-500 h-10 w-32" />
            ) : (
              it.word.split('').map((ch, idx) => (
                <span
                  key={idx}
                  className={
                    idx === it.missing
                      ? 'inline-block border-b-2 border-stone-800 w-8 h-10 text-center'
                      : 'text-3xl text-stone-800'
                  }
                >
                  {idx === it.missing ? '' : ch}
                </span>
              ))
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

// ── 6. COLOUR & LABEL ────────────────────────────────────────────

function ColourLabel({ act }: { act: ColourLabelActivity }) {
  return (
    <div className="pl-9 space-y-8">
      {act.items.map((it, i) => (
        <div key={i} className="flex flex-col items-center">
          <div style={{ transform: 'scale(2)', transformOrigin: 'center', marginBottom: 40 }}>
            <OdayIcon name={it.iconKey} size={90} />
          </div>
          <div className="mt-8 w-full max-w-md">
            <p className="text-xs text-stone-500 mb-2 text-center">Write the word:</p>
            <div className="border-b-2 border-stone-500 h-12" />
          </div>
        </div>
      ))}
    </div>
  );
}

// ── 7. SENTENCE COPY ─────────────────────────────────────────────

function SentenceCopy({ act }: { act: SentenceCopyActivity }) {
  return (
    <div className="pl-9 space-y-6">
      {act.sentences.map((s, i) => (
        <div key={i} className="border border-stone-200 rounded-lg p-5">
          <div className="flex items-center gap-4 mb-4">
            <OdayIcon name={s.iconKey} size={70} />
            <p
              className="text-2xl text-stone-800"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              {s.sentence}
            </p>
          </div>
          <p className="text-xs text-stone-500 mb-2">Copy on the lines:</p>
          <div className="space-y-4">
            <div className="border-b-2 border-stone-500 h-10" />
            <div className="border-b-2 border-stone-500 h-10" />
          </div>
        </div>
      ))}
    </div>
  );
}

// ── HELPERS ──────────────────────────────────────────────────────

function shuffleDeterministic<T>(arr: T[]): T[] {
  // Simple reversible reorder — swap adjacent pairs then rotate one.
  const copy = [...arr];
  for (let i = 0; i + 1 < copy.length; i += 2) {
    [copy[i], copy[i + 1]] = [copy[i + 1], copy[i]];
  }
  if (copy.length > 2) copy.push(copy.shift()!);
  return copy;
}

function formatDate(dateStr: string) {
  return new Date(dateStr + 'T00:00:00').toLocaleDateString('en-NZ', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}
