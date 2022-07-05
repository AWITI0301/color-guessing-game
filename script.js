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
statusText.textContent = "Let's Play!!";

easyBtn.addEventListener("click", function() {

    document.querySelector("h1").style.background = "rgb(233, 119, 119)";

    statusText.textContent = "Let's Play!!";

    boxCount = 3;
    this.style.background = "rgb(233, 119, 119)"
    this.style.color = "white"
    hardBtn.style.background = "white";
    hardBtn.style.color = "rgb(233, 119, 119)";

    colors = generateRandomColor(boxCount);
    pickedColor = colors[Math.floor(Math.random() * 3)];
    s.textContent = pickedColor;

    for (var i = 0; i < boxes.length; i++) {
        if (colors[i]) {
            boxes[i].style.background = colors[i];
        } else {
            boxes[i].style.display = "none";
        }
    }
});

hardBtn.addEventListener("click", function() {
    document.querySelector("h1").style.background = "rgb(233, 119, 119)";

    statusText.textContent = "Let's Play!!";

    this.style.background = "rgb(233, 119, 119)"
    this.style.color = "white"
    easyBtn.style.background = "white";
    easyBtn.style.color = "rgb(233, 119, 119)";

    boxCount = 6;
    colors = generateRandomColor(boxCount);
    pickedColor = colors[Math.floor(Math.random() * 6)];
    console.log(boxes.length)
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].style.background = colors[i];
        boxes[i].style.display = "block";

    }
});