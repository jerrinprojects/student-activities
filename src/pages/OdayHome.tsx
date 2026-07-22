import { useNavigate } from 'react-router-dom';
import { ODAY_SESSIONS } from '../data/oday';

export default function OdayHome() {
  const navigate = useNavigate();

  const byWeek = ODAY_SESSIONS.reduce<Record<number, typeof ODAY_SESSIONS>>((acc, d) => {
    (acc[d.week] ||= []).push(d);
    return acc;
  }, {});

  const weekNumbers = Object.keys(byWeek)
    .map(Number)
    .sort((a, b) => a - b);

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col">
      <header className="bg-white border-b border-stone-200 px-6 py-4 flex items-center gap-4">
        <button
          onClick={() => navigate('/')}
          className="text-stone-500 hover:text-stone-800 text-sm font-medium"
        >
          ← Back
        </button>
        <div>
          <h1 className="text-xl font-bold text-stone-800">Oday · Pre-Reader Programme</h1>
          <p className="text-xs text-stone-500 mt-0.5">Year 7 · 10-week alphabet + sight word programme · 60 min/day</p>
        </div>
      </header>

      <main className="flex-1 p-6 max-w-5xl w-full mx-auto">
        {weekNumbers.length === 0 && (
          <div className="text-stone-500 text-center mt-16">No sessions yet.</div>
        )}

        {weekNumbers.map((wk) => {
          const days = byWeek[wk];
          return (
            <section key={wk} className="mb-8">
              <h2 className="text-sm font-bold text-stone-500 uppercase tracking-wider mb-3">
                Week {wk}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {days.map((d) => (
                  <button
                    key={d.date}
                    onClick={() => navigate(`/oday/print/${d.date}`)}
                    className="text-left bg-white border-2 border-stone-200 hover:border-stone-800 rounded-xl p-4 transition-all"
                  >
                    <div className="flex items-baseline justify-between mb-2">
                      <span className="font-bold text-stone-800">Day {d.day}</span>
                      <span className="text-xs text-stone-500">{formatDate(d.date)}</span>
                    </div>
                    <p className="text-sm text-stone-700 leading-snug">{d.focus}</p>
                    <p className="text-xs text-stone-400 mt-2">
                      {d.activities.length} activities · ~60 min
                    </p>
                  </button>
                ))}
              </div>
            </section>
          );
        })}
      </main>
    </div>
  );
}

function formatDate(dateStr: string) {
  return new Date(dateStr + 'T00:00:00').toLocaleDateString('en-NZ', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
  });
}
