let simdi = new Date();   // şimdiki tarih - saat

// Get methods

sonuc = simdi;
sonuc = simdi.getDate();// ayın kaçıncı günü olduğunu yazar
sonuc = simdi.getFullYear();// hangi yılda olduğunu yazar
sonuc = simdi.getMonth();// haftanıın hangi gününde olduğunu yazar 0 = pazar 6 = cumartesi
sonuc = simdi.getHours();// saat bilgisini gösterir
sonuc = simdi.getTime();

// Set methods

// simdi.setFullYear(2025);
simdi.setMonth(7);
simdi.setDate(15);

sonuc = simdi;

let dogumTarihi = new Date(1990, 5, 15);

sonuc = simdi.getFullYear() - dogumTarihi.getFullYear();

let milisecond = simdi - dogumTarihi;
let saniye = milisecond / 1000;
let dakika = saniye / 60;
let saat = dakika / 60;
let gun = saat / 24;

sonuc = gun;

console.log(sonuc);
console.log(typeof sonuc);
