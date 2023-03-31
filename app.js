const game = () => {
    let playerscore = 0;
    let computerscore = 0;
    
    const playgame = () => {
        const rockbutton = document.querySelector('.ROCKBUTTON');
        const paperbutton = document.querySelector('.PAPERBUTTON');
        const scissorbutton = document.querySelector('.SCISSORBUTTON');
        const playeroptions = [rockbutton, paperbutton, scissorbutton];
        const computeroptions = ['rock', 'paper', 'scissor'];

        //JATEK KEZDETE:
        playeroptions.forEach(option => {
            option.addEventListener('click', function(){
                const choicenumber = Math.floor(Math.random()*3);
                const computerchoice = computeroptions[choicenumber];               

                winner(this.innerText, computerchoice);

            })
        })

    }

    //NYERTES ELDONTESE:
    const winner =(player, computer) => {
        const result = document.querySelector('.RESULT');
        const playerscoreboard = document.querySelector('.P-COUNT');
        const computerscoreboard = document.querySelector('.C-COUNT');

        player = player.toLowerCase();
        computer = computer.toLowerCase();

        if(player == computer){
            result.textContent = 'TIE';
        }
        else if(player == 'rock'){
            if(computer == 'paper'){
                result.textContent = 'COMPUTER WON';
                computerscore++;
                computerscoreboard.textContent = computerscore;
            }
            else{
                result.textContent = 'PLAYER WON';
                playerscore++;
                playerscoreboard.textContent = playerscore;
            }
        }
        else if(player == 'scissor'){
            if(computer == 'rock'){
                result.textContent = 'COMPUTER WON';
                computerscore++;
                computerscoreboard.textContent = computerscore;
            }
            else{
                result.textContent = 'PLAYER WON';
                playerscore++;
                playerscoreboard.textContent = playerscore;
            }
        }
        else if(player == 'paper'){
            if(computer == 'scissor'){
                result.textContent = 'COMPUTER WON';
                computerscore++;
                computerscoreboard.textContent = computerscore;
            }
            else{
                result.textContent = 'PLAYER WON';
                playerscore++;
                playerscoreboard.textContent = playerscore;
            }
        }
    }

    playgame();
}

game();