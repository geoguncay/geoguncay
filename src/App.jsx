import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/home/Home";
import NotFound from "./components/pages/not found/NotFound";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="geoguncay/" element={<Home/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
