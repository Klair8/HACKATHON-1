
const container = document.querySelector('.container')
let currentspaceShipIndex = 188
let width = 20
let direction = 1
let invaderId


for (let i = 0; i < 198; i++) {
  const square = document.createElement('div');
  container.appendChild(square)
}

const squares = Array.from(document.querySelectorAll('.container div'))

const alienInvader = [
  0,1,2,3,4,5,6,7,8,9,
  18,19,20,21,22,23,24,25,26,27,
  36,37,38,39,40,41,42,43,44,45
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



// // // shootting time 

// // // let posShoot = 0

// // // document.addEventListener("keydown", blast)

// // // function blast (){
// // // let shoot = document.createElement('div');
// // // shoot.classList.add('laser');
// // // spaceShip.appendChild(shoot);
// // // // shoot.style.top = posShoot + 'px'
// // // // setInterval(function () {
// // // // {shoot.style.top = posShoot - 1 + 'px' }, 100);
// // // //  if (e.key === 38){}
// // // }

// // // blast();











// // let laserId
// // let currentLaserIndex = currentspaceShipIndex
// // function movelaser(){
// //   spaceShip[currentLaserIndex].classList.remove(`laser`)
// //   currentLaserIndex -= innerWidth
// //   spaceShip[currentLaserIndex].classList.add(`laser`)
// // }
// // switch (e.key){
// //   case `ArrowUp`:
// //     laserId = setInterval(movelaser,100)
// // }
// // };

// // document.addEventListener("keydown", shoot)  

