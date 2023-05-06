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