
import Navbar from './Components/NavBar';
import Carousel from './Components/Carousel';
import Local from './Components/Local';
import Dados from './Components/Dados'
import Sociedades from './Components/Sociedades';
import Afiliados from './Components/Afiliados';
import Apply from './Components/Apply'
import Contatar from './Components/Contatar';
import Footer from './Components/footer'


import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Paginas/Home";
import Eventos from "./Components/Paginas/Eventos";
import Ramo from "./Components/Paginas/Ramo";
import SociedadeComp from "./Components/Paginas/SociedadeComp";
import APS from "./Components/Paginas/APS";
import WIE from "./Components/Paginas/WIE";
import Blog from "./Components/Paginas/Blog"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/ramo" element={<Ramo />} />
          <Route path="/socieadadeComp" element={<SociedadeComp />} />
          <Route path="/aps" element={<APS />} />
          <Route path="/wie" element={<WIE />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>

      </BrowserRouter>
      

    </>

  );
}

export default App;
