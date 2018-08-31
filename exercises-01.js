/*
Logic Challenge - Angka Prima
Problem

Diberikan sebuah function angkaPrima(angka) yang menerima satu parameter berupa angka. Function akan me-return true jika angka tersebut adalah bilangan prima. Jika tidak, return false.
Code
*/
function angkaPrima(angka) {
  // 2 adalah bilangan prima 
  if ( angka === 2){
   true
  }
  // dimulai dari 2, karena 1 bukan bilangan prima
  for (var i = 2 ; i < angka ; i++){
  // habis dibagi angka itu sendiri
  if (angka % i === 0){
    return false
    // 3 % 2 === 0 sisa 1 
   
    // 7 % 2 === 0 sisa 1 
    // 7 % 3 === 0 sisa 1 
    // 7 % 4 === 0 sisa 3 
    // 7 % 5 === 0 sisa 2 
    // 7 % 6 === 0 sisa 1
    
    // 6 % 2 === 0 sisa 0 false
    // 6 % 3 === 0 sisa 0 false
    // 6 % 4 === 0 sisa 2 
    // 6 % 5 === 0 sisa 1 

    // dst
  
  }
  
 }
 return true
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false