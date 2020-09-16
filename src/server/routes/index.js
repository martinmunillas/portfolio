
import Home from '../../frontend/pages/Home';
import ProjectPage from '../../frontend/pages/ProjectPage';

const routes = [
  { exact: true, path: '/', component: Home },
  { exact: true, path: '/projects/:id', component: ProjectPage },
];

export default routes