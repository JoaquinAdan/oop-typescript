export class MyDate {
  constructor(public year: number = 1993, public month: number = 7, private day: number = 9) {}

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
    if (type === 'days') this.day += amount
    if (type === 'months') this.month += amount
    if (type === 'years') this.year += amount
  }
  getDay() {
    return this.day
  }
}

const myDate = new MyDate(2021, 10, 1)
console.log(myDate.printFormat())

const myDate2 = new MyDate()
console.log(myDate2.printFormat())

const myDate3 = new MyDate(2022)
console.log(myDate3.printFormat())

const myDate4 = new MyDate(2010, 2)
console.log(myDate4.printFormat())
