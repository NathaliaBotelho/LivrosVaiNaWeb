// import fuction from "../inicio/Inicio";
import Vector from "../../assets/Vector.png";
import s from "./QueroDoar.module.scss";
import axios from "axios";
import { useState } from "react";

export default function QueroDoar() {
  const [titulo, setTitulo] = useState("");
  const [categoria, setCategoria] = useState("");
  const [autor, setAutor] = useState("");
  const [image_url, setImage] = useState("");
  const enviarDados = async () => {
    const urlApi = "https://api-4-kfm3.onrender.com/doar";
    const dadosEnviar = {
      titulo,
      categoria,
      autor,
      imagem_url,
    };

    await axios.post(urlApi, dadosEnviar);
    alert("Livro doado com sucesso!");
    setTitulo("");
    setCategoria("");
    setAutor("");
    setImage("");
  };

  const capturaTitulo = (e) => {
    setTitulo(e.target.value);
  };
  const capturaCategoria = (e) => {
    setCategoria(e.target.value);
  };
  const capturaAutor = (e) => {
    setAutor(e.target.value);
  };
  const capturaImage = (e) => {
    setImage(e.target.value);
  };

  return (
    <section className={s.queroDoarSection}>
      <p>
        Por favor, preencha o formulário com as suas informações e as
        informações do livro
      </p>

      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <img src={Vector} alt="Imagem ilustrativa de um livro aberto." />
          <h2>Informações do Livro</h2>
        </div>
        <input
          type="text"
          name=""
          id=""
          placeholder="Título"
          onChange={capturaTitulo}
          value={titulo}
        />
        <input
          type="text"
          name=""
          id=""
          placeholder="Categoria"
          onChange={capturaCategoria}
          value={categoria}
        />
        <input
          type="text"
          name=""
          id=""
          placeholder="Autor"
          onChange={capturaAutor}
          value={autor}
        />
        <input
          type="text"
          name=""
          id=""
          placeholder="Link da imagem"
          onChange={capturaImage}
          value={image_url}
        />
        <input
          type="submit"
          value="Doar"
          className={s.buttonDoar}
          onClick={enviarDados}
        />
      </form>
    </section>
  );
}
