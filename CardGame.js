//https://www.codewars.com/kata/5a3141fe55519e04d90009d8

//Lеt's create function to play cards. Our rules:

//We have the preloaded deck:

//deck = ['joker','2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣','A♣',
//                '2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦','A♦',
//                '2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥','A♥',
//                '2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠','A♠']
//We have 3 arguments:

//card1 and card2 - any card of our deck.

//trump - the main suit of four ('♣', '♦', '♥', '♠').

//If both cards have the same suit, the big one wins.

//If the cards have different suits (and no one has trump) return 'Let's play again.'

//If one card has trump unlike another, wins the first one.

//If both cards have trump, the big one wins.

//If card1 wins, return 'The first card won.' and vice versa.

//If the cards are equal, return 'Someone cheats.'

//A few games:

//('3♣', 'Q♣', '♦') -> 'The second card won.'

//('5♥', 'A♣', '♦') -> 'Let us play again.'

//('8♠', '8♠', '♣') -> 'Someone cheats.'

//('2♦', 'A♠', '♦') -> 'The first card won.'

//('joker', 'joker', '♦') -> 'Someone cheats.'
//P.S. As a card you can also get the string 'joker' - it means this card always wins.

function cardGame(card1, card2, trump) {
  let faceCards = ['J', 'Q', 'K', 'A'];
  let card1Num = faceCards.includes(card1[0]) ? faceCards.indexOf(card1[0]) + 11 : parseInt(card1);
  let card1Suit = card1[card1.length - 1];
  let card2Num = faceCards.includes(card2[0]) ? faceCards.indexOf(card2[0]) + 11 : parseInt(card2);
  let card2Suit = card2[card2.length - 1];

  if(card1 == card2){
    return 'Someone cheats.';
  };
  
  if(card1Suit == card2Suit || (card1Suit == trump && card2Suit == trump)){;
    return card1Num > card2Num ? 'The first card won.' : 'The second card won.';
  };
  
  if(card1 == 'joker' || (card1Suit == trump && card2 != 'joker')){;
    return 'The first card won.';
  };
  
  if(card2 == 'joker' || (card2Suit == trump && card2 != 'joker')){;
    return 'The second card won.';
  };
  
  return 'Let us play again.';
};
