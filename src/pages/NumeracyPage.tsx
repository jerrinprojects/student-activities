import { useNavigate } from 'react-router-dom';

const sections = [
  {
    id: 'add-sub',
    label: 'Addition & Subtraction',
    icon: '➕',
    description: 'Column problems — with and without renaming',
    color: 'bg-blue-100 border-blue-300 hover:bg-blue-200',
    iconBg: 'bg-blue-200',
  },
];

export default function NumeracyPage() {
  const navigate = useNavigate();
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
        <h1 className="text-xl font-bold text-gray-800">Numeracy</h1>
      </header>

      <main className="flex-1 p-6">
        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Topics</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => navigate(`/numeracy/${s.id}`)}
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
