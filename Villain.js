console.log("Villian.js started")

class Villain extends Person {
    constructor(name) {
        super(name);
    }
    render(){
        console.log(this.health)
        console.log(Villain)
        return `
        <h2 id="villianName">${this.name}</h2>
        `
    }
}

// let demon = new Villain('Balrog');
// console.log(demon);