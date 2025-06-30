import Pelicula from "./Pelicula"
import { useEffect, useState} from "react";

export default function MovieList(){

  //Aqui inicia el hook useState
  const [peliculas, setPeliculas] = useState([
    {
      name: "Interestellar",
      sinopsis: "...",
      top: 1,
      photoMovie: "./images/poster-peliculas/Interestellar.webp",
      duration: 180
    },
    {
      name: "Everything Everywhere All at Once",
      sinopsis: "...",
      top: 2,
      photoMovie: "./images/poster-peliculas/Everything Everywhere All at Once.webp",
      duration: 171
    },
    {
      name: "Scott Pilgrim vs. the World",
      sinopsis: "...",
      top: 3,
      photoMovie: "./images/poster-peliculas/Scott Pilgrim vs the World.webp",
      duration: 120
    },
    {
      name: "La La Land",
      sinopsis: "...",
      top: 4,
      photoMovie: "./images/poster-peliculas/La La Land.webp",
      duration: 132
    },
  ]) //Fin del useState

  useEffect(() =>{
    const data = localStorage.getItem("peliculas");
    if(data) setPeliculas(JSON.parse(data));
  }, [])

  useEffect(() => localStorage.setItem("peliculas", JSON.stringify(peliculas)), [peliculas]);

  return(
    <div>
      <h2>Mis peliculas favoritas</h2>
      (<>
        <p>
          Estas son mis 10 peliculas favoritas de todos los tiempos.
          Las calificaciones y ranking que le asigno a cada una es totalmente personal.
        </p>
        <ul>
          {peliculas.map((pelicula) => {
            return(
              <Pelicula peliculaObject ={pelicula} key={pelicula.name} />
            )
          })}
        </ul>
      </>)
    </div>
  );
}