//https://www.codewars.com/kata/5827e2efc983ca6f230000e0

//Description:
//Give you two number rows , columns and a string str. Returns a rows x columns table pattern and 
//fill in the str(each grid fill in a char, the length of str is always less than or equals to the total numbers of grids):

// If rows = 4 and columns = 4, str = "Hello World!"
// The pattern should be a 4x4 table like this:
// +---+---+---+---+
// | H | e | l | l |   From left to right
// +---+---+---+---+
// | o |   | W | o |   and from top to bottom
// +---+---+---+---+
// | r | l | d | ! |   each row separated by "\n"
// +---+---+---+---+
// |   |   |   |   |
// +---+---+---+---+
//Some examples:
//pattern(3, 3, "codewars") should return:
//+---+---+---+
//| c | o | d |
//+---+---+---+
//| e | w | a |
//+---+---+---+
//| r | s |   |
//+---+---+---+

//pattern(4, 3, "Nice pattern") should return:
//+---+---+---+
//| N | i | c |
//+---+---+---+
//| e |   | p |
//+---+---+---+
//| a | t | t |
//+---+---+---+
//| e | r | n |
//+---+---+---+

//pattern(3, 4, "Nice pattern") should return:
//+---+---+---+---+
//| N | i | c | e |
//+---+---+---+---+
//|   | p | a | t |
//+---+---+---+---+
//| t | e | r | n |
//+---+---+---+---+

function pattern(rows,columns,str){
  let newStr = str.split('');
  let result = lines(columns) + '\n';
  
  for(let i = 0; i < rows; i++){
    let temp = "|";
    for(let j = 0; j < columns; j++){
      if(newStr.length > 0){
        temp += " " + newStr.splice(0,1)[0] + " |";  
      } else {
        temp += "   |";  
      };
    };
    temp += "\n"+ lines(columns);
    if(i != rows - 1){
      temp += '\n'
    };
    result += temp;
  };
  return result;
};

function lines(val){
  let result = '';
  for(let i = 0;i < val; i++){
    result += "+---";
  };
  return result + "+";
};
