const express = require("express");
const estudio_router = require("./router/estudio_router.js");
const genero_router = require("./router/genero_router.js");
const jogo_router = require("./router/jogo_router.js");
const publicadora_router = require("./router/publicadora_router.js");
const app = express();
const port = 3000;

app.use(express.json());

app.use("/estudio", estudio_router);
app.use("/estudio", genero_router);
app.use("/aluguel", jogo_router);
app.use("/publicadora", publicadora_router);

app.listen(port, () => {
  console.log(`Sucesso na conexão ${port}`);
});
