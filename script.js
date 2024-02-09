new TypeIt("#simpleUsage", {
  strings: "Hay, Welcome My Darling <b>SHABRINA DWIRA RAHMATIKA<b>",
  speed: 70,
  waitUntilVisible: true,
}).go();

document.getElementById("yesbutton").addEventListener("click", function () {
  document.getElementById("gif").style.display = "block";
  document.getElementById("q").style.display = "none";
});

var b = document.getElementById("no");
b.addEventListener("click", change);
function change() {
  var i = Math.floor(Math.random() * 1000) + 1;
  var j = Math.floor(Math.random() * 500) + 1;
  b.style.top = j + "px";
  b.style.left = i + "px";
}
