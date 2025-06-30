export default function Header(){
  //Creando objeto de estilos para un componente
  const headerStyle = {
    color: "#edc84b", 
    textTransform: "uppercase",
    textAlign: "center",
    fontSize: "4.2rem",
    fontWeight: 300,
    letterSpacing: "3px",
    position: "relative",
    width: "100%",
    display: "block",
    paddingTop: "3rem"
  }

  return(
    <header>
      <h1 style={headerStyle}>Pizzeria Isabella's</h1>
    </header>
  )
}