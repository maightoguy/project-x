import "./App.css";
import DetailPage from "./components/DetailPage";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/id:" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
