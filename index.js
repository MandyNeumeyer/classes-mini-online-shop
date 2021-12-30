class Product {
    constructor(name, price) {
        console.log(typeof price);
       this.name = name;
       this.price = price;
    }
    containedVAT() {
        const taxIncluded = (this.price *0.16)
        return `${taxIncluded.toFixed(2)} € VAT incl.`
    }


    toText() {
        return `${this.name} ${this.price.toFixed(2)} € in total. ${this.containedVAT()} (16%).`;;
    }

}

//created some products for the shop
const adidasShoes = new Product('Adidas running shoes', 150.00);
const paintingSet = new Product('tracksuit', 99.99)

console.log(adidasShoes.containedVAT());
console.log(adidasShoes.toText());

class Cart {
    constructor () {
        this.products = [];
    }
    addProduct(shoppedProduct) {
        console.log(shoppedProduct);
        if (shoppedProduct instanceof Product) {
            console.log(shoppedProduct instanceof Product);
            this.products.push(shoppedProduct)
            console.log("these items are in your cart",this.products);
        }else {
            return `'Unfortunately, this product is not available in our shop!'`;
        }
    }
    getProductInfoCart(){
        const info = this.products.map(item => item.toText())
        return info
    }


    getTotalPriceCart() {
        const sum = this.products.map(element => Number(element.price)).reduce((acc, curr) => acc + curr, 0);
        return `The total for ${this.products.length} items in your cart amounts to ${sum} €.` 
    }
    

}

const customerOneCart = new Cart

//not an instance of Product class 
// console.log(customerOneCart.addProduct({ name: 'painting brush', price: 20 }));
// 'Unfortunately, this product is not available in our shop!'

//added products
console.log(customerOneCart.addProduct(adidasShoes));
console.log(customerOneCart.addProduct(paintingSet));
console.log(customerOneCart.getTotalPriceCart());
console.log(customerOneCart.getProductInfoCart());

