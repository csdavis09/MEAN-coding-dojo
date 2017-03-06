// Create a Deck object constructor. A deck should have the following functionality:
// The Deck should contain the 52 standard cards
// The Deck should be able to shuffle
// https://bost.ocks.org/mike/shuffle/ for notes on how to create the shuffle function
// The Deck should be able to reset
// The Deck should be able to deal a random card
class Deck{
  constructor(){
    this.newDeck();
  }
}
Deck.prototype.newDeck = function(){
  var suits = ['hearts', 'diamonds', 'spades', 'clubs'];
  var ranks = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  // var cardMap = Map()
  // var cards;
  // for (var s = 0; s < suits.length; s+=1){
  //   for(var r = 0; r < rank.lenght; r +=1) {
  //     cardMap.set(suits, rank);
  //     for(var [key, val] of cardMap){
  //       console.log(key, val);
  //       card =+ {key:val}
  //     }
  //   }    ****** I will need to research more about how to use the map function like a for each to create a card.
  // }
  var self = this;
  this.cards = [];
  // this constructs each card using a for-loop to push each value to a new card.
  suits.forEach(function(suit){
    ranks.forEach(function(rank){
      self.cards.push(new Card(rank, suit))
    });
  });
  return this;
}
Deck.prototype.shuffle = function(){
  var d = this.cards.length,
      index,
      temp;

  while(d){
    index = Math.floor(Math.random() * d--);

    temp = this.cards[d];
    this.cards[d] = this.cards[index];
    this.cards[index] = temp;
  }
  return this;
}
// Deal should return the card that was dealt and remove it from the deck
Deck.prototype.deal = function(){
  if(this.cards.length > 0){
    return this.cards.pop();
  }
  else{
    return null;
  }
  // var index,
  //     cardArr = this.cards.length;
  //
  // cards.forEach(function(card){
  //   index = Math.floor(Math.random() * cardArr--)
  //   Player.hand.push(cardArr[index])
  // })
}
Deck.prototype.reset = function(){
  this.newDeck().shuffle();
}


class Card{
  constructor(rank, suit){
    this.rank = rank;
    this.suit = suit;
      }
  }

// Now create a Player object constructor. A Player should have the following functionality:
// The Player should have a name
// The Player should have a hand
// The Player should be able to take a card (use the deck.deal method)
// The Player should be able to discard a card
class Player{
  constructor(name){
    this.name = name
    this.hand = []
    }
  }

Player.prototype.takeCard = function(deck){
  this.hand.push(deck.deal())
  return this;
}
Player.prototype.discard = function(cardIdx){
  if(this.hand.length > cardIdx){
    this.hand.splice(cardIdx, 1);
  }
  return this;
}

// Optional:
//
// Create a blackjack game with your deck of cards!
