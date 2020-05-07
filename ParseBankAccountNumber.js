//https://www.codewars.com/kata/597eeb0136f4ae84f9000001

//Returns the bank account number parsed from specified string.

// You work for a bank, which has recently purchased an ingenious machine to assist in reading letters 
// and faxes sent in by branch offices.
// The machine scans the paper documents, and produces a string with a bank account that looks like this:

// _     _  _     _  _  _  _  _
//| |  | _| _||_||_ |_   ||_||_|
//|_|  ||_  _|  | _||_|  ||_| _|
// Each string contains an account number written using pipes and underscores.
// Each account number should have at least one digit, all of which should be in the range 0-9.

// Your task is to write a function that can take bank account string and parse it into actual account numbers.

// @param {string} bankAccount
// @return {number}
//Examples:


//   '    _  _     _  _  _  _  _ \n'+
//   '  | _| _||_||_ |_   ||_||_|\n'+     => 123456789
//   '  ||_  _|  | _||_|  ||_| _|\n'

//   ' _  _  _  _  _  _  _  _  _ \n'+
//   '| | _| _|| ||_ |_   ||_||_|\n'+     => 23056789
//   '|_||_  _||_| _||_|  ||_| _|\n',

//   ' _  _  _  _  _  _  _  _  _ \n'+
//   '|_| _| _||_||_ |_ |_||_||_|\n'+     => 823856989
//   '|_||_  _||_| _||_| _||_| _|\n',
//(c)RSS

function parseBankAccount(bankAccount) {
  let newBankAccount = bankAccount.split('\n');
  let parser = [
  '010101111', '000001001', '010011110', '010011011', '000111001',
  '010110011', '010110111', '010001001', '010111111', '010111011' 
  ];
  let ctr = 0;
  let num = [];
  let result = [];
  
    for(let j = 0; j <= ((newBankAccount[0].length) / 3) - 1; j++){
      let temp = [];
      for(let l = ctr; l <= ctr + 2; l++){
        if(newBankAccount[0][l] == ' '){
          temp.push(0);
        } else{
          temp.push(1);
        }
      }
      for(let m = ctr; m <= ctr + 2; m++){
        if(newBankAccount[1][m] == ' '){
          temp.push(0);
        } else{
          temp.push(1);
        }
      }
      for(let n = ctr; n <= ctr + 2; n++){
        if(newBankAccount[2][n] == ' '){
          temp.push(0);
        } else{
          temp.push(1);
        }
      }
      ctr += 3;
      num.push(temp.join(''));
    }
  
  num.map(x => {
    result.push(parser.indexOf(x))
  });
  
  return parseInt(result.join(''));
}

