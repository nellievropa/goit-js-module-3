
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


const profile = {
    name: 'Jacque Gluke',
    tag: 'jgluke',
    location: 'Ocho Rios, Jamaica',
    avatar: 'https:s3.amazon.com',
    stats: {
        followers: 5683,
        views: 4827,
        likes: 1308,
    },
};


const {name, tag, location, avatar} = profile;
console.log(name, tag, location);