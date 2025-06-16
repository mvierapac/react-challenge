import { Routes, Route } from "react-router-dom";
import { Header } from "@/components/Header/Header.jsx";
import { Home } from "@/pages/Home/Home";
import { PhoneDetail } from "@/pages/PhoneDetail/PhoneDetail";
import { CartPage } from "@/pages/CartPage/CartPage";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detalle/:id" element={<PhoneDetail />} />
          <Route path="/carrito" element={<CartPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
