console.log("script.js started")
// popup
const nameHero = prompt("Please enter your name", "Fred");
const nameVillain = prompt("Please enter the villain's name")

// create the hero/villain
const player = new Hero(nameHero);
const computer = new Villain(nameVillain);

// equip weapon to hero
player.equipWeapon(new Weapon("Sting"));
computer.equipWeapon(new Weapon("Glamdring"));

const containerHero = document.getElementById("hero");
const containerVillain = document.getElementById("villain");

containerHero.innerHTML = player.render();
containerVillain.innerHTML = computer.render();


// Hero attack 
document.getElementById("heroAttack").addEventListener("click", function() {
    player.attack(computer);
    computerHealth.innerHTML = computer.health;
    computer.attack(player);
    playerHealth.innerHTML = computer.health;
});

// Update villain health
