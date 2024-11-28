import s from "./Footer.module.scss";
import LogoFacebook from "../../assets/LogoFacebook.png";
import LogoInstagram from "../../assets/LogoInstagram.png";
import LogoLinkedin from "../../assets/LogoLinkedin.png";
import LogoTwitter from "../../assets/LogoTwitter.png";
import LogoYouTube from "../../assets/LogoYouTube.png";

export default function Footer() {
  return (
    <footer>
      <section className={s.numeroContato}>
        <p>4002-8922</p>

        <nav>
          <a href="">
            {" "}
            <img src={LogoFacebook} alt="Imagem da logo do Facebook." />{" "}
          </a>
          <a href="">
            {" "}
            <img src={LogoInstagram} alt="Imagem da logo do Instagram." />{" "}
          </a>
          <a href="">
            {" "}
            <img src={LogoLinkedin} alt="Imagem da logo do Linkedin." />{" "}
          </a>
          <a href="">
            {" "}
            <img src={LogoTwitter} alt="Imagem da logo do Twitter." />{" "}
          </a>
          <a href="">
            {" "}
            <img src={LogoYouTube} alt="Imagem da logo do YouTube." />{" "}
          </a>
        </nav>
      </section>

      <section className={s.copyright}>
        <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024 </p>
      </section>
    </footer>
  );
}
