let sectionMons = document.getElementById('monstersContainer')

function newMonsters() {
  for (let i = 0; i < 24; i++) {
    let newMons = document.createElement('div')    
    newMons.classList.add('monster')
    sectionMons.appendChild(newMons)
  }
}
newMonsters()

console.log();
const btn = document.getElementsByTagName("button")[0];
btn.addEventListener("click", myMove);

let pos = 50

function myMove() {  
  setInterval(function () {
    if (pos === 300) {
      pos++;
      sectionMons.style.right = pos + 'px';    
    } else {
      pos++;
      sectionMons.style.left = pos + 'px';
    }
  }, 100)
}

