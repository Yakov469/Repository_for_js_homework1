// Сам оʼєкт
let flower = {
    name: "Rose",
    color: "Red",
    petals: 5,

    getInfo: function() {
      let info = "";
      for (let prop in this) {
        if (typeof this[prop] !== "function") {
          info += `${prop}: ${this[prop]}\n`;
        }
      }
      console.log(info);
    }
  };
  
  // Показуємо інформацію про обʼєкт
  flower.getInfo();
  
  // Додаємо нову властивість
  flower.newProperty = "Довжиною 1м";
  
  // Показуємо інформацію про обʼєкт із уже доданою новою властивістю
  flower.getInfo();
  