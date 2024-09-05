const estudio_controller = require("../controllers/estudio_controller.js");
const publicadora_controller = require("../controllers/publicadora_controller.js");
const genero_controller = require("../controllers/genero_controller.js");
let nextId = 1;

const model = (jogo, id = nextId++) => {
  if (
    jogo.nome != undefined &&
    jogo.nome != "" &&
    jogo.lancado_em != undefined &&
    jogo.lancado_em != "" &&
    jogo.id_estudio !== undefined &&
    estudio_controller.show(jogo.id_estudio) &&
    jogo.id_publicadora !== undefined &&
    publicadora_controller.show(jogo.id_publicadora) &&
    jogo.id_genero !== undefined &&
    genero_controller.show(jogo.id_genero)
  ) {
    return {
      id,
      id_estudio: jogo.id_estudio,
      id_genero: jogo.id_genero,
      id_publicadora: jogo.id_publicadora,
      nome: jogo.nome,
      lancado_em: jogo.lancado_em,
      criado_em: jogo.criado_em || new Date(),
      atualizado_em: new Date(),
    };
  }
};

module.exports = model;
