import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Inicio from "../../pages/inicio/Inicio";
import LivrosDoados from "../../pages/LivrosDoados/LivrosDoados";
import QueroDoar from "../../pages/QueroDoar/QueroDoar";

export default function Header() {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <ul>
            <li>
              {" "}
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
      </header>
      ;
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/LivrosDoados" element={<LivrosDoados />} />
        <Route path="/QueroDoar" element={<QueroDoar />} />
      </Routes>
    </BrowserRouter>
  );
}
