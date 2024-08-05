import { Product } from './models/product.model'
;(async () => {
  async function getProductsFetch(): Promise<Product[]> {
    const promise = await fetch('https://api.escuelajs.co/api/v1/products')
    const rta: Product[] = await promise.json()
    return rta
  }

  const products = await getProductsFetch()
  console.log(products.map((item) => `${item.id} - ${item.title}`))
})()
