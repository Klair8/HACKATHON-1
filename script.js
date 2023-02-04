const container = document.querySelector('.container')
let currentspaceShipIndex = 188
let width = 18
let direction = 1
let invadersId
let goingRight = true
let aliensRemoved = []
for (let i = 0; i < 198; i++) {
  const square = document.createElement('div');
  container.appendChild(square)
  square.classList.add(`square${i}`)
}
const squares = Array.from(document.querySelectorAll('.container div'))
const alienInvaders = [
  0, 1, 2, 3, 4, 5, 6, 7, 8,
  18, 19, 20, 21, 22, 23, 24, 25, 26,
  36, 37, 38, 39, 40, 41, 42, 43, 44,
]

function drawMonsters() {
  for (let i = 0; i < alienInvaders.length; i++) {
    if (!aliensRemoved.includes(i)) {
      squares[alienInvaders[i]].classList.add('monster')
    }
  }
}
drawMonsters()

function removeMonsters() {
  for (let i = 0; i < alienInvaders.length; i++) {
    squares[alienInvaders[i]].classList.remove('monster')
  }
}
squares[currentspaceShipIndex].classList.add('spaceShip');
// move spaceship
function moveSpaceShip(e) {
  ;
  squares[currentspaceShipIndex].classList.remove('spaceShip');
  switch (e.key) {
    case 'ArrowLeft':
      if (currentspaceShipIndex % width !== 0) currentspaceShipIndex -= 1
      break
    case 'ArrowRight':
      if (currentspaceShipIndex % width < width - 1) currentspaceShipIndex += 1
      break
  }
  squares[currentspaceShipIndex].classList.add('spaceShip')
}
document.addEventListener('keydown', moveSpaceShip);
// SHOOTING TIME
function shootingTime(e) {
  let laserId
  let currentLaserIndex = currentspaceShipIndex

  function moveLaser() {
    squares[currentLaserIndex].classList.remove('laser');
    currentLaserIndex -= width
    squares[currentLaserIndex].classList.add('laser');
    if (squares[currentLaserIndex].classList.contains('monster')) {
      squares[currentLaserIndex].classList.remove('laser')
      squares[currentLaserIndex].classList.remove('monster')
      squares[currentLaserIndex].classList.add('blast')
      setTimeout(() => squares[currentLaserIndex].classList.remove('blast'), 300)
      clearInterval(laserId)
      const alienRemoved = alienInvaders.indexOf(currentLaserIndex)
      aliensRemoved.push(alienRemoved)
    }
  }
  switch (e.key) {
    case 'ArrowUp':
      laserId = setInterval(moveLaser, 100)
  }
}
document.addEventListener("keydown", shootingTime)
// // move monsters
let moveMonst = document.getElementById("theButton");
moveMonst.addEventListener("click", myMove);

function myMove() {
  invadersId = setInterval(myMove, 10000)
  const leftEdge = alienInvaders[0] % width === 0
  const rightEdge = alienInvaders[alienInvaders.lenght - 18] % width === 0
  removeMonsters()
  if (rightEdge && goingRight) {
    for (let i = 0; i < alienInvaders.length; i++) {
      alienInvaders[i] += width + 1
      direction = -1
      goingRight = false
    }
  }
  if (leftEdge && !goingRight) {
    for (let i = 0; i < alienInvaders.length; i++) {
      alienInvaders[i] += width - 1
      direction = 1
      goingRight = true
    }
  }
  for (let i = 0; i < alienInvaders.length; i++) {
    alienInvaders[i] += direction
  }
  drawMonsters()
  if (squares[currentspaceShipIndex].classList.contains('spaceShip', 'monster')) {
   console.log('game over1');
    resultsDisplay.innerHTML = 'GAME OVER'
    clearInterval(invadersId)
  }
  for (let i = 0; i < alienInvaders.length; i++) {
    if(alienInvaders[i] > (squares.length)) {
      console.log('game over2');
      resultsDisplay.innerHTML = 'GAME OVER'
      clearInterval(invadersId)
    }
  }
  if (aliensRemoved.length === alienInvaders.length) {
    alert('win')
    clearInterval(invadersId)
  }

}
