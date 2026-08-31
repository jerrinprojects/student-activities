import { useNavigate } from 'react-router-dom';
import { HANDWRITING_SHEETS, LEVELS } from '../data/handwriting';

export default function HandwritingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center gap-3">
        <button onClick={() => navigate('/')} className="text-gray-500 hover:text-gray-800 text-sm font-medium">
          ← Home
        </button>
        <span className="text-gray-300">/</span>
        <h1 className="text-xl font-bold text-gray-800">Handwriting</h1>
      </header>

      <main className="flex-1 p-6">
        <div className="mb-6 bg-amber-50 border border-amber-200 rounded-xl p-4 max-w-3xl">
          <p className="text-sm text-amber-900 font-semibold mb-1">These sheets are not tied to a student.</p>
          <p className="text-sm text-amber-900">
            Each sheet is one week: five minutes a day, Monday to Friday, on one double-sided page with
            a blank name line. Pick the level, open the week and print as many copies as you need.
            The four weeks cover every lowercase letter, then the cycle starts again.
          </p>
        </div>

        {LEVELS.map(({ level, name, forWho }) => (
          <section key={level} className="mb-8">
            <h2 className="text-sm font-bold text-gray-800">{name}</h2>
            <p className="text-sm text-gray-500 mb-3">{forWho}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {HANDWRITING_SHEETS.filter((s) => s.level === level).map((s) => (
                <button
                  key={s.id}
                  onClick={() => navigate(`/handwriting/print/${s.id}`)}
                  className="text-left p-4 bg-white rounded-xl border-2 border-gray-200 hover:border-amber-300 hover:bg-amber-50 transition-all"
                >
                  <div className="text-xs font-bold text-amber-700 uppercase tracking-wider">Week {s.week}</div>
                  <div className="font-bold text-gray-800 mt-0.5">{s.title}</div>
                  <div className="text-xs text-gray-500 mt-1">{s.focusSummary}</div>
                </button>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}
