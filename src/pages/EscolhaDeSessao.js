import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

export default function EscolhaDeSessao() {
  const [sessoes, setSessoes] = useState(undefined);
  const { idFilme } = useParams();
  const URLFilme = `https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`;
  console.log(`idFilme = ${idFilme} `);

  useEffect(() => {
    const promise = axios.get(URLFilme);

    promise.then(res => {
      setSessoes(res.data);
      //   console.log(`resData: ${res.data}`);
      const horarios = { ...res.data };
      // console.log(`horarios ${horarios}`);
    });

    promise.catch(err => console.log(err.response.data));
  }, []);

  if (sessoes === undefined) {
    return <div>Carregando...</div>;
  }
  console.log(sessoes);

  //{sessoes.days[0].id}

  return (
    <>
      <SessoesContainer>
        <h1>Selecione o horário</h1>
        <ul>
          {sessoes.days.map(sessao => (
            <li data-test="movie-day" key={sessao.id}>
              <div>
                <p>
                  <span>{sessao.weekday}</span>
                  <span>{sessao.date}</span>{" "}
                </p>
              </div>
              <ContainerButtons>
                <ul>
                  {sessao.showtimes.map(h => (
                    <Link to={`/assentos/${h.id}`} key={h.id}>
                      <li key={h.id} data-test="show-time">
                        <button>{h.name}</button>
                      </li>
                    </Link>
                  ))}
                </ul>
              </ContainerButtons>
            </li>
          ))}
        </ul>
      </SessoesContainer>
    </>
  );
}

const SessoesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  color: #293845;

  //background-color: #32874f;

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
  ul {
    width: 400px;
    background-color: white;
    display: flex;
    flex-wrap: wrap;
    justify-content: start;

    padding-left: 20px;
  }
  p {
    font-family: Roboto;
    font-size: 20px;
    font-weight: 400;
    line-height: 23px;
    letter-spacing: 0.02em;
  }
`;

const ContainerButtons = styled.div`
  button {
    background-color: #e8833a;
    height: 43px;
    width: 83px;
    margin-right: 10px;

    margin-top: 22px;
    margin-bottom: 22px;
    border-radius: 3px;

    color: #ffffff;
  }
`;

/*    "id": 1,
    "title": "2067",
    "posterURL": "https://image.tmdb.org/t/p/w500/7D430eqZj8y3oVkLFfsWXGRcpEG.jpg",
    "overview": "A lowly utility worker is called to the future by a mysterious radio signal, he must leave his dying wife to embark on a journey that will force him to face his deepest fears in an attempt to change the fabric of reality and save humankind from its greatest environmental crisis yet.",
    "releaseDate": "2020-10-01T00:00:00.000Z",
    "days": [
        {
            "id": 24062021,
            "weekday": "Quinta-feira",
            "date": "24/06/2021",
            "showtimes": [
                {
                    "name": "15:00",
                    "id": 1
                },
                {
                    "name": "19:00",
                    "id": 2
                }
            ]
        },*/
