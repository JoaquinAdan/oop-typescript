export class MyDate {
  #day: number
  #month: number
  constructor(public year: number = 1993, month: number = 7, day: number = 1) {
    this.#day = day
    this.#month = month
  }

  private addPadding(value: number): string {
    return value < 10 ? `0${value}` : `${value}`
  }
  printFormat(): string {
    const day = this.addPadding(this.#day)
    const month = this.addPadding(this.#month)
    const year = this.addPadding(this.year)
    return `${day}/${month}/${year}`
  }
  add(amount: number, type: 'days' | 'months' | 'years') {
    if (type === 'days') this.#day += amount
    if (type === 'months') this.#month += amount
    if (type === 'years') this.year += amount
  }
  get day() {
    return this.#day
  }
  get isLeapYear(): boolean {
    if (this.year % 400 === 0) return true
    if (this.year % 100 === 0) return false
    return this.year % 4 === 0
  }
  get month() {
    return this.#month
  }
  set month(newValue: number) {
    if (newValue < 1 || newValue > 12) throw new Error('Invalid month')
    this.#month = newValue
  }
}

const myDate = new MyDate(2021, 10, 1)
console.log(myDate.printFormat())
myDate.month = 4
console.log('run', myDate.month)
myDate.month = 78
console.log('Esto no debe aparacer', myDate.month)
