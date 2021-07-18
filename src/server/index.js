import { Server } from "miragejs";
import fixtures from "./fixtures";
import routes from "./routes";

const config = (environment) => {
  const config = {
    environment,
    routes,
  };

  if (Object.keys(fixtures).length > 0) {
    config.fixtures = fixtures;
  }

  return config;
};

export function makeServer({ environment = "development" } = {}) {
  return new Server(config(environment));
}
