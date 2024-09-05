const estudio_controller = require("../controllers/estudio_controller.js");
let nextId = 1;

const model = (estudio, id = nextId++) => {
  if (estudio.nome != undefined && estudio.nome != "") {
    console.log(estudio_controller.show(id));
    return {
      id,
      nome: estudio.nome,
      criado_em: estudio.criado_em || new Date(),
      atualizado_em: new Date(),
    };
  }
};

module.exports = model;
