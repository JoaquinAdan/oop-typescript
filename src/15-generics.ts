import { Dog } from './09-protected'

// function getValue(value: number | string) {
//   return value
// }

// function getValue(value: unknown) {
//   return value
// }

function getValue<T>(value: T) {
  const array: T[] = [value]
  return value
}

getValue<number>(12).toFixed(2)
getValue<string>('12').toLowerCase()
getValue<number[]>([11, 2, 3]).forEach
const fifi = new Dog('fifi', 'Joaco')
getValue<Dog>(fifi).greeting()
