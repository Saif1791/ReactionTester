var start = new Date().getTime();
function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
function reappear() {
  var top = (document.getElementById("shape").style.display.top =
    Math.random() * 200);
  var left = (document.getElementById("shape").style.display.left =
    Math.random() * 200);
  var width = (document.getElementById("shape").style.width =
    Math.random() * 400);
  var height = (document.getElementById("shape").style.height =
    Math.random() * 400);
  if (Math.random() < 0.5) {
    document.getElementById("shape").style.borderRadius = "50%";
  } else {
    document.getElementById("shape").style.borderRadius = "0%";
  }
  document.getElementById("shape").style.backgroundColor = getRandomColor();
  document.getElementById("shape").style.top = top + "px";
  document.getElementById("shape").style.left = left + "px";
  document.getElementById("shape").style.width = width + "px";
  document.getElementById("shape").style.height = height + "px";
  document.getElementById("shape").style.display = "block";
  start = new Date().getTime();
}
function timeout() {
  setTimeout(reappear, Math.random() * 3000);
}
timeout();
reappear();
document.getElementById("shape").onclick = function () {
  document.getElementById("shape").style.display = "none";
  var end = new Date().getTime();
  var time = end - start;
  document.getElementById("timetaken").innerHTML = time + "ms";
  timeout();
};
