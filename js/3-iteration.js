// Перебор об'єкту
// FOR... IN - не користуватися. бо не крисний

const feedback = {
    good: 5,
    neutral: 12,
    bad: 3,
};
let totalFeedback = 0;
// у конструктора Object усть метод:

const keys = Object.keys(feedback);
console.log(keys);
// і ми отримали масив  КЛЮЧІВ з яким уже можно працювати

for (const key of keys) {
    console.log(key);
    console.log(feedback[key]);

    totalFeedback += feedback[key];
}

console.log('totalFeedback:', totalFeedback);

// когда нужні данніе только о количестве и неважно чего, создаем переменную VALUE
// const values = Object.values(feedback);
// console.log(values);

// // нам повернувся массив значень (не ключів!!!)
// for (const value of values) {
//     console.log(value);

//     totalFeedback += value;
// }
// console.log('totalFeedback: ', totalFeedback);

// із АВтоперевірки
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// for (const key in apartment) {
//     console.log(key);

//     keys.push(key);
     
// }
//  console.log(keys);

// const values = Object.values(apartment);
// // values = Object.values(apartment);

// // for (const value in apartment) {
// //     console.log(value);
// //     values = Object.value;

// //   };
// console.log(values);

// із автоперевірки завдання на власні властивості hasOwnProperty(key)

// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// console.log(advert);
// console.log(apartment);

// for (const key in apartment) {
//   // Change code below this line
// if (apartment.hasOwnProperty(key)) {
//    keys.push(key);
//   values.push(apartment[key]);
// }
 

//   // Change code above this line
// }
// console.log(keys);
// console.log(values);

// із автоперевірки скалдаємо кількість Value

// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
//     const values = Object.values(object);
// for (const value of values) {
//   propCount = values.length;
// }
//   // Change code above this line
//   return propCount;
// }
// console.log(countProps({}));
// console.log(countProps({ name: "Mango", age: 2 }));
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));

// Із автоперевірки виводили масиви різними способами їх виклику

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line

// const keys = Object.keys(apartment);
// console.log(keys);

// for (const value of Object.values(apartment)) {
//     values.push(value);
// }

// console.log(values);

// із автоперевірки : рахуємо

// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;

// const keys = Object.keys(object);
  
//   for (const key of keys) {
//         propCount += 1;
    
//   }

//   return propCount;

//   // Change code above this line
// }
// console.log(countProps({}));
// console.log(countProps({ name: "Mango", age: 2 }));
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));

// рахуємо зарплату

function countTotalSalary(salaries) {
  let totalSalary = 0;
  // Change code below this line
  
    const values = Object.values(salaries);
    
    for (const value of values) {
        totalSalary += value;
    }


  // Change code above this line
  return totalSalary;
}

console.log(countTotalSalary({}));
console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));


// перебрали об'єкт і вивели 2 масиви
const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexColors = [];
const rgbColors = [];
// Change code below this line
for (const color of colors) {
  hexColors.push(color.hex);
  rgbColors.push(color.rgb);
}
console.log(hexColors);
console.log(rgbColors);