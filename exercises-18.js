/*
Logic Challenge - Kali Terus (Rekursif)
Problem
Diberikan sebuah function kaliTerusRekursif(angka) yang menerima satu parameter berupa angka. Function akan memproses angka yang lebih dari satu digit menjadi satu digit dengan melakukan perkalian. Bila masih lebih dari satu digit, terus lakukan perkalian setiap digit-nya untuk pada akhirnya mendapatkan satu digit. Wajib menggunakan rekursif untuk berlatih rekursif, namun kamu boleh menggunakan looping juga disini.

Contoh:

3 => 3, karena sudah satu digit 24 => 8. Karena 24 dua digit, maka kita lakukan 2 * 4 = 8. 8 satu digit, maka hasilnya adalah 8. 654 => 0. Karena 654 tiga digit, maka lakukan 6 * 5 * 4 = 120. 120 tiga digit, maka lakukan 1 * 2 * 0 = 0. 0 satu digit, maka hasilnya adalah 0.

Code
*/
function kaliTerusRekursif(angka) {
    var angkaString = angka.toString()
    var depan = angkaString[0]
    var sisa = angkaString.substr(1)
    //basecase
    if(angkaString.length===1){
      return Number(depan)
    } else {
      // dengan looping
      // var hasilKali = 1 //harus 1, kalo 0 nilainya 0 terus
      // for (var i = 0 ; i < angkaString.length ; i++){
      //   hasilKali *= Number(angkaString[i])
      // }
      // return kaliTerusRekursif(hasilKali)
      // dengan rekursif
      return kaliTerusRekursif(Number(depan) * kaliTerusRekursif(Number(sisa)))
    }
    
  }
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6