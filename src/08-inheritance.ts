export class Animal {
  constructor(public name: string) {}
  move() {
    console.log('Moving along!')
  }

  greeting() {
    return `Hello, I'm ${this.name}`
  }
}

const fifi = new Animal('Fifi')
console.log(fifi.move())
console.log(fifi.greeting())
