// Методи об'єкту і this при зверненні до властивостей

// const playlist = {
//     name: "My superplaylist",
//     rating: 5,
//     track: ['treck-1', 'treck-2', 'treck-3'],
//     trackCount: 3,
//     // стара версія
//     // getName: function () {
//     //     console.log('Wow this is getName :)');

//     // нова версія методів ФУНКЦІЇ, тут під капотом- функція, про неї говорять ()
//     getName(a) {
//         console.log('Wow this is getName :)', a);
//     }
// };
// console.log(playlist);

// визвати функцію ():
playlist.getName(5);

// метод "змінити ім'я"

const playlist = {
    name: "My superplaylist",
    rating: 5,
    track: ['treck-1', 'treck-2', 'treck-3'],
    trackCount: 3,
    
   changeName(newName) {
        console.log('this внутри changeName:', this);
    }
};

playlist.changeName('Новое имя')ж
console.log(playlist);