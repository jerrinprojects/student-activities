import { useNavigate, useParams } from 'react-router-dom';
import { ADD_SUB_SETS } from '../data/numeracy';

export default function WorksheetPage() {
  const { setId } = useParams<{ setId: string }>();
  const navigate = useNavigate();
  const set = ADD_SUB_SETS.find((s) => s.id === setId);

  if (!set) return <div className="p-8 text-gray-500">Problem set not found.</div>;

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
        <h1 className="text-xl font-bold text-gray-800">{set.label}</h1>
        <button
          onClick={() => window.print()}
          className="ml-auto bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
        >
          🖨 Print
        </button>
      </header>

      {/* Worksheet */}
      <main className="flex-1 p-6 max-w-2xl mx-auto w-full">
        {/* Print title */}
        <div className="print-only mb-6 border-b-2 border-gray-800 pb-3">
          <div className="text-lg font-bold text-gray-800">{set.label}</div>
          <div className="text-sm text-gray-500">{set.description}</div>
          <div className="mt-2 text-sm">Name: _________________________________ &nbsp;&nbsp; Date: _____________</div>
        </div>

        <div className="no-print mb-6">
          <h2 className="text-xl font-bold text-gray-800">{set.label}</h2>
          <p className="text-sm text-gray-500 mt-1">{set.description} · {set.problems.length} problems</p>
        </div>

        {/* Problems in a column layout */}
        <div className="grid grid-cols-3 gap-x-8 gap-y-10">
          {set.problems.map((p, i) => (
            <div key={i} className="flex flex-col items-end gap-1 font-mono text-2xl">
              <span className="text-gray-800">{p.a}</span>
              <div className="flex items-center gap-2 w-full justify-end border-b-2 border-gray-800 pb-1">
                <span className="text-gray-500 text-xl">{p.op}</span>
                <span className="text-gray-800">{p.b}</span>
              </div>
              {/* Answer line */}
              <div className="h-8 w-full" />
            </div>
          ))}
        </div>
      </main>

      <style>{`
        @media print {
          .no-print { display: none !important; }
          .print-only { display: block !important; }
          body { background: white; }
        }
        .print-only { display: none; }
      `}</style>
    </div>
  );
}
