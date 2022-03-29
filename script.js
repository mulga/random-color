var text;

function createColor() {
  var a = "ABCDEF0123456789";
  text = "#";

  for (i = 0; i < 6; i++) {
    var random = Math.round(Math.random() * 15);
    text += a.charAt(random);
  }
}

setInterval(function () {
  createColor();

  document.getElementById("backColor").style.backgroundColor = text;
  document.getElementById("color").innerHTML = text;
}, 3000);
