class Product {
  constructor(name, price) {
    this.name = name
    this.price = price
  }

  containedVAT() {
    const taxIncluded = this.price * 0.16
    return `${taxIncluded.toFixed(2)} € VAT incl.`
  }

  toText() {
    return `${this.name} ${this.price.toFixed(2)} € in total. ${this.containedVAT()} (16%).`
  }
}

class Cart {
  constructor() {
    this.products = []
  }

  addProduct(shoppedProduct) {
    if (shoppedProduct instanceof Product) {
      this.products.push(shoppedProduct)
      return `Your shopping cart now contains ${this.products.length} products`
    } else {
      return `Unfortunately, this product is not available in our shop!`
    }
  }

  getProductInfoCart() {
    return this.products.map(item => item.toText())
  }

  getTotalPriceCart() {
    const sum = this.products.map(element => Number(element.price)).reduce((acc, curr) => acc + curr, 0)
    return `The total for ${this.products.length} items in your cart amounts to ${sum} €.`
  }
}

// Create products
const adidasShoes = new Product("Adidas running shoes", 150.0)
const paintingSet = new Product("tracksuit", 99.99999)

// Test products
console.log(adidasShoes.toText())
console.log(adidasShoes.containedVAT())

// Create cart
const cart = new Cart()

// Test cart
console.log(cart.addProduct({ name: 'painting brush', price: 20 })) // Fails; not a product!
console.log(cart.addProduct(adidasShoes))
console.log(cart.addProduct(paintingSet))
console.log(cart.getTotalPriceCart())
console.log(cart.getProductInfoCart())
