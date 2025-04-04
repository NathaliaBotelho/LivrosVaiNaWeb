// import fuction from "../inicio/Inicio";
import axios from "axios";
import s from "./LivrosDoados.module.scss";
import { useState, useEffect } from "react";

export default function LivrosDoados() {
  const [livros, setLivros] = useState([]);

  const getLivros = async () => {
    const response = await axios.get("https://api-4-kfm3.onrender.com/livros");
    setLivros(response.data);
  };
  useEffect(() => {
    getLivros();
  }, []);

  return (
    <section className={s.sectioPrincipal}>
      <section>
        <h1 className={s.livrosDoados}>Livros Doados</h1>
      </section>

      <section className={s.biblioteca}>
        {livros.map((item) => (
          <div className={s.divUm} key={item.id}>
            <img src={item.image_url} alt="" />
            <h3>{item.titulo}</h3>
            <p>{item.autor}</p>
            <p>{item.categoria}</p>
          </div>
        ))}
      </section>
    </section>
  );
}
