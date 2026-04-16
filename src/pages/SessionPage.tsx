import { useNavigate, useParams } from 'react-router-dom';
import { STUDENTS, LITERACY_SESSIONS } from '../data/literacy';

export default function SessionPage() {
  const navigate = useNavigate();
  const { student, date } = useParams<{ student: string; date: string }>();

  const studentName = STUDENTS.find((s) => s.toLowerCase() === student?.toLowerCase());
  const session = LITERACY_SESSIONS.find((s) => s.date === date);

  if (!studentName || !session) {
    return <div className="p-8 text-center text-gray-500">Session not found.</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center gap-3 no-print">
        <button
          onClick={() => navigate(`/literacy/${student}`)}
          className="text-gray-500 hover:text-gray-800 text-sm font-medium"
        >
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

        {/* Reading */}
        <Section number={1} title="Reading" color="blue">
          <h3 className="font-bold text-lg text-gray-800 mb-3">{session.reading.title}</h3>
          <p className="text-gray-700 leading-relaxed text-base">{session.reading.passage}</p>
        </Section>

        {/* Questions */}
        <Section number={2} title="Questions" color="green">
          <ol className="space-y-3">
            {session.questions.map((q, i) => (
              <li key={i} className="flex gap-3">
                <span className="font-bold text-gray-500 w-5 flex-shrink-0">{i + 1}.</span>
                <span className="text-gray-700">{q}</span>
              </li>
            ))}
          </ol>
        </Section>

        {/* Writing */}
        <Section number={3} title="Writing" color="orange">
          <p className="text-gray-700 mb-4">{session.writing.prompt}</p>
          <div className="space-y-3">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="border-b border-gray-300 h-8" />
            ))}
          </div>
        </Section>
      </main>
    </div>
  );
}

function Section({
  number, title, color, children,
}: {
  number: number;
  title: string;
  color: 'blue' | 'green' | 'orange';
  children: React.ReactNode;
}) {
  const colors = {
    blue: 'bg-blue-50 border-blue-200',
    green: 'bg-green-50 border-green-200',
    orange: 'bg-orange-50 border-orange-200',
  };
  const badge = {
    blue: 'bg-blue-200 text-blue-800',
    green: 'bg-green-200 text-green-800',
    orange: 'bg-orange-200 text-orange-800',
  };

  return (
    <div className={`rounded-2xl border-2 p-5 mb-4 ${colors[color]}`}>
      <div className="flex items-center gap-2 mb-4">
        <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${badge[color]}`}>
          {number}
        </span>
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
