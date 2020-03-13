class Hero extends Person {
    constructor(name) {
        super(name);
    }
    render(){
        return `
        <h2 id="heroName">${this.name}</h2>
        <h2 id="heroHealth">${this.health} hp</h2>
        <h2 id="heroWeapon">${this.weapon.name} (${this.weapon.damage} damage)</h2>
        <img class="card-img-bottom" src="http://archive.rpgamer.com/games/ad_d/icewind/art/artwork05.jpg" alt="">
        `
    }
}

