
const container = document.querySelector('.container')
let currentspaceShipIndex = 167
let width = 16
let direction = 1
let invaderId
let aliensRemoved 
// const resultdisplay =querySelector(."result")


for (let i = 0; i < 175; i++) {
  const square = document.createElement('div');
  container.appendChild(square)
  square.classList.add(`square${i}`)
}

const squares = Array.from(document.querySelectorAll('.container div'))

const alienInvader = [
  0,1,2,3,4,5,6,7,8,9,
  16,17,18,19,20,21,22,23,24,25,
  32,33,34,35,36,37,38,39,40,41,
]

function newMonsters() {
  for (let i = 0; i < alienInvader.length; i++) {
    squares[alienInvader[i]].classList.add('monster')
  }
}
newMonsters()

squares[currentspaceShipIndex].classList.add('spaceShip');

// move spaceship
function moveSpaceShip(e) {;
  squares[currentspaceShipIndex].classList.remove('spaceShip');
  switch(e.key) {
    case 'ArrowLeft':
      if (currentspaceShipIndex % width !== 0) currentspaceShipIndex -=1
    break
    case 'ArrowRight':
    if (currentspaceShipIndex % width < width -1 ) currentspaceShipIndex +=1
    break
    }
    squares[currentspaceShipIndex].classList.add('spaceShip')
  }


    document.addEventListener('keydown', moveSpaceShip);

// move monster
const btn = document.getElementsByTagName("button")[0];
btn.addEventListener("click", myMove);

squares[currentLastMonster].classList.add('last monster');

function myMove(){
  squares[currentspaceShipIndex].classList.remove('last monster');
  if(currentLastMonster % width !== 0 )currentLastMonster +=1
  break
  squares[currentLastMonster].classList.add('last monster')
}
 setInterval( myMove, 100);


function myMove() {
    setInterval
    (alienInvader[0] % width < width -1 ) { alienInvader[0] +=1}
    }, 100)

  }
  myMove();

