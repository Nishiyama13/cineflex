import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Header";
import EscolhaDeSessao from "../pages/EscolhaDeSessao";
import EscolhaDeAssento from "../pages/EscolhaDeAssento";
import Sucesso from "../pages/Sucesso";

import EscolhaDeFilme from "../pages/EscolhaDeFilme";
import Footer from "./Footer";
import { useState } from "react";

export default function App() {
  const [nameUsuario, setNameUsuario] = useState("");
  const [cpfUsuario, setCpfUsuario] = useState("");
  const [ids, setIds] = useState([]);
  const [poltronas, setPoltronas] = useState([]);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<EscolhaDeFilme />} />
        <Route path="/sessoes/:idFilme" element={<EscolhaDeSessao />} />
        <Route
          path="/assentos/:idSessao"
          element={
            <EscolhaDeAssento
              nameUsuario={nameUsuario}
              setNameUsuario={setNameUsuario}
              cpfUsuario={cpfUsuario}
              setCpfUsuario={setCpfUsuario}
              ids={ids}
              setIds={setIds}
              poltronas={poltronas}
              setPoltronas={setPoltronas}
            />
          }
        />
        <Route
          path="/sucesso"
          element={
            <Sucesso
              nomeUsuario={nameUsuario}
              cpfUsuario={cpfUsuario}
              poltronas={poltronas}
            />
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

// nome={nome} cpf={cpf}  assento=={assento} numeroAssento={numeroAssento}
