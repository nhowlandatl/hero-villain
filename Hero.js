console.log("Hero.js started...")
class Hero extends Person {
    constructor(name) {
        super(name);
    }
    render(){
        return `
        <h2 id="heroName">${this.name}</h2>
        `
    }
}

// let bob = new Hero('Bob')
// console.log(bob);

