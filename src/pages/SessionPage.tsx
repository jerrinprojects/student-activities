import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { STUDENTS, LITERACY_SESSIONS, type WritingSupport } from '../data/literacy';

type SectionColor = 'blue' | 'green' | 'purple' | 'yellow' | 'orange';

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

        {/* 3. Sentence Structure */}
        {activity.sentenceStructure && (
          <Section number={3} title="Sentence Structure" color="purple">
            <p className="text-sm text-gray-600 mb-3">Build 3 sentences. Choose a <strong>subject</strong> and a <strong>verb</strong>.</p>
            <div className="flex gap-6 mb-4">
              <div>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Subjects</p>
                <div className="flex flex-wrap gap-1.5">
                  {activity.sentenceStructure.subjects.map((s) => (
                    <span key={s} className="bg-purple-100 border border-purple-200 text-purple-800 text-sm font-medium px-2.5 py-0.5 rounded-lg">{s}</span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Verbs</p>
                <div className="flex flex-wrap gap-1.5">
                  {activity.sentenceStructure.verbs.map((v) => (
                    <span key={v} className="bg-indigo-100 border border-indigo-200 text-indigo-800 text-sm font-medium px-2.5 py-0.5 rounded-lg">{v}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="space-y-4">
              {[1, 2, 3].map((n) => (
                <div key={n} className="flex items-end gap-2">
                  <span className="text-gray-400 text-sm font-medium w-4 flex-shrink-0">{n}.</span>
                  <div className="flex-1 border-b-2 border-gray-300 h-8" />
                </div>
              ))}
            </div>
          </Section>
        )}

        {/* 4. Spelling */}
        {(() => {
          const words = activity.writing.support?.wordBank
            ?? activity.writing.support?.vocabularyList?.map((v) => v.word)
            ?? [];
          return words.length > 0 ? (
            <Section number={activity.sentenceStructure ? 4 : 3} title="Spelling" color="yellow">
              <p className="text-sm text-gray-600 mb-3">Write each word 3 times.</p>
              <div className="grid gap-y-1.5">
                {words.map((word) => (
                  <div key={word} className="grid grid-cols-[120px_1fr_1fr_1fr] gap-2 items-center">
                    <span className="bg-yellow-100 border border-yellow-200 text-yellow-900 text-sm font-semibold px-2.5 py-1 rounded-lg text-center">{word}</span>
                    <div className="border-b-2 border-gray-300 h-7" />
                    <div className="border-b-2 border-gray-300 h-7" />
                    <div className="border-b-2 border-gray-300 h-7" />
                  </div>
                ))}
              </div>
            </Section>
          ) : null;
        })()}

        {/* 5. Writing */}
        <Section number={activity.sentenceStructure ? 5 : (activity.writing.support?.wordBank || activity.writing.support?.vocabularyList ? 4 : 3)} title="Writing" color="orange">
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

function Section({ number, title, color, children }: { number: number; title: string; color: SectionColor; children: React.ReactNode }) {
  const colors: Record<SectionColor, string> = { blue: 'bg-blue-50 border-blue-200', green: 'bg-green-50 border-green-200', orange: 'bg-orange-50 border-orange-200', purple: 'bg-purple-50 border-purple-200', yellow: 'bg-yellow-50 border-yellow-200' };
  const badge: Record<SectionColor, string> = { blue: 'bg-blue-200 text-blue-800', green: 'bg-green-200 text-green-800', orange: 'bg-orange-200 text-orange-800', purple: 'bg-purple-200 text-purple-800', yellow: 'bg-yellow-200 text-yellow-800' };
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
