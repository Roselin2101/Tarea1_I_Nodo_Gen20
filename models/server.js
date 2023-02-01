const express = require('express');
const { usersRouter } = require('../routes/users.routes');
const { repairsRouter } = require('../routes/repairs.routes');
const cors = require('cors');
const { db } = require('../database/db');

//1. Creo una clase

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 4500;

    this.paths = {
      users: '/api/v1/users',
      repairs: '/api/v1/repairs',
    };
    this.database();
    this.middlewares();

    this.routes();
  }
  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
  }
  // Rutas
  routes() {
    this.app.use(this.paths.users, usersRouter);
  }

  database() {
    db.authenticate()
      .then(() => console.log('Database authenticated'))
      .catch(error => console.log(error));
    // CUANDO SE CAMBIA ALGO DEL MODEL DEBO ESCRIBIR: {force:true} DENTRO DEL db.sync()
    //ESO BORRA TODA LA BASE DE DATOS
    db.sync()
      .then(() => console.log('Database synced'))
      .catch(error => console.log(error));
  }
  // Metodo para escuchar solicitudes por el puerto
  listen() {
    this.app.listen(this.port, () => {
      console.log('Server is running on port', this.port);
    });
  }
}

//2. Exporto el servidor
module.exports = Server;
