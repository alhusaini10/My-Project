const lampuLaluLintas = (warna) => {
    if (warna === "hijau") {
      console.log("jalan buruan woi!!! gw tabrak lu");
    } else if (warna === "kuning") {
      console.log("hati-hati,ada msuh di sinii");
    } else if (warna === "merah") {
      console.log("berhenti,abis bensin");
    } else {
      console.log("lampu error,belum bayar ke PLN");
    }
  };
  
  lampuLaluLintas("merah");
  lampuLaluLintas("kuning");
  lampuLaluLintas("hijau");
  lampuLaluLintas("biru");

  