export class MyService {
  private static instance: MyService | null = null

  private constructor(private name: string) {}

  getName() {
    return this.name
  }

  static create(name: string) {
    if (!MyService.instance) {
      console.log('Deberia entrar una vez')
      MyService.instance = new MyService(name)
    }
    return MyService.instance
  }
}

const myService1 = MyService.create('service1')
console.log(myService1.getName())

const myService2 = MyService.create('service2')
console.log(myService2.getName())

const myService3 = MyService.create('service3')
console.log(myService3.getName())

console.log(myService1 === myService2) // false
