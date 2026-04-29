import { useNavigate, useParams } from 'react-router-dom';
import { STUDENTS, LITERACY_SESSIONS } from '../data/literacy';

export default function StudentPage() {
  const navigate = useNavigate();
  const { student } = useParams<{ student: string }>();

  const studentName = STUDENTS.find((s) => s.toLowerCase() === student?.toLowerCase());

  if (!studentName) {
    return <div className="p-8 text-center text-gray-500">Student not found.</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center gap-3">
        <button
          onClick={() => navigate('/literacy')}
          className="text-gray-500 hover:text-gray-800 text-sm font-medium"
        >
          ← Literacy
        </button>
        <span className="text-gray-300">/</span>
        <h1 className="text-xl font-bold text-gray-800">{studentName}</h1>
      </header>

      <main className="flex-1 p-6">
        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Sessions</h2>
        {LITERACY_SESSIONS.length === 0 ? (
          <p className="text-gray-500">No sessions yet.</p>
        ) : (
          <div className="flex flex-col gap-3 max-w-lg">
            {LITERACY_SESSIONS.map((session, i) => (
              <button
                key={session.date}
                onClick={() => navigate(`/literacy/${student}/${session.date}`)}
                className="flex items-center gap-4 p-4 bg-white rounded-xl border-2 border-gray-200 hover:border-violet-300 hover:bg-violet-50 text-left transition-all"
              >
                <div className="w-10 h-10 bg-violet-100 text-violet-700 rounded-lg flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {formatDay(session.date)}
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-gray-800">{formatDate(session.date)}</div>
                  <div className="text-sm text-gray-500 mt-0.5">{studentName ? session.activities[studentName]?.[0]?.reading.title : ''}</div>
                </div>
                {i === 0 && (
                  <span className="text-xs font-semibold bg-violet-100 text-violet-700 px-2 py-0.5 rounded-full">
                    Latest
                  </span>
                )}
                <span className="text-gray-400">→</span>
              </button>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

function formatDate(dateStr: string) {
  return new Date(dateStr + 'T00:00:00').toLocaleDateString('en-NZ', {
    day: 'numeric', month: 'long', year: 'numeric',
  });
}

function formatDay(dateStr: string) {
  return new Date(dateStr + 'T00:00:00').toLocaleDateString('en-NZ', { day: 'numeric', month: 'short' });
}
