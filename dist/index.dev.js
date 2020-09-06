"use strict";

var colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
var btn = document.getElementById("btn");
var color = document.querySelector(".color");
btn.addEventListener("click", function () {
  //get random number betwwen 0 & 3
  //const randoNumber = 1;
  var randomNumber = getRandomNumber();
  console.log(randomNumber);
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}