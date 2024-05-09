function findValueByKey(companyName, company) {
    // Перевіряю, чи назва поточної компанії співпадає з назвою, яку ми шукаємо
    if (company.name === companyName) {
      return company;
    }
    
    // Перевіряю, чи у поточної компанії є клієнти
    if (company.clients && company.clients.length > 0) {
      // Ітерація по кожному клієнту
      for (let i = 0; i < company.clients.length; i++) {
        const client = company.clients[i];
        // Рекурсивний виклик функції для кожного клієнта
        const result = findValueByKey(companyName, client);
        // Якщо результат не пустий, повертаємо його
        if (result) {
          return result;
        }
      }
    }
    
    // Повертаємо null, якщо компанія не знайдена
    return null;
  }
  
  // Як використовую:
  const company = {
    name: 'Велика Компанія',
    type:'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
      {
        name: 'Клієнт 1',
        type: 'subCompany',
        uses: 'ПО для продажу квитків',
        sells: 'Рішення для продажу квитків',
        partners: [
          {
            name: 'Клієнт 1.1',
            type: 'subSubCompany',
            uses: 'Рішення для продажу квитків',
            sells: 'Рішення для продажу квитків',
          },
          {
            name: 'Клієнт 1.2',
            type: 'subSubCompany',
            uses: 'Рішення для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
              {
                name: 'Клієнт 1.2.3',
                type: 'subSubCompany',
                uses: 'Рішення для продажу квитків',
                sells: 'Рішення для продажу квитків',
              }
            ]
          }
        ]
      },
      {
        name: 'OntargIT',
        type: 'subCompany',
        uses: 'ПО для продажу квитків',
        sells: 'Рішення для продажу квитків'
      },
      {
        name: 'DTEK',
        type: 'subCompany',
        uses: 'ПО для продажу квитків',
        sells: 'Рішення для продажу квитків'
      }
    ]
  };
  
  // Шукаю інформацію про компанію за її назвою
  const result = findValueByKey('OntargIT', company);
  console.log(result);
  