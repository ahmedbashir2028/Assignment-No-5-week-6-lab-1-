function highlight() {
  var target = document.getElementsByTagName("strong");

  for (let i = 0; i < target.length; i++) {
    target[i].style.color = "blue";
  }
}

function unhighlight() {
  var target = document.getElementsByTagName("strong");

  for (let i = 0; i < target.length; i++) {
    target[i].style.color = "black";
  }
}
