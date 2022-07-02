// Complete the function/method so that it takes a PascalCase string and returns the string in snake_case notation. Lowercase characters can be numbers. If the method gets a number as input, it should return a string.

// Examples
// "TestController"  -->  "test_controller"
// "MoviesAndBooks"  -->  "movies_and_books"
// "App7Test"        -->  "app7_test"
// 1                 -->  "1"

function toUnderscore(string) {
    //check if string or integer
    if(Number.isInteger(string) === false){
      //if string change to array
     var arr = Array.from(string)
    }else{
      //if integer just return as string
      return string.toString()
    }
    //empty array for push
    let newString = []
   //for formed array check for uppercase letters w/ RegEx, if true then push lowercase and concat with _, if no then just push
    for(let i = 0; i < arr.length; i++){
      if(i > 0 && /[A-Z]+/g.test(arr[i]) == true){
        newString.push(arr[i] = '_' + arr[i].toLowerCase())
      }else {
        newString.push(arr[i].toLowerCase())
      }
    }
    //array is now joined to become string
    return newString.join('')
  }