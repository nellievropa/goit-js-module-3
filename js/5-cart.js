// работа с коллекцией товара в корзине

// { name: 'apple', price: 50 }
// { name: 'pear', price: 54 }
// { name: 'apricot', price: 75 }
// { name: 'lemon', price: 60 }
// { name: 'mango', price: 150 }

const cart = {
    items: [],
    getItems() { },
    add(product) { },
    remove(productName) { },
    clear() { },
    countTotalPrice() { },
    increaseQuantity(productName) { },
    decreaseQuantity(productName) { },
}

console.table(cart.getItems());

cart.add({ name: 'apple', price: 50 });
cart.add({ name: 'pear', price: 54 });
cart.add({ name: 'apricot', price: 75 });
cart.add({ name: 'lemon', price: 60 });
cart.add({ name: 'mango', price: 150 });

console.table(cart.getItems());



const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];
  
  function calculateTotalPrice(productName) {
    // Change code below this line
  let totalPrice = 0;
     
    for (const productName of products) {
        const price = Object.price[productName];
        const quantity = Object.quantity(productName);
        console.log(price);
     
        totalPrice = price * quantity;
      
    }
  
  return totalPrice;
    // Change code above this line
  }

console.log(calculateTotalPrice("Blaster"));
console.log(calculateTotalPrice("Radar"));