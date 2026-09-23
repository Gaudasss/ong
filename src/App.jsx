import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Campanhas from "./pages/Campanhas";
import ComoAjudar from "./pages/ComoAjudar";
import Contato from "./pages/Contato";

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/campanhas" element={<Campanhas />} />
            <Route path="/como-ajudar" element={<ComoAjudar />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
