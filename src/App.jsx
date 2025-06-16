import { Routes, Route } from "react-router-dom";
import { Header } from "@/components/Header/Header.jsx";
import { Home } from "@/pages/Home/Home";
import { PhoneDetail } from "@/pages/PhoneDetail/PhoneDetail";
import { Cart } from "@/pages/Cart";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detalle/:id" element={<PhoneDetail />} />
          <Route path="/carrito" element={<Cart />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
