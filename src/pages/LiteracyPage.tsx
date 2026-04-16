import { useNavigate } from 'react-router-dom';
import { STUDENTS, LITERACY_SESSIONS } from '../data/literacy';

const avatarColors = [
  'bg-violet-200 text-violet-800',
  'bg-blue-200 text-blue-800',
  'bg-green-200 text-green-800',
  'bg-orange-200 text-orange-800',
  'bg-pink-200 text-pink-800',
];

export default function LiteracyPage() {
  const navigate = useNavigate();
  const latestDate = LITERACY_SESSIONS[0]?.date ?? null;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center gap-3">
        <button
          onClick={() => navigate('/')}
          className="text-gray-500 hover:text-gray-800 text-sm font-medium"
        >
          ← Home
        </button>
        <span className="text-gray-300">/</span>
        <h1 className="text-xl font-bold text-gray-800">Literacy</h1>
        <div className="ml-auto flex gap-3">
          <button
            onClick={() => navigate('/literacy/print')}
            className="flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
          >
            Print All
          </button>
        </div>
      </header>

      <main className="flex-1 p-6">
        {latestDate && (
          <p className="text-sm text-gray-500 mb-4">
            Latest session: <span className="font-semibold text-gray-700">{formatDate(latestDate)}</span>
          </p>
        )}
        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Students</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {STUDENTS.map((name, i) => (
            <button
              key={name}
              onClick={() => navigate(`/literacy/${name.toLowerCase()}`)}
              className="flex items-center gap-4 p-5 bg-white rounded-2xl border-2 border-gray-200 hover:border-violet-300 hover:bg-violet-50 text-left transition-all"
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold ${avatarColors[i % avatarColors.length]}`}>
                {name[0]}
              </div>
              <div>
                <div className="font-bold text-gray-800 text-lg">{name}</div>
                <div className="text-sm text-gray-500">{LITERACY_SESSIONS.length} session{LITERACY_SESSIONS.length !== 1 ? 's' : ''}</div>
              </div>
              <span className="ml-auto text-gray-400 text-lg">→</span>
            </button>
          ))}
        </div>
      </main>
    </div>
  );
}

function formatDate(dateStr: string) {
  return new Date(dateStr + 'T00:00:00').toLocaleDateString('en-NZ', {
    weekday: 'long', day: 'numeric', month: 'long', year: 'numeric',
  });
}
