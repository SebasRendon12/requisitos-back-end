import express, { Application } from "express";
import cors from "cors";
import db from "../db/connection";
import { userRoutes, homeRoute } from "../routes";
import g7Routes from "../routes/g7/routes";

class Server {
  private app: Application;
  private port: string;
  private paths = {
    user: "/users",
  };

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "8000";
    this.dbConnection();
    this.middlewares();
    this.routes();
  }

  async dbConnection() {
    try {
      await db.authenticate();
      //await db.sync({ alter: true });
      console.log("MySql connected");
    } catch (error: any) {
      throw new Error(error);
    }
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use("", homeRoute);
    this.app.use(this.paths.user, userRoutes);
    this.app.use("/g7", g7Routes);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Server running in " + this.port);
    });
  }
}

export default Server;
