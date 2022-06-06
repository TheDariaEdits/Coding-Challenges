// Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]

function towerBuilder(nFloors) {
    let arr = []
    
    for(let i = nFloors; i > 0; i--){
      let stars = '*'.repeat(i) + '*'.repeat(i-1)
      let spaces = ' '.repeat((nFloors) - i )
      arr.push(spaces + stars + spaces)
    }
  
    return arr.reverse()
  }