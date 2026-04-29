import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { STUDENTS, LITERACY_SESSIONS, type WritingSupport } from '../data/literacy';

export default function SessionPage() {
  const navigate = useNavigate();
  const { student, date } = useParams<{ student: string; date: string }>();
  const [activeSet, setActiveSet] = useState(0);

  const studentName = STUDENTS.find((s) => s.toLowerCase() === student?.toLowerCase());
  const session = LITERACY_SESSIONS.find((s) => s.date === date);
  const activitySets = studentName ? session?.activities[studentName] : undefined;

  if (!studentName || !session || !activitySets || activitySets.length === 0) {
    return <div className="p-8 text-center text-gray-500">Session not found.</div>;
  }

  const activity = activitySets[activeSet];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center gap-3 no-print">
        <button onClick={() => navigate(`/literacy/${student}`)} className="text-gray-500 hover:text-gray-800 text-sm font-medium">
          ← {studentName}
        </button>
        <span className="text-gray-300">/</span>
        <h1 className="text-xl font-bold text-gray-800">{formatDate(session.date)}</h1>
        <button
          onClick={() => window.print()}
          className="ml-auto flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
        >
          Print
        </button>
      </header>

      <main className="flex-1 p-6 max-w-2xl mx-auto w-full">
        <div className="mb-4 flex items-center gap-3">
          <div className="text-2xl font-bold text-gray-800">{studentName}</div>
          <div className="text-sm text-gray-500 bg-white border border-gray-200 rounded-full px-3 py-1">
            {formatDate(session.date)}
          </div>
        </div>

        {/* Set tabs */}
        <div className="flex gap-2 mb-5">
          {activitySets.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveSet(i)}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-colors ${
                activeSet === i
                  ? 'bg-violet-600 text-white'
                  : 'bg-white border border-gray-200 text-gray-600 hover:border-violet-300'
              }`}
            >
              Set {i + 1}
            </button>
          ))}
        </div>

        {/* 1. Reading */}
        <Section number={1} title="Reading" color="blue">
          <h3 className="font-bold text-lg text-gray-800 mb-3">{activity.reading.title}</h3>
          <p className="text-gray-700 leading-relaxed text-base">{activity.reading.passage}</p>
        </Section>

        {/* 2. Questions */}
        <Section number={2} title="Questions" color="green">
          <ol className="space-y-3">
            {activity.questions.map((q, i) => (
              <li key={i} className="flex gap-3">
                <span className="font-bold text-gray-500 w-5 flex-shrink-0">{i + 1}.</span>
                <span className="text-gray-700">{q}</span>
              </li>
            ))}
          </ol>
        </Section>

        {/* 3. Writing */}
        <Section number={3} title="Writing" color="orange">
          <p className="text-gray-700 mb-1">{activity.writing.prompt}</p>
          {activity.writing.promptTranslation && (
            <p className="text-sm text-gray-400 italic mb-4">{activity.writing.promptTranslation}</p>
          )}
          {activity.writing.support && <SupportBlock support={activity.writing.support} />}
          <div className="space-y-3 mt-4">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="border-b border-gray-300 h-8" />
            ))}
          </div>
        </Section>
      </main>
    </div>
  );
}

function SupportBlock({ support }: { support: WritingSupport }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4 mb-2">
      {support.wordBank && (
        <div className="mb-3">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Word Bank</p>
          <div className="flex flex-wrap gap-2">
            {support.wordBank.map((w) => (
              <span key={w} className="bg-blue-50 border border-blue-200 text-blue-800 text-sm font-medium px-2 py-0.5 rounded-lg">
                {w}
              </span>
            ))}
          </div>
        </div>
      )}
      {support.vocabularyList && (
        <div>
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
            Vocabulary — {support.vocabularyList[0]?.language}
          </p>
          <div className="grid grid-cols-2 gap-1">
            {support.vocabularyList.map((v) => (
              <div key={v.word} className="flex items-center gap-2 bg-violet-50 rounded-lg px-3 py-1.5">
                <span className="font-semibold text-violet-800 text-sm">{v.word}</span>
                <span className="text-gray-400 text-xs">→</span>
                <span className="text-gray-700 text-sm">{v.translation}</span>
              </div>
            ))}
          </div>
        </div>
      )}
      {support.sentenceStarters && (
        <div className="mt-3">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Sentence Starters</p>
          <ul className="space-y-1">
            {support.sentenceStarters.map((s, i) => (
              <li key={i} className="text-sm text-gray-700 bg-yellow-50 border border-yellow-200 rounded-lg px-3 py-1.5">
                {s}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function Section({ number, title, color, children }: { number: number; title: string; color: 'blue' | 'green' | 'orange'; children: React.ReactNode }) {
  const colors = { blue: 'bg-blue-50 border-blue-200', green: 'bg-green-50 border-green-200', orange: 'bg-orange-50 border-orange-200' };
  const badge = { blue: 'bg-blue-200 text-blue-800', green: 'bg-green-200 text-green-800', orange: 'bg-orange-200 text-orange-800' };
  return (
    <div className={`rounded-2xl border-2 p-5 mb-4 ${colors[color]}`}>
      <div className="flex items-center gap-2 mb-4">
        <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${badge[color]}`}>{number}</span>
        <h2 className="font-bold text-gray-800 text-base uppercase tracking-wide">{title}</h2>
      </div>
      {children}
    </div>
  );
}

function formatDate(dateStr: string) {
  return new Date(dateStr + 'T00:00:00').toLocaleDateString('en-NZ', {
    weekday: 'long', day: 'numeric', month: 'long', year: 'numeric',
  });
}
