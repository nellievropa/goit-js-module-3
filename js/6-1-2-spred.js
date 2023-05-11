
// method CONCAT and (...)SPRAY 

// Array.prototype.concat() це = ...spred
// дозволяє взяти 2 або більше масива і зробити одни!!!

// const numbers = [1, 2, 3, 5].concat([4, 7, 9], [11,12,58])

// возьми масив [1, 2, 3, 5] и сделай ... новій масив( распіли его в новий масив)

// const numbers = [0, 3, 21, ...[1, 2, 3, 5], 4, 6, ...[54, 8, 7], ...[4, 7, 9]];

// console.log(numbers);

// пошук самої маленької або великої температури, 
// будемо використовувати Math.max() or Math.min()


// const temps = [18, 15, 32, 54, 74, 29];

// console.log(Math.max(1, 5, 45,  21));
// працює тільки з елементами, не з масивами!!!
// не спрацює console.log(Math.max(temps))!!!

// console.log(Math.max(...temps));
// console.log(Math.min(...temps));

// щоб було зрозуміло : це аналогічний запис
// Math.max(18, 15, 32, 54, 74, 29);

// const a = [1, 2, 3]
// ничже в змінну Б додасться посилання на А
// const b = [a];

// з АВТОПЕРЕВІРКИ
// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);

// console.log(bestScore);
// console.log(worstScore);



// якщо А буде із об'єктів То виглядатиме так

// const a = [{x: 5}, {y: 2}, {z: 6}];
// const b = [...a];

// console.log('a: ', a);
// console.log('b: ', b);

// складні масиви передаються за посиланням , тому 
// console.log(a[0] === b[0]);
// але самі масиви між собою не рвні!
// console.log(a === b);
// якщо ми додамо елемент в массив А, то він додасться і в Б, бо до них веде одна ссилка(посилання)
// a[0].x = 1000;
// console.log('a: ', a);
// console.log('b: ', b);

// *
// Сшиваємо декілька масивів 

// const lastWeekTemps = [1, 2, 7];
// const currentWeekTemps = [4, 12, 17];
// const nextWeekTemps = [13, 21, 19];

// const xx = lastWeekTemps.concat(currentWeekTemps, nextWeekTemps);
// console.log(xx);

// const allTemps =[...lastWeekTemps, ...currentWeekTemps, ...nextWeekTemps];
// console.log(allTemps);

// *
// распіление Об'єктів

// const a = { x: 1, y: 3, g: { hello: 'world!!!'} };
// const b = { x: 5, z: 6 };

// раніше було так 
// const c = Object.assign({ x: 15 }, a, b);

// зараз ми записуємо так:

// const c = {name: 'Mango',
//  ...a,
//  x: 10,
// ...b,
// y: 25
// };

// console.log(c);


// приклад 

// const defaultSettings = {
//     theme: 'light',
//     showNotification: true,
//     hideSidebar: false,
// };

// const userSettings = {
//     showNotification: false,
//     hideSidebar: true,
// };

// const finalSettings = {
//     ...defaultSettings,
//     ...userSettings,
// };

// console.log(finalSettings);


// ДЕСТРУКТУРІЗАЦІЯ ОБ'єкту

// - значення за замовчуванням
// ім'я змінної відмінне від ім'я властивості

// const playlist = {
//     name: "My super playlist",
//     rating: 5,
//     tracks: ['track-1', 'track-2', 'track-3'],
//     trackCount: 3,
//     // author: 'Mango'
// };

// щою не писати такі довгі звертання до властивостей об'єкту

// console.log(
//     playlist.name,
//     playlist.rating,
//     playlist.tracks,
//     playlist.trackCount,
// );

// придумали ДЕСТРУКТУРІЗАЦІЮ об'єкту, яка записується так {   }

// const { rating, tracks, name, trackCount: numberOfTracks = 9, author = 'user' } = playlist;
// console.log(rating);
// console.log(tracks);
// console.log(name);
// console.log(trackCount);
// console.log(author);
// є можливість переназвати властивості
// console.log(numberOfTracks);

// можно вивести і так:
// console.log(
//     name,
//     rating,
//     tracks,
//     // trackCount,
//     numberOfTracks
// );

// глибока деструктуризація( при вкладених об'єктах)


// const profile = {
//     name: 'Jacque Gluke',
//     tag: 'jgluke',
//     // location: 'Ocho Rios, Jamaica',
//     avatar: 'https:s3.amazon.com',
//     stats: {
//         followers: 5683,
//         views: 4827,
//         likes: 1308,
//     },
// };


// const { name, tag, avatar, stats: { followers, views, likes }, } = profile;
//це перший способ вище
// це другий способ нижче, записи аналогічні
// const { followers, views, likes } = stats;

// і все це можна звести до такого записуЖ
const name = profile.name;
const tag = profile.tag;
const followers = profile.stats.followers;

// console.log(name, tag, avatar, followers, views, likes);


// деструктуризація массиву!!!

const rgb = [255, 100, 80];
// записується деструктуризація так:
// const [a, b, c] = rgb;
// в якому порядку записані змінні - в такому ж порядку туди попадуть данні
// якщо треба пропустити властивість, то пишем так, але тоді і виводимо тільки 2 властивості
const [a, , c] = rgb;
console.log(a, c);

// Це рейтінг авторів і ми будемо з ним працювати

const authors = {
    kiwi: 4,
    poly: 7,
    ajax: 8,
    mango: 6,
};

// перший метод найти найвищий рейтинг , але не видасть ім'я автора
// const rating = Object.values(authors);
// console.log(Math.max(...rating));

// Другий метод
// const keys = Object.keys(authors);

// for (const key of keys) {
//     console.log(key);
//     console.log(authors[key]);
// }

// ще один 3 метод через entries -буде виводитись масивами

const entries = Object.entries(authors);
//  console.log(entries);

 for (const [ name, rating] of entries) {
    // console.log(entry);
    // те, що нижче можна записати взагалі так, як вище
    // const [ name, rating] = entry;
// те, що нижче можна записати ще й так:
//   const name = entry[0];-перший елемент масиву
//   const rating = entry[1]; - другий елемент масиву

  console.log(name, rating);
 }

//  Із автоперевірки - звернути увагу на те, як записана деструктурізація!
//  const colors = [
//     { hex: "#f44336", rgb: "244,67,54" },
//     { hex: "#2196f3", rgb: "33,150,243" },
//     { hex: "#4caf50", rgb: "76,175,80" },
//     { hex: "#ffeb3b", rgb: "255,235,59" },
//   ];
  
//   const hexColors = [];
//   const rgbColors = [];
//   // Change code below this line
  
//   for (const {hex, rgb} of colors) {
  
//     hexColors.push(hex);
//     rgbColors.push(rgb);
//   }
//    console.log(hexColors);
//   console.log(rgbColors);

// ІЗ автоперевірки : на увагу до записів

const forecast = {
    today: {
      low: 28,
      high: 32,
      icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
    },
    tomorrow: {
      low: 27,
      high: 31,
    },
  };
  // Change code below this line
  
//   const highToday = forecast.today.high;
//   const lowToday = forecast.today.low;
//   const todayIcon = forecast.today.icon;
  
//   const highTomorrow = forecast.tomorrow.high;
//   const lowTomorrow = forecast.tomorrow.low;
//   const tomorrowIcon = forecast.tomorrow.icon;
  
const {today:  {low: lowToday, 
    high: highToday, 
icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg"}, 
tomorrow: {low: lowTomorrow, 
      high: highTomorrow, 
      icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"} } = forecast;


// З автоперевірки : синтаксис!!!

    //   function calculateMeanTemperature(forecast) {
    //     // const todayLow = forecast.today.low;
    //     // const todayHigh = forecast.today.high;
    //     // const tomorrowLow = forecast.tomorrow.low;
    //     // const tomorrowHigh = forecast.tomorrow.high;
    //   const { today: {low: todayLow, high: todayHigh}, tomorrow: {low: tomorrowLow, high: tomorrowHigh} } = forecast;
    //     // Change code above this line
    //     return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
    //   }
    //   console.log (calculateMeanTemperature({ today: {low: 28, high: 32}, tomorrow: {low: 25, high: 29} }));


    // З автоперевірки : робота з функціями- не забувати повертати значення!!!
    function makeTask(data) {
      const completed = false;
      const category = "General";
      const priority = "Normal";
      // Change code below this line
    const makeTask = {completed, category, priority, ...data};
      return makeTask;
      // Change code above this line
    }
    console.log(makeTask({}));
    console.log(makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }));
    console.log(makeTask({ category: "Finance", text: "Take interest" }));
    console.log(makeTask({ priority: "Low", text: "Choose shampoo" }));
    console.log(makeTask({ text: "Buy bread" }));

    function multiply(...args) {
      console.log(args); // масив усіх аргументів
    }
    
    multiply(1, 2);
    multiply(1, 2, 3);
    multiply(1, 2, 3, 4);