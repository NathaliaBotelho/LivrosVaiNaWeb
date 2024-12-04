import s from "./inicio.module.scss";
import Banner from "../../assets/Banner.png";
import Card1 from "../../assets/Card1.png";
import Card2 from "../../assets/Card2.png";
import Card3 from "../../assets/Card3.png";
import Card4 from "../../assets/Card4.png";

export default function Inicio() {
  return (
    <main>
      <section className={s.primeiraSessaoInicio}>
        <h2>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
      </section>

      <section className={s.porqueDoarSection}>
        <h2>Por que devo doar?</h2>

        <section className={s.containerCards}>
          <section>
            <img src={Card1} alt="Imagem que representa pessoas conectadas" />
            <p>
              {" "}
              Oferece livros a quem não tem acesso, ajudando a reduzir a
              exclusão social.
            </p>
          </section>

          <section>
            <img
              src={Card2}
              alt="Imagem inlustrando um leitor com o seu livro"
            />
            <p> Estimula o hábito da leitura e o aprendizado contínuo.</p>
          </section>

          <section>
            <img
              src={Card3}
              alt="Imagem com seis pessoas transformando o mundo."
            />
            <p>
              {" "}
              Fornece conhecimento e inspiração, permitindo que indivíduos
              transformem suas vidas.
            </p>
          </section>

          <section>
            <img
              src={Card4}
              alt="Imagem ilustrando uma balança que representa a igualdade."
            />
            <p>
              {" "}
              Garante que todos, independentemente de sua condição, tenham
              oportunidades de aprendizado.
            </p>
          </section>
        </section>
      </section>
    </main>
  );
}
