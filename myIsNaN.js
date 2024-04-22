function IsNaN(value) {
    // Перевірка на не число
    return typeof value === 'number' && value !== value;
}

// Як використовуємо:
console.log(IsNaN(123)); // false
console.log(IsNaN('hello')); // false
console.log(IsNaN(NaN)); // true
console.log(IsNaN(undefined)); // false
