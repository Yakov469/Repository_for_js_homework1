function padStart(str, symbol, length) {
    if (str.length >= length) {
        return str;
    }
    const padding = symbol.repeat(length - str.length);
    return padding + str;
}

function padEnd(str, symbol, length) {
    if (str.length >= length) {
        return str;
    }
    const padding = symbol.repeat(length - str.length);
    return str + padding;
}

function pad(str, symbol, length, isStart) {
    if (str.length >= length) {
        return str;
    }
    const padding = symbol.repeat(length - str.length);
    return isStart ? padding + str : str + padding;
}

// Як використовуємо:
console.log(padStart('testTestovuch', '+', 14)); // Видаємо ++++testTestovuch'
console.log(padEnd('testTestovuch', '+', 14)); // 'Видаємо testTestovuch+++++'
console.log(pad('testTestovuch', '+', 14, true)); // 'Видаємо ++++testTestovuch'
console.log(pad('testTestovuch', '+', 14, false)); // 'Видаємо testTestovuch+++++'
