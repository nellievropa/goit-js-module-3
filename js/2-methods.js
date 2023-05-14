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
// playlist.getName(5);

// 1.метод "змінити ім'я" THIS
// 2. addTrack
// 3. updateRating
// 4. getTrackCount

const playlist = {
    name: "My superplaylist",
    rating: 5,
    tracks: ['treck-1', 'treck-2', 'treck-3'],
    trackCount: 3,
    
   changeName(newName) {
        console.log('this внутри changeName:', this);
        this.name = newName;
    },
    addTrack(track) {
this.tracks.push(track);
// оновити кількість треків -  це рішення не дуже гарне, краще записати черер метод 
// this.trackCount = this.tracks.length;
    },
    updateRating(newRating) {
this.rating = newRating;
    },
    getTrackCount() {
        // return this.tracks.length;
        return {trackCount: this.tracks.length};
    },
};

playlist.changeName('Новое имя');
// console.log(playlist);

playlist.addTrack('new track');
playlist.addTrack('new track1');
// console.log(playlist);

playlist.updateRating(5.8);
console.log(playlist);
console.log(playlist.getTrackCount());


// Із автоперевірки

// const bookShelf = {
//   // Change code below this line
//   books: ["The last kingdom", "The guardian of dreams"],
//   getBooks() {
//   return `Returning all books`;
//   },
//   addBook(bookName) {
//       this.books.push(bookName);
      
//     //   return `Adding book ${bookName}`; - на платформі працює тільки так, а в коді - як на 75 строке
//       console.log(`Adding book ${bookName}`);
//   },
//   removeBook(bookName) {
//     const bookIndex = this.books.indexOf(bookName);
//     this.books.splice(bookIndex, 1);
//     return `Deleting book ${bookName}`;
//   },
//   updateBook(oldName, newName) {
//     // const oldName = bookName;
//     this.oldName = newName;
//    return `Updating book ${oldName} to ${newName}`;
//   },
//   // Change code above this line
// };
// bookShelf.getBooks();
// bookShelf.addBook("Haze");
// bookShelf.removeBook('Red sunset');
// bookShelf.updateBook("Sands of Dune", "Dune");



// з автоперевірки , але якось дивно
const bookShelf = {
	books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
	updateBook(oldName, newName) {
		// Change code below this line
		const index = this.books.indexOf(oldName);
		this.books.splice(index, 1, newName);
        return this.books;
   
    // Change code above this line
  },
};
bookShelf.updateBook("Haze", "Dungeon chronicles");
console.log(bookShelf.updateBook());
bookShelf.updateBook("The last kingdom", "Dune");
console.log(bookShelf.updateBook());