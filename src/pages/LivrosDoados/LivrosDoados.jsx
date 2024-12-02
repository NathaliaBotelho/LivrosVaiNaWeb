import fuction from "../inicio/Inicio";
import s from "./LivrosDoados.module.scss";
import Livro from "../../assets/Livro.png";
import Livro2 from "../../assets/Livro2.png";
import Livro3 from "../../assets/Livro3.png";

export default function LivrosDoados() {
  return (
    <section className={s.sectioPrincipal}>
      <section>
        <h1 className={s.livrosDoados}>Livros Doados</h1>
      </section>

      <section className={s.biblioteca}>
        <div className={s.divUm}>
          <img
            src={Livro}
            alt="Imagem do livro 'O Protagonista' de Suzanne Andrade'."
          />
          <h3>O Protagonista</h3>
          <p>Sussane Andrade</p>
          <p>Ficção</p>
        </div>
        <div className={s.divDois}>
          <img
            src={Livro2}
            alt="Imagem do livro 'O Protagonista' de Suzanne Andrade'."
          />
          <h4>Orgulho E Preconceito</h4>
          <p>Jane Austen Romance</p>
        </div>
        <div className={s.divTres}>
          <img
            src={Livro3}
            alt="Imagem do livro 'O Protagonista' de Suzanne Andrade'."
          />
          <h4>E O Vento Levou</h4>
          <p>Sussane Andrade</p>
          <p>Romance</p>
        </div>
      </section>
    </section>
  );
}
