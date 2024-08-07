import { UpdateProductDto } from '../dtos/product.dto'
import { Product } from '../models/product.model'
import { Category } from './../models/category.model'

export class BaseHttpService<T> {
  // data: T[] = []
  constructor(protected url: string) {}

  async getAll(): Promise<T[]> {
    const response = await fetch(this.url)
    const data: T[] = await response.json()
    return data
  }

  async update<ID, DTO>(id: ID, changes: DTO): Promise<Product> {
    const data = await fetch(`${this.url}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(changes),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const rta: Product = await data.json()
    return rta
  }
}

// const service = new BaseHttpService<string>()
// service.getAll()

// const service1 = new BaseHttpService<Category>()
// service1.getAll()

;(async () => {
  const url1 = 'https://api.escuelajs.co/api/v1/products'
  const productsService = new BaseHttpService<Product>(url1)

  const data = await productsService.getAll()
  console.log(data.length + ' products')
  productsService.update<Product['id'], UpdateProductDto>(1, {
    title: 'Calabaza',
  })

  //  ------------------------------------------------------
  const url2 = 'https://api.escuelajs.co/api/v1/categories'
  const categoryService = new BaseHttpService<Category>(url2)

  const data2 = await categoryService.getAll()
  console.log(data2.length + ' categories')
})()
