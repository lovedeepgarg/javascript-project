let player1Name, player2Name;

do {
    player1Name = prompt("Enter Player 1's Name:");
} while (!player1Name);

do {
    player2Name = prompt("Enter Player 2's Name:");
} while (!player2Name);

document.getElementById('player1').innerText = `${player1Name}`;
document.getElementById('player2').innerText = `${player2Name}`;


    const cells = document.querySelectorAll('.cell');
    const resetBtn = document.getElementById('resetBtn');
    let currentPlayer = 'X';
    let gameActive = true;
    let player1Score = 0;
    let player2Score = 0;

    const winningPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    cells.forEach(cell => {
      cell.addEventListener('click', () => {
        if (!gameActive || cell.textContent !== '') return;

        cell.textContent = currentPlayer;
        if (checkWin()) {
          alert(`${getCurrentPlayerName()} wins!`);
          if (currentPlayer === 'X') {
            player1Score++;
            document.getElementById('player1').innerHTML = `${player1Name}<br><span class="score">${player1Score}</span>`;
          } else {
            player2Score++;
            document.getElementById('player2').innerHTML = `${player2Name}<br><span class="score">${player2Score}</span>`;
          }
          resetGame();
        } else if (checkDraw()) {
          alert('It\'s a draw!');
          resetGame();
        } else {
          currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
      });
    });

    resetBtn.addEventListener('click', () => {
      resetGame();
    });

    function checkWin() {
      return winningPatterns.some(pattern => {
        return pattern.every(index => {
          return cells[index].textContent === currentPlayer;
        });
      });
    }

    function checkDraw() {
      return [...cells].every(cell => cell.textContent !== '');
    }

    function resetGame() {
      cells.forEach(cell => {
        cell.textContent = '';
      });
      currentPlayer = 'X';
      gameActive = true;
    }

    function getCurrentPlayerName() {
      return currentPlayer === 'X' ? player1Name : player2Name;
    }
