import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import EligiblityResult from "./pages/EligiblityResult";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/eligibility-results" element={<EligiblityResult />} />
      </Routes>
    </BrowserRouter>
  );
}
