
const express = require("express");

const usuarioRoutes = require("./routes/usuarioRoutes");

const chamadoRoutes = require("./routes/chamadoRoutes");

const authRoutes = require("./routes/authRoutes");

const cepRoutes = require("./routes/cepRoutes");

const app = express();


app.use(express.json());

app.use(usuarioRoutes);

app.use(chamadoRoutes);

app.use(authRoutes);

app.use(cepRoutes);

module.exports = app;