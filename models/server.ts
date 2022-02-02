import express, { Application } from "express";
import cors from "cors";
import db from "../db/connection";
import { userRoutes, homeRoute, r_session } from "../routes";

// Equipo 2
import { usuarioRoute, ListaAsignaturasEstudianteRoute } from "../routes/Equipo2/";

//Equipo 6
import { autenticacion,estudiante,funcionario } from "../routes/g6/"

class Server {
  private app: Application;
  private port: string;
  private paths = {
    user: "/users",

    //---------------G1---------------------
    sesion: "/g1/session",
    //---------------G1---------------------


    //---------------G2---------------------
    usuario: "/usuario",
    ListaAsignaturasEstudianteRoute: "/ListaAsignaturasEstudiante",
    //---------------G2---------------------


    //---------------G3---------------------

    //---------------G3---------------------


    //---------------G6---------------------
    loging6:"/api/g6/login",
    estudiante6:"/api/g6/estudiante",
    funcionario6:"/api/g6/funcionario",
    //---------------G6---------------------


    //---------------G7---------------------

    //---------------G7---------------------


    //---------------G8---------------------

    //---------------G8---------------------
  };

  constructor() {
    this.app = express();
    this.port = process.env.PORT || '8000';
    this.dbConnection();
    this.middlewares();
    this.routes();
  }

  async dbConnection() {
    try {
      await db.authenticate();
      // await db.sync({ alter: true });
      console.log('MySql connected');
    } catch (error: any) {
      throw new Error(error);
    }
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.static('public'));
  }

  routes() {
    //------------Global--------------------
    this.app.use("", homeRoute);
    this.app.use(this.paths.user, userRoutes);
    //------------Global--------------------

    //---------------G1---------------------
    this.app.use(this.paths.sesion, r_session);
    //---------------G1---------------------


    //---------------G2---------------------
    this.app.use(this.paths.usuario, usuarioRoute);
    this.app.use(this.paths.ListaAsignaturasEstudianteRoute, ListaAsignaturasEstudianteRoute);
    //---------------G2---------------------


    //---------------G3---------------------

    //---------------G3---------------------


    //---------------G6---------------------
    this.app.use(this.paths.loging6,autenticacion);
    this.app.use(this.paths.estudiante6,estudiante);
    this.app.use(this.paths.funcionario6, funcionario);
    //---------------G6---------------------


    //---------------G7---------------------

    //---------------G7---------------------


    //---------------G8---------------------

    //---------------G8---------------------
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log('Server running in ' + this.port);
    });
  }
}

export default Server;