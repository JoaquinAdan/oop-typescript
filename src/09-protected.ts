export abstract class Animal {
  constructor(protected name: string) {}
  move() {
    console.log('Moving along!')
  }

  greeting() {
    return `Hello, I'm ${this.name}`
  }

  protected doSomething() {
    console.log('Doing something...')
  }
}

export class Dog extends Animal {
  constructor(name: string, public owner: string) {
    super(name)
  }

  woof(times: number): void {
    for (let i = 0; i < times; i++) {
      console.log(`Woof! ${this.name}`)
    }
    this.doSomething()
  }
  move() {
    console.log('Moving as a dog')
    super.move()
  }
}

// const fifi = new Animal('Fifi')
// fifi.move()
// console.log(fifi.greeting())

const cheis = new Dog('Cheis', 'Nico')
cheis.woof(1)
cheis.move()
