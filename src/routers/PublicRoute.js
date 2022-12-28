import {Navigate} from 'react-router-dom';
import useAuth from '../auth/useAuth';
import routes from './routes';

export function PublicRoute({children}) {
    //const user = {id:1};
    //const user = null;
    const {isLogged} = useAuth();

    if (isLogged()) return <Navigate to={routes.projects} />
  
    return (<>
        {children}
    </>)
}
/*export function PrivateRoute(props){
    //const user = { id:1, role: 'regultar' };
    //const user = null;
    if(!user) return <Navigate to="/login" />
    return(
        <Route {...props} />
    )
}*/