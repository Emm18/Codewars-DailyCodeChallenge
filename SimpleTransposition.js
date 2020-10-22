//https://www.codewars.com/kata/57a153e872292d7c030009d4

//Simple transposition is a basic and simple cryptography technique. We make 2 rows and put first a letter in the Row 1, 
//the second in the Row 2, third in Row 1 and so on until the end. Then we put the text from Row 2 next to the Row 1 text and thats it.

//Complete the function that receives a string and encrypt it with this simple transposition.

//Example
//For example if the text to encrypt is: "Simple text", the 2 rows will be:

//Row 1	S	m	l		e	t
//Row 2	i	p	e	t	x	

//So the result string will be: `"Sml etipetx"`

function simpleTransposition(text) {
  let newText = text.split('');
  let firstRow = [];
  let secondRow = [];
  let turn = true;
  
  while(newText.length > 0){
    if(turn){
      firstRow.push(newText.splice(0,1)[0]);
      turn = false;
    } else {
      secondRow.push(newText.splice(0,1)[0]);
      turn = true;
    };
  };
  
  return firstRow.join('') + secondRow.join('');
};
