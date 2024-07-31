export class MyDate {
  public day: number
  public month: number
  public year: number
  constructor(day: number, month: number, year: number) {
    this.year = year
    this.month = month
    this.day = day
  }
  addCero(number: number): string {
    return number < 10 ? `0${number}` : `${number}`
  }
  printFormat(): string {
    console.log()
    return `${this.addCero(this.day)}/${this.addCero(this.month)}/${this.addCero(this.year)}`
  }
  add(amount: number, type: 'days' | 'months' | 'years') {
    if (type === 'days') this.day += amount
    if (type === 'months') this.month += amount
    if (type === 'years') this.year += amount
  }
}

const myDate = new MyDate(22, 1, 2021)
console.log(myDate.day)
myDate.day = 23
console.log(myDate.day)
