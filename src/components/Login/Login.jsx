import React from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    if (email === "" || password === "") {
      Swal.fire("Campos vacíos", "Por favor completa los campos", "error");
      return;
    }
    if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email)) {
      Swal.fire("Email inválido", "Formato aceptado email@email.com", "error");
      return;
    }
    if (email !== "challenge@alkemy.org") {
      Swal.fire(
        "Email inválido",
        "Por favor ingresa un email correcto",
        "error"
      );
      return;
    } else if (password !== "react") {
      Swal.fire(
        "Contraseña inválida",
        "Por favor ingresa la contraseña correcta ",
        "error"
      );
      return;
    } else {
      axios
        .post("http://challenge-react.alkemy.org", { email, password })
        .then((res) => {
          const token = res.data.token;
          sessionStorage.setItem("token", token);
          Swal.fire("Bienvenido", "Los datos son correctos ", "success");
          navigate("/listado");
        });
    }
  };
  let token = sessionStorage.getItem("token");

  return (
    <div>
      {token && navigate("/listado")}
      <h2 className="text-center">Login</h2>
      <form
        className="col-12 col-md-6 p-2 ms-auto me-auto"
        onSubmit={handleSubmit}
      >
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input type="text" className="form-control" name="email" />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input type="password" className="form-control" name="password" />
        </div>

        <button type="submit" className="btn btn-primary">
          Ingresar
        </button>
      </form>
    </div>
  );
};
export default Login;
