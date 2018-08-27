/*
Logic Challenge - Most Frequent Largest Numbers

Problem
Implementasikan function sorting dan getTotal untuk mendapatkan angka yang paling besar dan mengetahui berapa kali angka tersebut muncul di dalam arrNumber.

Dengan HANYA mengubah code di dalam 2 function yang diberikan (sorting dan getTotal). Dilarang mengubah isi dalam function mostFrequentLargestNumbers!
*/

function sorting(arrNumber) {
    for (var i = 0 ; i < arrNumber.length ; i ++)
      for (var j = i+1 ; j < arrNumber.length ; j ++){
        var awal = arrNumber[i]
        if (arrNumber[i] < arrNumber[j]){
          arrNumber[i] = arrNumber[j]
          arrNumber[j] = awal
        }
  
      }
      return arrNumber
  }
  
  // console.log(getTotal([2, 8, 4, 6, 8, 5, 8, 4]));
  
  function getTotal(arrNumber) {
    var urut = sorting(arrNumber)
    var palingBesar = urut[0]
    var penampungTotal = 0
    for(var k = 0 ; k < arrNumber.length ; k++){
      if(arrNumber[k] === palingBesar){
        penampungTotal += 1
      }
    }
   
    //handle array kosong kosong
    if(arrNumber.length < 1){
      return ''
    }
    return 'angka paling besar adalah ' +  palingBesar +' dan jumlah kemunculan sebanyak ' + penampungTotal +' kali'
  }
  
  function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
  }
  
  console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
  //'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'
  
  console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
  // //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'
  
  console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
  // //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'
  
  console.log(mostFrequentLargestNumbers([]));
  // //''