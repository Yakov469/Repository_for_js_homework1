var services = {
    "Заміна масла в двигуні": "400 грн",
    "Заміна фільтра салону + повітряного фільтра": "150 грн",
    "Діагностига ходової": "100 грн",
    
    // Обчислюємо загальну вартість послуг
    price: function() {
      let totalPrice = 0;
      for (let service in this) {
        if (typeof this[service] === 'string' && !isNaN(parseFloat(this[service]))) {
          totalPrice += parseFloat(this[service]);
        }
      }
      return totalPrice;
    },
  
    // Тут я знаходжу мін вартість послуг
    minPrice: function() {
      let minPrice = Infinity;
      for (let service in this) {
        if (typeof this[service] === 'string' && !isNaN(parseFloat(this[service]))) {
          let price = parseFloat(this[service]);
          if (price < minPrice) {
            minPrice = price;
          }
        }
      }
      return minPrice;
    },
  
    // Тут знаходжу макс вартість послуг
    maxPrice: function() {
      let maxPrice = -Infinity;
      for (let service in this) {
        if (typeof this[service] === 'string' && !isNaN(parseFloat(this[service]))) {
          let price = parseFloat(this[service]);
          if (price > maxPrice) {
            maxPrice = price;
          }
        }
      }
      return maxPrice;
    }
  };
  
  // Додаю нову послугу
  services['Розказати майстру як потрібно робити роботу'] = "1200 грн";
  
  // Загальна вартість послуг СТО
  console.log("Загальна вартість послуг:", services.price());
  
  // Найдешевша послуга
  console.log("Мінімальна вартість послуги:", services.minPrice());
  
  // Найдорожча послуга
  console.log("Максимальна вартість послуги:", services.maxPrice());
  