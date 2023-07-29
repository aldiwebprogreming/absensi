import logo from "./logo.svg";
import "./App.css";
import Home from "./page/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AbsenMasuk from "./page/AbsenMasuk";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/absenmasuk" element={<AbsenMasuk />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
