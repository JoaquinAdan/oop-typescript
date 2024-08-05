import { Animal, Dog } from './09-protected'

const animal = new Animal('Elite')
animal.greeting()

const puppy = new Dog('Puppy', 'Joaco')
puppy.greeting()
puppy.woof(2)
