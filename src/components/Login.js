import './css/style.css'
import useAuth from "../auth/useAuth";
import axios from 'axios';
import { useState } from 'react';

const userCredentials = {};

export default function Login() {
  
  const {login} = useAuth();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    // realizar la lógica de inicio de sesión aquí,
    axios.post('http://localhost:3000/login', {
      username,
      password
    }).then((response) => {
      // Si la iniciación de sesión es exitosa, redirige al usuario a otra página
      window.location = '/home';
    }).catch((error) => {
      // Si hay un error, muestra un mensaje de error al usuario
      setError(error.response.data.error);
    });
    // luego llamar a logIn para cambiar el estado de inicio de sesión
    login(username, password);
  }

  return (
    
    <div className="container w-75 mt-5 rounded shadow border">
      <div className="row">
        <div className="col bg d-none d-lg-block col-md-5 col-lg-5 col-xl-6">
          
        </div>
        <div className="col bg-light p-3 rounded-end">
          <h3 className="fw-bold text-center py-5">Bienvenid@</h3>
          <form className="#" onSubmit={handleSubmit}>            
              <div className="mb-4">
                <label>Email address</label>
                <input type="email" className="form-control mt-1" placeholder="Email Address"
                  value={username} onChange={(event) => setUsername(event.target.value)}/>
              </div>
              <div className="mb-4">
                <label>Password</label>
                <input type="password" className="form-control mt-1 mb-3" placeholder="Password"
                  value={password} onChange={(event) => setPassword(event.target.value)}/>
              </div>
              <div className="d-grid my-3">
                  <button onClick={() => login(userCredentials)} className="btn btn-outline-dark">
                    Iniciar Sesion
                  </button>
                  {error && <p style={{ color: 'red' }}>{error}</p>}
              </div>      
          </form>
        </div> 
      </div>
    </div>
  )
}
