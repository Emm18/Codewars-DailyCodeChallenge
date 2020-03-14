//https://www.codewars.com/kata/5282b48bb70058e4c4000fa7

//When working with color values in JavaScript it can sometimes be useful to extract the individual 
//red, green, and blue (RGB) component values for a color. Implement a hexStringToRGB() function that meets these requirements:

//Accepts a case-insensitive hexadecimal color string as its parameter (ex. "#FF9933" or "#ff9933")
//Returns an object with the structure {r:255, g:153, b:51} where r, g, and b range from 0 through 255
//Note, your implementation does not need to support the shorthand form of hexadecimal notation (ie "#FFF").

//Example
//hexStringToRGB("#FF9933") // returns {r:255, g:153, b:51}

function hexStringToRGB(hexString) {
  let hexArr = hexString.split('');
  
  return { 
    r:parseInt((hexArr[1] + hexArr[2]), 16), 
    g:parseInt((hexArr[3] + hexArr[4]), 16), 
    b:parseInt((hexArr[5] + hexArr[6]), 16) 
  }
}
