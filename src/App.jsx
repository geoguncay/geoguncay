import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/home/Home";
import NotFound from "./components/pages/not found/NotFound";
import Projects from "./components/pages/projects/Projects";

function App() {
  return (
    <>
    <BrowserRouter basename="/geoguncay/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
