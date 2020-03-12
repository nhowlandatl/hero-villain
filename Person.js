class Person {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.weapon = "";
    }

    equipWeapon(weapon) {
        this.weapon = weapon;
    }
    attack(person) {
        person.health - person.weapon;
    }
    
}

export default {Person};

let fred = new Person('Fred');
console.log(fred);
