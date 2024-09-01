import { createRootRoute, createRouter } from "@tanstack/react-router";
import { Hello } from "./App";

const rootRoute = createRootRoute({
  component: () => <Hello />,
});

const routeTree = rootRoute;

export const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
