import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/index.jsx"; 
import Cadastro from "./pages/Cadastro/cadastro.jsx";
import RecuperarSenha from "./pages/RecuperarSenha/RecuperarSenha.jsx";

function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/recuperar-senha" element={<RecuperarSenha />} />
    </Routes>
  );
}

export default App;
