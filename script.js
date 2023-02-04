function newMonsters() {
  for (let i = 0; i < 48; i++) {
    let newMons = document.createElement('div')
    let sectionMons = document.getElementById('monstersContainer')
    newMons.classList.add('monster')
    sectionMons.appendChild(newMons)
  }
}
newMonsters()

const invaders = document.getElementById("animate");

const btn = document.getElementById("button");
// btn.addEventListener("click", myMove);
btn.addEventListener("click", moveSpaceShip);
// the start button start both monster and spaceship to move 

// // BASE
// const KEY_RIGHT= 39;
// const KEY_LEFT= 37;
// const KEY_UP= 38;

// const STATE = {
//   move_left : false,
//   move_right : false,
//   shoot: false,
// }

let spaceShip = document.getElementById("spaceShip");

// ship moving 
let pos = 150
let dir = 1

 function moveSpaceShip() {;
  setInterval(function () {
    if (pos >300) dir = - 1
      else if (pos<0) dir= 1 
     pos+= dir
      spaceShip.style.left = pos + 'px';
    }, 60)
  };


// shootting time 

// function shoot(e){
// let laserId
// let currentLaserIndex = currentspaceShipIndex
// function movelaser(){
//   spaceShip[currentLaserIndex].classList.remove(`laser`)
//   currentLaserIndex -= innerWidth
//   spaceShip[currentLaserIndex].classList.add(`laser`)
// }
// switch (e.key){
//   case `ArrowUp`:
//     laserId = setInterval(movelaser,100)
// }
// };

// document.addEventListener("keydown", shoot)  
