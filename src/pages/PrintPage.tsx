import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { STUDENTS, LITERACY_SESSIONS, type WritingSupport, type SentenceStructure } from '../data/literacy';

const WRITING_BREAK_STUDENTS = new Set(['Joshua', 'Maverick', 'Jocasta']);

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

  const studentsWithActivity = STUDENTS.filter((name) => session.activities[name]?.length);

  // Total pages = sum of all sets across all students
  const totalPages = studentsWithActivity.reduce(
    (sum, name) => sum + (session.activities[name]?.length ?? 0), 0
  );
  let pageCounter = 0;

  return (
    <div>
      <div className="no-print fixed top-0 left-0 right-0 bg-white border-b border-gray-200 px-6 py-3 flex items-center gap-3 z-10 shadow-sm">
        <button onClick={() => navigate('/literacy')} className="text-gray-500 hover:text-gray-800 text-sm font-medium">← Back</button>
        <span className="text-gray-700 font-semibold">Print All — {formatDate(session.date)}</span>
        <span className="text-sm text-gray-400">({studentsWithActivity.length} students · {totalPages} pages)</span>
        <button
          onClick={() => window.print()}
          className="ml-auto bg-violet-600 hover:bg-violet-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
        >
          Print
        </button>
      </div>

      <div className="pt-16 print:pt-0">
        {studentsWithActivity.map((name) => {
          const sets = session.activities[name]!;
          return sets.map((activity, setIdx) => {
            pageCounter += 1;
            const currentPage = pageCounter;
            const isWritingBreak = WRITING_BREAK_STUDENTS.has(name);
            const pageClass = isWritingBreak
              ? 'print-page-flow p-6 max-w-2xl mx-auto print:max-w-none print:p-0'
              : 'print-page p-6 max-w-2xl mx-auto print:max-w-none print:p-0';
            const writingLines = isWritingBreak ? 16 : 8;

            const studentHeader = (suffix: string) => (
              <div className="flex items-center justify-between mb-4 border-b-2 border-gray-800 pb-3">
                <div>
                  <h1 className="text-2xl font-bold text-gray-800">{name}</h1>
                  <p className="text-sm text-gray-500 mt-0.5">{formatDate(session.date)} · {suffix} · Set {setIdx + 1}</p>
                </div>
                <div className="text-sm text-gray-400">{currentPage} / {totalPages}</div>
              </div>
            );

            return (
              <React.Fragment key={`${name}-${setIdx}`}>
                <div className={pageClass}>
                  {studentHeader('Literacy')}

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

                  {/* 3. Sentence Structure */}
                  {activity.sentenceStructure && (
                    <PrintSection number={3} title="Sentence Structure">
                      <PrintSentenceStructure ss={activity.sentenceStructure} />
                    </PrintSection>
                  )}
                </div>

                {/* Page 2 — Spelling + Writing */}
                <div className="print-page p-6 max-w-2xl mx-auto print:max-w-none print:p-0">
                  {studentHeader('Spelling & Writing')}

                  {activity.writing.support && (
                    <PrintWordPracticeTable support={activity.writing.support} />
                  )}

                  <PrintSection number={activity.sentenceStructure ? 4 : 3} title="Writing">
                    <p className="text-sm text-gray-700 mb-1">{activity.writing.prompt}</p>
                    {activity.writing.promptTranslation && (
                      <p className="text-xs text-gray-400 italic mb-3">{activity.writing.promptTranslation}</p>
                    )}
                    {activity.writing.support && <PrintSupportBlock support={activity.writing.support} />}
                    <div className="space-y-3 mt-3">
                      {[...Array(writingLines)].map((_, i) => (
                        <div key={i} className="border-b border-gray-400 h-5" />
                      ))}
                    </div>
                  </PrintSection>
                </div>
              </React.Fragment>
            );
          });
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

function PrintSentenceStructure({ ss }: { ss: SentenceStructure }) {
  return (
    <div>
      <p className="text-xs text-gray-600 mb-2">Build 5 sentences. Choose a <strong>subject</strong> and a <strong>verb</strong>.</p>
      <div className="flex gap-4 mb-2">
        <div>
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Subjects</p>
          <div className="flex flex-wrap gap-1">
            {ss.subjects.map((s) => (
              <span key={s} className="border border-gray-400 text-gray-700 text-xs font-medium px-2 py-0.5 rounded">{s}</span>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Verbs</p>
          <div className="flex flex-wrap gap-1">
            {ss.verbs.map((v) => (
              <span key={v} className="border border-gray-400 text-gray-700 text-xs font-medium px-2 py-0.5 rounded">{v}</span>
            ))}
          </div>
        </div>
      </div>
      <p className="text-xs text-gray-500 italic mb-2">Example: <span className="text-gray-700">{ss.subjects[0]} {ss.verbs[0]}.</span></p>
      <div className="space-y-2.5">
        {[1, 2, 3, 4, 5].map((n) => (
          <div key={n} className="flex items-end gap-2">
            <span className="text-xs text-gray-400 w-3 flex-shrink-0">{n}.</span>
            <div className="flex-1 border-b border-gray-400 h-5" />
          </div>
        ))}
      </div>
    </div>
  );
}

function PrintSection({ number, title, children, breakBefore }: { number: number; title: string; children: React.ReactNode; breakBefore?: boolean }) {
  return (
    <div className={`mb-3${breakBefore ? ' print-writing-break' : ''}`}>
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

function PrintWordPracticeTable({ support }: { support: WritingSupport }) {
  type PracticeWord = { word: string; translation?: string };
  let words: PracticeWord[] = [];
  let hasTranslation = false;

  if (support.vocabularyList && support.vocabularyList.length > 0) {
    hasTranslation = true;
    words = support.vocabularyList.map((v) => ({ word: v.word, translation: v.translation }));
  } else if (support.wordBank && support.wordBank.length > 0) {
    words = support.wordBank.map((w) => ({ word: w }));
  }

  if (words.length === 0) return null;

  return (
    <div className="mt-4">
      <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Word Practice</p>
      <table className="w-full border-collapse text-xs">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-2 py-1 text-left font-semibold">Word</th>
            {hasTranslation && <th className="border border-gray-300 px-2 py-1 text-left font-semibold">Translation</th>}
            {[1, 2, 3, 4, 5].map((n) => (
              <th key={n} className="border border-gray-300 px-2 py-1 text-center font-semibold">{n}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {words.map((w, i) => (
            <tr key={i}>
              <td className="border border-gray-300 px-2 py-1.5 font-semibold text-gray-800">{w.word}</td>
              {hasTranslation && <td className="border border-gray-300 px-2 py-1.5 text-gray-600">{w.translation}</td>}
              {[1, 2, 3, 4, 5].map((n) => (
                <td key={n} className="border border-gray-300 px-2 py-1.5 min-w-[60px]" />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function formatDate(dateStr: string) {
  return new Date(dateStr + 'T00:00:00').toLocaleDateString('en-NZ', {
    day: 'numeric', month: 'long', year: 'numeric',
  });
}
