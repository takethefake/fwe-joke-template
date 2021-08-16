import express from "express";
import { globalRouter } from "./router/global.router";
import { createDatabaseConnection } from "./util/createDatabaseConnection";
import bodyParser from "body-parser";

const port = 4000;

export const startServer = async () => {
  const dbConnection = await createDatabaseConnection();
  const app = express();
  app.use(bodyParser.json());
  app.use(function (req, res, next) {
    console.log("Time:", new Date());
    next();
  });
  app.use("/api", globalRouter);
  const server = app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });

  return { server, dbConnection };
};

startServer();
