let hStandPoint = 0;
let vStandPoint = 0;

function goRight() {
  hStandPoint += 10;
  mini.style.left = hStandPoint + "px";
}
function goLeft() {
  hStandPoint -= 10;
  mini.style.left = hStandPoint + "px";
}
function goUp() {
  vStandPoint -= 10;
  mini.style.top = vStandPoint + "px";
}
function goDown() {
  vStandPoint += 10;
  mini.style.top = vStandPoint + "px";
}

let mini = document.querySelector(".mini");
let body = document.querySelector("body");
body.addEventListener("keypress", move);

function move(e) {
  console.log(e);
  if (e.code == "KeyS") goRight();
  if (e.code == "KeyA") goLeft();
  if (e.code == "KeyW") goUp();
  if (e.code == "KeyZ") goDown();
  if (window.innerWidth <= hStandPoint && window.innerHeight / 2 <= vStandPoint)
    alert("You win 💪🏻");
  // you can use || or  &&
  console.log(vStandPoint);
}
console.log(window.innerWidth);
console.log(window.innerHeight);
