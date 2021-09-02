import Home from "./pages/Home";
import ProjectPage from "./pages/ProjectPage";
import NotFound from "./pages/NotFound";

const routes = [
  { exact: true, path: "/", component: Home },
  { exact: true, path: "/projects/:id", component: ProjectPage },
  { component: NotFound },
];

export default routes;
