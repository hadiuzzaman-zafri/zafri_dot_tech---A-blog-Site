import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Singin from "./pages/Singin";
import Singup from "./pages/Singup";
import Zafri from "./pages/Zafri";
import Islam from './pages/Islam';

import Header from "./components/Header";
import FooterCom from "./components/Footer";


export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<Singin />} />
        <Route path="/sign-up" element={<Singup />} />
        <Route path="/zafri" element={<Zafri />} />
        <Route path="/islam" element={<Islam />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      <FooterCom />
    </BrowserRouter>
  );
}
