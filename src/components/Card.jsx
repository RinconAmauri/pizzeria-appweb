export default function Card(){
  //Creando objeto de estilos para el componente card
    const container = {
    height: "auto",
    width: "200px",
    padding: "10px",
    border: "2px solid black"
  }
  
  const img = {
    width: "100%"
  }

  const cardTitle = {
    color: "black",
    fontSize: "1.5rem",
  }

  const cardBody = {
    color: "black",
    fontSize: "1rem"
  }

  const botonCarrito = {
        backgroundColor: "#edc84b",
        color: "black",
        border: "none",
        borderRadius: "0px"
  }

  return(
    <div style={container}>
      <img style={img} src="./images/pizzapeperoni.jpg" alt="Pizza de peperoni" />
      <p style={cardTitle}>Pizza Peperoni</p>
      <p style={cardBody}>Deliciosa y crujuente masa cubierta de salsa de tomate, queso mozzarella y peperoni</p>
      <button style={botonCarrito}>Carrito</button>
    </div>
  );
};