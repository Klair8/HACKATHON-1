
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

// game over
// If (squares[currentspaceShipIndex].classList.contains('monster', 'spaceShip')){
// resultdisplay.innerHTML = 'GAME OVER'
// clearInterval(invaderId)
// }

// for ( let i= 0; i < alienInvader.length; i++){
// if (alienInvader[i]> (squares.length)){
// resultdisplay.innerHTML = 'GAME OVER'
// clearInterval(invaderId)
// }
// }

// invaderId = setInterval(myMove,100)

// SHOOTING TIME

function shootingTime(e) {
let laserId
let currentLaserIndex = currentspaceShipIndex
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

const alienRemoved = alienInvader.indexOf(currentLaserIndex)
aliensRemoved.push(alienRemoved)
}
}
switch(e.key){
  case'ArrowUp':
  laserId = setInterval(moveLaser,100)
}
}
document.addEventListener("keydown", shootingTime)


// // move monster
// const btn = document.getElementsByTagName("button")[0];
// btn.addEventListener("click", myMove);

// squares[currentLastMonster].classList.add('last monster');

// function myMove(){
//   squares[currentspaceShipIndex].classList.remove('last monster');
//   if(currentLastMonster % width !== 0 )currentLastMonster +=1
//   break
//   squares[currentLastMonster].classList.add('last monster')
// }
//  setInterval( myMove, 100);


// function myMove() {
//     setInterval
//     (alienInvader[0] % width < width -1 ) { alienInvader[0] +=1}
//     }, 100)

//   }
//   myMove();
  


//     function moveDown() {
//       posy += 10
//       sectionMons.style.top = posy + 'px'
//     }
// //   }

//     function moveLeft() {
//       setInterval(function () {
//         if (posy >= 350) {
//           clearInterval(moveLeft)
//         } else if (posx <= 1000 && posx > 50) {
//           posx = posx - danger;
//           sectionMons.style.left = posx + 'px';
//         } else {
//           moveDown()
//           moveRigth()
//         }
//       }, 10)
//     }
//     if (posy >= 800) {
//       // alert('lose')
//     }
//   }
//   moveRigth()











