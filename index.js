const cells = Array.from(document.querySelectorAll('.cell'));
let currentPlayer = 'X';
let isGameActive = true;
	function handleClick(cellIndex) {
	 if (!isGameActive || cells[cellIndex].textContent !== '') {
		 return;
	 }
		 cells[cellIndex].textContent = currentPlayer;
		cells[cellIndex].classList.add(currentPlayer);
 if (checkForWin()) {
		 endGame(`Player ${currentPlayer} wins!`);
	 } else if (checkForDraw()) {
		 endGame("It's a draw!");
	 } else {
		 currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
	 }
}
	function checkForWin() {
		 const winningCombinations = [
			 [0, 1, 2],
			 [3, 4, 5],
			 [6, 7, 8],
			 [0, 3, 6],
			 [1, 4, 7],
			 [2, 5, 8],
			 [0, 4, 8],
			 [2, 4, 6]
 ];
for (let combination of winningCombinations) {
			 const [a, b, c] = combination;
			 if (
					 cells[a].textContent === currentPlayer &&
					 cells[b].textContent === currentPlayer &&
					 cells[c].textContent === currentPlayer
				 ) {
					 return true;
			 }
	 }
		 return false;
}
		function checkForDraw() {
		 return cells.every(cell => cell.textContent !== '');
}
		function endGame(message) {
		 isGameActive = false;
		 document.getElementById('tic-tac-toe').classList.add('game-over');
		 alert(message);
}
