function pow(x, y) {
    let result = 1;
    for (let i = 0; i < y; i++) {
        result *= x;
    }
    return result;
}

// Приклади використання:
console.log(pow(4, 3)); // Виведе 64
