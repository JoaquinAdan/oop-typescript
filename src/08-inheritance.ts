export class Animal {
  constructor(public name: string) {}
  move() {
    console.log('Moving along!')
  }

  greeting() {
    return `Hello, I'm ${this.name}`
  }
}

export class Dog extends Animal {
  constructor(name: string, public owner: string) {
    super(name)
  }

  woof(times: number): void {
    for (let i = 0; i < times; i++) {
      console.log('Woof!')
    }
  }
}

// const fifi = new Animal('Fifi')
// fifi.move()
// console.log(fifi.greeting())

const cheis = new Dog('Cheis', 'Nico')
cheis.move()
console.log(cheis.greeting())
cheis.woof(4)
console.log(cheis.owner)
