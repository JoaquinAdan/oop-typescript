import { UpdateProductDto, CreateProductDto } from '../dtos/product.dto'
import { ProductService } from '../models/product-service.model'
import { Product } from '../models/product.model'

export class ProductHttpService implements ProductService {
  private static instance: ProductHttpService | null = null

  static createInstance(): ProductHttpService {
    if (!ProductHttpService.instance) {
      ProductHttpService.instance = new ProductHttpService()
    }
    return ProductHttpService.instance
  }

  private url = 'https://api.escuelajs.co/api/v1/products'

  async getAll(): Promise<Product[]> {
    const promise = await fetch(this.url)
    const rta: Product[] = await promise.json()
    return rta
  }

  async update(id: Product['id'], changes: UpdateProductDto): Promise<Product> {
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

  async create(dto: CreateProductDto): Promise<Product> {
    const response = await fetch(this.url, {
      method: 'POST',
      body: JSON.stringify(dto),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const rta: Product = await response.json()
    return rta
  }

  async findOne(id: Product['id']): Promise<Product | undefined> {
    const response = await fetch(`${this.url}/${id}`)
    if (response.status === 404) return undefined
    const rta: Product = await response.json()
    return rta
  }
}
