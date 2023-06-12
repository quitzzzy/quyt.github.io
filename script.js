var nut = document.getElementById("btnquay");
nut.addEventListener("click", draw);

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function draw() {
  number = getRndInteger(0, 999999);
  number = String(number).padStart(6, "0");
  document.getElementById("num").innerHTML = number;
}
