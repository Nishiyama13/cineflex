import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function EscolhaDeFilme() {
  const [filmes, setFilmes] = useState(undefined);

  useEffect(() => {
    const promise = axios.get(
      "https://mock-api.driven.com.br/api/v8/cineflex/movies"
    );
    promise.then(res => {
      setFilmes(res.data);
      console.log(res.data);
    });
    console.log(promise);

    promise.catch(err => console.log(err.response.data));
  }, []);

  if (filmes === undefined) {
    return <div>Carregando...</div>;
  }

  return (
    <>
      <BibliotecaContainer>
        <h1>Selecione o filme</h1>

        <ul>
          {filmes.map(filme => (
            <Cartaz>
              <Link to={`/sessoes/${filme.id}`} key={filme.id}>
                <li>
                  <img src={filme.posterURL} alt={filme.title} />
                </li>
              </Link>{" "}
            </Cartaz>
          ))}
        </ul>
      </BibliotecaContainer>
    </>
  );
}

const BibliotecaContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  //background-color: blue;

  h1 {
    font-family: "Roboto", sans-serif;
    font-size: 24px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0.04em;
    text-align: center;
    padding-top: 40px;

    height: 110px;
    width: 100%;
    border-radius: nullpx;
  }
  ul {
    width: 400px;
    background-color: white;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
`;
const Cartaz = styled.div`
  width: 145px;
  height: 209px;
  border-radius: 3px;
  padding: 10px 10px #ffffff;

  box-shadow: 0px 2px 4px 2px #0000001a;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-bottom: 11px;
  img {
    height: 193px;
    width: 129px;
    border-radius: 0px;
    border: 8px 8px 8px 8px;
  }
`;
/*{
        id: 1,
        title: "2067",
        posterURL: "https://image.tmdb.org/t/p/w500/7D430eqZj8y3oVkLFfsWXGRcpEG.jpg",
        overview: "A lowly utility worker is called to the future by a mysterious radio signal, he must leave his dying wife to embark on a journey that will force him to face his deepest fears in an attempt to change the fabric of reality and save humankind from its greatest environmental crisis yet.",
        releaseDate: "2020-10-01T00:00:00.000Z",
    }*/
