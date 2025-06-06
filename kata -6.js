/*Rock Paper Scissors
Let's play! You have to return which player won! In case of a draw return Draw!.

Examples(Input1, Input2 --> Output):

"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!"*/
const rps = (p1, p2) => {
  switch(p1+'-'+p2){
          case 'scissors-paper':
    case 'rock-scissors':
       case 'paper-rock':
    
      return 'Player 1 won!';
    case 'scissors-rock':
       case 'rock-paper':
      case 'paper-scissors':
    return 'Player 2 won!';
      case'paper-paper':
      return 'Draw!';
  
      default:
      return 'Draw!';
      
  }

};
rps('scissors-rocks');