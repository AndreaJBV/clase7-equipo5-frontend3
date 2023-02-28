import {useState } from "react"

const FunComponent = () => {

  const integrantes = ["Girlesa", "Laura", "Lorena", "Juliana", "Andrea"];  
  const [inte, setIntegrantes] = useState([]);

  const addIntegrante = () => {
    let id = inte.length + 1;
    let nombre = integrantes[id-1]
    let integrante = { id: id, nombre: nombre };
    setIntegrantes([...inte, integrante]);
  };

  return (
    <>
      
      <button onClick={addIntegrante}>Agregar integrante</button> 
      <h2>Las integrantes del equipo 5 son: </h2>
      <ul>
        {inte.map((a) => {
          return <li>{`${a.id} - ${a.nombre}`}</li>;
        })}
      </ul>
    </>
  );
}

export default FunComponent