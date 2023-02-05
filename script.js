
const container = document.querySelector('.container')
const resultsDisplay = document.querySelector('.results')
let currentSpaceshipIndex = 188
let width = 18
let direction = 1
let invaderId
let goingRight = true
let aliensRemoved = []
let results 


for (let i = 0; i < 198; i++) {
  const square = document.createElement('div');
  container.appendChild(square)
  square.classList.add(`square${i}`)
}

const squares = Array.from(document.querySelectorAll('.container div'))

const alienInvaders = [
  0,1,2,3,4,5,6,7,8,
  18,19,20,21,22,23,24,25,26,
  36,37,38,39,40,41,42,43,44,
]

function drawMonsters() {
  for (let i = 0; i < alienInvaders.length; i++) {
    if(!aliensRemoved.includes(i)) {
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

squares[currentSpaceshipIndex].classList.add('spaceShip');

//MOVE SPACESHIP

function moveSpaceShip(e) {;
  squares[currentSpaceshipIndex].classList.remove('spaceShip');
  switch(e.key) {
    case 'ArrowLeft':
      if (currentSpaceshipIndex % width !== 0) currentSpaceshipIndex -=1
    break
    case 'ArrowRight':
    if (currentSpaceshipIndex % width < width -1 ) currentSpaceshipIndex +=1
    break
  }
  squares[currentSpaceshipIndex].classList.add('spaceShip')
}
  document.addEventListener('keydown', moveSpaceShip);

// SHOOTING TIME

function shootingTime(e) {
let laserId
let currentLaserIndex = currentSpaceshipIndex
function moveLaser(){
   squares[currentLaserIndex].classList.remove('laser');
   currentLaserIndex -= width
  squares[currentLaserIndex].classList.add('laser');

if(squares[currentLaserIndex].classList.contains('monster')){
squares[currentLaserIndex].classList.remove('laser')
squares[currentLaserIndex].classList.remove('monster')
squares[currentLaserIndex].classList.add('blast')

setTimeout(()=>squares[currentLaserIndex].classList.remove('blast'),300)
clearInterval(laserId)


const alienRemoved = alienInvaders.indexOf(currentLaserIndex)
aliensRemoved.push(alienRemoved)
results ++
resultsDisplay.innerHTML = results
console.log(aliensRemoved)
}

}
switch(e.key){
  case'ArrowUp':
  laserId = setInterval(moveLaser,100)
  }
}
document.addEventListener("keydown", shootingTime)

// MOVE MONSTER

function myMove(){
  const leftEdge = alienInvaders[0] % width === 0
  const rightEdge = alienInvaders[alienInvaders.lenght - 1] % width === 0
  removeMonsters()

if (rightEdge && goingRight) {
  for (let i = 0; i < alienInvaders.length; i++) {
    alienInvaders[i] += width +1
    direction = -1
    goingRight = false
  }
}

if  (leftEdge && !goingRight) {
  for (let i = 0; i < alienInvaders.length; i++) {
    alienInvaders[i] += width -1
    direction = 1
    goingRight = true
  }
}
for (let i = 0; i < alienInvaders.length; i++) {
  alienInvaders[i] += direction
}
drawMonsters()

if (squares[currentSpaceshipIndex].classList.contains('spaceShip', 'monster')) {
  resultsDisplay.innerHTML = 'GAME OVER'
  clearInterval(invaderId)
}

for (let i = 0; i < alienInvaders.length; i++) {
  if(alienInvaders[i] > (squares.length)) {
    resultsDisplay.innerHTML = 'GAME OVER'
    clearInterval(invaderId)
  }
}
if (aliensRemoved.length === alienInvaders.length) {
  resultsDisplay.innerHTML = 'YOU WIN'
  clearInterval(invaderId)
}
}
invaderId = setInterval(myMove, 600)