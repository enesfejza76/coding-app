import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import HtmlAndCSS from "./Pages/HtmlAndCSS/HtmlAndCSS";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Html and CSS Course" element={<HtmlAndCSS />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
