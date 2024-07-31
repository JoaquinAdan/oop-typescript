export class MyDate {
  private day: number
  private month: number
  private year: number
  constructor(day: number, month: number, year: number) {
    this.year = year
    this.month = month
    this.day = day
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
    if (type === 'days') this.day += amount
    if (type === 'months') this.month += amount
    if (type === 'years') this.year += amount
  }
  getDay() {
    return this.day
  }
}

const myDate = new MyDate(10, 1, 2021)
console.log(myDate.printFormat())
console.log(myDate.addPadding(2))
