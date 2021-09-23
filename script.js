function computerPlay() {
    let x = Math.floor(Math.random()*9)+1;
    if (x<=3) {
        return 'rock'
    }
    else if (x<=6) {
        return 'paper'
    }
    else {
        return 'scissors'
    }
}


function playRound(playerSelection, computerSelection) {
    // your code here!
    playerSelection = String(playerSelection).toLowerCase();
    computerSelection = String(computerSelection).toLowerCase();
    if (playerSelection === computerSelection) {
        return;
    }
    else if (playerSelection==='rock' && computerSelection==='paper') {
        return(computerSelection);
    }
    else if (playerSelection==='paper' && computerSelection==='rock') {
        return(playerSelection);
    }
    else if (playerSelection==='scissors' && computerSelection==='rock') {
        return(computerSelection);
    }
    else if (playerSelection==='rock' && computerSelection==='scissors') {
        return(playerSelection);
    }
    else if (playerSelection==='paper' && computerSelection==='scissors') {
        return(computerSelection);
    }
    else if (playerSelection ==='scissors' && computerSelection==='paper') {
        return(playerSelection);
    }
    
  }
  

  let comp = 0;
  let player = 0;
    for(let i=0; i<5; i++) {
        let computerSelection = computerPlay();
        let playerSelection = prompt("Enter paper, scissors, or rock");
       let res = playRound(playerSelection, computerSelection)
       if (res === computerSelection) {
           comp = comp+1;
       }
       else if (res === playerSelection) {
           player = player+1;
       }
       else {
       }
   }
  if (comp > player) {
    alert('The PC won ' + comp + ' games to ' + player);
}
else if (comp < player) {
    alert('Congratulations! You won ' + player + ' games to ' + comp + '!');
  }
  else {
      alert('It\'s a draw! Play again');
  }