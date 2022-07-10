// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

/*function isIsogram(str){
    let array = str.toLowerCase().split('')
    let  checkedArray = array.map(function (a) {
      return array.indexOf(a) == array.lastIndexOf(a) ?  true : false})
  	const isTrue = x => x === true
  	return checkedArray.every(isTrue)
  
  } */

  function isIsogram(str){
    return str.toLowerCase().split('').length === [...new Set(str.toLowerCase().split('') )].length
  }
  
