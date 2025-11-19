import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";

export default function App() {

  const [contador, setContador] = useState(0);

  return (
    <>
      <Header />

      <main className="main">
        <h2>Bienvenido a mi primera página hecha con React</h2>
        <p>Esto funciona igual que HTML, pero usando componentes.</p>

        <button className="btn" onClick={() => setContador(contador + 1)}>
          Clicks: {contador}
        </button>
      </main>

      <Footer />
    </>
  );
}
