import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { STUDENTS, LITERACY_SESSIONS, type WritingSupport } from '../data/literacy';

export default function PrintPage() {
  const navigate = useNavigate();
  const session = LITERACY_SESSIONS[0];

  useEffect(() => {
    if (!session) return;
    const t = setTimeout(() => window.print(), 500);
    return () => clearTimeout(t);
  }, [session]);

  if (!session) {
    return (
      <div className="p-8 text-center text-gray-500">
        No sessions found.{' '}
        <button onClick={() => navigate('/literacy')} className="underline text-violet-600">Go back</button>
      </div>
    );
  }

  const studentsWithActivity = STUDENTS.filter((name) => session.activities[name]);

  return (
    <div>
      <div className="no-print fixed top-0 left-0 right-0 bg-white border-b border-gray-200 px-6 py-3 flex items-center gap-3 z-10 shadow-sm">
        <button onClick={() => navigate('/literacy')} className="text-gray-500 hover:text-gray-800 text-sm font-medium">← Back</button>
        <span className="text-gray-700 font-semibold">Print All — {formatDate(session.date)}</span>
        <span className="text-sm text-gray-400">({studentsWithActivity.length} students)</span>
        <button
          onClick={() => window.print()}
          className="ml-auto bg-violet-600 hover:bg-violet-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
        >
          Print
        </button>
      </div>

      <div className="pt-16 print:pt-0">
        {studentsWithActivity.map((name, idx) => {
          const activity = session.activities[name]!;
          return (
            <div key={name} className="print-page p-5 max-w-2xl mx-auto print:max-w-none print:p-0">
              {/* Student header */}
              <div className="flex items-center justify-between mb-3 border-b-2 border-gray-800 pb-2">
                <div>
                  <h1 className="text-xl font-bold text-gray-800">{name}</h1>
                  <p className="text-xs text-gray-500 mt-0.5">{formatDate(session.date)} · Literacy</p>
                </div>
                <div className="text-xs text-gray-400">{idx + 1} / {studentsWithActivity.length}</div>
              </div>

              {/* 1. Reading */}
              <PrintSection number={1} title="Reading">
                <p className="font-semibold text-gray-800 mb-1 text-xs">{activity.reading.title}</p>
                <p className="text-gray-700 leading-snug text-xs">{activity.reading.passage}</p>
              </PrintSection>

              {/* 2. Questions */}
              <PrintSection number={2} title="Questions">
                <ol className="space-y-2">
                  {activity.questions.map((q, i) => (
                    <li key={i}>
                      <p className="text-xs text-gray-700 mb-0.5"><span className="font-bold">{i + 1}.</span> {q}</p>
                      <div className="border-b border-gray-400 h-4" />
                    </li>
                  ))}
                </ol>
              </PrintSection>

              {/* 3. Writing */}
              <PrintSection number={3} title="Writing">
                <p className="text-xs text-gray-700 mb-2">{activity.writing.prompt}</p>
                {activity.writing.support && <PrintSupportBlock support={activity.writing.support} />}
                <div className="space-y-2 mt-2">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="border-b border-gray-400 h-4" />
                  ))}
                </div>
              </PrintSection>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function PrintSupportBlock({ support }: { support: WritingSupport }) {
  return (
    <div className="border border-gray-300 rounded-lg p-2 mb-1.5 bg-gray-50">
      {support.wordBank && (
        <div>
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Word Bank</p>
          <div className="flex flex-wrap gap-1">
            {support.wordBank.map((w) => (
              <span key={w} className="border border-gray-400 text-gray-700 text-xs font-medium px-1.5 py-0.5 rounded">
                {w}
              </span>
            ))}
          </div>
        </div>
      )}
      {support.vocabularyList && (
        <div>
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">
            Vocabulary ({support.vocabularyList[0]?.language})
          </p>
          <div className="grid grid-cols-3 gap-x-3 gap-y-0.5">
            {support.vocabularyList.map((v) => (
              <div key={v.word} className="flex items-center gap-1 text-xs">
                <span className="font-semibold text-gray-800">{v.word}</span>
                <span className="text-gray-400">→</span>
                <span className="text-gray-600">{v.translation}</span>
              </div>
            ))}
          </div>
        </div>
      )}
      {support.sentenceStarters && (
        <div>
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Sentence Starters</p>
          <ul className="space-y-0.5">
            {support.sentenceStarters.map((s, i) => (
              <li key={i} className="text-xs text-gray-700 border-l-2 border-gray-400 pl-2">{s}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function PrintSection({ number, title, children }: { number: number; title: string; children: React.ReactNode }) {
  return (
    <div className="mb-2">
      <div className="flex items-center gap-1.5 mb-1">
        <span className="w-4 h-4 rounded-full bg-gray-800 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">{number}</span>
        <h2 className="font-bold text-gray-800 text-xs uppercase tracking-wider">{title}</h2>
      </div>
      <div className="border border-gray-200 rounded-lg p-2 bg-white">
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
