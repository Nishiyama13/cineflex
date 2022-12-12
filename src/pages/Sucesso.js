import styled from "styled-components";
export default function Sucesso(props) {
  const { nameUsuario, cpfUsuario, poltronas } = props;
  //problema, nao estou recebendo os dados, acho que preciso usar um useRecall na App.js para atualizar os dados

  function voltarHome() {
    window.location.href = `/`;
  }
  return (
    <>
      <ContainerFinalizacao>
        <h1>Pedido feito com Sucesso!</h1>
      </ContainerFinalizacao>

      <ContainerDados data-test="movie-info">
        <h3>Filmes e sessão</h3>
        <p>nome do Filme</p>
        <p>data e hora</p>
      </ContainerDados>
      <ContainerDados data-test="seats-info">
        <h3>Ingressos</h3>
        <p>Assento poltronas.name (fazer um map)`</p>
      </ContainerDados>
      <ContainerDados data-test="client-info">
        <h3>Comprador</h3>
        <p>Nome: nameUsuario`</p>
        <p>CPF: cpf</p>
      </ContainerDados>
      <BotaoFinalizar>
        <button data-teste="go-home-btn" onClick={voltarHome}>
          Voltar para Home
        </button>{" "}
      </BotaoFinalizar>
    </>
  );
}

const ContainerFinalizacao = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  h1 {
    color: #247a68;

    width: 180px;
    padding: 25px 0px;
    font-family: "Roboto", sans-serif;
    font-size: 24px;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: 0.04em;
    text-align: center;
  }
`;

const ContainerDados = styled.div`
  padding-left: 30px;
  padding-bottom: 46px;
  h3 {
    font-family: "Roboto", sans-serif;
    font-size: 24px;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: 0.04em;
    text-align: left;
  }

  p {
    font-family: "Roboto", sans-serif;
    font-size: 22px;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: 0.04em;
    text-align: left;
  }
`;
const BotaoFinalizar = styled.div`
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0.04em;
  text-align: center;

  button {
    height: 42px;
    width: 225px;
    background-color: #e8833a;
    color: #ffffff;
  }
`;
