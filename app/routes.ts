import type { RouteConfig } from "@react-router/dev/routes";

export default [
  {
    path: "/",
    file: "routes/home.tsx",
  },
  {
    path: "/search",
    file: "routes/search.tsx",
  },
  {
    path: "/playlist/:id",
    file: "routes/playlist.$id.tsx",
  },
  {
    path: "/library",
    file: "routes/library.tsx",
  },

] satisfies RouteConfig;
