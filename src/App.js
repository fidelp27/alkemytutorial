import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detalle from "./components/detalle/detalle";
import Favoritos from "./components/favoritos/favoritos";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Listado from "./components/listado/listado";
import Login from "./components/Login/Login";
import Resultados from "./components/resultados/resultados";
import "./css/bootstrap.min.css"


function App() {

  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favLocal = localStorage.getItem("fav");
    if (favLocal !== null) {
      const favsArray = JSON.parse(favLocal);
      setFavorites(favsArray);
    }
  }, []);

  const addOrRemoveFavories = (e) => {

    const favMovies = localStorage.getItem("fav")
    let tempMoviesInFav;
  
    if (favMovies === null) {
      tempMoviesInFav = []
    } else {
      tempMoviesInFav = JSON.parse(favMovies)
    } 

    const btn = e.currentTarget
    const parent = btn.parentElement
    const imageUrl = parent.querySelector('img').getAttribute('src')
    const title = parent.querySelector('h5').innerText
    const overview = parent.querySelector('p').innerText
    const movieData = { imageUrl, title, overview, id: btn.dataset['movieId'] }
    
    let movieIsInArray = tempMoviesInFav.find((elem) => elem.id === movieData.id) 


    if (!movieIsInArray) {
      tempMoviesInFav.push(movieData)
      localStorage.setItem("fav", JSON.stringify(tempMoviesInFav))
      setFavorites(tempMoviesInFav)
    } else {
      let moviesLeft = tempMoviesInFav.filter((elem) => elem.id !== movieData.id)
      localStorage.setItem("fav", JSON.stringify(moviesLeft))
      setFavorites(moviesLeft)
    }

  }
  

  return (
    <BrowserRouter>
      <Header favorites={favorites}/>
      <Routes>
        <Route path="/" element={<Login />} />  
        <Route path="/listado" element={<Listado addOrRemoveFavories={addOrRemoveFavories} />} /> 
        <Route path="/movie/:id" element={<Detalle />} /> 
        <Route path="/resultados/:keyword" element={<Resultados addOrRemoveFavories={addOrRemoveFavories} />} />
        <Route path="/favoritos" element={<Favoritos favorites={favorites} addOrRemoveFavories={addOrRemoveFavories}/>} /> 

      </Routes>
      <Footer />
    </BrowserRouter>

  );
}

export default App;
