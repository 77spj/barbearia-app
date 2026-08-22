const botaoAgendamento = document.getElementById("btn-agendamento");
const formularioAgendamento = document.getElementById("form-agendamento");
const botaoHorarios = document.getElementById("btn-horarios");
const botaoVoltar = document.getElementById("btn-voltar");

botaoAgendamento.addEventListener("click", function() {
    botaoAgendamento.classList.remove("ativo");
    formularioAgendamento.classList.add("ativo");
    botaoHorarios.classList.add("ativo");
    botaoVoltar.classList.add("ativo");
});

botaoVoltar.addEventListener("click", function () {
    botaoAgendamento.classList.add("ativo");
    formularioAgendamento.classList.remove("ativo");
    botaoHorarios.classList.remove("ativo");
    botaoVoltar.classList.remove("ativo");
});

