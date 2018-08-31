/*
Logic Challenge - Mengurutkan Abjad
Problem

Diberikan sebuah function urutkanAbjad(str) yang menerima satu parameter berupa string. Function tersebut akan mengembalikan string baru yang telah diubah urutan abjadnya dari a hingga z. Contohnya, halo akan menjadi ahlo. Kamu tidak perlu memikirkan apabila ada simbol ataupun angka didalam string tersebut.
Code
*/
function urutkanAbjad(str) {
    var tampung = []
    for(var k = 0 ; k < str.length ; k++){
      if(str[k]!==' '){
        tampung.push(str[k])
      }
    }
  
      for(var i = 0 ; i < tampung.length ;i++){
        for(var j = i+1 ; j < tampung.length ; j++){
          var awal = tampung[i]
          if(tampung[i] > tampung[j]){
            tampung[i] = tampung[j]
            tampung[j] = awal
        } 
      }
    }
    var simpan = ''
    for (var h = 0 ; h < tampung.length ; h++){
      if(typeof(tampung[h])==='string'){
        simpan += tampung[h]
      }
    }
    return simpan
  }
  
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'