let type_M = document.getElementById("mother");
let type_P = document.getElementById("process");

let button = document.getElementById("Processor");
let toggle_button_processor = function() {
  if (type_M.style.display === "none") {
    type_M.style.display = "block";
  } else {
    type_M.style.display = "none";
  }

};
button.addEventListener("click", toggle_button_processor);


let buttonM = document.getElementById("Mother_Board");
let toggle_button_motherboard = function() {
  if (type_P.style.display === "none") {
    type_P.style.display = "block";
  } else {
    type_P.style.display = "none";
  }

};
buttonM.addEventListener("click", toggle_button_motherboard);



var start = null; 
var element = document.getElementById('shop-name');

function startAnim(timestamp) {

    if (!start) start = timestamp;
    var progress = timestamp - start;

    // Moving div element
    element.style.transform = 
    'translateX(' + Math.min(progress / 5, 700) + 'px)';
    window.requestAnimationFrame(startAnim);
}

window.requestAnimationFrame(startAnim);