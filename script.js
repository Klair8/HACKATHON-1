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



const btn = document.getElementsByTagName("button")[0];
btn.addEventListener("click", myMove);

let pos = 0

function myMove() {
  setInterval(function () {
    if (pos === 300) {
      clearInterval();
    } else {
      pos++;
      invaders.style.left = pos + 'px';
    }
  }, 100)
}
