import HeaderOwner from "../components/HeaderOwner";
import AboutMe from "../components/AboutMe";
import MovieList from "../components/MovieList";
import Footer from "../components/Footer";

export default function Owner(){
  return(
    <div className="container">
      <HeaderOwner />
      <AboutMe />
      <MovieList />
      <Footer />
    </div>
  )
}