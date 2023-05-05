// Перебор об'єкту
// FOR... IN - не користуватися. бо не крисний

const feedback = {
    good: 5,
    neutral: 12,
    bad: 3,
};
let totalFeedback = 0;
// у конструктора Object усть метод:

// const keys = Object.keys(feedback);
// console.log(keys);
// і ми отримали масив  КЛЮЧІВ з яким уже можно працювати

// for (const key of keys) {
//     console.log(key);
//     console.log(feedback[key]);

//     totalFeedback += feedback[key];
// }

// console.log('totalFeedback:', totalFeedback);

// когда нужні данніе только о количестве и неважно чего, создаем переменную VALUE
const values = Object.values(feedback);
console.log(values);

// нам повернувся массив значень (не ключів!!!)
for (const value of values) {
    console.log(value);

    totalFeedback += value;
}
console.log('totalFeedback: ', totalFeedback);