const routes = {
    home: '/',
    login: '/login',
    register: '/register',
    projects: '/projects',
    
    project: (projectId) => (projectId ? `/projects/:${projectId}` : '/projects/:projectId'),
}

export default routes;