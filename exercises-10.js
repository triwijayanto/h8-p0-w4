/*
Logic Challenge - Check AB
Problem

Diberikan sebuah function checkAB(str) yang menerima satu parameter berupa string. function tersebut mengembalikan nilai true jika di dalam string tersebut terdapat karakter a dan b yang memiliki jarak 3 karakter lain minimal satu kali. Jika tidak ditemukan sama sekali, kembalikan nilai false.
Code
*/
function checkAB(num) {
    // you can only write your code here!
    
    // var indexB = 0
    for(var i = 0 ; i < num.length ; i++){
      if(num[i] == 'a'){
        var indexA = i
        // console.log('a '+ i)
      }
      if(num[i] == 'b'){
        var indexB = i
        // console.log('b '+ i)
      }
    }
  
    var jarak = Math.abs(indexA - indexB)
    if(jarak == 4 ){
      return true
    } else {
      return false
    }
    // return Math.abs(jarak)
  }
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false