console.log("script.js started")
// popup
const nameHero = prompt("Please enter your name", "Fred");
const createVillain = prompt("Please enter the villain's name")

// 
const player = new Hero(nameHero);
const computer = new Villain(nameVillian);

const containerHero = document.getElementById("hero");
const containerVillain = document.getElementById("villain");

containerHero.innerHTML = player.render();
containerVillain.innerHTML = computer.render();