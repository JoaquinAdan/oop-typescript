const date = new Date()
date.getHours()
date.getTime()
date.toISOString()

const date2 = new Date(1993, 1, 12) // 0 enero, 11 diciembre
date2.getHours()
date2.getTime()
date2.toISOString()

console.log(date)
console.log(date2)

let myVar

export class MyDate {
  year: number
  month: number
  day: number
  constructor(year: number, month: number, day: number) {
    this.year = 2021
    this.month = 1
    this.day = 1
  }
}

const myDate = new MyDate(2021, 1, 1)

console.log(myDate)