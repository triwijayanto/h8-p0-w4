/*
Logic Challenge - Password Generator
Problem
Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan passwordGenerator

Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password (harus berurutan):

Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti akan menjadi huruf setelah huruf vokal itu (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)

Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord

Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya

Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi

NOTE:
Semua manipulasi string (changeVocals, reverseWord, setLowerUpperCase, removeSpaces) diletakkan di passwordGenerator dan return password-nya dari function ini juga
*/

function changeVocals (str) {
    var gantiVocal = ''
    for (var k = 0 ; k < str.length ; k ++){
      if(str[k]==='a'){
        gantiVocal += 'b'
      } else if (str[k]==='i'){
        gantiVocal += 'j'
      } else if (str[k]==='u'){
        gantiVocal += 'v'
      } else if (str[k]==='e'){
        gantiVocal += 'f'
      } else if (str[k]==='o'){
        gantiVocal += 'p'
      } else if (str[k]==='A'){
        gantiVocal += 'B'
      } else if (str[k]==='I'){
        gantiVocal += 'J'
      } else if (str[k]==='U'){
        gantiVocal += 'V'
      } else if (str[k]==='E'){
        gantiVocal += 'F'
      } else if (str[k]==='O'){
        gantiVocal += 'P'
      } else {
        gantiVocal += str[k]
      } 
    }
    return gantiVocal
  }
  
  function reverseWord (str) {
    var tampung = ''
    for (var i = str.length-1 ; i >= 0 ; i-- ){
      tampung += str[i]
    }
    return tampung
  }
  
  function setLowerUpperCase (str) {
    var lowerCase = str.toLowerCase()
    var upperCase = str.toUpperCase()
    var lowerUpperCase = ''
    for (var h = 0 ; h < str.length ; h ++){
      if(str[h]===lowerCase[h]){
        lowerUpperCase += upperCase[h]
      } else {
        lowerUpperCase += lowerCase[h]
      }
    }
    return lowerUpperCase
  }
  
  function removeSpaces (str) {
    var gabung = ''
    for (var j = 0 ; j < str.length ; j++){
      if(str[j]===' '){
        gabung += ''
      } else {
        gabung += str[j]
      }
    }
    // dengan split dan join
    // var gabung = str.split(' ').join('');
    return gabung
  }
  
  function passwordGenerator (name) {
    //BASECASE
    if(name.length < 5){
      return 'Minimal karakter yang diinputkan adalah 5 karakter'
    }
    
    var a = changeVocals(name)
    var b = reverseWord(a);
    var c = setLowerUpperCase(b);
    var d = removeSpaces(c)
    return d;
  }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'