
export default function Pelicula({peliculaObject }){
  return(
    <li>
      <img src={peliculaObject.photoMovie} alt={peliculaObject.name} />
      <div>
        <h3>{peliculaObject.name}</h3>
        <p>{peliculaObject.sinopsis}</p>
        <p>⌛{peliculaObject.duration}</p>
        <p>⭐{peliculaObject.top}</p>
      </div>
    </li>
  );
}