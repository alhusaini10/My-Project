const nilai = 5;

if (nilai <= 100 && nilai >= 90) {
  console.log('Sangat Baik: A+');
} else if (nilai < 90 && nilai >= 80) {
  console.log('Baik: A-');
} else if (nilai < 80 && nilai >= 70) {
  console.log('Cukup Baik: B');
} else if (nilai < 70 && nilai >= 60) {
  console.log('Cukup: C');
} else if (nilai < 60 && nilai >= 50) {
  console.log('Kurang Baik: D');
} else if (nilai < 50 && nilai >= 40) {
    console.log('Perbaiki Lagi: E');
} else if (nilai < 40 && nilai >= 30) {
    console.log('Coba Lagi: F');
} else if (nilai < 30 && nilai >= 20) {
    console.log('Belajar Lagi: G');
} else if (nilai < 20 && nilai >= 10) {
    console.log('Gagal: H');
} else if (nilai < 10 && nilai >= 0) {
    console.log('Gak Usah Sekolah sekalian: I');
} else {
  console.log('Nilai tidak valid');
}