for (let i = 0; i < 5; i++) {
    console.log("Iterasi ke-" + i);
}
  

let angka = 1;
while (angka <= 5) {
  console.log("Angka: " + angka);
  angka++;
}


let x = 1;
do {
  console.log("Nilai x: " + x);
  x++;
} while (x <= 5);


const buku = {
    judul: "JavaScript for Beginners",
    penulis: "HambaAllah",
    tahunTerbit: 2023
  };
  

  for (let prop in buku) {
    console.log(prop + ": " + buku[prop]);
}
  

const daftarBuah = ["Apel", "Mangga", "Jeruk"];
for (let buah of daftarBuah) {
  console.log(buah);
}