import { useNavigate, useParams } from 'react-router-dom';
import { NUMERACY_SESSIONS } from '../data/numeracy';

export default function AddSubDatePage() {
  const navigate = useNavigate();
  const { date } = useParams<{ date: string }>();

  const session = NUMERACY_SESSIONS.find((s) => s.date === date);

  if (!session) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-gray-500">Session not found for date: {date}</div>
      </div>
    );
  }

  const sets = session.addSubSets;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header — hidden on print */}
      <header className="no-print bg-white border-b border-gray-200 px-6 py-4 flex items-center gap-3">
        <button
          onClick={() => navigate('/numeracy/add-sub')}
          className="text-gray-500 hover:text-gray-800 text-sm font-medium"
        >
          ← Addition &amp; Subtraction
        </button>
        <span className="text-gray-300">/</span>
        <h1 className="text-xl font-bold text-gray-800">{date}</h1>
        <button
          onClick={() => window.print()}
          className="ml-auto bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
        >
          🖨 Print
        </button>
      </header>

      <main className="flex-1 p-6">
        {/* Print header */}
        <div className="print-only mb-4 border-b-2 border-gray-800 pb-3">
          <div className="text-lg font-bold">Addition &amp; Subtraction — {date}</div>
          <div className="mt-2 text-sm">Name: _________________________________ &nbsp;&nbsp; Date: _____________</div>
        </div>

        {/* 4-column table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                {sets.map((set) => (
                  <th
                    key={set.id}
                    className="border-2 border-gray-300 px-4 py-3 text-center bg-gray-100 text-sm font-bold text-gray-700 align-top"
                    style={{ width: '25%' }}
                  >
                    <div>{set.label}</div>
                    <div className="text-xs font-normal text-gray-500 mt-1">{set.description}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 15 }).map((_, rowIdx) => (
                <tr key={rowIdx}>
                  {sets.map((set) => {
                    const p = set.problems[rowIdx];
                    return (
                      <td
                        key={set.id}
                        className="border border-gray-200 px-3 py-2 align-middle"
                      >
                        <div className="problem-row font-mono text-lg flex items-center gap-1">
                          <span className="text-gray-400 text-sm mr-1">{rowIdx + 1}.</span>
                          <span>{p.a}</span>
                          <span className="text-gray-600">{p.op}</span>
                          <span>{p.b}</span>
                          <span className="text-gray-600">=</span>
                          <span className="answer-line inline-block border-b-2 border-gray-700 w-12" />
                        </div>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Answer key — on print this starts on page 2 */}
        <div className="answer-key mt-10 pt-8 border-t-4 border-dashed border-gray-400">
          <div className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4 no-print">Answer Key</div>
          <div className="print-only text-base font-bold mb-4">✅ Answer Key</div>
          <table className="w-full border-collapse">
            <thead>
              <tr>
                {sets.map((set) => (
                  <th
                    key={set.id}
                    className="border-2 border-gray-300 px-4 py-2 text-center bg-green-50 text-sm font-bold text-gray-700"
                    style={{ width: '25%' }}
                  >
                    {set.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 15 }).map((_, rowIdx) => (
                <tr key={rowIdx}>
                  {sets.map((set) => {
                    const p = set.problems[rowIdx];
                    const answer = p.op === '+' ? p.a + p.b : p.a - p.b;
                    return (
                      <td
                        key={set.id}
                        className="border border-gray-200 px-4 py-2 align-middle"
                      >
                        <div className="font-mono text-base flex items-center gap-1">
                          <span className="text-gray-400 text-sm mr-1">{rowIdx + 1}.</span>
                          <span>{p.a}</span>
                          <span className="text-gray-500">{p.op}</span>
                          <span>{p.b}</span>
                          <span className="text-gray-500">=</span>
                          <span className="font-bold text-green-700">{answer}</span>
                        </div>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      <style>{`
        @media print {
          .no-print { display: none !important; }
          .print-only { display: block !important; }
          body, html { background: white; margin: 0; }
          main { padding: 4mm 6mm !important; }
          .answer-key { page-break-before: always; }

          /* Shrink problems table to fit one page */
          table { font-size: 9pt !important; }
          table th { padding: 3px 6px !important; font-size: 8pt !important; }
          table td { padding: 2px 6px !important; }
          .problem-row { font-size: 9pt !important; }
          .answer-line { width: 24px !important; }
        }
        .print-only { display: none; }
      `}</style>
    </div>
  );
}
