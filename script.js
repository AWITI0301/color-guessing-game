var boxes = document.querySelectorAll(".box");
var s = document.querySelector('.rgbspan');
var colors = generateRandomColor(6);
var pickedColor = colors[Math.floor(Math.random() * 6)];
s.textContent = pickedColor;

var playbtn = document.querySelector("#playAgain");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var boxCount = 6;
var statusText = document.querySelector(".status")