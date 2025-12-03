import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/index.jsx"; 
import Cadastro from "./pages/Cadastro/cadastro.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cadastro" element={<Cadastro />} />
    </Routes>
  );
}

export default App;
