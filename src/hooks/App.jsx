import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CountryPage from "./pages/CountryPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/country/:code" element={<CountryPage />} />
      </Routes>
    </Router>
  );
}

export default App;
