import './css/style.css';
import { useState } from 'react';
import axios from 'axios';
//import { Navigate } from 'react-router-dom';
//import routes from './routes';

export default function Register() {

  const [username, setUsername] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/api/register', {
        username,
        lastname,
        email,
        password,
      });

      if (response.status === 201) {
        // el registro fue exitoso, redirigir al usuario a la página de inicio de sesión
        window.location = '/projects';
      } else {
        // el registro falló, mostrar un mensaje de error al usuario
      }
    } catch (error) {
      // ocurrió un error durante la solicitud, mostrar un mensaje de error al usuario
    }
  }

  return (
    <div className="container w-75 mt-4 rounded shadow border">
      <div className="row">
        <div className="col bg2 d-none d-lg-block col-md-5 col-lg-5 col-xl-6">
          
        </div>
        <div className="col bg-light p-3 rounded-end">
          <h4 className="fw-bold text-center py-2">Bienvenid@ ingrese sus datos aqui:</h4>
          <form> 
              <div className="mb-3">
                <label>Nombres</label>
                <input type="text" className="form-control" placeholder="Nombre" 
                  name="username"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}/>
              </div> 
              <div className="mb-3">
                <label>Apellidos</label>
                <input type="text" className="form-control" placeholder="Apellido" 
                  name="lastname"
                  value={lastname}
                  onChange={(event) => setLastname(event.target.value)}/>
              </div>           
              <div className="mb-3">
                <label>Correo Electronico</label>
                <input type="email" className="form-control" placeholder="Email Address" 
                  name="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}/>
              </div>
              <div className="mb-3">
                <label>Password</label>
                <input type="password" className="form-control mt-1 mb-3" placeholder="Password" 
                  name="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}/>
              </div>
              
              <div className="d-grid my-3">
                  <button className="btn btn-outline-dark" type="submit" onClick={handleSubmit}>
                    Registrar(
                  </button>
              </div>      
          </form>
        </div> 
      </div>
    </div>
  )
}
