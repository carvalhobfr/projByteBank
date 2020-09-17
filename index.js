import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionario/Gerente.js"
import { Diretor } from "./Funcionario/Diretor.js"
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";


const diretor = new Diretor("Rodrigo", 10000, 12345678900);
diretor.cadastrarSenha("123456")
const gerente = new Gerente("Ricardo", 5000, 12345688901);
gerente.cadastrarSenha("1234567")


const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "1234567");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456");

const cliente = new Cliente("Lais", 78945612379, "456")
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "456");

console.log(gerenteEstaLogado);
console.log(diretorEstaLogado);
console.log(clienteEstaLogado);


