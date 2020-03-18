//https://www.codewars.com/kata/52724507b149fa120600031d

//Create a function that transforms any positive number to a string representing the number in words. 
//The function should work for all numbers between 0 and 999999.

//Examples
//number2words(0)  ==>  "zero"
//number2words(1)  ==>  "one"
//number2words(9)  ==>  "nine"
//number2words(10)  ==>  "ten"
//number2words(17)  ==>  "seventeen"
//number2words(20)  ==>  "twenty"
//number2words(21)  ==>  "twenty-one"
//number2words(45)  ==>  "forty-five"
//number2words(80)  ==>  "eighty"
//number2words(99)  ==>  "ninety-nine"
//number2words(100)  ==>  "one hundred"
//number2words(301)  ==>  "three hundred one"
//number2words(799)  ==>  "seven hundred ninety-nine"
//number2words(800)  ==>  "eight hundred"
//number2words(950)  ==>  "nine hundred fifty"
//number2words(1000)  ==>  "one thousand"
//number2words(1002)  ==>  "one thousand two"
//number2words(3051)  ==>  "three thousand fifty-one"
//number2words(7200)  ==>  "seven thousand two hundred"
//number2words(7219)  ==>  "seven thousand two hundred nineteen"
//number2words(8330)  ==>  "eight thousand three hundred thirty"
//number2words(99999)  ==>  "ninety-nine thousand nine hundred ninety-nine"
//number2words(888888)  ==>  "eight hundred eighty-eight thousand eight hundred eighty-eight"

function number2words(n){
  let hundredThousand = '';
  let thousand = '';
  let hundred = '';
  let tens = '';
  let ones = '';
  let connector = ' ';
  
  if(n == 0){
    return 'zero'
  }
  
  if(n > 99999){
    hundredThousand = `${getOnes(Math.floor(n / 100000))} hundred `
    n = n - (Math.floor(n / 100000) * 100000);
  }
  
  if(n > 999){
    thousand = `${getThousands(Math.floor(n / 1000))} `
    n = n - (Math.floor(n / 1000) * 1000)
  }

  if(n > 99){
    hundred = `${getOnes(Math.floor(n / 100))} hundred `
    n = n - (Math.floor(n / 100) * 100);
  }
  
  if(n > 19){
    tens = `${getTens(Math.floor(n / 10) * 10)}`
    n = n - (Math.floor(n / 10) * 10)
  }

  if(n > 0){
    ones = `${getOnes(n)}`
  }
   
  if(tens && ones){
    tens += '-';
  }
    
  return format(hundredThousand + thousand + hundred + tens + ones);
}

function format(str){
  str = str.split("");
  if(str[str.length - 1] == ' '){
    str.splice(str.length - 1, 1);
  }
  
  return str.join('');
}

function getOnes(n){
  if(n == 1){ return 'one' }
  if(n == 2){ return 'two' }
  if(n == 3){ return 'three' }
  if(n == 4){ return 'four' }
  if(n == 5){ return 'five' }
  if(n == 6){ return 'six' }
  if(n == 7){ return 'seven' }
  if(n == 8){ return 'eight' }
  if(n == 9){ return 'nine' }
  if(n == 10){ return 'ten' }
  if(n == 11){ return 'eleven' }
  if(n == 12){ return 'twelve' }
  if(n == 13){ return 'thirteen' }
  if(n == 14){ return 'fourteen' }
  if(n == 15){ return 'fifteen' }
  if(n == 16){ return 'sixteen' }
  if(n == 17){ return 'seventeen' }
  if(n == 18){ return 'eighteen' }
  if(n == 19){ return 'nineteen' }
  
  return '';
}

function getTens(n){
  if(n == 20){ return 'twenty' }
  if(n == 30){ return 'thirty' }
  if(n == 40){ return 'forty' }
  if(n == 50){ return 'fifty' }
  if(n == 60){ return 'sixty' }
  if(n == 70){ return 'seventy' }
  if(n == 80){ return 'eighty' }
  if(n == 90){ return 'ninety' }
}

function getHundreds(n){
  return `${getOnes(n)} hundred`;
}

function getThousands(n){
  if(n <= 19){
    return `${getOnes(n)} thousand`;
  }

  if(n <= 99){
    let tens = Math.floor(n / 10) * 10
    let ones = n % 10;
    let connector = '';
    
    if(ones > 0){
      connector = '-';
    } else {
      ones = '';
    }
    
    return `${getTens(tens)}${connector}${getOnes(ones)} thousand`;
  }
}
