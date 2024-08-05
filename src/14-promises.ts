;(async () => {
  function delay(time: number) {
    const promise = new Promise<string>((resolve) => {
      setTimeout(() => {
        resolve('true')
      }, time)
    })
    return promise
  }

  async function getProductsFetch() {
    const promise = await fetch('https://api.escuelajs.co/api/v1/products')
    const rta = await promise.json()
    return rta
  }

  console.log('---'.repeat(10))
  const rta = await delay(2000)
  console.log(rta)
  console.log('---'.repeat(10))
  const products = await getProductsFetch()
  console.log(products)
})()
