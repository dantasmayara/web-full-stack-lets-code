/* 1 - Implementar um método, onde a cada operação executada (ex: saque, deposito, transferência),
    ela deve ser registrada dentro do objeto (lançamentos).
    2 - implementar um método, onde todos os lançamentos sejam exibidos (extrato).
*/

function Conta(agencia=0, numero=0, digito=0, saldo=0, titular=null, tipo="CC", lancamentos=[]) {
  this.agencia = agencia;
  this.numero = numero;
  this.digito = digito;
  this.saldo = saldo;
  this.titular = titular;
  this.tipo = tipo;
  this.lancamentos = [];
}

Conta.prototype.banco = "C6 Bank";

Conta.prototype.depositar = function(valor) {
  this.saldo += valor;
  this.lancamentos.push(new this.Lancar(valor, "Depósito", this.saldo, this.conta));
  return [this.saldo];
}

Conta.prototype.sacar = function(valor) {
  let saque = false;
  if (this.saldo < valor) {
    console.error("Saldo insuficiente!");
  } else {
    saque = true;
    this.saldo -= valor;
  }
  this.lancamentos.push(new this.Lancar(valor, "Saque", this.saldo, null, this.conta, saque));
  return [saque, this.saldo];
}

Conta.prototype.transferir = function(valor, conta) {
  saque = this.sacar(valor)[0]
  if (saque) {
    conta.depositar(valor, this.conta);
  }
  this.lancamentos.push(new this.Lancar(valor, "tranferência", this.saldo, conta.conta, this.conta, saque));
  return this.saldo;
}

Conta.prototype.Lancar = function(valor, lancamentos, saldo, contaDestino= null, contaOrigem= null, concluido= true) {
  this.data = new Date(Date.now()).toUTCString();
  this.valor = valor;
  this.lancamentos = lancamentos;
  this.contaOrigem = contaOrigem;
  this.contaDestino = contaDestino;
  this.concluido = concluido;
  this.saldoFinal = saldo;
}

Conta.prototype.extrato = function(lancamentos) {
  return this.lancamentos
}

const contaJoao = new Conta (336, 1234, 0, 1500, "Joao");
const contaMaria = new Conta (336, 4567, 8, 3000, "Maria", "CP");

console.log(contaJoao);
console.log(contaJoao.extrato());
console.log(contaJoao.banco);
console.log(contaJoao.depositar(1000));
console.log(contaJoao.sacar(1900));
console.log(contaJoao.sacar(2));
console.log(contaJoao.transferir(98, contaMaria));

// Conta da Maria
console.log(contaMaria);
console.log(contaMaria.extrato());
console.log(contaMaria.banco);
console.log(contaMaria.depositar(225));
console.log(contaMaria.sacar(3200));
console.log(contaMaria.sacar(25));
console.log(contaMaria.transferir(50, contaJoao));
console.log(contaMaria.extrato(lancamentos));