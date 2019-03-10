export default class Greeting {
    constructor(name) {
        this.name = name;
    }

    greet() {
        return `Welcome, ${this.name}`;
    }

    reverseName() {
        return this.name.split('').reverse().join('');
    }
}
