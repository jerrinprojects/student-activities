import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { STUDENTS, LITERACY_SESSIONS } from '../data/literacy';

export default function PrintPage() {
  const navigate = useNavigate();
  const session = LITERACY_SESSIONS[0];

  useEffect(() => {
    if (!session) return;
    // Small delay to let the page render before print dialog
    const t = setTimeout(() => window.print(), 400);
    return () => clearTimeout(t);
  }, [session]);

  if (!session) {
    return (
      <div className="p-8 text-center text-gray-500">
        No sessions found.{' '}
        <button onClick={() => navigate('/literacy')} className="underline text-violet-600">
          Go back
        </button>
      </div>
    );
  }

  return (
    <div>
      {/* Back button — hidden when printing */}
      <div className="no-print fixed top-0 left-0 right-0 bg-white border-b border-gray-200 px-6 py-3 flex items-center gap-3 z-10 shadow-sm">
        <button
          onClick={() => navigate('/literacy')}
          className="text-gray-500 hover:text-gray-800 text-sm font-medium"
        >
          ← Back
        </button>
        <span className="text-gray-700 font-semibold">
          Print All — {formatDate(session.date)}
        </span>
        <button
          onClick={() => window.print()}
          className="ml-auto bg-violet-600 hover:bg-violet-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
        >
          Print
        </button>
      </div>

      {/* Print pages — one per student */}
      <div className="pt-16 print:pt-0">
        {STUDENTS.map((name, studentIdx) => (
          <div key={name} className="print-page p-8 max-w-2xl mx-auto print:max-w-none print:p-6">
            {/* Student header */}
            <div className="flex items-center justify-between mb-6 border-b-2 border-gray-800 pb-3">
              <div>
                <h1 className="text-2xl font-bold text-gray-800">{name}</h1>
                <p className="text-sm text-gray-500 mt-0.5">{formatDate(session.date)} · Literacy</p>
              </div>
              <div className="text-sm text-gray-400">
                {studentIdx + 1} / {STUDENTS.length}
              </div>
            </div>

            {/* 1. Reading */}
            <PrintSection number={1} title="Reading">
              <p className="font-semibold text-gray-800 mb-2">{session.reading.title}</p>
              <p className="text-gray-700 leading-relaxed text-sm">{session.reading.passage}</p>
            </PrintSection>

            {/* 2. Questions */}
            <PrintSection number={2} title="Questions">
              <ol className="space-y-4">
                {session.questions.map((q, i) => (
                  <li key={i}>
                    <p className="text-sm text-gray-700 mb-1">
                      <span className="font-bold">{i + 1}.</span> {q}
                    </p>
                    <div className="border-b border-gray-400 h-6" />
                  </li>
                ))}
              </ol>
            </PrintSection>

            {/* 3. Writing */}
            <PrintSection number={3} title="Writing">
              <p className="text-sm text-gray-700 mb-4">{session.writing.prompt}</p>
              <div className="space-y-4">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="border-b border-gray-400 h-6" />
                ))}
              </div>
            </PrintSection>
          </div>
        ))}
      </div>
    </div>
  );
}

function PrintSection({ number, title, children }: { number: number; title: string; children: React.ReactNode }) {
  return (
    <div className="mb-5">
      <div className="flex items-center gap-2 mb-2">
        <span className="w-6 h-6 rounded-full bg-gray-800 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
          {number}
        </span>
        <h2 className="font-bold text-gray-800 text-sm uppercase tracking-wider">{title}</h2>
      </div>
      <div className="border border-gray-200 rounded-xl p-4 bg-gray-50">
        {children}
      </div>
    </div>
  );
}

function formatDate(dateStr: string) {
  return new Date(dateStr + 'T00:00:00').toLocaleDateString('en-NZ', {
    day: 'numeric', month: 'long', year: 'numeric',
  });
}
