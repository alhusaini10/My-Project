for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Memulai perulangan for
// let i = 1 -> Inisialisasi variabel i dengan nilai awal 1
// i <= 10 -> Kondisi untuk menjalankan perulangan, loop akan berhenti jika kondisi ini salah
// i++ -> Increment nilai i sebesar 1 setiap kali perulangan selesai


// Penjelasan alur:
// 1. Variabel i diatur menjadi 1.
// 2. Kondisi i <= 10 dicek. Jika true, blok kode di dalam for dieksekusi.
// 3. console.log(i) akan mencetak nilai i ke konsol.
// 4. Nilai i bertambah 1 (i++) setelah setiap iterasi.
// 5. Perulangan terus berjalan sampai i > 10, lalu berhenti.


let Jumlah = 0;
for (let i = 1; i <= 100; i += 2) {
    Jumlah += i;
}
console.log("Jumlah Bilangan Ganjil dari 1 hingga 100:", Jumlah);

// Inisialisasi variabel Jumlah dengan nilai awal 0
// Variabel ini akan digunakan untuk menyimpan hasil penjumlahan bilangan ganjil
// let Jumlah = 0;

// Memulai perulangan for
// let i = 1 -> Inisialisasi variabel i dengan nilai awal 1 (angka ganjil pertama)
// i <= 100 -> Kondisi perulangan, loop akan berjalan selama i kurang dari atau sama dengan 100
// i += 2 -> Increment nilai i sebesar 2 pada setiap iterasi, sehingga i selalu bernilai ganjil
// for (let i = 1; i <= 100; i += 2) {

// Menambahkan nilai i ke variabel Jumlah pada setiap iterasi
// Jumlah += i;
// }

// Menampilkan hasil penjumlahan semua bilangan ganjil dari 1 hingga 100 ke konsol
// console.log("Jumlah Bilangan Ganjil dari 1 hingga 100:", Jumlah);


// Memulai perulangan for
// let i = 1 -> Inisialisasi variabel i dengan nilai awal 1 (angka awal untuk tabel perkalian)
// i <= 10 -> Kondisi perulangan, loop akan berjalan selama nilai i kurang dari atau sama dengan 10
// i++ -> Increment nilai i sebesar 1 pada setiap iterasi

for (let i = 1; i <= 10; i++) {
    // Pada setiap iterasi, mencetak hasil perkalian 5 dengan nilai i
    // Menggunakan template literal (`...`) untuk menampilkan teks dalam format yang rapi
    console.log(`5 x ${i} = ${5 * i}`);
}
  

let number = 5; // Mendefinisikan variabel 'number' dengan nilai 5 (angka yang ingin dihitung faktorialnya)
let factorial = 1; // Inisialisasi variabel 'factorial' dengan nilai 1, sebagai penyimpan hasil faktorial

// Memulai perulangan for
// let i = 1 -> Inisialisasi variabel i dengan nilai awal 1
// i <= number -> Kondisi perulangan, loop akan berjalan selama nilai i kurang dari atau sama dengan 'number'
// i++ -> Increment nilai i sebesar 1 pada setiap iterasi
for (let i = 1; i <= number; i++) {
    factorial *= i; // Pada setiap iterasi, nilai 'factorial' dikalikan dengan nilai 'i'
}

// Mencetak hasil faktorial dengan menggunakan template literal
console.log(`Faktorial dari ${number} adalah ${factorial}`);


let n = 10; // Jumlah deret Fibonacci yang ingin ditampilkan
let fib = [0, 1]; // Inisialisasi array dengan dua bilangan pertama pada deret Fibonacci, yaitu 0 dan 1

// Memulai perulangan for
// let i = 2 -> Perulangan dimulai dari indeks ke-2 (karena 0 dan 1 sudah didefinisikan sebelumnya)
// i < n -> Kondisi perulangan, loop berjalan selama nilai i kurang dari n (dalam hal ini 10)
// i++ -> Increment nilai i sebesar 1 pada setiap iterasi
for (let i = 2; i < n; i++) {
  fib[i] = fib[i - 1] + fib[i - 2]; // Menambahkan dua elemen sebelumnya untuk mendapatkan elemen Fibonacci berikutnya
}

// Menampilkan deret Fibonacci dengan elemen yang dipisahkan oleh koma
console.log(`Deret Fibonacci: ${fib.join(", ")}`);


let array = [3, 5, 7, 2, 8, 10, 45, 1];
let max = array[0];
for (let i = 1; i < array.length; i++) {
  if (array[i] > max) {
    max = array[i];
  }
}
console.log("Nilai maksimum dalam array adalah:", max);


let value = [5, 10, 15, 20, 25];
let sumValue = 0;
for (let i = 0; i < value.length; i++) {
  sumValues += value[i];
}
let averages = sumValue / value.length;
console.log("Rata-rata nilai adalah:", average);


let values = [5, 10, 15, 20, 25];
let sumValues = 0;
for (let i = 0; i < values.length; i++) {
  sumValues += values[i];
}
let average = sumValues / values.length;
console.log("Rata-rata nilai adalah:", average);


let num = 17; // Ganti dengan angka yang ingin diuji
let isPrime = true;
if (num <= 1) isPrime = false;
for (let i = 2; i < num; i++) {
  if (num % i === 0) {
    isPrime = false;
    break;
  }
}
console.log(`${num} adalah bilangan ${isPrime ? "prima" : "bukan prima"}`);


// Mendeklarasikan variabel suhu dalam Celsius
let celsius = 25; // Ganti dengan suhu Celsius yang ingin dikonversi

// Menghitung suhu dalam Fahrenheit menggunakan rumus konversi
let fahrenheit = (celsius * 9) / 5 + 32;

// Menampilkan hasil konversi suhu ke dalam Fahrenheit
console.log(`${celsius}°C sama dengan ${fahrenheit}°F`);