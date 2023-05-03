// що таке об'єкт і як записується!!!

const playlist = {
    name: "My superplaylist",
    rating: 5,
    track: ['treck-1', 'treck-2', 'treck-3'],
    trackCount: 3,
};
// Додати властивість?
playlist.wowqe = 5;

// якщо така властивість уже була, то вона буде перезаписана
playlist.rating = 10;

// console.log(playlist);

// у об'єкта завжди запис тільки такий: Name = {};- це літерал об'єкту!!
// ще є літерал змінної і визова змінної : const x ={};  i console.log({}); - ці 3 випадки, коли {}
//це літерал! він присвоює данні/параметри завжди справа від =
// return {}; - це також літерал 

// в усіх інших випадках { } - це область видимості!

// Доступ до плейлисту, що ми створили вище:

// 1. звертання до імені об'єкту: .свойство

// console.log(playlist.rating);
console.log(playlist.track);
// console.log(playlist.name);

// коли ім'я зберігається у змінній const propertyName = 'tracks';
// щоб до неї звернутися, робимо наступний запис:

console.log(playlist['track']);


// короткая запись свойств

const username = 'Mango';
const email = 'mangomail.com';

const singupData = {

    // username: username,
        // якщо властивість і її назва однакові, можно записати так:
        username,
    email: email,
}
console.log(singupData);

// властивості, що вираховуються (тег <input name="color" value="tomato">)
// бо ці данні можно змінювати:
const inputName = 'color1235'; 
const inputValue = 'tomato';

// щоб вивести строку color: tomato треба засипати
const colorPickerData = {
// [inputName]: 5,
[inputValue]: 'this is color',
[inputName]: inputValue,
}

console.log(colorPickerData);

// складні типи console.log[] === []; два масиви не рівні друг друг тому, що у них різні адреси, 2 різних місця в пам'яті, тому вони не рівні
// теж саме з об'єктами: складний тип і тому 2 об'єкти можуть бути рівні тільки тоді, коли це посилання на один об'єкт, одну адресу


// const a = { x: 1, y: 2};
// const b = a;

// в консоль виводиться фальс
// console.log({ a: 1 } === { a: 1 });
// тут в консольвиведеться тру, тому що в Б записується посилання (Ссилка) на А
// console.log(b === a);

// a.c = 100;
// b.c = 150;

// вони рівні, бо ссика на них одна
// console.log(a);
// console.log(b);

// масив і функція- це об'єкти

// massive
const a = [1, 2, 3, 4];

a.hello = ':)';
console.log(a);

// Function

const fn = function () {
    console.log('hello');
}

fn.hello = ':)';
console.dir(fn.hello);
