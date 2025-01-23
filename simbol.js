const y = Symbol();
const z = Symbol();

console.log(y === z); // false
console.log(y); // Symbol()
console.log(z); // Symbol()

const mahasiswa = {
    nama: 'nashir',
    umur: 15,
  };
  
  const nama = Symbol();
  mahasiswa[nama] = 'husaini';
  
  console.log(mahasiswa); // {nama: "nashir", umur: 15, Symbol(): "husaini"}
  console.log(mahasiswa[nama]); // husaini