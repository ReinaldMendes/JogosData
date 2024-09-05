const publicadora_controller = require("../controllers/publicadora_controller.js");
let nextId = 1;

const model = (publicadora, id = nextId++) => {
  if (publicadora.nome != undefined && publicadora.nome != "") {
    console.log(publicadora_controller.show(id));
    return {
      id,
      nome: publicadora.nome,
      criado_em: publicadora.criado_em || new Date(),
      atualizado_em: new Date(),
    };
  }
};

module.exports = model;
