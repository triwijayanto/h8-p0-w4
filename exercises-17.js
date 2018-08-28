/*
Logic Challenge - Total Digit (Rekursif)
Problem
Diberikan sebuah function totalDigitRekursif(angka) yang menerima satu parameter berupa angka. Function akan me-return nilai total dari digit tersebut dengan menambahkan satu per satu angka dari digit paling depan ke paling belakang. Wajib menggunakan rekursif untuk berlatih rekursif! Disarankan untuk tidak menggunakan looping for untuk soal ini.

Contoh:

512, berarti outputnya adalah 8, karena 5 + 1 + 2 = 8. 1542, berarti outputnya adalah 12, karena 1 + 5 + 4 + 2 = 12.

Code
*/
function totalDigitRekursif(angka) {
    // ubah ke string agar bisa dibaca length
    var angkaString = angka.toString()
    var angkaDepan = angkaString[0]
    var angkaSisa = angkaString.substr(1)
    // atau bisa gunakan slice()
    // var angkaSisa = konversi.slice(1)
  
    //basecase jangan lupa ubah type data dari string ke number sebelum return
    if(angkaString.length === 1){
      return Number(angkaDepan)
    } else {
      return Number(angkaDepan) + totalDigitRekursif(angkaSisa)
    }
  
    // 512 -> 5 + (12) <- nilai ini dipanggil lagi(recursive)
    //  12 -> 1 + (2)
    //   2 -> 2        <- karena length === 1 maka dikembalikan
    //        8        <- barulah proses penambahan berjalan
    
  }
  
  // TEST CASES
  console.log(totalDigitRekursif(512)); // 8
  console.log(totalDigitRekursif(1542)); // 12
  console.log(totalDigitRekursif(5)); // 5
  console.log(totalDigitRekursif(21)); // 3
  console.log(totalDigitRekursif(11111)); // 5