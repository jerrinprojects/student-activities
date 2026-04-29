import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LiteracyPage from './pages/LiteracyPage';
import StudentPage from './pages/StudentPage';
import SessionPage from './pages/SessionPage';
import PrintPage from './pages/PrintPage';
import NumeracyPage from './pages/NumeracyPage';
import AddSubPage from './pages/AddSubPage';
import WorksheetPage from './pages/WorksheetPage';
import AddSubDatePage from './pages/AddSubDatePage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/literacy" element={<LiteracyPage />} />
        <Route path="/literacy/print" element={<PrintPage />} />
        <Route path="/literacy/:student" element={<StudentPage />} />
        <Route path="/literacy/:student/:date" element={<SessionPage />} />
        <Route path="/numeracy" element={<NumeracyPage />} />
        <Route path="/numeracy/add-sub" element={<AddSubPage />} />
        <Route path="/numeracy/add-sub/:date" element={<AddSubDatePage />} />
        <Route path="/numeracy/add-sub/set/:setId" element={<WorksheetPage />} />
      </Routes>
    </BrowserRouter>
  );
}
