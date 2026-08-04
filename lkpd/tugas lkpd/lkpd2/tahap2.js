class Rekening {
  #saldo;

  constructor() {
    this.#saldo = 0;
  }

  setor(jumlah) {
    this.#saldo += jumlah;
  }

  tarik(jumlah) {
    if (jumlah <= this.#saldo) {
      this.#saldo -= jumlah;
    } else {
      console.log("Saldo tidak cukup");
    }
  }

  getSaldo() {
    return this.#saldo;
  }
}

const rekening = new Rekening();

rekening.setor(100000);
rekening.tarik(25000);

console.log("Saldo:", rekening.getSaldo());