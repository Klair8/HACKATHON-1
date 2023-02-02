
const invaders = document.getElementById("animate");

const btn = document.getElementsByTagName("button")[0];
btn.addEventListener("click", myMove);

let pos = 0  

    function myMove() {
      setInterval(function(){
            if  (pos === 300)  {
              clearInterval();
            }
            else {
                pos++;
                invaders.style.left = pos + 'px';
            } }, 100)
        };

