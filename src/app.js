//Variables
const imageCont = document.querySelector(".img-container");
const buttons = document.querySelectorAll(".btn");

//Pictures
const pictures = ["car1", "car2", "car3", "car4", "car5", "car6", "car7"];
let counter = 0;

//Function
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    console.log(button);
    if (button.classList.contains("btn-left")) {
      counter--;
      if (counter < 0) {
        counter = pictures.length - 1;
      }
    }

    if (button.classList.contains("btn-right")) {
      counter++;
      if (counter > pictures.length - 1) {
        counter = 0;
      }
    }

    imageCont.style.backgroundImage = `url("../src/images/${pictures[counter]}.jpg")`;
  });
});
