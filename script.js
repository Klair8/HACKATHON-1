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
// ==> for moving by himself 
 function moveSpaceShip() {
  let pos = 150
  let id =
      setInterval(function() {
               if (pos === 300) {
      clearInterval(id);
            } else {
                pos++;
                spaceShip.style.right = pos + "px";
                spaceShip.style.left = pos + 'px';
            } 
          }, 20)
        };

   

function shooting() {
  for (let i = 0; i <5 ; i++) {
  let shooting = document.createElement("div");
  let spaceShip = document.getElementById("spaceShip");
  shooting.classList.add('laser')
  spaceShip.appendChild(shooting); 
}
};
shooting();

add.addEventListener("keydown" (e){
 if (evt.KeyCode === 38){
  createListElement();
 }
};
 laser.addEventListener("keypress", addlistAfterKeypress);

