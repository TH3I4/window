
drag.onmousedown = function(event) {

  let shiftX = event.clientX - drag.getBoundingClientRect().left;
  let shiftY = event.clientY - drag.getBoundingClientRect().top;

  drag.style.position = 'absolute';
  drag.style.zIndex = 1000;
  document.body.append(drag);

  moveAt(event.pageX, event.pageY);

  // centers the drag at (pageX, pageY) coordinates
  function moveAt(pageX, pageY) {
    drag.style.left = pageX - shiftX + 'px';
    drag.style.top = pageY - shiftY + 'px';
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  // (3) move the drag on mousemove
  document.addEventListener('mousemove', onMouseMove);

  // (4) drop the drag, remove unneeded handlers
  drag.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    drag.onmouseup = null;
  };

};

drag.ondragstart = function() {
  return false;
};

var max = 10000;
var min = 0;

var rand = Math.floor(Math.random() * (max - min + 1) + min);
$("#one").attr("margin-top",rand);
$("#one").attr("margin-left",rand);



/*
document.getElementById("demo").innerHTML = "hey";
var x = myFunction(4, 3);
——or:
document.getElementById("demo").innerHTML = ;*/

