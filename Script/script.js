var elemFormulario = document.querySelector("[data-Form]");
var elemContainerTabela = document.querySelector("[data-ta]");
var elemMedidor = document.querySelector("[data-Medidor]");
var gerenciador;

window.onload = init; //a função init será chamada quando a janela for carregada

elemFormulario.onsubmit = () => {
    console.log("onsubmit");

    if (entradaValidada()) {
        console.log("entrada validada");
        var elemNome = document.querySelector("[data-Nome]");
        var elemEmail = document.querySelector("[data-Email]");

        var elemDataNasc = document.querySelector("[data-DataNasc]");
        var elemRA = document.querySelector("[data-RA]");
        var elemCidade = document.querySelector("[data-Cidade]");
        var elemCurso = document.querySelector("[data-Curso]");
        var elemOpniao = document.querySelector("input[name='gosta']:checked");
        var elemDificuldade = document.querySelector("input[name='dificuldade']:checked");
        var aluno = new Aluno(elemNome.value, elemRA.value, elemDataNasc.value, elemEmail.value, elemCidade.value, elemCurso.value, elemOpniao.value, elemDificuldade.value);
        gerenciador.adicionar(aluno);
        console.log("antes");
        gerenciador.Salvar();
    }
    return false;
}

function init() {
    console.log("init");
    gerenciador = new gerenciadorAlunos();
    gerenciador.restaurar(); //recupera as pessoas do armazenamento local
}

function possuiTamanhoMinimo(entrada, tamMinimo) {
    if (entrada.length < tamMinimo) {
        return false;
    } else {
        return true;
    }
}

function possuiRAValido(RegAcad) {
    if (/^[0-9]+$/.test(RegAcad)) {
        return true;
    } else
        return false;
}

function possuiIdadeMinima(DataNasc) {
    var agora = new Date;
    DataNasc = DataNasc.split("-");
    ano = DataNasc[0];
    mes = DataNasc[1];
    dia = DataNasc[2];
    if (agora.getFullYear() - ano > 16)
        return true;
    if (agora.getFullYear() - ano == 16) {
        if ((mes - 1) > agora.getMonth() || (mes - 1) == agora.getMonth() && dia > agora.getDate())
            return false;
        return true;
    }
    return false;
}

function entradaValidada() {
    console.log("funciotn entrada");
    var elemNomeCompleto = document.querySelector("[data-Nome]");
    var elemRA = document.querySelector("[data-RA]");
    var elemDataNasc = document.querySelector("[data-DataNasc]");
    var elemEspacoMensagem = document.querySelector("[data-Mensagens]");

    elemEspacoMensagem.className = "";
    elemEspacoMensagem.innerHTML = "";

    if (!possuiTamanhoMinimo(elemNomeCompleto.value, 10)) {
        elemEspacoMensagem.className = "alert alert-danger";
        elemEspacoMensagem.innerHTML = "<strong>Atenção!</strong>Nome deve possuir pelo menos 10 caracteres";
        return false;
    }
    if (!possuiRAValido(elemRA.value)) {
        elemEspacoMensagem.className = "alert alert-danger";
        elemEspacoMensagem.innerHTML = "<strong>Atenção!</strong>RA inválido, digite apenas números!";
        return false;
    }
    if (!possuiIdadeMinima(elemDataNasc.value)) {
        elemEspacoMensagem.className = "alert alert-danger";
        elemEspacoMensagem.innerHTML = "<strong>Atenção!</strong>Só podem ser cadastrados alunos acima de 16 anos!!";
        return false;
    }


    return true;

}