import express, { Application } from "express";
import cors from "cors";
import db, { DB } from "../db/connection";
import { userRoutes, homeRoute } from "../routes";

// Equipo 2
import { usuarioRoute, ListaAsignaturasEstudianteRoute, ListaAsignaturasDocenteRoute, ListaGruposVinculadosRoute,
CrearActividadesRoute, CalificacionesRoute, BuscarAsignaturaRoute } from "../routes/Equipo2/";

class Server {
  private app: Application;
  private port: string;
  private paths = {
    user: "/users",

    //---------------G1---------------------

    //---------------G1---------------------


    //---------------G2---------------------
    usuario: "/usuario",
    ListaAsignaturasEstudianteRoute: "/ListaAsignaturasEstudiante",
    ListaAsignaturasDocenteRoute: "/ListaAsignaturasDocente",
    ListaGruposVinculadosRoute: "/ListaGruposVinculados",
    CrearActividadesRoute: "/CrearActividades",
    CalificacionesRoute: "/Calificaciones",
    BuscarAsignaturaRoute: "/BuscarAsignatura",
    //---------------G2---------------------


    //---------------G3---------------------

    //---------------G3---------------------


    //---------------G6---------------------

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
    this.app.use("", homeRoute);
    this.app.use(this.paths.user, userRoutes);

    //---------------G1---------------------

    //---------------G1---------------------


    //---------------G2---------------------

    this.app.use(this.paths.usuario, usuarioRoute);
    this.app.use(this.paths.ListaAsignaturasEstudianteRoute, ListaAsignaturasEstudianteRoute);
    this.app.use(this.paths.ListaAsignaturasDocenteRoute, ListaAsignaturasDocenteRoute);
    this.app.use(this.paths.ListaGruposVinculadosRoute, ListaGruposVinculadosRoute);
    this.app.use(this.paths.CrearActividadesRoute, CrearActividadesRoute);
    this.app.use(this.paths.CalificacionesRoute, CalificacionesRoute);
    this.app.use(this.paths.BuscarAsignaturaRoute, BuscarAsignaturaRoute);
    
    //---------------G2---------------------


    //---------------G3---------------------

    //---------------G3---------------------


    //---------------G6---------------------

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