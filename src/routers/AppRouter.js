import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import Layout from '../components/Layout';
import Login from '../components/Login';
import NotFoundPage from '../components/NotFoundPage';
import Project from '../components/Project';
import Projects from '../components/Projects';
import Register from '../components/Register';
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from './PublicRoute';
import routes from './routes';

export default function AppRouter() {
  return (
  
    <Layout>
        <Routes>
            <Route exact path={routes.home} element={<PublicRoute> <Home/> </PublicRoute>} />
            <Route exact path={routes.login} element={<PublicRoute> <Login/> </PublicRoute>}/>
            <Route exact path={routes.register} element={<PublicRoute> <Register/> </PublicRoute>}/>
            <Route exact path={routes.projects}element={<PrivateRoute> <Projects/> </PrivateRoute>}/>
            <Route exact path={routes.project()} element={<PrivateRoute> <Project/> </PrivateRoute>}/>

            <Route exact path="*" element={<NotFoundPage/>} />
        </Routes>
    </Layout>
    
  )
}
