import fuction from "../inicio/Inicio";
import Vector from "../../assets/Vector.png";
import s from "./QueroDoar.module.scss";

export default function QueroDoar() {
  return (
    <section className={s.queroDoarSection}>
      <p>
        Por favor, preencha o formulário com as suas informações e as
        informações do livro
      </p>

      <form>
        <div>
          <img src={Vector} alt="Imagem ilustrativa de um livro aberto." />
          <h2>Informações do Livro</h2>
        </div>
        <input type="text" name="" id="" placeholder="Título" />
        <input type="text" name="" id="" placeholder="Categoria" />
        <input type="text" name="" id="" placeholder="Autor" />
        <input type="text" name="" id="" placeholder="Link da imagem" />
        <input type="submit" value="Doar" className={s.buttonDoar} />
      </form>
    </section>
  );
}
