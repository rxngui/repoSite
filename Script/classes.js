class Aluno {
    constructor(nome, RA, dataNasc, email, cidade, curso, opniao, dificuldade) {
        this.nome = nome;
        this.dataNasc = dataNasc;
        this.email = email;
        this.RA = RA;
        this.cidade = cidade;
        this.curso = curso;
        this.opniao = opniao;
        this.dificuldade = dificuldade;
    }
}
class gerenciadorAlunos {
    constructor() {
        this.listaAlunos = [];
    }
    adicionar(aluno) {
        for (var i = 0; i < this.listaAlunos.length && aluno.RA != this.listaAlunos[i].RA; i++);
        if (i >= this.listaAlunos.length)
            this.listaAlunos.push(aluno);
    }
    remover(aluno) {
        for (var i = 0; i < this.listaAlunos.length && aluno.RA != this.listaAlunos[i].RA; i++)
            if (i < this.listaAlunos.length)
                this.listaAlunos.splice(i, 1);
    }
    Salvar(){
        console.log("aqui");
		//transformar vetor em uma "string" JSON.stringify
		localStorage.alunos=JSON.stringify(this.listaAlunos);
	}
	restaurar(){
		if(localStorage.alunos != undefined){
			//desfazendo a notação json JSON.parse para utilizar como vetor novamente
			this.listaAlunos=JSON.parse(localStorage.alunos);
		}
	}

}