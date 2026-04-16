import { useNavigate } from 'react-router-dom';

const subjects = [
  {
    id: 'literacy',
    label: 'Literacy',
    icon: '📖',
    description: 'Reading, questions & writing activities',
    color: 'bg-violet-100 border-violet-300 hover:bg-violet-200',
    iconBg: 'bg-violet-200',
  },
];

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <h1 className="text-2xl font-bold text-gray-800">Lesson Activities</h1>
        <p className="text-sm text-gray-500 mt-1">Year 1 · Target Group</p>
      </header>

      <main className="flex-1 p-6">
        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Subjects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {subjects.map((s) => (
            <button
              key={s.id}
              onClick={() => navigate(`/${s.id}`)}
              className={`flex items-center gap-4 p-5 rounded-2xl border-2 text-left transition-all ${s.color}`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${s.iconBg}`}>
                {s.icon}
              </div>
              <div>
                <div className="font-bold text-gray-800 text-lg">{s.label}</div>
                <div className="text-sm text-gray-600 mt-0.5">{s.description}</div>
              </div>
            </button>
          ))}
        </div>
      </main>
    </div>
  );
}
