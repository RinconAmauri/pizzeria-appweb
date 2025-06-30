export default function HeaderOwner(){
  const headerOwnerStyle = {
    color: "#edc84b",
    textAlign: "center",
    fontSize: "4.2rem",
    fontWeight: 300,
    letterSpacing: "3px",
    position: "relative",
    width: "100%",
    display: "block",
    paddingTop: "3rem"
  }

  const subHeaderOwnerStyle = {
    color: "#5a3e2b",
    textAlign: "center",
    fontSize: "2.5rem",
    fontWeight: 300,
    letterSpacing: "1px",
    position: "relative",
    width: "100%",
    display: "block",
    paddingTop: "1rem"
  }

  return(
    <header>
      <h1 style={headerOwnerStyle}>Un poco sobre mi</h1>
      <p style={subHeaderOwnerStyle}>...y por que amo la pizza y las peliculas</p>
    </header>
  )
}



