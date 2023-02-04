
const sectionMons = document.getElementById('monstersContainer')

function newMonsters() {
  for (let i = 0; i < 24; i++) {
    let newMons = document.createElement('div')
    newMons.classList.add('monster')
    sectionMons.appendChild(newMons)
  }
}
newMonsters()

const btn = document.getElementsByTagName("button")[0];
btn.addEventListener("click", myMove);
btn.addEventListener("click", moveSpaceShip);
// the start button start both monster and spaceship to move 


let posx = 50
let posy = 0
let danger = 0.5

function myMove() {
  // function stopMove() {
  //   clearInterval(moveR)
  //   clearInterval(moveLeft())
  //   clearInterval(moveDown())
  // }

  function moveRigth() {
    setInterval(function () {
      danger = danger + 0.1
    }, 500)

    setInterval(function () {
      if (posx >= 500) {
        moveDown()
        moveLeft()
      } else if (posy >= 300) {
        clearInterval()
      } else {
        posx = posx + danger;
        sectionMons.style.left = posx + 'px';
      }
    }, 10)

    function moveDown() {
      posy += 10
      sectionMons.style.top = posy + 'px'
    }

    function moveLeft() {
      setInterval(function () {
        if (posy >= 350) {
          clearInterval(moveLeft)
        } else if (posx <= 1000 && posx > 50) {
          posx = posx - danger;
          sectionMons.style.left = posx + 'px';
        } else {
          moveDown()
          moveRigth()
        }
      }, 10)
    }
    if (posy >= 400) {
      alert('lose')
    }
  }
  moveRigth()
}



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

