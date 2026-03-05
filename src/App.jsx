import mascotas from "./data/Mascotas.js";
import TarjetaMascotas from "./components/TarjetaMascotas.jsx";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1 className="titulo-principal">Adopta.com</h1>

      <div className="grid">
        {/*se recorre el array de peliculas con map retornando un componente. la prop
        "key" es obligatoria para identificar cada elemento */}
        {mascotas.map((mascota)=>(
          <TarjetaMascotas
            key={mascota.id}
            nombre={mascota.nombre}
            especie={mascota.especie}
            raza={mascota.raza}
            edad={mascota.edad}
            peso={mascota.peso}
            vacunado={mascota.vacunado}
          />
        ))}
      </div>
    </div>
  );
}

export default App