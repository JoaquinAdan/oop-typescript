import { ProductHttpService } from './services/product-http.service'
;(async () => {
  try {
    const productService = ProductHttpService.createInstance()
    console.log('--'.repeat(10))
    console.log('getAll')
    const products = await productService.getAll()
    console.log(products.length)
    console.log(products.map((item) => item.price))

    const productId = products[0].id
    console.log('--'.repeat(10))
    console.log('update')
    await productService.update(productId, { price: 1000, title: 'nuevo titlelazo', description: 'new description' })

    console.log('--'.repeat(10))
    console.log('findOne')
    const product = await productService.findOne(productId)
    console.log(product)
  } catch (error) {
    console.error(error)
  }
  console.log('a salvo de errores')
})()
