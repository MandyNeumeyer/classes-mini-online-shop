**This exercise covers the JavaScript concepts of classes and instance objects**

# :shopping_cart: Mini Online-Shop 

---


## 1. product
:orange_circle: Write a JavaScript class `Product`, as a template of products of an online shop.

The class should have 2 properties:
* a `name` as a string
* a `price` as a number

The constructor should take 2 parameters initializing those properties.

The class should have 2 methods:
* `containedVAT()` - returning 16% of the products price as VAT (value-added tax)
* `toText()` - returning a string with the products name, gross price, the containedVAT and the net price. 

```javascript
    => 24.00 € VAT incl.
    => Adidas running shoes 150.00 € in total. 24.00 € VAT incl. (16%).
```

:orange_circle: Create some instance objects from your template class with the `new` keyword 

Examples:
* tracksuit for 99.99 €
    ```javascript
    let shoes = new Product("tracksuit", 99.99);
    ```
* Puma running shoes 165.99 €
* A pack of 5 socks for 4.99 €

---
## 2. shopping cart

:orange_circle: Write another class `Cart`, as a template of the shopping cart of an online shop.

The class should contain a property:
* `products`, as an array of products.

On creation of an instance of Cart, there will be no products, so the array is empty, and your constructor will have no parameters.

Create two methods for the shopping cart class:
* `addProduct(shoppedProduct)` that takes one parameter.
    * The method should first test, if `shoppedProduct` is an instance of the `Product` class  [mdn instanceof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof) 
    * only if `shoppedProduct` is an instance of Product add it to the array of products otherwise inform the customer, that the product is not available in the shop.
* `getProductInfoCart()`, that takes no parameters.
    * the method should iterate over the array of products
    * for every product contained in the list, call the `toText()` method and print it to the console.
* `.getTotalItemsPrice()`, that takes no parameters.
    * the method should iterate over the array of products and calculate the total of all shopped items as well as the total price for those items, which are currently in the cart.
 


:orange_circle: Create an instance of your shopping cart with the `new` keyword.
```javascript
let cart = new Cart();
```

:orange_circle: Add the product instances, that you created to your shopping cart.

Example:
```javascript
cart.addProduct(shoes);
```
Call the `.getProductInfoCart()` method, to print your shopping cart's content.

Call the `.getTotalItemsPrice()` method, to print your shopping cart's total price as well as total amount of items currently in the cart.



```javascript
    => The total for 2 items in your cart amounts to 249.99 €.
```
