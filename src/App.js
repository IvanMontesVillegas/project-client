import AuthProvider from "./auth/AuthProvider";
import AppRouter from "./routers/AppRouter";
//import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <div>
      
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
      
    </div>
  );
}

export default App;
