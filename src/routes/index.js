import { data } from "../assets";
import Books from "../pages/Books";
import Home from "../pages/Home";
import PageNotFound from "../pages/PageNotFound";

let bookRoutes = data.map((x) => {
  return {
    path: `/books/${x.path}`,
    component: Books,
  };
});

const routes = [
  { path: "/", component: Home },
  ...bookRoutes,
  { path: "*", component: PageNotFound },
];

export { routes };
