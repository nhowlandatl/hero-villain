class Weapon {
    constructor(name) {
        this.name = name;
        this.damage = Math.floor(Math.random() * 20) + 10;
    }
}


let sting = new Weapon('Sting');
console.log(sting);