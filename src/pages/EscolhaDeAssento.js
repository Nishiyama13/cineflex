import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function EscolhaDeAssento() {
  const [assentos, setAssentos] = useState(undefined);
  const { idSessao } = useParams();
  const URLAssentos = `https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`;

  useEffect(() => {
    const promise = axios.get(URLAssentos);

    promise.then(res => {
      setAssentos(res.data);
      console.log(`resData: ${res.data}`);
      const horarios = { ...res.data };
      // console.log(`horarios ${horarios}`);
    });

    promise.catch(err => console.log(err.response.data));
  }, []);

  if (assentos === undefined) {
    return <div>Carregando...</div>;
  }
  console.log(assentos);
  return (
    <>
      <h1>Escolha de assento (rota "/assentos/:idSessao")</h1>
    </>
  );
}
