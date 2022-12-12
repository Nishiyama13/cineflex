import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

export default function EscolhaDeAssento(props) {
  const {
    nameUsuario,
    setNameUsuario,
    cpfUsuario,
    setCpfUsuario,
    ids,
    setIds,
    poltronas,
    setPoltronas,
  } = props;

  const [assentos, setAssentos] = useState(undefined);
  const { idSessao } = useParams();
  const URLAssentos = `https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`;

  const reserva = { ids: [], name: "", cpf: "" }; //formato esperado pela API
  const navigate = useNavigate();

  useEffect(() => {
    const promise = axios.get(URLAssentos);

    promise.then(res => {
      setAssentos(res.data);
    });

    promise.catch(err => console.log(err.response.data));
  }, []);

  if (assentos === undefined) {
    return <div>Carregando...</div>;
  }
  console.log(assentos);

  function salvarUsuario(e) {
    e.preventDefault();
    // reserva.ids = assentosEscolhidos;
    reserva.name = nameUsuario;
    reserva.cpf = cpfUsuario;
    //reserva.ids = ids;

    alert(`nome: ${nameUsuario}cpf:${cpfUsuario} resrva${reserva}`);

    const promise = axios.post(
      "https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many",
      reserva
    );
    promise.then(() => navigate("/sucesso"));
    promise.catch(err => console.log(err.response.data));
  }

  function addAssento(a) {
    console.log(a); //ex: {id: 4486, name: '36', isAvailable: false}

    if (a.isAvailable === true) {
      const assentosSelecionados = [...poltronas, a.name];
      setPoltronas(assentosSelecionados);
      console.log(assentosSelecionados);
    } else {
      alert(`Assento indisponível, escolha outro!`);
    }
  }

  return (
    <>
      <ContainerPage>
        <h1>Selecione o(s) assento(s)</h1>

        <ul>
          <ContainerAssentos>
            {assentos.seats.map(a => (
              <li key={a.id}>
                <button onClick={() => addAssento(a)}>{Number(a.name)}</button>
              </li>
            ))}
          </ContainerAssentos>
        </ul>

        <ContainerOpcoes>
          <div>
            <button></button>
            <p>Selecionado</p>
          </div>
          <div>
            <button></button>
            <p>Disponível</p>
          </div>
          <div>
            <button></button>
            <p>Indisponível</p>
          </div>
        </ContainerOpcoes>
      </ContainerPage>
      <ContainerInputs>
        <h2>Nome do Comprador</h2>
        <form onSubmit={salvarUsuario}>
          <input
            placeholder="Digite seu nome..."
            type="text"
            value={nameUsuario}
            onChange={e => setNameUsuario(e.target.value)}
          />
          <h2>CPF do Comprador</h2>
          <input
            placeholder="Digite seu CPF..."
            type="number"
            value={cpfUsuario}
            onChange={e => setCpfUsuario(e.target.value)}
          />
          <ButtonReserva>
            <button type="submit">Reservar assento(s)</button>
          </ButtonReserva>{" "}
        </form>
      </ContainerInputs>
    </>
  );
}
//disponibilidade={a.seats.isAvailable}
const ContainerPage = styled.div`
  button {
    height: 26px;
    width: 26px;
    margin-right:7px ;
    margin-bottom:18px ;

    border-radius: 12px;
    border: 1px solid #808F9D
    background:#C3CFD9;

  }
  h1 {
    font-family: "Roboto", sans-serif;
    font-size: 24px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0.04em;
    text-align: center;
    padding-top: 50px;

    height: 110px;
    width: 100%;
    border-radius: nullpx;
  }
`;
const ContainerAssentos = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-left: 24px;
`;

const ContainerOpcoes = styled.div`
  display: flex;
  justify-content: center;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 12px;
  }

  button {
    background-color: #1aae9e;
    border: 1px solid #0e7d71;
    //    background-color: #fbe192;
    //  border: 1px solid #f7c52b;
  }
`;
const ContainerInputs = styled.div`
  margin-top: 42px;
  margin-left: 24px;
  h2 {
    font-family: "Roboto", sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: left;
  }
  input {
    height: 51px;
    width: 327px;
    border-radius: 3px;
    border: 1px solid #d4d4d4;
    margin-bottom: 7px;
  }
  input::placeholder {
    font-family: Roboto;
    font-size: 18px;
    font-style: italic;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: left;

    padding-left: 18px;
    color: #afafaf;
  }
`;

const ButtonReserva = styled.div`
  display: flex;
  justify-content: center;
  margin: 57px 0px 30px 0px;
  button {
    height: 42px;
    width: 225px;
    border-radius: nullpx;

    background-color: #e8833a;

    color: #ffffff;
  }
`;
/*  //const BORDAAMARELO = "#F7C52B";
  //const AMARELO = "#FBE192";

  //const BORDAVERDE = "#0E7D71";
  //const VERDE = "#1AAE9E";*/
