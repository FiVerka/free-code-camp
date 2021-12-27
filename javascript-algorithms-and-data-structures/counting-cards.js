/*
In the casino game Blackjack, a player can gain an advantage over the house
by keeping track of the relative number of high and low cards remaining
in the deck. This is called Card Counting.

Having more high cards remaining in the deck favors the player. Each card
is assigned a value according to the table below. 
When the count is positive, the player should bet high.
When the count is zero or negative, the player should bet low.

-------------------------------------
Count Change	Cards
-------------------------------------
    +1	      2, 3, 4, 5, 6
     0	      7, 8, 9
    -1	      10, 'J', 'Q', 'K', 'A'

The card counting function "cc" receives a card parameter, which can be
a number or a string, and increments or decrements the global count variable
according to the card's value (see table). The function returns a string
with the current count and 
the string Bet if the count is positive, or 
Hold if the count is zero or negative.

Example Outputs: 
-3 Hold
5 Bet
*/

let count = 0;

function cc(card) {
  if (card <= 6) {
    count++;
  } else if (card <= 9) {
    // pass;
  } else {
    count--;
  }
  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
}

// Examples:
// reset count // cc(2); cc(3); cc(7); cc('K'); cc('A'); -> "0 Hold"
// reset count // cc(2); cc(3); cc(4); cc(5); cc(6); -> "5 Bet"
// reset count // cc(7); cc(8); cc(9); -> "0 Hold"
// reset count // cc(10); cc('J'); cc('Q'); cc('K'); cc('A'); -> "-5 Hold"
// reset count // cc(3); cc(7); cc('Q'); cc(8); cc('A'); -> "-1 Hold"
// reset count // cc(2); cc('J'); cc(9); cc(2); cc(7); -> "1 Bet"
// reset count // cc(2); cc(2); cc(10); -> "1 Bet"
// reset count // cc(3); cc(2); cc('A'); cc(10); cc('K'); -> "-1 Hold"
