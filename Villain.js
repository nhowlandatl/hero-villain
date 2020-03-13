console.log("Villain.js started")

class Villain extends Person {
    constructor(name) {
        super(name);
    }
    render(){
        return `
        <h2 id="villainName">${this.name}</h2>
        <h2 id="villainHealth">${this.health} hp</h2>
        <h2 id="villainWeapon">${this.weapon.name} (${this.weapon.damage} damage)</h2>
        <img class="card-img-bottom" src="https://neverwintervault.org/sites/neverwintervault.org/files/project/13744/images/1173617157fullres.jpg" alt="">
        `
    }
}
