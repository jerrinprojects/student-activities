import { useNavigate } from 'react-router-dom';
import { NUMERACY_SESSIONS } from '../data/numeracy';

export default function AddSubPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center gap-3">
        <button
          onClick={() => navigate('/numeracy')}
          className="text-gray-500 hover:text-gray-800 text-sm font-medium"
        >
          ← Numeracy
        </button>
        <span className="text-gray-300">/</span>
        <h1 className="text-xl font-bold text-gray-800">Addition &amp; Subtraction</h1>
      </header>

      <main className="flex-1 p-6">
        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Select a Date</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {NUMERACY_SESSIONS.map((session) => (
            <button
              key={session.date}
              onClick={() => navigate(`/numeracy/add-sub/${session.date}`)}
              className="flex items-center gap-4 p-5 rounded-2xl border-2 text-left transition-all bg-blue-100 border-blue-300 hover:bg-blue-200"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl bg-blue-200">
                📅
              </div>
              <div>
                <div className="font-bold text-gray-800 text-lg">{session.date}</div>
                <div className="text-sm text-gray-600 mt-0.5">{session.addSubSets.length} problem sets · 15 problems each</div>
              </div>
            </button>
          ))}
        </div>
      </main>
    </div>
  );
}
