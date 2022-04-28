import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detalle from "./components/detalle/detalle";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Listado from "./components/listado/listado";
import Login from "./components/Login/Login";
import "./css/bootstrap.min.css"


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />  
        <Route path="/listado" element={<Listado />} /> 
        <Route path="/movie/:id" element={<Detalle />} /> 

      </Routes>
      <Footer />
    </BrowserRouter>

  );
}

export default App;
