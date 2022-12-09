import styled from "styled-components";
export default function Header() {
  return (
    <>
      <Titulo>
        <h1>CINEFLEX</h1>
      </Titulo>
    </>
  );
}

const Titulo = styled.div`
  background: #c3cfd9;
  height: 67px;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    font-family: Roboto;
    font-size: 34px;
    font-weight: 400;
    line-height: 40px;
    letter-spacing: 0em;
    //text-align: center;
    color: #e8833a;
  }
`;
