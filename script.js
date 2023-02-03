function newMonsters() {
  for (let i = 0; i < 48; i++) {
    let newMons = document.createElement('div')
    let sectionMons = document.getElementById('monstersContainer')
    newMons.classList.add('monster')
    sectionMons.appendChild(newMons)
  }
}
newMonsters()

// const invaders = document.getElementById("animate");

const btn = document.getElementById("button");
btn.addEventListener("click", myMove);
btn.addEventListener("click", moveSpaceShip);
// the start button start both monster and spaceship to move 


function myMove() {
  let pos = 0
  setInterval(function () {
    if (pos === 300) {
      clearInterval();
    } else {
      pos++;
      invaders.style.left = pos + 'px';
    }
  }, 100)
}


let spaceShip = document.getElementById("spaceShip");
let shooting = document.createElement("div");
shooting.classList.add('laser')
spaceShip.appendChild(shooting); 

// ==> moving but only when clicking back anf forth on the start games ...
let pos = 150
let dir = 45

 function moveSpaceShip() {;
  setInterval(function () {
    if (pos >300) dir = - 20
      else if (pos<0) dir= 20   
     pos+= dir
      spaceShip.style.left = pos + 'px';
    }, 60)
  }


