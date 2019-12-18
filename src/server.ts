import "reflect-metadata";
import express from "express";
import { createConnection } from "typeorm";

import apollo from "./apollo";

(async () => {
  const app = express();
  await createConnection();
  const apolloServer = await apollo();
  apolloServer.applyMiddleware({ app, path: "/api" });
  app.listen(4000, () => {
    console.log("Express server started on port 4000 🚀");
  });
})();
