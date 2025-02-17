let randomNumber = Math.floor(Math.random() * 100) + 1;
        let guesses = document.querySelector('.guesses');
        let lastResult = document.querySelector('.lastResult');
        let lowOrHi = document.querySelector('.lowOrHi');
        let guessSubmit = document.querySelector('.guessSubmit');
        let guessField = document.querySelector('.guessField');
        let guessCount = 1;
        let resetButton;

        function checkGuess() {
            let userGuess = Number(guessField.value);
            if (guessCount === 1) {
                guesses.style.backgroundColor = 'yellow';
                guesses.style.color = 'blue';
                guesses.textContent = 'Previous guesses: ';
            }
            guesses.textContent += userGuess + ' ';

            if (userGuess === randomNumber) {
                lastResult.textContent = 'Congratulations! You got it right!';
                lastResult.style.backgroundColor = 'green';
                lowOrHi.textContent = '';
                setGameOver();
            } else if (guessCount === 10) {
                lastResult.textContent = '!!!GAME OVER TRY AGAIN!!!';
                setGameOver();
            } else {
                lastResult.textContent = 'Wrong!';
                lastResult.style.backgroundColor = 'red';
                if(userGuess < randomNumber) {
                    lowOrHi.textContent = 'Last guess was too low!';
                } else if(userGuess > randomNumber) {
                    lowOrHi.textContent = 'Last guess was too high!';
                }
            }
            guessCount++;
            guessField.value = '';
            guessField.focus();
        }

        guessSubmit.addEventListener('click', checkGuess);

        function setGameOver() {
            guessField.disabled = true;
            guessSubmit.disabled = true;
            resetButton = document.createElement('button');
            resetButton.textContent = 'Start new game>>>';
            resetButton.style.backgroundColor = 'yellow';
            resetButton.style.width= "250px";
            resetButton.style.height= "50px";
            resetButton.style.marginTop = '40px';
            resetButton.style.marginLeft = '50px';
            resetButton.style.borderRadius = '20px';
            resetButton.style.fontSize = '20px';
            resetButton.style.color = 'green';
            resetButton.style.border = 'none';
            resetButton.style.fontWeight = 'bold';
            document.body.append(resetButton);
            resetButton.addEventListener('click', resetGame);
        }

        function resetGame() {
            guessCount = 1;
            let resetParas = document.querySelectorAll('.resultParas p');
            for(let i = 0 ; i < resetParas.length ; i++) {
                resetParas[i].textContent = '';
            }
            resetButton.parentNode.removeChild(resetButton);
            guessField.disabled = false;
            guessSubmit.disabled = false;
            guessField.value = '';
            guessField.focus();
            lastResult.style.backgroundColor = 'white';
            randomNumber = Math.floor(Math.random() * 100) + 1;
        }