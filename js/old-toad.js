// Із автоперевірки : код працює

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//       return this.potions;
     
//   },
//   addPotion(newPotion) {

//     for(let i = 0; i < this.potions.length; i += 1) {
//     if(this.potions[i].name === newPotion.name) {
//      return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//         }
//     this.potions.push(newPotion); 
//     },


//   removePotion(potionName) {
//   for(let i = 0; i < this.potions.length; i += 1) {
      
//    if (potionName === this.potions[i].name) {
//      this.potions.splice(i, 1);
//      return;
//  }
//  }
//  return `Potion ${potionName} is not in inventory!`;
// },

//   updatePotionName(oldName, newName) {
//     for(let i = 0; i < this.potions.length; i += 1)  {

//       const potionIndex = this.potions.indexOf(oldName);
//       if (oldName === this.potions[i].name) {
//         this.potions[i].name = newName;
// застосуэм метод splice - важливо СИНТАКСИС
// this.potions.splice(i, 1, {...this.potions[i], name: newName});
//         return;
//       }
//     }
//     return `Potion ${oldName} is not in inventory!`;
//   },
//   // Change code above this line
// };

// // console.log(atTheOldToad.getPotions());

// atTheOldToad.addPotion({ name: "Dragon breath", price: 700 });
// atTheOldToad.addPotion({ name: "Invisibility", price: 620 });
// atTheOldToad.addPotion({ name: "Stone skin", price: 240 });
// atTheOldToad.addPotion({ name: "Power potion", price: 270 });
// console.log(atTheOldToad.getPotions());

// // atTheOldToad.removePotion("Dragon breath");
// // atTheOldToad.removePotion("Speed potion");
// // console.log(atTheOldToad.getPotions());

// atTheOldToad.updatePotionName("Dragon breath", "Polymorth");
// atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion");
// console.log(atTheOldToad.getPotions());


// Із автоперевірки рефакторимо код за допомогою For.. OF
const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
      return this.potions;
     
  },
  addPotion(newPotion) {

    for(const potion of this.potions) {
    if(potion.name === newPotion.name) {
     return `Error! Potion ${newPotion.name} is already in your inventory!`;
      }
        }
    this.potions.push(newPotion); 
    },


  removePotion(potionName) {
  for(const potion of this.potions) {
      
   if (potionName === potion.name) {
    // щоб використати сплайс, треба створити змінну внутрі циклу 
    const index = this.potions.indexOf(potion)
     this.potions.splice(index, 1);
     return;
 }
 }
 return `Potion ${potionName} is not in inventory!`;
},

  updatePotionName(oldName, newName) {
    for(const potion of this.potions)  {

       if(oldName === potion.name) {
        // знаходим индекс внутри циклу
        const index = this.potions.indexOf(potion);
        // застосуэм метод splice, розпилюєм об'єкт Potion і створюємо ще новий 
        this.potions.splice(index, 1, {...potion, name: newName});
        return;
      }
    }
    return `Potion ${oldName} is not in inventory!`;
  },
  // Change code above this line
};

atTheOldToad.addPotion({ name: "Dragon breath", price: 700 });
atTheOldToad.addPotion({ name: "Invisibility", price: 620 });
atTheOldToad.addPotion({ name: "Stone skin", price: 240 });
atTheOldToad.addPotion({ name: "Power potion", price: 270 });
console.log(atTheOldToad.getPotions());

atTheOldToad.removePotion("Dragon breath");
atTheOldToad.removePotion("Speed potion");
console.log(atTheOldToad.getPotions());

atTheOldToad.updatePotionName("Dragon breath", "Polymorth");
atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion");
console.log(atTheOldToad.getPotions());