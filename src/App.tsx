import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LiteracyPage from './pages/LiteracyPage';
import StudentPage from './pages/StudentPage';
import SessionPage from './pages/SessionPage';
import PrintPage from './pages/PrintPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/literacy" element={<LiteracyPage />} />
        <Route path="/literacy/print" element={<PrintPage />} />
        <Route path="/literacy/:student" element={<StudentPage />} />
        <Route path="/literacy/:student/:date" element={<SessionPage />} />
      </Routes>
    </BrowserRouter>
  );
}
