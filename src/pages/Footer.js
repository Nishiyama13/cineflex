import { useState } from "react";
import styled from "styled-components";
export default function Footer() {
  return (
    <>
      <ContainerFooter data-test="footer">
        <Imagem>
          <img src="#" alt="colocar filme name" />
        </Imagem>
        <DadosFooter>
          <h2>Nome Do Filme</h2>
          <h2>Horario do filme</h2>
        </DadosFooter>
      </ContainerFooter>
    </>
  );
}

const ContainerFooter = styled.div`
  height: 117px;
  width: 375px;

  border-radius: 0px;
  display: flex;
  align-items: center;
`;
const Imagem = styled.div`
  img {
    height: 72px;
    width: 48px;
    border-radius: 0px;
    margin: 8px 9px solid white;
  }
`;
const DadosFooter = styled.div`
  h2 {
    font-family: "Roboto", sans-serif;
    font-size: 26px;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: left;
  }
`;
