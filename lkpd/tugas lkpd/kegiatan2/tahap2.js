const readlineSync = require("readline-sync");

let nilai = Number(readlineSync.question("Masukkan nilai: "));

if (nilai >= 75) {
    console.log("Lulus");
} else {
    console.log("Belum Lulus");
}