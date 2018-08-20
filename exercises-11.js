
function changeMe(arr) {
    //handle array kosongkosong
    if(arr.length<1){
      return console.log(' "" ');
    }
  
    for (var i = 0; i < arr.length ; i++){
       
      var obj = {
        firstName: arr[i][0],
        lastName: arr[i][1],
        gender: arr[i][2],
        age: arr[i][3] //'Invalid Birth Year'
      
      }
      //var umur = new Object()
      //umur.age = 'sss';
  
      // if(obj.age !== 0){
      //   console.log(umur.age)
      //   console.log(obj.age)
      //}
      console.log(i+1 + '. ' +obj.firstName + ' '+ obj.lastName + ':')
      console.log(obj)
      /*
      var d = new Date()
      var year = d.getFullYear() // 2018
      if(year !== arr[i][3]){
        console.log('invalid' )
      } else {
        obj.age[i][3]
      }    
      */
    }
  }
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 36 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""