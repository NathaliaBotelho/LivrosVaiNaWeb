import s from "./header.module.scss";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import IconLivro from "../../assets/IconLivro.png";
import Lupa from "../../assets/Lupa.png";
import Inicio from "../../pages/inicio/Inicio";
import LivrosDoados from "../../pages/LivrosDoados/LivrosDoados";
import QueroDoar from "../../pages/QueroDoar/QueroDoar";

export default function Header() {
  return (
    <BrowserRouter>
      <header>
        <section className={s.logoLivro}>
          <img src={IconLivro} alt="Imagem ilustrativa de um livro aberto." />
          <h1>Livros Vai Na Web</h1>
        </section>
        <nav className={s.navPrincipal}>
          <ul>
            <li>
              <Link to="/"> Inicio</Link>
            </li>
            <li>
              <Link to="/LivrosDoados">Livros Doados</Link>
            </li>
            <li>
              <Link to="/QueroDoar">Quero Doar</Link>
            </li>
          </ul>
        </nav>

        <section className={s.sessaoPesquisa}>
          <input type="search" placeholder="O que você procura?" />
          <img src={Lupa} alt="Imagem ilustrativa de uma lupa." />
        </section>
      </header>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/LivrosDoados" element={<LivrosDoados />} />
        <Route path="/QueroDoar" element={<QueroDoar />} />
      </Routes>
    </BrowserRouter>
  );
}
