export class Funcionario {
  constructor() {
    this.nome;
    this.salario;
    this.cpf;

    this._bonificação = 1;
    this._senha;
  }

  cadastrarSenha(senha) {
    this._senha = senha
  }
}