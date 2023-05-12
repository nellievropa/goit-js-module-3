// работа с коллекцией товара в корзине

// { name: 'apple', price: 50 }
// { name: 'pear', price: 54 }
// { name: 'apricot', price: 75 }
// { name: 'lemon', price: 60 }
// { name: 'mango', price: 150 }
// 
//  метод getItems повинен повертати ссилку на массив Items
const cart = {
  //items - це массив
    items: [],
    getItems() {
      return this.items;
     },
    add(product) {
      this.items.push(product);
     },
    remove(productName) { 
      // якщо нам потрібно перебрати масив по індексам пишем так
      // for (let i = 0; i < this.items.length; i += 1) {
      //   console.log(this.items[i]);
      //   // щоб легше було читати треба спочатку вводити змынні
      //   const item = this.items[i];
      //   if (productName === item.name) {
      //     console.log('we found this product', productName);
      //   }
      // }

      // ще можна теж саме записати з деструктуризацією по name:
      const { items } = this;
      for (let i = 0; i < this.items.length; i += 1) {
               
        const {name} = items[i];
        if (productName === name) {
          console.log('we found this product', productName);
          // коли ми знайшли наш продукт, ми хочемо знати його індекс
          console.log('index: ', i);
          // видаляем продукт з таким індексом, метод splice -деструктивний, він змінює первоначальний об'єкт
          items.splice(i, 1);
          // 1 - в этой записи это количество продуктов!!!

        }
      }


      // нам цей спосіб тут не підходить, бо нам потрібен індекс продукта
//       for (const item of this.items) {
// console.log(item);
// if (productName === item.name) {
//   console.log('we found this product', productName);
// }
//       }

    },
    // method CLEAR должен очищувати корзину повністю, тобто вбрати і записувати пустий масив []
    clear() {
      this.items = [];
     },
    //  порахувати Total price, повинен рахувату загальну суму продуктів в корзині
    countTotalPrice() { 
      // console.log(this.items);
// деструктуризуємо масив
const { items } = this;

      // пройди по массиву і порахуй загальну суму

      let total = 0;
// тоді тут це this прибираємо  for (const item of this.items) і отримуємо
// з усієї інформації нам треба тільки ціна , тому цей код можна переписати так
      // for (const item of items) {
      //   console.log(item);
      //   total += item.price;
      // }
      for (const { price } of items) {
       
        total += price;
      }
      return total;
    },
    increaseQuantity(productName) { },
    decreaseQuantity(productName) { },
}

console.log(cart.getItems());

// додати об'єкт продукт 25 строка треба додати add(product) і він повинен додатисьв масив items строка 11
cart.add({ name: 'apple', price: 50 });
cart.add({ name: 'pear', price: 54 });
cart.add({ name: 'apricot', price: 75 });
cart.add({ name: 'lemon', price: 60 });
cart.add({ name: 'mango', price: 150 });
cart.add({ name: 'mango', price: 150 });

console.table(cart.getItems());


// method remove по властивості треба додати в 18 строку щось
// треба перебрати масив Item, знайти продукт з таким ім'ям і видалити його

cart.remove('mango');
console.table(cart.getItems());

console.log('Total price: ', cart.countTotalPrice());

cart.clear();
console.log(cart.getItems());

cart.countTotalPrice();






















// Із автоперевірки!!!!


// function findMatches(array, ...args) {
//   const matches = []; // Don't change this line
// for (let i = 0; i < array.length; i += 1) {
//   const match = array[i];
// for (let i = 0; i < args.length; i +=1) {
//   if (match === args[i]) {
//     matches.push(args[i]);
//   }
// }
  
// }

//   // Change code above this line
//   return matches;
// }
// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));
// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));
// console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41));



























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