function getOptions() {
  var x = document.getElementById("mySelect");

  var target = "Items in the dropdown list are : ";
  var i;
  l = document.getElementById("mySelect").length;
  target = target + l;
  for (i = 0; i < x.length; i++) {
    target = target + "\n" + x.options[i].text;
  }
  alert(target);
}
