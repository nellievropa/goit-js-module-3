// робота з колекцією (масивом об'єктів)
const friends = [
    {name: 'Mango', online: false },
    {name: 'Kiwi', online: false },
    {name: 'Apple', online: true },
    {name: 'Poly', online: true },
    {name: 'Uva', online: false },
];

// виводить таблицею
// console.table(friends);

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
    // console.log(friend.name);

    names.push(friend.name);
    // totalName += friend;
    
}
// коли цикл закінчився, виведеться масив з імен
    return names;
    // return totalName;
};
// console.log(getAllNames(friends));

// получить всех друзей , которіе онлайн и всю информацию о них

// const getOnlineFriends = function (allFriends) {
//     const onlineFriends = [];

//     for (const friend of allFriends) {
//         console.log(friend);

//         if (friend.online) {
//             onlineFriends.push(friend);
//         }
//     }
//     return onlineFriends;
// };
// console.log(getOnlineFriends(friends));


// получить все друзей, которіе оффлайн

const getOfflineFriends = function (allFriends) {
    const offlineFriends = [];

    for (const friend of allFriends) {
        // console.log(friend);
// friend.online === false - це теж саме, що нижче записано
        if (!friend.online) {
            offlineFriends.push(friend);
        }
    }
    return offlineFriends;
};
console.log(getOfflineFriends(friends));

// щоб вивести зразу обидва масиви і онлай і офлайн

// const getFriendsByOnlineStatus = function (allFriends) {
//     const friendByStatus = {
//         online: [],
//         offline: []
//     };
//     for (const friend of allFriends) {
//         console.log(friend);
//         if (friend.online) {
//             friendByStatus.online.push(friend);
//             continue;
//             // тоді else не потрібен
//         }
//         friendByStatus.offline.push(friend);
// }

//     return friendByStatus;
// }

// console.log(getFriendsByOnlineStatus(friends));

// как узнать количество свойств в этос объекте,?

// шукаемо об'єкт продукту за ім'ям, а виводимо його ціну

// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
  
//   function getProductPrice(productName) {
//     // Change code below this line
   
//         for (const product of products) {
//           // console.log(product.price);
          
//           if (product.name === productName) {
//               return product.price;
//           }
              
//       }
//       return null;
//     // Change code above this line
//   };
//   console.log(getProductPrice(products));


const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];
  
  function getAllPropValues(propName) {
    // Change code below this line
//   const massiveOfProducts = Object.value;
  
    for (const product of products) {
       if (product.keys === propName)
         return get(product.value);
    }
  
  return [];
    // Change code above this line
  }
  console.log(getAllPropValues("name"));
  console.log(getAllPropValues("quantity"));


const x = {
    a: 1,
    b: 25,
    c: 65,
    d: 100
}

console.log(Object.keys(x).length);























