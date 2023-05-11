// работа с коллекцией товара в корзине

// { name: 'apple', price: 50 }
// { name: 'pear', price: 54 }
// { name: 'apricot', price: 75 }
// { name: 'lemon', price: 60 }
// { name: 'mango', price: 150 }
// 
//  метод getItems повинен повертати ссилку на массив Items
const cart = {
    items: [],
    getItems() {
      return this.items;
     },
    add(product) {
      this.items.push(product);
     },
    remove(productName) { 
      // якщо нам потрібно перебрати масив по індексам пишем так
      for (let i = 0; i < this.items.length; i += 1) {
        // console.log(this.items[i]);
        if (productName === this.items[i].name) {
          console.log('we found this product', productName);
        }
      }
      // нам цей спосіб тут не підходить
//       for (const item of this.items) {
// console.log(item);
// if (productName === item.name) {
//   console.log('we found this product', productName);
// }
//       }
    },
    clear() { },
    countTotalPrice() { },
    increaseQuantity(productName) { },
    decreaseQuantity(productName) { },
}

console.table(cart.getItems());
// додати об'єкт продукт 25 строка треба додати add(product) і він повинен додатисьв масив items строка 11
cart.add({ name: 'apple', price: 50 });
cart.add({ name: 'pear', price: 54 });
cart.add({ name: 'apricot', price: 75 });
cart.add({ name: 'lemon', price: 60 });
cart.add({ name: 'mango', price: 150 });
cart.add({ name: 'mango', price: 150 });

// console.table(cart.getItems());
// console.table(cart.getItems());

// method remove по властивості треба додати в 18 строку щось
// треба перебрати масив Item, знайти продукт з таким ім'ям і видалити його

cart.remove('apricot');






























// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
  
//   function calculateTotalPrice(productName) {
//     // Change code below this line
//   let totalPrice = 0;
     
//     for (const productName of products) {
//         const price = Object.price[productName];
//         const quantity = Object.quantity(productName);
//         console.log(price);
     
//         totalPrice = price * quantity;
      
//     }
  
//   return totalPrice;
//     // Change code above this line
//   }

// console.log(calculateTotalPrice("Blaster"));
// console.log(calculateTotalPrice("Radar"));