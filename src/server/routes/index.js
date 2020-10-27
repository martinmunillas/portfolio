import Home from '../../frontend/pages/Home';
import ProjectPage from '../../frontend/pages/ProjectPage';
import NotFound from '../../frontend/pages/NotFound'

const routes = [
  { exact: true, path: '/', component: Home },
  { exact: true, path: '/projects/:id', component: ProjectPage },
  { component: NotFound },
];

export default routes