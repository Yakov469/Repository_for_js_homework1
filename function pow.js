function pow(x, y) {
    
    if (!Number.isInteger(y)) {
        return NaN; 
    }
    
    if (y === 0) {
        return 1;
    }

    if (y < 0) {
        x = 1 / x;
        y = -y;
    }

    let result = 1;
    for (let i = 0; i < y; i++) {
        result *= x;
    }
    return result;
}

// Як будемо використовувати:
console.log(pow(2, 3)); // Виведе 8
console.log(pow(4, 3)); // Виведе 64
console.log(pow(2, -1)); // Виведе 0.5
console.log(pow(3, 1.5)); // Виведе NaN
