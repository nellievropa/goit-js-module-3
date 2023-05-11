// REST - збираемо об'єкти в масив

// const profile = {
//     name: 'Jacque Gluke',
//     tag: 'jgluke',
//     location: 'Ocho Rios, Fiji',
//     avatar: 'https:s3.amazon.com',
//     stats: {
//         followers: 5683,
//         views: 4827,
//         likes: 1308,
//     },
// };

// const { name, tag, avatar, ...restProps } = profile;

// все оставшееся поместили в переменную и помещает в конец вверху, шь'я можемо дати будь-яке 
// const restProps = {
//     location: profile.location,
//     stats: profile.stats,
// }
// console.log(name, tag, avatar);
// console.log(restProps);


const fn = function (params) {};
// fn(10, 5, true, [], {}, 6); - не читаеться, бо неясно прощо там взагалі мова
// краще записати її так:
// оце і є патерн внизу, більше чим 3-4 об'єкти треба робити об'єкт настройок(настройку патерну)

fn({
age: 10,
friends: 5,
isOnline: true,
hobbies: [],
games: {},
rating: 6,
});

//  є функція шоу профайл, будем туди щось передавати

// деструктурізація в самому запису функції виглядає так 
// const showProfileInfo = function ({name, tag, location, avatar, 
//     stats: {followers, views, likes}
// });

// можна записувати і так, це однакові записи 43 та 48 рядки
const showProfileInfo = function (userProfile) {
    const {name, tag, location, avatar, ...restProps
        // stats: {followers, views, likes},
} = userProfile;

// console.log(name, tag, location, avatar, 
//     followers, views, likes);
console.log(restProps);
};
// оце наш об'єкт налаштувань!! нижче
// але ми хочемо її деструктуризувати, щоб удобно було працювати і це робимо в 44 рядку
const profile = {
    name: 'Jacque Gluke',
    tag: 'jgluke',
    location: 'Ocho Rios, Fiji',
    avatar: 'https:s3.amazon.com',
    stats: {
        followers: 5683,
        views: 4827,
        likes: 1308,
    },
};

showProfileInfo(profile);






// Із автоперевірки 
// function addOverNum(...args) {
//     let total = 0;
  
//      for (let i = 0; i < args.length; i += 1) {
 
//       if (args[i] > args[0]) {
//         total += args[i];
//     }
  
//   }

//   return total;
//   // Change code above this line
// }
// console.log(addOverNum(50, 15, 27));
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));
// console.log(addOverNum(15, 32, 6, 13, 19, 8));
