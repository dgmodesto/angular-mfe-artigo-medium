import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";
// import microfrontendLayout from "./microfrontend-layout.html";

// const routes = constructRoutes(microfrontendLayout);
// const applications = constructApplications({
//   routes,
//   loadApp({ name }) {
//     return System.import(name);
//   },
// });
// const layoutEngine = constructLayoutEngine({ routes, applications });


registerApplication({
  name: "portal-angular-auth",
  app: () => System.import("portal-angular-auth"),
  activeWhen: (location) => location.pathname.startsWith("/angular-auth"),
});


// applications.forEach(registerApplication);
// layoutEngine.activate();
start();
