import {Person} from './Person'

class Villain extends Person {
    constructor(name) {
        super(name);
    }
    render(){
        console.log(this.health)
        console.log(Villain)
       return `
       <div>Hero</div>
       `
    }
}

let demon = new Villain('Balrog');
console.log(demon);