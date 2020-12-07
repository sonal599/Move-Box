let box = document.createElement("div");
let container = document.getElementById("container");
box.id = "box";
box.className="content";

let x = {
  top:170,
  left: 15,
};

document.addEventListener("keydown", moveBox);

function newBox() {
  this.container.appendChild(box);
}

function removeBox() {
  var element = document.getElementById("box");
  element.classList.remove("content");
}

function moveBox(e) {
  if (e.keyCode === 37) {
    x.left -= 10;
    if(x.left <= 17){
      x.left += 10;
   }
  }
  if (e.keyCode === 38) {
    x.top -= 10;
    if(x.top <= 170){
      x.top += 10;
   }
  }
  if (e.keyCode === 39) {
    x.left += 10;
    if(x.left >= 1400){
      x.left -= 10;
  }
}
  if (e.keyCode === 40) {
    x.top += 10;
    if(x.top >= 670){
      x.top -= 10;
   }
  }

  box.style.top = x.top + "px";
  box.style.left = x.left + "px";
}
