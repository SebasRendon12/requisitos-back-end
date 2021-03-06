import express, { Application } from "express";
import cors from "cors";
import db from "../db/connection";
import { userRoutes, homeRoute, r_session, r_usuario, r_login, r_receipts } from "../routes";
import g7Routes from "../routes/g7/routes";

// Equipo 2
import {
  usuarioRoute, ListaAsignaturasEstudianteRoute, ListaAsignaturasDocenteRoute, ListaGruposVinculadosRoute,
  CrearActividadesRoute, CalificacionesRoute, BuscarAsignaturaRoute, SolicitudCupoRoute, SolicitudAsignaturaRoute,
  ListaAsignaturasDepartamentoRoute, CrearGrupoRoute, DefinirHorarioRoute, ListaAsignaturasSolicitudRoute, CrearAsignaturaRoute
} from "../routes/Equipo2/";

class Server {
  private app: Application;
  private port: string;
  private paths = {
    user: "/users",

    //---------------G1---------------------
    sesion: "/g1/session",
    usuariog1: "/g1/user",
    logIn: "/g1/login",
    payReceipts: "/g1/paymentreceipts",
    //---------------G1---------------------

    //---------------G2---------------------
    usuario: "/usuario",
    ListaAsignaturasEstudianteRoute: "/ListaAsignaturasEstudiante",
    ListaAsignaturasDocenteRoute: "/ListaAsignaturasDocente",
    ListaGruposVinculadosRoute: "/ListaGruposVinculados",
    CrearActividadesRoute: "/CrearActividades",
    CalificacionesRoute: "/Calificaciones",
    BuscarAsignaturaRoute: "/BuscarAsignatura",
    SolicitudCupoRoute: "/SolicitudCupo",
    SolicitudAsignaturaRoute: "/SolicitudAsignatura",
    ListaAsignaturasDepartamentoRoute: "/ListaAsignaturasDepartamento",
    CrearGrupoRoute: "/CrearGrupo",
    DefinirHorarioRoute: "/DefinirHorario",
    ListaAsignaturasSolicitudRoute: "/ListaAsignaturasSolicitud",
    CrearAsignaturaRoute: "/CrearAsignatura",
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
    this.port = process.env.PORT || "8000";
    this.dbConnection();
    this.middlewares();
    this.routes();
  }

  async dbConnection() {
    try {
      await db.authenticate();
      // await db.sync({ alter: true });
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
    //------------Global--------------------
    this.app.use("", homeRoute);
    this.app.use(this.paths.user, userRoutes);
    this.app.use("/g7", g7Routes);
    //------------Global--------------------

    //---------------G1---------------------
    this.app.use(this.paths.sesion, r_session);
    this.app.use(this.paths.usuariog1, r_usuario);
    this.app.use(this.paths.logIn, r_login);
    this.app.use(this.paths.payReceipts, r_receipts);
    //---------------G1---------------------

    //---------------G2---------------------

    this.app.use(this.paths.usuario, usuarioRoute);
    this.app.use(
      this.paths.ListaAsignaturasEstudianteRoute,
      ListaAsignaturasEstudianteRoute
    );
    this.app.use(
      this.paths.ListaAsignaturasDocenteRoute,
      ListaAsignaturasDocenteRoute
    );
    this.app.use(
      this.paths.ListaGruposVinculadosRoute,
      ListaGruposVinculadosRoute
    );
    this.app.use(this.paths.CrearActividadesRoute, CrearActividadesRoute);
    this.app.use(this.paths.CalificacionesRoute, CalificacionesRoute);
    this.app.use(this.paths.BuscarAsignaturaRoute, BuscarAsignaturaRoute);
    this.app.use(this.paths.SolicitudCupoRoute, SolicitudCupoRoute);
    this.app.use(this.paths.SolicitudAsignaturaRoute, SolicitudAsignaturaRoute);
    this.app.use(this.paths.ListaAsignaturasDepartamentoRoute, ListaAsignaturasDepartamentoRoute);
    this.app.use(this.paths.CrearGrupoRoute, CrearGrupoRoute);
    this.app.use(this.paths.DefinirHorarioRoute, DefinirHorarioRoute);
    this.app.use(this.paths.ListaAsignaturasSolicitudRoute, ListaAsignaturasSolicitudRoute);
    this.app.use(this.paths.CrearAsignaturaRoute, CrearAsignaturaRoute);

    //---------------G2---------------------

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
      console.log("Server running in " + this.port);
    });
  }
}

export default Server;
