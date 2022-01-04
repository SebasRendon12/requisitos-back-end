import express, { Application } from "express";
import cors from "cors";

class Server {
  private app: Application;
  private port: string;
  private paths = {

  };

  constructor() {
    this.app = express();
    this.port = process.env.PORT || '8000';
    this.middlewares();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.static('public'));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log('Server running in ' + this.port);
    });
  }
}

export default Server;