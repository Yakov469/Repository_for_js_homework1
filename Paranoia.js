// Регулярний вираз для валідації email
const emailRegex = /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@(?:gmail\.com|yahoo\.com)$/;

// Масив з ел. поштами
var arr = [
    {
        userName: "Yakiv",
        lastName: "Myronchuk",
        email: "Yakiv.Myronchuk@gmail.com"
    },
    {
        userName: "Andrii",
        lastName: "Ivanov",
        email: "andrii123@mail.ru"
    },
    {
        userName: "Dmitro",
        lastName: "Antonov",
        email: "dmitro.Antonov@yahoo.com"
    },
];

// Фільтрація пошт які відповідають критеріям
const trustedEmails = arr.filter(obj => emailRegex.test(obj.email));

// Виводимо результат масивом
console.log(JSON.stringify(trustedEmails, null, 2));
