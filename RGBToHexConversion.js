//https://www.codewars.com/kata/513e08acc600c94f01000001

// The rgb() method is incomplete. Complete the method so that passing in RGB decimal 
// values will result in a hexadecimal representation being returned. The valid decimal values for RGB are 0 - 255. 
// Any (r,g,b) argument values that fall out of that range should be rounded to the closest valid value.

// The following are examples of expected output values:

// rgb(255, 255, 255) // returns FFFFFF
// rgb(255, 255, 300) // returns FFFFFF
// rgb(0,0,0) // returns 000000
// rgb(148, 0, 211) // returns 9400D3


function rgb(r, g, b){
  r = checkRGBRange(r);
  g = checkRGBRange(g);
  b = checkRGBRange(b);
  
  r = formatRGB(r);
  g = formatRGB(g);
  b = formatRGB(b);
  
  return r + g + b;
}

function checkRGBRange(val){
  if(val < 0){
    return 0
  }
  
  if(val > 255){
    return 255
  }
  
  return val
}

function formatRGB(val){
  if(val >= 0 && val <= 15){
    return "0" + val.toString(16).toUpperCase();
  }
  
  return val.toString(16).toUpperCase();
}
