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

// var = imaj;

// function photo() {
//   var b = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg"];
//   imaj = "";

//     var random = Math.round(Math.random() * 5);
//     imaj = b[random]

// }

// setInterval(function () {
//   photo();

//   document.getElementById("image").src = imaj;

// }, 3000);
