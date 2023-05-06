// робота з колекцією (масивом об'єктів)
const friends = [
    {name: 'Mango', online: false },
    {name: 'Kiwi', online: false },
    {name: 'Apple', online: true },
    {name: 'Poly', online: true },
    {name: 'Uva', online: false },
];

// виводить таблицею
console.table(friends);

// можно працювати як з масивом
// отримуємо доступ до кожно об'єкту масиву
// for (const friend of friends) {
//     console.log(friend.name);

//     friend.newprop = 585;
// }
// console.table(friends);
//  вище ми можемо додати якусь властивість, змінити тощо


// шукаємо друга за ім'ям
const findFriendByName = function (allFriends, friendName) {
    for (const friend of allFriends) {
//         console.log(friend);
// console.log(friend.name);

if(friend.name === friendName) {
    return 'WE found!!!';
}
    }
    
return 'NOT found!!!'
};

// console.log(findFriendByName(friends, 'Poly'));
// console.log(findFriendByName(friends, 'Chelsy'));

// отримати всі імена всіх друзів

const getAllNames = function (allFriends) {
// //    створили пустий масив для збору імен
    const names = [];
    // const totalName = 0;

for (const friend of allFriends) {
    console.log(friend.name);

    names.push(friend.name);
    // totalName += friend;
    
}
// коли цикл закінчився, виведеться масив з імен
    return names;
    // return totalName;
};

console.log(getAllNames(friends));

// із автоперевірки шукаємо по співпадінню з ім'ям, а виводимо значення ціни продукту

const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

console.table(products);

function getProductPrice(productName) {
  // Change code below this line
    const price = '';

    for (const product of productName) {
        console.log(product.name);
    }




  // Change code above this line
};


