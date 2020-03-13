// popup for hero and villain creation
const nameHero = prompt("Please enter your name", "Fred");
const nameVillain = prompt("Please enter the villain's name")

// create the hero/villain
const player = new Hero(nameHero);
const computer = new Villain(nameVillain);

// equip a weapon to hero and villain
player.equipWeapon(new Weapon("Sting"));
computer.equipWeapon(new Weapon("Glamdring"));


// the divs to show stats
const containerHero = document.getElementById("hero");
const containerVillain = document.getElementById("villain");

// run the function to output stats to divs
containerHero.innerHTML = player.render();
containerVillain.innerHTML = computer.render();


// Hero attack function
document.getElementById("heroAttack").addEventListener("click", function() {
    player.attack(computer);
    document.getElementById("villainHealth").innerHTML = computer.health;
    document.getElementById("attackNotice").innerHTML = "The hero attacked!" 
    if (computer.health < 1) {
        return document.getElementById("attackNotice").innerHTML = "Victory!"
    };
});

// Villain attack function
document.getElementById("villainAttack").addEventListener("click", function() {
    computer.attack(player);
    document.getElementById("heroHealth").innerHTML = player.health;
    document.getElementById("attackNotice").innerHTML = "The villain attacked!"
    if (player.health < 1) {
        return document.getElementById("attackNotice").innerHTML = "Game over!"
    };
});

