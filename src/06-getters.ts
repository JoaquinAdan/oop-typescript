export class MyDate {
  #day: number
  constructor(public year: number = 1993, public month: number = 7, day: number = 1) {
    this.#day = day
  }

  private addPadding(value: number): string {
    return value < 10 ? `0${value}` : `${value}`
  }
  printFormat(): string {
    const day = this.addPadding(this.day)
    const month = this.addPadding(this.month)
    const year = this.addPadding(this.year)
    return `${day}/${month}/${year}`
  }
  add(amount: number, type: 'days' | 'months' | 'years') {
    if (type === 'days') this.#day += amount
    if (type === 'months') this.month += amount
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
}

const myDate = new MyDate(2021, 10, 1)
console.log(myDate.printFormat())
// console.log(myDate.getDay())
console.log(myDate.day)
console.log(myDate.isLeapYear)

const myDate2 = new MyDate(2000, 7, 10)
console.log(myDate2.printFormat())
console.log(myDate2.day)
console.log(myDate2.isLeapYear)

const myDate3 = new MyDate(2001, 6, 12)
console.log(myDate3.printFormat())
console.log(myDate3.day)
console.log(myDate3.isLeapYear)

const myDate4 = new MyDate(2004, 1, 22)
console.log(myDate4.printFormat())
console.log(myDate4.day)
console.log(myDate4.isLeapYear)
