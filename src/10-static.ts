console.log('Math.PI', Math.PI)
console.log('Math.max', Math.max(1, 2, 3, 4, 1, 2, 2, 8, 6))

class MyMath {
  static readonly PI = 3.14
  static max(...numbers: number[]) {
    return numbers.reduce((max, item) => (max > item ? max : item))
  }
}

console.log('MyMath.PI', MyMath.PI)
console.log('MyMath.max', MyMath.max(-1, -4, -2, -9, -23, -10))
