let even = document.querySelectorAll(".wrapper :nth-child(even)");

for (let i = 0; i <= even.length; i++) {
  even[i].style.border = "3px solid green";
}

let odd = document.getElementsByTagName("#wrapper :nth-child(odd)");

for (let i = 0; i <= odd.length; i++) {
  odd[i].style.border = "2px solid red";
}
