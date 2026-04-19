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
            <div key={name} className="print-page p-6 max-w-2xl mx-auto print:max-w-none print:p-0">
              {/* Student header */}
              <div className="flex items-center justify-between mb-4 border-b-2 border-gray-800 pb-3">
                <div>
                  <h1 className="text-2xl font-bold text-gray-800">{name}</h1>
                  <p className="text-sm text-gray-500 mt-0.5">{formatDate(session.date)} · Literacy</p>
                </div>
                <div className="text-sm text-gray-400">{idx + 1} / {studentsWithActivity.length}</div>
              </div>

              {/* 1. Reading */}
              <PrintSection number={1} title="Reading">
                <p className="font-semibold text-gray-800 mb-2 text-sm">{activity.reading.title}</p>
                <p className="text-gray-700 leading-relaxed text-sm">{activity.reading.passage}</p>
              </PrintSection>

              {/* 2. Questions */}
              <PrintSection number={2} title="Questions">
                <ol className="space-y-3">
                  {activity.questions.map((q, i) => (
                    <li key={i}>
                      <p className="text-sm text-gray-700 mb-1"><span className="font-bold">{i + 1}.</span> {q}</p>
                      <div className="border-b border-gray-400 h-5" />
                    </li>
                  ))}
                </ol>
              </PrintSection>

              {/* 3. Writing */}
              <PrintSection number={3} title="Writing">
                <p className="text-sm text-gray-700 mb-3">{activity.writing.prompt}</p>
                {activity.writing.support && <PrintSupportBlock support={activity.writing.support} />}
                <div className="space-y-3 mt-3">
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className="border-b border-gray-400 h-5" />
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
    <div className="border border-gray-300 rounded-lg p-3 mb-2 bg-gray-50">
      {support.wordBank && (
        <div>
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Word Bank</p>
          <div className="flex flex-wrap gap-1.5">
            {support.wordBank.map((w) => (
              <span key={w} className="border border-gray-400 text-gray-700 text-sm font-medium px-2 py-0.5 rounded">
                {w}
              </span>
            ))}
          </div>
        </div>
      )}
      {support.vocabularyList && (
        <div>
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">
            Vocabulary ({support.vocabularyList[0]?.language})
          </p>
          <div className="grid grid-cols-3 gap-x-4 gap-y-1">
            {support.vocabularyList.map((v) => (
              <div key={v.word} className="flex items-center gap-1.5 text-sm">
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
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Sentence Starters</p>
          <ul className="space-y-1">
            {support.sentenceStarters.map((s, i) => (
              <li key={i} className="text-sm text-gray-700 border-l-2 border-gray-400 pl-2">{s}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function PrintSection({ number, title, children }: { number: number; title: string; children: React.ReactNode }) {
  return (
    <div className="mb-3">
      <div className="flex items-center gap-2 mb-2">
        <span className="w-5 h-5 rounded-full bg-gray-800 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">{number}</span>
        <h2 className="font-bold text-gray-800 text-sm uppercase tracking-wider">{title}</h2>
      </div>
      <div className="border border-gray-200 rounded-xl p-3 bg-white">
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
