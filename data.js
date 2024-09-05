// Gera um Date que é o tempo de agora
let horaAtual = new Date();
let horaDepois = new Date();

// Trabalhar com operações matematicas
horaAtual.setMonth(horaAtual.getMonth() + 1);
horaAtual.setDate(horaAtual.getDate() + 3);

// Comparação entre datas
if (horaAtual > horaDepois) {
  console.log(horaAtual, horaDepois);
}

// Horário válido
let horarioValido = new Date("2022-10-23 10:45:53.123");

// Horário inválido
let horarioInformado = new Date("asdasdasdasdasdads");

// validação de um horário
if (!isNaN(horarioInformado.valueOf())) {
  console.log("É um horario");
} else {
  console.log("Não é um horario");
}

console.log(horarioInformado);
