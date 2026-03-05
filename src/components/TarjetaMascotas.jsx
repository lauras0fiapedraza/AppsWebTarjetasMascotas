//props de los animales
function TarjetaMascota({ nombre, especie, raza, edad, peso, vacunado }) {
    return (
        <div className="tarjeta">
            <h2 className="tarjeta-titulo">{nombre}</h2>

            <div className="tarjeta-info">
                <div className="razas">
                    <span className="especie">{especie} - {raza}</span>
                </div>

                <div className="salud">
                    <span className="chip"> {edad} años</span>
                    <span className="chip"> {peso} kg</span>
                </div>

                <span>{vacunado ? "Vacunado" : "No vacunado"}</span>
            </div>

            {/* operador terniario muestra un texto si esta true la disponibilidad o si no esta disponible */}
            <span className={`badge ${vacunado ? "badge-verde" : "badge-rojo"}`}>
                {vacunado ? "Vacunado" : "No vacunado"}
            </span>
        </div>
    );
}
export default TarjetaMascota;