//kuis tipe data
const saya = {
    first: 'M.Nashiruddin',
    last: 'Al Husaini',
    age: 27,
};
console.log(`Hai,Saya ${saya.first} ${saya.last},Umur ${saya.age},Sudah Kawin`)

//kuis object
const makanan = {
    nama: "nasi goreng",
    kota: "bogor",
    minum: "es teh",
    isVegan: false
};

console.log(makanan.nama);
console.log(makanan.minum);

//kuis array
let evenNumbers = [];
for (let i = 1; i < 101; i++) {
    if (i % 2 == 0) {
    evenNumbers.push(i)
    }
}
console.log(evenNumbers);

//kuis object dan array
 //array
  // push&pop
const bahasa = ['java script', 'PHP', 'phyton','C++','java'];
bahasa.pop();
console.log(bahasa);

  //shift&unshift
const numbers = ['3', '6', '9','12','15'];
numbers.shift();
console.log(numbers)
numbers.unshift('0');
console.log(numbers);

  //filter
const ages = [18, 22, 16, 25, 30, 14, 17, 15, 24];
const umur  = ages.filter(ages => ages > 18);
console.log(umur)

  //concat
const evennumbers = [2, 4, 6];
const addnumbers = [1, 3, 5];
const allnumbers = evennumbers.concat(addnumbers);
console.log(allnumbers)

  //splice
const warna = ['red', 'black', 'blue', 'yellow', 'green']
const newcolours = warna.slice(1);
const newcolours2 = newcolours.splice(0);
console.log(newcolours)

 //object
  // 1
const car = {
    merk: 'toyota',
    model: 'avanza',
    tahun: 2024,
};
console.log(car.merk);
console.log(car.tahun);

  //2
const program = {
    judul: 'pemrograman java script',
    penulis: 'Zio AlFinois',
    harga: 85000,
};
program['harga'] = 90000,
program.penerbit = ('BazmaMedia');
console.log(program)

  //3
const bio = {
  nama: 'nashiruddin',
  umur: 16,
  hobi: 'programming',
}

console.log(`Halo,Perkenalkan Nama Saya ${bio.nama}, Umur Saya ${bio.umur}, Hobi Saya Adalah ${bio.hobi}`);

