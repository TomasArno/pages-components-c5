import { initPageA } from "./pages/page-a";
import { initPageB } from "./pages/page-b";

const routes = [
  {
    path: /\/page-a/,
    component: (data) => initPageA(),
  },
  {
    path: /\/page-b/,
    component: (data) => initPageB(),
  },
];

export function initRouter(container: Element) {
  function handleRoute(route) {
    function goTo(path) {
      history.pushState({}, "", path);
      handleRoute(path);
    }
    console.log("Ruta recibida!");

    for (const r of routes) {
      if (r.path.test(route)) {
        const el = r.component({ goTo: goTo });

        if (container != null) {
          if (container.firstChild) {
            container.firstChild.remove();
          }
          container.appendChild(el);
        }
      }
    }
  }
  handleRoute(location.pathname);
}
