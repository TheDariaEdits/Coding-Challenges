// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"
// Names given are always valid strings.

function areYouPlayingBanjo(name) {
    // Turn all name to lowercase for simpler if statement
    lowercaseName = name.toLowerCase()
    if(lowercaseName[0] === 'r') {
    //template literal for return w/ initial name parameter
      return `${name} plays banjo`
    }else {
      return `${name} does not play banjo`
    }
  }