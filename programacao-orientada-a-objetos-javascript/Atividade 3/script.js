function Conta(agencia=0, numero=0, digito=0, saldo=0, titular=null, tipo="CC") {
  this.agencia = agencia;
  this.numero = numero;
  this.digito = digito;
  this.saldo = saldo;
  this.titular = titular;
  this.tipo = tipo;
  this.lancamentos = [];
}

Conta.prototype.banco = "C6 Bank";

Conta.prototype.depositar = function(valor, contaOrigem = null) {
  this.saldo += valor;
  this.lancamentos.push(new this.Lancar(valor, "Depósito", this.saldo, this.conta, this.contaOrigem));
  return this.saldo;
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
  saque = this.sacar(valor)[0];
  if (saque) {
    conta.depositar(valor, this.conta);
  }
  this.lancamentos.push(new this.Lancar(valor, "Transferência", this.saldo, conta.conta, this.conta, saque));
  return this.saldo;
}

Conta.prototype.Lancar = function(valor, lancamentos, saldo, contaDestino= null, contaOrigem= null, aprovacao= true) {
  this.data = new Date(Date.now()).toUTCString();
  this.valor = valor;
  this.lancamentos = lancamentos;
  this.contaOrigem = contaOrigem;
  this.contaDestino = contaDestino;
  this.aprovacao = aprovacao;
  this.saldoFinal = saldo;
}

Conta.prototype.extrato = function() {
  let extrato = "Extrato:";
  extrato += `\nSaldo atual = ${this.saldo}`
  for(i in this.lancamentos){
      let teste = `\n\n${JSON.stringify(this.lancamentos[i]).replace(",", " -").replaceAll(",","\n")}`;
      extrato += teste;
  }
  return extrato;
}

const contaJoao = new Conta (336, 1234, 0, 1500, "Joao");
const contaMaria = new Conta (336, 4567, 8, 3000, "Maria", "CP");

console.log(contaJoao);
console.log(contaJoao.banco);
console.log(contaJoao.depositar(1000));
console.log(contaJoao.sacar(1900));
console.log(contaJoao.sacar(2));
console.log(contaJoao.transferir(98, contaMaria));
console.log(contaJoao.extrato());

console.log(contaMaria);
console.log(contaMaria.banco);
console.log(contaMaria.depositar(225));
console.log(contaMaria.sacar(3200));
console.log(contaMaria.sacar(25));
console.log(contaMaria.transferir(50, contaJoao));
console.log(contaMaria.extrato());